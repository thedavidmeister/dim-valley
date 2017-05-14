// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__10666_SHARP_,p2__10667_SHARP_){
return cljs.core.assoc.call(null,p1__10666_SHARP_,p2__10667_SHARP_.getAttribute("static-id"),p2__10667_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args10668 = [];
var len__8306__auto___10671 = arguments.length;
var i__8307__auto___10672 = (0);
while(true){
if((i__8307__auto___10672 < len__8306__auto___10671)){
args10668.push((arguments[i__8307__auto___10672]));

var G__10673 = (i__8307__auto___10672 + (1));
i__8307__auto___10672 = G__10673;
continue;
} else {
}
break;
}

var G__10670 = args10668.length;
switch (G__10670) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10668.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.call(null,ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,ref));

cljs.core.add_watch.call(null,ref,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
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
var vec__10681 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__10682 = cljs.core.seq.call(null,vec__10681);
var first__10683 = cljs.core.first.call(null,seq__10682);
var seq__10682__$1 = cljs.core.next.call(null,seq__10682);
var f = first__10683;
var more = seq__10682__$1;
var vec__10684 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__10684,(0),null);
var f2 = cljs.core.nth.call(null,vec__10684,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("1ea61631408940ef9e903b33f85ca363")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__10687_SHARP_){
return cljs.core.zipmap.call(null,p1__10687_SHARP_,cljs.core.repeat.call(null,true));
});
if(cljs.core.map_QMARK_.call(null,kvs)){
return kvs;
} else {
return __GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__7193__auto__ = (function (){var and__7181__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__7181__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__7181__auto__;
}
})();
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
var G__10688 = (i + (1));
var G__10689 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__10688;
ret = G__10689;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args10690 = [];
var len__8306__auto___10693 = arguments.length;
var i__8307__auto___10694 = (0);
while(true){
if((i__8307__auto___10694 < len__8306__auto___10693)){
args10690.push((arguments[i__8307__auto___10694]));

var G__10695 = (i__8307__auto___10694 + (1));
i__8307__auto___10694 = G__10695;
continue;
} else {
}
break;
}

var G__10692 = args10690.length;
switch (G__10692) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10690.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_.call(null,hoplon.core.vflatten.call(null,tree,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count.call(null,tree);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,l)){
return ret;
} else {
var x = cljs.core.nth.call(null,tree,i);
if(!(cljs.core.sequential_QMARK_.call(null,x))){
cljs.core.conj_BANG_.call(null,ret,x);
} else {
hoplon.core.vflatten.call(null,x,ret);
}

var G__10697 = (i + (1));
i = G__10697;
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
var x__7861__auto__ = (((this$ == null))?null:this$);
var m__7862__auto__ = (hoplon.core.node[goog.typeOf(x__7861__auto__)]);
if(!((m__7862__auto__ == null))){
return m__7862__auto__.call(null,this$);
} else {
var m__7862__auto____$1 = (hoplon.core.node["_"]);
if(!((m__7862__auto____$1 == null))){
return m__7862__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return hoplon.core.$text.call(null,this$);
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
return hoplon.core.$text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x))){
return hoplon.core.node.call(null,x);
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
var new$__$1 = cljs.core.mapv.call(null,hoplon.core.__GT_node,cljs.core.reduce.call(null,(function (p1__10701_SHARP_,p2__10700_SHARP_){
if((p2__10700_SHARP_ == null)){
return p1__10701_SHARP_;
} else {
return cljs.core.conj.call(null,p1__10701_SHARP_,p2__10700_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__10728 = new$__$1;
var vec__10730 = G__10728;
var seq__10731 = cljs.core.seq.call(null,vec__10730);
var first__10732 = cljs.core.first.call(null,seq__10731);
var seq__10731__$1 = cljs.core.next.call(null,seq__10731);
var x = first__10732;
var xs = seq__10731__$1;
var G__10729 = hoplon.core.child_vec.call(null,this$);
var vec__10733 = G__10729;
var seq__10734 = cljs.core.seq.call(null,vec__10733);
var first__10735 = cljs.core.first.call(null,seq__10734);
var seq__10734__$1 = cljs.core.next.call(null,seq__10734);
var k = first__10735;
var ks = seq__10734__$1;
var kids = vec__10733;
var G__10728__$1 = G__10728;
var G__10729__$1 = G__10729;
while(true){
var vec__10736 = G__10728__$1;
var seq__10737 = cljs.core.seq.call(null,vec__10736);
var first__10738 = cljs.core.first.call(null,seq__10737);
var seq__10737__$1 = cljs.core.next.call(null,seq__10737);
var x__$1 = first__10738;
var xs__$1 = seq__10737__$1;
var vec__10739 = G__10729__$1;
var seq__10740 = cljs.core.seq.call(null,vec__10739);
var first__10741 = cljs.core.first.call(null,seq__10740);
var seq__10740__$1 = cljs.core.next.call(null,seq__10740);
var k__$1 = first__10741;
var ks__$1 = seq__10740__$1;
var kids__$1 = vec__10739;
if(cljs.core.truth_((function (){var or__7193__auto__ = x__$1;
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
return k__$1;
}
})())){
var G__10742 = xs__$1;
var G__10743 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__10728__$1 = G__10742;
G__10729__$1 = G__10743;
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
var kids_10744 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_10744;

hoplon.core.do_watch.call(null,kids_10744,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids.call(null,this$,null,null);
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
return cljs.core.not.call(null,hoplon.core.native_QMARK_.call(null,elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_.call(null,parent);

var kids_10747 = kidfn.call(null,parent);
var i_10748 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_10747));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,child__$1))){
hoplon.core.do_watch.call(null,child__$1,((function (kids_10747,i_10748,child__$1){
return (function (p1__10746_SHARP_,p2__10745_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_10747,cljs.core.assoc,i_10748,p2__10745_SHARP_);
});})(kids_10747,i_10748,child__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_10747,cljs.core.assoc,i_10748,child__$1);
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

if(cljs.core.truth_((function (){var and__7181__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__7181__auto__)){
return cljs.core.not.call(null,javelin.core.cell_QMARK_.call(null,child));
} else {
return and__7181__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__7181__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__7181__auto__)){
return javelin.core.cell_QMARK_.call(null,child);
} else {
return and__7181__auto__;
}
})())){
return hoplon.core.managed_append_child.call(null,this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_.call(null,this$__$1))){
return hoplon.core.managed_append_child.call(null,this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.call(null,"Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("hoplon.core","unexpected-child-type","hoplon.core/unexpected-child-type",1756641127),new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"native?","native?",-1916990868),hoplon.core.native_QMARK_.call(null,child),new cljs.core.Keyword(null,"managed?","managed?",-1222195407),hoplon.core.managed_QMARK_.call(null,child),new cljs.core.Keyword(null,"this","this",-611633625),this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__10749_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__10749_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

if(cljs.core.not.call(null,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.call(null,x__$1,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__10750_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__10750_SHARP_));
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
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__10751_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__10751_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_10752 = cljs.core.keyword.call(null,k);
var attr_10753 = attrfn.call(null,this$__$1);
var has_QMARK__10754 = (function (){var and__7181__auto__ = attr_10753;
if(cljs.core.truth_(and__7181__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_10753),kk_10752);
} else {
return and__7181__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__10754)){
cljs.core.swap_BANG_.call(null,attr_10753,cljs.core.assoc,kk_10752,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__10755_SHARP_){
return p1__10755_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__10756_SHARP_){
return p1__10756_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__10757_SHARP_){
return p1__10757_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__10758_SHARP_){
return p1__10758_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7861__auto__ = (((this$ == null))?null:this$);
var m__7862__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7861__auto__)]);
if(!((m__7862__auto__ == null))){
return m__7862__auto__.call(null,this$,kvs);
} else {
var m__7862__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7862__auto____$1 == null))){
return m__7862__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__7861__auto__ = (((this$ == null))?null:this$);
var m__7862__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7861__auto__)]);
if(!((m__7862__auto__ == null))){
return m__7862__auto__.call(null,this$,kvs);
} else {
var m__7862__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7862__auto____$1 == null))){
return m__7862__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7861__auto__ = (((this$ == null))?null:this$);
var m__7862__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7861__auto__)]);
if(!((m__7862__auto__ == null))){
return m__7862__auto__.call(null,this$,child);
} else {
var m__7862__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7862__auto____$1 == null))){
return m__7862__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7861__auto__ = (((this$ == null))?null:this$);
var m__7862__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7861__auto__)]);
if(!((m__7862__auto__ == null))){
return m__7862__auto__.call(null,this$,child);
} else {
var m__7862__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7862__auto____$1 == null))){
return m__7862__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7861__auto__ = (((this$ == null))?null:this$);
var m__7862__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7861__auto__)]);
if(!((m__7862__auto__ == null))){
return m__7862__auto__.call(null,this$,new$,existing);
} else {
var m__7862__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7862__auto____$1 == null))){
return m__7862__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7861__auto__ = (((this$ == null))?null:this$);
var m__7862__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7861__auto__)]);
if(!((m__7862__auto__ == null))){
return m__7862__auto__.call(null,this$,new$,existing);
} else {
var m__7862__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7862__auto____$1 == null))){
return m__7862__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args10759 = [];
var len__8306__auto___10766 = arguments.length;
var i__8307__auto___10767 = (0);
while(true){
if((i__8307__auto___10767 < len__8306__auto___10766)){
args10759.push((arguments[i__8307__auto___10767]));

var G__10768 = (i__8307__auto___10767 + (1));
i__8307__auto___10767 = G__10768;
continue;
} else {
}
break;
}

var G__10765 = args10759.length;
switch (G__10765) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8325__auto__ = (new cljs.core.IndexedSeq(args10759.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8325__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10760){
var G__10761 = cljs.core.first.call(null,seq10760);
var seq10760__$1 = cljs.core.next.call(null,seq10760);
var G__10762 = cljs.core.first.call(null,seq10760__$1);
var seq10760__$2 = cljs.core.next.call(null,seq10760__$1);
var G__10763 = cljs.core.first.call(null,seq10760__$2);
var seq10760__$3 = cljs.core.next.call(null,seq10760__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10761,G__10762,G__10763,seq10760__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args10770 = [];
var len__8306__auto___10777 = arguments.length;
var i__8307__auto___10778 = (0);
while(true){
if((i__8307__auto___10778 < len__8306__auto___10777)){
args10770.push((arguments[i__8307__auto___10778]));

var G__10779 = (i__8307__auto___10778 + (1));
i__8307__auto___10778 = G__10779;
continue;
} else {
}
break;
}

var G__10776 = args10770.length;
switch (G__10776) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8325__auto__ = (new cljs.core.IndexedSeq(args10770.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8325__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq10771){
var G__10772 = cljs.core.first.call(null,seq10771);
var seq10771__$1 = cljs.core.next.call(null,seq10771);
var G__10773 = cljs.core.first.call(null,seq10771__$1);
var seq10771__$2 = cljs.core.next.call(null,seq10771__$1);
var G__10774 = cljs.core.first.call(null,seq10771__$2);
var seq10771__$3 = cljs.core.next.call(null,seq10771__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10772,G__10773,G__10774,seq10771__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__7861__auto__ = (((this$ == null))?null:this$);
var m__7862__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__7861__auto__)]);
if(!((m__7862__auto__ == null))){
return m__7862__auto__.call(null,this$,elem,value);
} else {
var m__7862__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__7862__auto____$1 == null))){
return m__7862__auto____$1.call(null,this$,elem,value);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomAttribute.-attr!",this$);
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
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,value))){
return hoplon.core.do_watch.call(null,value,((function (this$__$1){
return (function (p1__10784_SHARP_,p2__10783_SHARP_){
return hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__10783_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,value)){
return hoplon.core.on_BANG_.call(null,elem,this$__$1,value);
} else {
return hoplon.core.do_BANG_.call(null,elem,this$__$1,value);

}
}
});
hoplon.core.is_ie8 = cljs.core.not.call(null,goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__10785_SHARP_){
return p1__10785_SHARP_.head;
}):(function (p1__10786_SHARP_){
return p1__10786_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10787_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__10787_SHARP_);
}catch (e10788){if((e10788 instanceof Error)){
var _ = e10788;
return null;
} else {
throw e10788;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10789_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__10789_SHARP_);
}catch (e10790){if((e10790 instanceof Error)){
var _ = e10790;
return null;
} else {
throw e10790;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args10791 = [];
var len__8306__auto___10795 = arguments.length;
var i__8307__auto___10796 = (0);
while(true){
if((i__8307__auto___10796 < len__8306__auto___10795)){
args10791.push((arguments[i__8307__auto___10796]));

var G__10797 = (i__8307__auto___10796 + (1));
i__8307__auto___10796 = G__10797;
continue;
} else {
}
break;
}

var G__10793 = args10791.length;
switch (G__10793) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10791.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e10794){if((e10794 instanceof Error)){
var _ = e10794;
return not_found;
} else {
throw e10794;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args10799 = [];
var len__8306__auto___10802 = arguments.length;
var i__8307__auto___10803 = (0);
while(true){
if((i__8307__auto___10803 < len__8306__auto___10802)){
args10799.push((arguments[i__8307__auto___10803]));

var G__10804 = (i__8307__auto___10803 + (1));
i__8307__auto___10803 = G__10804;
continue;
} else {
}
break;
}

var G__10801 = args10799.length;
switch (G__10801) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10799.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return setTimeout((function (){
return f.call(null);
}),(0));
} else {
var temp__4655__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return v.push(f);
} else {
goog.object.set(this$,"_hoplonWhenDom",[f]);

return setTimeout(((function (temp__4655__auto__){
return (function (){
return ((function (temp__4655__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not.call(null,document.documentElement.contains(this$))){
return setTimeout(((function (temp__4655__auto__){
return (function (){
return hoplon$core$when_dom_$_doit.call(null);
});})(temp__4655__auto__))
,(20));
} else {
var seq__10818_10822 = cljs.core.seq.call(null,goog.object.get(this$,"_hoplonWhenDom"));
var chunk__10819_10823 = null;
var count__10820_10824 = (0);
var i__10821_10825 = (0);
while(true){
if((i__10821_10825 < count__10820_10824)){
var f_10826__$1 = cljs.core._nth.call(null,chunk__10819_10823,i__10821_10825);
f_10826__$1.call(null);

var G__10827 = seq__10818_10822;
var G__10828 = chunk__10819_10823;
var G__10829 = count__10820_10824;
var G__10830 = (i__10821_10825 + (1));
seq__10818_10822 = G__10827;
chunk__10819_10823 = G__10828;
count__10820_10824 = G__10829;
i__10821_10825 = G__10830;
continue;
} else {
var temp__4657__auto___10831 = cljs.core.seq.call(null,seq__10818_10822);
if(temp__4657__auto___10831){
var seq__10818_10832__$1 = temp__4657__auto___10831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10818_10832__$1)){
var c__8012__auto___10833 = cljs.core.chunk_first.call(null,seq__10818_10832__$1);
var G__10834 = cljs.core.chunk_rest.call(null,seq__10818_10832__$1);
var G__10835 = c__8012__auto___10833;
var G__10836 = cljs.core.count.call(null,c__8012__auto___10833);
var G__10837 = (0);
seq__10818_10822 = G__10834;
chunk__10819_10823 = G__10835;
count__10820_10824 = G__10836;
i__10821_10825 = G__10837;
continue;
} else {
var f_10838__$1 = cljs.core.first.call(null,seq__10818_10832__$1);
f_10838__$1.call(null);

var G__10839 = cljs.core.next.call(null,seq__10818_10832__$1);
var G__10840 = null;
var G__10841 = (0);
var G__10842 = (0);
seq__10818_10822 = G__10839;
chunk__10819_10823 = G__10840;
count__10820_10824 = G__10841;
i__10821_10825 = G__10842;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__4655__auto__))
.call(null);
});})(temp__4655__auto__))
,(0));
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__10859 = args;
var vec__10860 = G__10859;
var seq__10861 = cljs.core.seq.call(null,vec__10860);
var first__10862 = cljs.core.first.call(null,seq__10861);
var seq__10861__$1 = cljs.core.next.call(null,seq__10861);
var arg = first__10862;
var args__$1 = seq__10861__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__10859__$1 = G__10859;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10863 = G__10859__$1;
var seq__10864 = cljs.core.seq.call(null,vec__10863);
var first__10865 = cljs.core.first.call(null,seq__10864);
var seq__10864__$1 = cljs.core.next.call(null,seq__10864);
var arg__$1 = first__10865;
var args__$2 = seq__10864__$1;
if(cljs.core.not.call(null,(function (){var or__7193__auto__ = arg__$1;
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__10866 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__10859__$1,attr__$2,kids__$2,vec__10863,seq__10864,first__10865,seq__10864__$1,arg__$1,args__$2,attr,kids,G__10859,vec__10860,seq__10861,first__10862,seq__10861__$1,arg,args__$1){
return (function (p1__10843_SHARP_,p2__10844_SHARP_,p3__10845_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__10843_SHARP_,p2__10844_SHARP_,p3__10845_SHARP_);
});})(attr__$1,kids__$1,G__10859__$1,attr__$2,kids__$2,vec__10863,seq__10864,first__10865,seq__10864__$1,arg__$1,args__$2,attr,kids,G__10859,vec__10860,seq__10861,first__10862,seq__10861__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__10867 = kids__$2;
var G__10868 = args__$2;
attr__$1 = G__10866;
kids__$1 = G__10867;
G__10859__$1 = G__10868;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__10869 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__10870 = kids__$2;
var G__10871 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__10869;
kids__$1 = G__10870;
G__10859__$1 = G__10871;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__10872 = attr__$2;
var G__10873 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__10874 = args__$2;
attr__$1 = G__10872;
kids__$1 = G__10873;
G__10859__$1 = G__10874;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__10875 = attr__$2;
var G__10876 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__10877 = args__$2;
attr__$1 = G__10875;
kids__$1 = G__10876;
G__10859__$1 = G__10877;
continue;
} else {
var G__10878 = attr__$2;
var G__10879 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__10880 = args__$2;
attr__$1 = G__10878;
kids__$1 = G__10879;
G__10859__$1 = G__10880;
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
return cljs.core.reduce_kv.call(null,(function (p1__10882_SHARP_,p2__10881_SHARP_,p3__10883_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__10881_SHARP_,p1__10882_SHARP_,p3__10883_SHARP_);

return p1__10882_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__10884){
var vec__10892 = p__10884;
var seq__10893 = cljs.core.seq.call(null,vec__10892);
var first__10894 = cljs.core.first.call(null,seq__10893);
var seq__10893__$1 = cljs.core.next.call(null,seq__10893);
var child_cell = first__10894;
var _ = seq__10893__$1;
var kids = vec__10892;
var this$__$1 = this$;
var seq__10895_10899 = cljs.core.seq.call(null,hoplon.core.vflatten.call(null,kids));
var chunk__10896_10900 = null;
var count__10897_10901 = (0);
var i__10898_10902 = (0);
while(true){
if((i__10898_10902 < count__10897_10901)){
var x_10903 = cljs.core._nth.call(null,chunk__10896_10900,i__10898_10902);
var temp__4657__auto___10904 = hoplon.core.__GT_node.call(null,x_10903);
if(cljs.core.truth_(temp__4657__auto___10904)){
var x_10905__$1 = temp__4657__auto___10904;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_10905__$1);
} else {
}

var G__10906 = seq__10895_10899;
var G__10907 = chunk__10896_10900;
var G__10908 = count__10897_10901;
var G__10909 = (i__10898_10902 + (1));
seq__10895_10899 = G__10906;
chunk__10896_10900 = G__10907;
count__10897_10901 = G__10908;
i__10898_10902 = G__10909;
continue;
} else {
var temp__4657__auto___10910 = cljs.core.seq.call(null,seq__10895_10899);
if(temp__4657__auto___10910){
var seq__10895_10911__$1 = temp__4657__auto___10910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10895_10911__$1)){
var c__8012__auto___10912 = cljs.core.chunk_first.call(null,seq__10895_10911__$1);
var G__10913 = cljs.core.chunk_rest.call(null,seq__10895_10911__$1);
var G__10914 = c__8012__auto___10912;
var G__10915 = cljs.core.count.call(null,c__8012__auto___10912);
var G__10916 = (0);
seq__10895_10899 = G__10913;
chunk__10896_10900 = G__10914;
count__10897_10901 = G__10915;
i__10898_10902 = G__10916;
continue;
} else {
var x_10917 = cljs.core.first.call(null,seq__10895_10911__$1);
var temp__4657__auto___10918__$1 = hoplon.core.__GT_node.call(null,x_10917);
if(cljs.core.truth_(temp__4657__auto___10918__$1)){
var x_10919__$1 = temp__4657__auto___10918__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_10919__$1);
} else {
}

var G__10920 = cljs.core.next.call(null,seq__10895_10911__$1);
var G__10921 = null;
var G__10922 = (0);
var G__10923 = (0);
seq__10895_10899 = G__10920;
chunk__10896_10900 = G__10921;
count__10897_10901 = G__10922;
i__10898_10902 = G__10923;
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
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__10956__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10925 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__10925,(0),null);
var kids = cljs.core.nth.call(null,vec__10925,(1),null);
var G__10928 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__10928,attr);

hoplon.core.add_children_BANG_.call(null,G__10928,kids);

return G__10928;
};
var G__10956 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__10957__i = 0, G__10957__a = new Array(arguments.length -  1);
while (G__10957__i < G__10957__a.length) {G__10957__a[G__10957__i] = arguments[G__10957__i + 1]; ++G__10957__i;}
  args = new cljs.core.IndexedSeq(G__10957__a,0,null);
} 
return G__10956__delegate.call(this,self__,args);};
G__10956.cljs$lang$maxFixedArity = 1;
G__10956.cljs$lang$applyTo = (function (arglist__10958){
var self__ = cljs.core.first(arglist__10958);
var args = cljs.core.rest(arglist__10958);
return G__10956__delegate(self__,args);
});
G__10956.cljs$core$IFn$_invoke$arity$variadic = G__10956__delegate;
return G__10956;
})()
;

Element.prototype.apply = (function (self__,args10924){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10924)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10959__delegate = function (args){
var this$ = this;
var vec__10929 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__10929,(0),null);
var kids = cljs.core.nth.call(null,vec__10929,(1),null);
var G__10932 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__10932,attr);

hoplon.core.add_children_BANG_.call(null,G__10932,kids);

return G__10932;
};
var G__10959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10960__i = 0, G__10960__a = new Array(arguments.length -  0);
while (G__10960__i < G__10960__a.length) {G__10960__a[G__10960__i] = arguments[G__10960__i + 0]; ++G__10960__i;}
  args = new cljs.core.IndexedSeq(G__10960__a,0,null);
} 
return G__10959__delegate.call(this,args);};
G__10959.cljs$lang$maxFixedArity = 0;
G__10959.cljs$lang$applyTo = (function (arglist__10961){
var args = cljs.core.seq(arglist__10961);
return G__10959__delegate(args);
});
G__10959.cljs$core$IFn$_invoke$arity$variadic = G__10959__delegate;
return G__10959;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10933 = cljs.core.seq.call(null,kvs);
var chunk__10935 = null;
var count__10936 = (0);
var i__10937 = (0);
while(true){
if((i__10937 < count__10936)){
var vec__10939 = cljs.core._nth.call(null,chunk__10935,i__10937);
var k = cljs.core.nth.call(null,vec__10939,(0),null);
var v = cljs.core.nth.call(null,vec__10939,(1),null);
var k_10962__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_10962__$1);
} else {
e.setAttribute(k_10962__$1,((cljs.core._EQ_.call(null,true,v))?k_10962__$1:v));
}

var G__10963 = seq__10933;
var G__10964 = chunk__10935;
var G__10965 = count__10936;
var G__10966 = (i__10937 + (1));
seq__10933 = G__10963;
chunk__10935 = G__10964;
count__10936 = G__10965;
i__10937 = G__10966;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10933);
if(temp__4657__auto__){
var seq__10933__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10933__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__10933__$1);
var G__10967 = cljs.core.chunk_rest.call(null,seq__10933__$1);
var G__10968 = c__8012__auto__;
var G__10969 = cljs.core.count.call(null,c__8012__auto__);
var G__10970 = (0);
seq__10933 = G__10967;
chunk__10935 = G__10968;
count__10936 = G__10969;
i__10937 = G__10970;
continue;
} else {
var vec__10942 = cljs.core.first.call(null,seq__10933__$1);
var k = cljs.core.nth.call(null,vec__10942,(0),null);
var v = cljs.core.nth.call(null,vec__10942,(1),null);
var k_10971__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_10971__$1);
} else {
e.setAttribute(k_10971__$1,((cljs.core._EQ_.call(null,true,v))?k_10971__$1:v));
}

var G__10972 = cljs.core.next.call(null,seq__10933__$1);
var G__10973 = null;
var G__10974 = (0);
var G__10975 = (0);
seq__10933 = G__10972;
chunk__10935 = G__10973;
count__10936 = G__10974;
i__10937 = G__10975;
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
var seq__10945 = cljs.core.seq.call(null,kvs);
var chunk__10946 = null;
var count__10947 = (0);
var i__10948 = (0);
while(true){
if((i__10948 < count__10947)){
var vec__10949 = cljs.core._nth.call(null,chunk__10946,i__10948);
var k = cljs.core.nth.call(null,vec__10949,(0),null);
var v = cljs.core.nth.call(null,vec__10949,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__10976 = seq__10945;
var G__10977 = chunk__10946;
var G__10978 = count__10947;
var G__10979 = (i__10948 + (1));
seq__10945 = G__10976;
chunk__10946 = G__10977;
count__10947 = G__10978;
i__10948 = G__10979;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10945);
if(temp__4657__auto__){
var seq__10945__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10945__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__10945__$1);
var G__10980 = cljs.core.chunk_rest.call(null,seq__10945__$1);
var G__10981 = c__8012__auto__;
var G__10982 = cljs.core.count.call(null,c__8012__auto__);
var G__10983 = (0);
seq__10945 = G__10980;
chunk__10946 = G__10981;
count__10947 = G__10982;
i__10948 = G__10983;
continue;
} else {
var vec__10952 = cljs.core.first.call(null,seq__10945__$1);
var k = cljs.core.nth.call(null,vec__10952,(0),null);
var v = cljs.core.nth.call(null,vec__10952,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__10984 = cljs.core.next.call(null,seq__10945__$1);
var G__10985 = null;
var G__10986 = (0);
var G__10987 = (0);
seq__10945 = G__10984;
chunk__10946 = G__10985;
count__10947 = G__10986;
i__10948 = G__10987;
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
}catch (e10955){if((e10955 instanceof Error)){
var _ = e10955;
return null;
} else {
throw e10955;

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
var G__10994__delegate = function (args){
var vec__10991 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__10991,(0),null);
var kids = cljs.core.nth.call(null,vec__10991,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__10994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10995__i = 0, G__10995__a = new Array(arguments.length -  0);
while (G__10995__i < G__10995__a.length) {G__10995__a[G__10995__i] = arguments[G__10995__i + 0]; ++G__10995__i;}
  args = new cljs.core.IndexedSeq(G__10995__a,0,null);
} 
return G__10994__delegate.call(this,args);};
G__10994.cljs$lang$maxFixedArity = 0;
G__10994.cljs$lang$applyTo = (function (arglist__10996){
var args = cljs.core.seq(arglist__10996);
return G__10994__delegate(args);
});
G__10994.cljs$core$IFn$_invoke$arity$variadic = G__10994__delegate;
return G__10994;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__11000__delegate = function (rest__10997_SHARP_){
return cljs.core.apply.call(null,document.createElement(tag),rest__10997_SHARP_);
};
var G__11000 = function (var_args){
var rest__10997_SHARP_ = null;
if (arguments.length > 0) {
var G__11001__i = 0, G__11001__a = new Array(arguments.length -  0);
while (G__11001__i < G__11001__a.length) {G__11001__a[G__11001__i] = arguments[G__11001__i + 0]; ++G__11001__i;}
  rest__10997_SHARP_ = new cljs.core.IndexedSeq(G__11001__a,0,null);
} 
return G__11000__delegate.call(this,rest__10997_SHARP_);};
G__11000.cljs$lang$maxFixedArity = 0;
G__11000.cljs$lang$applyTo = (function (arglist__11002){
var rest__10997_SHARP_ = cljs.core.seq(arglist__11002);
return G__11000__delegate(rest__10997_SHARP_);
});
G__11000.cljs$core$IFn$_invoke$arity$variadic = G__11000__delegate;
return G__11000;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__11003__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e10999){if((e10999 instanceof Error)){
var _ = e10999;
return cljs.core.apply.call(null,hoplon.core.make_elem_ctor.call(null,"div"),args);
} else {
throw e10999;

}
}};
var G__11003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11004__i = 0, G__11004__a = new Array(arguments.length -  0);
while (G__11004__i < G__11004__a.length) {G__11004__a[G__11004__i] = arguments[G__11004__i + 0]; ++G__11004__i;}
  args = new cljs.core.IndexedSeq(G__11004__a,0,null);
} 
return G__11003__delegate.call(this,args);};
G__11003.cljs$lang$maxFixedArity = 0;
G__11003.cljs$lang$applyTo = (function (arglist__11005){
var args = cljs.core.seq(arglist__11005);
return G__11003__delegate(args);
});
G__11003.cljs$core$IFn$_invoke$arity$variadic = G__11003__delegate;
return G__11003;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8313__auto__ = [];
var len__8306__auto___11007 = arguments.length;
var i__8307__auto___11008 = (0);
while(true){
if((i__8307__auto___11008 < len__8306__auto___11007)){
args__8313__auto__.push((arguments[i__8307__auto___11008]));

var G__11009 = (i__8307__auto___11008 + (1));
i__8307__auto___11008 = G__11009;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_.call(null,document.documentElement,cljs.core.nth.call(null,hoplon.core.parse_args.call(null,args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq11006){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11006));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,hoplon.core._head_STAR_.call(null,document));
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,document.body);
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor.call(null,"dialog");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor.call(null,"menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor.call(null,"multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.picture = hoplon.core.make_elem_ctor.call(null,"picture");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor.call(null,"rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.shadow = hoplon.core.make_elem_ctor.call(null,"shadow");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.template = hoplon.core.make_elem_ctor.call(null,"template");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__11010_SHARP_){
return document.createTextNode(p1__11010_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__11011_SHARP_){
return document.createComment(p1__11011_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return f.call(null);
}),(0));
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return document.body.addEventListener("submit",(function (p1__11012_SHARP_){
var e = p1__11012_SHARP_.target;
if(cljs.core.truth_((function (){var or__7193__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__11012_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8128__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8129__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8130__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__8126__auto__,prefer_table__8127__auto__,method_cache__8128__auto__,cached_hierarchy__8129__auto__,hierarchy__8130__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__8126__auto__,prefer_table__8127__auto__,method_cache__8128__auto__,cached_hierarchy__8129__auto__,hierarchy__8130__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__8130__auto__,method_table__8126__auto__,prefer_table__8127__auto__,method_cache__8128__auto__,cached_hierarchy__8129__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.core.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.call(null,elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__8126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8128__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8129__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8130__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__8126__auto__,prefer_table__8127__auto__,method_cache__8128__auto__,cached_hierarchy__8129__auto__,hierarchy__8130__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__8126__auto__,prefer_table__8127__auto__,method_cache__8128__auto__,cached_hierarchy__8129__auto__,hierarchy__8130__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__8130__auto__,method_table__8126__auto__,prefer_table__8127__auto__,method_cache__8128__auto__,cached_hierarchy__8129__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
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
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__11024,G__11025){
return G__11024.call(null,G__11025);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__11013_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__11028,G__11027,G__11026){
return G__11026.call(null,G__11027,G__11028);
});})(on_deck,items_seq))
).call(null,p1__11013_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__11014_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__11014_SHARP_));
cljs.core.swap_BANG_.call(null,p1__11014_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__11029 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__11030 = null;
var count__11031 = (0);
var i__11032 = (0);
while(true){
if((i__11032 < count__11031)){
var i = cljs.core._nth.call(null,chunk__11030,i__11032);
var e_11033 = (function (){var or__7193__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_11033);

var G__11034 = seq__11029;
var G__11035 = chunk__11030;
var G__11036 = count__11031;
var G__11037 = (i__11032 + (1));
seq__11029 = G__11034;
chunk__11030 = G__11035;
count__11031 = G__11036;
i__11032 = G__11037;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11029);
if(temp__4657__auto__){
var seq__11029__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11029__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__11029__$1);
var G__11038 = cljs.core.chunk_rest.call(null,seq__11029__$1);
var G__11039 = c__8012__auto__;
var G__11040 = cljs.core.count.call(null,c__8012__auto__);
var G__11041 = (0);
seq__11029 = G__11038;
chunk__11030 = G__11039;
count__11031 = G__11040;
i__11032 = G__11041;
continue;
} else {
var i = cljs.core.first.call(null,seq__11029__$1);
var e_11042 = (function (){var or__7193__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_11042);

var G__11043 = cljs.core.next.call(null,seq__11029__$1);
var G__11044 = null;
var G__11045 = (0);
var G__11046 = (0);
seq__11029 = G__11043;
chunk__11030 = G__11044;
count__11031 = G__11045;
i__11032 = G__11046;
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
var n__8116__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__8116__auto__)){
var e_11047 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_11047);

var G__11048 = (_ + (1));
_ = G__11048;
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
var args__8313__auto__ = [];
var len__8306__auto___11057 = arguments.length;
var i__8307__auto___11058 = (0);
while(true){
if((i__8307__auto___11058 < len__8306__auto___11057)){
args__8313__auto__.push((arguments[i__8307__auto___11058]));

var G__11059 = (i__8307__auto___11058 + (1));
i__8307__auto___11058 = G__11059;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__11050){
var vec__11051 = p__11050;
var default$ = cljs.core.nth.call(null,vec__11051,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__11051,default$){
return (function (G__11054,G__11056,G__11055){
var or__7193__auto__ = (function (){var and__7181__auto__ = G__11054.call(null,G__11055);
if(cljs.core.truth_(and__7181__auto__)){
return G__11055;
} else {
return and__7181__auto__;
}
})();
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
return G__11056;
}
});})(c,vec__11051,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__11051,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__11051,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq11049){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11049));
});


//# sourceMappingURL=core.js.map