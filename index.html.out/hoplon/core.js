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
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__8876_SHARP_,p2__8877_SHARP_){
return cljs.core.assoc.call(null,p1__8876_SHARP_,p2__8877_SHARP_.getAttribute("static-id"),p2__8877_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args8878 = [];
var len__7950__auto___8881 = arguments.length;
var i__7951__auto___8882 = (0);
while(true){
if((i__7951__auto___8882 < len__7950__auto___8881)){
args8878.push((arguments[i__7951__auto___8882]));

var G__8883 = (i__7951__auto___8882 + (1));
i__7951__auto___8882 = G__8883;
continue;
} else {
}
break;
}

var G__8880 = args8878.length;
switch (G__8880) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8878.length)].join('')));

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
var vec__8891 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__8892 = cljs.core.seq.call(null,vec__8891);
var first__8893 = cljs.core.first.call(null,seq__8892);
var seq__8892__$1 = cljs.core.next.call(null,seq__8892);
var f = first__8893;
var more = seq__8892__$1;
var vec__8894 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__8894,(0),null);
var f2 = cljs.core.nth.call(null,vec__8894,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("fb121e7da3084c56b8d83614dcdd8f50")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__8897_SHARP_){
return cljs.core.zipmap.call(null,p1__8897_SHARP_,cljs.core.repeat.call(null,true));
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
var G__8898 = (i + (1));
var G__8899 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__8898;
ret = G__8899;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args8900 = [];
var len__7950__auto___8903 = arguments.length;
var i__7951__auto___8904 = (0);
while(true){
if((i__7951__auto___8904 < len__7950__auto___8903)){
args8900.push((arguments[i__7951__auto___8904]));

var G__8905 = (i__7951__auto___8904 + (1));
i__7951__auto___8904 = G__8905;
continue;
} else {
}
break;
}

var G__8902 = args8900.length;
switch (G__8902) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8900.length)].join('')));

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

var G__8907 = (i + (1));
i = G__8907;
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
var new$__$1 = cljs.core.mapv.call(null,hoplon.core.__GT_node,cljs.core.reduce.call(null,(function (p1__8911_SHARP_,p2__8910_SHARP_){
if((p2__8910_SHARP_ == null)){
return p1__8911_SHARP_;
} else {
return cljs.core.conj.call(null,p1__8911_SHARP_,p2__8910_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__8938 = new$__$1;
var vec__8940 = G__8938;
var seq__8941 = cljs.core.seq.call(null,vec__8940);
var first__8942 = cljs.core.first.call(null,seq__8941);
var seq__8941__$1 = cljs.core.next.call(null,seq__8941);
var x = first__8942;
var xs = seq__8941__$1;
var G__8939 = hoplon.core.child_vec.call(null,this$);
var vec__8943 = G__8939;
var seq__8944 = cljs.core.seq.call(null,vec__8943);
var first__8945 = cljs.core.first.call(null,seq__8944);
var seq__8944__$1 = cljs.core.next.call(null,seq__8944);
var k = first__8945;
var ks = seq__8944__$1;
var kids = vec__8943;
var G__8938__$1 = G__8938;
var G__8939__$1 = G__8939;
while(true){
var vec__8946 = G__8938__$1;
var seq__8947 = cljs.core.seq.call(null,vec__8946);
var first__8948 = cljs.core.first.call(null,seq__8947);
var seq__8947__$1 = cljs.core.next.call(null,seq__8947);
var x__$1 = first__8948;
var xs__$1 = seq__8947__$1;
var vec__8949 = G__8939__$1;
var seq__8950 = cljs.core.seq.call(null,vec__8949);
var first__8951 = cljs.core.first.call(null,seq__8950);
var seq__8950__$1 = cljs.core.next.call(null,seq__8950);
var k__$1 = first__8951;
var ks__$1 = seq__8950__$1;
var kids__$1 = vec__8949;
if(cljs.core.truth_((function (){var or__6842__auto__ = x__$1;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return k__$1;
}
})())){
var G__8952 = xs__$1;
var G__8953 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
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
G__8938__$1 = G__8952;
G__8939__$1 = G__8953;
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
var kids_8954 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_8954;

hoplon.core.do_watch.call(null,kids_8954,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
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

var kids_8957 = kidfn.call(null,parent);
var i_8958 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_8957));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,child__$1))){
hoplon.core.do_watch.call(null,child__$1,((function (kids_8957,i_8958,child__$1){
return (function (p1__8956_SHARP_,p2__8955_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_8957,cljs.core.assoc,i_8958,p2__8955_SHARP_);
});})(kids_8957,i_8958,child__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_8957,cljs.core.assoc,i_8958,child__$1);
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
return (function (p1__8959_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__8959_SHARP_));
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
return (function (p1__8960_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__8960_SHARP_));
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
return (function (p1__8961_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8961_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8962 = cljs.core.keyword.call(null,k);
var attr_8963 = attrfn.call(null,this$__$1);
var has_QMARK__8964 = (function (){var and__6830__auto__ = attr_8963;
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_8963),kk_8962);
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8964)){
cljs.core.swap_BANG_.call(null,attr_8963,cljs.core.assoc,kk_8962,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__8965_SHARP_){
return p1__8965_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__8966_SHARP_){
return p1__8966_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__8967_SHARP_){
return p1__8967_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__8968_SHARP_){
return p1__8968_SHARP_.hoplonKids;
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
var args8969 = [];
var len__7950__auto___8976 = arguments.length;
var i__7951__auto___8977 = (0);
while(true){
if((i__7951__auto___8977 < len__7950__auto___8976)){
args8969.push((arguments[i__7951__auto___8977]));

var G__8978 = (i__7951__auto___8977 + (1));
i__7951__auto___8977 = G__8978;
continue;
} else {
}
break;
}

var G__8975 = args8969.length;
switch (G__8975) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args8969.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq8970){
var G__8971 = cljs.core.first.call(null,seq8970);
var seq8970__$1 = cljs.core.next.call(null,seq8970);
var G__8972 = cljs.core.first.call(null,seq8970__$1);
var seq8970__$2 = cljs.core.next.call(null,seq8970__$1);
var G__8973 = cljs.core.first.call(null,seq8970__$2);
var seq8970__$3 = cljs.core.next.call(null,seq8970__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8971,G__8972,G__8973,seq8970__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args8980 = [];
var len__7950__auto___8987 = arguments.length;
var i__7951__auto___8988 = (0);
while(true){
if((i__7951__auto___8988 < len__7950__auto___8987)){
args8980.push((arguments[i__7951__auto___8988]));

var G__8989 = (i__7951__auto___8988 + (1));
i__7951__auto___8988 = G__8989;
continue;
} else {
}
break;
}

var G__8986 = args8980.length;
switch (G__8986) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args8980.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq8981){
var G__8982 = cljs.core.first.call(null,seq8981);
var seq8981__$1 = cljs.core.next.call(null,seq8981);
var G__8983 = cljs.core.first.call(null,seq8981__$1);
var seq8981__$2 = cljs.core.next.call(null,seq8981__$1);
var G__8984 = cljs.core.first.call(null,seq8981__$2);
var seq8981__$3 = cljs.core.next.call(null,seq8981__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8982,G__8983,G__8984,seq8981__$3);
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
return (function (p1__8994_SHARP_,p2__8993_SHARP_){
return hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__8993_SHARP_);
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
hoplon.core._head_STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__8995_SHARP_){
return p1__8995_SHARP_.head;
}):(function (p1__8996_SHARP_){
return p1__8996_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8997_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__8997_SHARP_);
}catch (e8998){if((e8998 instanceof Error)){
var _ = e8998;
return null;
} else {
throw e8998;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8999_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__8999_SHARP_);
}catch (e9000){if((e9000 instanceof Error)){
var _ = e9000;
return null;
} else {
throw e9000;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args9001 = [];
var len__7950__auto___9005 = arguments.length;
var i__7951__auto___9006 = (0);
while(true){
if((i__7951__auto___9006 < len__7950__auto___9005)){
args9001.push((arguments[i__7951__auto___9006]));

var G__9007 = (i__7951__auto___9006 + (1));
i__7951__auto___9006 = G__9007;
continue;
} else {
}
break;
}

var G__9003 = args9001.length;
switch (G__9003) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9001.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e9004){if((e9004 instanceof Error)){
var _ = e9004;
return not_found;
} else {
throw e9004;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args9009 = [];
var len__7950__auto___9012 = arguments.length;
var i__7951__auto___9013 = (0);
while(true){
if((i__7951__auto___9013 < len__7950__auto___9012)){
args9009.push((arguments[i__7951__auto___9013]));

var G__9014 = (i__7951__auto___9013 + (1));
i__7951__auto___9013 = G__9014;
continue;
} else {
}
break;
}

var G__9011 = args9009.length;
switch (G__9011) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9009.length)].join('')));

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
var seq__9028_9032 = cljs.core.seq.call(null,goog.object.get(this$,"_hoplonWhenDom"));
var chunk__9029_9033 = null;
var count__9030_9034 = (0);
var i__9031_9035 = (0);
while(true){
if((i__9031_9035 < count__9030_9034)){
var f_9036__$1 = cljs.core._nth.call(null,chunk__9029_9033,i__9031_9035);
f_9036__$1.call(null);

var G__9037 = seq__9028_9032;
var G__9038 = chunk__9029_9033;
var G__9039 = count__9030_9034;
var G__9040 = (i__9031_9035 + (1));
seq__9028_9032 = G__9037;
chunk__9029_9033 = G__9038;
count__9030_9034 = G__9039;
i__9031_9035 = G__9040;
continue;
} else {
var temp__4657__auto___9041 = cljs.core.seq.call(null,seq__9028_9032);
if(temp__4657__auto___9041){
var seq__9028_9042__$1 = temp__4657__auto___9041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9028_9042__$1)){
var c__7656__auto___9043 = cljs.core.chunk_first.call(null,seq__9028_9042__$1);
var G__9044 = cljs.core.chunk_rest.call(null,seq__9028_9042__$1);
var G__9045 = c__7656__auto___9043;
var G__9046 = cljs.core.count.call(null,c__7656__auto___9043);
var G__9047 = (0);
seq__9028_9032 = G__9044;
chunk__9029_9033 = G__9045;
count__9030_9034 = G__9046;
i__9031_9035 = G__9047;
continue;
} else {
var f_9048__$1 = cljs.core.first.call(null,seq__9028_9042__$1);
f_9048__$1.call(null);

var G__9049 = cljs.core.next.call(null,seq__9028_9042__$1);
var G__9050 = null;
var G__9051 = (0);
var G__9052 = (0);
seq__9028_9032 = G__9049;
chunk__9029_9033 = G__9050;
count__9030_9034 = G__9051;
i__9031_9035 = G__9052;
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
var G__9069 = args;
var vec__9070 = G__9069;
var seq__9071 = cljs.core.seq.call(null,vec__9070);
var first__9072 = cljs.core.first.call(null,seq__9071);
var seq__9071__$1 = cljs.core.next.call(null,seq__9071);
var arg = first__9072;
var args__$1 = seq__9071__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__9069__$1 = G__9069;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__9073 = G__9069__$1;
var seq__9074 = cljs.core.seq.call(null,vec__9073);
var first__9075 = cljs.core.first.call(null,seq__9074);
var seq__9074__$1 = cljs.core.next.call(null,seq__9074);
var arg__$1 = first__9075;
var args__$2 = seq__9074__$1;
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
var G__9076 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__9069__$1,attr__$2,kids__$2,vec__9073,seq__9074,first__9075,seq__9074__$1,arg__$1,args__$2,attr,kids,G__9069,vec__9070,seq__9071,first__9072,seq__9071__$1,arg,args__$1){
return (function (p1__9053_SHARP_,p2__9054_SHARP_,p3__9055_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__9053_SHARP_,p2__9054_SHARP_,p3__9055_SHARP_);
});})(attr__$1,kids__$1,G__9069__$1,attr__$2,kids__$2,vec__9073,seq__9074,first__9075,seq__9074__$1,arg__$1,args__$2,attr,kids,G__9069,vec__9070,seq__9071,first__9072,seq__9071__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__9077 = kids__$2;
var G__9078 = args__$2;
attr__$1 = G__9076;
kids__$1 = G__9077;
G__9069__$1 = G__9078;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__9079 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__9080 = kids__$2;
var G__9081 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__9079;
kids__$1 = G__9080;
G__9069__$1 = G__9081;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__9082 = attr__$2;
var G__9083 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__9084 = args__$2;
attr__$1 = G__9082;
kids__$1 = G__9083;
G__9069__$1 = G__9084;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__9085 = attr__$2;
var G__9086 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__9087 = args__$2;
attr__$1 = G__9085;
kids__$1 = G__9086;
G__9069__$1 = G__9087;
continue;
} else {
var G__9088 = attr__$2;
var G__9089 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__9090 = args__$2;
attr__$1 = G__9088;
kids__$1 = G__9089;
G__9069__$1 = G__9090;
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
return cljs.core.reduce_kv.call(null,(function (p1__9092_SHARP_,p2__9091_SHARP_,p3__9093_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__9091_SHARP_,p1__9092_SHARP_,p3__9093_SHARP_);

return p1__9092_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__9094){
var vec__9102 = p__9094;
var seq__9103 = cljs.core.seq.call(null,vec__9102);
var first__9104 = cljs.core.first.call(null,seq__9103);
var seq__9103__$1 = cljs.core.next.call(null,seq__9103);
var child_cell = first__9104;
var _ = seq__9103__$1;
var kids = vec__9102;
var this$__$1 = this$;
var seq__9105_9109 = cljs.core.seq.call(null,hoplon.core.vflatten.call(null,kids));
var chunk__9106_9110 = null;
var count__9107_9111 = (0);
var i__9108_9112 = (0);
while(true){
if((i__9108_9112 < count__9107_9111)){
var x_9113 = cljs.core._nth.call(null,chunk__9106_9110,i__9108_9112);
var temp__4657__auto___9114 = hoplon.core.__GT_node.call(null,x_9113);
if(cljs.core.truth_(temp__4657__auto___9114)){
var x_9115__$1 = temp__4657__auto___9114;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_9115__$1);
} else {
}

var G__9116 = seq__9105_9109;
var G__9117 = chunk__9106_9110;
var G__9118 = count__9107_9111;
var G__9119 = (i__9108_9112 + (1));
seq__9105_9109 = G__9116;
chunk__9106_9110 = G__9117;
count__9107_9111 = G__9118;
i__9108_9112 = G__9119;
continue;
} else {
var temp__4657__auto___9120 = cljs.core.seq.call(null,seq__9105_9109);
if(temp__4657__auto___9120){
var seq__9105_9121__$1 = temp__4657__auto___9120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9105_9121__$1)){
var c__7656__auto___9122 = cljs.core.chunk_first.call(null,seq__9105_9121__$1);
var G__9123 = cljs.core.chunk_rest.call(null,seq__9105_9121__$1);
var G__9124 = c__7656__auto___9122;
var G__9125 = cljs.core.count.call(null,c__7656__auto___9122);
var G__9126 = (0);
seq__9105_9109 = G__9123;
chunk__9106_9110 = G__9124;
count__9107_9111 = G__9125;
i__9108_9112 = G__9126;
continue;
} else {
var x_9127 = cljs.core.first.call(null,seq__9105_9121__$1);
var temp__4657__auto___9128__$1 = hoplon.core.__GT_node.call(null,x_9127);
if(cljs.core.truth_(temp__4657__auto___9128__$1)){
var x_9129__$1 = temp__4657__auto___9128__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_9129__$1);
} else {
}

var G__9130 = cljs.core.next.call(null,seq__9105_9121__$1);
var G__9131 = null;
var G__9132 = (0);
var G__9133 = (0);
seq__9105_9109 = G__9130;
chunk__9106_9110 = G__9131;
count__9107_9111 = G__9132;
i__9108_9112 = G__9133;
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
var G__9166__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__9135 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__9135,(0),null);
var kids = cljs.core.nth.call(null,vec__9135,(1),null);
var G__9138 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__9138,attr);

hoplon.core.add_children_BANG_.call(null,G__9138,kids);

return G__9138;
};
var G__9166 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__9167__i = 0, G__9167__a = new Array(arguments.length -  1);
while (G__9167__i < G__9167__a.length) {G__9167__a[G__9167__i] = arguments[G__9167__i + 1]; ++G__9167__i;}
  args = new cljs.core.IndexedSeq(G__9167__a,0);
} 
return G__9166__delegate.call(this,self__,args);};
G__9166.cljs$lang$maxFixedArity = 1;
G__9166.cljs$lang$applyTo = (function (arglist__9168){
var self__ = cljs.core.first(arglist__9168);
var args = cljs.core.rest(arglist__9168);
return G__9166__delegate(self__,args);
});
G__9166.cljs$core$IFn$_invoke$arity$variadic = G__9166__delegate;
return G__9166;
})()
;

Element.prototype.apply = (function (self__,args9134){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9134)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9169__delegate = function (args){
var this$ = this;
var vec__9139 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__9139,(0),null);
var kids = cljs.core.nth.call(null,vec__9139,(1),null);
var G__9142 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__9142,attr);

hoplon.core.add_children_BANG_.call(null,G__9142,kids);

return G__9142;
};
var G__9169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9170__i = 0, G__9170__a = new Array(arguments.length -  0);
while (G__9170__i < G__9170__a.length) {G__9170__a[G__9170__i] = arguments[G__9170__i + 0]; ++G__9170__i;}
  args = new cljs.core.IndexedSeq(G__9170__a,0);
} 
return G__9169__delegate.call(this,args);};
G__9169.cljs$lang$maxFixedArity = 0;
G__9169.cljs$lang$applyTo = (function (arglist__9171){
var args = cljs.core.seq(arglist__9171);
return G__9169__delegate(args);
});
G__9169.cljs$core$IFn$_invoke$arity$variadic = G__9169__delegate;
return G__9169;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__9143 = cljs.core.seq.call(null,kvs);
var chunk__9145 = null;
var count__9146 = (0);
var i__9147 = (0);
while(true){
if((i__9147 < count__9146)){
var vec__9149 = cljs.core._nth.call(null,chunk__9145,i__9147);
var k = cljs.core.nth.call(null,vec__9149,(0),null);
var v = cljs.core.nth.call(null,vec__9149,(1),null);
var k_9172__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_9172__$1);
} else {
e.setAttribute(k_9172__$1,((cljs.core._EQ_.call(null,true,v))?k_9172__$1:v));
}

var G__9173 = seq__9143;
var G__9174 = chunk__9145;
var G__9175 = count__9146;
var G__9176 = (i__9147 + (1));
seq__9143 = G__9173;
chunk__9145 = G__9174;
count__9146 = G__9175;
i__9147 = G__9176;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9143);
if(temp__4657__auto__){
var seq__9143__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9143__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9143__$1);
var G__9177 = cljs.core.chunk_rest.call(null,seq__9143__$1);
var G__9178 = c__7656__auto__;
var G__9179 = cljs.core.count.call(null,c__7656__auto__);
var G__9180 = (0);
seq__9143 = G__9177;
chunk__9145 = G__9178;
count__9146 = G__9179;
i__9147 = G__9180;
continue;
} else {
var vec__9152 = cljs.core.first.call(null,seq__9143__$1);
var k = cljs.core.nth.call(null,vec__9152,(0),null);
var v = cljs.core.nth.call(null,vec__9152,(1),null);
var k_9181__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_9181__$1);
} else {
e.setAttribute(k_9181__$1,((cljs.core._EQ_.call(null,true,v))?k_9181__$1:v));
}

var G__9182 = cljs.core.next.call(null,seq__9143__$1);
var G__9183 = null;
var G__9184 = (0);
var G__9185 = (0);
seq__9143 = G__9182;
chunk__9145 = G__9183;
count__9146 = G__9184;
i__9147 = G__9185;
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
var seq__9155 = cljs.core.seq.call(null,kvs);
var chunk__9156 = null;
var count__9157 = (0);
var i__9158 = (0);
while(true){
if((i__9158 < count__9157)){
var vec__9159 = cljs.core._nth.call(null,chunk__9156,i__9158);
var k = cljs.core.nth.call(null,vec__9159,(0),null);
var v = cljs.core.nth.call(null,vec__9159,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9186 = seq__9155;
var G__9187 = chunk__9156;
var G__9188 = count__9157;
var G__9189 = (i__9158 + (1));
seq__9155 = G__9186;
chunk__9156 = G__9187;
count__9157 = G__9188;
i__9158 = G__9189;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9155);
if(temp__4657__auto__){
var seq__9155__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9155__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9155__$1);
var G__9190 = cljs.core.chunk_rest.call(null,seq__9155__$1);
var G__9191 = c__7656__auto__;
var G__9192 = cljs.core.count.call(null,c__7656__auto__);
var G__9193 = (0);
seq__9155 = G__9190;
chunk__9156 = G__9191;
count__9157 = G__9192;
i__9158 = G__9193;
continue;
} else {
var vec__9162 = cljs.core.first.call(null,seq__9155__$1);
var k = cljs.core.nth.call(null,vec__9162,(0),null);
var v = cljs.core.nth.call(null,vec__9162,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9194 = cljs.core.next.call(null,seq__9155__$1);
var G__9195 = null;
var G__9196 = (0);
var G__9197 = (0);
seq__9155 = G__9194;
chunk__9156 = G__9195;
count__9157 = G__9196;
i__9158 = G__9197;
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
}catch (e9165){if((e9165 instanceof Error)){
var _ = e9165;
return null;
} else {
throw e9165;

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
var G__9204__delegate = function (args){
var vec__9201 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__9201,(0),null);
var kids = cljs.core.nth.call(null,vec__9201,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__9204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9205__i = 0, G__9205__a = new Array(arguments.length -  0);
while (G__9205__i < G__9205__a.length) {G__9205__a[G__9205__i] = arguments[G__9205__i + 0]; ++G__9205__i;}
  args = new cljs.core.IndexedSeq(G__9205__a,0);
} 
return G__9204__delegate.call(this,args);};
G__9204.cljs$lang$maxFixedArity = 0;
G__9204.cljs$lang$applyTo = (function (arglist__9206){
var args = cljs.core.seq(arglist__9206);
return G__9204__delegate(args);
});
G__9204.cljs$core$IFn$_invoke$arity$variadic = G__9204__delegate;
return G__9204;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__9210__delegate = function (rest__9207_SHARP_){
return cljs.core.apply.call(null,document.createElement(tag),rest__9207_SHARP_);
};
var G__9210 = function (var_args){
var rest__9207_SHARP_ = null;
if (arguments.length > 0) {
var G__9211__i = 0, G__9211__a = new Array(arguments.length -  0);
while (G__9211__i < G__9211__a.length) {G__9211__a[G__9211__i] = arguments[G__9211__i + 0]; ++G__9211__i;}
  rest__9207_SHARP_ = new cljs.core.IndexedSeq(G__9211__a,0);
} 
return G__9210__delegate.call(this,rest__9207_SHARP_);};
G__9210.cljs$lang$maxFixedArity = 0;
G__9210.cljs$lang$applyTo = (function (arglist__9212){
var rest__9207_SHARP_ = cljs.core.seq(arglist__9212);
return G__9210__delegate(rest__9207_SHARP_);
});
G__9210.cljs$core$IFn$_invoke$arity$variadic = G__9210__delegate;
return G__9210;
})()
;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__9213__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e9209){if((e9209 instanceof Error)){
var _ = e9209;
return cljs.core.apply.call(null,hoplon.core.make_elem_ctor.call(null,"div"),args);
} else {
throw e9209;

}
}};
var G__9213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9214__i = 0, G__9214__a = new Array(arguments.length -  0);
while (G__9214__i < G__9214__a.length) {G__9214__a[G__9214__i] = arguments[G__9214__i + 0]; ++G__9214__i;}
  args = new cljs.core.IndexedSeq(G__9214__a,0);
} 
return G__9213__delegate.call(this,args);};
G__9213.cljs$lang$maxFixedArity = 0;
G__9213.cljs$lang$applyTo = (function (arglist__9215){
var args = cljs.core.seq(arglist__9215);
return G__9213__delegate(args);
});
G__9213.cljs$core$IFn$_invoke$arity$variadic = G__9213__delegate;
return G__9213;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9217 = arguments.length;
var i__7951__auto___9218 = (0);
while(true){
if((i__7951__auto___9218 < len__7950__auto___9217)){
args__7957__auto__.push((arguments[i__7951__auto___9218]));

var G__9219 = (i__7951__auto___9218 + (1));
i__7951__auto___9218 = G__9219;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq9216){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9216));
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
hoplon.core.$text = (function hoplon$core$$text(p1__9220_SHARP_){
return document.createTextNode(p1__9220_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__9221_SHARP_){
return document.createComment(p1__9221_SHARP_);
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
return document.body.addEventListener("submit",(function (p1__9222_SHARP_){
var e = p1__9222_SHARP_.target;
if(cljs.core.truth_((function (){var or__6842__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__9222_SHARP_.preventDefault();
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
return (function (G__9234,G__9235){
return G__9234.call(null,G__9235);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__9223_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__9238,G__9237,G__9236){
return G__9236.call(null,G__9237,G__9238);
});})(on_deck,items_seq))
).call(null,p1__9223_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__9224_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__9224_SHARP_));
cljs.core.swap_BANG_.call(null,p1__9224_SHARP_,cljs.core.rest);

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
var seq__9239 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__9240 = null;
var count__9241 = (0);
var i__9242 = (0);
while(true){
if((i__9242 < count__9241)){
var i = cljs.core._nth.call(null,chunk__9240,i__9242);
var e_9243 = (function (){var or__6842__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9243);

var G__9244 = seq__9239;
var G__9245 = chunk__9240;
var G__9246 = count__9241;
var G__9247 = (i__9242 + (1));
seq__9239 = G__9244;
chunk__9240 = G__9245;
count__9241 = G__9246;
i__9242 = G__9247;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9239);
if(temp__4657__auto__){
var seq__9239__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9239__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9239__$1);
var G__9248 = cljs.core.chunk_rest.call(null,seq__9239__$1);
var G__9249 = c__7656__auto__;
var G__9250 = cljs.core.count.call(null,c__7656__auto__);
var G__9251 = (0);
seq__9239 = G__9248;
chunk__9240 = G__9249;
count__9241 = G__9250;
i__9242 = G__9251;
continue;
} else {
var i = cljs.core.first.call(null,seq__9239__$1);
var e_9252 = (function (){var or__6842__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9252);

var G__9253 = cljs.core.next.call(null,seq__9239__$1);
var G__9254 = null;
var G__9255 = (0);
var G__9256 = (0);
seq__9239 = G__9253;
chunk__9240 = G__9254;
count__9241 = G__9255;
i__9242 = G__9256;
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
var e_9257 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_9257);

var G__9258 = (_ + (1));
_ = G__9258;
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
var len__7950__auto___9267 = arguments.length;
var i__7951__auto___9268 = (0);
while(true){
if((i__7951__auto___9268 < len__7950__auto___9267)){
args__7957__auto__.push((arguments[i__7951__auto___9268]));

var G__9269 = (i__7951__auto___9268 + (1));
i__7951__auto___9268 = G__9269;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__9260){
var vec__9261 = p__9260;
var default$ = cljs.core.nth.call(null,vec__9261,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__9261,default$){
return (function (G__9264,G__9266,G__9265){
var or__6842__auto__ = (function (){var and__6830__auto__ = G__9264.call(null,G__9265);
if(cljs.core.truth_(and__6830__auto__)){
return G__9265;
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return G__9266;
}
});})(c,vec__9261,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__9261,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__9261,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq9259){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9259));
});


//# sourceMappingURL=core.js.map