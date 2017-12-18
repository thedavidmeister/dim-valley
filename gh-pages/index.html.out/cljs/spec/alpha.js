// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__8973__auto__ = (((spec == null))?null:spec);
var m__8974__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8974__auto__.call(null,spec,x));
} else {
var m__8974__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8974__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__8973__auto__ = (((spec == null))?null:spec);
var m__8974__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8974__auto__.call(null,spec,y));
} else {
var m__8974__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8974__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__8973__auto__ = (((spec == null))?null:spec);
var m__8974__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$5 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8974__auto__.call(null,spec,path,via,in$,x));
} else {
var m__8974__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8974__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__8973__auto__ = (((spec == null))?null:spec);
var m__8974__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8974__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__8974__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8974__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__8973__auto__ = (((spec == null))?null:spec);
var m__8974__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8974__auto__.call(null,spec,gfn));
} else {
var m__8974__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8974__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__8973__auto__ = (((spec == null))?null:spec);
var m__8974__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__8974__auto__.call(null,spec));
} else {
var m__8974__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__8974__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.alpha.registry_ref !== 'undefined'){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
<<<<<<< HEAD
var G__14387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__14387;
=======
var G__15551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__15551;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = cljs.core.deref(cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if(!(cljs.core.ident_QMARK_(spec))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__8240__auto__ = cljs.spec.alpha.reg_resolve(k);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__8228__auto__ = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__8228__auto__)){
return x;
} else {
return and__8228__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__8240__auto__ = (function (){var and__8228__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__8228__auto__){
return cljs.spec.alpha.reg_resolve(spec_or_k);
} else {
return and__8228__auto__;
}
})();
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var or__8240__auto____$1 = cljs.spec.alpha.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__8240__auto____$1)){
return or__8240__auto____$1;
} else {
var or__8240__auto____$2 = cljs.spec.alpha.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__8240__auto____$2)){
return or__8240__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(s))){
return cljs.spec.alpha.with_name((cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.alpha.regex_spec_impl.call(null,s,null)),cljs.spec.alpha.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__8240__auto__ = cljs.spec.alpha.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
<<<<<<< HEAD
var G__14392 = arguments.length;
switch (G__14392) {
=======
var G__15556 = arguments.length;
switch (G__15556) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__8973__auto__ = (((_ == null))?null:_);
var m__8974__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8974__auto__.call(null,_));
} else {
var m__8974__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8974__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__8973__auto__ = (((_ == null))?null:_);
var m__8974__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__8974__auto__.call(null,_,form));
} else {
var m__8974__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2(_,form) : m__8974__auto____$1.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

<<<<<<< HEAD
var G__14394_14401 = cljs.spec.alpha.specize_STAR_;
var G__14395_14402 = "_";
var G__14396_14403 = ((function (G__14394_14401,G__14395_14402){
return (function() {
var G__14404 = null;
var G__14404__1 = (function (o){
var G__14397 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown;
var G__14398 = o;
var G__14399 = null;
var G__14400 = null;
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(G__14397,G__14398,G__14399,G__14400) : cljs.spec.alpha.spec_impl.call(null,G__14397,G__14398,G__14399,G__14400));
});
var G__14404__2 = (function (o,form){
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.alpha.spec_impl.call(null,form,o,null,null));
});
G__14404 = function(o,form){
switch(arguments.length){
case 1:
return G__14404__1.call(this,o);
case 2:
return G__14404__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14404.cljs$core$IFn$_invoke$arity$1 = G__14404__1;
G__14404.cljs$core$IFn$_invoke$arity$2 = G__14404__2;
return G__14404;
})()
;})(G__14394_14401,G__14395_14402))
;
goog.object.set(G__14394_14401,G__14395_14402,G__14396_14403);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__14406 = arguments.length;
switch (G__14406) {
=======
var G__15558_15565 = cljs.spec.alpha.specize_STAR_;
var G__15559_15566 = "_";
var G__15560_15567 = ((function (G__15558_15565,G__15559_15566){
return (function() {
var G__15568 = null;
var G__15568__1 = (function (o){
var G__15561 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown;
var G__15562 = o;
var G__15563 = null;
var G__15564 = null;
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(G__15561,G__15562,G__15563,G__15564) : cljs.spec.alpha.spec_impl.call(null,G__15561,G__15562,G__15563,G__15564));
});
var G__15568__2 = (function (o,form){
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.alpha.spec_impl.call(null,form,o,null,null));
});
G__15568 = function(o,form){
switch(arguments.length){
case 1:
return G__15568__1.call(this,o);
case 2:
return G__15568__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15568.cljs$core$IFn$_invoke$arity$1 = G__15568__1;
G__15568.cljs$core$IFn$_invoke$arity$2 = G__15568__2;
return G__15568;
})()
;})(G__15558_15565,G__15559_15566))
;
goog.object.set(G__15558_15565,G__15559_15566,G__15560_15567);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__15570 = arguments.length;
switch (G__15570) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__8240__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__8240__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__8228__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__8228__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__8228__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__8228__auto__ = (form instanceof cljs.core.Symbol);
if(and__8228__auto__){
return cljs.core.namespace(form);
} else {
return and__8228__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev(cljs.spec.alpha.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn,gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5290__auto__ = cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__5290__auto__)){
var probs = temp__5290__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,probs,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec,spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value,x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5288__auto__ = cljs.spec.alpha.spec_name(spec);
if(cljs.core.truth_(temp__5288__auto__)){
var name = temp__5288__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
<<<<<<< HEAD
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__14408_SHARP_){
return (- cljs.core.count(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__14408_SHARP_)));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__9365__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14409_14455 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14410_14456 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14409_14455,_STAR_print_fn_STAR_14410_14456,sb__9365__auto__,problems){
return (function (x__9366__auto__){
return sb__9365__auto__.append(x__9366__auto__);
});})(_STAR_print_newline_STAR_14409_14455,_STAR_print_fn_STAR_14410_14456,sb__9365__auto__,problems))
;

try{var seq__14411_14457 = cljs.core.seq(problems);
var chunk__14412_14458 = null;
var count__14413_14459 = (0);
var i__14414_14460 = (0);
while(true){
if((i__14414_14460 < count__14413_14459)){
var map__14415_14461 = chunk__14412_14458.cljs$core$IIndexed$_nth$arity$2(null,i__14414_14460);
var map__14415_14462__$1 = ((((!((map__14415_14461 == null)))?((((map__14415_14461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14415_14461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14415_14461):map__14415_14461);
var prob_14463 = map__14415_14462__$1;
var path_14464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14415_14462__$1,cljs.core.cst$kw$path);
var pred_14465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14415_14462__$1,cljs.core.cst$kw$pred);
var val_14466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14415_14462__$1,cljs.core.cst$kw$val);
var reason_14467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14415_14462__$1,cljs.core.cst$kw$reason);
var via_14468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14415_14462__$1,cljs.core.cst$kw$via);
var in_14469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14415_14462__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_14469)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_14469], 0)),""], 0));
=======
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__15572_SHARP_){
return (- cljs.core.count(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__15572_SHARP_)));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__9367__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15573_15619 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15574_15620 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15573_15619,_STAR_print_fn_STAR_15574_15620,sb__9367__auto__,problems){
return (function (x__9368__auto__){
return sb__9367__auto__.append(x__9368__auto__);
});})(_STAR_print_newline_STAR_15573_15619,_STAR_print_fn_STAR_15574_15620,sb__9367__auto__,problems))
;

try{var seq__15575_15621 = cljs.core.seq(problems);
var chunk__15576_15622 = null;
var count__15577_15623 = (0);
var i__15578_15624 = (0);
while(true){
if((i__15578_15624 < count__15577_15623)){
var map__15579_15625 = chunk__15576_15622.cljs$core$IIndexed$_nth$arity$2(null,i__15578_15624);
var map__15579_15626__$1 = ((((!((map__15579_15625 == null)))?((((map__15579_15625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15579_15625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15579_15625):map__15579_15625);
var prob_15627 = map__15579_15626__$1;
var path_15628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15579_15626__$1,cljs.core.cst$kw$path);
var pred_15629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15579_15626__$1,cljs.core.cst$kw$pred);
var val_15630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15579_15626__$1,cljs.core.cst$kw$val);
var reason_15631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15579_15626__$1,cljs.core.cst$kw$reason);
var via_15632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15579_15626__$1,cljs.core.cst$kw$via);
var in_15633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15579_15626__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_15633)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_15633], 0)),""], 0));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

<<<<<<< HEAD
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_14466], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_14468)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_14468)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_14464)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_14464], 0))], 0));
=======
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_15630], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_15632)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_15632)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_15628)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_15628], 0))], 0));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

<<<<<<< HEAD
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_14465)], 0));

if(cljs.core.truth_(reason_14467)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_14467], 0));
} else {
}

var seq__14417_14470 = cljs.core.seq(prob_14463);
var chunk__14418_14471 = null;
var count__14419_14472 = (0);
var i__14420_14473 = (0);
while(true){
if((i__14420_14473 < count__14419_14472)){
var vec__14421_14474 = chunk__14418_14471.cljs$core$IIndexed$_nth$arity$2(null,i__14420_14473);
var k_14475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14421_14474,(0),null);
var v_14476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14421_14474,(1),null);
if(cljs.core.truth_((function (){var fexpr__14424 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__14424.cljs$core$IFn$_invoke$arity$1 ? fexpr__14424.cljs$core$IFn$_invoke$arity$1(k_14475) : fexpr__14424.call(null,k_14475));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14475], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14476], 0));
}

var G__14477 = seq__14417_14470;
var G__14478 = chunk__14418_14471;
var G__14479 = count__14419_14472;
var G__14480 = (i__14420_14473 + (1));
seq__14417_14470 = G__14477;
chunk__14418_14471 = G__14478;
count__14419_14472 = G__14479;
i__14420_14473 = G__14480;
continue;
} else {
var temp__5290__auto___14481 = cljs.core.seq(seq__14417_14470);
if(temp__5290__auto___14481){
var seq__14417_14482__$1 = temp__5290__auto___14481;
if(cljs.core.chunked_seq_QMARK_(seq__14417_14482__$1)){
var c__9171__auto___14483 = cljs.core.chunk_first(seq__14417_14482__$1);
var G__14484 = cljs.core.chunk_rest(seq__14417_14482__$1);
var G__14485 = c__9171__auto___14483;
var G__14486 = cljs.core.count(c__9171__auto___14483);
var G__14487 = (0);
seq__14417_14470 = G__14484;
chunk__14418_14471 = G__14485;
count__14419_14472 = G__14486;
i__14420_14473 = G__14487;
continue;
} else {
var vec__14425_14488 = cljs.core.first(seq__14417_14482__$1);
var k_14489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425_14488,(0),null);
var v_14490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425_14488,(1),null);
if(cljs.core.truth_((function (){var fexpr__14428 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__14428.cljs$core$IFn$_invoke$arity$1 ? fexpr__14428.cljs$core$IFn$_invoke$arity$1(k_14489) : fexpr__14428.call(null,k_14489));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14489], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14490], 0));
}

var G__14491 = cljs.core.next(seq__14417_14482__$1);
var G__14492 = null;
var G__14493 = (0);
var G__14494 = (0);
seq__14417_14470 = G__14491;
chunk__14418_14471 = G__14492;
count__14419_14472 = G__14493;
i__14420_14473 = G__14494;
=======
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_15629)], 0));

if(cljs.core.truth_(reason_15631)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_15631], 0));
} else {
}

var seq__15581_15634 = cljs.core.seq(prob_15627);
var chunk__15582_15635 = null;
var count__15583_15636 = (0);
var i__15584_15637 = (0);
while(true){
if((i__15584_15637 < count__15583_15636)){
var vec__15585_15638 = chunk__15582_15635.cljs$core$IIndexed$_nth$arity$2(null,i__15584_15637);
var k_15639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585_15638,(0),null);
var v_15640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585_15638,(1),null);
if(cljs.core.truth_((function (){var fexpr__15588 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15588.cljs$core$IFn$_invoke$arity$1 ? fexpr__15588.cljs$core$IFn$_invoke$arity$1(k_15639) : fexpr__15588.call(null,k_15639));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15639], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15640], 0));
}

var G__15641 = seq__15581_15634;
var G__15642 = chunk__15582_15635;
var G__15643 = count__15583_15636;
var G__15644 = (i__15584_15637 + (1));
seq__15581_15634 = G__15641;
chunk__15582_15635 = G__15642;
count__15583_15636 = G__15643;
i__15584_15637 = G__15644;
continue;
} else {
var temp__5290__auto___15645 = cljs.core.seq(seq__15581_15634);
if(temp__5290__auto___15645){
var seq__15581_15646__$1 = temp__5290__auto___15645;
if(cljs.core.chunked_seq_QMARK_(seq__15581_15646__$1)){
var c__9173__auto___15647 = cljs.core.chunk_first(seq__15581_15646__$1);
var G__15648 = cljs.core.chunk_rest(seq__15581_15646__$1);
var G__15649 = c__9173__auto___15647;
var G__15650 = cljs.core.count(c__9173__auto___15647);
var G__15651 = (0);
seq__15581_15634 = G__15648;
chunk__15582_15635 = G__15649;
count__15583_15636 = G__15650;
i__15584_15637 = G__15651;
continue;
} else {
var vec__15589_15652 = cljs.core.first(seq__15581_15646__$1);
var k_15653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15589_15652,(0),null);
var v_15654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15589_15652,(1),null);
if(cljs.core.truth_((function (){var fexpr__15592 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15592.cljs$core$IFn$_invoke$arity$1 ? fexpr__15592.cljs$core$IFn$_invoke$arity$1(k_15653) : fexpr__15592.call(null,k_15653));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15653], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15654], 0));
}

var G__15655 = cljs.core.next(seq__15581_15646__$1);
var G__15656 = null;
var G__15657 = (0);
var G__15658 = (0);
seq__15581_15634 = G__15655;
chunk__15582_15635 = G__15656;
count__15583_15636 = G__15657;
i__15584_15637 = G__15658;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

<<<<<<< HEAD
var G__14495 = seq__14411_14457;
var G__14496 = chunk__14412_14458;
var G__14497 = count__14413_14459;
var G__14498 = (i__14414_14460 + (1));
seq__14411_14457 = G__14495;
chunk__14412_14458 = G__14496;
count__14413_14459 = G__14497;
i__14414_14460 = G__14498;
continue;
} else {
var temp__5290__auto___14499 = cljs.core.seq(seq__14411_14457);
if(temp__5290__auto___14499){
var seq__14411_14500__$1 = temp__5290__auto___14499;
if(cljs.core.chunked_seq_QMARK_(seq__14411_14500__$1)){
var c__9171__auto___14501 = cljs.core.chunk_first(seq__14411_14500__$1);
var G__14502 = cljs.core.chunk_rest(seq__14411_14500__$1);
var G__14503 = c__9171__auto___14501;
var G__14504 = cljs.core.count(c__9171__auto___14501);
var G__14505 = (0);
seq__14411_14457 = G__14502;
chunk__14412_14458 = G__14503;
count__14413_14459 = G__14504;
i__14414_14460 = G__14505;
continue;
} else {
var map__14429_14506 = cljs.core.first(seq__14411_14500__$1);
var map__14429_14507__$1 = ((((!((map__14429_14506 == null)))?((((map__14429_14506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14429_14506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14429_14506):map__14429_14506);
var prob_14508 = map__14429_14507__$1;
var path_14509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14429_14507__$1,cljs.core.cst$kw$path);
var pred_14510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14429_14507__$1,cljs.core.cst$kw$pred);
var val_14511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14429_14507__$1,cljs.core.cst$kw$val);
var reason_14512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14429_14507__$1,cljs.core.cst$kw$reason);
var via_14513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14429_14507__$1,cljs.core.cst$kw$via);
var in_14514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14429_14507__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_14514)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_14514], 0)),""], 0));
=======
var G__15659 = seq__15575_15621;
var G__15660 = chunk__15576_15622;
var G__15661 = count__15577_15623;
var G__15662 = (i__15578_15624 + (1));
seq__15575_15621 = G__15659;
chunk__15576_15622 = G__15660;
count__15577_15623 = G__15661;
i__15578_15624 = G__15662;
continue;
} else {
var temp__5290__auto___15663 = cljs.core.seq(seq__15575_15621);
if(temp__5290__auto___15663){
var seq__15575_15664__$1 = temp__5290__auto___15663;
if(cljs.core.chunked_seq_QMARK_(seq__15575_15664__$1)){
var c__9173__auto___15665 = cljs.core.chunk_first(seq__15575_15664__$1);
var G__15666 = cljs.core.chunk_rest(seq__15575_15664__$1);
var G__15667 = c__9173__auto___15665;
var G__15668 = cljs.core.count(c__9173__auto___15665);
var G__15669 = (0);
seq__15575_15621 = G__15666;
chunk__15576_15622 = G__15667;
count__15577_15623 = G__15668;
i__15578_15624 = G__15669;
continue;
} else {
var map__15593_15670 = cljs.core.first(seq__15575_15664__$1);
var map__15593_15671__$1 = ((((!((map__15593_15670 == null)))?((((map__15593_15670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15593_15670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15593_15670):map__15593_15670);
var prob_15672 = map__15593_15671__$1;
var path_15673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593_15671__$1,cljs.core.cst$kw$path);
var pred_15674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593_15671__$1,cljs.core.cst$kw$pred);
var val_15675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593_15671__$1,cljs.core.cst$kw$val);
var reason_15676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593_15671__$1,cljs.core.cst$kw$reason);
var via_15677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593_15671__$1,cljs.core.cst$kw$via);
var in_15678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15593_15671__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_15678)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_15678], 0)),""], 0));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

<<<<<<< HEAD
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_14511], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_14513)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_14513)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_14509)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_14509], 0))], 0));
=======
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_15675], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_15677)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_15677)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_15673)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_15673], 0))], 0));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

<<<<<<< HEAD
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_14510)], 0));

if(cljs.core.truth_(reason_14512)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_14512], 0));
} else {
}

var seq__14431_14515 = cljs.core.seq(prob_14508);
var chunk__14432_14516 = null;
var count__14433_14517 = (0);
var i__14434_14518 = (0);
while(true){
if((i__14434_14518 < count__14433_14517)){
var vec__14435_14519 = chunk__14432_14516.cljs$core$IIndexed$_nth$arity$2(null,i__14434_14518);
var k_14520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14435_14519,(0),null);
var v_14521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14435_14519,(1),null);
if(cljs.core.truth_((function (){var fexpr__14438 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__14438.cljs$core$IFn$_invoke$arity$1 ? fexpr__14438.cljs$core$IFn$_invoke$arity$1(k_14520) : fexpr__14438.call(null,k_14520));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14520], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14521], 0));
}

var G__14522 = seq__14431_14515;
var G__14523 = chunk__14432_14516;
var G__14524 = count__14433_14517;
var G__14525 = (i__14434_14518 + (1));
seq__14431_14515 = G__14522;
chunk__14432_14516 = G__14523;
count__14433_14517 = G__14524;
i__14434_14518 = G__14525;
continue;
} else {
var temp__5290__auto___14526__$1 = cljs.core.seq(seq__14431_14515);
if(temp__5290__auto___14526__$1){
var seq__14431_14527__$1 = temp__5290__auto___14526__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14431_14527__$1)){
var c__9171__auto___14528 = cljs.core.chunk_first(seq__14431_14527__$1);
var G__14529 = cljs.core.chunk_rest(seq__14431_14527__$1);
var G__14530 = c__9171__auto___14528;
var G__14531 = cljs.core.count(c__9171__auto___14528);
var G__14532 = (0);
seq__14431_14515 = G__14529;
chunk__14432_14516 = G__14530;
count__14433_14517 = G__14531;
i__14434_14518 = G__14532;
continue;
} else {
var vec__14439_14533 = cljs.core.first(seq__14431_14527__$1);
var k_14534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439_14533,(0),null);
var v_14535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439_14533,(1),null);
if(cljs.core.truth_((function (){var fexpr__14442 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__14442.cljs$core$IFn$_invoke$arity$1 ? fexpr__14442.cljs$core$IFn$_invoke$arity$1(k_14534) : fexpr__14442.call(null,k_14534));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14534], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14535], 0));
}

var G__14536 = cljs.core.next(seq__14431_14527__$1);
var G__14537 = null;
var G__14538 = (0);
var G__14539 = (0);
seq__14431_14515 = G__14536;
chunk__14432_14516 = G__14537;
count__14433_14517 = G__14538;
i__14434_14518 = G__14539;
=======
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_15674)], 0));

if(cljs.core.truth_(reason_15676)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_15676], 0));
} else {
}

var seq__15595_15679 = cljs.core.seq(prob_15672);
var chunk__15596_15680 = null;
var count__15597_15681 = (0);
var i__15598_15682 = (0);
while(true){
if((i__15598_15682 < count__15597_15681)){
var vec__15599_15683 = chunk__15596_15680.cljs$core$IIndexed$_nth$arity$2(null,i__15598_15682);
var k_15684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599_15683,(0),null);
var v_15685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599_15683,(1),null);
if(cljs.core.truth_((function (){var fexpr__15602 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15602.cljs$core$IFn$_invoke$arity$1 ? fexpr__15602.cljs$core$IFn$_invoke$arity$1(k_15684) : fexpr__15602.call(null,k_15684));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15684], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15685], 0));
}

var G__15686 = seq__15595_15679;
var G__15687 = chunk__15596_15680;
var G__15688 = count__15597_15681;
var G__15689 = (i__15598_15682 + (1));
seq__15595_15679 = G__15686;
chunk__15596_15680 = G__15687;
count__15597_15681 = G__15688;
i__15598_15682 = G__15689;
continue;
} else {
var temp__5290__auto___15690__$1 = cljs.core.seq(seq__15595_15679);
if(temp__5290__auto___15690__$1){
var seq__15595_15691__$1 = temp__5290__auto___15690__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15595_15691__$1)){
var c__9173__auto___15692 = cljs.core.chunk_first(seq__15595_15691__$1);
var G__15693 = cljs.core.chunk_rest(seq__15595_15691__$1);
var G__15694 = c__9173__auto___15692;
var G__15695 = cljs.core.count(c__9173__auto___15692);
var G__15696 = (0);
seq__15595_15679 = G__15693;
chunk__15596_15680 = G__15694;
count__15597_15681 = G__15695;
i__15598_15682 = G__15696;
continue;
} else {
var vec__15603_15697 = cljs.core.first(seq__15595_15691__$1);
var k_15698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15603_15697,(0),null);
var v_15699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15603_15697,(1),null);
if(cljs.core.truth_((function (){var fexpr__15606 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__15606.cljs$core$IFn$_invoke$arity$1 ? fexpr__15606.cljs$core$IFn$_invoke$arity$1(k_15698) : fexpr__15606.call(null,k_15698));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15698], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15699], 0));
}

var G__15700 = cljs.core.next(seq__15595_15691__$1);
var G__15701 = null;
var G__15702 = (0);
var G__15703 = (0);
seq__15595_15679 = G__15700;
chunk__15596_15680 = G__15701;
count__15597_15681 = G__15702;
i__15598_15682 = G__15703;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

<<<<<<< HEAD
var G__14540 = cljs.core.next(seq__14411_14500__$1);
var G__14541 = null;
var G__14542 = (0);
var G__14543 = (0);
seq__14411_14457 = G__14540;
chunk__14412_14458 = G__14541;
count__14413_14459 = G__14542;
i__14414_14460 = G__14543;
=======
var G__15704 = cljs.core.next(seq__15575_15664__$1);
var G__15705 = null;
var G__15706 = (0);
var G__15707 = (0);
seq__15575_15621 = G__15704;
chunk__15576_15622 = G__15705;
count__15577_15623 = G__15706;
i__15578_15624 = G__15707;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
}
}
break;
}

<<<<<<< HEAD
var seq__14443_14544 = cljs.core.seq(ed);
var chunk__14444_14545 = null;
var count__14445_14546 = (0);
var i__14446_14547 = (0);
while(true){
if((i__14446_14547 < count__14445_14546)){
var vec__14447_14548 = chunk__14444_14545.cljs$core$IIndexed$_nth$arity$2(null,i__14446_14547);
var k_14549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14447_14548,(0),null);
var v_14550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14447_14548,(1),null);
if(cljs.core.truth_((function (){var fexpr__14450 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__14450.cljs$core$IFn$_invoke$arity$1 ? fexpr__14450.cljs$core$IFn$_invoke$arity$1(k_14549) : fexpr__14450.call(null,k_14549));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14549], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14550], 0));
=======
var seq__15607_15708 = cljs.core.seq(ed);
var chunk__15608_15709 = null;
var count__15609_15710 = (0);
var i__15610_15711 = (0);
while(true){
if((i__15610_15711 < count__15609_15710)){
var vec__15611_15712 = chunk__15608_15709.cljs$core$IIndexed$_nth$arity$2(null,i__15610_15711);
var k_15713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15611_15712,(0),null);
var v_15714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15611_15712,(1),null);
if(cljs.core.truth_((function (){var fexpr__15614 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__15614.cljs$core$IFn$_invoke$arity$1 ? fexpr__15614.cljs$core$IFn$_invoke$arity$1(k_15713) : fexpr__15614.call(null,k_15713));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15713], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15714], 0));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

<<<<<<< HEAD
var G__14551 = seq__14443_14544;
var G__14552 = chunk__14444_14545;
var G__14553 = count__14445_14546;
var G__14554 = (i__14446_14547 + (1));
seq__14443_14544 = G__14551;
chunk__14444_14545 = G__14552;
count__14445_14546 = G__14553;
i__14446_14547 = G__14554;
continue;
} else {
var temp__5290__auto___14555 = cljs.core.seq(seq__14443_14544);
if(temp__5290__auto___14555){
var seq__14443_14556__$1 = temp__5290__auto___14555;
if(cljs.core.chunked_seq_QMARK_(seq__14443_14556__$1)){
var c__9171__auto___14557 = cljs.core.chunk_first(seq__14443_14556__$1);
var G__14558 = cljs.core.chunk_rest(seq__14443_14556__$1);
var G__14559 = c__9171__auto___14557;
var G__14560 = cljs.core.count(c__9171__auto___14557);
var G__14561 = (0);
seq__14443_14544 = G__14558;
chunk__14444_14545 = G__14559;
count__14445_14546 = G__14560;
i__14446_14547 = G__14561;
continue;
} else {
var vec__14451_14562 = cljs.core.first(seq__14443_14556__$1);
var k_14563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14451_14562,(0),null);
var v_14564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14451_14562,(1),null);
if(cljs.core.truth_((function (){var fexpr__14454 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__14454.cljs$core$IFn$_invoke$arity$1 ? fexpr__14454.cljs$core$IFn$_invoke$arity$1(k_14563) : fexpr__14454.call(null,k_14563));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14563], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_14564], 0));
=======
var G__15715 = seq__15607_15708;
var G__15716 = chunk__15608_15709;
var G__15717 = count__15609_15710;
var G__15718 = (i__15610_15711 + (1));
seq__15607_15708 = G__15715;
chunk__15608_15709 = G__15716;
count__15609_15710 = G__15717;
i__15610_15711 = G__15718;
continue;
} else {
var temp__5290__auto___15719 = cljs.core.seq(seq__15607_15708);
if(temp__5290__auto___15719){
var seq__15607_15720__$1 = temp__5290__auto___15719;
if(cljs.core.chunked_seq_QMARK_(seq__15607_15720__$1)){
var c__9173__auto___15721 = cljs.core.chunk_first(seq__15607_15720__$1);
var G__15722 = cljs.core.chunk_rest(seq__15607_15720__$1);
var G__15723 = c__9173__auto___15721;
var G__15724 = cljs.core.count(c__9173__auto___15721);
var G__15725 = (0);
seq__15607_15708 = G__15722;
chunk__15608_15709 = G__15723;
count__15609_15710 = G__15724;
i__15610_15711 = G__15725;
continue;
} else {
var vec__15615_15726 = cljs.core.first(seq__15607_15720__$1);
var k_15727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15615_15726,(0),null);
var v_15728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15615_15726,(1),null);
if(cljs.core.truth_((function (){var fexpr__15618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__15618.cljs$core$IFn$_invoke$arity$1 ? fexpr__15618.cljs$core$IFn$_invoke$arity$1(k_15727) : fexpr__15618.call(null,k_15727));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15727], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_15728], 0));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

<<<<<<< HEAD
var G__14565 = cljs.core.next(seq__14443_14556__$1);
var G__14566 = null;
var G__14567 = (0);
var G__14568 = (0);
seq__14443_14544 = G__14565;
chunk__14444_14545 = G__14566;
count__14445_14546 = G__14567;
i__14446_14547 = G__14568;
=======
var G__15729 = cljs.core.next(seq__15607_15720__$1);
var G__15730 = null;
var G__15731 = (0);
var G__15732 = (0);
seq__15607_15708 = G__15729;
chunk__15608_15709 = G__15730;
count__15609_15710 = G__15731;
i__15610_15711 = G__15732;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
}
}
break;
}
<<<<<<< HEAD
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14410_14456;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14409_14455;
=======
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15574_15620;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15573_15619;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9365__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success!"], 0));
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return (cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed));
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out(cljs.spec.alpha.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
<<<<<<< HEAD
var sb__9365__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14569_14571 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14570_14572 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14569_14571,_STAR_print_fn_STAR_14570_14572,sb__9365__auto__){
return (function (x__9366__auto__){
return sb__9365__auto__.append(x__9366__auto__);
});})(_STAR_print_newline_STAR_14569_14571,_STAR_print_fn_STAR_14570_14572,sb__9365__auto__))
;

try{cljs.spec.alpha.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14570_14572;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14569_14571;
=======
var sb__9367__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15733_15735 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15734_15736 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15733_15735,_STAR_print_fn_STAR_15734_15736,sb__9367__auto__){
return (function (x__9368__auto__){
return sb__9367__auto__.append(x__9368__auto__);
});})(_STAR_print_newline_STAR_15733_15735,_STAR_print_fn_STAR_15734_15736,sb__9367__auto__))
;

try{cljs.spec.alpha.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15734_15736;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15733_15735;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9365__auto__)].join('');
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__5288__auto__ = (function (){var or__8240__auto__ = (function (){var temp__5290__auto__ = (function (){var or__8240__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__8240__auto__ = cljs.spec.alpha.spec_name(spec__$1);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__5290__auto__)){
var gfn = temp__5290__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.spec.alpha.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5288__auto__)){
var g = temp__5288__auto__;
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5288__auto__,spec__$1){
<<<<<<< HEAD
return (function (p1__14573_SHARP_){
return (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__14573_SHARP_) : cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__14573_SHARP_));
=======
return (function (p1__15737_SHARP_){
return (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__15737_SHARP_) : cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__15737_SHARP_));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(g,temp__5288__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
<<<<<<< HEAD
var G__14575 = arguments.length;
switch (G__14575) {
=======
var G__15739 = arguments.length;
switch (G__15739) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit,cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__8228__auto__ = cljs.core.ident_QMARK_(k);
if(and__8228__auto__){
return cljs.core.namespace(k);
} else {
return and__8228__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__8240__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var or__8240__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__8240__auto____$1)){
return or__8240__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.alpha.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name(spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref(cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym(k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec(v);
var temp__5290__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5290__auto__)){
var arg_spec = temp__5290__auto__;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform(arg_spec,args)))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),(function (){var temp__5288__auto__ = cljs.spec.alpha.spec_name(arg_spec);
if(cljs.core.truth_(temp__5288__auto__)){
var name = temp__5288__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec$alpha_SLASH_args,args);
<<<<<<< HEAD
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9365__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14577_14579 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14578_14580 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14577_14579,_STAR_print_fn_STAR_14578_14580,sb__9365__auto__,ed,arg_spec,temp__5290__auto__,specs){
return (function (x__9366__auto__){
return sb__9365__auto__.append(x__9366__auto__);
});})(_STAR_print_newline_STAR_14577_14579,_STAR_print_fn_STAR_14578_14580,sb__9365__auto__,ed,arg_spec,temp__5290__auto__,specs))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14578_14580;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14577_14579;
=======
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9367__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15741_15743 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15742_15744 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15741_15743,_STAR_print_fn_STAR_15742_15744,sb__9367__auto__,ed,arg_spec,temp__5290__auto__,specs){
return (function (x__9368__auto__){
return sb__9367__auto__.append(x__9368__auto__);
});})(_STAR_print_newline_STAR_15741_15743,_STAR_print_fn_STAR_15742_15744,sb__9367__auto__,ed,arg_spec,temp__5290__auto__,specs))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15742_15744;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15741_15743;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9365__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__8240__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
<<<<<<< HEAD
var G__14582 = arguments.length;
switch (G__14582) {
=======
var G__15746 = arguments.length;
switch (G__15746) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5288__auto__ = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(temp__5288__auto__)){
var spec = temp__5288__auto__;
return cljs.spec.alpha.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
<<<<<<< HEAD
var G__14585 = arguments.length;
switch (G__14585) {
=======
var G__15749 = arguments.length;
switch (G__15749) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
<<<<<<< HEAD
var G__14588 = arguments.length;
switch (G__14588) {
=======
var G__15752 = arguments.length;
switch (G__15752) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred__$1))){
return cljs.spec.alpha.explain_STAR_(pred__$1,path,(function (){var temp__5288__auto__ = cljs.spec.alpha.spec_name(pred__$1);
if(cljs.core.truth_(temp__5288__auto__)){
var name = temp__5288__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,form,cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
<<<<<<< HEAD
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__14593){
var map__14594 = p__14593;
var map__14594__$1 = ((((!((map__14594 == null)))?((((map__14594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14594):map__14594);
var argm = map__14594__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14594__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__14590_SHARP_){
var or__8240__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__14590_SHARP_) : k__GT_s.call(null,p1__14590_SHARP_));
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return p1__14590_SHARP_;
}
});})(k__GT_s,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14596 !== 'undefined'){
=======
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__15757){
var map__15758 = p__15757;
var map__15758__$1 = ((((!((map__15758 == null)))?((((map__15758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15758):map__15758);
var argm = map__15758__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15758__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15754_SHARP_){
var or__8242__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__15754_SHARP_) : k__GT_s.call(null,p1__15754_SHARP_));
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return p1__15754_SHARP_;
}
});})(k__GT_s,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15760 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14596 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__14593,map__14594,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta14597){
=======
cljs.spec.alpha.t_cljs$spec$alpha15760 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,map__15758,id,req_keys,opt_specs,k__GT_s,p__15757,pred_forms,meta15761){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
<<<<<<< HEAD
this.p__14593 = p__14593;
this.map__14594 = map__14594;
=======
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.req = req;
this.map__15758 = map__15758;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.p__15757 = p__15757;
this.pred_forms = pred_forms;
<<<<<<< HEAD
this.meta14597 = meta14597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_14598,meta14597__$1){
var self__ = this;
var _14598__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14596(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.p__14593,self__.map__14594,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta14597__$1));
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_14598){
var self__ = this;
var _14598__$1 = this;
return self__.meta14597;
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
this.meta15761 = meta15761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_15762,meta15761__$1){
var self__ = this;
var _15762__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15760(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.req,self__.map__15758,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.p__15757,self__.pred_forms,meta15761__$1));
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_15762){
var self__ = this;
var _15762__$1 = this;
return self__.meta15761;
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.alpha.registry();
var ret = m;
<<<<<<< HEAD
var G__14605 = m;
var vec__14606 = G__14605;
var seq__14607 = cljs.core.seq(vec__14606);
var first__14608 = cljs.core.first(seq__14607);
var seq__14607__$1 = cljs.core.next(seq__14607);
var vec__14609 = first__14608;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14609,(1),null);
var ks = seq__14607__$1;
var keys = vec__14606;
var ret__$1 = ret;
var G__14605__$1 = G__14605;
while(true){
var ret__$2 = ret__$1;
var vec__14612 = G__14605__$1;
var seq__14613 = cljs.core.seq(vec__14612);
var first__14614 = cljs.core.first(seq__14613);
var seq__14613__$1 = cljs.core.next(seq__14613);
var vec__14615 = first__14614;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14615,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14615,(1),null);
var ks__$1 = seq__14613__$1;
var keys__$1 = vec__14612;
=======
var G__15769 = m;
var vec__15770 = G__15769;
var seq__15771 = cljs.core.seq(vec__15770);
var first__15772 = cljs.core.first(seq__15771);
var seq__15771__$1 = cljs.core.next(seq__15771);
var vec__15773 = first__15772;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15773,(1),null);
var ks = seq__15771__$1;
var keys = vec__15770;
var ret__$1 = ret;
var G__15769__$1 = G__15769;
while(true){
var ret__$2 = ret__$1;
var vec__15776 = G__15769__$1;
var seq__15777 = cljs.core.seq(vec__15776);
var first__15778 = cljs.core.first(seq__15777);
var seq__15777__$1 = cljs.core.next(seq__15777);
var vec__15779 = first__15778;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15779,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15779,(1),null);
var ks__$1 = seq__15777__$1;
var keys__$1 = vec__15776;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__5288__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__5288__auto__)){
var s = temp__5288__auto__;
var cv = cljs.spec.alpha.conform(s,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__14634 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__14635 = ks__$1;
ret__$1 = G__14634;
G__14605__$1 = G__14635;
continue;
}
} else {
var G__14636 = ret__$2;
var G__14637 = ks__$1;
ret__$1 = G__14636;
G__14605__$1 = G__14637;
=======
var G__15798 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__15799 = ks__$1;
ret__$1 = G__15798;
G__15769__$1 = G__15799;
continue;
}
} else {
var G__15800 = ret__$2;
var G__15801 = ks__$1;
ret__$1 = G__15800;
G__15769__$1 = G__15801;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry();
var ret = m;
<<<<<<< HEAD
var G__14621 = cljs.core.keys(m);
var vec__14622 = G__14621;
var seq__14623 = cljs.core.seq(vec__14622);
var first__14624 = cljs.core.first(seq__14623);
var seq__14623__$1 = cljs.core.next(seq__14623);
var k = first__14624;
var ks = seq__14623__$1;
var keys = vec__14622;
var ret__$1 = ret;
var G__14621__$1 = G__14621;
while(true){
var ret__$2 = ret__$1;
var vec__14625 = G__14621__$1;
var seq__14626 = cljs.core.seq(vec__14625);
var first__14627 = cljs.core.first(seq__14626);
var seq__14626__$1 = cljs.core.next(seq__14626);
var k__$1 = first__14627;
var ks__$1 = seq__14626__$1;
var keys__$1 = vec__14625;
=======
var G__15785 = cljs.core.keys(m);
var vec__15786 = G__15785;
var seq__15787 = cljs.core.seq(vec__15786);
var first__15788 = cljs.core.first(seq__15787);
var seq__15787__$1 = cljs.core.next(seq__15787);
var k = first__15788;
var ks = seq__15787__$1;
var keys = vec__15786;
var ret__$1 = ret;
var G__15785__$1 = G__15785;
while(true){
var ret__$2 = ret__$1;
var vec__15789 = G__15785__$1;
var seq__15790 = cljs.core.seq(vec__15789);
var first__15791 = cljs.core.first(seq__15790);
var seq__15790__$1 = cljs.core.next(seq__15790);
var k__$1 = first__15791;
var ks__$1 = seq__15790__$1;
var keys__$1 = vec__15789;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.alpha.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
<<<<<<< HEAD
var G__14638 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__14639 = ks__$1;
ret__$1 = G__14638;
G__14621__$1 = G__14639;
continue;
} else {
var G__14640 = ret__$2;
var G__14641 = ks__$1;
ret__$1 = G__14640;
G__14621__$1 = G__14641;
=======
var G__15802 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__15803 = ks__$1;
ret__$1 = G__15802;
G__15785__$1 = G__15803;
continue;
} else {
var G__15804 = ret__$2;
var G__15805 = ks__$1;
ret__$1 = G__15804;
G__15785__$1 = G__15805;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
return ret__$2;
}
break;
}
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry();
<<<<<<< HEAD
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__5290__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__5290__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return form;
}
<<<<<<< HEAD
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5290__auto__){
var probs = temp__5290__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__5290__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__14591_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__14591_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__5290__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5290__auto__){
var probs = temp__5290__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__5290__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15755_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__15755_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__5290__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,probs);
} else {
return null;
}
<<<<<<< HEAD
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__14628){
var vec__14629 = p__14628;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14629,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14629,(1),null);
if(cljs.core.truth_((function (){var or__8240__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__8240__auto__){
return or__8240__auto__;
=======
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__15792){
var vec__15793 = p__15792;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15793,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15793,(1),null);
if(cljs.core.truth_((function (){var or__8242__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__8242__auto__){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
<<<<<<< HEAD
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
<<<<<<< HEAD
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
=======
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (k,s){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
<<<<<<< HEAD
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__14592_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__14592_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__15756_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__15756_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
], 0));
} else {
return null;
}
}
<<<<<<< HEAD
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__14632 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__14632) : cljs.spec.alpha.map_spec_impl.call(null,G__14632));
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,(function (){var G__14633 = cljs.core.PersistentVector.EMPTY;
var G__14633__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__14633,cljs.core.cst$kw$req,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__14633);
var G__14633__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__14633__$1,cljs.core.cst$kw$opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__14633__$1);
var G__14633__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__14633__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__14633__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__14633__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__14633__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$p__14593,cljs.core.cst$sym$map__14594,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta14597], null);
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha14596.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14596.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14596";

cljs.spec.alpha.t_cljs$spec$alpha14596.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14596");
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14596 = ((function (k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha14596(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__14593__$1,map__14594__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta14597){
return (new cljs.spec.alpha.t_cljs$spec$alpha14596(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__14593__$1,map__14594__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta14597));
});})(k__GT_s,keys__GT_specnames,id,map__14594,map__14594__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
=======
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__15796 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__15796) : cljs.spec.alpha.map_spec_impl.call(null,G__15796));
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,(function (){var G__15797 = cljs.core.PersistentVector.EMPTY;
var G__15797__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15797,cljs.core.cst$kw$req,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__15797);
var G__15797__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15797__$1,cljs.core.cst$kw$opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__15797__$1);
var G__15797__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15797__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__15797__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__15797__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__15797__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$map__15758,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$p__15757,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta15761], null);
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha15760.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15760.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15760";

cljs.spec.alpha.t_cljs$spec$alpha15760.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15760");
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15760 = ((function (k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha15760(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,map__15758__$2,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,p__15757__$1,pred_forms__$1,meta15761){
return (new cljs.spec.alpha.t_cljs$spec$alpha15760(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,map__15758__$2,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,p__15757__$1,pred_forms__$1,meta15761));
});})(k__GT_s,keys__GT_specnames,id,map__15758,map__15758__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha14596(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__14593,map__14594__$1,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15760(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,map__15758__$1,id,req_keys,opt_specs,k__GT_s,p__15757,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
<<<<<<< HEAD
var G__14643 = arguments.length;
switch (G__14643) {
=======
var G__15807 = arguments.length;
switch (G__15807) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred))){
<<<<<<< HEAD
var G__14644 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__14644,gfn);
} else {
return G__14644;
=======
var G__15808 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__15808,gfn);
} else {
return G__15808;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(pred))){
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.ident_QMARK_(pred)){
<<<<<<< HEAD
var G__14645 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__14645,gfn);
} else {
return G__14645;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14646 !== 'undefined'){
=======
var G__15809 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__15809,gfn);
} else {
return G__15809;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15810 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14646 = (function (form,pred,gfn,cpred_QMARK_,unc,meta14647){
=======
cljs.spec.alpha.t_cljs$spec$alpha15810 = (function (form,pred,gfn,cpred_QMARK_,unc,meta15811){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
<<<<<<< HEAD
this.meta14647 = meta14647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14648,meta14647__$1){
var self__ = this;
var _14648__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14646(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta14647__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14648){
var self__ = this;
var _14648__$1 = this;
return self__.meta14647;
});

cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
=======
this.meta15811 = meta15811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15812,meta15811__$1){
var self__ = this;
var _15812__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15810(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta15811__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15812){
var self__ = this;
var _15812__$1 = this;
return self__.meta15811;
});

cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
=======
cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
=======
cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.gen_for_pred(self__.pred);
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14646.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
=======
cljs.spec.alpha.t_cljs$spec$alpha15810.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
return self__.form;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta14647], null);
});

cljs.spec.alpha.t_cljs$spec$alpha14646.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14646.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14646";

cljs.spec.alpha.t_cljs$spec$alpha14646.cljs$lang$ctorPrWriter = (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14646");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha14646 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha14646(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta14647){
return (new cljs.spec.alpha.t_cljs$spec$alpha14646(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta14647));
=======
cljs.spec.alpha.t_cljs$spec$alpha15810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta15811], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15810.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15810.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15810";

cljs.spec.alpha.t_cljs$spec$alpha15810.cljs$lang$ctorPrWriter = (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15810");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha15810 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15810(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15811){
return (new cljs.spec.alpha.t_cljs$spec$alpha15810(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta15811));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha14646(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15810(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
<<<<<<< HEAD
var G__14656 = arguments.length;
switch (G__14656) {
=======
var G__15820 = arguments.length;
switch (G__15820) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
<<<<<<< HEAD
return (function (p1__14650_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__8228__auto__ = cljs.core._get_method(mm,(function (){var fexpr__14658 = cljs.core._dispatch_fn(mm);
return (fexpr__14658.cljs$core$IFn$_invoke$arity$1 ? fexpr__14658.cljs$core$IFn$_invoke$arity$1(p1__14650_SHARP_) : fexpr__14658.call(null,p1__14650_SHARP_));
})());
if(cljs.core.truth_(and__8228__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__14650_SHARP_) : mm.call(null,p1__14650_SHARP_));
=======
return (function (p1__15814_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__8230__auto__ = cljs.core._get_method(mm,(function (){var fexpr__15822 = cljs.core._dispatch_fn(mm);
return (fexpr__15822.cljs$core$IFn$_invoke$arity$1 ? fexpr__15822.cljs$core$IFn$_invoke$arity$1(p1__15814_SHARP_) : fexpr__15822.call(null,p1__15814_SHARP_));
})());
if(cljs.core.truth_(and__8230__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__15814_SHARP_) : mm.call(null,p1__15814_SHARP_));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return and__8228__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
<<<<<<< HEAD
return (function (p1__14651_SHARP_){
var fexpr__14659 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__14659.cljs$core$IFn$_invoke$arity$1 ? fexpr__14659.cljs$core$IFn$_invoke$arity$1(p1__14651_SHARP_) : fexpr__14659.call(null,p1__14651_SHARP_));
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__14652_SHARP_,p2__14653_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14652_SHARP_,retag,p2__14653_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14660 !== 'undefined'){
=======
return (function (p1__15815_SHARP_){
var fexpr__15823 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__15823.cljs$core$IFn$_invoke$arity$1 ? fexpr__15823.cljs$core$IFn$_invoke$arity$1(p1__15815_SHARP_) : fexpr__15823.call(null,p1__15815_SHARP_));
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__15816_SHARP_,p2__15817_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15816_SHARP_,retag,p2__15817_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15824 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14660 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta14661){
=======
cljs.spec.alpha.t_cljs$spec$alpha15824 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta15825){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
<<<<<<< HEAD
this.meta14661 = meta14661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_14662,meta14661__$1){
var self__ = this;
var _14662__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14660(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta14661__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_14662){
var self__ = this;
var _14662__$1 = this;
return self__.meta14661;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
=======
this.meta15825 = meta15825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_15826,meta15825__$1){
var self__ = this;
var _15826__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15824(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta15825__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_15826){
var self__ = this;
var _15826__$1 = this;
return self__.meta15825;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5288__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5288__auto__)){
var pred = temp__5288__auto__;
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5288__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5288__auto__)){
var pred = temp__5288__auto__;
return cljs.spec.alpha.unform(pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__5288__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5288__auto__)){
var pred = temp__5288__auto__;
return cljs.spec.alpha.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
<<<<<<< HEAD
return (function (p__14663){
var vec__14664 = p__14663;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(1),null);
=======
return (function (p__15827){
var vec__15828 = p__15827;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15828,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15828,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
<<<<<<< HEAD
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__14664,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (rmap__$1,p,vec__14664,k,f,___$1,id,predx,dval,tag){
return (function (p1__14654_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__14654_SHARP_,k) : self__.tag.call(null,p1__14654_SHARP_,k));
});})(rmap__$1,p,vec__14664,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__9194__auto__ = self__.form;
return cljs.core._conj((function (){var x__9194__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__14664,k,f,___$1,id,predx,dval,tag))
=======
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__15828,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (rmap__$1,p,vec__15828,k,f,___$1,id,predx,dval,tag){
return (function (p1__15818_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__15818_SHARP_,k) : self__.tag.call(null,p1__15818_SHARP_,k));
});})(rmap__$1,p,vec__15828,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__9196__auto__ = self__.form;
return cljs.core._conj((function (){var x__9196__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__15828,k,f,___$1,id,predx,dval,tag))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
<<<<<<< HEAD
return (function (p__14667){
var vec__14668 = p__14667;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14668,(0),null);
=======
return (function (p__15831){
var vec__15832 = p__15831;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15832,(0),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return cljs.spec.alpha.invalid_QMARK_(k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$(cljs.core.deref(self__.mmvar)))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14660.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
=======
cljs.spec.alpha.t_cljs$spec$alpha15824.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec),(function (){var x__9194__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9194__auto__ = self__.retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})()], 0))));
});})(id,predx,dval,tag))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14660.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta14661], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha14660.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14660.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14660";

cljs.spec.alpha.t_cljs$spec$alpha14660.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14660");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14660 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha14660(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta14661){
return (new cljs.spec.alpha.t_cljs$spec$alpha14660(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta14661));
=======
cljs.spec.alpha.t_cljs$spec$alpha15824.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta15825], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha15824.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15824.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15824";

cljs.spec.alpha.t_cljs$spec$alpha15824.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15824");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15824 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15824(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15825){
return (new cljs.spec.alpha.t_cljs$spec$alpha15824(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta15825));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(id,predx,dval,tag))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha14660(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15824(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
<<<<<<< HEAD
var G__14673 = arguments.length;
switch (G__14673) {
=======
var G__15837 = arguments.length;
switch (G__15837) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14674 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15838 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14674 = (function (forms,preds,gfn,specs,cnt,meta14675){
=======
cljs.spec.alpha.t_cljs$spec$alpha15838 = (function (forms,preds,gfn,specs,cnt,meta15839){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
<<<<<<< HEAD
this.meta14675 = meta14675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_14676,meta14675__$1){
var self__ = this;
var _14676__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14674(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta14675__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_14676){
var self__ = this;
var _14676__$1 = this;
return self__.meta14675;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
=======
this.meta15839 = meta15839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_15840,meta15839__$1){
var self__ = this;
var _15840__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15838(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta15839__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_15840){
var self__ = this;
var _15840__$1 = this;
return self__.meta15839;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref(self__.specs);
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__14678 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__14679 = (i + (1));
ret = G__14678;
i = G__14679;
=======
var G__15842 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__15843 = (i + (1));
ret = G__15842;
i = G__15843;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
}
break;
}
}
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.alpha.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
<<<<<<< HEAD
var G__14680 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__14681 = (i + (1));
ret = G__14680;
i = G__14681;
=======
var G__15844 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__15845 = (i + (1));
ret = G__15844;
i = G__15845;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
break;
}
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9194__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9194__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14674.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
=======
cljs.spec.alpha.t_cljs$spec$alpha15838.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple),self__.forms)));
});})(specs,cnt))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14674.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta14675], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha14674.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14674.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14674";

cljs.spec.alpha.t_cljs$spec$alpha14674.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14674");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14674 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha14674(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta14675){
return (new cljs.spec.alpha.t_cljs$spec$alpha14674(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta14675));
=======
cljs.spec.alpha.t_cljs$spec$alpha15838.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta15839], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha15838.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15838.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15838";

cljs.spec.alpha.t_cljs$spec$alpha15838.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15838");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15838 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15838(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15839){
return (new cljs.spec.alpha.t_cljs$spec$alpha15838(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta15839));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(specs,cnt))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha14674(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15838(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(v){
<<<<<<< HEAD
var x14682 = v;
x14682.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x14682.cljs$core$IMapEntry$_key$arity$1 = ((function (x14682){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x14682))
;

x14682.cljs$core$IMapEntry$_val$arity$1 = ((function (x14682){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x14682))
;

return x14682;
=======
var x15846 = v;
x15846.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x15846.cljs$core$IMapEntry$_key$arity$1 = ((function (x15846){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x15846))
;

x15846.cljs$core$IMapEntry$_val$arity$1 = ((function (x15846){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x15846))
;

return x15846;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
<<<<<<< HEAD
var cform = (function (){var G__14683 = cljs.core.count(preds);
switch (G__14683) {
case (2):
return ((function (G__14683,id,kps,specs){
=======
var cform = (function (){var G__15847 = cljs.core.count(preds);
switch (G__15847) {
case (2):
return ((function (G__15847,id,kps,specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
<<<<<<< HEAD
;})(G__14683,id,kps,specs))

break;
case (3):
return ((function (G__14683,id,kps,specs){
=======
;})(G__15847,id,kps,specs))

break;
case (3):
return ((function (G__15847,id,kps,specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
var ret__$2 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$2))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
<<<<<<< HEAD
;})(G__14683,id,kps,specs))

break;
default:
return ((function (G__14683,id,kps,specs){
=======
;})(G__15847,id,kps,specs))

break;
default:
return ((function (G__15847,id,kps,specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.alpha.conform_STAR_(spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
<<<<<<< HEAD
var G__14692 = (i + (1));
i = G__14692;
=======
var G__15856 = (i + (1));
i = G__15856;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
break;
}
});
<<<<<<< HEAD
;})(G__14683,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14684 !== 'undefined'){
=======
;})(G__15847,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15848 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14684 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta14685){
=======
cljs.spec.alpha.t_cljs$spec$alpha15848 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta15849){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
<<<<<<< HEAD
this.meta14685 = meta14685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_14686,meta14685__$1){
var self__ = this;
var _14686__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14684(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta14685__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_14686){
var self__ = this;
var _14686__$1 = this;
return self__.meta14685;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
=======
this.meta15849 = meta15849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_15850,meta15849__$1){
var self__ = this;
var _15850__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15848(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta15849__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_15850){
var self__ = this;
var _15850__$1 = this;
return self__.meta15849;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__14687){
var self__ = this;
var vec__14688 = p__14687;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14688,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14688,(1),null);
=======
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__15851){
var self__ = this;
var vec__15852 = p__15851;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var ___$1 = this;
return cljs.spec.alpha.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
}
}
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14684.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15848.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14684.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta14685], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14684.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14684.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14684";

cljs.spec.alpha.t_cljs$spec$alpha14684.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14684");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14684 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha14684(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta14685){
return (new cljs.spec.alpha.t_cljs$spec$alpha14684(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta14685));
=======
cljs.spec.alpha.t_cljs$spec$alpha15848.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta15849], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15848.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15848.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15848";

cljs.spec.alpha.t_cljs$spec$alpha15848.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15848");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15848 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha15848(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15849){
return (new cljs.spec.alpha.t_cljs$spec$alpha15848(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta15849));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(id,kps,specs,cform))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha14684(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__14699 = preds;
var vec__14701 = G__14699;
var seq__14702 = cljs.core.seq(vec__14701);
var first__14703 = cljs.core.first(seq__14702);
var seq__14702__$1 = cljs.core.next(seq__14702);
var pred = first__14703;
var preds__$1 = seq__14702__$1;
var G__14700 = forms;
var vec__14704 = G__14700;
var seq__14705 = cljs.core.seq(vec__14704);
var first__14706 = cljs.core.first(seq__14705);
var seq__14705__$1 = cljs.core.next(seq__14705);
var form = first__14706;
var forms__$1 = seq__14705__$1;
var ret__$1 = ret;
var G__14699__$1 = G__14699;
var G__14700__$1 = G__14700;
while(true){
var ret__$2 = ret__$1;
var vec__14707 = G__14699__$1;
var seq__14708 = cljs.core.seq(vec__14707);
var first__14709 = cljs.core.first(seq__14708);
var seq__14708__$1 = cljs.core.next(seq__14708);
var pred__$1 = first__14709;
var preds__$2 = seq__14708__$1;
var vec__14710 = G__14700__$1;
var seq__14711 = cljs.core.seq(vec__14710);
var first__14712 = cljs.core.first(seq__14711);
var seq__14711__$1 = cljs.core.next(seq__14711);
var form__$1 = first__14712;
var forms__$2 = seq__14711__$1;
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15848(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__15863 = preds;
var vec__15865 = G__15863;
var seq__15866 = cljs.core.seq(vec__15865);
var first__15867 = cljs.core.first(seq__15866);
var seq__15866__$1 = cljs.core.next(seq__15866);
var pred = first__15867;
var preds__$1 = seq__15866__$1;
var G__15864 = forms;
var vec__15868 = G__15864;
var seq__15869 = cljs.core.seq(vec__15868);
var first__15870 = cljs.core.first(seq__15869);
var seq__15869__$1 = cljs.core.next(seq__15869);
var form = first__15870;
var forms__$1 = seq__15869__$1;
var ret__$1 = ret;
var G__15863__$1 = G__15863;
var G__15864__$1 = G__15864;
while(true){
var ret__$2 = ret__$1;
var vec__15871 = G__15863__$1;
var seq__15872 = cljs.core.seq(vec__15871);
var first__15873 = cljs.core.first(seq__15872);
var seq__15872__$1 = cljs.core.next(seq__15872);
var pred__$1 = first__15873;
var preds__$2 = seq__15872__$1;
var vec__15874 = G__15864__$1;
var seq__15875 = cljs.core.seq(vec__15874);
var first__15876 = cljs.core.first(seq__15875);
var seq__15875__$1 = cljs.core.next(seq__15875);
var form__$1 = first__15876;
var forms__$2 = seq__15875__$1;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__14713 = nret;
var G__14714 = preds__$2;
var G__14715 = forms__$2;
ret__$1 = G__14713;
G__14699__$1 = G__14714;
G__14700__$1 = G__14715;
=======
var G__15877 = nret;
var G__15878 = preds__$2;
var G__15879 = forms__$2;
ret__$1 = G__15877;
G__15863__$1 = G__15878;
G__15864__$1 = G__15879;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
<<<<<<< HEAD
var G__14722 = forms;
var vec__14724 = G__14722;
var seq__14725 = cljs.core.seq(vec__14724);
var first__14726 = cljs.core.first(seq__14725);
var seq__14725__$1 = cljs.core.next(seq__14725);
var form = first__14726;
var forms__$1 = seq__14725__$1;
var G__14723 = preds;
var vec__14727 = G__14723;
var seq__14728 = cljs.core.seq(vec__14727);
var first__14729 = cljs.core.first(seq__14728);
var seq__14728__$1 = cljs.core.next(seq__14728);
var pred = first__14729;
var preds__$1 = seq__14728__$1;
var ret__$1 = ret;
var G__14722__$1 = G__14722;
var G__14723__$1 = G__14723;
while(true){
var ret__$2 = ret__$1;
var vec__14730 = G__14722__$1;
var seq__14731 = cljs.core.seq(vec__14730);
var first__14732 = cljs.core.first(seq__14731);
var seq__14731__$1 = cljs.core.next(seq__14731);
var form__$1 = first__14732;
var forms__$2 = seq__14731__$1;
var vec__14733 = G__14723__$1;
var seq__14734 = cljs.core.seq(vec__14733);
var first__14735 = cljs.core.first(seq__14734);
var seq__14734__$1 = cljs.core.next(seq__14734);
var pred__$1 = first__14735;
var preds__$2 = seq__14734__$1;
=======
var G__15886 = forms;
var vec__15888 = G__15886;
var seq__15889 = cljs.core.seq(vec__15888);
var first__15890 = cljs.core.first(seq__15889);
var seq__15889__$1 = cljs.core.next(seq__15889);
var form = first__15890;
var forms__$1 = seq__15889__$1;
var G__15887 = preds;
var vec__15891 = G__15887;
var seq__15892 = cljs.core.seq(vec__15891);
var first__15893 = cljs.core.first(seq__15892);
var seq__15892__$1 = cljs.core.next(seq__15892);
var pred = first__15893;
var preds__$1 = seq__15892__$1;
var ret__$1 = ret;
var G__15886__$1 = G__15886;
var G__15887__$1 = G__15887;
while(true){
var ret__$2 = ret__$1;
var vec__15894 = G__15886__$1;
var seq__15895 = cljs.core.seq(vec__15894);
var first__15896 = cljs.core.first(seq__15895);
var seq__15895__$1 = cljs.core.next(seq__15895);
var form__$1 = first__15896;
var forms__$2 = seq__15895__$1;
var vec__15897 = G__15887__$1;
var seq__15898 = cljs.core.seq(vec__15897);
var first__15899 = cljs.core.first(seq__15898);
var seq__15898__$1 = cljs.core.next(seq__15898);
var pred__$1 = first__15899;
var preds__$2 = seq__15898__$1;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.spec.alpha.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
<<<<<<< HEAD
var G__14736 = nret;
var G__14737 = forms__$2;
var G__14738 = preds__$2;
ret__$1 = G__14736;
G__14722__$1 = G__14737;
G__14723__$1 = G__14738;
=======
var G__15900 = nret;
var G__15901 = forms__$2;
var G__15902 = preds__$2;
ret__$1 = G__15900;
G__15886__$1 = G__15901;
G__15887__$1 = G__15902;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
<<<<<<< HEAD
var cform = (function (){var G__14741 = cljs.core.count(preds);
switch (G__14741) {
case (2):
return ((function (G__14741,specs){
=======
var cform = (function (){var G__15905 = cljs.core.count(preds);
switch (G__15905) {
case (2):
return ((function (G__15905,specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
<<<<<<< HEAD
;})(G__14741,specs))

break;
case (3):
return ((function (G__14741,specs){
=======
;})(G__15905,specs))

break;
case (3):
return ((function (G__15905,specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});
<<<<<<< HEAD
;})(G__14741,specs))

break;
default:
return ((function (G__14741,specs){
=======
;})(G__15905,specs))

break;
default:
return ((function (G__15905,specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__14746 = nret;
var G__14747 = (i + (1));
ret = G__14746;
i = G__14747;
=======
var G__15910 = nret;
var G__15911 = (i + (1));
ret = G__15910;
i = G__15911;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
return ret;
}
break;
}
});
<<<<<<< HEAD
;})(G__14741,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14742 !== 'undefined'){
=======
;})(G__15905,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15906 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14742 = (function (forms,preds,gfn,specs,cform,meta14743){
=======
cljs.spec.alpha.t_cljs$spec$alpha15906 = (function (forms,preds,gfn,specs,cform,meta15907){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
<<<<<<< HEAD
this.meta14743 = meta14743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_14744,meta14743__$1){
var self__ = this;
var _14744__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14742(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta14743__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_14744){
var self__ = this;
var _14744__$1 = this;
return self__.meta14743;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
=======
this.meta15907 = meta15907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_15908,meta15907__$1){
var self__ = this;
var _15908__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15906(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta15907__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_15908){
var self__ = this;
var _15908__$1 = this;
return self__.meta15907;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
<<<<<<< HEAD
return (function (p1__14740_SHARP_,p2__14739_SHARP_){
return cljs.spec.alpha.unform(p2__14739_SHARP_,p1__14740_SHARP_);
=======
return (function (p1__15904_SHARP_,p2__15903_SHARP_){
return cljs.spec.alpha.unform(p2__15903_SHARP_,p1__15904_SHARP_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14742.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
=======
cljs.spec.alpha.t_cljs$spec$alpha15906.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_and),self__.forms)));
});})(specs,cform))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14742.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta14743], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha14742.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14742.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14742";

cljs.spec.alpha.t_cljs$spec$alpha14742.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14742");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14742 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha14742(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta14743){
return (new cljs.spec.alpha.t_cljs$spec$alpha14742(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta14743));
=======
cljs.spec.alpha.t_cljs$spec$alpha15906.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta15907], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha15906.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15906.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15906";

cljs.spec.alpha.t_cljs$spec$alpha15906.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15906");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15906 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha15906(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15907){
return (new cljs.spec.alpha.t_cljs$spec$alpha15906(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta15907));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(specs,cform))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha14742(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15906(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__8240__auto__ = kfn;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__8240__auto__ = kform;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}
})();
if(cljs.core.not(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.alpha.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__8228__auto__ = count;
if(cljs.core.truth_(and__8228__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__8228__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9194__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9194__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__8228__auto__ = (function (){var or__8240__auto__ = min_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__8228__auto__)){
return !((((function (){var or__8240__auto__ = min_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__8240__auto__ = max_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (9007199254740991);
}
})())));
} else {
return and__8228__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),(function (){var x__9194__auto__ = (function (){var or__8240__auto__ = min_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9194__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(function (){var x__9194__auto__ = (function (){var or__8240__auto__ = max_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (9007199254740991);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__8228__auto__ = distinct;
if(cljs.core.truth_(and__8228__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__8228__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14756 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15920 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14756 = (function (forms,preds,gfn,meta14757){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta14757 = meta14757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14758,meta14757__$1){
var self__ = this;
var _14758__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14756(self__.forms,self__.preds,self__.gfn,meta14757__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14758){
var self__ = this;
var _14758__$1 = this;
return self__.meta14757;
});

cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
=======
cljs.spec.alpha.t_cljs$spec$alpha15920 = (function (forms,preds,gfn,meta15921){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta15921 = meta15921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15922,meta15921__$1){
var self__ = this;
var _15922__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15920(self__.forms,self__.preds,self__.gfn,meta15921__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15922){
var self__ = this;
var _15922__$1 = this;
return self__.meta15921;
});

cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
=======
cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__14748_SHARP_,p2__14749_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__14748_SHARP_,x,p2__14749_SHARP_);
=======
cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__15912_SHARP_,p2__15913_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__15912_SHARP_,x,p2__15913_SHARP_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.alpha.invalid_QMARK_,ms))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__14750_SHARP_){
return cljs.spec.alpha.unform(p1__14750_SHARP_,x);
=======
cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__15914_SHARP_){
return cljs.spec.alpha.unform(p1__15914_SHARP_,x);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__14751_SHARP_,p2__14752_SHARP_){
return cljs.spec.alpha.explain_1(p1__14751_SHARP_,p2__14752_SHARP_,path,via,in$,x);
=======
cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__15915_SHARP_,p2__15916_SHARP_){
return cljs.spec.alpha.explain_1(p1__15915_SHARP_,p2__15916_SHARP_,path,via,in$,x);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(___$1))
,self__.forms,self__.preds));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
=======
cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$1){
<<<<<<< HEAD
return (function (p1__14753_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__14753_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__14754_SHARP_,p2__14755_SHARP_){
return cljs.spec.alpha.gensub(p1__14754_SHARP_,overrides,path,rmap,p2__14755_SHARP_);
=======
return (function (p1__15917_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__15917_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__15918_SHARP_,p2__15919_SHARP_){
return cljs.spec.alpha.gensub(p1__15918_SHARP_,overrides,path,rmap,p2__15919_SHARP_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14756.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
=======
cljs.spec.alpha.t_cljs$spec$alpha15920.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_merge),self__.forms)));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta14757], null);
});

cljs.spec.alpha.t_cljs$spec$alpha14756.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14756.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14756";

cljs.spec.alpha.t_cljs$spec$alpha14756.cljs$lang$ctorPrWriter = (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14756");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha14756 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha14756(forms__$1,preds__$1,gfn__$1,meta14757){
return (new cljs.spec.alpha.t_cljs$spec$alpha14756(forms__$1,preds__$1,gfn__$1,meta14757));
=======
cljs.spec.alpha.t_cljs$spec$alpha15920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta15921], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15920.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15920.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15920";

cljs.spec.alpha.t_cljs$spec$alpha15920.cljs$lang$ctorPrWriter = (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15920");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha15920 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha15920(forms__$1,preds__$1,gfn__$1,meta15921){
return (new cljs.spec.alpha.t_cljs$spec$alpha15920(forms__$1,preds__$1,gfn__$1,meta15921));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha14756(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15920(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
<<<<<<< HEAD
var G__14764 = arguments.length;
switch (G__14764) {
=======
var G__15928 = arguments.length;
switch (G__15928) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

<<<<<<< HEAD
cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__14765,gfn){
var map__14766 = p__14765;
var map__14766__$1 = ((((!((map__14766 == null)))?((((map__14766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14766):map__14766);
var opts = map__14766__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$max_DASH_count);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14766__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$conform_DASH_keys);
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$distinct);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$into);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$kind);
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14766__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all);
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__14759_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__14759_SHARP_);
});})(conform_into,spec,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__15929,gfn){
var map__15930 = p__15929;
var map__15930__$1 = ((((!((map__15930 == null)))?((((map__15930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15930):map__15930);
var opts = map__15930__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$max_DASH_count);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15930__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$conform_DASH_keys);
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$distinct);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$into);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$kind);
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15930__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all);
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__15923_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__15923_SHARP_);
});})(conform_into,spec,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;
var kfn__$1 = (function (){var or__8240__auto__ = kfn;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
<<<<<<< HEAD
return ((function (or__8240__auto__,conform_into,spec,check_QMARK_,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__8240__auto__,conform_into,spec,check_QMARK_,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
return ((function (or__8242__auto__,conform_into,spec,check_QMARK_,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__8242__auto__,conform_into,spec,check_QMARK_,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__8228__auto__ = cljs.core.map_QMARK_(x);
if(and__8228__auto__){
var or__8240__auto__ = (function (){var and__8228__auto____$1 = kind;
if(cljs.core.truth_(and__8228__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__8228__auto____$1;
}
})();
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__8228__auto__;
}
})())){
<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || ((cljs.core.not(conform_into)) && ((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__14760_SHARP_){
return cljs.core.empty((function (){var or__8240__auto__ = conform_into;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return p1__14760_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__15924_SHARP_){
return cljs.core.empty((function (){var or__8242__auto__ = conform_into;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return p1__15924_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,addcv,cljs.core.identity], null);

}
}
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha14768 !== 'undefined'){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15932 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha14768 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,p__14765,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,map__14766,count,min_count,opts,kind,conform_all,conform_into,meta14769){
this.form = form;
this.max_count = max_count;
=======
cljs.spec.alpha.t_cljs$spec$alpha15932 = (function (form,max_count,p__15929,check_QMARK_,gfn,gen_max,pred,map__15930,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta15933){
this.form = form;
this.max_count = max_count;
this.p__15929 = p__15929;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
<<<<<<< HEAD
this.p__14765 = p__14765;
=======
this.map__15930 = map__15930;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.map__14766 = map__14766;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
<<<<<<< HEAD
this.meta14769 = meta14769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_14770,meta14769__$1){
var self__ = this;
var _14770__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha14768(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.p__14765,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.map__14766,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta14769__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_14770){
var self__ = this;
var _14770__$1 = this;
return self__.meta14769;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
this.meta15933 = meta15933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_15934,meta15933__$1){
var self__ = this;
var _15934__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15932(self__.form,self__.max_count,self__.p__15929,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.map__15930,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta15933__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_15934){
var self__ = this;
var _15934__$1 = this;
return self__.meta15933;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref(self__.spec);
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
<<<<<<< HEAD
var vec__14771 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__14777 = cljs.core.seq(x);
var vec__14778 = G__14777;
var seq__14779 = cljs.core.seq(vec__14778);
var first__14780 = cljs.core.first(seq__14779);
var seq__14779__$1 = cljs.core.next(seq__14779);
var v = first__14780;
var vs = seq__14779__$1;
var vseq = vec__14778;
var ret__$1 = ret;
var i__$1 = i;
var G__14777__$1 = G__14777;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__14781 = G__14777__$1;
var seq__14782 = cljs.core.seq(vec__14781);
var first__14783 = cljs.core.first(seq__14782);
var seq__14782__$1 = cljs.core.next(seq__14782);
var v__$1 = first__14783;
var vs__$1 = seq__14782__$1;
var vseq__$1 = vec__14781;
=======
var vec__15935 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15935,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15935,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15935,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__15941 = cljs.core.seq(x);
var vec__15942 = G__15941;
var seq__15943 = cljs.core.seq(vec__15942);
var first__15944 = cljs.core.first(seq__15943);
var seq__15943__$1 = cljs.core.next(seq__15943);
var v = first__15944;
var vs = seq__15943__$1;
var vseq = vec__15942;
var ret__$1 = ret;
var i__$1 = i;
var G__15941__$1 = G__15941;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15945 = G__15941__$1;
var seq__15946 = cljs.core.seq(vec__15945);
var first__15947 = cljs.core.first(seq__15946);
var seq__15946__$1 = cljs.core.next(seq__15946);
var v__$1 = first__15947;
var vs__$1 = seq__15946__$1;
var vseq__$1 = vec__15945;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_(spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
<<<<<<< HEAD
var G__14814 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__14815 = (i__$2 + (1));
var G__14816 = vs__$1;
ret__$1 = G__14814;
i__$1 = G__14815;
G__14777__$1 = G__14816;
=======
var G__15978 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__15979 = (i__$2 + (1));
var G__15980 = vs__$1;
ret__$1 = G__15978;
i__$1 = G__15979;
G__15941__$1 = G__15980;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__8592__auto__ = (1);
var y__8593__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__8592__auto__ > y__8593__auto__) ? x__8592__auto__ : y__8593__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i)))){
<<<<<<< HEAD
var G__14817 = (i + step);
i = G__14817;
=======
var G__15981 = (i + step);
i = G__15981;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
<<<<<<< HEAD
var G__14787 = cljs.core.seq(x);
var vec__14788 = G__14787;
var seq__14789 = cljs.core.seq(vec__14788);
var first__14790 = cljs.core.first(seq__14789);
var seq__14789__$1 = cljs.core.next(seq__14789);
var v = first__14790;
var vs = seq__14789__$1;
var vseq = vec__14788;
var i__$1 = i;
var G__14787__$1 = G__14787;
while(true){
var i__$2 = i__$1;
var vec__14791 = G__14787__$1;
var seq__14792 = cljs.core.seq(vec__14791);
var first__14793 = cljs.core.first(seq__14792);
var seq__14792__$1 = cljs.core.next(seq__14792);
var v__$1 = first__14793;
var vs__$1 = seq__14792__$1;
var vseq__$1 = vec__14791;
=======
var G__15951 = cljs.core.seq(x);
var vec__15952 = G__15951;
var seq__15953 = cljs.core.seq(vec__15952);
var first__15954 = cljs.core.first(seq__15953);
var seq__15953__$1 = cljs.core.next(seq__15953);
var v = first__15954;
var vs = seq__15953__$1;
var vseq = vec__15952;
var i__$1 = i;
var G__15951__$1 = G__15951;
while(true){
var i__$2 = i__$1;
var vec__15955 = G__15951__$1;
var seq__15956 = cljs.core.seq(vec__15955);
var first__15957 = cljs.core.first(seq__15956);
var seq__15956__$1 = cljs.core.next(seq__15956);
var v__$1 = first__15957;
var vs__$1 = seq__15956__$1;
var vseq__$1 = vec__15955;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1))){
<<<<<<< HEAD
var G__14818 = (i__$2 + (1));
var G__14819 = vs__$1;
i__$1 = G__14818;
G__14787__$1 = G__14819;
=======
var G__15982 = (i__$2 + (1));
var G__15983 = vs__$1;
i__$1 = G__15982;
G__15951__$1 = G__15983;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;

}
}
break;
}
}

}
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref(self__.spec);
<<<<<<< HEAD
var vec__14794 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__14800 = cljs.core.seq(x);
var vec__14801 = G__14800;
var seq__14802 = cljs.core.seq(vec__14801);
var first__14803 = cljs.core.first(seq__14802);
var seq__14802__$1 = cljs.core.next(seq__14802);
var v = first__14803;
var vs = seq__14802__$1;
var vseq = vec__14801;
var ret__$1 = ret;
var i__$1 = i;
var G__14800__$1 = G__14800;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__14804 = G__14800__$1;
var seq__14805 = cljs.core.seq(vec__14804);
var first__14806 = cljs.core.first(seq__14805);
var seq__14805__$1 = cljs.core.next(seq__14805);
var v__$1 = first__14806;
var vs__$1 = seq__14805__$1;
var vseq__$1 = vec__14804;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__14820 = (function (){var G__14807 = ret__$2;
var G__14808 = i__$2;
var G__14809 = v__$1;
var G__14810 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__14807,G__14808,G__14809,G__14810) : add.call(null,G__14807,G__14808,G__14809,G__14810));
})();
var G__14821 = (i__$2 + (1));
var G__14822 = vs__$1;
ret__$1 = G__14820;
i__$1 = G__14821;
G__14800__$1 = G__14822;
=======
var vec__15958 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15958,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15958,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15958,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__15964 = cljs.core.seq(x);
var vec__15965 = G__15964;
var seq__15966 = cljs.core.seq(vec__15965);
var first__15967 = cljs.core.first(seq__15966);
var seq__15966__$1 = cljs.core.next(seq__15966);
var v = first__15967;
var vs = seq__15966__$1;
var vseq = vec__15965;
var ret__$1 = ret;
var i__$1 = i;
var G__15964__$1 = G__15964;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__15968 = G__15964__$1;
var seq__15969 = cljs.core.seq(vec__15968);
var first__15970 = cljs.core.first(seq__15969);
var seq__15969__$1 = cljs.core.next(seq__15969);
var v__$1 = first__15970;
var vs__$1 = seq__15969__$1;
var vseq__$1 = vec__15968;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__15984 = (function (){var G__15971 = ret__$2;
var G__15972 = i__$2;
var G__15973 = v__$1;
var G__15974 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__15971,G__15972,G__15973,G__15974) : add.call(null,G__15971,G__15972,G__15973,G__15974));
})();
var G__15985 = (i__$2 + (1));
var G__15986 = vs__$1;
ret__$1 = G__15984;
i__$1 = G__15985;
G__15964__$1 = G__15986;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
break;
}
} else {
return x;
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__8240__auto__ = cljs.spec.alpha.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
<<<<<<< HEAD
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__14812 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__8240__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__15976 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__8242__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
<<<<<<< HEAD
});})(or__8240__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__14811 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__14811.cljs$core$IFn$_invoke$arity$1 ? fexpr__14811.cljs$core$IFn$_invoke$arity$1(G__14812) : fexpr__14811.call(null,G__14812));
})());
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(or__8242__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__15975 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__15975.cljs$core$IFn$_invoke$arity$1 ? fexpr__15975.cljs$core$IFn$_invoke$arity$1(G__15976) : fexpr__15975.call(null,G__15976));
})());
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.alpha.gensub(self__.pred,overrides,path,rmap,self__.form);
<<<<<<< HEAD
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__14761_SHARP_){
if(cljs.core.empty_QMARK_(p1__14761_SHARP_)){
return p1__14761_SHARP_;
} else {
return cljs.core.empty(p1__14761_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__14762_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__14762_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__14762_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__8240__auto__ = self__.min_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__15925_SHARP_){
if(cljs.core.empty_QMARK_(p1__15925_SHARP_)){
return p1__15925_SHARP_;
} else {
return cljs.core.empty(p1__15925_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__15926_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__15926_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__15926_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__8242__auto__ = self__.min_count;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__8240__auto__ = self__.max_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var x__8592__auto__ = self__.gen_max;
var y__8593__auto__ = ((2) * (function (){var or__8240__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__8240__auto____$1)){
return or__8240__auto____$1;
} else {
return (0);
}
})());
return ((x__8592__auto__ > y__8593__auto__) ? x__8592__auto__ : y__8593__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__8240__auto__ = self__.min_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(function (){var or__8240__auto__ = self__.min_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})(),(function (){var or__8240__auto__ = self__.max_count;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var x__8592__auto__ = self__.gen_max;
var y__8593__auto__ = ((2) * (function (){var or__8240__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__8240__auto____$1)){
return or__8240__auto____$1;
} else {
return (0);
}
})());
return ((x__8592__auto__ > y__8593__auto__) ? x__8592__auto__ : y__8593__auto__);
}
})()], 0)):cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(0),self__.gen_max], 0))
)))], 0));
<<<<<<< HEAD
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_){
var self__ = this;
var ___$1 = this;
var or__8240__auto__ = self__.describe_form;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_every),(function (){var x__9194__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts], 0))], 0))));
}
<<<<<<< HEAD
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$pred,cljs.core.cst$sym$p__14765,cljs.core.cst$sym$cpred,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$describe_DASH_form,cljs.core.cst$sym$distinct,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$map__14766,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta14769], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha14768.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha14768.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha14768";

cljs.spec.alpha.t_cljs$spec$alpha14768.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha14768");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha14768 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha14768(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__14765__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,map__14766__$2,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta14769){
return (new cljs.spec.alpha.t_cljs$spec$alpha14768(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__14765__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,map__14766__$2,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta14769));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__14766,map__14766__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
=======
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$p__15929,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$pred,cljs.core.cst$sym$map__15930,cljs.core.cst$sym$cpred,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$describe_DASH_form,cljs.core.cst$sym$distinct,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta15933], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha15932.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15932.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15932";

cljs.spec.alpha.t_cljs$spec$alpha15932.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15932");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15932 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha15932(form__$1,max_count__$1,p__15929__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,map__15930__$2,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta15933){
return (new cljs.spec.alpha.t_cljs$spec$alpha15932(form__$1,max_count__$1,p__15929__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,map__15930__$2,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta15933));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__15930,map__15930__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha14768(form,max_count,check_QMARK_,gfn,gen_max,pred,p__14765,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,map__14766__$1,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha15932(form,max_count,p__15929,check_QMARK_,gfn,gen_max,pred,map__15930__$1,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
<<<<<<< HEAD
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__14823){
var map__14824 = p__14823;
var map__14824__$1 = ((((!((map__14824 == null)))?((((map__14824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14824):map__14824);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14824__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__14826){
var map__14827 = p__14826;
var map__14827__$1 = ((((!((map__14827 == null)))?((((map__14827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14827):map__14827);
var vec__14828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,cljs.core.cst$kw$ps);
var seq__14829 = cljs.core.seq(vec__14828);
var first__14830 = cljs.core.first(seq__14829);
var seq__14829__$1 = cljs.core.next(seq__14829);
var p1 = first__14830;
var pr = seq__14829__$1;
var ps = vec__14828;
var vec__14831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,cljs.core.cst$kw$ks);
var seq__14832 = cljs.core.seq(vec__14831);
var first__14833 = cljs.core.first(seq__14832);
var seq__14832__$1 = cljs.core.next(seq__14832);
var k1 = first__14833;
var kr = seq__14832__$1;
var ks = vec__14831;
var vec__14834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,cljs.core.cst$kw$forms);
var seq__14835 = cljs.core.seq(vec__14834);
var first__14836 = cljs.core.first(seq__14835);
var seq__14835__$1 = cljs.core.next(seq__14835);
var f1 = first__14836;
var fr = seq__14835__$1;
var forms = vec__14834;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,cljs.core.cst$kw$rep_PLUS_);
=======
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__15987){
var map__15988 = p__15987;
var map__15988__$1 = ((((!((map__15988 == null)))?((((map__15988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15988):map__15988);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15988__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__15990){
var map__15991 = p__15990;
var map__15991__$1 = ((((!((map__15991 == null)))?((((map__15991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15991):map__15991);
var vec__15992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15991__$1,cljs.core.cst$kw$ps);
var seq__15993 = cljs.core.seq(vec__15992);
var first__15994 = cljs.core.first(seq__15993);
var seq__15993__$1 = cljs.core.next(seq__15993);
var p1 = first__15994;
var pr = seq__15993__$1;
var ps = vec__15992;
var vec__15995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15991__$1,cljs.core.cst$kw$ks);
var seq__15996 = cljs.core.seq(vec__15995);
var first__15997 = cljs.core.first(seq__15996);
var seq__15996__$1 = cljs.core.next(seq__15996);
var k1 = first__15997;
var kr = seq__15996__$1;
var ks = vec__15995;
var vec__15998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15991__$1,cljs.core.cst$kw$forms);
var seq__15999 = cljs.core.seq(vec__15998);
var first__16000 = cljs.core.first(seq__15999);
var seq__15999__$1 = cljs.core.next(seq__15999);
var f1 = first__16000;
var fr = seq__15999__$1;
var forms = vec__15998;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15991__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15991__$1,cljs.core.cst$kw$rep_PLUS_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
<<<<<<< HEAD
var G__14838 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__14838) : cljs.spec.alpha.pcat_STAR_.call(null,G__14838));
=======
var G__16002 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__16002) : cljs.spec.alpha.pcat_STAR_.call(null,G__16002));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___14840 = arguments.length;
var i__9518__auto___14841 = (0);
while(true){
if((i__9518__auto___14841 < len__9517__auto___14840)){
args__9524__auto__.push((arguments[i__9518__auto___14841]));

var G__14842 = (i__9518__auto___14841 + (1));
i__9518__auto___14841 = G__14842;
=======
var args__9526__auto__ = [];
var len__9519__auto___16004 = arguments.length;
var i__9520__auto___16005 = (0);
while(true){
if((i__9520__auto___16005 < len__9519__auto___16004)){
args__9526__auto__.push((arguments[i__9520__auto___16005]));

var G__16006 = (i__9520__auto___16005 + (1));
i__9520__auto___16005 = G__16006;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq14839){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14839));
=======
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq16003){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16003));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9194__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(function (){var x__9194__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_),(function (){var x__9194__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})())))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__8240__auto__ = ks;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return forms;
}
})())){
<<<<<<< HEAD
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14843_SHARP_){
var G__14845 = cljs.core.first(p1__14843_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14845) : f.call(null,G__14845));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8240__auto__ = cljs.core.seq(ks);
if(or__8240__auto__){
return or__8240__auto__;
=======
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16007_SHARP_){
var G__16009 = cljs.core.first(p1__16007_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16009) : f.call(null,G__16009));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8242__auto__ = cljs.core.seq(ks);
if(or__8242__auto__){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8240__auto__ = cljs.core.seq(forms);
if(or__8240__auto__){
return or__8240__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
<<<<<<< HEAD
return (function (p1__14844_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__14844_SHARP_,(2));
=======
return (function (p1__16008_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__16008_SHARP_,(2));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
<<<<<<< HEAD
var vec__14846 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__14849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14846,(0),null);
var seq__14850 = cljs.core.seq(vec__14849);
var first__14851 = cljs.core.first(seq__14850);
var seq__14850__$1 = cljs.core.next(seq__14850);
var p1 = first__14851;
var pr = seq__14850__$1;
var ps__$1 = vec__14849;
var vec__14852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14846,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14852,(0),null);
var ks__$1 = vec__14852;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14846,(2),null);
=======
var vec__16010 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__16013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16010,(0),null);
var seq__16014 = cljs.core.seq(vec__16013);
var first__16015 = cljs.core.first(seq__16014);
var seq__16014__$1 = cljs.core.next(seq__16014);
var p1 = first__16015;
var pr = seq__16014__$1;
var ps__$1 = vec__16013;
var vec__16016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16010,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16016,(0),null);
var ks__$1 = vec__16016;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16010,(2),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.spec.alpha.accept(cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___14856 = arguments.length;
var i__9518__auto___14857 = (0);
while(true){
if((i__9518__auto___14857 < len__9517__auto___14856)){
args__9524__auto__.push((arguments[i__9518__auto___14857]));

var G__14858 = (i__9518__auto___14857 + (1));
i__9518__auto___14857 = G__14858;
=======
var args__9526__auto__ = [];
var len__9519__auto___16020 = arguments.length;
var i__9520__auto___16021 = (0);
while(true){
if((i__9520__auto___16021 < len__9519__auto___16020)){
args__9526__auto__.push((arguments[i__9520__auto___16021]));

var G__16022 = (i__9520__auto___16021 + (1));
i__9520__auto___16021 = G__16022;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_(ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq14855){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14855));
=======
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq16019){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16019));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__8228__auto__ = p1;
if(cljs.core.truth_(and__8228__auto__)){
return p2;
} else {
return and__8228__auto__;
}
})())){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__8240__auto__ = p1;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept(cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil], null)),cljs.core.cst$kw$maybe,form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__8240__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil);
if(or__8240__auto__){
return or__8240__auto__;
} else {
<<<<<<< HEAD
var or__8240__auto____$1 = (function (){var and__8228__auto__ = (function (){var G__14870 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__14869 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,null], null), null);
return (fexpr__14869.cljs$core$IFn$_invoke$arity$1 ? fexpr__14869.cljs$core$IFn$_invoke$arity$1(G__14870) : fexpr__14869.call(null,G__14870));
=======
var or__8242__auto____$1 = (function (){var and__8230__auto__ = (function (){var G__16034 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__16033 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,null], null), null);
return (fexpr__16033.cljs$core$IFn$_invoke$arity$1 ? fexpr__16033.cljs$core$IFn$_invoke$arity$1(G__16034) : fexpr__16033.call(null,G__16034));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
if(cljs.core.truth_(and__8228__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__8228__auto__;
}
})();
if(cljs.core.truth_(or__8240__auto____$1)){
return or__8240__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
<<<<<<< HEAD
var map__14871 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__14871__$1 = ((((!((map__14871 == null)))?((((map__14871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14871):map__14871);
var p__$1 = map__14871__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14871__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14871__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14871__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14871__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14871__$1,cljs.core.cst$kw$forms);
var G__14873 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__14873)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14873)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__14873)){
var and__8228__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__8228__auto__)){
var or__8240__auto__ = cljs.spec.alpha.noret_QMARK_(p1,(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)));
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
var map__16035 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16035__$1 = ((((!((map__16035 == null)))?((((map__16035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16035):map__16035);
var p__$1 = map__16035__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16035__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16035__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16035__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16035__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16035__$1,cljs.core.cst$kw$forms);
var G__16037 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16037)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16037)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16037)){
var and__8230__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__8230__auto__)){
var or__8242__auto__ = cljs.spec.alpha.noret_QMARK_(p1,(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)));
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
var ret = cljs.spec.alpha.and_preds((cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(ret));
}
} else {
return and__8228__auto__;
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__14873)){
var or__8240__auto__ = (p1 === p2);
if(or__8240__auto__){
return or__8240__auto__;
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16037)){
var or__8242__auto__ = (p1 === p2);
if(or__8242__auto__){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__14873)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__14873)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14873)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16037)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16037)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16037)].join('')));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
<<<<<<< HEAD
var map__14874 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__14874__$1 = ((((!((map__14874 == null)))?((((map__14874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14874):map__14874);
var p__$1 = map__14874__$1;
var vec__14875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$ps);
var seq__14876 = cljs.core.seq(vec__14875);
var first__14877 = cljs.core.first(seq__14876);
var seq__14876__$1 = cljs.core.next(seq__14876);
var p0 = first__14877;
var pr = seq__14876__$1;
var ps = vec__14875;
var vec__14878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14878,(0),null);
var ks = vec__14878;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14874__$1,cljs.core.cst$kw$forms);
var G__14882 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__14882)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14882)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__14882)){
=======
var map__16038 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16038__$1 = ((((!((map__16038 == null)))?((((map__16038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16038):map__16038);
var p__$1 = map__16038__$1;
var vec__16039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16038__$1,cljs.core.cst$kw$ps);
var seq__16040 = cljs.core.seq(vec__16039);
var first__16041 = cljs.core.first(seq__16040);
var seq__16040__$1 = cljs.core.next(seq__16040);
var p0 = first__16041;
var pr = seq__16040__$1;
var ps = vec__16039;
var vec__16042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16038__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16042,(0),null);
var ks = vec__16042;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16038__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16038__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16038__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16038__$1,cljs.core.cst$kw$forms);
var G__16046 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16046)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16046)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16046)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var pret = (cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil;
} else {
return cljs.spec.alpha.and_preds(pret,ps,forms);
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__14882)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.alpha.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__14882)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.alpha.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__14882)){
var vec__14883 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__14886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14886,(0),null);
var vec__14889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14889,(0),null);
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16046)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.alpha.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16046)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.alpha.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16046)){
var vec__16047 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__16050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16047,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16050,(0),null);
var vec__16053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16047,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16053,(0),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil:(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.alpha.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14882)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16046)].join('')));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
<<<<<<< HEAD
var map__14896 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__14896__$1 = ((((!((map__14896 == null)))?((((map__14896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14896):map__14896);
var p__$1 = map__14896__$1;
var vec__14897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14896__$1,cljs.core.cst$kw$ps);
var seq__14898 = cljs.core.seq(vec__14897);
var first__14899 = cljs.core.first(seq__14898);
var seq__14898__$1 = cljs.core.next(seq__14898);
var p0 = first__14899;
var pr = seq__14898__$1;
var ps = vec__14897;
var vec__14900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14896__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14900,(0),null);
var ks = vec__14900;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14896__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14896__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14896__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14896__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14896__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14896__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__14904 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__14904)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14904)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__14904)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__14904,map__14896,map__14896__$1,p__$1,vec__14897,seq__14898,first__14899,seq__14898__$1,p0,pr,ps,vec__14900,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__14893_SHARP_,p2__14892_SHARP_){
return cljs.spec.alpha.unform(p2__14892_SHARP_,p1__14893_SHARP_);
});})(G__14904,map__14896,map__14896__$1,p__$1,vec__14897,seq__14898,first__14899,seq__14898__$1,p0,pr,ps,vec__14900,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__14904)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__14904,map__14896,map__14896__$1,p__$1,vec__14897,seq__14898,first__14899,seq__14898__$1,p0,pr,ps,vec__14900,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__14894_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__14894_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__14894_SHARP_));
});})(G__14904,map__14896,map__14896__$1,p__$1,vec__14897,seq__14898,first__14899,seq__14898__$1,p0,pr,ps,vec__14900,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__14904)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__14904,map__14896,map__14896__$1,p__$1,vec__14897,seq__14898,first__14899,seq__14898__$1,p0,pr,ps,vec__14900,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__14895_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__14895_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__14895_SHARP_));
});})(G__14904,map__14896,map__14896__$1,p__$1,vec__14897,seq__14898,first__14899,seq__14898__$1,p0,pr,ps,vec__14900,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__14904,map__14896,map__14896__$1,p__$1,vec__14897,seq__14898,first__14899,seq__14898__$1,p0,pr,ps,vec__14900,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__14905 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__14906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__14905,G__14906) : cljs.spec.alpha.op_unform.call(null,G__14905,G__14906));
} else {
return null;
}
});})(G__14904,map__14896,map__14896__$1,p__$1,vec__14897,seq__14898,first__14899,seq__14898__$1,p0,pr,ps,vec__14900,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__14904)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__14907 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907,(1),null);
var G__14910 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__14911 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__14910,G__14911) : cljs.spec.alpha.op_unform.call(null,G__14910,G__14911));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14904)].join('')));
=======
var map__16060 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16060__$1 = ((((!((map__16060 == null)))?((((map__16060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16060):map__16060);
var p__$1 = map__16060__$1;
var vec__16061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16060__$1,cljs.core.cst$kw$ps);
var seq__16062 = cljs.core.seq(vec__16061);
var first__16063 = cljs.core.first(seq__16062);
var seq__16062__$1 = cljs.core.next(seq__16062);
var p0 = first__16063;
var pr = seq__16062__$1;
var ps = vec__16061;
var vec__16064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16060__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064,(0),null);
var ks = vec__16064;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16060__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16060__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16060__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16060__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16060__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16060__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__16068 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16068)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16068)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16068)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__16068,map__16060,map__16060__$1,p__$1,vec__16061,seq__16062,first__16063,seq__16062__$1,p0,pr,ps,vec__16064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__16057_SHARP_,p2__16056_SHARP_){
return cljs.spec.alpha.unform(p2__16056_SHARP_,p1__16057_SHARP_);
});})(G__16068,map__16060,map__16060__$1,p__$1,vec__16061,seq__16062,first__16063,seq__16062__$1,p0,pr,ps,vec__16064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16068)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__16068,map__16060,map__16060__$1,p__$1,vec__16061,seq__16062,first__16063,seq__16062__$1,p0,pr,ps,vec__16064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__16058_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__16058_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__16058_SHARP_));
});})(G__16068,map__16060,map__16060__$1,p__$1,vec__16061,seq__16062,first__16063,seq__16062__$1,p0,pr,ps,vec__16064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16068)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__16068,map__16060,map__16060__$1,p__$1,vec__16061,seq__16062,first__16063,seq__16062__$1,p0,pr,ps,vec__16064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__16059_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__16059_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__16059_SHARP_));
});})(G__16068,map__16060,map__16060__$1,p__$1,vec__16061,seq__16062,first__16063,seq__16062__$1,p0,pr,ps,vec__16064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__16068,map__16060,map__16060__$1,p__$1,vec__16061,seq__16062,first__16063,seq__16062__$1,p0,pr,ps,vec__16064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__16069 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__16070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__16069,G__16070) : cljs.spec.alpha.op_unform.call(null,G__16069,G__16070));
} else {
return null;
}
});})(G__16068,map__16060,map__16060__$1,p__$1,vec__16061,seq__16062,first__16063,seq__16062__$1,p0,pr,ps,vec__16064,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16068)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__16071 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16071,(1),null);
var G__16074 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__16075 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__16074,G__16075) : cljs.spec.alpha.op_unform.call(null,G__16074,G__16075));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16068)].join('')));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
<<<<<<< HEAD
var map__14912 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__14912__$1 = ((((!((map__14912 == null)))?((((map__14912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14912):map__14912);
var p__$1 = map__14912__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14912__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14912__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14912__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__14912,map__14912__$1,p__$1,op,ps,splice){
=======
var map__16076 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16076__$1 = ((((!((map__16076 == null)))?((((map__16076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16076):map__16076);
var p__$1 = map__16076__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16076__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__16076,map__16076__$1,p__$1,op,ps,splice){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
<<<<<<< HEAD
var G__14915 = r;
var G__14916 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__14914 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__14914.cljs$core$IFn$_invoke$arity$2 ? fexpr__14914.cljs$core$IFn$_invoke$arity$2(G__14915,G__14916) : fexpr__14914.call(null,G__14915,G__14916));
}
});})(map__14912,map__14912__$1,p__$1,op,ps,splice))
;
var G__14917 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14917)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__14917)){
=======
var G__16079 = r;
var G__16080 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__16078 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__16078.cljs$core$IFn$_invoke$arity$2 ? fexpr__16078.cljs$core$IFn$_invoke$arity$2(G__16079,G__16080) : fexpr__16078.call(null,G__16079,G__16080));
}
});})(map__16076,map__16076__$1,p__$1,op,ps,splice))
;
var G__16081 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16081)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16081)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__14917)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16081)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__14917)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16081)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__14917)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__14917)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14917)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16081)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16081)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16081)].join('')));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
<<<<<<< HEAD
var map__14919 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__14919__$1 = ((((!((map__14919 == null)))?((((map__14919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14919):map__14919);
var p__$1 = map__14919__$1;
var vec__14920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14919__$1,cljs.core.cst$kw$ps);
var seq__14921 = cljs.core.seq(vec__14920);
var first__14922 = cljs.core.first(seq__14921);
var seq__14921__$1 = cljs.core.next(seq__14921);
var p0 = first__14922;
var pr = seq__14921__$1;
var ps = vec__14920;
var vec__14923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14919__$1,cljs.core.cst$kw$ks);
var seq__14924 = cljs.core.seq(vec__14923);
var first__14925 = cljs.core.first(seq__14924);
var seq__14924__$1 = cljs.core.next(seq__14924);
var k0 = first__14925;
var kr = seq__14924__$1;
var ks = vec__14923;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14919__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14919__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14919__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14919__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14919__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14919__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__14927 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__14927)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14927)){
=======
var map__16083 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16083__$1 = ((((!((map__16083 == null)))?((((map__16083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16083):map__16083);
var p__$1 = map__16083__$1;
var vec__16084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16083__$1,cljs.core.cst$kw$ps);
var seq__16085 = cljs.core.seq(vec__16084);
var first__16086 = cljs.core.first(seq__16085);
var seq__16085__$1 = cljs.core.next(seq__16085);
var p0 = first__16086;
var pr = seq__16085__$1;
var ps = vec__16084;
var vec__16087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16083__$1,cljs.core.cst$kw$ks);
var seq__16088 = cljs.core.seq(vec__16087);
var first__16089 = cljs.core.first(seq__16088);
var seq__16088__$1 = cljs.core.next(seq__16088);
var k0 = first__16089;
var kr = seq__16088__$1;
var ks = vec__16087;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16083__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16083__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16083__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16083__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16083__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16083__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__16091 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16091)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16091)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var ret__$1 = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__14927)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16091)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var temp__5290__auto__ = (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__5290__auto__)){
var p1__$1 = temp__5290__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__14927)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__14928 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__14929 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__14928,G__14929) : cljs.spec.alpha.deriv.call(null,G__14928,G__14929));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__14927)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__14927,map__14919,map__14919__$1,p__$1,vec__14920,seq__14921,first__14922,seq__14921__$1,p0,pr,ps,vec__14923,seq__14924,first__14925,seq__14924__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__14918_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__14918_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__14918_SHARP_,x));
});})(G__14927,map__14919,map__14919__$1,p__$1,vec__14920,seq__14921,first__14922,seq__14921__$1,p0,pr,ps,vec__14923,seq__14924,first__14925,seq__14924__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__14927)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__14930 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__14931 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__14930,G__14931) : cljs.spec.alpha.deriv.call(null,G__14930,G__14931));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14927)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16091)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__16092 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__16093 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__16092,G__16093) : cljs.spec.alpha.deriv.call(null,G__16092,G__16093));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16091)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16091,map__16083,map__16083__$1,p__$1,vec__16084,seq__16085,first__16086,seq__16085__$1,p0,pr,ps,vec__16087,seq__16088,first__16089,seq__16088__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__16082_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__16082_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__16082_SHARP_,x));
});})(G__16091,map__16083,map__16083__$1,p__$1,vec__16084,seq__16085,first__16086,seq__16085__$1,p0,pr,ps,vec__16087,seq__16088,first__16089,seq__16088__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16091)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__16094 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__16095 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__16094,G__16095) : cljs.spec.alpha.deriv.call(null,G__16094,G__16095));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16091)].join('')));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
<<<<<<< HEAD
var map__14932 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__14932__$1 = ((((!((map__14932 == null)))?((((map__14932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14932):map__14932);
var p__$1 = map__14932__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14932__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14932__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14932__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14932__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14932__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14932__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14932__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14932__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__14934 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__14934)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14934)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__14934)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$spec$alpha_SLASH__AMPERSAND_,(cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__14934)){
=======
var map__16096 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16096__$1 = ((((!((map__16096 == null)))?((((map__16096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16096):map__16096);
var p__$1 = map__16096__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__16098 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16098)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16098)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16098)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$spec$alpha_SLASH__AMPERSAND_,(cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16098)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__9194__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__8240__auto__ = cljs.core.seq(ks);
if(or__8240__auto__){
return or__8240__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),forms], 0)));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__14934)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16098)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__9194__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,forms], 0)));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__14934)){
var x__9194__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_);
return cljs.core._conj((function (){var x__9194__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14934)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16098)){
var x__9196__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_);
return cljs.core._conj((function (){var x__9196__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16098)].join('')));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
<<<<<<< HEAD
var vec__14935 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14935,(0),null);
var input__$1 = vec__14935;
var map__14938 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__14938__$1 = ((((!((map__14938 == null)))?((((map__14938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14938):map__14938);
var p__$1 = map__14938__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14938__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14938__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14938__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14938__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14938__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14938__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14938__$1,cljs.core.cst$kw$p2);
=======
var vec__16099 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16099,(0),null);
var input__$1 = vec__16099;
var map__16102 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16102__$1 = ((((!((map__16102 == null)))?((((map__16102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16102):map__16102);
var p__$1 = map__16102__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,cljs.core.cst$kw$p2);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var via__$1 = (function (){var temp__5288__auto__ = cljs.spec.alpha.spec_name(p__$1);
if(cljs.core.truth_(temp__5288__auto__)){
var name = temp__5288__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
<<<<<<< HEAD
var insufficient = ((function (vec__14935,x,input__$1,map__14938,map__14938__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,form__$1,cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__14935,x,input__$1,map__14938,map__14938__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__14940 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__14940)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14940)){
=======
var insufficient = ((function (vec__16099,x,input__$1,map__16102,map__16102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,form__$1,cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__16099,x,input__$1,map__16102,map__16102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__16104 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16104)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16104)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.alpha.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__14940)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16104)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))){
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1));
} else {
return insufficient(path,cljs.spec.alpha.op_describe(p1));
}
} else {
var temp__5288__auto__ = cljs.spec.alpha.deriv(p1,x);
if(cljs.core.truth_(temp__5288__auto__)){
var p1__$1 = temp__5288__auto__;
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1__$1));
} else {
<<<<<<< HEAD
var G__14941 = cljs.spec.alpha.op_describe(p1);
var G__14942 = p1;
var G__14943 = path;
var G__14944 = via__$1;
var G__14945 = in$;
var G__14946 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__14941,G__14942,G__14943,G__14944,G__14945,G__14946) : cljs.spec.alpha.op_explain.call(null,G__14941,G__14942,G__14943,G__14944,G__14945,G__14946));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__14940)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8240__auto__ = cljs.core.seq(ks);
if(or__8240__auto__){
return or__8240__auto__;
=======
var G__16105 = cljs.spec.alpha.op_describe(p1);
var G__16106 = p1;
var G__16107 = path;
var G__16108 = via__$1;
var G__16109 = in$;
var G__16110 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__16105,G__16106,G__16107,G__16108,G__16109,G__16110) : cljs.spec.alpha.op_explain.call(null,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16104)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8242__auto__ = cljs.core.seq(ks);
if(or__8242__auto__){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8240__auto__ = cljs.core.seq(forms);
if(or__8240__auto__){
return or__8240__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
<<<<<<< HEAD
var vec__14947 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__14940,vec__14935,x,input__$1,map__14938,map__14938__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__14950){
var vec__14951 = p__14950;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14951,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
});})(pkfs,G__14940,vec__14935,x,input__$1,map__14938,map__14938__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947,(2),null);
=======
var vec__16111 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__16104,vec__16099,x,input__$1,map__16102,map__16102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__16114){
var vec__16115 = p__16114;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16115,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
});})(pkfs,G__16104,vec__16099,x,input__$1,map__16102,map__16102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(2),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__8240__auto__ = form__$1;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__14940)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__14940,vec__14935,x,input__$1,map__14938,map__14938__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__14954 = (function (){var or__8240__auto__ = form__$1;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16104)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__16104,vec__16099,x,input__$1,map__16102,map__16102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__16118 = (function (){var or__8242__auto__ = form__$1;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
<<<<<<< HEAD
var G__14955 = pred;
var G__14956 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__14957 = via__$1;
var G__14958 = in$;
var G__14959 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__14954,G__14955,G__14956,G__14957,G__14958,G__14959) : cljs.spec.alpha.op_explain.call(null,G__14954,G__14955,G__14956,G__14957,G__14958,G__14959));
});})(G__14940,vec__14935,x,input__$1,map__14938,map__14938__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__8240__auto__ = cljs.core.seq(ks);
if(or__8240__auto__){
return or__8240__auto__;
=======
var G__16119 = pred;
var G__16120 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__16121 = via__$1;
var G__16122 = in$;
var G__16123 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__16118,G__16119,G__16120,G__16121,G__16122,G__16123) : cljs.spec.alpha.op_explain.call(null,G__16118,G__16119,G__16120,G__16121,G__16122,G__16123));
});})(G__16104,vec__16099,x,input__$1,map__16102,map__16102__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__8242__auto__ = cljs.core.seq(ks);
if(or__8242__auto__){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8240__auto__ = cljs.core.seq(forms);
if(or__8240__auto__){
return or__8240__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__14940)){
var G__14960 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__14961 = p1;
var G__14962 = path;
var G__14963 = via__$1;
var G__14964 = in$;
var G__14965 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__14960,G__14961,G__14962,G__14963,G__14964,G__14965) : cljs.spec.alpha.op_explain.call(null,G__14960,G__14961,G__14962,G__14963,G__14964,G__14965));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14940)].join('')));
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16104)){
var G__16124 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__16125 = p1;
var G__16126 = path;
var G__16127 = via__$1;
var G__16128 = in$;
var G__16129 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__16124,G__16125,G__16126,G__16127,G__16128,G__16129) : cljs.spec.alpha.op_explain.call(null,G__16124,G__16125,G__16126,G__16127,G__16128,G__16129));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16104)].join('')));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
<<<<<<< HEAD
var map__14967 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__14967__$1 = ((((!((map__14967 == null)))?((((map__14967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14967):map__14967);
var p__$1 = map__14967__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$ret);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$p1);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = ((function (map__14967,map__14967__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__14967,map__14967__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
=======
var map__16131 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__16131__$1 = ((((!((map__16131 == null)))?((((map__16131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16131):map__16131);
var p__$1 = map__16131__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$ret);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$p1);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = ((function (map__16131,map__16131__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__16131,map__16131__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__8228__auto__ = rmap__$1;
if(cljs.core.truth_(and__8228__auto__)){
var and__8228__auto____$1 = id;
if(cljs.core.truth_(and__8228__auto____$1)){
var and__8228__auto____$2 = k;
if(cljs.core.truth_(and__8228__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__8228__auto____$2;
}
} else {
return and__8228__auto____$1;
}
} else {
return and__8228__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
<<<<<<< HEAD
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (map__14967,map__14967__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
var G__14969 = p__$2;
var G__14970 = overrides;
var G__14971 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__14972 = rmap__$1;
var G__14973 = (function (){var or__8240__auto__ = f__$1;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (map__16131,map__16131__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
var G__16133 = p__$2;
var G__16134 = overrides;
var G__16135 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__16136 = rmap__$1;
var G__16137 = (function (){var or__8242__auto__ = f__$1;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return p__$2;
}
})();
<<<<<<< HEAD
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__14969,G__14970,G__14971,G__14972,G__14973) : cljs.spec.alpha.re_gen.call(null,G__14969,G__14970,G__14971,G__14972,G__14973));
});})(map__14967,map__14967__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
var G__14974 = p__$2;
var G__14975 = overrides;
var G__14976 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__14977 = rmap__$1;
var G__14978 = (function (){var or__8240__auto__ = f__$1;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__16133,G__16134,G__16135,G__16136,G__16137) : cljs.spec.alpha.re_gen.call(null,G__16133,G__16134,G__16135,G__16136,G__16137));
});})(map__16131,map__16131__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
var G__16138 = p__$2;
var G__16139 = overrides;
var G__16140 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__16141 = rmap__$1;
var G__16142 = (function (){var or__8242__auto__ = f__$1;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return p__$2;
}
})();
<<<<<<< HEAD
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__14974,G__14975,G__14976,G__14977,G__14978) : cljs.spec.alpha.re_gen.call(null,G__14974,G__14975,G__14976,G__14977,G__14978));
}
}
});})(map__14967,map__14967__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
=======
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__16138,G__16139,G__16140,G__16141,G__16142) : cljs.spec.alpha.re_gen.call(null,G__16138,G__16139,G__16140,G__16141,G__16142));
}
}
});})(map__16131,map__16131__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__8240__auto__ = cljs.core.seq(ks__$1);
if(or__8240__auto__){
return or__8240__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8240__auto__ = cljs.core.seq(forms__$1);
if(or__8240__auto__){
return or__8240__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
<<<<<<< HEAD
});})(map__14967,map__14967__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
=======
});})(map__16131,map__16131__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;
var or__8240__auto__ = (function (){var temp__5290__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__5290__auto__)){
var g = temp__5290__auto__;
<<<<<<< HEAD
var G__14980 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__14980)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14980)){
=======
var G__16144 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__16144)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16144)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var or__8240__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__8240__auto____$1)){
return or__8240__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
<<<<<<< HEAD
var G__14981 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__14981)){
=======
var G__16145 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__16145)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14981)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16145)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var temp__5290__auto__ = cljs.spec.alpha.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5290__auto__)){
var g = temp__5290__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__14981)){
var G__14982 = p1;
var G__14983 = overrides;
var G__14984 = path;
var G__14985 = rmap__$1;
var G__14986 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__14982,G__14983,G__14984,G__14985,G__14986) : cljs.spec.alpha.re_gen.call(null,G__14982,G__14983,G__14984,G__14985,G__14986));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__14981)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__16145)){
var G__16146 = p1;
var G__16147 = overrides;
var G__16148 = path;
var G__16149 = rmap__$1;
var G__16150 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__16146,G__16147,G__16148,G__16149,G__16150) : cljs.spec.alpha.re_gen.call(null,G__16146,G__16147,G__16148,G__16149,G__16150));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__16145)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__14981)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__16145)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gens], 0));
}
} else {
<<<<<<< HEAD
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__14981)){
=======
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__16145)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__5290__auto__ = (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__5290__auto__)){
var g = temp__5290__auto__;
<<<<<<< HEAD
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5290__auto__,G__14981,or__8240__auto____$1,or__8240__auto__,map__14967,map__14967__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__14966_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__14966_SHARP_);
});})(g,temp__5290__auto__,G__14981,or__8240__auto____$1,or__8240__auto__,map__14967,map__14967__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
=======
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5290__auto__,G__16145,or__8242__auto____$1,or__8242__auto__,map__16131,map__16131__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__16130_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__16130_SHARP_);
});})(g,temp__5290__auto__,G__16145,or__8242__auto____$1,or__8242__auto__,map__16131,map__16131__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 0))], 0));
} else {
return null;
}
}
} else {
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14981)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16145)].join('')));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}
}
}
}
}
} else {
return null;
}
}
}
});
<<<<<<< HEAD
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__14987){
while(true){
var vec__14988 = p__14987;
var seq__14989 = cljs.core.seq(vec__14988);
var first__14990 = cljs.core.first(seq__14989);
var seq__14989__$1 = cljs.core.next(seq__14989);
var x = first__14990;
var xs = seq__14989__$1;
var data = vec__14988;
=======
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__16151){
while(true){
var vec__16152 = p__16151;
var seq__16153 = cljs.core.seq(vec__16152);
var first__16154 = cljs.core.first(seq__16153);
var seq__16153__$1 = cljs.core.next(seq__16153);
var x = first__16154;
var xs = seq__16153__$1;
var data = vec__16152;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p))){
var ret = cljs.spec.alpha.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
var temp__5288__auto__ = cljs.spec.alpha.deriv(p,x);
if(cljs.core.truth_(temp__5288__auto__)){
var dp = temp__5288__auto__;
<<<<<<< HEAD
var G__14991 = dp;
var G__14992 = xs;
p = G__14991;
p__14987 = G__14992;
=======
var G__16155 = dp;
var G__16156 = xs;
p = G__16155;
p__16151 = G__16156;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
<<<<<<< HEAD
var G__14996 = input;
var vec__14997 = G__14996;
var seq__14998 = cljs.core.seq(vec__14997);
var first__14999 = cljs.core.first(seq__14998);
var seq__14998__$1 = cljs.core.next(seq__14998);
var x = first__14999;
var xs = seq__14998__$1;
var data = vec__14997;
var i = (0);
var p__$1 = p;
var G__14996__$1 = G__14996;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__15000 = G__14996__$1;
var seq__15001 = cljs.core.seq(vec__15000);
var first__15002 = cljs.core.first(seq__15001);
var seq__15001__$1 = cljs.core.next(seq__15001);
var x__$1 = first__15002;
var xs__$1 = seq__15001__$1;
var data__$1 = vec__15000;
=======
var G__16160 = input;
var vec__16161 = G__16160;
var seq__16162 = cljs.core.seq(vec__16161);
var first__16163 = cljs.core.first(seq__16162);
var seq__16162__$1 = cljs.core.next(seq__16162);
var x = first__16163;
var xs = seq__16162__$1;
var data = vec__16161;
var i = (0);
var p__$1 = p;
var G__16160__$1 = G__16160;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__16164 = G__16160__$1;
var seq__16165 = cljs.core.seq(vec__16164);
var first__16166 = cljs.core.first(seq__16165);
var seq__16165__$1 = cljs.core.next(seq__16165);
var x__$1 = first__16166;
var xs__$1 = seq__16165__$1;
var data__$1 = vec__16164;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5288__auto__ = cljs.spec.alpha.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__5288__auto__)){
var dp = temp__5288__auto__;
<<<<<<< HEAD
var G__15003 = dp;
var G__15004 = xs__$1;
var G__15005 = (i__$2 + (1));
p__$1 = G__15003;
G__14996__$1 = G__15004;
i__$1 = G__15005;
=======
var G__16167 = dp;
var G__16168 = xs__$1;
var G__16169 = (i__$2 + (1));
p__$1 = G__16167;
G__16160__$1 = G__16168;
i__$1 = G__16169;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat)){
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(re),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__8240__auto__ = cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(p__$2),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15006 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha16170 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15006 = (function (re,gfn,meta15007){
this.re = re;
this.gfn = gfn;
this.meta15007 = meta15007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15008,meta15007__$1){
var self__ = this;
var _15008__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15006(self__.re,self__.gfn,meta15007__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15008){
var self__ = this;
var _15008__$1 = this;
return self__.meta15007;
});

cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
=======
cljs.spec.alpha.t_cljs$spec$alpha16170 = (function (re,gfn,meta16171){
this.re = re;
this.gfn = gfn;
this.meta16171 = meta16171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16172,meta16171__$1){
var self__ = this;
var _16172__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha16170(self__.re,self__.gfn,meta16171__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16172){
var self__ = this;
var _16172__$1 = this;
return self__.meta16171;
});

cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
=======
cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var s__$1 = this;
return s__$1;
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform(self__.re,x);
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
=======
cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(self__.re),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
=======
cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.re_gen(self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe(self__.re));
}
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1));
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15006.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
=======
cljs.spec.alpha.t_cljs$spec$alpha16170.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe(self__.re);
});

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta15007], null);
});

cljs.spec.alpha.t_cljs$spec$alpha15006.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15006.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15006";

cljs.spec.alpha.t_cljs$spec$alpha15006.cljs$lang$ctorPrWriter = (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15006");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha15006 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha15006(re__$1,gfn__$1,meta15007){
return (new cljs.spec.alpha.t_cljs$spec$alpha15006(re__$1,gfn__$1,meta15007));
=======
cljs.spec.alpha.t_cljs$spec$alpha16170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta16171], null);
});

cljs.spec.alpha.t_cljs$spec$alpha16170.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha16170.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha16170";

cljs.spec.alpha.t_cljs$spec$alpha16170.cljs$lang$ctorPrWriter = (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha16170");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha16170 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha16170(re__$1,gfn__$1,meta16171){
return (new cljs.spec.alpha.t_cljs$spec$alpha16170(re__$1,gfn__$1,meta16171));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15006(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha16170(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cargs))){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.alpha.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__8228__auto__ = cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cret));
if(and__8228__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__8228__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
<<<<<<< HEAD
return (function (p1__15009_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__15009_SHARP_);
=======
return (function (p1__16173_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__16173_SHARP_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(g))
], 0));
var ret = cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([iters,prop], 0));
var temp__5288__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5288__auto__)){
<<<<<<< HEAD
var vec__15010 = temp__5288__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15010,(0),null);
=======
var vec__16174 = temp__5288__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(0),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15013 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha16177 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta15014){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta16178){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
<<<<<<< HEAD
this.meta15014 = meta15014;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_15015,meta15014__$1){
var self__ = this;
var _15015__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15013(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta15014__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_15015){
var self__ = this;
var _15015__$1 = this;
return self__.meta15014;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
=======
this.meta16178 = meta16178;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_16179,meta16178__$1){
var self__ = this;
var _16179__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha16177(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta16178__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_16179){
var self__ = this;
var _16179__$1 = this;
return self__.meta16178;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.alpha.validate_fn(f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.alpha.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
<<<<<<< HEAD
}catch (e15016){if((e15016 instanceof Error)){
var t = e15016;
return t;
} else {
throw e15016;
=======
}catch (e16180){if((e16180 instanceof Error)){
var t = e16180;
return t;
} else {
throw e16180;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cret))){
return cljs.spec.alpha.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform(self__.argspec,args);
return cljs.spec.alpha.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$3,specs){
return (function() { 
<<<<<<< HEAD
var G__15019__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9365__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15017_15020 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15018_15021 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15017_15020,_STAR_print_fn_STAR_15018_15021,sb__9365__auto__,___$3,specs){
return (function (x__9366__auto__){
return sb__9365__auto__.append(x__9366__auto__);
});})(_STAR_print_newline_STAR_15017_15020,_STAR_print_fn_STAR_15018_15021,sb__9365__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15018_15021;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15017_15020;
=======
var G__16183__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9367__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16181_16184 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16182_16185 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16181_16184,_STAR_print_fn_STAR_16182_16185,sb__9367__auto__,___$3,specs){
return (function (x__9368__auto__){
return sb__9367__auto__.append(x__9368__auto__);
});})(_STAR_print_newline_STAR_16181_16184,_STAR_print_fn_STAR_16182_16185,sb__9367__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16182_16185;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16181_16184;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9365__auto__)].join('');
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
<<<<<<< HEAD
var G__15019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15022__i = 0, G__15022__a = new Array(arguments.length -  0);
while (G__15022__i < G__15022__a.length) {G__15022__a[G__15022__i] = arguments[G__15022__i + 0]; ++G__15022__i;}
  args = new cljs.core.IndexedSeq(G__15022__a,0,null);
} 
return G__15019__delegate.call(this,args);};
G__15019.cljs$lang$maxFixedArity = 0;
G__15019.cljs$lang$applyTo = (function (arglist__15023){
var args = cljs.core.seq(arglist__15023);
return G__15019__delegate(args);
});
G__15019.cljs$core$IFn$_invoke$arity$variadic = G__15019__delegate;
return G__15019;
=======
var G__16183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16186__i = 0, G__16186__a = new Array(arguments.length -  0);
while (G__16186__i < G__16186__a.length) {G__16186__a[G__16186__i] = arguments[G__16186__i + 0]; ++G__16186__i;}
  args = new cljs.core.IndexedSeq(G__16186__a,0,null);
} 
return G__16183__delegate.call(this,args);};
G__16183.cljs$lang$maxFixedArity = 0;
G__16183.cljs$lang$applyTo = (function (arglist__16187){
var args = cljs.core.seq(arglist__16187);
return G__16183__delegate(args);
});
G__16183.cljs$core$IFn$_invoke$arity$variadic = G__16183__delegate;
return G__16183;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9194__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ret),(function (){var x__9194__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fn),(function (){var x__9194__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})()], 0))));
});})(specs))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15013.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta15014], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha15013.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15013.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15013";

cljs.spec.alpha.t_cljs$spec$alpha15013.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15013");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15013 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha15013(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta15014){
return (new cljs.spec.alpha.t_cljs$spec$alpha15013(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta15014));
=======
cljs.spec.alpha.t_cljs$spec$alpha16177.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta16178], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha16177.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha16177.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha16177";

cljs.spec.alpha.t_cljs$spec$alpha16177.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha16177");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha16177 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha16177(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta16178){
return (new cljs.spec.alpha.t_cljs$spec$alpha16177(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta16178));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(specs))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15013(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$spec$alpha_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15024_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$p1__15024_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$p1__15024_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15025_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__15025_SHARP_))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$_PERCENT_))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$_PERCENT_))),(function (p1__15024_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,p1__15024_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,p1__15024_SHARP_));
}),null,true,(function (p1__15025_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15026){
var vec__15027 = p__15026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,v], null);
}),p1__15025_SHARP_);
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha16177(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$spec$alpha_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__16188_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$p1__16188_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$p1__16188_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__16189_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__16189_SHARP_))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$_PERCENT_))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$_PERCENT_))),(function (p1__16188_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,p1__16188_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,p1__16188_SHARP_));
}),null,true,(function (p1__16189_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16190){
var vec__16191 = p__16190;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16191,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,v], null);
}),p1__16189_SHARP_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15030 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha16194 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15030 = (function (spec,meta15031){
this.spec = spec;
this.meta15031 = meta15031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_15032,meta15031__$1){
var self__ = this;
var _15032__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15030(self__.spec,meta15031__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_15032){
var self__ = this;
var _15032__$1 = this;
return self__.meta15031;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha16194 = (function (spec,meta16195){
this.spec = spec;
this.meta16195 = meta16195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_16196,meta16195__$1){
var self__ = this;
var _16196__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha16194(self__.spec,meta16195__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_16196){
var self__ = this;
var _16196__$1 = this;
return self__.meta16195;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_(self__.spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return x;
}
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(self__.spec,path,via,in$,x);
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(self__.spec,overrides,path,rmap);
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__15033 = cljs.spec.alpha.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__15033) : cljs.spec.alpha.nonconforming.call(null,G__15033));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15030.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
=======
cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__16197 = cljs.spec.alpha.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__16197) : cljs.spec.alpha.nonconforming.call(null,G__16197));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha16194.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nonconforming),(function (){var x__9194__auto__ = cljs.spec.alpha.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})())));
});})(spec__$1))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15030.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta15031], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha15030.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15030.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15030";

cljs.spec.alpha.t_cljs$spec$alpha15030.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15030");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15030 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha15030(spec__$2,meta15031){
return (new cljs.spec.alpha.t_cljs$spec$alpha15030(spec__$2,meta15031));
=======
cljs.spec.alpha.t_cljs$spec$alpha16194.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta16195], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha16194.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha16194.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha16194";

cljs.spec.alpha.t_cljs$spec$alpha16194.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha16194");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha16194 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha16194(spec__$2,meta16195){
return (new cljs.spec.alpha.t_cljs$spec$alpha16194(spec__$2,meta16195));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(spec__$1))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15030(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha16194(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
<<<<<<< HEAD
if(typeof cljs.spec.alpha.t_cljs$spec$alpha15034 !== 'undefined'){
=======
if(typeof cljs.spec.alpha.t_cljs$spec$alpha16198 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15034 = (function (form,pred,gfn,spec,meta15035){
=======
cljs.spec.alpha.t_cljs$spec$alpha16198 = (function (form,pred,gfn,spec,meta16199){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
<<<<<<< HEAD
this.meta15035 = meta15035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_15036,meta15035__$1){
var self__ = this;
var _15036__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha15034(self__.form,self__.pred,self__.gfn,self__.spec,meta15035__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_15036){
var self__ = this;
var _15036__$1 = this;
return self__.meta15035;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
=======
this.meta16199 = meta16199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_16200,meta16199__$1){
var self__ = this;
var _16200__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha16198(self__.form,self__.pred,self__.gfn,self__.spec,meta16199__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_16200){
var self__ = this;
var _16200__$1 = this;
return self__.meta16199;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_(self__.spec,x);
}
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
}
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__8240__auto__ = cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.spec,x);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil),cljs.core.cst$kw$pred,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
}
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null)], 0));
}
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15034.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
=======
cljs.spec.alpha.t_cljs$spec$alpha16198.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable),(function (){var x__9194__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})())));
});})(spec))
;

<<<<<<< HEAD
cljs.spec.alpha.t_cljs$spec$alpha15034.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta15035], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha15034.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha15034.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha15034";

cljs.spec.alpha.t_cljs$spec$alpha15034.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.alpha/t_cljs$spec$alpha15034");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha15034 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha15034(form__$1,pred__$1,gfn__$1,spec__$1,meta15035){
return (new cljs.spec.alpha.t_cljs$spec$alpha15034(form__$1,pred__$1,gfn__$1,spec__$1,meta15035));
=======
cljs.spec.alpha.t_cljs$spec$alpha16198.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta16199], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha16198.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha16198.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha16198";

cljs.spec.alpha.t_cljs$spec$alpha16198.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.spec.alpha/t_cljs$spec$alpha16198");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha16198 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha16198(form__$1,pred__$1,gfn__$1,spec__$1,meta16199){
return (new cljs.spec.alpha.t_cljs$spec$alpha16198(form__$1,pred__$1,gfn__$1,spec__$1,meta16199));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(spec))
;

}

<<<<<<< HEAD
return (new cljs.spec.alpha.t_cljs$spec$alpha15034(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.spec.alpha.t_cljs$spec$alpha16198(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
<<<<<<< HEAD
var G__15039 = arguments.length;
switch (G__15039) {
=======
var G__16203 = arguments.length;
switch (G__16203) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
<<<<<<< HEAD
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15037_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__15037_SHARP_,cljs.spec.alpha.conform(spec,p1__15037_SHARP_)],null));
=======
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16201_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__16201_SHARP_,cljs.spec.alpha.conform(spec,p1__16201_SHARP_)],null));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}),cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__8228__auto__ = cljs.core.inst_QMARK_(inst);
if(and__8228__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__8228__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__8228__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__8228__auto__)){
return val.lessThan(end);
} else {
return and__8228__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__8228__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__8228__auto__)){
return val.lessThan(end);
} else {
return and__8228__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x))){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure,cljs.core.cst$kw$assertion_DASH_failed)], 0));
<<<<<<< HEAD
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9365__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15041_15043 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15042_15044 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15041_15043,_STAR_print_fn_STAR_15042_15044,sb__9365__auto__,ed){
return (function (x__9366__auto__){
return sb__9365__auto__.append(x__9366__auto__);
});})(_STAR_print_newline_STAR_15041_15043,_STAR_print_fn_STAR_15042_15044,sb__9365__auto__,ed))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15042_15044;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15041_15043;
=======
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9367__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16205_16207 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16206_16208 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16205_16207,_STAR_print_fn_STAR_16206_16208,sb__9367__auto__,ed){
return (function (x__9368__auto__){
return sb__9367__auto__.append(x__9368__auto__);
});})(_STAR_print_newline_STAR_16205_16207,_STAR_print_fn_STAR_16206_16208,sb__9367__auto__,ed))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16206_16208;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16205_16207;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9365__auto__)].join('');
})())].join('')));
}
});
