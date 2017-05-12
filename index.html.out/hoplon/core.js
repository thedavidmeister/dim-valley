// Compiled by ClojureScript 1.9.293 {}
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
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__8874_SHARP_,p2__8875_SHARP_){
return cljs.core.assoc.call(null,p1__8874_SHARP_,p2__8875_SHARP_.getAttribute("static-id"),p2__8875_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args8876 = [];
var len__7950__auto___8879 = arguments.length;
var i__7951__auto___8880 = (0);
while(true){
if((i__7951__auto___8880 < len__7950__auto___8879)){
args8876.push((arguments[i__7951__auto___8880]));

var G__8881 = (i__7951__auto___8880 + (1));
i__7951__auto___8880 = G__8881;
continue;
} else {
}
break;
}

var G__8878 = args8876.length;
switch (G__8878) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8876.length)].join('')));

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
var vec__8889 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__8890 = cljs.core.seq.call(null,vec__8889);
var first__8891 = cljs.core.first.call(null,seq__8890);
var seq__8890__$1 = cljs.core.next.call(null,seq__8890);
var f = first__8891;
var more = seq__8890__$1;
var vec__8892 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__8892,(0),null);
var f2 = cljs.core.nth.call(null,vec__8892,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("f66d995b7b724199b970455a69b545c1")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__8895_SHARP_){
return cljs.core.zipmap.call(null,p1__8895_SHARP_,cljs.core.repeat.call(null,true));
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
var or__6842__auto__ = (function (){var and__6830__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__6830__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
var G__8896 = (i + (1));
var G__8897 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__8896;
ret = G__8897;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args8898 = [];
var len__7950__auto___8901 = arguments.length;
var i__7951__auto___8902 = (0);
while(true){
if((i__7951__auto___8902 < len__7950__auto___8901)){
args8898.push((arguments[i__7951__auto___8902]));

var G__8903 = (i__7951__auto___8902 + (1));
i__7951__auto___8902 = G__8903;
continue;
} else {
}
break;
}

var G__8900 = args8898.length;
switch (G__8900) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8898.length)].join('')));

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

var G__8905 = (i + (1));
i = G__8905;
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
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core.node[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$);
} else {
var m__7506__auto____$1 = (hoplon.core.node["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$);
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
return hoplon.core.$text.call(null,[cljs.core.str(this$)].join(''));
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
var new$__$1 = cljs.core.mapv.call(null,hoplon.core.__GT_node,cljs.core.reduce.call(null,(function (p1__8909_SHARP_,p2__8908_SHARP_){
if((p2__8908_SHARP_ == null)){
return p1__8909_SHARP_;
} else {
return cljs.core.conj.call(null,p1__8909_SHARP_,p2__8908_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__8936 = new$__$1;
var vec__8938 = G__8936;
var seq__8939 = cljs.core.seq.call(null,vec__8938);
var first__8940 = cljs.core.first.call(null,seq__8939);
var seq__8939__$1 = cljs.core.next.call(null,seq__8939);
var x = first__8940;
var xs = seq__8939__$1;
var G__8937 = hoplon.core.child_vec.call(null,this$);
var vec__8941 = G__8937;
var seq__8942 = cljs.core.seq.call(null,vec__8941);
var first__8943 = cljs.core.first.call(null,seq__8942);
var seq__8942__$1 = cljs.core.next.call(null,seq__8942);
var k = first__8943;
var ks = seq__8942__$1;
var kids = vec__8941;
var G__8936__$1 = G__8936;
var G__8937__$1 = G__8937;
while(true){
var vec__8944 = G__8936__$1;
var seq__8945 = cljs.core.seq.call(null,vec__8944);
var first__8946 = cljs.core.first.call(null,seq__8945);
var seq__8945__$1 = cljs.core.next.call(null,seq__8945);
var x__$1 = first__8946;
var xs__$1 = seq__8945__$1;
var vec__8947 = G__8937__$1;
var seq__8948 = cljs.core.seq.call(null,vec__8947);
var first__8949 = cljs.core.first.call(null,seq__8948);
var seq__8948__$1 = cljs.core.next.call(null,seq__8948);
var k__$1 = first__8949;
var ks__$1 = seq__8948__$1;
var kids__$1 = vec__8947;
if(cljs.core.truth_((function (){var or__6842__auto__ = x__$1;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return k__$1;
}
})())){
var G__8950 = xs__$1;
var G__8951 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
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
G__8936__$1 = G__8950;
G__8937__$1 = G__8951;
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
var kids_8952 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_8952;

hoplon.core.do_watch.call(null,kids_8952,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
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

var kids_8955 = kidfn.call(null,parent);
var i_8956 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_8955));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,child__$1))){
hoplon.core.do_watch.call(null,child__$1,((function (kids_8955,i_8956,child__$1){
return (function (p1__8954_SHARP_,p2__8953_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_8955,cljs.core.assoc,i_8956,p2__8953_SHARP_);
});})(kids_8955,i_8956,child__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_8955,cljs.core.assoc,i_8956,child__$1);
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

if(cljs.core.truth_((function (){var and__6830__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.not.call(null,javelin.core.cell_QMARK_.call(null,child));
} else {
return and__6830__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__6830__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__6830__auto__)){
return javelin.core.cell_QMARK_.call(null,child);
} else {
return and__6830__auto__;
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
return (function (p1__8957_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__8957_SHARP_));
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
return (function (p1__8958_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__8958_SHARP_));
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
return (function (p1__8959_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8959_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8960 = cljs.core.keyword.call(null,k);
var attr_8961 = attrfn.call(null,this$__$1);
var has_QMARK__8962 = (function (){var and__6830__auto__ = attr_8961;
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_8961),kk_8960);
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8962)){
cljs.core.swap_BANG_.call(null,attr_8961,cljs.core.assoc,kk_8960,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__8963_SHARP_){
return p1__8963_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__8964_SHARP_){
return p1__8964_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__8965_SHARP_){
return p1__8965_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__8966_SHARP_){
return p1__8966_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,kvs);
} else {
var m__7506__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,kvs);
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
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,kvs);
} else {
var m__7506__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,kvs);
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
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,child);
} else {
var m__7506__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,child);
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
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,child);
} else {
var m__7506__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,child);
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
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,new$,existing);
} else {
var m__7506__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,new$,existing);
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
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,new$,existing);
} else {
var m__7506__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args8967 = [];
var len__7950__auto___8974 = arguments.length;
var i__7951__auto___8975 = (0);
while(true){
if((i__7951__auto___8975 < len__7950__auto___8974)){
args8967.push((arguments[i__7951__auto___8975]));

var G__8976 = (i__7951__auto___8975 + (1));
i__7951__auto___8975 = G__8976;
continue;
} else {
}
break;
}

var G__8973 = args8967.length;
switch (G__8973) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args8967.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq8968){
var G__8969 = cljs.core.first.call(null,seq8968);
var seq8968__$1 = cljs.core.next.call(null,seq8968);
var G__8970 = cljs.core.first.call(null,seq8968__$1);
var seq8968__$2 = cljs.core.next.call(null,seq8968__$1);
var G__8971 = cljs.core.first.call(null,seq8968__$2);
var seq8968__$3 = cljs.core.next.call(null,seq8968__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8969,G__8970,G__8971,seq8968__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args8978 = [];
var len__7950__auto___8985 = arguments.length;
var i__7951__auto___8986 = (0);
while(true){
if((i__7951__auto___8986 < len__7950__auto___8985)){
args8978.push((arguments[i__7951__auto___8986]));

var G__8987 = (i__7951__auto___8986 + (1));
i__7951__auto___8986 = G__8987;
continue;
} else {
}
break;
}

var G__8984 = args8978.length;
switch (G__8984) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args8978.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq8979){
var G__8980 = cljs.core.first.call(null,seq8979);
var seq8979__$1 = cljs.core.next.call(null,seq8979);
var G__8981 = cljs.core.first.call(null,seq8979__$1);
var seq8979__$2 = cljs.core.next.call(null,seq8979__$1);
var G__8982 = cljs.core.first.call(null,seq8979__$2);
var seq8979__$3 = cljs.core.next.call(null,seq8979__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8980,G__8981,G__8982,seq8979__$3);
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
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,elem,value);
} else {
var m__7506__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,elem,value);
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
return (function (p1__8992_SHARP_,p2__8991_SHARP_){
return hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__8991_SHARP_);
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
hoplon.core._head_STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__8993_SHARP_){
return p1__8993_SHARP_.head;
}):(function (p1__8994_SHARP_){
return p1__8994_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8995_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__8995_SHARP_);
}catch (e8996){if((e8996 instanceof Error)){
var _ = e8996;
return null;
} else {
throw e8996;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8997_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__8997_SHARP_);
}catch (e8998){if((e8998 instanceof Error)){
var _ = e8998;
return null;
} else {
throw e8998;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args8999 = [];
var len__7950__auto___9003 = arguments.length;
var i__7951__auto___9004 = (0);
while(true){
if((i__7951__auto___9004 < len__7950__auto___9003)){
args8999.push((arguments[i__7951__auto___9004]));

var G__9005 = (i__7951__auto___9004 + (1));
i__7951__auto___9004 = G__9005;
continue;
} else {
}
break;
}

var G__9001 = args8999.length;
switch (G__9001) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8999.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e9002){if((e9002 instanceof Error)){
var _ = e9002;
return not_found;
} else {
throw e9002;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args9007 = [];
var len__7950__auto___9010 = arguments.length;
var i__7951__auto___9011 = (0);
while(true){
if((i__7951__auto___9011 < len__7950__auto___9010)){
args9007.push((arguments[i__7951__auto___9011]));

var G__9012 = (i__7951__auto___9011 + (1));
i__7951__auto___9011 = G__9012;
continue;
} else {
}
break;
}

var G__9009 = args9007.length;
switch (G__9009) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9007.length)].join('')));

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
var seq__9026_9030 = cljs.core.seq.call(null,goog.object.get(this$,"_hoplonWhenDom"));
var chunk__9027_9031 = null;
var count__9028_9032 = (0);
var i__9029_9033 = (0);
while(true){
if((i__9029_9033 < count__9028_9032)){
var f_9034__$1 = cljs.core._nth.call(null,chunk__9027_9031,i__9029_9033);
f_9034__$1.call(null);

var G__9035 = seq__9026_9030;
var G__9036 = chunk__9027_9031;
var G__9037 = count__9028_9032;
var G__9038 = (i__9029_9033 + (1));
seq__9026_9030 = G__9035;
chunk__9027_9031 = G__9036;
count__9028_9032 = G__9037;
i__9029_9033 = G__9038;
continue;
} else {
var temp__4657__auto___9039 = cljs.core.seq.call(null,seq__9026_9030);
if(temp__4657__auto___9039){
var seq__9026_9040__$1 = temp__4657__auto___9039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9026_9040__$1)){
var c__7656__auto___9041 = cljs.core.chunk_first.call(null,seq__9026_9040__$1);
var G__9042 = cljs.core.chunk_rest.call(null,seq__9026_9040__$1);
var G__9043 = c__7656__auto___9041;
var G__9044 = cljs.core.count.call(null,c__7656__auto___9041);
var G__9045 = (0);
seq__9026_9030 = G__9042;
chunk__9027_9031 = G__9043;
count__9028_9032 = G__9044;
i__9029_9033 = G__9045;
continue;
} else {
var f_9046__$1 = cljs.core.first.call(null,seq__9026_9040__$1);
f_9046__$1.call(null);

var G__9047 = cljs.core.next.call(null,seq__9026_9040__$1);
var G__9048 = null;
var G__9049 = (0);
var G__9050 = (0);
seq__9026_9030 = G__9047;
chunk__9027_9031 = G__9048;
count__9028_9032 = G__9049;
i__9029_9033 = G__9050;
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
var G__9067 = args;
var vec__9068 = G__9067;
var seq__9069 = cljs.core.seq.call(null,vec__9068);
var first__9070 = cljs.core.first.call(null,seq__9069);
var seq__9069__$1 = cljs.core.next.call(null,seq__9069);
var arg = first__9070;
var args__$1 = seq__9069__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__9067__$1 = G__9067;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__9071 = G__9067__$1;
var seq__9072 = cljs.core.seq.call(null,vec__9071);
var first__9073 = cljs.core.first.call(null,seq__9072);
var seq__9072__$1 = cljs.core.next.call(null,seq__9072);
var arg__$1 = first__9073;
var args__$2 = seq__9072__$1;
if(cljs.core.not.call(null,(function (){var or__6842__auto__ = arg__$1;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__9074 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__9067__$1,attr__$2,kids__$2,vec__9071,seq__9072,first__9073,seq__9072__$1,arg__$1,args__$2,attr,kids,G__9067,vec__9068,seq__9069,first__9070,seq__9069__$1,arg,args__$1){
return (function (p1__9051_SHARP_,p2__9052_SHARP_,p3__9053_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__9051_SHARP_,p2__9052_SHARP_,p3__9053_SHARP_);
});})(attr__$1,kids__$1,G__9067__$1,attr__$2,kids__$2,vec__9071,seq__9072,first__9073,seq__9072__$1,arg__$1,args__$2,attr,kids,G__9067,vec__9068,seq__9069,first__9070,seq__9069__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__9075 = kids__$2;
var G__9076 = args__$2;
attr__$1 = G__9074;
kids__$1 = G__9075;
G__9067__$1 = G__9076;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__9077 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__9078 = kids__$2;
var G__9079 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__9077;
kids__$1 = G__9078;
G__9067__$1 = G__9079;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__9080 = attr__$2;
var G__9081 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__9082 = args__$2;
attr__$1 = G__9080;
kids__$1 = G__9081;
G__9067__$1 = G__9082;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__9083 = attr__$2;
var G__9084 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__9085 = args__$2;
attr__$1 = G__9083;
kids__$1 = G__9084;
G__9067__$1 = G__9085;
continue;
} else {
var G__9086 = attr__$2;
var G__9087 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__9088 = args__$2;
attr__$1 = G__9086;
kids__$1 = G__9087;
G__9067__$1 = G__9088;
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
return cljs.core.reduce_kv.call(null,(function (p1__9090_SHARP_,p2__9089_SHARP_,p3__9091_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__9089_SHARP_,p1__9090_SHARP_,p3__9091_SHARP_);

return p1__9090_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__9092){
var vec__9100 = p__9092;
var seq__9101 = cljs.core.seq.call(null,vec__9100);
var first__9102 = cljs.core.first.call(null,seq__9101);
var seq__9101__$1 = cljs.core.next.call(null,seq__9101);
var child_cell = first__9102;
var _ = seq__9101__$1;
var kids = vec__9100;
var this$__$1 = this$;
var seq__9103_9107 = cljs.core.seq.call(null,hoplon.core.vflatten.call(null,kids));
var chunk__9104_9108 = null;
var count__9105_9109 = (0);
var i__9106_9110 = (0);
while(true){
if((i__9106_9110 < count__9105_9109)){
var x_9111 = cljs.core._nth.call(null,chunk__9104_9108,i__9106_9110);
var temp__4657__auto___9112 = hoplon.core.__GT_node.call(null,x_9111);
if(cljs.core.truth_(temp__4657__auto___9112)){
var x_9113__$1 = temp__4657__auto___9112;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_9113__$1);
} else {
}

var G__9114 = seq__9103_9107;
var G__9115 = chunk__9104_9108;
var G__9116 = count__9105_9109;
var G__9117 = (i__9106_9110 + (1));
seq__9103_9107 = G__9114;
chunk__9104_9108 = G__9115;
count__9105_9109 = G__9116;
i__9106_9110 = G__9117;
continue;
} else {
var temp__4657__auto___9118 = cljs.core.seq.call(null,seq__9103_9107);
if(temp__4657__auto___9118){
var seq__9103_9119__$1 = temp__4657__auto___9118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9103_9119__$1)){
var c__7656__auto___9120 = cljs.core.chunk_first.call(null,seq__9103_9119__$1);
var G__9121 = cljs.core.chunk_rest.call(null,seq__9103_9119__$1);
var G__9122 = c__7656__auto___9120;
var G__9123 = cljs.core.count.call(null,c__7656__auto___9120);
var G__9124 = (0);
seq__9103_9107 = G__9121;
chunk__9104_9108 = G__9122;
count__9105_9109 = G__9123;
i__9106_9110 = G__9124;
continue;
} else {
var x_9125 = cljs.core.first.call(null,seq__9103_9119__$1);
var temp__4657__auto___9126__$1 = hoplon.core.__GT_node.call(null,x_9125);
if(cljs.core.truth_(temp__4657__auto___9126__$1)){
var x_9127__$1 = temp__4657__auto___9126__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_9127__$1);
} else {
}

var G__9128 = cljs.core.next.call(null,seq__9103_9119__$1);
var G__9129 = null;
var G__9130 = (0);
var G__9131 = (0);
seq__9103_9107 = G__9128;
chunk__9104_9108 = G__9129;
count__9105_9109 = G__9130;
i__9106_9110 = G__9131;
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
var G__9164__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__9133 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__9133,(0),null);
var kids = cljs.core.nth.call(null,vec__9133,(1),null);
var G__9136 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__9136,attr);

hoplon.core.add_children_BANG_.call(null,G__9136,kids);

return G__9136;
};
var G__9164 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__9165__i = 0, G__9165__a = new Array(arguments.length -  1);
while (G__9165__i < G__9165__a.length) {G__9165__a[G__9165__i] = arguments[G__9165__i + 1]; ++G__9165__i;}
  args = new cljs.core.IndexedSeq(G__9165__a,0);
} 
return G__9164__delegate.call(this,self__,args);};
G__9164.cljs$lang$maxFixedArity = 1;
G__9164.cljs$lang$applyTo = (function (arglist__9166){
var self__ = cljs.core.first(arglist__9166);
var args = cljs.core.rest(arglist__9166);
return G__9164__delegate(self__,args);
});
G__9164.cljs$core$IFn$_invoke$arity$variadic = G__9164__delegate;
return G__9164;
})()
;

Element.prototype.apply = (function (self__,args9132){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9132)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9167__delegate = function (args){
var this$ = this;
var vec__9137 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__9137,(0),null);
var kids = cljs.core.nth.call(null,vec__9137,(1),null);
var G__9140 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__9140,attr);

hoplon.core.add_children_BANG_.call(null,G__9140,kids);

return G__9140;
};
var G__9167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9168__i = 0, G__9168__a = new Array(arguments.length -  0);
while (G__9168__i < G__9168__a.length) {G__9168__a[G__9168__i] = arguments[G__9168__i + 0]; ++G__9168__i;}
  args = new cljs.core.IndexedSeq(G__9168__a,0);
} 
return G__9167__delegate.call(this,args);};
G__9167.cljs$lang$maxFixedArity = 0;
G__9167.cljs$lang$applyTo = (function (arglist__9169){
var args = cljs.core.seq(arglist__9169);
return G__9167__delegate(args);
});
G__9167.cljs$core$IFn$_invoke$arity$variadic = G__9167__delegate;
return G__9167;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__9141 = cljs.core.seq.call(null,kvs);
var chunk__9143 = null;
var count__9144 = (0);
var i__9145 = (0);
while(true){
if((i__9145 < count__9144)){
var vec__9147 = cljs.core._nth.call(null,chunk__9143,i__9145);
var k = cljs.core.nth.call(null,vec__9147,(0),null);
var v = cljs.core.nth.call(null,vec__9147,(1),null);
var k_9170__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_9170__$1);
} else {
e.setAttribute(k_9170__$1,((cljs.core._EQ_.call(null,true,v))?k_9170__$1:v));
}

var G__9171 = seq__9141;
var G__9172 = chunk__9143;
var G__9173 = count__9144;
var G__9174 = (i__9145 + (1));
seq__9141 = G__9171;
chunk__9143 = G__9172;
count__9144 = G__9173;
i__9145 = G__9174;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9141);
if(temp__4657__auto__){
var seq__9141__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9141__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9141__$1);
var G__9175 = cljs.core.chunk_rest.call(null,seq__9141__$1);
var G__9176 = c__7656__auto__;
var G__9177 = cljs.core.count.call(null,c__7656__auto__);
var G__9178 = (0);
seq__9141 = G__9175;
chunk__9143 = G__9176;
count__9144 = G__9177;
i__9145 = G__9178;
continue;
} else {
var vec__9150 = cljs.core.first.call(null,seq__9141__$1);
var k = cljs.core.nth.call(null,vec__9150,(0),null);
var v = cljs.core.nth.call(null,vec__9150,(1),null);
var k_9179__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_9179__$1);
} else {
e.setAttribute(k_9179__$1,((cljs.core._EQ_.call(null,true,v))?k_9179__$1:v));
}

var G__9180 = cljs.core.next.call(null,seq__9141__$1);
var G__9181 = null;
var G__9182 = (0);
var G__9183 = (0);
seq__9141 = G__9180;
chunk__9143 = G__9181;
count__9144 = G__9182;
i__9145 = G__9183;
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
var seq__9153 = cljs.core.seq.call(null,kvs);
var chunk__9154 = null;
var count__9155 = (0);
var i__9156 = (0);
while(true){
if((i__9156 < count__9155)){
var vec__9157 = cljs.core._nth.call(null,chunk__9154,i__9156);
var k = cljs.core.nth.call(null,vec__9157,(0),null);
var v = cljs.core.nth.call(null,vec__9157,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9184 = seq__9153;
var G__9185 = chunk__9154;
var G__9186 = count__9155;
var G__9187 = (i__9156 + (1));
seq__9153 = G__9184;
chunk__9154 = G__9185;
count__9155 = G__9186;
i__9156 = G__9187;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9153);
if(temp__4657__auto__){
var seq__9153__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9153__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9153__$1);
var G__9188 = cljs.core.chunk_rest.call(null,seq__9153__$1);
var G__9189 = c__7656__auto__;
var G__9190 = cljs.core.count.call(null,c__7656__auto__);
var G__9191 = (0);
seq__9153 = G__9188;
chunk__9154 = G__9189;
count__9155 = G__9190;
i__9156 = G__9191;
continue;
} else {
var vec__9160 = cljs.core.first.call(null,seq__9153__$1);
var k = cljs.core.nth.call(null,vec__9160,(0),null);
var v = cljs.core.nth.call(null,vec__9160,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9192 = cljs.core.next.call(null,seq__9153__$1);
var G__9193 = null;
var G__9194 = (0);
var G__9195 = (0);
seq__9153 = G__9192;
chunk__9154 = G__9193;
count__9155 = G__9194;
i__9156 = G__9195;
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
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e9163){if((e9163 instanceof Error)){
var _ = e9163;
return null;
} else {
throw e9163;

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
var G__9202__delegate = function (args){
var vec__9199 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__9199,(0),null);
var kids = cljs.core.nth.call(null,vec__9199,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__9202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9203__i = 0, G__9203__a = new Array(arguments.length -  0);
while (G__9203__i < G__9203__a.length) {G__9203__a[G__9203__i] = arguments[G__9203__i + 0]; ++G__9203__i;}
  args = new cljs.core.IndexedSeq(G__9203__a,0);
} 
return G__9202__delegate.call(this,args);};
G__9202.cljs$lang$maxFixedArity = 0;
G__9202.cljs$lang$applyTo = (function (arglist__9204){
var args = cljs.core.seq(arglist__9204);
return G__9202__delegate(args);
});
G__9202.cljs$core$IFn$_invoke$arity$variadic = G__9202__delegate;
return G__9202;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__9208__delegate = function (rest__9205_SHARP_){
return cljs.core.apply.call(null,document.createElement(tag),rest__9205_SHARP_);
};
var G__9208 = function (var_args){
var rest__9205_SHARP_ = null;
if (arguments.length > 0) {
var G__9209__i = 0, G__9209__a = new Array(arguments.length -  0);
while (G__9209__i < G__9209__a.length) {G__9209__a[G__9209__i] = arguments[G__9209__i + 0]; ++G__9209__i;}
  rest__9205_SHARP_ = new cljs.core.IndexedSeq(G__9209__a,0);
} 
return G__9208__delegate.call(this,rest__9205_SHARP_);};
G__9208.cljs$lang$maxFixedArity = 0;
G__9208.cljs$lang$applyTo = (function (arglist__9210){
var rest__9205_SHARP_ = cljs.core.seq(arglist__9210);
return G__9208__delegate(rest__9205_SHARP_);
});
G__9208.cljs$core$IFn$_invoke$arity$variadic = G__9208__delegate;
return G__9208;
})()
;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__9211__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e9207){if((e9207 instanceof Error)){
var _ = e9207;
return cljs.core.apply.call(null,hoplon.core.make_elem_ctor.call(null,"div"),args);
} else {
throw e9207;

}
}};
var G__9211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9212__i = 0, G__9212__a = new Array(arguments.length -  0);
while (G__9212__i < G__9212__a.length) {G__9212__a[G__9212__i] = arguments[G__9212__i + 0]; ++G__9212__i;}
  args = new cljs.core.IndexedSeq(G__9212__a,0);
} 
return G__9211__delegate.call(this,args);};
G__9211.cljs$lang$maxFixedArity = 0;
G__9211.cljs$lang$applyTo = (function (arglist__9213){
var args = cljs.core.seq(arglist__9213);
return G__9211__delegate(args);
});
G__9211.cljs$core$IFn$_invoke$arity$variadic = G__9211__delegate;
return G__9211;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9215 = arguments.length;
var i__7951__auto___9216 = (0);
while(true){
if((i__7951__auto___9216 < len__7950__auto___9215)){
args__7957__auto__.push((arguments[i__7951__auto___9216]));

var G__9217 = (i__7951__auto___9216 + (1));
i__7951__auto___9216 = G__9217;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_.call(null,document.documentElement,cljs.core.nth.call(null,hoplon.core.parse_args.call(null,args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq9214){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9214));
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
hoplon.core.$text = (function hoplon$core$$text(p1__9218_SHARP_){
return document.createTextNode(p1__9218_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__9219_SHARP_){
return document.createComment(p1__9219_SHARP_);
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
return document.body.addEventListener("submit",(function (p1__9220_SHARP_){
var e = p1__9220_SHARP_.target;
if(cljs.core.truth_((function (){var or__6842__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__9220_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7771__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7772__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7774__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7774__auto__,method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
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
hoplon.core.on_BANG_ = (function (){var method_table__7770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7771__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7772__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7774__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7774__auto__,method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__));
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
return (function (G__9232,G__9233){
return G__9232.call(null,G__9233);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__9221_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__9236,G__9235,G__9234){
return G__9234.call(null,G__9235,G__9236);
});})(on_deck,items_seq))
).call(null,p1__9221_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__9222_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__9222_SHARP_));
cljs.core.swap_BANG_.call(null,p1__9222_SHARP_,cljs.core.rest);

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
var seq__9237 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__9238 = null;
var count__9239 = (0);
var i__9240 = (0);
while(true){
if((i__9240 < count__9239)){
var i = cljs.core._nth.call(null,chunk__9238,i__9240);
var e_9241 = (function (){var or__6842__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9241);

var G__9242 = seq__9237;
var G__9243 = chunk__9238;
var G__9244 = count__9239;
var G__9245 = (i__9240 + (1));
seq__9237 = G__9242;
chunk__9238 = G__9243;
count__9239 = G__9244;
i__9240 = G__9245;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9237);
if(temp__4657__auto__){
var seq__9237__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9237__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9237__$1);
var G__9246 = cljs.core.chunk_rest.call(null,seq__9237__$1);
var G__9247 = c__7656__auto__;
var G__9248 = cljs.core.count.call(null,c__7656__auto__);
var G__9249 = (0);
seq__9237 = G__9246;
chunk__9238 = G__9247;
count__9239 = G__9248;
i__9240 = G__9249;
continue;
} else {
var i = cljs.core.first.call(null,seq__9237__$1);
var e_9250 = (function (){var or__6842__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9250);

var G__9251 = cljs.core.next.call(null,seq__9237__$1);
var G__9252 = null;
var G__9253 = (0);
var G__9254 = (0);
seq__9237 = G__9251;
chunk__9238 = G__9252;
count__9239 = G__9253;
i__9240 = G__9254;
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
var n__7760__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__7760__auto__)){
var e_9255 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_9255);

var G__9256 = (_ + (1));
_ = G__9256;
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
var args__7957__auto__ = [];
var len__7950__auto___9265 = arguments.length;
var i__7951__auto___9266 = (0);
while(true){
if((i__7951__auto___9266 < len__7950__auto___9265)){
args__7957__auto__.push((arguments[i__7951__auto___9266]));

var G__9267 = (i__7951__auto___9266 + (1));
i__7951__auto___9266 = G__9267;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__9258){
var vec__9259 = p__9258;
var default$ = cljs.core.nth.call(null,vec__9259,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__9259,default$){
return (function (G__9262,G__9264,G__9263){
var or__6842__auto__ = (function (){var and__6830__auto__ = G__9262.call(null,G__9263);
if(cljs.core.truth_(and__6830__auto__)){
return G__9263;
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return G__9264;
}
});})(c,vec__9259,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__9259,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__9259,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq9257){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9257));
});


//# sourceMappingURL=core.js.map