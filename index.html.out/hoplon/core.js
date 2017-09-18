// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19045_SHARP_,p2__19046_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19045_SHARP_,p2__19046_SHARP_.getAttribute("static-id"),p2__19046_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__19048 = arguments.length;
switch (G__19048) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__19049_19052 = init;
var G__19050_19053 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19049_19052,G__19050_19053) : f.call(null,G__19049_19052,G__19050_19053));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__19054 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__19055 = cljs.core.seq(vec__19054);
var first__19056 = cljs.core.first(seq__19055);
var seq__19055__$1 = cljs.core.next(seq__19055);
var f = first__19056;
var more = seq__19055__$1;
var vec__19057 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("71b4055b15584d94ba3f6ee2f4d181dc")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__19060_SHARP_){
return cljs.core.zipmap(p1__19060_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8638__auto__ = (function (){var and__8626__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8626__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8626__auto__;
}
})();
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
var G__19061 = (i + (1));
var G__19062 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__19061;
ret = G__19062;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__19064 = arguments.length;
switch (G__19064) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__19066 = (i + (1));
i = G__19066;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (hoplon.core.node[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9372__auto__.call(null,this$));
} else {
var m__9372__auto____$1 = (hoplon.core.node["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9372__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__19067_19070 = hoplon.core.node;
var G__19068_19071 = "string";
var G__19069_19072 = ((function (G__19067_19070,G__19068_19071){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__19067_19070,G__19068_19071))
;
goog.object.set(G__19067_19070,G__19068_19071,G__19069_19072);
goog.object.set(hoplon.core.INode,"number",true);

var G__19073_19077 = hoplon.core.node;
var G__19074_19078 = "number";
var G__19075_19079 = ((function (G__19073_19077,G__19074_19078){
return (function (this$){
var G__19076 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__19076) : hoplon.core.$text.call(null,G__19076));
});})(G__19073_19077,G__19074_19078))
;
goog.object.set(G__19073_19077,G__19074_19078,G__19075_19079);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x))){
return hoplon.core.node(x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19082_SHARP_,p2__19081_SHARP_){
if((p2__19081_SHARP_ == null)){
return p1__19082_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19082_SHARP_,p2__19081_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__19089 = new$__$1;
var vec__19091 = G__19089;
var seq__19092 = cljs.core.seq(vec__19091);
var first__19093 = cljs.core.first(seq__19092);
var seq__19092__$1 = cljs.core.next(seq__19092);
var x = first__19093;
var xs = seq__19092__$1;
var G__19090 = hoplon.core.child_vec(this$);
var vec__19094 = G__19090;
var seq__19095 = cljs.core.seq(vec__19094);
var first__19096 = cljs.core.first(seq__19095);
var seq__19095__$1 = cljs.core.next(seq__19095);
var k = first__19096;
var ks = seq__19095__$1;
var kids = vec__19094;
var G__19089__$1 = G__19089;
var G__19090__$1 = G__19090;
while(true){
var vec__19097 = G__19089__$1;
var seq__19098 = cljs.core.seq(vec__19097);
var first__19099 = cljs.core.first(seq__19098);
var seq__19098__$1 = cljs.core.next(seq__19098);
var x__$1 = first__19099;
var xs__$1 = seq__19098__$1;
var vec__19100 = G__19090__$1;
var seq__19101 = cljs.core.seq(vec__19100);
var first__19102 = cljs.core.first(seq__19101);
var seq__19101__$1 = cljs.core.next(seq__19101);
var k__$1 = first__19102;
var ks__$1 = seq__19101__$1;
var kids__$1 = vec__19100;
if(cljs.core.truth_((function (){var or__8638__auto__ = x__$1;
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return k__$1;
}
})())){
var G__19103 = xs__$1;
var G__19104 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__19089__$1 = G__19103;
G__19090__$1 = G__19104;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_19105 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_19105;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_19105,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids(this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not(hoplon.core.native_QMARK_(elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_(parent);

var kids_19108 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_19109 = cljs.core.count(cljs.core.deref(kids_19108));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_19108,i_19109,child__$1){
return (function (p1__19107_SHARP_,p2__19106_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19108,cljs.core.assoc,i_19109,p2__19106_SHARP_);
});})(kids_19108,i_19109,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19108,cljs.core.assoc,i_19109,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__8626__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8626__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8626__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8626__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8626__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8626__auto__;
}
})())){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_(this$__$1))){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$hoplon$core_SLASH_unexpected_DASH_child_DASH_type,cljs.core.cst$kw$child,child,cljs.core.cst$kw$native_QMARK_,hoplon.core.native_QMARK_(child),cljs.core.cst$kw$managed_QMARK_,hoplon.core.managed_QMARK_(child),cljs.core.cst$kw$this,this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__19110_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__19110_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__19111_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__19111_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__19112_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__19112_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_19113 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_19114 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__19115 = (function (){var and__8626__auto__ = attr_19114;
if(cljs.core.truth_(and__8626__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_19114),kk_19113);
} else {
return and__8626__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__19115)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_19114,cljs.core.assoc,kk_19113,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__19116_SHARP_){
return p1__19116_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__19117_SHARP_){
return p1__19117_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__19118_SHARP_){
return p1__19118_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__19119_SHARP_){
return p1__19119_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9372__auto__.call(null,this$,kvs));
} else {
var m__9372__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9372__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9372__auto__.call(null,this$,kvs));
} else {
var m__9372__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9372__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9372__auto__.call(null,this$,child));
} else {
var m__9372__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9372__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9372__auto__.call(null,this$,child));
} else {
var m__9372__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9372__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9372__auto__.call(null,this$,new$,existing));
} else {
var m__9372__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9372__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9372__auto__.call(null,this$,new$,existing));
} else {
var m__9372__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9372__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__19125 = arguments.length;
switch (G__19125) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9938__auto__ = [];
var len__9915__auto___19127 = arguments.length;
var i__9916__auto___19128 = (0);
while(true){
if((i__9916__auto___19128 < len__9915__auto___19127)){
args_arr__9938__auto__.push((arguments[i__9916__auto___19128]));

var G__19129 = (i__9916__auto___19128 + (1));
i__9916__auto___19128 = G__19129;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19121){
var G__19122 = cljs.core.first(seq19121);
var seq19121__$1 = cljs.core.next(seq19121);
var G__19123 = cljs.core.first(seq19121__$1);
var seq19121__$2 = cljs.core.next(seq19121__$1);
var G__19124 = cljs.core.first(seq19121__$2);
var seq19121__$3 = cljs.core.next(seq19121__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19122,G__19123,G__19124,seq19121__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__19135 = arguments.length;
switch (G__19135) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9938__auto__ = [];
var len__9915__auto___19137 = arguments.length;
var i__9916__auto___19138 = (0);
while(true){
if((i__9916__auto___19138 < len__9915__auto___19137)){
args_arr__9938__auto__.push((arguments[i__9916__auto___19138]));

var G__19139 = (i__9916__auto___19138 + (1));
i__9916__auto___19138 = G__19139;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq19131){
var G__19132 = cljs.core.first(seq19131);
var seq19131__$1 = cljs.core.next(seq19131);
var G__19133 = cljs.core.first(seq19131__$1);
var seq19131__$2 = cljs.core.next(seq19131__$1);
var G__19134 = cljs.core.first(seq19131__$2);
var seq19131__$3 = cljs.core.next(seq19131__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19132,G__19133,G__19134,seq19131__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts19142_19160 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19142_19160){
return (function (ret__18143__auto__,p__19143){
var vec__19144 = p__19143;
var ___18144__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19144,(0),null);
var f__18145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19144,(1),null);
var sym__18146__auto__ = (f__18145__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18145__auto__.cljs$core$IFn$_invoke$arity$0() : f__18145__auto__.call(null));
var G__19147 = ret__18143__auto__;
if(cljs.core.truth_(sym__18146__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19147,sym__18146__auto__);
} else {
return G__19147;
}
});})(opts19142_19160))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19142_19160){
return (function (p1__18142__18147__auto__){
var G__19149 = cljs.core.first(p1__18142__18147__auto__);
var fexpr__19148 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19142_19160);
return (fexpr__19148.cljs$core$IFn$_invoke$arity$1 ? fexpr__19148.cljs$core$IFn$_invoke$arity$1(G__19149) : fexpr__19148.call(null,G__19149));
});})(opts19142_19160))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19142_19160){
return (function (){
var checked__18111__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts19142_19160);
if(cljs.core.truth_(checked__18111__auto__)){
hoplon.core._do_BANG_ = checked__18111__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts19142_19160))
], null)))));

var opts19152 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19152){
return (function (ret__18143__auto__,p__19153){
var vec__19154 = p__19153;
var ___18144__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19154,(0),null);
var f__18145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19154,(1),null);
var sym__18146__auto__ = (f__18145__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18145__auto__.cljs$core$IFn$_invoke$arity$0() : f__18145__auto__.call(null));
var G__19157 = ret__18143__auto__;
if(cljs.core.truth_(sym__18146__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19157,sym__18146__auto__);
} else {
return G__19157;
}
});})(opts19152))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19152){
return (function (p1__18142__18147__auto__){
var G__19159 = cljs.core.first(p1__18142__18147__auto__);
var fexpr__19158 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19152);
return (fexpr__19158.cljs$core$IFn$_invoke$arity$1 ? fexpr__19158.cljs$core$IFn$_invoke$arity$1(G__19159) : fexpr__19158.call(null,G__19159));
});})(opts19152))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19152){
return (function (){
var checked__18111__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts19152);
if(cljs.core.truth_(checked__18111__auto__)){
hoplon.core._on_BANG_ = checked__18111__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts19152))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9372__auto__.call(null,this$,elem,value));
} else {
var m__9372__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9372__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__19163_SHARP_,p2__19162_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__19162_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,this$__$1,value);
} else {
return hoplon.core._do_BANG_(elem,this$__$1,value);

}
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__19165 = arguments.length;
switch (G__19165) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__19167 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19168 = (0);
return setTimeout(G__19167,G__19168);
} else {
var temp__5288__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return v.push(f);
} else {
var G__19169_19187 = this$;
var G__19170_19188 = "_hoplonWhenDom";
var G__19171_19189 = [f];
goog.object.set(G__19169_19187,G__19170_19188,G__19171_19189);

var G__19172 = ((function (temp__5288__auto__){
return (function (){
var fexpr__19180 = ((function (temp__5288__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__19181 = ((function (temp__5288__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5288__auto__))
;
var G__19182 = (20);
return setTimeout(G__19181,G__19182);
} else {
var seq__19183_19190 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__19184_19191 = null;
var count__19185_19192 = (0);
var i__19186_19193 = (0);
while(true){
if((i__19186_19193 < count__19185_19192)){
var f_19194__$1 = chunk__19184_19191.cljs$core$IIndexed$_nth$arity$2(null,i__19186_19193);
(f_19194__$1.cljs$core$IFn$_invoke$arity$0 ? f_19194__$1.cljs$core$IFn$_invoke$arity$0() : f_19194__$1.call(null));

var G__19195 = seq__19183_19190;
var G__19196 = chunk__19184_19191;
var G__19197 = count__19185_19192;
var G__19198 = (i__19186_19193 + (1));
seq__19183_19190 = G__19195;
chunk__19184_19191 = G__19196;
count__19185_19192 = G__19197;
i__19186_19193 = G__19198;
continue;
} else {
var temp__5290__auto___19199 = cljs.core.seq(seq__19183_19190);
if(temp__5290__auto___19199){
var seq__19183_19200__$1 = temp__5290__auto___19199;
if(cljs.core.chunked_seq_QMARK_(seq__19183_19200__$1)){
var c__9569__auto___19201 = cljs.core.chunk_first(seq__19183_19200__$1);
var G__19202 = cljs.core.chunk_rest(seq__19183_19200__$1);
var G__19203 = c__9569__auto___19201;
var G__19204 = cljs.core.count(c__9569__auto___19201);
var G__19205 = (0);
seq__19183_19190 = G__19202;
chunk__19184_19191 = G__19203;
count__19185_19192 = G__19204;
i__19186_19193 = G__19205;
continue;
} else {
var f_19206__$1 = cljs.core.first(seq__19183_19200__$1);
(f_19206__$1.cljs$core$IFn$_invoke$arity$0 ? f_19206__$1.cljs$core$IFn$_invoke$arity$0() : f_19206__$1.call(null));

var G__19207 = cljs.core.next(seq__19183_19200__$1);
var G__19208 = null;
var G__19209 = (0);
var G__19210 = (0);
seq__19183_19190 = G__19207;
chunk__19184_19191 = G__19208;
count__19185_19192 = G__19209;
i__19186_19193 = G__19210;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5288__auto__))
;
return fexpr__19180();
});})(temp__5288__auto__))
;
var G__19173 = (0);
return setTimeout(G__19172,G__19173);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__19219 = args;
var vec__19220 = G__19219;
var seq__19221 = cljs.core.seq(vec__19220);
var first__19222 = cljs.core.first(seq__19221);
var seq__19221__$1 = cljs.core.next(seq__19221);
var arg = first__19222;
var args__$1 = seq__19221__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__19219__$1 = G__19219;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__19223 = G__19219__$1;
var seq__19224 = cljs.core.seq(vec__19223);
var first__19225 = cljs.core.first(seq__19224);
var seq__19224__$1 = cljs.core.next(seq__19224);
var arg__$1 = first__19225;
var args__$2 = seq__19224__$1;
if(cljs.core.not((function (){var or__8638__auto__ = arg__$1;
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__19226 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__19219__$1,attr__$2,kids__$2,vec__19223,seq__19224,first__19225,seq__19224__$1,arg__$1,args__$2,attr,kids,G__19219,vec__19220,seq__19221,first__19222,seq__19221__$1,arg,args__$1){
return (function (p1__19211_SHARP_,p2__19212_SHARP_,p3__19213_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19211_SHARP_,p2__19212_SHARP_,p3__19213_SHARP_);
});})(attr__$1,kids__$1,G__19219__$1,attr__$2,kids__$2,vec__19223,seq__19224,first__19225,seq__19224__$1,arg__$1,args__$2,attr,kids,G__19219,vec__19220,seq__19221,first__19222,seq__19221__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19227 = kids__$2;
var G__19228 = args__$2;
attr__$1 = G__19226;
kids__$1 = G__19227;
G__19219__$1 = G__19228;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__19229 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__19219__$1,attr__$2,kids__$2,vec__19223,seq__19224,first__19225,seq__19224__$1,arg__$1,args__$2,attr,kids,G__19219,vec__19220,seq__19221,first__19222,seq__19221__$1,arg,args__$1){
return (function (p1__19214_SHARP_,p2__19215_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19214_SHARP_,p2__19215_SHARP_,true);
});})(attr__$1,kids__$1,G__19219__$1,attr__$2,kids__$2,vec__19223,seq__19224,first__19225,seq__19224__$1,arg__$1,args__$2,attr,kids,G__19219,vec__19220,seq__19221,first__19222,seq__19221__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19230 = kids__$2;
var G__19231 = args__$2;
attr__$1 = G__19229;
kids__$1 = G__19230;
G__19219__$1 = G__19231;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__19232 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__19233 = kids__$2;
var G__19234 = cljs.core.rest(args__$2);
attr__$1 = G__19232;
kids__$1 = G__19233;
G__19219__$1 = G__19234;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__19235 = attr__$2;
var G__19236 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19237 = args__$2;
attr__$1 = G__19235;
kids__$1 = G__19236;
G__19219__$1 = G__19237;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__19238 = attr__$2;
var G__19239 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19240 = args__$2;
attr__$1 = G__19238;
kids__$1 = G__19239;
G__19219__$1 = G__19240;
continue;
} else {
var G__19241 = attr__$2;
var G__19242 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__19243 = args__$2;
attr__$1 = G__19241;
kids__$1 = G__19242;
G__19219__$1 = G__19243;
continue;

}
}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__19245_SHARP_,p2__19244_SHARP_,p3__19246_SHARP_){
hoplon.core._attr_BANG_(p2__19244_SHARP_,p1__19245_SHARP_,p3__19246_SHARP_);

return p1__19245_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__19247){
var vec__19248 = p__19247;
var seq__19249 = cljs.core.seq(vec__19248);
var first__19250 = cljs.core.first(seq__19249);
var seq__19249__$1 = cljs.core.next(seq__19249);
var child_cell = first__19250;
var _ = seq__19249__$1;
var kids = vec__19248;
var this$__$1 = this$;
var seq__19251_19255 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__19252_19256 = null;
var count__19253_19257 = (0);
var i__19254_19258 = (0);
while(true){
if((i__19254_19258 < count__19253_19257)){
var x_19259 = chunk__19252_19256.cljs$core$IIndexed$_nth$arity$2(null,i__19254_19258);
var temp__5290__auto___19260 = hoplon.core.__GT_node(x_19259);
if(cljs.core.truth_(temp__5290__auto___19260)){
var x_19261__$1 = temp__5290__auto___19260;
hoplon.core.append_child_BANG_(this$__$1,x_19261__$1);
} else {
}

var G__19262 = seq__19251_19255;
var G__19263 = chunk__19252_19256;
var G__19264 = count__19253_19257;
var G__19265 = (i__19254_19258 + (1));
seq__19251_19255 = G__19262;
chunk__19252_19256 = G__19263;
count__19253_19257 = G__19264;
i__19254_19258 = G__19265;
continue;
} else {
var temp__5290__auto___19266 = cljs.core.seq(seq__19251_19255);
if(temp__5290__auto___19266){
var seq__19251_19267__$1 = temp__5290__auto___19266;
if(cljs.core.chunked_seq_QMARK_(seq__19251_19267__$1)){
var c__9569__auto___19268 = cljs.core.chunk_first(seq__19251_19267__$1);
var G__19269 = cljs.core.chunk_rest(seq__19251_19267__$1);
var G__19270 = c__9569__auto___19268;
var G__19271 = cljs.core.count(c__9569__auto___19268);
var G__19272 = (0);
seq__19251_19255 = G__19269;
chunk__19252_19256 = G__19270;
count__19253_19257 = G__19271;
i__19254_19258 = G__19272;
continue;
} else {
var x_19273 = cljs.core.first(seq__19251_19267__$1);
var temp__5290__auto___19274__$1 = hoplon.core.__GT_node(x_19273);
if(cljs.core.truth_(temp__5290__auto___19274__$1)){
var x_19275__$1 = temp__5290__auto___19274__$1;
hoplon.core.append_child_BANG_(this$__$1,x_19275__$1);
} else {
}

var G__19276 = cljs.core.next(seq__19251_19267__$1);
var G__19277 = null;
var G__19278 = (0);
var G__19279 = (0);
seq__19251_19255 = G__19276;
chunk__19252_19256 = G__19277;
count__19253_19257 = G__19278;
i__19254_19258 = G__19279;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9922__auto__ = [];
var len__9915__auto___19286 = arguments.length;
var i__9916__auto___19287 = (0);
while(true){
if((i__9916__auto___19287 < len__9915__auto___19286)){
args__9922__auto__.push((arguments[i__9916__auto___19287]));

var G__19288 = (i__9916__auto___19287 + (1));
i__9916__auto___19287 = G__19288;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__19282 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19282,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19282,(1),null);
var G__19285 = this$;
hoplon.core.add_attributes_BANG_(G__19285,attr);

hoplon.core.add_children_BANG_(G__19285,kids);

return G__19285;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq19280){
var G__19281 = cljs.core.first(seq19280);
var seq19280__$1 = cljs.core.next(seq19280);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19281,seq19280__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__19290 = arguments.length;
switch (G__19290) {
case 2:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,k){
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$.getAttribute(cljs.core.name(k));
} else {
var G__19291 = this$.children;
var G__19292 = k;
return goog.object.get(G__19291,G__19292);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8638__auto__ = hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$,k);
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return not_found;
}
});

hoplon.core.lookup_BANG_.cljs$lang$maxFixedArity = 3;

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__19323 = null;
var G__19323__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19323__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19323__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19323__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19323__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19323__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19323__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19323__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19323__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19323__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19323__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19323__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19323__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19323__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19323__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19323__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19323__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19323__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19323__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19323__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19323__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19323__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19323 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19323__1.call(this,self__);
case 2:
return G__19323__2.call(this,self__,a);
case 3:
return G__19323__3.call(this,self__,a,b);
case 4:
return G__19323__4.call(this,self__,a,b,c);
case 5:
return G__19323__5.call(this,self__,a,b,c,d);
case 6:
return G__19323__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19323__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19323__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19323__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19323__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19323__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19323__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19323__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19323__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19323__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19323__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19323__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19323__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19323__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19323__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19323__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19323__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19323.cljs$core$IFn$_invoke$arity$1 = G__19323__1;
G__19323.cljs$core$IFn$_invoke$arity$2 = G__19323__2;
G__19323.cljs$core$IFn$_invoke$arity$3 = G__19323__3;
G__19323.cljs$core$IFn$_invoke$arity$4 = G__19323__4;
G__19323.cljs$core$IFn$_invoke$arity$5 = G__19323__5;
G__19323.cljs$core$IFn$_invoke$arity$6 = G__19323__6;
G__19323.cljs$core$IFn$_invoke$arity$7 = G__19323__7;
G__19323.cljs$core$IFn$_invoke$arity$8 = G__19323__8;
G__19323.cljs$core$IFn$_invoke$arity$9 = G__19323__9;
G__19323.cljs$core$IFn$_invoke$arity$10 = G__19323__10;
G__19323.cljs$core$IFn$_invoke$arity$11 = G__19323__11;
G__19323.cljs$core$IFn$_invoke$arity$12 = G__19323__12;
G__19323.cljs$core$IFn$_invoke$arity$13 = G__19323__13;
G__19323.cljs$core$IFn$_invoke$arity$14 = G__19323__14;
G__19323.cljs$core$IFn$_invoke$arity$15 = G__19323__15;
G__19323.cljs$core$IFn$_invoke$arity$16 = G__19323__16;
G__19323.cljs$core$IFn$_invoke$arity$17 = G__19323__17;
G__19323.cljs$core$IFn$_invoke$arity$18 = G__19323__18;
G__19323.cljs$core$IFn$_invoke$arity$19 = G__19323__19;
G__19323.cljs$core$IFn$_invoke$arity$20 = G__19323__20;
G__19323.cljs$core$IFn$_invoke$arity$21 = G__19323__21;
G__19323.cljs$core$IFn$_invoke$arity$22 = G__19323__22;
return G__19323;
})()
;

Element.prototype.apply = (function (self__,args19294){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19294)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
});

Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,k,not_found);
});

Element.prototype.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19295 = cljs.core.seq(kvs);
var chunk__19297 = null;
var count__19298 = (0);
var i__19299 = (0);
while(true){
if((i__19299 < count__19298)){
var vec__19301 = chunk__19297.cljs$core$IIndexed$_nth$arity$2(null,i__19299);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19301,(1),null);
var k_19324__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19324__$1);
} else {
e.setAttribute(k_19324__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19324__$1:v));
}

var G__19325 = seq__19295;
var G__19326 = chunk__19297;
var G__19327 = count__19298;
var G__19328 = (i__19299 + (1));
seq__19295 = G__19325;
chunk__19297 = G__19326;
count__19298 = G__19327;
i__19299 = G__19328;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19295);
if(temp__5290__auto__){
var seq__19295__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19295__$1)){
var c__9569__auto__ = cljs.core.chunk_first(seq__19295__$1);
var G__19329 = cljs.core.chunk_rest(seq__19295__$1);
var G__19330 = c__9569__auto__;
var G__19331 = cljs.core.count(c__9569__auto__);
var G__19332 = (0);
seq__19295 = G__19329;
chunk__19297 = G__19330;
count__19298 = G__19331;
i__19299 = G__19332;
continue;
} else {
var vec__19304 = cljs.core.first(seq__19295__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19304,(1),null);
var k_19333__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19333__$1);
} else {
e.setAttribute(k_19333__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19333__$1:v));
}

var G__19334 = cljs.core.next(seq__19295__$1);
var G__19335 = null;
var G__19336 = (0);
var G__19337 = (0);
seq__19295 = G__19334;
chunk__19297 = G__19335;
count__19298 = G__19336;
i__19299 = G__19337;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19307 = cljs.core.seq(kvs);
var chunk__19308 = null;
var count__19309 = (0);
var i__19310 = (0);
while(true){
if((i__19310 < count__19309)){
var vec__19311 = chunk__19308.cljs$core$IIndexed$_nth$arity$2(null,i__19310);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19311,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19311,(1),null);
var G__19314_19338 = e.style;
var G__19315_19339 = cljs.core.name(k);
var G__19316_19340 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19314_19338,G__19315_19339,G__19316_19340);

var G__19341 = seq__19307;
var G__19342 = chunk__19308;
var G__19343 = count__19309;
var G__19344 = (i__19310 + (1));
seq__19307 = G__19341;
chunk__19308 = G__19342;
count__19309 = G__19343;
i__19310 = G__19344;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19307);
if(temp__5290__auto__){
var seq__19307__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19307__$1)){
var c__9569__auto__ = cljs.core.chunk_first(seq__19307__$1);
var G__19345 = cljs.core.chunk_rest(seq__19307__$1);
var G__19346 = c__9569__auto__;
var G__19347 = cljs.core.count(c__9569__auto__);
var G__19348 = (0);
seq__19307 = G__19345;
chunk__19308 = G__19346;
count__19309 = G__19347;
i__19310 = G__19348;
continue;
} else {
var vec__19317 = cljs.core.first(seq__19307__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19317,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19317,(1),null);
var G__19320_19349 = e.style;
var G__19321_19350 = cljs.core.name(k);
var G__19322_19351 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19320_19349,G__19321_19350,G__19322_19351);

var G__19352 = cljs.core.next(seq__19307__$1);
var G__19353 = null;
var G__19354 = (0);
var G__19355 = (0);
seq__19307 = G__19352;
chunk__19308 = G__19353;
count__19309 = G__19354;
i__19310 = G__19355;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.appendChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){
return (function() { 
var G__19359__delegate = function (args){
var vec__19356 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19356,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__19359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19360__i = 0, G__19360__a = new Array(arguments.length -  0);
while (G__19360__i < G__19360__a.length) {G__19360__a[G__19360__i] = arguments[G__19360__i + 0]; ++G__19360__i;}
  args = new cljs.core.IndexedSeq(G__19360__a,0,null);
} 
return G__19359__delegate.call(this,args);};
G__19359.cljs$lang$maxFixedArity = 0;
G__19359.cljs$lang$applyTo = (function (arglist__19361){
var args = cljs.core.seq(arglist__19361);
return G__19359__delegate(args);
});
G__19359.cljs$core$IFn$_invoke$arity$variadic = G__19359__delegate;
return G__19359;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__19365__delegate = function (args){
var vec__19362 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19362,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19362,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__19365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19366__i = 0, G__19366__a = new Array(arguments.length -  0);
while (G__19366__i < G__19366__a.length) {G__19366__a[G__19366__i] = arguments[G__19366__i + 0]; ++G__19366__i;}
  args = new cljs.core.IndexedSeq(G__19366__a,0,null);
} 
return G__19365__delegate.call(this,args);};
G__19365.cljs$lang$maxFixedArity = 0;
G__19365.cljs$lang$applyTo = (function (arglist__19367){
var args = cljs.core.seq(arglist__19367);
return G__19365__delegate(args);
});
G__19365.cljs$core$IFn$_invoke$arity$variadic = G__19365__delegate;
return G__19365;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9922__auto__ = [];
var len__9915__auto___19369 = arguments.length;
var i__9916__auto___19370 = (0);
while(true){
if((i__9916__auto___19370 < len__9915__auto___19369)){
args__9922__auto__.push((arguments[i__9916__auto___19370]));

var G__19371 = (i__9916__auto___19370 + (1));
i__9916__auto___19370 = G__19371;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.first(hoplon.core.parse_args(args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq19368){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19368));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton(document.head);
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton(document.body);
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__19372_SHARP_){
return document.createTextNode(p1__19372_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19373_SHARP_){
return document.createComment(p1__19373_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__19374 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19375 = (0);
return setTimeout(G__19374,G__19375);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__19376_SHARP_){
var e = p1__19376_SHARP_.target;
if(cljs.core.truth_((function (){var or__8638__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__19376_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9691__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9692__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9693__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9694__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9695__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9691__auto__,prefer_table__9692__auto__,method_cache__9693__auto__,cached_hierarchy__9694__auto__,hierarchy__9695__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9691__auto__,prefer_table__9692__auto__,method_cache__9693__auto__,cached_hierarchy__9694__auto__,hierarchy__9695__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9695__auto__,method_table__9691__auto__,prefer_table__9692__auto__,method_cache__9693__auto__,cached_hierarchy__9694__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19377 = elem;
var G__19378 = cljs.core.cst$kw$attr;
var G__19379 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19377,G__19378,G__19379) : hoplon.core.do_BANG_.call(null,G__19377,G__19378,G__19379));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9691__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9692__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9693__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9694__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9695__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9691__auto__,prefer_table__9692__auto__,method_cache__9693__auto__,cached_hierarchy__9694__auto__,hierarchy__9695__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9691__auto__,prefer_table__9692__auto__,method_cache__9693__auto__,cached_hierarchy__9694__auto__,hierarchy__9695__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9695__auto__,method_table__9691__auto__,prefer_table__9692__auto__,method_cache__9693__auto__,cached_hierarchy__9694__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__19384 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19382,G__19383){
return (G__19382.cljs$core$IFn$_invoke$arity$1 ? G__19382.cljs$core$IFn$_invoke$arity$1(G__19383) : G__19382.call(null,G__19383));
});})(on_deck))
);
return (fexpr__19384.cljs$core$IFn$_invoke$arity$2 ? fexpr__19384.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19384.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19380_SHARP_){
var fexpr__19388 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19387,G__19386,G__19385){
return (G__19385.cljs$core$IFn$_invoke$arity$3 ? G__19385.cljs$core$IFn$_invoke$arity$3(G__19386,G__19387,null) : G__19385.call(null,G__19386,G__19387,null));
});})(on_deck,items_seq))
);
return (fexpr__19388.cljs$core$IFn$_invoke$arity$3 ? fexpr__19388.cljs$core$IFn$_invoke$arity$3(p1__19380_SHARP_,items_seq,cljs.core.nth) : fexpr__19388.call(null,p1__19380_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19381_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19381_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19381_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__19389 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19390 = null;
var count__19391 = (0);
var i__19392 = (0);
while(true){
if((i__19392 < count__19391)){
var i = chunk__19390.cljs$core$IIndexed$_nth$arity$2(null,i__19392);
var e_19395 = (function (){var or__8638__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
var G__19393 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19393) : tpl.call(null,G__19393));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19395);

var G__19396 = seq__19389;
var G__19397 = chunk__19390;
var G__19398 = count__19391;
var G__19399 = (i__19392 + (1));
seq__19389 = G__19396;
chunk__19390 = G__19397;
count__19391 = G__19398;
i__19392 = G__19399;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19389);
if(temp__5290__auto__){
var seq__19389__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19389__$1)){
var c__9569__auto__ = cljs.core.chunk_first(seq__19389__$1);
var G__19400 = cljs.core.chunk_rest(seq__19389__$1);
var G__19401 = c__9569__auto__;
var G__19402 = cljs.core.count(c__9569__auto__);
var G__19403 = (0);
seq__19389 = G__19400;
chunk__19390 = G__19401;
count__19391 = G__19402;
i__19392 = G__19403;
continue;
} else {
var i = cljs.core.first(seq__19389__$1);
var e_19404 = (function (){var or__8638__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
var G__19394 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19394) : tpl.call(null,G__19394));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19404);

var G__19405 = cljs.core.next(seq__19389__$1);
var G__19406 = null;
var G__19407 = (0);
var G__19408 = (0);
seq__19389 = G__19405;
chunk__19390 = G__19406;
count__19391 = G__19407;
i__19392 = G__19408;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9681__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9681__auto__)){
var e_19409 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19409);

var G__19410 = (_ + (1));
_ = G__19410;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__9922__auto__ = [];
var len__9915__auto___19420 = arguments.length;
var i__9916__auto___19421 = (0);
while(true){
if((i__9916__auto___19421 < len__9915__auto___19420)){
args__9922__auto__.push((arguments[i__9916__auto___19421]));

var G__19422 = (i__9916__auto___19421 + (1));
i__9916__auto___19421 = G__19422;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__19412){
var vec__19413 = p__19412;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19413,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__19419 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__19413,default$){
return (function (G__19416,G__19418,G__19417){
var or__8638__auto__ = (function (){var and__8626__auto__ = (G__19416.cljs$core$IFn$_invoke$arity$1 ? G__19416.cljs$core$IFn$_invoke$arity$1(G__19417) : G__19416.call(null,G__19417));
if(cljs.core.truth_(and__8626__auto__)){
return G__19417;
} else {
return and__8626__auto__;
}
})();
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return G__19418;
}
});})(c,vec__19413,default$))
);
return (fexpr__19419.cljs$core$IFn$_invoke$arity$3 ? fexpr__19419.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__19419.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__19413,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__19413,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq19411){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19411));
});

