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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20623_SHARP_,p2__20624_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20623_SHARP_,p2__20624_SHARP_.getAttribute("static-id"),p2__20624_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args20625 = [];
var len__8981__auto___20630 = arguments.length;
var i__8982__auto___20631 = (0);
while(true){
if((i__8982__auto___20631 < len__8981__auto___20630)){
args20625.push((arguments[i__8982__auto___20631]));

var G__20632 = (i__8982__auto___20631 + (1));
i__8982__auto___20631 = G__20632;
continue;
} else {
}
break;
}

var G__20627 = args20625.length;
switch (G__20627) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20625.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__20628_20634 = init;
var G__20629_20635 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20628_20634,G__20629_20635) : f.call(null,G__20628_20634,G__20629_20635));

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
var vec__20642 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__20643 = cljs.core.seq(vec__20642);
var first__20644 = cljs.core.first(seq__20643);
var seq__20643__$1 = cljs.core.next(seq__20643);
var f = first__20644;
var more = seq__20643__$1;
var vec__20645 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20645,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20645,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("493d338b03f14beba8e3821e649aaee0")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__20648_SHARP_){
return cljs.core.zipmap(p1__20648_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var G__20649 = (i + (1));
var G__20650 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__20649;
ret = G__20650;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args20651 = [];
var len__8981__auto___20654 = arguments.length;
var i__8982__auto___20655 = (0);
while(true){
if((i__8982__auto___20655 < len__8981__auto___20654)){
args20651.push((arguments[i__8982__auto___20655]));

var G__20656 = (i__8982__auto___20655 + (1));
i__8982__auto___20655 = G__20656;
continue;
} else {
}
break;
}

var G__20653 = args20651.length;
switch (G__20653) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20651.length)].join('')));

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

var G__20658 = (i + (1));
i = G__20658;
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
var G__20659 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__20659) : hoplon.core.$text.call(null,G__20659));
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20663_SHARP_,p2__20662_SHARP_){
if((p2__20662_SHARP_ == null)){
return p1__20663_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20663_SHARP_,p2__20662_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__20690 = new$__$1;
var vec__20692 = G__20690;
var seq__20693 = cljs.core.seq(vec__20692);
var first__20694 = cljs.core.first(seq__20693);
var seq__20693__$1 = cljs.core.next(seq__20693);
var x = first__20694;
var xs = seq__20693__$1;
var G__20691 = hoplon.core.child_vec(this$);
var vec__20695 = G__20691;
var seq__20696 = cljs.core.seq(vec__20695);
var first__20697 = cljs.core.first(seq__20696);
var seq__20696__$1 = cljs.core.next(seq__20696);
var k = first__20697;
var ks = seq__20696__$1;
var kids = vec__20695;
var G__20690__$1 = G__20690;
var G__20691__$1 = G__20691;
while(true){
var vec__20698 = G__20690__$1;
var seq__20699 = cljs.core.seq(vec__20698);
var first__20700 = cljs.core.first(seq__20699);
var seq__20699__$1 = cljs.core.next(seq__20699);
var x__$1 = first__20700;
var xs__$1 = seq__20699__$1;
var vec__20701 = G__20691__$1;
var seq__20702 = cljs.core.seq(vec__20701);
var first__20703 = cljs.core.first(seq__20702);
var seq__20702__$1 = cljs.core.next(seq__20702);
var k__$1 = first__20703;
var ks__$1 = seq__20702__$1;
var kids__$1 = vec__20701;
if(cljs.core.truth_((function (){var or__7760__auto__ = x__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return k__$1;
}
})())){
var G__20704 = xs__$1;
var G__20705 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__20690__$1 = G__20704;
G__20691__$1 = G__20705;
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
var kids_20708 = (function (){var G__20707 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20707) : cljs.core.atom.call(null,G__20707));
})();
this$__$1.hoplonKids = kids_20708;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_20708,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_20711 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_20712 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_20711) : cljs.core.deref.call(null,kids_20711)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_20711,i_20712,child__$1){
return (function (p1__20710_SHARP_,p2__20709_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_20711,cljs.core.assoc,i_20712,p2__20709_SHARP_);
});})(kids_20711,i_20712,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_20711,cljs.core.assoc,i_20712,child__$1);
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
return (function (p1__20713_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__20713_SHARP_));
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
return (function (p1__20714_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__20714_SHARP_], 0)));
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
return (function (p1__20715_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__20715_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_20716 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_20717 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__20718 = (function (){var and__7748__auto__ = attr_20717;
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_20717) : cljs.core.deref.call(null,attr_20717)),kk_20716);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__20718)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_20717,cljs.core.assoc,kk_20716,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__20719_SHARP_){
return p1__20719_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__20720_SHARP_){
return p1__20720_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__20721_SHARP_){
return p1__20721_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__20722_SHARP_){
return p1__20722_SHARP_.hoplonKids;
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
var args20723 = [];
var len__8981__auto___20730 = arguments.length;
var i__8982__auto___20731 = (0);
while(true){
if((i__8982__auto___20731 < len__8981__auto___20730)){
args20723.push((arguments[i__8982__auto___20731]));

var G__20732 = (i__8982__auto___20731 + (1));
i__8982__auto___20731 = G__20732;
continue;
} else {
}
break;
}

var G__20729 = args20723.length;
switch (G__20729) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args20723.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq20724){
var G__20725 = cljs.core.first(seq20724);
var seq20724__$1 = cljs.core.next(seq20724);
var G__20726 = cljs.core.first(seq20724__$1);
var seq20724__$2 = cljs.core.next(seq20724__$1);
var G__20727 = cljs.core.first(seq20724__$2);
var seq20724__$3 = cljs.core.next(seq20724__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20725,G__20726,G__20727,seq20724__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args20734 = [];
var len__8981__auto___20741 = arguments.length;
var i__8982__auto___20742 = (0);
while(true){
if((i__8982__auto___20742 < len__8981__auto___20741)){
args20734.push((arguments[i__8982__auto___20742]));

var G__20743 = (i__8982__auto___20742 + (1));
i__8982__auto___20742 = G__20743;
continue;
} else {
}
break;
}

var G__20740 = args20734.length;
switch (G__20740) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args20734.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq20735){
var G__20736 = cljs.core.first(seq20735);
var seq20735__$1 = cljs.core.next(seq20735);
var G__20737 = cljs.core.first(seq20735__$1);
var seq20735__$2 = cljs.core.next(seq20735__$1);
var G__20738 = cljs.core.first(seq20735__$2);
var seq20735__$3 = cljs.core.next(seq20735__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20736,G__20737,G__20738,seq20735__$3);
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
return (function (p1__20748_SHARP_,p2__20747_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__20747_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__20747_SHARP_));
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
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__20749_SHARP_){
return p1__20749_SHARP_.head;
}):(function (p1__20750_SHARP_){
return p1__20750_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__20751_SHARP_){
try{return cljs.core.vector_QMARK_(p1__20751_SHARP_);
}catch (e20752){if((e20752 instanceof Error)){
var _ = e20752;
return null;
} else {
throw e20752;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__20753_SHARP_){
try{return cljs.core.seq_QMARK_(p1__20753_SHARP_);
}catch (e20754){if((e20754 instanceof Error)){
var _ = e20754;
return null;
} else {
throw e20754;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args20755 = [];
var len__8981__auto___20759 = arguments.length;
var i__8982__auto___20760 = (0);
while(true){
if((i__8982__auto___20760 < len__8981__auto___20759)){
args20755.push((arguments[i__8982__auto___20760]));

var G__20761 = (i__8982__auto___20760 + (1));
i__8982__auto___20760 = G__20761;
continue;
} else {
}
break;
}

var G__20757 = args20755.length;
switch (G__20757) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20755.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e20758){if((e20758 instanceof Error)){
var _ = e20758;
return not_found;
} else {
throw e20758;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args20763 = [];
var len__8981__auto___20766 = arguments.length;
var i__8982__auto___20767 = (0);
while(true){
if((i__8982__auto___20767 < len__8981__auto___20766)){
args20763.push((arguments[i__8982__auto___20767]));

var G__20768 = (i__8982__auto___20767 + (1));
i__8982__auto___20767 = G__20768;
continue;
} else {
}
break;
}

var G__20765 = args20763.length;
switch (G__20765) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20763.length)].join('')));

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
var G__20789 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__20790 = (0);
return setTimeout(G__20789,G__20790);
} else {
var temp__6736__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return v.push(f);
} else {
var G__20791_20808 = this$;
var G__20792_20809 = "_hoplonWhenDom";
var G__20793_20810 = [f];
goog.object.set(G__20791_20808,G__20792_20809,G__20793_20810);

var G__20794 = ((function (temp__6736__auto__){
return (function (){
return ((function (temp__6736__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__20802 = ((function (temp__6736__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__6736__auto__))
;
var G__20803 = (20);
return setTimeout(G__20802,G__20803);
} else {
var seq__20804_20811 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__20805_20812 = null;
var count__20806_20813 = (0);
var i__20807_20814 = (0);
while(true){
if((i__20807_20814 < count__20806_20813)){
var f_20815__$1 = chunk__20805_20812.cljs$core$IIndexed$_nth$arity$2(null,i__20807_20814);
(f_20815__$1.cljs$core$IFn$_invoke$arity$0 ? f_20815__$1.cljs$core$IFn$_invoke$arity$0() : f_20815__$1.call(null));

var G__20816 = seq__20804_20811;
var G__20817 = chunk__20805_20812;
var G__20818 = count__20806_20813;
var G__20819 = (i__20807_20814 + (1));
seq__20804_20811 = G__20816;
chunk__20805_20812 = G__20817;
count__20806_20813 = G__20818;
i__20807_20814 = G__20819;
continue;
} else {
var temp__6738__auto___20820 = cljs.core.seq(seq__20804_20811);
if(temp__6738__auto___20820){
var seq__20804_20821__$1 = temp__6738__auto___20820;
if(cljs.core.chunked_seq_QMARK_(seq__20804_20821__$1)){
var c__8671__auto___20822 = cljs.core.chunk_first(seq__20804_20821__$1);
var G__20823 = cljs.core.chunk_rest(seq__20804_20821__$1);
var G__20824 = c__8671__auto___20822;
var G__20825 = cljs.core.count(c__8671__auto___20822);
var G__20826 = (0);
seq__20804_20811 = G__20823;
chunk__20805_20812 = G__20824;
count__20806_20813 = G__20825;
i__20807_20814 = G__20826;
continue;
} else {
var f_20827__$1 = cljs.core.first(seq__20804_20821__$1);
(f_20827__$1.cljs$core$IFn$_invoke$arity$0 ? f_20827__$1.cljs$core$IFn$_invoke$arity$0() : f_20827__$1.call(null));

var G__20828 = cljs.core.next(seq__20804_20821__$1);
var G__20829 = null;
var G__20830 = (0);
var G__20831 = (0);
seq__20804_20811 = G__20828;
chunk__20805_20812 = G__20829;
count__20806_20813 = G__20830;
i__20807_20814 = G__20831;
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
var G__20795 = (0);
return setTimeout(G__20794,G__20795);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__20848 = args;
var vec__20849 = G__20848;
var seq__20850 = cljs.core.seq(vec__20849);
var first__20851 = cljs.core.first(seq__20850);
var seq__20850__$1 = cljs.core.next(seq__20850);
var arg = first__20851;
var args__$1 = seq__20850__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__20848__$1 = G__20848;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__20852 = G__20848__$1;
var seq__20853 = cljs.core.seq(vec__20852);
var first__20854 = cljs.core.first(seq__20853);
var seq__20853__$1 = cljs.core.next(seq__20853);
var arg__$1 = first__20854;
var args__$2 = seq__20853__$1;
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
var G__20855 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__20848__$1,attr__$2,kids__$2,vec__20852,seq__20853,first__20854,seq__20853__$1,arg__$1,args__$2,attr,kids,G__20848,vec__20849,seq__20850,first__20851,seq__20850__$1,arg,args__$1){
return (function (p1__20832_SHARP_,p2__20833_SHARP_,p3__20834_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__20832_SHARP_,p2__20833_SHARP_,p3__20834_SHARP_);
});})(attr__$1,kids__$1,G__20848__$1,attr__$2,kids__$2,vec__20852,seq__20853,first__20854,seq__20853__$1,arg__$1,args__$2,attr,kids,G__20848,vec__20849,seq__20850,first__20851,seq__20850__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__20856 = kids__$2;
var G__20857 = args__$2;
attr__$1 = G__20855;
kids__$1 = G__20856;
G__20848__$1 = G__20857;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__20858 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__20859 = kids__$2;
var G__20860 = cljs.core.rest(args__$2);
attr__$1 = G__20858;
kids__$1 = G__20859;
G__20848__$1 = G__20860;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__20861 = attr__$2;
var G__20862 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__20863 = args__$2;
attr__$1 = G__20861;
kids__$1 = G__20862;
G__20848__$1 = G__20863;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__20864 = attr__$2;
var G__20865 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__20866 = args__$2;
attr__$1 = G__20864;
kids__$1 = G__20865;
G__20848__$1 = G__20866;
continue;
} else {
var G__20867 = attr__$2;
var G__20868 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__20869 = args__$2;
attr__$1 = G__20867;
kids__$1 = G__20868;
G__20848__$1 = G__20869;
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
return cljs.core.reduce_kv((function (p1__20871_SHARP_,p2__20870_SHARP_,p3__20872_SHARP_){
hoplon.core._attr_BANG_(p2__20870_SHARP_,p1__20871_SHARP_,p3__20872_SHARP_);

return p1__20871_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__20873){
var vec__20881 = p__20873;
var seq__20882 = cljs.core.seq(vec__20881);
var first__20883 = cljs.core.first(seq__20882);
var seq__20882__$1 = cljs.core.next(seq__20882);
var child_cell = first__20883;
var _ = seq__20882__$1;
var kids = vec__20881;
var this$__$1 = this$;
var seq__20884_20888 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__20885_20889 = null;
var count__20886_20890 = (0);
var i__20887_20891 = (0);
while(true){
if((i__20887_20891 < count__20886_20890)){
var x_20892 = chunk__20885_20889.cljs$core$IIndexed$_nth$arity$2(null,i__20887_20891);
var temp__6738__auto___20893 = hoplon.core.__GT_node(x_20892);
if(cljs.core.truth_(temp__6738__auto___20893)){
var x_20894__$1 = temp__6738__auto___20893;
hoplon.core.append_child_BANG_(this$__$1,x_20894__$1);
} else {
}

var G__20895 = seq__20884_20888;
var G__20896 = chunk__20885_20889;
var G__20897 = count__20886_20890;
var G__20898 = (i__20887_20891 + (1));
seq__20884_20888 = G__20895;
chunk__20885_20889 = G__20896;
count__20886_20890 = G__20897;
i__20887_20891 = G__20898;
continue;
} else {
var temp__6738__auto___20899 = cljs.core.seq(seq__20884_20888);
if(temp__6738__auto___20899){
var seq__20884_20900__$1 = temp__6738__auto___20899;
if(cljs.core.chunked_seq_QMARK_(seq__20884_20900__$1)){
var c__8671__auto___20901 = cljs.core.chunk_first(seq__20884_20900__$1);
var G__20902 = cljs.core.chunk_rest(seq__20884_20900__$1);
var G__20903 = c__8671__auto___20901;
var G__20904 = cljs.core.count(c__8671__auto___20901);
var G__20905 = (0);
seq__20884_20888 = G__20902;
chunk__20885_20889 = G__20903;
count__20886_20890 = G__20904;
i__20887_20891 = G__20905;
continue;
} else {
var x_20906 = cljs.core.first(seq__20884_20900__$1);
var temp__6738__auto___20907__$1 = hoplon.core.__GT_node(x_20906);
if(cljs.core.truth_(temp__6738__auto___20907__$1)){
var x_20908__$1 = temp__6738__auto___20907__$1;
hoplon.core.append_child_BANG_(this$__$1,x_20908__$1);
} else {
}

var G__20909 = cljs.core.next(seq__20884_20900__$1);
var G__20910 = null;
var G__20911 = (0);
var G__20912 = (0);
seq__20884_20888 = G__20909;
chunk__20885_20889 = G__20910;
count__20886_20890 = G__20911;
i__20887_20891 = G__20912;
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
var G__20951__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__20914 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20914,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20914,(1),null);
var G__20917 = this$;
hoplon.core.add_attributes_BANG_(G__20917,attr);

hoplon.core.add_children_BANG_(G__20917,kids);

return G__20917;
};
var G__20951 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__20952__i = 0, G__20952__a = new Array(arguments.length -  1);
while (G__20952__i < G__20952__a.length) {G__20952__a[G__20952__i] = arguments[G__20952__i + 1]; ++G__20952__i;}
  args = new cljs.core.IndexedSeq(G__20952__a,0);
} 
return G__20951__delegate.call(this,self__,args);};
G__20951.cljs$lang$maxFixedArity = 1;
G__20951.cljs$lang$applyTo = (function (arglist__20953){
var self__ = cljs.core.first(arglist__20953);
var args = cljs.core.rest(arglist__20953);
return G__20951__delegate(self__,args);
});
G__20951.cljs$core$IFn$_invoke$arity$variadic = G__20951__delegate;
return G__20951;
})()
;

Element.prototype.apply = (function (self__,args20913){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20913)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__20954__delegate = function (args){
var this$ = this;
var vec__20918 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20918,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20918,(1),null);
var G__20921 = this$;
hoplon.core.add_attributes_BANG_(G__20921,attr);

hoplon.core.add_children_BANG_(G__20921,kids);

return G__20921;
};
var G__20954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20955__i = 0, G__20955__a = new Array(arguments.length -  0);
while (G__20955__i < G__20955__a.length) {G__20955__a[G__20955__i] = arguments[G__20955__i + 0]; ++G__20955__i;}
  args = new cljs.core.IndexedSeq(G__20955__a,0);
} 
return G__20954__delegate.call(this,args);};
G__20954.cljs$lang$maxFixedArity = 0;
G__20954.cljs$lang$applyTo = (function (arglist__20956){
var args = cljs.core.seq(arglist__20956);
return G__20954__delegate(args);
});
G__20954.cljs$core$IFn$_invoke$arity$variadic = G__20954__delegate;
return G__20954;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__20922 = cljs.core.seq(kvs);
var chunk__20924 = null;
var count__20925 = (0);
var i__20926 = (0);
while(true){
if((i__20926 < count__20925)){
var vec__20928 = chunk__20924.cljs$core$IIndexed$_nth$arity$2(null,i__20926);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20928,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20928,(1),null);
var k_20957__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_20957__$1);
} else {
e.setAttribute(k_20957__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_20957__$1:v));
}

var G__20958 = seq__20922;
var G__20959 = chunk__20924;
var G__20960 = count__20925;
var G__20961 = (i__20926 + (1));
seq__20922 = G__20958;
chunk__20924 = G__20959;
count__20925 = G__20960;
i__20926 = G__20961;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__20922);
if(temp__6738__auto__){
var seq__20922__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20922__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__20922__$1);
var G__20962 = cljs.core.chunk_rest(seq__20922__$1);
var G__20963 = c__8671__auto__;
var G__20964 = cljs.core.count(c__8671__auto__);
var G__20965 = (0);
seq__20922 = G__20962;
chunk__20924 = G__20963;
count__20925 = G__20964;
i__20926 = G__20965;
continue;
} else {
var vec__20931 = cljs.core.first(seq__20922__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20931,(1),null);
var k_20966__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttribute(k_20966__$1);
} else {
e.setAttribute(k_20966__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_20966__$1:v));
}

var G__20967 = cljs.core.next(seq__20922__$1);
var G__20968 = null;
var G__20969 = (0);
var G__20970 = (0);
seq__20922 = G__20967;
chunk__20924 = G__20968;
count__20925 = G__20969;
i__20926 = G__20970;
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
var seq__20934 = cljs.core.seq(kvs);
var chunk__20935 = null;
var count__20936 = (0);
var i__20937 = (0);
while(true){
if((i__20937 < count__20936)){
var vec__20938 = chunk__20935.cljs$core$IIndexed$_nth$arity$2(null,i__20937);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20938,(1),null);
var G__20941_20971 = e.style;
var G__20942_20972 = cljs.core.name(k);
var G__20943_20973 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__20941_20971,G__20942_20972,G__20943_20973);

var G__20974 = seq__20934;
var G__20975 = chunk__20935;
var G__20976 = count__20936;
var G__20977 = (i__20937 + (1));
seq__20934 = G__20974;
chunk__20935 = G__20975;
count__20936 = G__20976;
i__20937 = G__20977;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__20934);
if(temp__6738__auto__){
var seq__20934__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20934__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__20934__$1);
var G__20978 = cljs.core.chunk_rest(seq__20934__$1);
var G__20979 = c__8671__auto__;
var G__20980 = cljs.core.count(c__8671__auto__);
var G__20981 = (0);
seq__20934 = G__20978;
chunk__20935 = G__20979;
count__20936 = G__20980;
i__20937 = G__20981;
continue;
} else {
var vec__20944 = cljs.core.first(seq__20934__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20944,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20944,(1),null);
var G__20947_20982 = e.style;
var G__20948_20983 = cljs.core.name(k);
var G__20949_20984 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__20947_20982,G__20948_20983,G__20949_20984);

var G__20985 = cljs.core.next(seq__20934__$1);
var G__20986 = null;
var G__20987 = (0);
var G__20988 = (0);
seq__20934 = G__20985;
chunk__20935 = G__20986;
count__20936 = G__20987;
i__20937 = G__20988;
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
}catch (e20950){if((e20950 instanceof Error)){
var _ = e20950;
return null;
} else {
throw e20950;

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
var G__20995__delegate = function (args){
var vec__20992 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20992,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20992,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__20995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20996__i = 0, G__20996__a = new Array(arguments.length -  0);
while (G__20996__i < G__20996__a.length) {G__20996__a[G__20996__i] = arguments[G__20996__i + 0]; ++G__20996__i;}
  args = new cljs.core.IndexedSeq(G__20996__a,0);
} 
return G__20995__delegate.call(this,args);};
G__20995.cljs$lang$maxFixedArity = 0;
G__20995.cljs$lang$applyTo = (function (arglist__20997){
var args = cljs.core.seq(arglist__20997);
return G__20995__delegate(args);
});
G__20995.cljs$core$IFn$_invoke$arity$variadic = G__20995__delegate;
return G__20995;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__21001__delegate = function (rest__20998_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__20998_SHARP_);
};
var G__21001 = function (var_args){
var rest__20998_SHARP_ = null;
if (arguments.length > 0) {
var G__21002__i = 0, G__21002__a = new Array(arguments.length -  0);
while (G__21002__i < G__21002__a.length) {G__21002__a[G__21002__i] = arguments[G__21002__i + 0]; ++G__21002__i;}
  rest__20998_SHARP_ = new cljs.core.IndexedSeq(G__21002__a,0);
} 
return G__21001__delegate.call(this,rest__20998_SHARP_);};
G__21001.cljs$lang$maxFixedArity = 0;
G__21001.cljs$lang$applyTo = (function (arglist__21003){
var rest__20998_SHARP_ = cljs.core.seq(arglist__21003);
return G__21001__delegate(rest__20998_SHARP_);
});
G__21001.cljs$core$IFn$_invoke$arity$variadic = G__21001__delegate;
return G__21001;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__21004__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e21000){if((e21000 instanceof Error)){
var _ = e21000;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e21000;

}
}};
var G__21004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21005__i = 0, G__21005__a = new Array(arguments.length -  0);
while (G__21005__i < G__21005__a.length) {G__21005__a[G__21005__i] = arguments[G__21005__i + 0]; ++G__21005__i;}
  args = new cljs.core.IndexedSeq(G__21005__a,0);
} 
return G__21004__delegate.call(this,args);};
G__21004.cljs$lang$maxFixedArity = 0;
G__21004.cljs$lang$applyTo = (function (arglist__21006){
var args = cljs.core.seq(arglist__21006);
return G__21004__delegate(args);
});
G__21004.cljs$core$IFn$_invoke$arity$variadic = G__21004__delegate;
return G__21004;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21008 = arguments.length;
var i__8982__auto___21009 = (0);
while(true){
if((i__8982__auto___21009 < len__8981__auto___21008)){
args__8988__auto__.push((arguments[i__8982__auto___21009]));

var G__21010 = (i__8982__auto___21009 + (1));
i__8982__auto___21009 = G__21010;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq21007){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21007));
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
hoplon.core.$text = (function hoplon$core$$text(p1__21011_SHARP_){
return document.createTextNode(p1__21011_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__21012_SHARP_){
return document.createComment(p1__21012_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__21015 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__21016 = (0);
return setTimeout(G__21015,G__21016);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__21017_SHARP_){
var e = p1__21017_SHARP_.target;
if(cljs.core.truth_((function (){var or__7760__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__21017_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__21018 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21018) : cljs.core.atom.call(null,G__21018));
})();
var prefer_table__8792__auto__ = (function (){var G__21019 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21019) : cljs.core.atom.call(null,G__21019));
})();
var method_cache__8793__auto__ = (function (){var G__21020 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21020) : cljs.core.atom.call(null,G__21020));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__21021 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21021) : cljs.core.atom.call(null,G__21021));
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
var G__21022 = elem;
var G__21023 = cljs.core.cst$kw$attr;
var G__21024 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21022,G__21023,G__21024) : hoplon.core.do_BANG_.call(null,G__21022,G__21023,G__21024));
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
hoplon.core.on_BANG_ = (function (){var method_table__8791__auto__ = (function (){var G__21025 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21025) : cljs.core.atom.call(null,G__21025));
})();
var prefer_table__8792__auto__ = (function (){var G__21026 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21026) : cljs.core.atom.call(null,G__21026));
})();
var method_cache__8793__auto__ = (function (){var G__21027 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21027) : cljs.core.atom.call(null,G__21027));
})();
var cached_hierarchy__8794__auto__ = (function (){var G__21028 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21028) : cljs.core.atom.call(null,G__21028));
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
var on_deck = (function (){var G__21043 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21043) : cljs.core.atom.call(null,G__21043));
})();
var items_seq = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__21044,G__21045){
return (G__21044.cljs$core$IFn$_invoke$arity$1 ? G__21044.cljs$core$IFn$_invoke$arity$1(G__21045) : G__21044.call(null,G__21045));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__21029_SHARP_){
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__21047,G__21048,G__21046){
return (G__21046.cljs$core$IFn$_invoke$arity$2 ? G__21046.cljs$core$IFn$_invoke$arity$2(G__21047,G__21048) : G__21046.call(null,G__21047,G__21048));
});})(on_deck,items_seq))
).call(null,items_seq,p1__21029_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__21030_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__21030_SHARP_) : cljs.core.deref.call(null,p1__21030_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__21030_SHARP_,cljs.core.rest);

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
var seq__21049 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__21050 = null;
var count__21051 = (0);
var i__21052 = (0);
while(true){
if((i__21052 < count__21051)){
var i = chunk__21050.cljs$core$IIndexed$_nth$arity$2(null,i__21052);
var e_21055 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__21053 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__21053) : tpl.call(null,G__21053));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_21055);

var G__21056 = seq__21049;
var G__21057 = chunk__21050;
var G__21058 = count__21051;
var G__21059 = (i__21052 + (1));
seq__21049 = G__21056;
chunk__21050 = G__21057;
count__21051 = G__21058;
i__21052 = G__21059;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21049);
if(temp__6738__auto__){
var seq__21049__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21049__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21049__$1);
var G__21060 = cljs.core.chunk_rest(seq__21049__$1);
var G__21061 = c__8671__auto__;
var G__21062 = cljs.core.count(c__8671__auto__);
var G__21063 = (0);
seq__21049 = G__21060;
chunk__21050 = G__21061;
count__21051 = G__21062;
i__21052 = G__21063;
continue;
} else {
var i = cljs.core.first(seq__21049__$1);
var e_21064 = (function (){var or__7760__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__21054 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__21054) : tpl.call(null,G__21054));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_21064);

var G__21065 = cljs.core.next(seq__21049__$1);
var G__21066 = null;
var G__21067 = (0);
var G__21068 = (0);
seq__21049 = G__21065;
chunk__21050 = G__21066;
count__21051 = G__21067;
i__21052 = G__21068;
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
var e_21069 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_21069);

var G__21070 = (_ + (1));
_ = G__21070;
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
var len__8981__auto___21081 = arguments.length;
var i__8982__auto___21082 = (0);
while(true){
if((i__8982__auto___21082 < len__8981__auto___21081)){
args__8988__auto__.push((arguments[i__8982__auto___21082]));

var G__21083 = (i__8982__auto___21082 + (1));
i__8982__auto___21082 = G__21083;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__21072){
var vec__21073 = p__21072;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21073,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__21073,default$){
return (function (G__21076,G__21078,G__21077){
var or__7760__auto__ = (function (){var and__7748__auto__ = (G__21076.cljs$core$IFn$_invoke$arity$1 ? G__21076.cljs$core$IFn$_invoke$arity$1(G__21077) : G__21076.call(null,G__21077));
if(cljs.core.truth_(and__7748__auto__)){
return G__21077;
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return G__21078;
}
});})(c,vec__21073,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__21073,default$){
return (function (){
var G__21079 = c;
var G__21080 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21079,G__21080) : cljs.core.reset_BANG_.call(null,G__21079,G__21080));
});})(_,c,vec__21073,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq21071){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21071));
});

