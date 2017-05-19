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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17475_SHARP_,p2__17476_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17475_SHARP_,p2__17476_SHARP_.getAttribute("static-id"),p2__17476_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args17477 = [];
var len__8981__auto___17482 = arguments.length;
var i__8982__auto___17483 = (0);
while(true){
if((i__8982__auto___17483 < len__8981__auto___17482)){
args17477.push((arguments[i__8982__auto___17483]));

var G__17484 = (i__8982__auto___17483 + (1));
i__8982__auto___17483 = G__17484;
continue;
} else {
}
break;
}

var G__17479 = args17477.length;
switch (G__17479) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17477.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__17480_17486 = init;
var G__17481_17487 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17480_17486,G__17481_17487) : f.call(null,G__17480_17486,G__17481_17487));

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
var vec__17494 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__17495 = cljs.core.seq(vec__17494);
var first__17496 = cljs.core.first(seq__17495);
var seq__17495__$1 = cljs.core.next(seq__17495);
var f = first__17496;
var more = seq__17495__$1;
var vec__17497 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17497,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17497,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("32a33121403e4314b232c1aad0eb2cfc")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__17500_SHARP_){
return cljs.core.zipmap(p1__17500_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__17501 = (i + (1));
var G__17502 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__17501;
ret = G__17502;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args17503 = [];
var len__8981__auto___17506 = arguments.length;
var i__8982__auto___17507 = (0);
while(true){
if((i__8982__auto___17507 < len__8981__auto___17506)){
args17503.push((arguments[i__8982__auto___17507]));

var G__17508 = (i__8982__auto___17507 + (1));
i__8982__auto___17507 = G__17508;
continue;
} else {
}
break;
}

var G__17505 = args17503.length;
switch (G__17505) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17503.length)].join('')));

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

var G__17510 = (i + (1));
i = G__17510;
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
var G__17511 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__17511) : hoplon.core.$text.call(null,G__17511));
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17515_SHARP_,p2__17514_SHARP_){
if((p2__17514_SHARP_ == null)){
return p1__17515_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17515_SHARP_,p2__17514_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__17542 = new$__$1;
var vec__17544 = G__17542;
var seq__17545 = cljs.core.seq(vec__17544);
var first__17546 = cljs.core.first(seq__17545);
var seq__17545__$1 = cljs.core.next(seq__17545);
var x = first__17546;
var xs = seq__17545__$1;
var G__17543 = hoplon.core.child_vec(this$);
var vec__17547 = G__17543;
var seq__17548 = cljs.core.seq(vec__17547);
var first__17549 = cljs.core.first(seq__17548);
var seq__17548__$1 = cljs.core.next(seq__17548);
var k = first__17549;
var ks = seq__17548__$1;
var kids = vec__17547;
var G__17542__$1 = G__17542;
var G__17543__$1 = G__17543;
while(true){
var vec__17550 = G__17542__$1;
var seq__17551 = cljs.core.seq(vec__17550);
var first__17552 = cljs.core.first(seq__17551);
var seq__17551__$1 = cljs.core.next(seq__17551);
var x__$1 = first__17552;
var xs__$1 = seq__17551__$1;
var vec__17553 = G__17543__$1;
var seq__17554 = cljs.core.seq(vec__17553);
var first__17555 = cljs.core.first(seq__17554);
var seq__17554__$1 = cljs.core.next(seq__17554);
var k__$1 = first__17555;
var ks__$1 = seq__17554__$1;
var kids__$1 = vec__17553;
if(cljs.core.truth_((function (){var or__7760__auto__ = x__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return k__$1;
}
})())){
var G__17556 = xs__$1;
var G__17557 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__17542__$1 = G__17556;
G__17543__$1 = G__17557;
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
var kids_17560 = (function (){var G__17559 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17559) : cljs.core.atom.call(null,G__17559));
})();
this$__$1.hoplonKids = kids_17560;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_17560,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_17563 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_17564 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_17563) : cljs.core.deref.call(null,kids_17563)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_17563,i_17564,child__$1){
return (function (p1__17562_SHARP_,p2__17561_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_17563,cljs.core.assoc,i_17564,p2__17561_SHARP_);
});})(kids_17563,i_17564,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_17563,cljs.core.assoc,i_17564,child__$1);
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
return (function (p1__17565_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__17565_SHARP_));
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
return (function (p1__17566_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__17566_SHARP_], 0)));
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
return (function (p1__17567_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__17567_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_17568 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_17569 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__17570 = (function (){var and__7748__auto__ = attr_17569;
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_17569) : cljs.core.deref.call(null,attr_17569)),kk_17568);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__17570)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_17569,cljs.core.assoc,kk_17568,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__17571_SHARP_){
return p1__17571_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__17572_SHARP_){
return p1__17572_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__17573_SHARP_){
return p1__17573_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__17574_SHARP_){
return p1__17574_SHARP_.hoplonKids;
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
var args17575 = [];
var len__8981__auto___17582 = arguments.length;
var i__8982__auto___17583 = (0);
while(true){
if((i__8982__auto___17583 < len__8981__auto___17582)){
args17575.push((arguments[i__8982__auto___17583]));

var G__17584 = (i__8982__auto___17583 + (1));
i__8982__auto___17583 = G__17584;
continue;
} else {
}
break;
}

var G__17581 = args17575.length;
switch (G__17581) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args17575.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq17576){
var G__17577 = cljs.core.first(seq17576);
var seq17576__$1 = cljs.core.next(seq17576);
var G__17578 = cljs.core.first(seq17576__$1);
var seq17576__$2 = cljs.core.next(seq17576__$1);
var G__17579 = cljs.core.first(seq17576__$2);
var seq17576__$3 = cljs.core.next(seq17576__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17577,G__17578,G__17579,seq17576__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args17586 = [];
var len__8981__auto___17593 = arguments.length;
var i__8982__auto___17594 = (0);
while(true){
if((i__8982__auto___17594 < len__8981__auto___17593)){
args17586.push((arguments[i__8982__auto___17594]));

var G__17595 = (i__8982__auto___17594 + (1));
i__8982__auto___17594 = G__17595;
continue;
} else {
}
break;
}

var G__17592 = args17586.length;
switch (G__17592) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args17586.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq17587){
var G__17588 = cljs.core.first(seq17587);
var seq17587__$1 = cljs.core.next(seq17587);
var G__17589 = cljs.core.first(seq17587__$1);
var seq17587__$2 = cljs.core.next(seq17587__$1);
var G__17590 = cljs.core.first(seq17587__$2);
var seq17587__$3 = cljs.core.next(seq17587__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17588,G__17589,G__17590,seq17587__$3);
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
return (function (p1__17600_SHARP_,p2__17599_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__17599_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__17599_SHARP_));
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
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__17601_SHARP_){
return p1__17601_SHARP_.head;
}):(function (p1__17602_SHARP_){
return p1__17602_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__17603_SHARP_){
try{return cljs.core.vector_QMARK_(p1__17603_SHARP_);
}catch (e17604){if((e17604 instanceof Error)){
var _ = e17604;
return null;
} else {
throw e17604;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__17605_SHARP_){
try{return cljs.core.seq_QMARK_(p1__17605_SHARP_);
}catch (e17606){if((e17606 instanceof Error)){
var _ = e17606;
return null;
} else {
throw e17606;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args17607 = [];
var len__8981__auto___17611 = arguments.length;
var i__8982__auto___17612 = (0);
while(true){
if((i__8982__auto___17612 < len__8981__auto___17611)){
args17607.push((arguments[i__8982__auto___17612]));

var G__17613 = (i__8982__auto___17612 + (1));
i__8982__auto___17612 = G__17613;
continue;
} else {
}
break;
}

var G__17609 = args17607.length;
switch (G__17609) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17607.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e17610){if((e17610 instanceof Error)){
var _ = e17610;
return not_found;
} else {
throw e17610;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args17615 = [];
var len__8981__auto___17618 = arguments.length;
var i__8982__auto___17619 = (0);
while(true){
if((i__8982__auto___17619 < len__8981__auto___17618)){
args17615.push((arguments[i__8982__auto___17619]));

var G__17620 = (i__8982__auto___17619 + (1));
i__8982__auto___17619 = G__17620;
continue;
} else {
}
break;
}

var G__17617 = args17615.length;
switch (G__17617) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17615.length)].join('')));

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
var G__17641 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__17642 = (0);
return setTimeout(G__17641,G__17642);
} else {
var temp__6736__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return v.push(f);
} else {
var G__17643_17660 = this$;
var G__17644_17661 = "_hoplonWhenDom";
var G__17645_17662 = [f];
goog.object.set(G__17643_17660,G__17644_17661,G__17645_17662);

var G__17646 = ((function (temp__6736__auto__){
return (function (){
return ((function (temp__6736__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__17654 = ((function (temp__6736__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__6736__auto__))
;
var G__17655 = (20);
return setTimeout(G__17654,G__17655);
} else {
var seq__17656_17663 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__17657_17664 = null;
var count__17658_17665 = (0);
var i__17659_17666 = (0);
while(true){
if((i__17659_17666 < count__17658_17665)){
var f_17667__$1 = chunk__17657_17664.cljs$core$IIndexed$_nth$arity$2(null,i__17659_17666);
(f_17667__$1.cljs$core$IFn$_invoke$arity$0 ? f_17667__$1.cljs$core$IFn$_invoke$arity$0() : f_17667__$1.call(null));

var G__17668 = seq__17656_17663;
var G__17669 = chunk__17657_17664;
var G__17670 = count__17658_17665;
var G__17671 = (i__17659_17666 + (1));
seq__17656_17663 = G__17668;
chunk__17657_17664 = G__17669;
count__17658_17665 = G__17670;
i__17659_17666 = G__17671;
continue;
} else {
var temp__6738__auto___17672 = cljs.core.seq(seq__17656_17663);
if(temp__6738__auto___17672){
var seq__17656_17673__$1 = temp__6738__auto___17672;
if(cljs.core.chunked_seq_QMARK_(seq__17656_17673__$1)){
var c__8671__auto___17674 = cljs.core.chunk_first(seq__17656_17673__$1);
var G__17675 = cljs.core.chunk_rest(seq__17656_17673__$1);
var G__17676 = c__8671__auto___17674;
var G__17677 = cljs.core.count(c__8671__auto___17674);
var G__17678 = (0);
seq__17656_17663 = G__17675;
chunk__17657_17664 = G__17676;
count__17658_17665 = G__17677;
i__17659_17666 = G__17678;
continue;
} else {
var f_17679__$1 = cljs.core.first(seq__17656_17673__$1);
(f_17679__$1.cljs$core$IFn$_invoke$arity$0 ? f_17679__$1.cljs$core$IFn$_invoke$arity$0() : f_17679__$1.call(null));

var G__17680 = cljs.core.next(seq__17656_17673__$1);
var G__17681 = null;
var G__17682 = (0);
var G__17683 = (0);
seq__17656_17663 = G__17680;
chunk__17657_17664 = G__17681;
count__17658_17665 = G__17682;
i__17659_17666 = G__17683;
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
var G__17647 = (0);
return setTimeout(G__17646,G__17647);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__17700 = args;
var vec__17701 = G__17700;
var seq__17702 = cljs.core.seq(vec__17701);
var first__17703 = cljs.core.first(seq__17702);
var seq__17702__$1 = cljs.core.next(seq__17702);
var arg = first__17703;
var args__$1 = seq__17702__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__17700__$1 = G__17700;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__17704 = G__17700__$1;
var seq__17705 = cljs.core.seq(vec__17704);
var first__17706 = cljs.core.first(seq__17705);
var seq__17705__$1 = cljs.core.next(seq__17705);
var arg__$1 = first__17706;
var args__$2 = seq__17705__$1;
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
var G__17707 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__17700__$1,attr__$2,kids__$2,vec__17704,seq__17705,first__17706,seq__17705__$1,arg__$1,args__$2,attr,kids,G__17700,vec__17701,seq__17702,first__17703,seq__17702__$1,arg,args__$1){
return (function (p1__17684_SHARP_,p2__17685_SHARP_,p3__17686_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__17684_SHARP_,p2__17685_SHARP_,p3__17686_SHARP_);
});})(attr__$1,kids__$1,G__17700__$1,attr__$2,kids__$2,vec__17704,seq__17705,first__17706,seq__17705__$1,arg__$1,args__$2,attr,kids,G__17700,vec__17701,seq__17702,first__17703,seq__17702__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__17708 = kids__$2;
var G__17709 = args__$2;
attr__$1 = G__17707;
kids__$1 = G__17708;
G__17700__$1 = G__17709;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__17710 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__17711 = kids__$2;
var G__17712 = cljs.core.rest(args__$2);
attr__$1 = G__17710;
kids__$1 = G__17711;
G__17700__$1 = G__17712;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__17713 = attr__$2;
var G__17714 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__17715 = args__$2;
attr__$1 = G__17713;
kids__$1 = G__17714;
G__17700__$1 = G__17715;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__17716 = attr__$2;
var G__17717 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__17718 = args__$2;
attr__$1 = G__17716;
kids__$1 = G__17717;
G__17700__$1 = G__17718;
continue;
} else {
var G__17719 = attr__$2;
var G__17720 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__17721 = args__$2;
attr__$1 = G__17719;
kids__$1 = G__17720;
G__17700__$1 = G__17721;
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
return cljs.core.reduce_kv((function (p1__17723_SHARP_,p2__17722_SHARP_,p3__17724_SHARP_){
hoplon.core._attr_BANG_(p2__17722_SHARP_,p1__17723_SHARP_,p3__17724_SHARP_);

return p1__17723_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__17725){
var vec__17733 = p__17725;
var seq__17734 = cljs.core.seq(vec__17733);
var first__17735 = cljs.core.first(seq__17734);
var seq__17734__$1 = cljs.core.next(seq__17734);
var child_cell = first__17735;
var _ = seq__17734__$1;
var kids = vec__17733;
var this$__$1 = this$;
var seq__17736_17740 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__17737_17741 = null;
var count__17738_17742 = (0);
var i__17739_17743 = (0);
while(true){
if((i__17739_17743 < count__17738_17742)){
var x_17744 = chunk__17737_17741.cljs$core$IIndexed$_nth$arity$2(null,i__17739_17743);
var temp__6738__auto___17745 = hoplon.core.__GT_node(x_17744);
if(cljs.core.truth_(temp__6738__auto___17745)){
var x_17746__$1 = temp__6738__auto___17745;
hoplon.core.append_child_BANG_(this$__$1,x_17746__$1);
} else {
}

var G__17747 = seq__17736_17740;
var G__17748 = chunk__17737_17741;
var G__17749 = count__17738_17742;
var G__17750 = (i__17739_17743 + (1));
seq__17736_17740 = G__17747;
chunk__17737_17741 = G__17748;
count__17738_17742 = G__17749;
i__17739_17743 = G__17750;
continue;
} else {
var temp__6738__auto___17751 = cljs.core.seq(seq__17736_17740);
if(temp__6738__auto___17751){
var seq__17736_17752__$1 = temp__6738__auto___17751;
if(cljs.core.chunked_seq_QMARK_(seq__17736_17752__$1)){
var c__8671__auto___17753 = cljs.core.chunk_first(seq__17736_17752__$1);
var G__17754 = cljs.core.chunk_rest(seq__17736_17752__$1);
var G__17755 = c__8671__auto___17753;
var G__17756 = cljs.core.count(c__8671__auto___17753);
var G__17757 = (0);
seq__17736_17740 = G__17754;
chunk__17737_17741 = G__17755;
count__17738_17742 = G__17756;
i__17739_17743 = G__17757;
continue;
} else {
var x_17758 = cljs.core.first(seq__17736_17752__$1);
var temp__6738__auto___17759__$1 = hoplon.core.__GT_node(x_17758);
if(cljs.core.truth_(temp__6738__auto___17759__$1)){
var x_17760__$1 = temp__6738__auto___17759__$1;
hoplon.core.append_child_BANG_(this$__$1,x_17760__$1);
} else {
}

var G__17761 = cljs.core.next(seq__17736_17752__$1);
var G__17762 = null;
var G__17763 = (0);
var G__17764 = (0);
seq__17736_17740 = G__17761;
chunk__17737_17741 = G__17762;
count__17738_17742 = G__17763;
i__17739_17743 = G__17764;
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
var G__17803__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__17766 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17766,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17766,(1),null);
var G__17769 = this$;
hoplon.core.add_attributes_BANG_(G__17769,attr);

hoplon.core.add_children_BANG_(G__17769,kids);

return G__17769;
};
var G__17803 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__17804__i = 0, G__17804__a = new Array(arguments.length -  1);
while (G__17804__i < G__17804__a.length) {G__17804__a[G__17804__i] = arguments[G__17804__i + 1]; ++G__17804__i;}
  args = new cljs.core.IndexedSeq(G__17804__a,0);
} 
return G__17803__delegate.call(this,self__,args);};
G__17803.cljs$lang$maxFixedArity = 1;
G__17803.cljs$lang$applyTo = (function (arglist__17805){
var self__ = cljs.core.first(arglist__17805);
var args = cljs.core.rest(arglist__17805);
return G__17803__delegate(self__,args);
});
G__17803.cljs$core$IFn$_invoke$arity$variadic = G__17803__delegate;
return G__17803;
})()
;

Element.prototype.apply = (function (self__,args17765){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17765)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__17806__delegate = function (args){
var this$ = this;
var vec__17770 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17770,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17770,(1),null);
var G__17773 = this$;
hoplon.core.add_attributes_BANG_(G__17773,attr);

hoplon.core.add_children_BANG_(G__17773,kids);

return G__17773;
};
var G__17806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17807__i = 0, G__17807__a = new Array(arguments.length -  0);
while (G__17807__i < G__17807__a.length) {G__17807__a[G__17807__i] = arguments[G__17807__i + 0]; ++G__17807__i;}
  args = new cljs.core.IndexedSeq(G__17807__a,0);
} 
return G__17806__delegate.call(this,args);};
G__17806.cljs$lang$maxFixedArity = 0;
G__17806.cljs$lang$applyTo = (function (arglist__17808){
var args = cljs.core.seq(arglist__17808);
return G__17806__delegate(args);
});
G__17806.cljs$core$IFn$_invoke$arity$variadic = G__17806__delegate;
return G__17806;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__17774 = cljs.core.seq(kvs);
var chunk__17776 = null;
var count__17777 = (0);
var i__17778 = (0);
while(true){
if((i__17778 < count__17777)){
var vec__17780 = chunk__17776.cljs$core$IIndexed$_nth$arity$2(null,i__17778);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17780,(1),null);
var k_17809__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_17809__$1);
} else {
e.setAttribute(k_17809__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_17809__$1:v));
}

var G__17810 = seq__17774;
var G__17811 = chunk__17776;
var G__17812 = count__17777;
var G__17813 = (i__17778 + (1));
seq__17774 = G__17810;
chunk__17776 = G__17811;
count__17777 = G__17812;
i__17778 = G__17813;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__17774);
if(temp__6738__auto__){
var seq__17774__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17774__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__17774__$1);
var G__17814 = cljs.core.chunk_rest(seq__17774__$1);
var G__17815 = c__8671__auto__;
var G__17816 = cljs.core.count(c__8671__auto__);
var G__17817 = (0);
seq__17774 = G__17814;
chunk__17776 = G__17815;
count__17777 = G__17816;
i__17778 = G__17817;
continue;
} else {
var vec__17783 = cljs.core.first(seq__17774__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17783,(1),null);
var k_17818__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_17818__$1);
} else {
e.setAttribute(k_17818__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_17818__$1:v));
}

var G__17819 = cljs.core.next(seq__17774__$1);
var G__17820 = null;
var G__17821 = (0);
var G__17822 = (0);
seq__17774 = G__17819;
chunk__17776 = G__17820;
count__17777 = G__17821;
i__17778 = G__17822;
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
var seq__17786 = cljs.core.seq(kvs);
var chunk__17787 = null;
var count__17788 = (0);
var i__17789 = (0);
while(true){
if((i__17789 < count__17788)){
var vec__17790 = chunk__17787.cljs$core$IIndexed$_nth$arity$2(null,i__17789);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17790,(1),null);
var G__17793_17823 = e.style;
var G__17794_17824 = cljs.core.name(k);
var G__17795_17825 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__17793_17823,G__17794_17824,G__17795_17825);

var G__17826 = seq__17786;
var G__17827 = chunk__17787;
var G__17828 = count__17788;
var G__17829 = (i__17789 + (1));
seq__17786 = G__17826;
chunk__17787 = G__17827;
count__17788 = G__17828;
i__17789 = G__17829;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__17786);
if(temp__6738__auto__){
var seq__17786__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17786__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__17786__$1);
var G__17830 = cljs.core.chunk_rest(seq__17786__$1);
var G__17831 = c__8671__auto__;
var G__17832 = cljs.core.count(c__8671__auto__);
var G__17833 = (0);
seq__17786 = G__17830;
chunk__17787 = G__17831;
count__17788 = G__17832;
i__17789 = G__17833;
continue;
} else {
var vec__17796 = cljs.core.first(seq__17786__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17796,(1),null);
var G__17799_17834 = e.style;
var G__17800_17835 = cljs.core.name(k);
var G__17801_17836 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__17799_17834,G__17800_17835,G__17801_17836);

var G__17837 = cljs.core.next(seq__17786__$1);
var G__17838 = null;
var G__17839 = (0);
var G__17840 = (0);
seq__17786 = G__17837;
chunk__17787 = G__17838;
count__17788 = G__17839;
i__17789 = G__17840;
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
}catch (e17802){if((e17802 instanceof Error)){
var _ = e17802;
return null;
} else {
throw e17802;

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
var G__17847__delegate = function (args){
var vec__17844 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17844,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17844,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__17847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17848__i = 0, G__17848__a = new Array(arguments.length -  0);
while (G__17848__i < G__17848__a.length) {G__17848__a[G__17848__i] = arguments[G__17848__i + 0]; ++G__17848__i;}
  args = new cljs.core.IndexedSeq(G__17848__a,0);
} 
return G__17847__delegate.call(this,args);};
G__17847.cljs$lang$maxFixedArity = 0;
G__17847.cljs$lang$applyTo = (function (arglist__17849){
var args = cljs.core.seq(arglist__17849);
return G__17847__delegate(args);
});
G__17847.cljs$core$IFn$_invoke$arity$variadic = G__17847__delegate;
return G__17847;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__17853__delegate = function (rest__17850_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__17850_SHARP_);
};
var G__17853 = function (var_args){
var rest__17850_SHARP_ = null;
if (arguments.length > 0) {
var G__17854__i = 0, G__17854__a = new Array(arguments.length -  0);
while (G__17854__i < G__17854__a.length) {G__17854__a[G__17854__i] = arguments[G__17854__i + 0]; ++G__17854__i;}
  rest__17850_SHARP_ = new cljs.core.IndexedSeq(G__17854__a,0);
} 
return G__17853__delegate.call(this,rest__17850_SHARP_);};
G__17853.cljs$lang$maxFixedArity = 0;
G__17853.cljs$lang$applyTo = (function (arglist__17855){
var rest__17850_SHARP_ = cljs.core.seq(arglist__17855);
return G__17853__delegate(rest__17850_SHARP_);
});
G__17853.cljs$core$IFn$_invoke$arity$variadic = G__17853__delegate;
return G__17853;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__17856__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e17852){if((e17852 instanceof Error)){
var _ = e17852;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e17852;

}
}};
var G__17856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17857__i = 0, G__17857__a = new Array(arguments.length -  0);
while (G__17857__i < G__17857__a.length) {G__17857__a[G__17857__i] = arguments[G__17857__i + 0]; ++G__17857__i;}
  args = new cljs.core.IndexedSeq(G__17857__a,0);
} 
return G__17856__delegate.call(this,args);};
G__17856.cljs$lang$maxFixedArity = 0;
G__17856.cljs$lang$applyTo = (function (arglist__17858){
var args = cljs.core.seq(arglist__17858);
return G__17856__delegate(args);
});
G__17856.cljs$core$IFn$_invoke$arity$variadic = G__17856__delegate;
return G__17856;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8988__auto__ = [];
var len__8981__auto___17860 = arguments.length;
var i__8982__auto___17861 = (0);
while(true){
if((i__8982__auto___17861 < len__8981__auto___17860)){
args__8988__auto__.push((arguments[i__8982__auto___17861]));

var G__17862 = (i__8982__auto___17861 + (1));
i__8982__auto___17861 = G__17862;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq17859){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17859));
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
hoplon.core.$text = (function hoplon$core$$text(p1__17863_SHARP_){
return document.createTextNode(p1__17863_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__17864_SHARP_){
return document.createComment(p1__17864_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__17867 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__17868 = (0);
return setTimeout(G__17867,G__17868);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__17869_SHARP_){
var e = p1__17869_SHARP_.target;
if(cljs.core.truth_((function (){var or__7760__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__17869_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__17870 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17870) : cljs.core.atom.call(null,G__17870));
})();
var prefer_table__8792__auto__ = (function (){var G__17871 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17871) : cljs.core.atom.call(null,G__17871));
})();
var method_cache__8793__auto__ = (function (){var G__17872 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17872) : cljs.core.atom.call(null,G__17872));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__17873 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17873) : cljs.core.atom.call(null,G__17873));
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
var G__17874 = elem;
var G__17875 = cljs.core.cst$kw$attr;
var G__17876 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__17874,G__17875,G__17876) : hoplon.core.do_BANG_.call(null,G__17874,G__17875,G__17876));
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
hoplon.core.on_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__17877 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17877) : cljs.core.atom.call(null,G__17877));
})();
var prefer_table__8792__auto__ = (function (){var G__17878 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17878) : cljs.core.atom.call(null,G__17878));
})();
var method_cache__8793__auto__ = (function (){var G__17879 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17879) : cljs.core.atom.call(null,G__17879));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__17880 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17880) : cljs.core.atom.call(null,G__17880));
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
var on_deck = (function (){var G__17895 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17895) : cljs.core.atom.call(null,G__17895));
})();
var items_seq = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__17896,G__17897){
return (G__17896.cljs$core$IFn$_invoke$arity$1 ? G__17896.cljs$core$IFn$_invoke$arity$1(G__17897) : G__17896.call(null,G__17897));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__17881_SHARP_){
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__17900,G__17899,G__17898){
return (G__17898.cljs$core$IFn$_invoke$arity$2 ? G__17898.cljs$core$IFn$_invoke$arity$2(G__17899,G__17900) : G__17898.call(null,G__17899,G__17900));
});})(on_deck,items_seq))
).call(null,p1__17881_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__17882_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__17882_SHARP_) : cljs.core.deref.call(null,p1__17882_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__17882_SHARP_,cljs.core.rest);

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
var seq__17901 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__17902 = null;
var count__17903 = (0);
var i__17904 = (0);
while(true){
if((i__17904 < count__17903)){
var i = chunk__17902.cljs$core$IIndexed$_nth$arity$2(null,i__17904);
var e_17907 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__17905 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__17905) : tpl.call(null,G__17905));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_17907);

var G__17908 = seq__17901;
var G__17909 = chunk__17902;
var G__17910 = count__17903;
var G__17911 = (i__17904 + (1));
seq__17901 = G__17908;
chunk__17902 = G__17909;
count__17903 = G__17910;
i__17904 = G__17911;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__17901);
if(temp__6738__auto__){
var seq__17901__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17901__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__17901__$1);
var G__17912 = cljs.core.chunk_rest(seq__17901__$1);
var G__17913 = c__8671__auto__;
var G__17914 = cljs.core.count(c__8671__auto__);
var G__17915 = (0);
seq__17901 = G__17912;
chunk__17902 = G__17913;
count__17903 = G__17914;
i__17904 = G__17915;
continue;
} else {
var i = cljs.core.first(seq__17901__$1);
var e_17916 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__17906 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__17906) : tpl.call(null,G__17906));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_17916);

var G__17917 = cljs.core.next(seq__17901__$1);
var G__17918 = null;
var G__17919 = (0);
var G__17920 = (0);
seq__17901 = G__17917;
chunk__17902 = G__17918;
count__17903 = G__17919;
i__17904 = G__17920;
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
var e_17921 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_17921);

var G__17922 = (_ + (1));
_ = G__17922;
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
var len__8981__auto___17933 = arguments.length;
var i__8982__auto___17934 = (0);
while(true){
if((i__8982__auto___17934 < len__8981__auto___17933)){
args__8988__auto__.push((arguments[i__8982__auto___17934]));

var G__17935 = (i__8982__auto___17934 + (1));
i__8982__auto___17934 = G__17935;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__17924){
var vec__17925 = p__17924;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17925,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__17925,default$){
return (function (G__17928,G__17930,G__17929){
var or__7760__auto__ = (function (){var and__7748__auto__ = (G__17928.cljs$core$IFn$_invoke$arity$1 ? G__17928.cljs$core$IFn$_invoke$arity$1(G__17929) : G__17928.call(null,G__17929));
if(cljs.core.truth_(and__7748__auto__)){
return G__17929;
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return G__17930;
}
});})(c,vec__17925,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__17925,default$){
return (function (){
var G__17931 = c;
var G__17932 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17931,G__17932) : cljs.core.reset_BANG_.call(null,G__17931,G__17932));
});})(_,c,vec__17925,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq17923){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17923));
});

