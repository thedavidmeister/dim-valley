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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15431_SHARP_,p2__15432_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15431_SHARP_,p2__15432_SHARP_.getAttribute("static-id"),p2__15432_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args15433 = [];
var len__8981__auto___15438 = arguments.length;
var i__8982__auto___15439 = (0);
while(true){
if((i__8982__auto___15439 < len__8981__auto___15438)){
args15433.push((arguments[i__8982__auto___15439]));

var G__15440 = (i__8982__auto___15439 + (1));
i__8982__auto___15439 = G__15440;
continue;
} else {
}
break;
}

var G__15435 = args15433.length;
switch (G__15435) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15433.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__15436_15442 = init;
var G__15437_15443 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15436_15442,G__15437_15443) : f.call(null,G__15436_15442,G__15437_15443));

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
var vec__15450 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__15451 = cljs.core.seq(vec__15450);
var first__15452 = cljs.core.first(seq__15451);
var seq__15451__$1 = cljs.core.next(seq__15451);
var f = first__15452;
var more = seq__15451__$1;
var vec__15453 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15453,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15453,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ed948aa1eedc4068a083c1ea057eaccf")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__15456_SHARP_){
return cljs.core.zipmap(p1__15456_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__15457 = (i + (1));
var G__15458 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__15457;
ret = G__15458;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args15459 = [];
var len__8981__auto___15462 = arguments.length;
var i__8982__auto___15463 = (0);
while(true){
if((i__8982__auto___15463 < len__8981__auto___15462)){
args15459.push((arguments[i__8982__auto___15463]));

var G__15464 = (i__8982__auto___15463 + (1));
i__8982__auto___15463 = G__15464;
continue;
} else {
}
break;
}

var G__15461 = args15459.length;
switch (G__15461) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15459.length)].join('')));

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

var G__15466 = (i + (1));
i = G__15466;
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
var G__15467 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__15467) : hoplon.core.$text.call(null,G__15467));
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15471_SHARP_,p2__15470_SHARP_){
if((p2__15470_SHARP_ == null)){
return p1__15471_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15471_SHARP_,p2__15470_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__15498 = new$__$1;
var vec__15500 = G__15498;
var seq__15501 = cljs.core.seq(vec__15500);
var first__15502 = cljs.core.first(seq__15501);
var seq__15501__$1 = cljs.core.next(seq__15501);
var x = first__15502;
var xs = seq__15501__$1;
var G__15499 = hoplon.core.child_vec(this$);
var vec__15503 = G__15499;
var seq__15504 = cljs.core.seq(vec__15503);
var first__15505 = cljs.core.first(seq__15504);
var seq__15504__$1 = cljs.core.next(seq__15504);
var k = first__15505;
var ks = seq__15504__$1;
var kids = vec__15503;
var G__15498__$1 = G__15498;
var G__15499__$1 = G__15499;
while(true){
var vec__15506 = G__15498__$1;
var seq__15507 = cljs.core.seq(vec__15506);
var first__15508 = cljs.core.first(seq__15507);
var seq__15507__$1 = cljs.core.next(seq__15507);
var x__$1 = first__15508;
var xs__$1 = seq__15507__$1;
var vec__15509 = G__15499__$1;
var seq__15510 = cljs.core.seq(vec__15509);
var first__15511 = cljs.core.first(seq__15510);
var seq__15510__$1 = cljs.core.next(seq__15510);
var k__$1 = first__15511;
var ks__$1 = seq__15510__$1;
var kids__$1 = vec__15509;
if(cljs.core.truth_((function (){var or__7760__auto__ = x__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return k__$1;
}
})())){
var G__15512 = xs__$1;
var G__15513 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__15498__$1 = G__15512;
G__15499__$1 = G__15513;
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
var kids_15516 = (function (){var G__15515 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15515) : cljs.core.atom.call(null,G__15515));
})();
this$__$1.hoplonKids = kids_15516;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_15516,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_15519 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_15520 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_15519) : cljs.core.deref.call(null,kids_15519)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_15519,i_15520,child__$1){
return (function (p1__15518_SHARP_,p2__15517_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_15519,cljs.core.assoc,i_15520,p2__15517_SHARP_);
});})(kids_15519,i_15520,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_15519,cljs.core.assoc,i_15520,child__$1);
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
return (function (p1__15521_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__15521_SHARP_));
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
return (function (p1__15522_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__15522_SHARP_], 0)));
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
return (function (p1__15523_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__15523_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_15524 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_15525 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__15526 = (function (){var and__7748__auto__ = attr_15525;
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_15525) : cljs.core.deref.call(null,attr_15525)),kk_15524);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__15526)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_15525,cljs.core.assoc,kk_15524,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__15527_SHARP_){
return p1__15527_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__15528_SHARP_){
return p1__15528_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__15529_SHARP_){
return p1__15529_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__15530_SHARP_){
return p1__15530_SHARP_.hoplonKids;
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
var args15531 = [];
var len__8981__auto___15538 = arguments.length;
var i__8982__auto___15539 = (0);
while(true){
if((i__8982__auto___15539 < len__8981__auto___15538)){
args15531.push((arguments[i__8982__auto___15539]));

var G__15540 = (i__8982__auto___15539 + (1));
i__8982__auto___15539 = G__15540;
continue;
} else {
}
break;
}

var G__15537 = args15531.length;
switch (G__15537) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15531.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15532){
var G__15533 = cljs.core.first(seq15532);
var seq15532__$1 = cljs.core.next(seq15532);
var G__15534 = cljs.core.first(seq15532__$1);
var seq15532__$2 = cljs.core.next(seq15532__$1);
var G__15535 = cljs.core.first(seq15532__$2);
var seq15532__$3 = cljs.core.next(seq15532__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15533,G__15534,G__15535,seq15532__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args15542 = [];
var len__8981__auto___15549 = arguments.length;
var i__8982__auto___15550 = (0);
while(true){
if((i__8982__auto___15550 < len__8981__auto___15549)){
args15542.push((arguments[i__8982__auto___15550]));

var G__15551 = (i__8982__auto___15550 + (1));
i__8982__auto___15550 = G__15551;
continue;
} else {
}
break;
}

var G__15548 = args15542.length;
switch (G__15548) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15542.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq15543){
var G__15544 = cljs.core.first(seq15543);
var seq15543__$1 = cljs.core.next(seq15543);
var G__15545 = cljs.core.first(seq15543__$1);
var seq15543__$2 = cljs.core.next(seq15543__$1);
var G__15546 = cljs.core.first(seq15543__$2);
var seq15543__$3 = cljs.core.next(seq15543__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15544,G__15545,G__15546,seq15543__$3);
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
return (function (p1__15556_SHARP_,p2__15555_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__15555_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__15555_SHARP_));
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
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__15557_SHARP_){
return p1__15557_SHARP_.head;
}):(function (p1__15558_SHARP_){
return p1__15558_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__15559_SHARP_){
try{return cljs.core.vector_QMARK_(p1__15559_SHARP_);
}catch (e15560){if((e15560 instanceof Error)){
var _ = e15560;
return null;
} else {
throw e15560;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__15561_SHARP_){
try{return cljs.core.seq_QMARK_(p1__15561_SHARP_);
}catch (e15562){if((e15562 instanceof Error)){
var _ = e15562;
return null;
} else {
throw e15562;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args15563 = [];
var len__8981__auto___15567 = arguments.length;
var i__8982__auto___15568 = (0);
while(true){
if((i__8982__auto___15568 < len__8981__auto___15567)){
args15563.push((arguments[i__8982__auto___15568]));

var G__15569 = (i__8982__auto___15568 + (1));
i__8982__auto___15568 = G__15569;
continue;
} else {
}
break;
}

var G__15565 = args15563.length;
switch (G__15565) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15563.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e15566){if((e15566 instanceof Error)){
var _ = e15566;
return not_found;
} else {
throw e15566;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args15571 = [];
var len__8981__auto___15574 = arguments.length;
var i__8982__auto___15575 = (0);
while(true){
if((i__8982__auto___15575 < len__8981__auto___15574)){
args15571.push((arguments[i__8982__auto___15575]));

var G__15576 = (i__8982__auto___15575 + (1));
i__8982__auto___15575 = G__15576;
continue;
} else {
}
break;
}

var G__15573 = args15571.length;
switch (G__15573) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15571.length)].join('')));

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
var G__15597 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__15598 = (0);
return setTimeout(G__15597,G__15598);
} else {
var temp__6736__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return v.push(f);
} else {
var G__15599_15616 = this$;
var G__15600_15617 = "_hoplonWhenDom";
var G__15601_15618 = [f];
goog.object.set(G__15599_15616,G__15600_15617,G__15601_15618);

var G__15602 = ((function (temp__6736__auto__){
return (function (){
return ((function (temp__6736__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__15610 = ((function (temp__6736__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__6736__auto__))
;
var G__15611 = (20);
return setTimeout(G__15610,G__15611);
} else {
var seq__15612_15619 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__15613_15620 = null;
var count__15614_15621 = (0);
var i__15615_15622 = (0);
while(true){
if((i__15615_15622 < count__15614_15621)){
var f_15623__$1 = chunk__15613_15620.cljs$core$IIndexed$_nth$arity$2(null,i__15615_15622);
(f_15623__$1.cljs$core$IFn$_invoke$arity$0 ? f_15623__$1.cljs$core$IFn$_invoke$arity$0() : f_15623__$1.call(null));

var G__15624 = seq__15612_15619;
var G__15625 = chunk__15613_15620;
var G__15626 = count__15614_15621;
var G__15627 = (i__15615_15622 + (1));
seq__15612_15619 = G__15624;
chunk__15613_15620 = G__15625;
count__15614_15621 = G__15626;
i__15615_15622 = G__15627;
continue;
} else {
var temp__6738__auto___15628 = cljs.core.seq(seq__15612_15619);
if(temp__6738__auto___15628){
var seq__15612_15629__$1 = temp__6738__auto___15628;
if(cljs.core.chunked_seq_QMARK_(seq__15612_15629__$1)){
var c__8671__auto___15630 = cljs.core.chunk_first(seq__15612_15629__$1);
var G__15631 = cljs.core.chunk_rest(seq__15612_15629__$1);
var G__15632 = c__8671__auto___15630;
var G__15633 = cljs.core.count(c__8671__auto___15630);
var G__15634 = (0);
seq__15612_15619 = G__15631;
chunk__15613_15620 = G__15632;
count__15614_15621 = G__15633;
i__15615_15622 = G__15634;
continue;
} else {
var f_15635__$1 = cljs.core.first(seq__15612_15629__$1);
(f_15635__$1.cljs$core$IFn$_invoke$arity$0 ? f_15635__$1.cljs$core$IFn$_invoke$arity$0() : f_15635__$1.call(null));

var G__15636 = cljs.core.next(seq__15612_15629__$1);
var G__15637 = null;
var G__15638 = (0);
var G__15639 = (0);
seq__15612_15619 = G__15636;
chunk__15613_15620 = G__15637;
count__15614_15621 = G__15638;
i__15615_15622 = G__15639;
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
var G__15603 = (0);
return setTimeout(G__15602,G__15603);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__15656 = args;
var vec__15657 = G__15656;
var seq__15658 = cljs.core.seq(vec__15657);
var first__15659 = cljs.core.first(seq__15658);
var seq__15658__$1 = cljs.core.next(seq__15658);
var arg = first__15659;
var args__$1 = seq__15658__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__15656__$1 = G__15656;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__15660 = G__15656__$1;
var seq__15661 = cljs.core.seq(vec__15660);
var first__15662 = cljs.core.first(seq__15661);
var seq__15661__$1 = cljs.core.next(seq__15661);
var arg__$1 = first__15662;
var args__$2 = seq__15661__$1;
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
var G__15663 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__15656__$1,attr__$2,kids__$2,vec__15660,seq__15661,first__15662,seq__15661__$1,arg__$1,args__$2,attr,kids,G__15656,vec__15657,seq__15658,first__15659,seq__15658__$1,arg,args__$1){
return (function (p1__15640_SHARP_,p2__15641_SHARP_,p3__15642_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__15640_SHARP_,p2__15641_SHARP_,p3__15642_SHARP_);
});})(attr__$1,kids__$1,G__15656__$1,attr__$2,kids__$2,vec__15660,seq__15661,first__15662,seq__15661__$1,arg__$1,args__$2,attr,kids,G__15656,vec__15657,seq__15658,first__15659,seq__15658__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__15664 = kids__$2;
var G__15665 = args__$2;
attr__$1 = G__15663;
kids__$1 = G__15664;
G__15656__$1 = G__15665;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__15666 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__15667 = kids__$2;
var G__15668 = cljs.core.rest(args__$2);
attr__$1 = G__15666;
kids__$1 = G__15667;
G__15656__$1 = G__15668;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__15669 = attr__$2;
var G__15670 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__15671 = args__$2;
attr__$1 = G__15669;
kids__$1 = G__15670;
G__15656__$1 = G__15671;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__15672 = attr__$2;
var G__15673 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__15674 = args__$2;
attr__$1 = G__15672;
kids__$1 = G__15673;
G__15656__$1 = G__15674;
continue;
} else {
var G__15675 = attr__$2;
var G__15676 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__15677 = args__$2;
attr__$1 = G__15675;
kids__$1 = G__15676;
G__15656__$1 = G__15677;
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
return cljs.core.reduce_kv((function (p1__15679_SHARP_,p2__15678_SHARP_,p3__15680_SHARP_){
hoplon.core._attr_BANG_(p2__15678_SHARP_,p1__15679_SHARP_,p3__15680_SHARP_);

return p1__15679_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__15681){
var vec__15689 = p__15681;
var seq__15690 = cljs.core.seq(vec__15689);
var first__15691 = cljs.core.first(seq__15690);
var seq__15690__$1 = cljs.core.next(seq__15690);
var child_cell = first__15691;
var _ = seq__15690__$1;
var kids = vec__15689;
var this$__$1 = this$;
var seq__15692_15696 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__15693_15697 = null;
var count__15694_15698 = (0);
var i__15695_15699 = (0);
while(true){
if((i__15695_15699 < count__15694_15698)){
var x_15700 = chunk__15693_15697.cljs$core$IIndexed$_nth$arity$2(null,i__15695_15699);
var temp__6738__auto___15701 = hoplon.core.__GT_node(x_15700);
if(cljs.core.truth_(temp__6738__auto___15701)){
var x_15702__$1 = temp__6738__auto___15701;
hoplon.core.append_child_BANG_(this$__$1,x_15702__$1);
} else {
}

var G__15703 = seq__15692_15696;
var G__15704 = chunk__15693_15697;
var G__15705 = count__15694_15698;
var G__15706 = (i__15695_15699 + (1));
seq__15692_15696 = G__15703;
chunk__15693_15697 = G__15704;
count__15694_15698 = G__15705;
i__15695_15699 = G__15706;
continue;
} else {
var temp__6738__auto___15707 = cljs.core.seq(seq__15692_15696);
if(temp__6738__auto___15707){
var seq__15692_15708__$1 = temp__6738__auto___15707;
if(cljs.core.chunked_seq_QMARK_(seq__15692_15708__$1)){
var c__8671__auto___15709 = cljs.core.chunk_first(seq__15692_15708__$1);
var G__15710 = cljs.core.chunk_rest(seq__15692_15708__$1);
var G__15711 = c__8671__auto___15709;
var G__15712 = cljs.core.count(c__8671__auto___15709);
var G__15713 = (0);
seq__15692_15696 = G__15710;
chunk__15693_15697 = G__15711;
count__15694_15698 = G__15712;
i__15695_15699 = G__15713;
continue;
} else {
var x_15714 = cljs.core.first(seq__15692_15708__$1);
var temp__6738__auto___15715__$1 = hoplon.core.__GT_node(x_15714);
if(cljs.core.truth_(temp__6738__auto___15715__$1)){
var x_15716__$1 = temp__6738__auto___15715__$1;
hoplon.core.append_child_BANG_(this$__$1,x_15716__$1);
} else {
}

var G__15717 = cljs.core.next(seq__15692_15708__$1);
var G__15718 = null;
var G__15719 = (0);
var G__15720 = (0);
seq__15692_15696 = G__15717;
chunk__15693_15697 = G__15718;
count__15694_15698 = G__15719;
i__15695_15699 = G__15720;
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
var G__15759__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__15722 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15722,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15722,(1),null);
var G__15725 = this$;
hoplon.core.add_attributes_BANG_(G__15725,attr);

hoplon.core.add_children_BANG_(G__15725,kids);

return G__15725;
};
var G__15759 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__15760__i = 0, G__15760__a = new Array(arguments.length -  1);
while (G__15760__i < G__15760__a.length) {G__15760__a[G__15760__i] = arguments[G__15760__i + 1]; ++G__15760__i;}
  args = new cljs.core.IndexedSeq(G__15760__a,0);
} 
return G__15759__delegate.call(this,self__,args);};
G__15759.cljs$lang$maxFixedArity = 1;
G__15759.cljs$lang$applyTo = (function (arglist__15761){
var self__ = cljs.core.first(arglist__15761);
var args = cljs.core.rest(arglist__15761);
return G__15759__delegate(self__,args);
});
G__15759.cljs$core$IFn$_invoke$arity$variadic = G__15759__delegate;
return G__15759;
})()
;

Element.prototype.apply = (function (self__,args15721){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15721)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__15762__delegate = function (args){
var this$ = this;
var vec__15726 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15726,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15726,(1),null);
var G__15729 = this$;
hoplon.core.add_attributes_BANG_(G__15729,attr);

hoplon.core.add_children_BANG_(G__15729,kids);

return G__15729;
};
var G__15762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15763__i = 0, G__15763__a = new Array(arguments.length -  0);
while (G__15763__i < G__15763__a.length) {G__15763__a[G__15763__i] = arguments[G__15763__i + 0]; ++G__15763__i;}
  args = new cljs.core.IndexedSeq(G__15763__a,0);
} 
return G__15762__delegate.call(this,args);};
G__15762.cljs$lang$maxFixedArity = 0;
G__15762.cljs$lang$applyTo = (function (arglist__15764){
var args = cljs.core.seq(arglist__15764);
return G__15762__delegate(args);
});
G__15762.cljs$core$IFn$_invoke$arity$variadic = G__15762__delegate;
return G__15762;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__15730 = cljs.core.seq(kvs);
var chunk__15732 = null;
var count__15733 = (0);
var i__15734 = (0);
while(true){
if((i__15734 < count__15733)){
var vec__15736 = chunk__15732.cljs$core$IIndexed$_nth$arity$2(null,i__15734);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15736,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15736,(1),null);
var k_15765__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_15765__$1);
} else {
e.setAttribute(k_15765__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15765__$1:v));
}

var G__15766 = seq__15730;
var G__15767 = chunk__15732;
var G__15768 = count__15733;
var G__15769 = (i__15734 + (1));
seq__15730 = G__15766;
chunk__15732 = G__15767;
count__15733 = G__15768;
i__15734 = G__15769;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15730);
if(temp__6738__auto__){
var seq__15730__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15730__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15730__$1);
var G__15770 = cljs.core.chunk_rest(seq__15730__$1);
var G__15771 = c__8671__auto__;
var G__15772 = cljs.core.count(c__8671__auto__);
var G__15773 = (0);
seq__15730 = G__15770;
chunk__15732 = G__15771;
count__15733 = G__15772;
i__15734 = G__15773;
continue;
} else {
var vec__15739 = cljs.core.first(seq__15730__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15739,(1),null);
var k_15774__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_15774__$1);
} else {
e.setAttribute(k_15774__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15774__$1:v));
}

var G__15775 = cljs.core.next(seq__15730__$1);
var G__15776 = null;
var G__15777 = (0);
var G__15778 = (0);
seq__15730 = G__15775;
chunk__15732 = G__15776;
count__15733 = G__15777;
i__15734 = G__15778;
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
var seq__15742 = cljs.core.seq(kvs);
var chunk__15743 = null;
var count__15744 = (0);
var i__15745 = (0);
while(true){
if((i__15745 < count__15744)){
var vec__15746 = chunk__15743.cljs$core$IIndexed$_nth$arity$2(null,i__15745);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15746,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15746,(1),null);
var G__15749_15779 = e.style;
var G__15750_15780 = cljs.core.name(k);
var G__15751_15781 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__15749_15779,G__15750_15780,G__15751_15781);

var G__15782 = seq__15742;
var G__15783 = chunk__15743;
var G__15784 = count__15744;
var G__15785 = (i__15745 + (1));
seq__15742 = G__15782;
chunk__15743 = G__15783;
count__15744 = G__15784;
i__15745 = G__15785;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15742);
if(temp__6738__auto__){
var seq__15742__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15742__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15742__$1);
var G__15786 = cljs.core.chunk_rest(seq__15742__$1);
var G__15787 = c__8671__auto__;
var G__15788 = cljs.core.count(c__8671__auto__);
var G__15789 = (0);
seq__15742 = G__15786;
chunk__15743 = G__15787;
count__15744 = G__15788;
i__15745 = G__15789;
continue;
} else {
var vec__15752 = cljs.core.first(seq__15742__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15752,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15752,(1),null);
var G__15755_15790 = e.style;
var G__15756_15791 = cljs.core.name(k);
var G__15757_15792 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__15755_15790,G__15756_15791,G__15757_15792);

var G__15793 = cljs.core.next(seq__15742__$1);
var G__15794 = null;
var G__15795 = (0);
var G__15796 = (0);
seq__15742 = G__15793;
chunk__15743 = G__15794;
count__15744 = G__15795;
i__15745 = G__15796;
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
}catch (e15758){if((e15758 instanceof Error)){
var _ = e15758;
return null;
} else {
throw e15758;

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
var G__15803__delegate = function (args){
var vec__15800 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15800,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15800,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__15803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15804__i = 0, G__15804__a = new Array(arguments.length -  0);
while (G__15804__i < G__15804__a.length) {G__15804__a[G__15804__i] = arguments[G__15804__i + 0]; ++G__15804__i;}
  args = new cljs.core.IndexedSeq(G__15804__a,0);
} 
return G__15803__delegate.call(this,args);};
G__15803.cljs$lang$maxFixedArity = 0;
G__15803.cljs$lang$applyTo = (function (arglist__15805){
var args = cljs.core.seq(arglist__15805);
return G__15803__delegate(args);
});
G__15803.cljs$core$IFn$_invoke$arity$variadic = G__15803__delegate;
return G__15803;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__15809__delegate = function (rest__15806_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__15806_SHARP_);
};
var G__15809 = function (var_args){
var rest__15806_SHARP_ = null;
if (arguments.length > 0) {
var G__15810__i = 0, G__15810__a = new Array(arguments.length -  0);
while (G__15810__i < G__15810__a.length) {G__15810__a[G__15810__i] = arguments[G__15810__i + 0]; ++G__15810__i;}
  rest__15806_SHARP_ = new cljs.core.IndexedSeq(G__15810__a,0);
} 
return G__15809__delegate.call(this,rest__15806_SHARP_);};
G__15809.cljs$lang$maxFixedArity = 0;
G__15809.cljs$lang$applyTo = (function (arglist__15811){
var rest__15806_SHARP_ = cljs.core.seq(arglist__15811);
return G__15809__delegate(rest__15806_SHARP_);
});
G__15809.cljs$core$IFn$_invoke$arity$variadic = G__15809__delegate;
return G__15809;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__15812__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e15808){if((e15808 instanceof Error)){
var _ = e15808;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e15808;

}
}};
var G__15812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15813__i = 0, G__15813__a = new Array(arguments.length -  0);
while (G__15813__i < G__15813__a.length) {G__15813__a[G__15813__i] = arguments[G__15813__i + 0]; ++G__15813__i;}
  args = new cljs.core.IndexedSeq(G__15813__a,0);
} 
return G__15812__delegate.call(this,args);};
G__15812.cljs$lang$maxFixedArity = 0;
G__15812.cljs$lang$applyTo = (function (arglist__15814){
var args = cljs.core.seq(arglist__15814);
return G__15812__delegate(args);
});
G__15812.cljs$core$IFn$_invoke$arity$variadic = G__15812__delegate;
return G__15812;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8988__auto__ = [];
var len__8981__auto___15816 = arguments.length;
var i__8982__auto___15817 = (0);
while(true){
if((i__8982__auto___15817 < len__8981__auto___15816)){
args__8988__auto__.push((arguments[i__8982__auto___15817]));

var G__15818 = (i__8982__auto___15817 + (1));
i__8982__auto___15817 = G__15818;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq15815){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15815));
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
hoplon.core.$text = (function hoplon$core$$text(p1__15819_SHARP_){
return document.createTextNode(p1__15819_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__15820_SHARP_){
return document.createComment(p1__15820_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__15823 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__15824 = (0);
return setTimeout(G__15823,G__15824);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__15825_SHARP_){
var e = p1__15825_SHARP_.target;
if(cljs.core.truth_((function (){var or__7760__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__15825_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__15826 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15826) : cljs.core.atom.call(null,G__15826));
})();
var prefer_table__8792__auto__ = (function (){var G__15827 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15827) : cljs.core.atom.call(null,G__15827));
})();
var method_cache__8793__auto__ = (function (){var G__15828 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15828) : cljs.core.atom.call(null,G__15828));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__15829 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15829) : cljs.core.atom.call(null,G__15829));
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
var G__15830 = elem;
var G__15831 = cljs.core.cst$kw$attr;
var G__15832 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15830,G__15831,G__15832) : hoplon.core.do_BANG_.call(null,G__15830,G__15831,G__15832));
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
hoplon.core.on_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__15833 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15833) : cljs.core.atom.call(null,G__15833));
})();
var prefer_table__8792__auto__ = (function (){var G__15834 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15834) : cljs.core.atom.call(null,G__15834));
})();
var method_cache__8793__auto__ = (function (){var G__15835 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15835) : cljs.core.atom.call(null,G__15835));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__15836 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15836) : cljs.core.atom.call(null,G__15836));
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
var on_deck = (function (){var G__15851 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15851) : cljs.core.atom.call(null,G__15851));
})();
var items_seq = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__15852,G__15853){
return (G__15852.cljs$core$IFn$_invoke$arity$1 ? G__15852.cljs$core$IFn$_invoke$arity$1(G__15853) : G__15852.call(null,G__15853));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__15837_SHARP_){
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__15856,G__15855,G__15854){
return (G__15854.cljs$core$IFn$_invoke$arity$2 ? G__15854.cljs$core$IFn$_invoke$arity$2(G__15855,G__15856) : G__15854.call(null,G__15855,G__15856));
});})(on_deck,items_seq))
).call(null,p1__15837_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__15838_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__15838_SHARP_) : cljs.core.deref.call(null,p1__15838_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__15838_SHARP_,cljs.core.rest);

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
var seq__15857 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__15858 = null;
var count__15859 = (0);
var i__15860 = (0);
while(true){
if((i__15860 < count__15859)){
var i = chunk__15858.cljs$core$IIndexed$_nth$arity$2(null,i__15860);
var e_15863 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__15861 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__15861) : tpl.call(null,G__15861));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_15863);

var G__15864 = seq__15857;
var G__15865 = chunk__15858;
var G__15866 = count__15859;
var G__15867 = (i__15860 + (1));
seq__15857 = G__15864;
chunk__15858 = G__15865;
count__15859 = G__15866;
i__15860 = G__15867;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15857);
if(temp__6738__auto__){
var seq__15857__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15857__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15857__$1);
var G__15868 = cljs.core.chunk_rest(seq__15857__$1);
var G__15869 = c__8671__auto__;
var G__15870 = cljs.core.count(c__8671__auto__);
var G__15871 = (0);
seq__15857 = G__15868;
chunk__15858 = G__15869;
count__15859 = G__15870;
i__15860 = G__15871;
continue;
} else {
var i = cljs.core.first(seq__15857__$1);
var e_15872 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__15862 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__15862) : tpl.call(null,G__15862));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_15872);

var G__15873 = cljs.core.next(seq__15857__$1);
var G__15874 = null;
var G__15875 = (0);
var G__15876 = (0);
seq__15857 = G__15873;
chunk__15858 = G__15874;
count__15859 = G__15875;
i__15860 = G__15876;
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
var e_15877 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_15877);

var G__15878 = (_ + (1));
_ = G__15878;
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
var len__8981__auto___15889 = arguments.length;
var i__8982__auto___15890 = (0);
while(true){
if((i__8982__auto___15890 < len__8981__auto___15889)){
args__8988__auto__.push((arguments[i__8982__auto___15890]));

var G__15891 = (i__8982__auto___15890 + (1));
i__8982__auto___15890 = G__15891;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__15880){
var vec__15881 = p__15880;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15881,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__15881,default$){
return (function (G__15884,G__15886,G__15885){
var or__7760__auto__ = (function (){var and__7748__auto__ = (G__15884.cljs$core$IFn$_invoke$arity$1 ? G__15884.cljs$core$IFn$_invoke$arity$1(G__15885) : G__15884.call(null,G__15885));
if(cljs.core.truth_(and__7748__auto__)){
return G__15885;
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return G__15886;
}
});})(c,vec__15881,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__15881,default$){
return (function (){
var G__15887 = c;
var G__15888 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15887,G__15888) : cljs.core.reset_BANG_.call(null,G__15887,G__15888));
});})(_,c,vec__15881,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq15879){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15879));
});

