// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15037_SHARP_,p2__15038_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15037_SHARP_,p2__15038_SHARP_.getAttribute("static-id"),p2__15038_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args15039 = [];
var len__8981__auto___15044 = arguments.length;
var i__8982__auto___15045 = (0);
while(true){
if((i__8982__auto___15045 < len__8981__auto___15044)){
args15039.push((arguments[i__8982__auto___15045]));

var G__15046 = (i__8982__auto___15045 + (1));
i__8982__auto___15045 = G__15046;
continue;
} else {
}
break;
}

var G__15041 = args15039.length;
switch (G__15041) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15039.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__15042_15048 = init;
var G__15043_15049 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15042_15048,G__15043_15049) : f.call(null,G__15042_15048,G__15043_15049));

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
var vec__15056 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__15057 = cljs.core.seq(vec__15056);
var first__15058 = cljs.core.first(seq__15057);
var seq__15057__$1 = cljs.core.next(seq__15057);
var f = first__15058;
var more = seq__15057__$1;
var vec__15059 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15059,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15059,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("23f0dbbb36c34de391272233e1db34d7")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__15062_SHARP_){
return cljs.core.zipmap(p1__15062_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var or__7760__auto__ = (function (){var and__7748__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__7748__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__15063 = (i + (1));
var G__15064 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__15063;
ret = G__15064;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args15065 = [];
var len__8981__auto___15068 = arguments.length;
var i__8982__auto___15069 = (0);
while(true){
if((i__8982__auto___15069 < len__8981__auto___15068)){
args15065.push((arguments[i__8982__auto___15069]));

var G__15070 = (i__8982__auto___15069 + (1));
i__8982__auto___15069 = G__15070;
continue;
} else {
}
break;
}

var G__15067 = args15065.length;
switch (G__15067) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15065.length)].join('')));

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

var G__15072 = (i + (1));
i = G__15072;
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
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core.node[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8479__auto__.call(null,this$));
} else {
var m__8479__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8479__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
var G__15073 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__15073) : hoplon.core.$text.call(null,G__15073));
}));
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15077_SHARP_,p2__15076_SHARP_){
if((p2__15076_SHARP_ == null)){
return p1__15077_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15077_SHARP_,p2__15076_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__15104 = new$__$1;
var vec__15106 = G__15104;
var seq__15107 = cljs.core.seq(vec__15106);
var first__15108 = cljs.core.first(seq__15107);
var seq__15107__$1 = cljs.core.next(seq__15107);
var x = first__15108;
var xs = seq__15107__$1;
var G__15105 = hoplon.core.child_vec(this$);
var vec__15109 = G__15105;
var seq__15110 = cljs.core.seq(vec__15109);
var first__15111 = cljs.core.first(seq__15110);
var seq__15110__$1 = cljs.core.next(seq__15110);
var k = first__15111;
var ks = seq__15110__$1;
var kids = vec__15109;
var G__15104__$1 = G__15104;
var G__15105__$1 = G__15105;
while(true){
var vec__15112 = G__15104__$1;
var seq__15113 = cljs.core.seq(vec__15112);
var first__15114 = cljs.core.first(seq__15113);
var seq__15113__$1 = cljs.core.next(seq__15113);
var x__$1 = first__15114;
var xs__$1 = seq__15113__$1;
var vec__15115 = G__15105__$1;
var seq__15116 = cljs.core.seq(vec__15115);
var first__15117 = cljs.core.first(seq__15116);
var seq__15116__$1 = cljs.core.next(seq__15116);
var k__$1 = first__15117;
var ks__$1 = seq__15116__$1;
var kids__$1 = vec__15115;
if(cljs.core.truth_((function (){var or__7760__auto__ = x__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return k__$1;
}
})())){
var G__15118 = xs__$1;
var G__15119 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__15104__$1 = G__15118;
G__15105__$1 = G__15119;
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
var kids_15122 = (function (){var G__15121 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15121) : cljs.core.atom.call(null,G__15121));
})();
this$__$1.hoplonKids = kids_15122;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_15122,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_15125 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_15126 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_15125) : cljs.core.deref.call(null,kids_15125)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_15125,i_15126,child__$1){
return (function (p1__15124_SHARP_,p2__15123_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_15125,cljs.core.assoc,i_15126,p2__15123_SHARP_);
});})(kids_15125,i_15126,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_15125,cljs.core.assoc,i_15126,child__$1);
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

if(cljs.core.truth_((function (){var and__7748__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__7748__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__7748__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__7748__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__7748__auto__;
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
return (function (p1__15127_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__15127_SHARP_));
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
return (function (p1__15128_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__15128_SHARP_], 0)));
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
return (function (p1__15129_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__15129_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_15130 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_15131 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__15132 = (function (){var and__7748__auto__ = attr_15131;
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_15131) : cljs.core.deref.call(null,attr_15131)),kk_15130);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__15132)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_15131,cljs.core.assoc,kk_15130,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__15133_SHARP_){
return p1__15133_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__15134_SHARP_){
return p1__15134_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__15135_SHARP_){
return p1__15135_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__15136_SHARP_){
return p1__15136_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8479__auto__.call(null,this$,kvs));
} else {
var m__8479__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8479__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8479__auto__.call(null,this$,kvs));
} else {
var m__8479__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8479__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8479__auto__.call(null,this$,child));
} else {
var m__8479__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8479__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8479__auto__.call(null,this$,child));
} else {
var m__8479__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8479__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8479__auto__.call(null,this$,new$,existing));
} else {
var m__8479__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8479__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8479__auto__.call(null,this$,new$,existing));
} else {
var m__8479__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8479__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args15137 = [];
var len__8981__auto___15144 = arguments.length;
var i__8982__auto___15145 = (0);
while(true){
if((i__8982__auto___15145 < len__8981__auto___15144)){
args15137.push((arguments[i__8982__auto___15145]));

var G__15146 = (i__8982__auto___15145 + (1));
i__8982__auto___15145 = G__15146;
continue;
} else {
}
break;
}

var G__15143 = args15137.length;
switch (G__15143) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15137.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15138){
var G__15139 = cljs.core.first(seq15138);
var seq15138__$1 = cljs.core.next(seq15138);
var G__15140 = cljs.core.first(seq15138__$1);
var seq15138__$2 = cljs.core.next(seq15138__$1);
var G__15141 = cljs.core.first(seq15138__$2);
var seq15138__$3 = cljs.core.next(seq15138__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15139,G__15140,G__15141,seq15138__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args15148 = [];
var len__8981__auto___15155 = arguments.length;
var i__8982__auto___15156 = (0);
while(true){
if((i__8982__auto___15156 < len__8981__auto___15155)){
args15148.push((arguments[i__8982__auto___15156]));

var G__15157 = (i__8982__auto___15156 + (1));
i__8982__auto___15156 = G__15157;
continue;
} else {
}
break;
}

var G__15154 = args15148.length;
switch (G__15154) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15148.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq15149){
var G__15150 = cljs.core.first(seq15149);
var seq15149__$1 = cljs.core.next(seq15149);
var G__15151 = cljs.core.first(seq15149__$1);
var seq15149__$2 = cljs.core.next(seq15149__$1);
var G__15152 = cljs.core.first(seq15149__$2);
var seq15149__$3 = cljs.core.next(seq15149__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15150,G__15151,G__15152,seq15149__$3);
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

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return (m__8479__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8479__auto__.call(null,this$,elem,value));
} else {
var m__8479__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return (m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8479__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8479__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("ICustomAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$ICustomAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__15162_SHARP_,p2__15161_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__15161_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__15161_SHARP_));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.on_BANG_.call(null,elem,this$__$1,value));
} else {
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.do_BANG_.call(null,elem,this$__$1,value));

}
}
});
hoplon.core.is_ie8 = cljs.core.not(goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__15163_SHARP_){
return p1__15163_SHARP_.head;
}):(function (p1__15164_SHARP_){
return p1__15164_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__15165_SHARP_){
try{return cljs.core.vector_QMARK_(p1__15165_SHARP_);
}catch (e15166){if((e15166 instanceof Error)){
var _ = e15166;
return null;
} else {
throw e15166;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__15167_SHARP_){
try{return cljs.core.seq_QMARK_(p1__15167_SHARP_);
}catch (e15168){if((e15168 instanceof Error)){
var _ = e15168;
return null;
} else {
throw e15168;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args15169 = [];
var len__8981__auto___15173 = arguments.length;
var i__8982__auto___15174 = (0);
while(true){
if((i__8982__auto___15174 < len__8981__auto___15173)){
args15169.push((arguments[i__8982__auto___15174]));

var G__15175 = (i__8982__auto___15174 + (1));
i__8982__auto___15174 = G__15175;
continue;
} else {
}
break;
}

var G__15171 = args15169.length;
switch (G__15171) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15169.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e15172){if((e15172 instanceof Error)){
var _ = e15172;
return not_found;
} else {
throw e15172;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args15177 = [];
var len__8981__auto___15180 = arguments.length;
var i__8982__auto___15181 = (0);
while(true){
if((i__8982__auto___15181 < len__8981__auto___15180)){
args15177.push((arguments[i__8982__auto___15181]));

var G__15182 = (i__8982__auto___15181 + (1));
i__8982__auto___15181 = G__15182;
continue;
} else {
}
break;
}

var G__15179 = args15177.length;
switch (G__15179) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15177.length)].join('')));

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
var G__15203 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__15204 = (0);
return setTimeout(G__15203,G__15204);
} else {
var temp__6736__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return v.push(f);
} else {
var G__15205_15222 = this$;
var G__15206_15223 = "_hoplonWhenDom";
var G__15207_15224 = [f];
goog.object.set(G__15205_15222,G__15206_15223,G__15207_15224);

var G__15208 = ((function (temp__6736__auto__){
return (function (){
return ((function (temp__6736__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__15216 = ((function (temp__6736__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__6736__auto__))
;
var G__15217 = (20);
return setTimeout(G__15216,G__15217);
} else {
var seq__15218_15225 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__15219_15226 = null;
var count__15220_15227 = (0);
var i__15221_15228 = (0);
while(true){
if((i__15221_15228 < count__15220_15227)){
var f_15229__$1 = chunk__15219_15226.cljs$core$IIndexed$_nth$arity$2(null,i__15221_15228);
(f_15229__$1.cljs$core$IFn$_invoke$arity$0 ? f_15229__$1.cljs$core$IFn$_invoke$arity$0() : f_15229__$1.call(null));

var G__15230 = seq__15218_15225;
var G__15231 = chunk__15219_15226;
var G__15232 = count__15220_15227;
var G__15233 = (i__15221_15228 + (1));
seq__15218_15225 = G__15230;
chunk__15219_15226 = G__15231;
count__15220_15227 = G__15232;
i__15221_15228 = G__15233;
continue;
} else {
var temp__6738__auto___15234 = cljs.core.seq(seq__15218_15225);
if(temp__6738__auto___15234){
var seq__15218_15235__$1 = temp__6738__auto___15234;
if(cljs.core.chunked_seq_QMARK_(seq__15218_15235__$1)){
var c__8671__auto___15236 = cljs.core.chunk_first(seq__15218_15235__$1);
var G__15237 = cljs.core.chunk_rest(seq__15218_15235__$1);
var G__15238 = c__8671__auto___15236;
var G__15239 = cljs.core.count(c__8671__auto___15236);
var G__15240 = (0);
seq__15218_15225 = G__15237;
chunk__15219_15226 = G__15238;
count__15220_15227 = G__15239;
i__15221_15228 = G__15240;
continue;
} else {
var f_15241__$1 = cljs.core.first(seq__15218_15235__$1);
(f_15241__$1.cljs$core$IFn$_invoke$arity$0 ? f_15241__$1.cljs$core$IFn$_invoke$arity$0() : f_15241__$1.call(null));

var G__15242 = cljs.core.next(seq__15218_15235__$1);
var G__15243 = null;
var G__15244 = (0);
var G__15245 = (0);
seq__15218_15225 = G__15242;
chunk__15219_15226 = G__15243;
count__15220_15227 = G__15244;
i__15221_15228 = G__15245;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__6736__auto__))
.call(null);
});})(temp__6736__auto__))
;
var G__15209 = (0);
return setTimeout(G__15208,G__15209);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__15262 = args;
var vec__15263 = G__15262;
var seq__15264 = cljs.core.seq(vec__15263);
var first__15265 = cljs.core.first(seq__15264);
var seq__15264__$1 = cljs.core.next(seq__15264);
var arg = first__15265;
var args__$1 = seq__15264__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__15262__$1 = G__15262;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__15266 = G__15262__$1;
var seq__15267 = cljs.core.seq(vec__15266);
var first__15268 = cljs.core.first(seq__15267);
var seq__15267__$1 = cljs.core.next(seq__15267);
var arg__$1 = first__15268;
var args__$2 = seq__15267__$1;
if(cljs.core.not((function (){var or__7760__auto__ = arg__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__15269 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__15262__$1,attr__$2,kids__$2,vec__15266,seq__15267,first__15268,seq__15267__$1,arg__$1,args__$2,attr,kids,G__15262,vec__15263,seq__15264,first__15265,seq__15264__$1,arg,args__$1){
return (function (p1__15246_SHARP_,p2__15247_SHARP_,p3__15248_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__15246_SHARP_,p2__15247_SHARP_,p3__15248_SHARP_);
});})(attr__$1,kids__$1,G__15262__$1,attr__$2,kids__$2,vec__15266,seq__15267,first__15268,seq__15267__$1,arg__$1,args__$2,attr,kids,G__15262,vec__15263,seq__15264,first__15265,seq__15264__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__15270 = kids__$2;
var G__15271 = args__$2;
attr__$1 = G__15269;
kids__$1 = G__15270;
G__15262__$1 = G__15271;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__15272 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__15273 = kids__$2;
var G__15274 = cljs.core.rest(args__$2);
attr__$1 = G__15272;
kids__$1 = G__15273;
G__15262__$1 = G__15274;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__15275 = attr__$2;
var G__15276 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__15277 = args__$2;
attr__$1 = G__15275;
kids__$1 = G__15276;
G__15262__$1 = G__15277;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__15278 = attr__$2;
var G__15279 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__15280 = args__$2;
attr__$1 = G__15278;
kids__$1 = G__15279;
G__15262__$1 = G__15280;
continue;
} else {
var G__15281 = attr__$2;
var G__15282 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__15283 = args__$2;
attr__$1 = G__15281;
kids__$1 = G__15282;
G__15262__$1 = G__15283;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__15285_SHARP_,p2__15284_SHARP_,p3__15286_SHARP_){
hoplon.core._attr_BANG_(p2__15284_SHARP_,p1__15285_SHARP_,p3__15286_SHARP_);

return p1__15285_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__15287){
var vec__15295 = p__15287;
var seq__15296 = cljs.core.seq(vec__15295);
var first__15297 = cljs.core.first(seq__15296);
var seq__15296__$1 = cljs.core.next(seq__15296);
var child_cell = first__15297;
var _ = seq__15296__$1;
var kids = vec__15295;
var this$__$1 = this$;
var seq__15298_15302 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__15299_15303 = null;
var count__15300_15304 = (0);
var i__15301_15305 = (0);
while(true){
if((i__15301_15305 < count__15300_15304)){
var x_15306 = chunk__15299_15303.cljs$core$IIndexed$_nth$arity$2(null,i__15301_15305);
var temp__6738__auto___15307 = hoplon.core.__GT_node(x_15306);
if(cljs.core.truth_(temp__6738__auto___15307)){
var x_15308__$1 = temp__6738__auto___15307;
hoplon.core.append_child_BANG_(this$__$1,x_15308__$1);
} else {
}

var G__15309 = seq__15298_15302;
var G__15310 = chunk__15299_15303;
var G__15311 = count__15300_15304;
var G__15312 = (i__15301_15305 + (1));
seq__15298_15302 = G__15309;
chunk__15299_15303 = G__15310;
count__15300_15304 = G__15311;
i__15301_15305 = G__15312;
continue;
} else {
var temp__6738__auto___15313 = cljs.core.seq(seq__15298_15302);
if(temp__6738__auto___15313){
var seq__15298_15314__$1 = temp__6738__auto___15313;
if(cljs.core.chunked_seq_QMARK_(seq__15298_15314__$1)){
var c__8671__auto___15315 = cljs.core.chunk_first(seq__15298_15314__$1);
var G__15316 = cljs.core.chunk_rest(seq__15298_15314__$1);
var G__15317 = c__8671__auto___15315;
var G__15318 = cljs.core.count(c__8671__auto___15315);
var G__15319 = (0);
seq__15298_15302 = G__15316;
chunk__15299_15303 = G__15317;
count__15300_15304 = G__15318;
i__15301_15305 = G__15319;
continue;
} else {
var x_15320 = cljs.core.first(seq__15298_15314__$1);
var temp__6738__auto___15321__$1 = hoplon.core.__GT_node(x_15320);
if(cljs.core.truth_(temp__6738__auto___15321__$1)){
var x_15322__$1 = temp__6738__auto___15321__$1;
hoplon.core.append_child_BANG_(this$__$1,x_15322__$1);
} else {
}

var G__15323 = cljs.core.next(seq__15298_15314__$1);
var G__15324 = null;
var G__15325 = (0);
var G__15326 = (0);
seq__15298_15302 = G__15323;
chunk__15299_15303 = G__15324;
count__15300_15304 = G__15325;
i__15301_15305 = G__15326;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__15365__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__15328 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15328,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15328,(1),null);
var G__15331 = this$;
hoplon.core.add_attributes_BANG_(G__15331,attr);

hoplon.core.add_children_BANG_(G__15331,kids);

return G__15331;
};
var G__15365 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__15366__i = 0, G__15366__a = new Array(arguments.length -  1);
while (G__15366__i < G__15366__a.length) {G__15366__a[G__15366__i] = arguments[G__15366__i + 1]; ++G__15366__i;}
  args = new cljs.core.IndexedSeq(G__15366__a,0);
} 
return G__15365__delegate.call(this,self__,args);};
G__15365.cljs$lang$maxFixedArity = 1;
G__15365.cljs$lang$applyTo = (function (arglist__15367){
var self__ = cljs.core.first(arglist__15367);
var args = cljs.core.rest(arglist__15367);
return G__15365__delegate(self__,args);
});
G__15365.cljs$core$IFn$_invoke$arity$variadic = G__15365__delegate;
return G__15365;
})()
;

Element.prototype.apply = (function (self__,args15327){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15327)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__15368__delegate = function (args){
var this$ = this;
var vec__15332 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(1),null);
var G__15335 = this$;
hoplon.core.add_attributes_BANG_(G__15335,attr);

hoplon.core.add_children_BANG_(G__15335,kids);

return G__15335;
};
var G__15368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15369__i = 0, G__15369__a = new Array(arguments.length -  0);
while (G__15369__i < G__15369__a.length) {G__15369__a[G__15369__i] = arguments[G__15369__i + 0]; ++G__15369__i;}
  args = new cljs.core.IndexedSeq(G__15369__a,0);
} 
return G__15368__delegate.call(this,args);};
G__15368.cljs$lang$maxFixedArity = 0;
G__15368.cljs$lang$applyTo = (function (arglist__15370){
var args = cljs.core.seq(arglist__15370);
return G__15368__delegate(args);
});
G__15368.cljs$core$IFn$_invoke$arity$variadic = G__15368__delegate;
return G__15368;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__15336 = cljs.core.seq(kvs);
var chunk__15338 = null;
var count__15339 = (0);
var i__15340 = (0);
while(true){
if((i__15340 < count__15339)){
var vec__15342 = chunk__15338.cljs$core$IIndexed$_nth$arity$2(null,i__15340);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15342,(1),null);
var k_15371__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_15371__$1);
} else {
e.setAttribute(k_15371__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15371__$1:v));
}

var G__15372 = seq__15336;
var G__15373 = chunk__15338;
var G__15374 = count__15339;
var G__15375 = (i__15340 + (1));
seq__15336 = G__15372;
chunk__15338 = G__15373;
count__15339 = G__15374;
i__15340 = G__15375;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15336);
if(temp__6738__auto__){
var seq__15336__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15336__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15336__$1);
var G__15376 = cljs.core.chunk_rest(seq__15336__$1);
var G__15377 = c__8671__auto__;
var G__15378 = cljs.core.count(c__8671__auto__);
var G__15379 = (0);
seq__15336 = G__15376;
chunk__15338 = G__15377;
count__15339 = G__15378;
i__15340 = G__15379;
continue;
} else {
var vec__15345 = cljs.core.first(seq__15336__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15345,(1),null);
var k_15380__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_15380__$1);
} else {
e.setAttribute(k_15380__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15380__$1:v));
}

var G__15381 = cljs.core.next(seq__15336__$1);
var G__15382 = null;
var G__15383 = (0);
var G__15384 = (0);
seq__15336 = G__15381;
chunk__15338 = G__15382;
count__15339 = G__15383;
i__15340 = G__15384;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__15348 = cljs.core.seq(kvs);
var chunk__15349 = null;
var count__15350 = (0);
var i__15351 = (0);
while(true){
if((i__15351 < count__15350)){
var vec__15352 = chunk__15349.cljs$core$IIndexed$_nth$arity$2(null,i__15351);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15352,(1),null);
var G__15355_15385 = e.style;
var G__15356_15386 = cljs.core.name(k);
var G__15357_15387 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__15355_15385,G__15356_15386,G__15357_15387);

var G__15388 = seq__15348;
var G__15389 = chunk__15349;
var G__15390 = count__15350;
var G__15391 = (i__15351 + (1));
seq__15348 = G__15388;
chunk__15349 = G__15389;
count__15350 = G__15390;
i__15351 = G__15391;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15348);
if(temp__6738__auto__){
var seq__15348__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15348__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15348__$1);
var G__15392 = cljs.core.chunk_rest(seq__15348__$1);
var G__15393 = c__8671__auto__;
var G__15394 = cljs.core.count(c__8671__auto__);
var G__15395 = (0);
seq__15348 = G__15392;
chunk__15349 = G__15393;
count__15350 = G__15394;
i__15351 = G__15395;
continue;
} else {
var vec__15358 = cljs.core.first(seq__15348__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15358,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15358,(1),null);
var G__15361_15396 = e.style;
var G__15362_15397 = cljs.core.name(k);
var G__15363_15398 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__15361_15396,G__15362_15397,G__15363_15398);

var G__15399 = cljs.core.next(seq__15348__$1);
var G__15400 = null;
var G__15401 = (0);
var G__15402 = (0);
seq__15348 = G__15399;
chunk__15349 = G__15400;
count__15350 = G__15401;
i__15351 = G__15402;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(!(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e15364){if((e15364 instanceof Error)){
var _ = e15364;
return null;
} else {
throw e15364;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__15409__delegate = function (args){
var vec__15406 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15406,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15406,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__15409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15410__i = 0, G__15410__a = new Array(arguments.length -  0);
while (G__15410__i < G__15410__a.length) {G__15410__a[G__15410__i] = arguments[G__15410__i + 0]; ++G__15410__i;}
  args = new cljs.core.IndexedSeq(G__15410__a,0);
} 
return G__15409__delegate.call(this,args);};
G__15409.cljs$lang$maxFixedArity = 0;
G__15409.cljs$lang$applyTo = (function (arglist__15411){
var args = cljs.core.seq(arglist__15411);
return G__15409__delegate(args);
});
G__15409.cljs$core$IFn$_invoke$arity$variadic = G__15409__delegate;
return G__15409;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__15415__delegate = function (rest__15412_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__15412_SHARP_);
};
var G__15415 = function (var_args){
var rest__15412_SHARP_ = null;
if (arguments.length > 0) {
var G__15416__i = 0, G__15416__a = new Array(arguments.length -  0);
while (G__15416__i < G__15416__a.length) {G__15416__a[G__15416__i] = arguments[G__15416__i + 0]; ++G__15416__i;}
  rest__15412_SHARP_ = new cljs.core.IndexedSeq(G__15416__a,0);
} 
return G__15415__delegate.call(this,rest__15412_SHARP_);};
G__15415.cljs$lang$maxFixedArity = 0;
G__15415.cljs$lang$applyTo = (function (arglist__15417){
var rest__15412_SHARP_ = cljs.core.seq(arglist__15417);
return G__15415__delegate(rest__15412_SHARP_);
});
G__15415.cljs$core$IFn$_invoke$arity$variadic = G__15415__delegate;
return G__15415;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__15418__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e15414){if((e15414 instanceof Error)){
var _ = e15414;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e15414;

}
}};
var G__15418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15419__i = 0, G__15419__a = new Array(arguments.length -  0);
while (G__15419__i < G__15419__a.length) {G__15419__a[G__15419__i] = arguments[G__15419__i + 0]; ++G__15419__i;}
  args = new cljs.core.IndexedSeq(G__15419__a,0);
} 
return G__15418__delegate.call(this,args);};
G__15418.cljs$lang$maxFixedArity = 0;
G__15418.cljs$lang$applyTo = (function (arglist__15420){
var args = cljs.core.seq(arglist__15420);
return G__15418__delegate(args);
});
G__15418.cljs$core$IFn$_invoke$arity$variadic = G__15418__delegate;
return G__15418;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8988__auto__ = [];
var len__8981__auto___15422 = arguments.length;
var i__8982__auto___15423 = (0);
while(true){
if((i__8982__auto___15423 < len__8981__auto___15422)){
args__8988__auto__.push((arguments[i__8982__auto___15423]));

var G__15424 = (i__8982__auto___15423 + (1));
i__8982__auto___15423 = G__15424;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hoplon.core.parse_args(args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq15421){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15421));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.make_singleton_ctor((hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1(document) : hoplon.core._head_STAR_.call(null,document)));
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.make_singleton_ctor(document.body);
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor("multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.picture = hoplon.core.make_elem_ctor("picture");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.shadow = hoplon.core.make_elem_ctor("shadow");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.template = hoplon.core.make_elem_ctor("template");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__15425_SHARP_){
return document.createTextNode(p1__15425_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__15426_SHARP_){
return document.createComment(p1__15426_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__15429 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__15430 = (0);
return setTimeout(G__15429,G__15430);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__15431_SHARP_){
var e = p1__15431_SHARP_.target;
if(cljs.core.truth_((function (){var or__7760__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__15431_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__15432 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15432) : cljs.core.atom.call(null,G__15432));
})();
var prefer_table__8792__auto__ = (function (){var G__15433 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15433) : cljs.core.atom.call(null,G__15433));
})();
var method_cache__8793__auto__ = (function (){var G__15434 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15434) : cljs.core.atom.call(null,G__15434));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__15435 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15435) : cljs.core.atom.call(null,G__15435));
})();
var hierarchy__8795__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__){
return (function (elem,key,val){
var temp__6736__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__6736__auto__)){
var n = temp__6736__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__8795__auto__,method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__15436 = elem;
var G__15437 = cljs.core.cst$kw$attr;
var G__15438 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15436,G__15437,G__15438) : hoplon.core.do_BANG_.call(null,G__15436,G__15437,G__15438));
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
hoplon.core.on_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__15439 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15439) : cljs.core.atom.call(null,G__15439));
})();
var prefer_table__8792__auto__ = (function (){var G__15440 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15440) : cljs.core.atom.call(null,G__15440));
})();
var method_cache__8793__auto__ = (function (){var G__15441 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15441) : cljs.core.atom.call(null,G__15441));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__15442 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15442) : cljs.core.atom.call(null,G__15442));
})();
var hierarchy__8795__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__){
return (function (elem,key,val){
var temp__6736__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__6736__auto__)){
var n = temp__6736__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__8795__auto__,method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__));
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
var on_deck = (function (){var G__15457 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15457) : cljs.core.atom.call(null,G__15457));
})();
var items_seq = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__15458,G__15459){
return (G__15458.cljs$core$IFn$_invoke$arity$1 ? G__15458.cljs$core$IFn$_invoke$arity$1(G__15459) : G__15458.call(null,G__15459));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__15443_SHARP_){
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__15462,G__15461,G__15460){
return (G__15460.cljs$core$IFn$_invoke$arity$2 ? G__15460.cljs$core$IFn$_invoke$arity$2(G__15461,G__15462) : G__15460.call(null,G__15461,G__15462));
});})(on_deck,items_seq))
).call(null,p1__15443_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__15444_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__15444_SHARP_) : cljs.core.deref.call(null,p1__15444_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__15444_SHARP_,cljs.core.rest);

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
var seq__15463 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__15464 = null;
var count__15465 = (0);
var i__15466 = (0);
while(true){
if((i__15466 < count__15465)){
var i = chunk__15464.cljs$core$IIndexed$_nth$arity$2(null,i__15466);
var e_15469 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__15467 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__15467) : tpl.call(null,G__15467));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_15469);

var G__15470 = seq__15463;
var G__15471 = chunk__15464;
var G__15472 = count__15465;
var G__15473 = (i__15466 + (1));
seq__15463 = G__15470;
chunk__15464 = G__15471;
count__15465 = G__15472;
i__15466 = G__15473;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15463);
if(temp__6738__auto__){
var seq__15463__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15463__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15463__$1);
var G__15474 = cljs.core.chunk_rest(seq__15463__$1);
var G__15475 = c__8671__auto__;
var G__15476 = cljs.core.count(c__8671__auto__);
var G__15477 = (0);
seq__15463 = G__15474;
chunk__15464 = G__15475;
count__15465 = G__15476;
i__15466 = G__15477;
continue;
} else {
var i = cljs.core.first(seq__15463__$1);
var e_15478 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__15468 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__15468) : tpl.call(null,G__15468));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_15478);

var G__15479 = cljs.core.next(seq__15463__$1);
var G__15480 = null;
var G__15481 = (0);
var G__15482 = (0);
seq__15463 = G__15479;
chunk__15464 = G__15480;
count__15465 = G__15481;
i__15466 = G__15482;
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
var n__8781__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__8781__auto__)){
var e_15483 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_15483);

var G__15484 = (_ + (1));
_ = G__15484;
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
var args__8988__auto__ = [];
var len__8981__auto___15495 = arguments.length;
var i__8982__auto___15496 = (0);
while(true){
if((i__8982__auto___15496 < len__8981__auto___15495)){
args__8988__auto__.push((arguments[i__8982__auto___15496]));

var G__15497 = (i__8982__auto___15496 + (1));
i__8982__auto___15496 = G__15497;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__15486){
var vec__15487 = p__15486;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15487,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__15487,default$){
return (function (G__15490,G__15492,G__15491){
var or__7760__auto__ = (function (){var and__7748__auto__ = (G__15490.cljs$core$IFn$_invoke$arity$1 ? G__15490.cljs$core$IFn$_invoke$arity$1(G__15491) : G__15490.call(null,G__15491));
if(cljs.core.truth_(and__7748__auto__)){
return G__15491;
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return G__15492;
}
});})(c,vec__15487,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__15487,default$){
return (function (){
var G__15493 = c;
var G__15494 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15493,G__15494) : cljs.core.reset_BANG_.call(null,G__15493,G__15494));
});})(_,c,vec__15487,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq15485){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15485));
});

