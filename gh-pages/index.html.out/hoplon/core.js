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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19816_SHARP_,p2__19817_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19816_SHARP_,p2__19817_SHARP_.getAttribute("static-id"),p2__19817_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__19819 = arguments.length;
switch (G__19819) {
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
var G__19820_19823 = init;
var G__19821_19824 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19820_19823,G__19821_19824) : f.call(null,G__19820_19823,G__19821_19824));

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
var vec__19825 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__19826 = cljs.core.seq(vec__19825);
var first__19827 = cljs.core.first(seq__19826);
var seq__19826__$1 = cljs.core.next(seq__19826);
var f = first__19827;
var more = seq__19826__$1;
var vec__19828 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19828,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19828,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("87ab45971d0d470f9dd02dfcc4bf2c79")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__19831_SHARP_){
return cljs.core.zipmap(p1__19831_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var or__8242__auto__ = (function (){var and__8230__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8230__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8230__auto__;
}
})();
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
var G__19832 = (i + (1));
var G__19833 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__19832;
ret = G__19833;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__19835 = arguments.length;
switch (G__19835) {
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

var G__19837 = (i + (1));
i = G__19837;
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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (hoplon.core.node[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8976__auto__.call(null,this$));
} else {
var m__8976__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8976__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__19838_19841 = hoplon.core.node;
var G__19839_19842 = "string";
var G__19840_19843 = ((function (G__19838_19841,G__19839_19842){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__19838_19841,G__19839_19842))
;
goog.object.set(G__19838_19841,G__19839_19842,G__19840_19843);
goog.object.set(hoplon.core.INode,"number",true);

var G__19844_19848 = hoplon.core.node;
var G__19845_19849 = "number";
var G__19846_19850 = ((function (G__19844_19848,G__19845_19849){
return (function (this$){
var G__19847 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__19847) : hoplon.core.$text.call(null,G__19847));
});})(G__19844_19848,G__19845_19849))
;
goog.object.set(G__19844_19848,G__19845_19849,G__19846_19850);
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19853_SHARP_,p2__19852_SHARP_){
if((p2__19852_SHARP_ == null)){
return p1__19853_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19853_SHARP_,p2__19852_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__19860 = new$__$1;
var vec__19862 = G__19860;
var seq__19863 = cljs.core.seq(vec__19862);
var first__19864 = cljs.core.first(seq__19863);
var seq__19863__$1 = cljs.core.next(seq__19863);
var x = first__19864;
var xs = seq__19863__$1;
var G__19861 = hoplon.core.child_vec(this$);
var vec__19865 = G__19861;
var seq__19866 = cljs.core.seq(vec__19865);
var first__19867 = cljs.core.first(seq__19866);
var seq__19866__$1 = cljs.core.next(seq__19866);
var k = first__19867;
var ks = seq__19866__$1;
var kids = vec__19865;
var G__19860__$1 = G__19860;
var G__19861__$1 = G__19861;
while(true){
var vec__19868 = G__19860__$1;
var seq__19869 = cljs.core.seq(vec__19868);
var first__19870 = cljs.core.first(seq__19869);
var seq__19869__$1 = cljs.core.next(seq__19869);
var x__$1 = first__19870;
var xs__$1 = seq__19869__$1;
var vec__19871 = G__19861__$1;
var seq__19872 = cljs.core.seq(vec__19871);
var first__19873 = cljs.core.first(seq__19872);
var seq__19872__$1 = cljs.core.next(seq__19872);
var k__$1 = first__19873;
var ks__$1 = seq__19872__$1;
var kids__$1 = vec__19871;
if(cljs.core.truth_((function (){var or__8242__auto__ = x__$1;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return k__$1;
}
})())){
var G__19874 = xs__$1;
var G__19875 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__19860__$1 = G__19874;
G__19861__$1 = G__19875;
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
var kids_19876 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_19876;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_19876,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_19879 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_19880 = cljs.core.count(cljs.core.deref(kids_19879));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_19879,i_19880,child__$1){
return (function (p1__19878_SHARP_,p2__19877_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19879,cljs.core.assoc,i_19880,p2__19877_SHARP_);
});})(kids_19879,i_19880,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19879,cljs.core.assoc,i_19880,child__$1);
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

if(cljs.core.truth_((function (){var and__8230__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8230__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8230__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8230__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8230__auto__;
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
return (function (p1__19881_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__19881_SHARP_));
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
return (function (p1__19882_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__19882_SHARP_], 0)));
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
return (function (p1__19883_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__19883_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_19884 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_19885 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__19886 = (function (){var and__8230__auto__ = attr_19885;
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_19885),kk_19884);
} else {
return and__8230__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__19886)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_19885,cljs.core.assoc,kk_19884,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__19887_SHARP_){
return p1__19887_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__19888_SHARP_){
return p1__19888_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__19889_SHARP_){
return p1__19889_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__19890_SHARP_){
return p1__19890_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8976__auto__.call(null,this$,kvs));
} else {
var m__8976__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8976__auto____$1.call(null,this$,kvs));
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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8976__auto__.call(null,this$,kvs));
} else {
var m__8976__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8976__auto____$1.call(null,this$,kvs));
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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8976__auto__.call(null,this$,child));
} else {
var m__8976__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8976__auto____$1.call(null,this$,child));
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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8976__auto__.call(null,this$,child));
} else {
var m__8976__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8976__auto____$1.call(null,this$,child));
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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8976__auto__.call(null,this$,new$,existing));
} else {
var m__8976__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8976__auto____$1.call(null,this$,new$,existing));
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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8976__auto__.call(null,this$,new$,existing));
} else {
var m__8976__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8976__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__19896 = arguments.length;
switch (G__19896) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19898 = arguments.length;
var i__9520__auto___19899 = (0);
while(true){
if((i__9520__auto___19899 < len__9519__auto___19898)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19899]));

var G__19900 = (i__9520__auto___19899 + (1));
i__9520__auto___19899 = G__19900;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9543__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19892){
var G__19893 = cljs.core.first(seq19892);
var seq19892__$1 = cljs.core.next(seq19892);
var G__19894 = cljs.core.first(seq19892__$1);
var seq19892__$2 = cljs.core.next(seq19892__$1);
var G__19895 = cljs.core.first(seq19892__$2);
var seq19892__$3 = cljs.core.next(seq19892__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19893,G__19894,G__19895,seq19892__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__19906 = arguments.length;
switch (G__19906) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19908 = arguments.length;
var i__9520__auto___19909 = (0);
while(true){
if((i__9520__auto___19909 < len__9519__auto___19908)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19909]));

var G__19910 = (i__9520__auto___19909 + (1));
i__9520__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9543__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq19902){
var G__19903 = cljs.core.first(seq19902);
var seq19902__$1 = cljs.core.next(seq19902);
var G__19904 = cljs.core.first(seq19902__$1);
var seq19902__$2 = cljs.core.next(seq19902__$1);
var G__19905 = cljs.core.first(seq19902__$2);
var seq19902__$3 = cljs.core.next(seq19902__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19903,G__19904,G__19905,seq19902__$3);
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
var opts19913_19931 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19913_19931){
return (function (ret__18909__auto__,p__19914){
var vec__19915 = p__19914;
var ___18910__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19915,(0),null);
var f__18911__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19915,(1),null);
var sym__18912__auto__ = (f__18911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18911__auto__.cljs$core$IFn$_invoke$arity$0() : f__18911__auto__.call(null));
var G__19918 = ret__18909__auto__;
if(cljs.core.truth_(sym__18912__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19918,sym__18912__auto__);
} else {
return G__19918;
}
});})(opts19913_19931))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19913_19931){
return (function (p1__18908__18913__auto__){
var G__19920 = cljs.core.first(p1__18908__18913__auto__);
var fexpr__19919 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19913_19931);
return (fexpr__19919.cljs$core$IFn$_invoke$arity$1 ? fexpr__19919.cljs$core$IFn$_invoke$arity$1(G__19920) : fexpr__19919.call(null,G__19920));
});})(opts19913_19931))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19913_19931){
return (function (){
var checked__18877__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts19913_19931);
if(cljs.core.truth_(checked__18877__auto__)){
hoplon.core._do_BANG_ = checked__18877__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts19913_19931))
], null)))));

var opts19923 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19923){
return (function (ret__18909__auto__,p__19924){
var vec__19925 = p__19924;
var ___18910__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19925,(0),null);
var f__18911__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19925,(1),null);
var sym__18912__auto__ = (f__18911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18911__auto__.cljs$core$IFn$_invoke$arity$0() : f__18911__auto__.call(null));
var G__19928 = ret__18909__auto__;
if(cljs.core.truth_(sym__18912__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19928,sym__18912__auto__);
} else {
return G__19928;
}
});})(opts19923))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19923){
return (function (p1__18908__18913__auto__){
var G__19930 = cljs.core.first(p1__18908__18913__auto__);
var fexpr__19929 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19923);
return (fexpr__19929.cljs$core$IFn$_invoke$arity$1 ? fexpr__19929.cljs$core$IFn$_invoke$arity$1(G__19930) : fexpr__19929.call(null,G__19930));
});})(opts19923))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19923){
return (function (){
var checked__18877__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts19923);
if(cljs.core.truth_(checked__18877__auto__)){
hoplon.core._on_BANG_ = checked__18877__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts19923))
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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8976__auto__.call(null,this$,elem,value));
} else {
var m__8976__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8976__auto____$1.call(null,this$,elem,value));
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
return (function (p1__19934_SHARP_,p2__19933_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__19933_SHARP_);
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
var G__19936 = arguments.length;
switch (G__19936) {
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
var G__19938 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19939 = (0);
return setTimeout(G__19938,G__19939);
} else {
var temp__5288__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return v.push(f);
} else {
var G__19940_19958 = this$;
var G__19941_19959 = "_hoplonWhenDom";
var G__19942_19960 = [f];
goog.object.set(G__19940_19958,G__19941_19959,G__19942_19960);

var G__19943 = ((function (temp__5288__auto__){
return (function (){
var fexpr__19951 = ((function (temp__5288__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__19952 = ((function (temp__5288__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5288__auto__))
;
var G__19953 = (20);
return setTimeout(G__19952,G__19953);
} else {
var seq__19954_19961 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__19955_19962 = null;
var count__19956_19963 = (0);
var i__19957_19964 = (0);
while(true){
if((i__19957_19964 < count__19956_19963)){
var f_19965__$1 = chunk__19955_19962.cljs$core$IIndexed$_nth$arity$2(null,i__19957_19964);
(f_19965__$1.cljs$core$IFn$_invoke$arity$0 ? f_19965__$1.cljs$core$IFn$_invoke$arity$0() : f_19965__$1.call(null));

var G__19966 = seq__19954_19961;
var G__19967 = chunk__19955_19962;
var G__19968 = count__19956_19963;
var G__19969 = (i__19957_19964 + (1));
seq__19954_19961 = G__19966;
chunk__19955_19962 = G__19967;
count__19956_19963 = G__19968;
i__19957_19964 = G__19969;
continue;
} else {
var temp__5290__auto___19970 = cljs.core.seq(seq__19954_19961);
if(temp__5290__auto___19970){
var seq__19954_19971__$1 = temp__5290__auto___19970;
if(cljs.core.chunked_seq_QMARK_(seq__19954_19971__$1)){
var c__9173__auto___19972 = cljs.core.chunk_first(seq__19954_19971__$1);
var G__19973 = cljs.core.chunk_rest(seq__19954_19971__$1);
var G__19974 = c__9173__auto___19972;
var G__19975 = cljs.core.count(c__9173__auto___19972);
var G__19976 = (0);
seq__19954_19961 = G__19973;
chunk__19955_19962 = G__19974;
count__19956_19963 = G__19975;
i__19957_19964 = G__19976;
continue;
} else {
var f_19977__$1 = cljs.core.first(seq__19954_19971__$1);
(f_19977__$1.cljs$core$IFn$_invoke$arity$0 ? f_19977__$1.cljs$core$IFn$_invoke$arity$0() : f_19977__$1.call(null));

var G__19978 = cljs.core.next(seq__19954_19971__$1);
var G__19979 = null;
var G__19980 = (0);
var G__19981 = (0);
seq__19954_19961 = G__19978;
chunk__19955_19962 = G__19979;
count__19956_19963 = G__19980;
i__19957_19964 = G__19981;
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
return fexpr__19951();
});})(temp__5288__auto__))
;
var G__19944 = (0);
return setTimeout(G__19943,G__19944);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__19990 = args;
var vec__19991 = G__19990;
var seq__19992 = cljs.core.seq(vec__19991);
var first__19993 = cljs.core.first(seq__19992);
var seq__19992__$1 = cljs.core.next(seq__19992);
var arg = first__19993;
var args__$1 = seq__19992__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__19990__$1 = G__19990;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__19994 = G__19990__$1;
var seq__19995 = cljs.core.seq(vec__19994);
var first__19996 = cljs.core.first(seq__19995);
var seq__19995__$1 = cljs.core.next(seq__19995);
var arg__$1 = first__19996;
var args__$2 = seq__19995__$1;
if(cljs.core.not((function (){var or__8242__auto__ = arg__$1;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__19997 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__19990__$1,attr__$2,kids__$2,vec__19994,seq__19995,first__19996,seq__19995__$1,arg__$1,args__$2,attr,kids,G__19990,vec__19991,seq__19992,first__19993,seq__19992__$1,arg,args__$1){
return (function (p1__19982_SHARP_,p2__19983_SHARP_,p3__19984_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19982_SHARP_,p2__19983_SHARP_,p3__19984_SHARP_);
});})(attr__$1,kids__$1,G__19990__$1,attr__$2,kids__$2,vec__19994,seq__19995,first__19996,seq__19995__$1,arg__$1,args__$2,attr,kids,G__19990,vec__19991,seq__19992,first__19993,seq__19992__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19998 = kids__$2;
var G__19999 = args__$2;
attr__$1 = G__19997;
kids__$1 = G__19998;
G__19990__$1 = G__19999;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__20000 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__19990__$1,attr__$2,kids__$2,vec__19994,seq__19995,first__19996,seq__19995__$1,arg__$1,args__$2,attr,kids,G__19990,vec__19991,seq__19992,first__19993,seq__19992__$1,arg,args__$1){
return (function (p1__19985_SHARP_,p2__19986_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19985_SHARP_,p2__19986_SHARP_,true);
});})(attr__$1,kids__$1,G__19990__$1,attr__$2,kids__$2,vec__19994,seq__19995,first__19996,seq__19995__$1,arg__$1,args__$2,attr,kids,G__19990,vec__19991,seq__19992,first__19993,seq__19992__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__20001 = kids__$2;
var G__20002 = args__$2;
attr__$1 = G__20000;
kids__$1 = G__20001;
G__19990__$1 = G__20002;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__20003 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__20004 = kids__$2;
var G__20005 = cljs.core.rest(args__$2);
attr__$1 = G__20003;
kids__$1 = G__20004;
G__19990__$1 = G__20005;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__20006 = attr__$2;
var G__20007 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__20008 = args__$2;
attr__$1 = G__20006;
kids__$1 = G__20007;
G__19990__$1 = G__20008;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__20009 = attr__$2;
var G__20010 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__20011 = args__$2;
attr__$1 = G__20009;
kids__$1 = G__20010;
G__19990__$1 = G__20011;
continue;
} else {
var G__20012 = attr__$2;
var G__20013 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__20014 = args__$2;
attr__$1 = G__20012;
kids__$1 = G__20013;
G__19990__$1 = G__20014;
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
return cljs.core.reduce_kv((function (p1__20016_SHARP_,p2__20015_SHARP_,p3__20017_SHARP_){
hoplon.core._attr_BANG_(p2__20015_SHARP_,p1__20016_SHARP_,p3__20017_SHARP_);

return p1__20016_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__20018){
var vec__20019 = p__20018;
var seq__20020 = cljs.core.seq(vec__20019);
var first__20021 = cljs.core.first(seq__20020);
var seq__20020__$1 = cljs.core.next(seq__20020);
var child_cell = first__20021;
var _ = seq__20020__$1;
var kids = vec__20019;
var this$__$1 = this$;
var seq__20022_20026 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__20023_20027 = null;
var count__20024_20028 = (0);
var i__20025_20029 = (0);
while(true){
if((i__20025_20029 < count__20024_20028)){
var x_20030 = chunk__20023_20027.cljs$core$IIndexed$_nth$arity$2(null,i__20025_20029);
var temp__5290__auto___20031 = hoplon.core.__GT_node(x_20030);
if(cljs.core.truth_(temp__5290__auto___20031)){
var x_20032__$1 = temp__5290__auto___20031;
hoplon.core.append_child_BANG_(this$__$1,x_20032__$1);
} else {
}

var G__20033 = seq__20022_20026;
var G__20034 = chunk__20023_20027;
var G__20035 = count__20024_20028;
var G__20036 = (i__20025_20029 + (1));
seq__20022_20026 = G__20033;
chunk__20023_20027 = G__20034;
count__20024_20028 = G__20035;
i__20025_20029 = G__20036;
continue;
} else {
var temp__5290__auto___20037 = cljs.core.seq(seq__20022_20026);
if(temp__5290__auto___20037){
var seq__20022_20038__$1 = temp__5290__auto___20037;
if(cljs.core.chunked_seq_QMARK_(seq__20022_20038__$1)){
var c__9173__auto___20039 = cljs.core.chunk_first(seq__20022_20038__$1);
var G__20040 = cljs.core.chunk_rest(seq__20022_20038__$1);
var G__20041 = c__9173__auto___20039;
var G__20042 = cljs.core.count(c__9173__auto___20039);
var G__20043 = (0);
seq__20022_20026 = G__20040;
chunk__20023_20027 = G__20041;
count__20024_20028 = G__20042;
i__20025_20029 = G__20043;
continue;
} else {
var x_20044 = cljs.core.first(seq__20022_20038__$1);
var temp__5290__auto___20045__$1 = hoplon.core.__GT_node(x_20044);
if(cljs.core.truth_(temp__5290__auto___20045__$1)){
var x_20046__$1 = temp__5290__auto___20045__$1;
hoplon.core.append_child_BANG_(this$__$1,x_20046__$1);
} else {
}

var G__20047 = cljs.core.next(seq__20022_20038__$1);
var G__20048 = null;
var G__20049 = (0);
var G__20050 = (0);
seq__20022_20026 = G__20047;
chunk__20023_20027 = G__20048;
count__20024_20028 = G__20049;
i__20025_20029 = G__20050;
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
var args__9526__auto__ = [];
var len__9519__auto___20057 = arguments.length;
var i__9520__auto___20058 = (0);
while(true){
if((i__9520__auto___20058 < len__9519__auto___20057)){
args__9526__auto__.push((arguments[i__9520__auto___20058]));

var G__20059 = (i__9520__auto___20058 + (1));
i__9520__auto___20058 = G__20059;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__20053 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053,(1),null);
var G__20056 = this$;
hoplon.core.add_attributes_BANG_(G__20056,attr);

hoplon.core.add_children_BANG_(G__20056,kids);

return G__20056;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq20051){
var G__20052 = cljs.core.first(seq20051);
var seq20051__$1 = cljs.core.next(seq20051);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20052,seq20051__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__20061 = arguments.length;
switch (G__20061) {
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
var G__20062 = this$.children;
var G__20063 = k;
return goog.object.get(G__20062,G__20063);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8242__auto__ = hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$,k);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
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
var G__20094 = null;
var G__20094__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__20094__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__20094__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__20094__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__20094__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__20094__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__20094__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__20094__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__20094__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__20094__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__20094__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__20094__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__20094__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__20094__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__20094__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__20094__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__20094__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__20094__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__20094__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__20094__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__20094__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__20094__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__20094 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__20094__1.call(this,self__);
case 2:
return G__20094__2.call(this,self__,a);
case 3:
return G__20094__3.call(this,self__,a,b);
case 4:
return G__20094__4.call(this,self__,a,b,c);
case 5:
return G__20094__5.call(this,self__,a,b,c,d);
case 6:
return G__20094__6.call(this,self__,a,b,c,d,e);
case 7:
return G__20094__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__20094__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__20094__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__20094__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__20094__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__20094__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__20094__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__20094__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__20094__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__20094__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__20094__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__20094__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__20094__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__20094__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__20094__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__20094__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20094.cljs$core$IFn$_invoke$arity$1 = G__20094__1;
G__20094.cljs$core$IFn$_invoke$arity$2 = G__20094__2;
G__20094.cljs$core$IFn$_invoke$arity$3 = G__20094__3;
G__20094.cljs$core$IFn$_invoke$arity$4 = G__20094__4;
G__20094.cljs$core$IFn$_invoke$arity$5 = G__20094__5;
G__20094.cljs$core$IFn$_invoke$arity$6 = G__20094__6;
G__20094.cljs$core$IFn$_invoke$arity$7 = G__20094__7;
G__20094.cljs$core$IFn$_invoke$arity$8 = G__20094__8;
G__20094.cljs$core$IFn$_invoke$arity$9 = G__20094__9;
G__20094.cljs$core$IFn$_invoke$arity$10 = G__20094__10;
G__20094.cljs$core$IFn$_invoke$arity$11 = G__20094__11;
G__20094.cljs$core$IFn$_invoke$arity$12 = G__20094__12;
G__20094.cljs$core$IFn$_invoke$arity$13 = G__20094__13;
G__20094.cljs$core$IFn$_invoke$arity$14 = G__20094__14;
G__20094.cljs$core$IFn$_invoke$arity$15 = G__20094__15;
G__20094.cljs$core$IFn$_invoke$arity$16 = G__20094__16;
G__20094.cljs$core$IFn$_invoke$arity$17 = G__20094__17;
G__20094.cljs$core$IFn$_invoke$arity$18 = G__20094__18;
G__20094.cljs$core$IFn$_invoke$arity$19 = G__20094__19;
G__20094.cljs$core$IFn$_invoke$arity$20 = G__20094__20;
G__20094.cljs$core$IFn$_invoke$arity$21 = G__20094__21;
G__20094.cljs$core$IFn$_invoke$arity$22 = G__20094__22;
return G__20094;
})()
;

Element.prototype.apply = (function (self__,args20065){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20065)));
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
var seq__20066 = cljs.core.seq(kvs);
var chunk__20068 = null;
var count__20069 = (0);
var i__20070 = (0);
while(true){
if((i__20070 < count__20069)){
var vec__20072 = chunk__20068.cljs$core$IIndexed$_nth$arity$2(null,i__20070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20072,(1),null);
var k_20095__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_20095__$1);
} else {
e.setAttribute(k_20095__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_20095__$1:v));
}

var G__20096 = seq__20066;
var G__20097 = chunk__20068;
var G__20098 = count__20069;
var G__20099 = (i__20070 + (1));
seq__20066 = G__20096;
chunk__20068 = G__20097;
count__20069 = G__20098;
i__20070 = G__20099;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__20066);
if(temp__5290__auto__){
var seq__20066__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20066__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__20066__$1);
var G__20100 = cljs.core.chunk_rest(seq__20066__$1);
var G__20101 = c__9173__auto__;
var G__20102 = cljs.core.count(c__9173__auto__);
var G__20103 = (0);
seq__20066 = G__20100;
chunk__20068 = G__20101;
count__20069 = G__20102;
i__20070 = G__20103;
continue;
} else {
var vec__20075 = cljs.core.first(seq__20066__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20075,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20075,(1),null);
var k_20104__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_20104__$1);
} else {
e.setAttribute(k_20104__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_20104__$1:v));
}

var G__20105 = cljs.core.next(seq__20066__$1);
var G__20106 = null;
var G__20107 = (0);
var G__20108 = (0);
seq__20066 = G__20105;
chunk__20068 = G__20106;
count__20069 = G__20107;
i__20070 = G__20108;
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
var seq__20078 = cljs.core.seq(kvs);
var chunk__20079 = null;
var count__20080 = (0);
var i__20081 = (0);
while(true){
if((i__20081 < count__20080)){
var vec__20082 = chunk__20079.cljs$core$IIndexed$_nth$arity$2(null,i__20081);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(1),null);
var G__20085_20109 = e.style;
var G__20086_20110 = cljs.core.name(k);
var G__20087_20111 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__20085_20109,G__20086_20110,G__20087_20111);

var G__20112 = seq__20078;
var G__20113 = chunk__20079;
var G__20114 = count__20080;
var G__20115 = (i__20081 + (1));
seq__20078 = G__20112;
chunk__20079 = G__20113;
count__20080 = G__20114;
i__20081 = G__20115;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__20078);
if(temp__5290__auto__){
var seq__20078__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20078__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__20078__$1);
var G__20116 = cljs.core.chunk_rest(seq__20078__$1);
var G__20117 = c__9173__auto__;
var G__20118 = cljs.core.count(c__9173__auto__);
var G__20119 = (0);
seq__20078 = G__20116;
chunk__20079 = G__20117;
count__20080 = G__20118;
i__20081 = G__20119;
continue;
} else {
var vec__20088 = cljs.core.first(seq__20078__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20088,(1),null);
var G__20091_20120 = e.style;
var G__20092_20121 = cljs.core.name(k);
var G__20093_20122 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__20091_20120,G__20092_20121,G__20093_20122);

var G__20123 = cljs.core.next(seq__20078__$1);
var G__20124 = null;
var G__20125 = (0);
var G__20126 = (0);
seq__20078 = G__20123;
chunk__20079 = G__20124;
count__20080 = G__20125;
i__20081 = G__20126;
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
var G__20130__delegate = function (args){
var vec__20127 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20127,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20127,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__20130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20131__i = 0, G__20131__a = new Array(arguments.length -  0);
while (G__20131__i < G__20131__a.length) {G__20131__a[G__20131__i] = arguments[G__20131__i + 0]; ++G__20131__i;}
  args = new cljs.core.IndexedSeq(G__20131__a,0,null);
} 
return G__20130__delegate.call(this,args);};
G__20130.cljs$lang$maxFixedArity = 0;
G__20130.cljs$lang$applyTo = (function (arglist__20132){
var args = cljs.core.seq(arglist__20132);
return G__20130__delegate(args);
});
G__20130.cljs$core$IFn$_invoke$arity$variadic = G__20130__delegate;
return G__20130;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__20136__delegate = function (args){
var vec__20133 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20133,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20133,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__20136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20137__i = 0, G__20137__a = new Array(arguments.length -  0);
while (G__20137__i < G__20137__a.length) {G__20137__a[G__20137__i] = arguments[G__20137__i + 0]; ++G__20137__i;}
  args = new cljs.core.IndexedSeq(G__20137__a,0,null);
} 
return G__20136__delegate.call(this,args);};
G__20136.cljs$lang$maxFixedArity = 0;
G__20136.cljs$lang$applyTo = (function (arglist__20138){
var args = cljs.core.seq(arglist__20138);
return G__20136__delegate(args);
});
G__20136.cljs$core$IFn$_invoke$arity$variadic = G__20136__delegate;
return G__20136;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9526__auto__ = [];
var len__9519__auto___20140 = arguments.length;
var i__9520__auto___20141 = (0);
while(true){
if((i__9520__auto___20141 < len__9519__auto___20140)){
args__9526__auto__.push((arguments[i__9520__auto___20141]));

var G__20142 = (i__9520__auto___20141 + (1));
i__9520__auto___20141 = G__20142;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.first(hoplon.core.parse_args(args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq20139){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20139));
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
hoplon.core.$text = (function hoplon$core$$text(p1__20143_SHARP_){
return document.createTextNode(p1__20143_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__20144_SHARP_){
return document.createComment(p1__20144_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__20145 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__20146 = (0);
return setTimeout(G__20145,G__20146);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__20147_SHARP_){
var e = p1__20147_SHARP_.target;
if(cljs.core.truth_((function (){var or__8242__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__20147_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9295__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9296__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9297__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9298__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9299__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__,hierarchy__9299__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__,hierarchy__9299__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9299__auto__,method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__20148 = elem;
var G__20149 = cljs.core.cst$kw$attr;
var G__20150 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__20148,G__20149,G__20150) : hoplon.core.do_BANG_.call(null,G__20148,G__20149,G__20150));
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
hoplon.core.on_BANG_ = (function (){var method_table__9295__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9296__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9297__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9298__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9299__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__,hierarchy__9299__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__,hierarchy__9299__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9299__auto__,method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__));
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
var items_seq = (function (){var fexpr__20155 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__20153,G__20154){
return (G__20153.cljs$core$IFn$_invoke$arity$1 ? G__20153.cljs$core$IFn$_invoke$arity$1(G__20154) : G__20153.call(null,G__20154));
});})(on_deck))
);
return (fexpr__20155.cljs$core$IFn$_invoke$arity$2 ? fexpr__20155.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__20155.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__20151_SHARP_){
var fexpr__20159 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__20157,G__20158,G__20156){
return (G__20156.cljs$core$IFn$_invoke$arity$3 ? G__20156.cljs$core$IFn$_invoke$arity$3(G__20157,G__20158,null) : G__20156.call(null,G__20157,G__20158,null));
});})(on_deck,items_seq))
);
return (fexpr__20159.cljs$core$IFn$_invoke$arity$3 ? fexpr__20159.cljs$core$IFn$_invoke$arity$3(items_seq,p1__20151_SHARP_,cljs.core.nth) : fexpr__20159.call(null,items_seq,p1__20151_SHARP_,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__20152_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__20152_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__20152_SHARP_,cljs.core.rest);

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
var seq__20160 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__20161 = null;
var count__20162 = (0);
var i__20163 = (0);
while(true){
if((i__20163 < count__20162)){
var i = chunk__20161.cljs$core$IIndexed$_nth$arity$2(null,i__20163);
var e_20166 = (function (){var or__8242__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
var G__20164 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__20164) : tpl.call(null,G__20164));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_20166);

var G__20167 = seq__20160;
var G__20168 = chunk__20161;
var G__20169 = count__20162;
var G__20170 = (i__20163 + (1));
seq__20160 = G__20167;
chunk__20161 = G__20168;
count__20162 = G__20169;
i__20163 = G__20170;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__20160);
if(temp__5290__auto__){
var seq__20160__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20160__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__20160__$1);
var G__20171 = cljs.core.chunk_rest(seq__20160__$1);
var G__20172 = c__9173__auto__;
var G__20173 = cljs.core.count(c__9173__auto__);
var G__20174 = (0);
seq__20160 = G__20171;
chunk__20161 = G__20172;
count__20162 = G__20173;
i__20163 = G__20174;
continue;
} else {
var i = cljs.core.first(seq__20160__$1);
var e_20175 = (function (){var or__8242__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
var G__20165 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__20165) : tpl.call(null,G__20165));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_20175);

var G__20176 = cljs.core.next(seq__20160__$1);
var G__20177 = null;
var G__20178 = (0);
var G__20179 = (0);
seq__20160 = G__20176;
chunk__20161 = G__20177;
count__20162 = G__20178;
i__20163 = G__20179;
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
var n__9285__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9285__auto__)){
var e_20180 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_20180);

var G__20181 = (_ + (1));
_ = G__20181;
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
var args__9526__auto__ = [];
var len__9519__auto___20191 = arguments.length;
var i__9520__auto___20192 = (0);
while(true){
if((i__9520__auto___20192 < len__9519__auto___20191)){
args__9526__auto__.push((arguments[i__9520__auto___20192]));

var G__20193 = (i__9520__auto___20192 + (1));
i__9520__auto___20192 = G__20193;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__20183){
var vec__20184 = p__20183;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20184,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__20190 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__20184,default$){
return (function (G__20187,G__20189,G__20188){
var or__8242__auto__ = (function (){var and__8230__auto__ = (G__20187.cljs$core$IFn$_invoke$arity$1 ? G__20187.cljs$core$IFn$_invoke$arity$1(G__20188) : G__20187.call(null,G__20188));
if(cljs.core.truth_(and__8230__auto__)){
return G__20188;
} else {
return and__8230__auto__;
}
})();
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return G__20189;
}
});})(c,vec__20184,default$))
);
return (fexpr__20190.cljs$core$IFn$_invoke$arity$3 ? fexpr__20190.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__20190.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__20184,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__20184,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq20182){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20182));
});

