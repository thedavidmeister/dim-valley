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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18652_SHARP_,p2__18653_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18652_SHARP_,p2__18653_SHARP_.getAttribute("static-id"),p2__18653_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__18655 = arguments.length;
switch (G__18655) {
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
var G__18656_18659 = init;
var G__18657_18660 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18656_18659,G__18657_18660) : f.call(null,G__18656_18659,G__18657_18660));

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
var vec__18661 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__18662 = cljs.core.seq(vec__18661);
var first__18663 = cljs.core.first(seq__18662);
var seq__18662__$1 = cljs.core.next(seq__18662);
var f = first__18663;
var more = seq__18662__$1;
var vec__18664 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18664,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18664,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("c045413eaa8849a7a3ab5287f83fa82c")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__18667_SHARP_){
return cljs.core.zipmap(p1__18667_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var or__8240__auto__ = (function (){var and__8228__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8228__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8228__auto__;
}
})();
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var G__18668 = (i + (1));
var G__18669 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__18668;
ret = G__18669;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__18671 = arguments.length;
switch (G__18671) {
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

var G__18673 = (i + (1));
i = G__18673;
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
var x__8973__auto__ = (((this$ == null))?null:this$);
var m__8974__auto__ = (hoplon.core.node[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8974__auto__.call(null,this$));
} else {
var m__8974__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8974__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__18674_18677 = hoplon.core.node;
var G__18675_18678 = "string";
var G__18676_18679 = ((function (G__18674_18677,G__18675_18678){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__18674_18677,G__18675_18678))
;
goog.object.set(G__18674_18677,G__18675_18678,G__18676_18679);
goog.object.set(hoplon.core.INode,"number",true);

var G__18680_18684 = hoplon.core.node;
var G__18681_18685 = "number";
var G__18682_18686 = ((function (G__18680_18684,G__18681_18685){
return (function (this$){
var G__18683 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__18683) : hoplon.core.$text.call(null,G__18683));
});})(G__18680_18684,G__18681_18685))
;
goog.object.set(G__18680_18684,G__18681_18685,G__18682_18686);
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18689_SHARP_,p2__18688_SHARP_){
if((p2__18688_SHARP_ == null)){
return p1__18689_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__18689_SHARP_,p2__18688_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__18696 = new$__$1;
var vec__18698 = G__18696;
var seq__18699 = cljs.core.seq(vec__18698);
var first__18700 = cljs.core.first(seq__18699);
var seq__18699__$1 = cljs.core.next(seq__18699);
var x = first__18700;
var xs = seq__18699__$1;
var G__18697 = hoplon.core.child_vec(this$);
var vec__18701 = G__18697;
var seq__18702 = cljs.core.seq(vec__18701);
var first__18703 = cljs.core.first(seq__18702);
var seq__18702__$1 = cljs.core.next(seq__18702);
var k = first__18703;
var ks = seq__18702__$1;
var kids = vec__18701;
var G__18696__$1 = G__18696;
var G__18697__$1 = G__18697;
while(true){
var vec__18704 = G__18696__$1;
var seq__18705 = cljs.core.seq(vec__18704);
var first__18706 = cljs.core.first(seq__18705);
var seq__18705__$1 = cljs.core.next(seq__18705);
var x__$1 = first__18706;
var xs__$1 = seq__18705__$1;
var vec__18707 = G__18697__$1;
var seq__18708 = cljs.core.seq(vec__18707);
var first__18709 = cljs.core.first(seq__18708);
var seq__18708__$1 = cljs.core.next(seq__18708);
var k__$1 = first__18709;
var ks__$1 = seq__18708__$1;
var kids__$1 = vec__18707;
if(cljs.core.truth_((function (){var or__8240__auto__ = x__$1;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return k__$1;
}
})())){
var G__18710 = xs__$1;
var G__18711 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__18696__$1 = G__18710;
G__18697__$1 = G__18711;
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
var kids_18712 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_18712;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_18712,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_18715 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_18716 = cljs.core.count(cljs.core.deref(kids_18715));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_18715,i_18716,child__$1){
return (function (p1__18714_SHARP_,p2__18713_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18715,cljs.core.assoc,i_18716,p2__18713_SHARP_);
});})(kids_18715,i_18716,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18715,cljs.core.assoc,i_18716,child__$1);
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

if(cljs.core.truth_((function (){var and__8228__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8228__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8228__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8228__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8228__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8228__auto__;
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
return (function (p1__18717_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__18717_SHARP_));
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
return (function (p1__18718_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18718_SHARP_], 0)));
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
return (function (p1__18719_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__18719_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_18720 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_18721 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__18722 = (function (){var and__8228__auto__ = attr_18721;
if(cljs.core.truth_(and__8228__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_18721),kk_18720);
} else {
return and__8228__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__18722)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_18721,cljs.core.assoc,kk_18720,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__18723_SHARP_){
return p1__18723_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__18724_SHARP_){
return p1__18724_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__18725_SHARP_){
return p1__18725_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__18726_SHARP_){
return p1__18726_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8973__auto__ = (((this$ == null))?null:this$);
var m__8974__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8974__auto__.call(null,this$,kvs));
} else {
var m__8974__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8974__auto____$1.call(null,this$,kvs));
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
var x__8973__auto__ = (((this$ == null))?null:this$);
var m__8974__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8974__auto__.call(null,this$,kvs));
} else {
var m__8974__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8974__auto____$1.call(null,this$,kvs));
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
var x__8973__auto__ = (((this$ == null))?null:this$);
var m__8974__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8974__auto__.call(null,this$,child));
} else {
var m__8974__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8974__auto____$1.call(null,this$,child));
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
var x__8973__auto__ = (((this$ == null))?null:this$);
var m__8974__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8974__auto__.call(null,this$,child));
} else {
var m__8974__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8974__auto____$1.call(null,this$,child));
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
var x__8973__auto__ = (((this$ == null))?null:this$);
var m__8974__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8974__auto__.call(null,this$,new$,existing));
} else {
var m__8974__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8974__auto____$1.call(null,this$,new$,existing));
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
var x__8973__auto__ = (((this$ == null))?null:this$);
var m__8974__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8974__auto__.call(null,this$,new$,existing));
} else {
var m__8974__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8974__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__18732 = arguments.length;
switch (G__18732) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9540__auto__ = [];
var len__9517__auto___18734 = arguments.length;
var i__9518__auto___18735 = (0);
while(true){
if((i__9518__auto___18735 < len__9517__auto___18734)){
args_arr__9540__auto__.push((arguments[i__9518__auto___18735]));

var G__18736 = (i__9518__auto___18735 + (1));
i__9518__auto___18735 = G__18736;
continue;
} else {
}
break;
}

var argseq__9541__auto__ = (new cljs.core.IndexedSeq(args_arr__9540__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9541__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq18728){
var G__18729 = cljs.core.first(seq18728);
var seq18728__$1 = cljs.core.next(seq18728);
var G__18730 = cljs.core.first(seq18728__$1);
var seq18728__$2 = cljs.core.next(seq18728__$1);
var G__18731 = cljs.core.first(seq18728__$2);
var seq18728__$3 = cljs.core.next(seq18728__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18729,G__18730,G__18731,seq18728__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__18742 = arguments.length;
switch (G__18742) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9540__auto__ = [];
var len__9517__auto___18744 = arguments.length;
var i__9518__auto___18745 = (0);
while(true){
if((i__9518__auto___18745 < len__9517__auto___18744)){
args_arr__9540__auto__.push((arguments[i__9518__auto___18745]));

var G__18746 = (i__9518__auto___18745 + (1));
i__9518__auto___18745 = G__18746;
continue;
} else {
}
break;
}

var argseq__9541__auto__ = (new cljs.core.IndexedSeq(args_arr__9540__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9541__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq18738){
var G__18739 = cljs.core.first(seq18738);
var seq18738__$1 = cljs.core.next(seq18738);
var G__18740 = cljs.core.first(seq18738__$1);
var seq18738__$2 = cljs.core.next(seq18738__$1);
var G__18741 = cljs.core.first(seq18738__$2);
var seq18738__$3 = cljs.core.next(seq18738__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18739,G__18740,G__18741,seq18738__$3);
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
var opts18749_18767 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18749_18767){
return (function (ret__17745__auto__,p__18750){
var vec__18751 = p__18750;
var ___17746__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18751,(0),null);
var f__17747__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18751,(1),null);
var sym__17748__auto__ = (f__17747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17747__auto__.cljs$core$IFn$_invoke$arity$0() : f__17747__auto__.call(null));
var G__18754 = ret__17745__auto__;
if(cljs.core.truth_(sym__17748__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18754,sym__17748__auto__);
} else {
return G__18754;
}
});})(opts18749_18767))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18749_18767){
return (function (p1__17744__17749__auto__){
var G__18756 = cljs.core.first(p1__17744__17749__auto__);
var fexpr__18755 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18749_18767);
return (fexpr__18755.cljs$core$IFn$_invoke$arity$1 ? fexpr__18755.cljs$core$IFn$_invoke$arity$1(G__18756) : fexpr__18755.call(null,G__18756));
});})(opts18749_18767))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18749_18767){
return (function (){
var checked__17713__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/h23/ari3q5/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts18749_18767);
if(cljs.core.truth_(checked__17713__auto__)){
hoplon.core._do_BANG_ = checked__17713__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts18749_18767))
], null)))));

var opts18759 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18759){
return (function (ret__17745__auto__,p__18760){
var vec__18761 = p__18760;
var ___17746__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18761,(0),null);
var f__17747__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18761,(1),null);
var sym__17748__auto__ = (f__17747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17747__auto__.cljs$core$IFn$_invoke$arity$0() : f__17747__auto__.call(null));
var G__18764 = ret__17745__auto__;
if(cljs.core.truth_(sym__17748__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18764,sym__17748__auto__);
} else {
return G__18764;
}
});})(opts18759))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18759){
return (function (p1__17744__17749__auto__){
var G__18766 = cljs.core.first(p1__17744__17749__auto__);
var fexpr__18765 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18759);
return (fexpr__18765.cljs$core$IFn$_invoke$arity$1 ? fexpr__18765.cljs$core$IFn$_invoke$arity$1(G__18766) : fexpr__18765.call(null,G__18766));
});})(opts18759))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18759){
return (function (){
var checked__17713__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/h23/ari3q5/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts18759);
if(cljs.core.truth_(checked__17713__auto__)){
hoplon.core._on_BANG_ = checked__17713__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts18759))
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
var x__8973__auto__ = (((this$ == null))?null:this$);
var m__8974__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8974__auto__.call(null,this$,elem,value));
} else {
var m__8974__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8974__auto____$1.call(null,this$,elem,value));
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
return (function (p1__18770_SHARP_,p2__18769_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__18769_SHARP_);
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
var G__18772 = arguments.length;
switch (G__18772) {
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
var G__18774 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18775 = (0);
return setTimeout(G__18774,G__18775);
} else {
var temp__5288__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return v.push(f);
} else {
var G__18776_18794 = this$;
var G__18777_18795 = "_hoplonWhenDom";
var G__18778_18796 = [f];
goog.object.set(G__18776_18794,G__18777_18795,G__18778_18796);

var G__18779 = ((function (temp__5288__auto__){
return (function (){
var fexpr__18787 = ((function (temp__5288__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__18788 = ((function (temp__5288__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5288__auto__))
;
var G__18789 = (20);
return setTimeout(G__18788,G__18789);
} else {
var seq__18790_18797 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__18791_18798 = null;
var count__18792_18799 = (0);
var i__18793_18800 = (0);
while(true){
if((i__18793_18800 < count__18792_18799)){
var f_18801__$1 = chunk__18791_18798.cljs$core$IIndexed$_nth$arity$2(null,i__18793_18800);
(f_18801__$1.cljs$core$IFn$_invoke$arity$0 ? f_18801__$1.cljs$core$IFn$_invoke$arity$0() : f_18801__$1.call(null));

var G__18802 = seq__18790_18797;
var G__18803 = chunk__18791_18798;
var G__18804 = count__18792_18799;
var G__18805 = (i__18793_18800 + (1));
seq__18790_18797 = G__18802;
chunk__18791_18798 = G__18803;
count__18792_18799 = G__18804;
i__18793_18800 = G__18805;
continue;
} else {
var temp__5290__auto___18806 = cljs.core.seq(seq__18790_18797);
if(temp__5290__auto___18806){
var seq__18790_18807__$1 = temp__5290__auto___18806;
if(cljs.core.chunked_seq_QMARK_(seq__18790_18807__$1)){
var c__9171__auto___18808 = cljs.core.chunk_first(seq__18790_18807__$1);
var G__18809 = cljs.core.chunk_rest(seq__18790_18807__$1);
var G__18810 = c__9171__auto___18808;
var G__18811 = cljs.core.count(c__9171__auto___18808);
var G__18812 = (0);
seq__18790_18797 = G__18809;
chunk__18791_18798 = G__18810;
count__18792_18799 = G__18811;
i__18793_18800 = G__18812;
continue;
} else {
var f_18813__$1 = cljs.core.first(seq__18790_18807__$1);
(f_18813__$1.cljs$core$IFn$_invoke$arity$0 ? f_18813__$1.cljs$core$IFn$_invoke$arity$0() : f_18813__$1.call(null));

var G__18814 = cljs.core.next(seq__18790_18807__$1);
var G__18815 = null;
var G__18816 = (0);
var G__18817 = (0);
seq__18790_18797 = G__18814;
chunk__18791_18798 = G__18815;
count__18792_18799 = G__18816;
i__18793_18800 = G__18817;
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
return fexpr__18787();
});})(temp__5288__auto__))
;
var G__18780 = (0);
return setTimeout(G__18779,G__18780);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__18826 = args;
var vec__18827 = G__18826;
var seq__18828 = cljs.core.seq(vec__18827);
var first__18829 = cljs.core.first(seq__18828);
var seq__18828__$1 = cljs.core.next(seq__18828);
var arg = first__18829;
var args__$1 = seq__18828__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__18826__$1 = G__18826;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__18830 = G__18826__$1;
var seq__18831 = cljs.core.seq(vec__18830);
var first__18832 = cljs.core.first(seq__18831);
var seq__18831__$1 = cljs.core.next(seq__18831);
var arg__$1 = first__18832;
var args__$2 = seq__18831__$1;
if(cljs.core.not((function (){var or__8240__auto__ = arg__$1;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__18833 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__18826__$1,attr__$2,kids__$2,vec__18830,seq__18831,first__18832,seq__18831__$1,arg__$1,args__$2,attr,kids,G__18826,vec__18827,seq__18828,first__18829,seq__18828__$1,arg,args__$1){
return (function (p1__18818_SHARP_,p2__18819_SHARP_,p3__18820_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18818_SHARP_,p2__18819_SHARP_,p3__18820_SHARP_);
});})(attr__$1,kids__$1,G__18826__$1,attr__$2,kids__$2,vec__18830,seq__18831,first__18832,seq__18831__$1,arg__$1,args__$2,attr,kids,G__18826,vec__18827,seq__18828,first__18829,seq__18828__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__18834 = kids__$2;
var G__18835 = args__$2;
attr__$1 = G__18833;
kids__$1 = G__18834;
G__18826__$1 = G__18835;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__18836 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__18826__$1,attr__$2,kids__$2,vec__18830,seq__18831,first__18832,seq__18831__$1,arg__$1,args__$2,attr,kids,G__18826,vec__18827,seq__18828,first__18829,seq__18828__$1,arg,args__$1){
return (function (p1__18821_SHARP_,p2__18822_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18821_SHARP_,p2__18822_SHARP_,true);
});})(attr__$1,kids__$1,G__18826__$1,attr__$2,kids__$2,vec__18830,seq__18831,first__18832,seq__18831__$1,arg__$1,args__$2,attr,kids,G__18826,vec__18827,seq__18828,first__18829,seq__18828__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__18837 = kids__$2;
var G__18838 = args__$2;
attr__$1 = G__18836;
kids__$1 = G__18837;
G__18826__$1 = G__18838;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__18839 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__18840 = kids__$2;
var G__18841 = cljs.core.rest(args__$2);
attr__$1 = G__18839;
kids__$1 = G__18840;
G__18826__$1 = G__18841;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__18842 = attr__$2;
var G__18843 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18844 = args__$2;
attr__$1 = G__18842;
kids__$1 = G__18843;
G__18826__$1 = G__18844;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__18845 = attr__$2;
var G__18846 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18847 = args__$2;
attr__$1 = G__18845;
kids__$1 = G__18846;
G__18826__$1 = G__18847;
continue;
} else {
var G__18848 = attr__$2;
var G__18849 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__18850 = args__$2;
attr__$1 = G__18848;
kids__$1 = G__18849;
G__18826__$1 = G__18850;
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
return cljs.core.reduce_kv((function (p1__18852_SHARP_,p2__18851_SHARP_,p3__18853_SHARP_){
hoplon.core._attr_BANG_(p2__18851_SHARP_,p1__18852_SHARP_,p3__18853_SHARP_);

return p1__18852_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__18854){
var vec__18855 = p__18854;
var seq__18856 = cljs.core.seq(vec__18855);
var first__18857 = cljs.core.first(seq__18856);
var seq__18856__$1 = cljs.core.next(seq__18856);
var child_cell = first__18857;
var _ = seq__18856__$1;
var kids = vec__18855;
var this$__$1 = this$;
var seq__18858_18862 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__18859_18863 = null;
var count__18860_18864 = (0);
var i__18861_18865 = (0);
while(true){
if((i__18861_18865 < count__18860_18864)){
var x_18866 = chunk__18859_18863.cljs$core$IIndexed$_nth$arity$2(null,i__18861_18865);
var temp__5290__auto___18867 = hoplon.core.__GT_node(x_18866);
if(cljs.core.truth_(temp__5290__auto___18867)){
var x_18868__$1 = temp__5290__auto___18867;
hoplon.core.append_child_BANG_(this$__$1,x_18868__$1);
} else {
}

var G__18869 = seq__18858_18862;
var G__18870 = chunk__18859_18863;
var G__18871 = count__18860_18864;
var G__18872 = (i__18861_18865 + (1));
seq__18858_18862 = G__18869;
chunk__18859_18863 = G__18870;
count__18860_18864 = G__18871;
i__18861_18865 = G__18872;
continue;
} else {
var temp__5290__auto___18873 = cljs.core.seq(seq__18858_18862);
if(temp__5290__auto___18873){
var seq__18858_18874__$1 = temp__5290__auto___18873;
if(cljs.core.chunked_seq_QMARK_(seq__18858_18874__$1)){
var c__9171__auto___18875 = cljs.core.chunk_first(seq__18858_18874__$1);
var G__18876 = cljs.core.chunk_rest(seq__18858_18874__$1);
var G__18877 = c__9171__auto___18875;
var G__18878 = cljs.core.count(c__9171__auto___18875);
var G__18879 = (0);
seq__18858_18862 = G__18876;
chunk__18859_18863 = G__18877;
count__18860_18864 = G__18878;
i__18861_18865 = G__18879;
continue;
} else {
var x_18880 = cljs.core.first(seq__18858_18874__$1);
var temp__5290__auto___18881__$1 = hoplon.core.__GT_node(x_18880);
if(cljs.core.truth_(temp__5290__auto___18881__$1)){
var x_18882__$1 = temp__5290__auto___18881__$1;
hoplon.core.append_child_BANG_(this$__$1,x_18882__$1);
} else {
}

var G__18883 = cljs.core.next(seq__18858_18874__$1);
var G__18884 = null;
var G__18885 = (0);
var G__18886 = (0);
seq__18858_18862 = G__18883;
chunk__18859_18863 = G__18884;
count__18860_18864 = G__18885;
i__18861_18865 = G__18886;
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
var args__9524__auto__ = [];
var len__9517__auto___18893 = arguments.length;
var i__9518__auto___18894 = (0);
while(true){
if((i__9518__auto___18894 < len__9517__auto___18893)){
args__9524__auto__.push((arguments[i__9518__auto___18894]));

var G__18895 = (i__9518__auto___18894 + (1));
i__9518__auto___18894 = G__18895;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__18889 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18889,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18889,(1),null);
var G__18892 = this$;
hoplon.core.add_attributes_BANG_(G__18892,attr);

hoplon.core.add_children_BANG_(G__18892,kids);

return G__18892;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq18887){
var G__18888 = cljs.core.first(seq18887);
var seq18887__$1 = cljs.core.next(seq18887);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18888,seq18887__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__18897 = arguments.length;
switch (G__18897) {
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
var G__18898 = this$.children;
var G__18899 = k;
return goog.object.get(G__18898,G__18899);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8240__auto__ = hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$,k);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
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
var G__18930 = null;
var G__18930__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__18930__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__18930__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__18930__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__18930__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__18930__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__18930__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__18930__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__18930__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__18930__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__18930__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__18930__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__18930__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__18930__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__18930__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__18930__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__18930__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__18930__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__18930__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__18930__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__18930__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__18930__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__18930 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__18930__1.call(this,self__);
case 2:
return G__18930__2.call(this,self__,a);
case 3:
return G__18930__3.call(this,self__,a,b);
case 4:
return G__18930__4.call(this,self__,a,b,c);
case 5:
return G__18930__5.call(this,self__,a,b,c,d);
case 6:
return G__18930__6.call(this,self__,a,b,c,d,e);
case 7:
return G__18930__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__18930__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__18930__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__18930__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__18930__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__18930__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__18930__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__18930__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__18930__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__18930__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__18930__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__18930__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__18930__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__18930__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__18930__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__18930__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__18930.cljs$core$IFn$_invoke$arity$1 = G__18930__1;
G__18930.cljs$core$IFn$_invoke$arity$2 = G__18930__2;
G__18930.cljs$core$IFn$_invoke$arity$3 = G__18930__3;
G__18930.cljs$core$IFn$_invoke$arity$4 = G__18930__4;
G__18930.cljs$core$IFn$_invoke$arity$5 = G__18930__5;
G__18930.cljs$core$IFn$_invoke$arity$6 = G__18930__6;
G__18930.cljs$core$IFn$_invoke$arity$7 = G__18930__7;
G__18930.cljs$core$IFn$_invoke$arity$8 = G__18930__8;
G__18930.cljs$core$IFn$_invoke$arity$9 = G__18930__9;
G__18930.cljs$core$IFn$_invoke$arity$10 = G__18930__10;
G__18930.cljs$core$IFn$_invoke$arity$11 = G__18930__11;
G__18930.cljs$core$IFn$_invoke$arity$12 = G__18930__12;
G__18930.cljs$core$IFn$_invoke$arity$13 = G__18930__13;
G__18930.cljs$core$IFn$_invoke$arity$14 = G__18930__14;
G__18930.cljs$core$IFn$_invoke$arity$15 = G__18930__15;
G__18930.cljs$core$IFn$_invoke$arity$16 = G__18930__16;
G__18930.cljs$core$IFn$_invoke$arity$17 = G__18930__17;
G__18930.cljs$core$IFn$_invoke$arity$18 = G__18930__18;
G__18930.cljs$core$IFn$_invoke$arity$19 = G__18930__19;
G__18930.cljs$core$IFn$_invoke$arity$20 = G__18930__20;
G__18930.cljs$core$IFn$_invoke$arity$21 = G__18930__21;
G__18930.cljs$core$IFn$_invoke$arity$22 = G__18930__22;
return G__18930;
})()
;

Element.prototype.apply = (function (self__,args18901){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18901)));
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
var seq__18902 = cljs.core.seq(kvs);
var chunk__18904 = null;
var count__18905 = (0);
var i__18906 = (0);
while(true){
if((i__18906 < count__18905)){
var vec__18908 = chunk__18904.cljs$core$IIndexed$_nth$arity$2(null,i__18906);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(1),null);
var k_18931__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_18931__$1);
} else {
e.setAttribute(k_18931__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18931__$1:v));
}

var G__18932 = seq__18902;
var G__18933 = chunk__18904;
var G__18934 = count__18905;
var G__18935 = (i__18906 + (1));
seq__18902 = G__18932;
chunk__18904 = G__18933;
count__18905 = G__18934;
i__18906 = G__18935;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__18902);
if(temp__5290__auto__){
var seq__18902__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18902__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__18902__$1);
var G__18936 = cljs.core.chunk_rest(seq__18902__$1);
var G__18937 = c__9171__auto__;
var G__18938 = cljs.core.count(c__9171__auto__);
var G__18939 = (0);
seq__18902 = G__18936;
chunk__18904 = G__18937;
count__18905 = G__18938;
i__18906 = G__18939;
continue;
} else {
var vec__18911 = cljs.core.first(seq__18902__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18911,(1),null);
var k_18940__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_18940__$1);
} else {
e.setAttribute(k_18940__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18940__$1:v));
}

var G__18941 = cljs.core.next(seq__18902__$1);
var G__18942 = null;
var G__18943 = (0);
var G__18944 = (0);
seq__18902 = G__18941;
chunk__18904 = G__18942;
count__18905 = G__18943;
i__18906 = G__18944;
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
var seq__18914 = cljs.core.seq(kvs);
var chunk__18915 = null;
var count__18916 = (0);
var i__18917 = (0);
while(true){
if((i__18917 < count__18916)){
var vec__18918 = chunk__18915.cljs$core$IIndexed$_nth$arity$2(null,i__18917);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18918,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18918,(1),null);
var G__18921_18945 = e.style;
var G__18922_18946 = cljs.core.name(k);
var G__18923_18947 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18921_18945,G__18922_18946,G__18923_18947);

var G__18948 = seq__18914;
var G__18949 = chunk__18915;
var G__18950 = count__18916;
var G__18951 = (i__18917 + (1));
seq__18914 = G__18948;
chunk__18915 = G__18949;
count__18916 = G__18950;
i__18917 = G__18951;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__18914);
if(temp__5290__auto__){
var seq__18914__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18914__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__18914__$1);
var G__18952 = cljs.core.chunk_rest(seq__18914__$1);
var G__18953 = c__9171__auto__;
var G__18954 = cljs.core.count(c__9171__auto__);
var G__18955 = (0);
seq__18914 = G__18952;
chunk__18915 = G__18953;
count__18916 = G__18954;
i__18917 = G__18955;
continue;
} else {
var vec__18924 = cljs.core.first(seq__18914__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(1),null);
var G__18927_18956 = e.style;
var G__18928_18957 = cljs.core.name(k);
var G__18929_18958 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18927_18956,G__18928_18957,G__18929_18958);

var G__18959 = cljs.core.next(seq__18914__$1);
var G__18960 = null;
var G__18961 = (0);
var G__18962 = (0);
seq__18914 = G__18959;
chunk__18915 = G__18960;
count__18916 = G__18961;
i__18917 = G__18962;
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
var G__18966__delegate = function (args){
var vec__18963 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18963,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18963,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__18966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18967__i = 0, G__18967__a = new Array(arguments.length -  0);
while (G__18967__i < G__18967__a.length) {G__18967__a[G__18967__i] = arguments[G__18967__i + 0]; ++G__18967__i;}
  args = new cljs.core.IndexedSeq(G__18967__a,0,null);
} 
return G__18966__delegate.call(this,args);};
G__18966.cljs$lang$maxFixedArity = 0;
G__18966.cljs$lang$applyTo = (function (arglist__18968){
var args = cljs.core.seq(arglist__18968);
return G__18966__delegate(args);
});
G__18966.cljs$core$IFn$_invoke$arity$variadic = G__18966__delegate;
return G__18966;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__18972__delegate = function (args){
var vec__18969 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18969,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18969,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__18972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18973__i = 0, G__18973__a = new Array(arguments.length -  0);
while (G__18973__i < G__18973__a.length) {G__18973__a[G__18973__i] = arguments[G__18973__i + 0]; ++G__18973__i;}
  args = new cljs.core.IndexedSeq(G__18973__a,0,null);
} 
return G__18972__delegate.call(this,args);};
G__18972.cljs$lang$maxFixedArity = 0;
G__18972.cljs$lang$applyTo = (function (arglist__18974){
var args = cljs.core.seq(arglist__18974);
return G__18972__delegate(args);
});
G__18972.cljs$core$IFn$_invoke$arity$variadic = G__18972__delegate;
return G__18972;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9524__auto__ = [];
var len__9517__auto___18976 = arguments.length;
var i__9518__auto___18977 = (0);
while(true){
if((i__9518__auto___18977 < len__9517__auto___18976)){
args__9524__auto__.push((arguments[i__9518__auto___18977]));

var G__18978 = (i__9518__auto___18977 + (1));
i__9518__auto___18977 = G__18978;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.first(hoplon.core.parse_args(args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq18975){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18975));
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
hoplon.core.$text = (function hoplon$core$$text(p1__18979_SHARP_){
return document.createTextNode(p1__18979_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__18980_SHARP_){
return document.createComment(p1__18980_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__18981 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18982 = (0);
return setTimeout(G__18981,G__18982);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__18983_SHARP_){
var e = p1__18983_SHARP_.target;
if(cljs.core.truth_((function (){var or__8240__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__18983_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9293__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9294__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9295__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9296__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9297__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9293__auto__,prefer_table__9294__auto__,method_cache__9295__auto__,cached_hierarchy__9296__auto__,hierarchy__9297__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9293__auto__,prefer_table__9294__auto__,method_cache__9295__auto__,cached_hierarchy__9296__auto__,hierarchy__9297__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9297__auto__,method_table__9293__auto__,prefer_table__9294__auto__,method_cache__9295__auto__,cached_hierarchy__9296__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__18984 = elem;
var G__18985 = cljs.core.cst$kw$attr;
var G__18986 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__18984,G__18985,G__18986) : hoplon.core.do_BANG_.call(null,G__18984,G__18985,G__18986));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9293__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9294__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9295__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9296__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9297__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9293__auto__,prefer_table__9294__auto__,method_cache__9295__auto__,cached_hierarchy__9296__auto__,hierarchy__9297__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9293__auto__,prefer_table__9294__auto__,method_cache__9295__auto__,cached_hierarchy__9296__auto__,hierarchy__9297__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9297__auto__,method_table__9293__auto__,prefer_table__9294__auto__,method_cache__9295__auto__,cached_hierarchy__9296__auto__));
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
var items_seq = (function (){var fexpr__18991 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__18989,G__18990){
return (G__18989.cljs$core$IFn$_invoke$arity$1 ? G__18989.cljs$core$IFn$_invoke$arity$1(G__18990) : G__18989.call(null,G__18990));
});})(on_deck))
);
return (fexpr__18991.cljs$core$IFn$_invoke$arity$2 ? fexpr__18991.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__18991.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__18987_SHARP_){
var fexpr__18995 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__18993,G__18992,G__18994){
return (G__18992.cljs$core$IFn$_invoke$arity$3 ? G__18992.cljs$core$IFn$_invoke$arity$3(G__18993,G__18994,null) : G__18992.call(null,G__18993,G__18994,null));
});})(on_deck,items_seq))
);
return (fexpr__18995.cljs$core$IFn$_invoke$arity$3 ? fexpr__18995.cljs$core$IFn$_invoke$arity$3(items_seq,cljs.core.nth,p1__18987_SHARP_) : fexpr__18995.call(null,items_seq,cljs.core.nth,p1__18987_SHARP_));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__18988_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__18988_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__18988_SHARP_,cljs.core.rest);

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
var seq__18996 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__18997 = null;
var count__18998 = (0);
var i__18999 = (0);
while(true){
if((i__18999 < count__18998)){
var i = chunk__18997.cljs$core$IIndexed$_nth$arity$2(null,i__18999);
var e_19002 = (function (){var or__8240__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var G__19000 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19000) : tpl.call(null,G__19000));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19002);

var G__19003 = seq__18996;
var G__19004 = chunk__18997;
var G__19005 = count__18998;
var G__19006 = (i__18999 + (1));
seq__18996 = G__19003;
chunk__18997 = G__19004;
count__18998 = G__19005;
i__18999 = G__19006;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__18996);
if(temp__5290__auto__){
var seq__18996__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18996__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__18996__$1);
var G__19007 = cljs.core.chunk_rest(seq__18996__$1);
var G__19008 = c__9171__auto__;
var G__19009 = cljs.core.count(c__9171__auto__);
var G__19010 = (0);
seq__18996 = G__19007;
chunk__18997 = G__19008;
count__18998 = G__19009;
i__18999 = G__19010;
continue;
} else {
var i = cljs.core.first(seq__18996__$1);
var e_19011 = (function (){var or__8240__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var G__19001 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19001) : tpl.call(null,G__19001));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19011);

var G__19012 = cljs.core.next(seq__18996__$1);
var G__19013 = null;
var G__19014 = (0);
var G__19015 = (0);
seq__18996 = G__19012;
chunk__18997 = G__19013;
count__18998 = G__19014;
i__18999 = G__19015;
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
var n__9283__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9283__auto__)){
var e_19016 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19016);

var G__19017 = (_ + (1));
_ = G__19017;
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
var args__9524__auto__ = [];
var len__9517__auto___19027 = arguments.length;
var i__9518__auto___19028 = (0);
while(true){
if((i__9518__auto___19028 < len__9517__auto___19027)){
args__9524__auto__.push((arguments[i__9518__auto___19028]));

var G__19029 = (i__9518__auto___19028 + (1));
i__9518__auto___19028 = G__19029;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__19019){
var vec__19020 = p__19019;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19020,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__19026 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__19020,default$){
return (function (G__19023,G__19025,G__19024){
var or__8240__auto__ = (function (){var and__8228__auto__ = (G__19023.cljs$core$IFn$_invoke$arity$1 ? G__19023.cljs$core$IFn$_invoke$arity$1(G__19024) : G__19023.call(null,G__19024));
if(cljs.core.truth_(and__8228__auto__)){
return G__19024;
} else {
return and__8228__auto__;
}
})();
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return G__19025;
}
});})(c,vec__19020,default$))
);
return (fexpr__19026.cljs$core$IFn$_invoke$arity$3 ? fexpr__19026.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__19026.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__19020,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__19020,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq19018){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19018));
});

