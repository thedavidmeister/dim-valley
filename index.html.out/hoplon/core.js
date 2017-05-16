// Compiled by ClojureScript 1.9.521 {}
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
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__10007_SHARP_,p2__10008_SHARP_){
return cljs.core.assoc.call(null,p1__10007_SHARP_,p2__10008_SHARP_.getAttribute("static-id"),p2__10008_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args10009 = [];
var len__8981__auto___10012 = arguments.length;
var i__8982__auto___10013 = (0);
while(true){
if((i__8982__auto___10013 < len__8981__auto___10012)){
args10009.push((arguments[i__8982__auto___10013]));

var G__10014 = (i__8982__auto___10013 + (1));
i__8982__auto___10013 = G__10014;
continue;
} else {
}
break;
}

var G__10011 = args10009.length;
switch (G__10011) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10009.length)].join('')));

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
var vec__10022 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__10023 = cljs.core.seq.call(null,vec__10022);
var first__10024 = cljs.core.first.call(null,seq__10023);
var seq__10023__$1 = cljs.core.next.call(null,seq__10023);
var f = first__10024;
var more = seq__10023__$1;
var vec__10025 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__10025,(0),null);
var f2 = cljs.core.nth.call(null,vec__10025,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("b261420f96024b4c9f1a60e12284477d")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__10028_SHARP_){
return cljs.core.zipmap.call(null,p1__10028_SHARP_,cljs.core.repeat.call(null,true));
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
var or__7760__auto__ = (function (){var and__7748__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__7748__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
var G__10029 = (i + (1));
var G__10030 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__10029;
ret = G__10030;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args10031 = [];
var len__8981__auto___10034 = arguments.length;
var i__8982__auto___10035 = (0);
while(true){
if((i__8982__auto___10035 < len__8981__auto___10034)){
args10031.push((arguments[i__8982__auto___10035]));

var G__10036 = (i__8982__auto___10035 + (1));
i__8982__auto___10035 = G__10036;
continue;
} else {
}
break;
}

var G__10033 = args10031.length;
switch (G__10033) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10031.length)].join('')));

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

var G__10038 = (i + (1));
i = G__10038;
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
return m__8479__auto__.call(null,this$);
} else {
var m__8479__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8479__auto____$1 == null))){
return m__8479__auto____$1.call(null,this$);
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
var new$__$1 = cljs.core.mapv.call(null,hoplon.core.__GT_node,cljs.core.reduce.call(null,(function (p1__10042_SHARP_,p2__10041_SHARP_){
if((p2__10041_SHARP_ == null)){
return p1__10042_SHARP_;
} else {
return cljs.core.conj.call(null,p1__10042_SHARP_,p2__10041_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__10069 = new$__$1;
var vec__10071 = G__10069;
var seq__10072 = cljs.core.seq.call(null,vec__10071);
var first__10073 = cljs.core.first.call(null,seq__10072);
var seq__10072__$1 = cljs.core.next.call(null,seq__10072);
var x = first__10073;
var xs = seq__10072__$1;
var G__10070 = hoplon.core.child_vec.call(null,this$);
var vec__10074 = G__10070;
var seq__10075 = cljs.core.seq.call(null,vec__10074);
var first__10076 = cljs.core.first.call(null,seq__10075);
var seq__10075__$1 = cljs.core.next.call(null,seq__10075);
var k = first__10076;
var ks = seq__10075__$1;
var kids = vec__10074;
var G__10069__$1 = G__10069;
var G__10070__$1 = G__10070;
while(true){
var vec__10077 = G__10069__$1;
var seq__10078 = cljs.core.seq.call(null,vec__10077);
var first__10079 = cljs.core.first.call(null,seq__10078);
var seq__10078__$1 = cljs.core.next.call(null,seq__10078);
var x__$1 = first__10079;
var xs__$1 = seq__10078__$1;
var vec__10080 = G__10070__$1;
var seq__10081 = cljs.core.seq.call(null,vec__10080);
var first__10082 = cljs.core.first.call(null,seq__10081);
var seq__10081__$1 = cljs.core.next.call(null,seq__10081);
var k__$1 = first__10082;
var ks__$1 = seq__10081__$1;
var kids__$1 = vec__10080;
if(cljs.core.truth_((function (){var or__7760__auto__ = x__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return k__$1;
}
})())){
var G__10083 = xs__$1;
var G__10084 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
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
G__10069__$1 = G__10083;
G__10070__$1 = G__10084;
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
var kids_10085 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_10085;

hoplon.core.do_watch.call(null,kids_10085,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
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

var kids_10088 = kidfn.call(null,parent);
var i_10089 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_10088));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,child__$1))){
hoplon.core.do_watch.call(null,child__$1,((function (kids_10088,i_10089,child__$1){
return (function (p1__10087_SHARP_,p2__10086_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_10088,cljs.core.assoc,i_10089,p2__10086_SHARP_);
});})(kids_10088,i_10089,child__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_10088,cljs.core.assoc,i_10089,child__$1);
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

if(cljs.core.truth_((function (){var and__7748__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.not.call(null,javelin.core.cell_QMARK_.call(null,child));
} else {
return and__7748__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__7748__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__7748__auto__)){
return javelin.core.cell_QMARK_.call(null,child);
} else {
return and__7748__auto__;
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
return (function (p1__10090_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__10090_SHARP_));
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
return (function (p1__10091_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__10091_SHARP_));
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
return (function (p1__10092_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__10092_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_10093 = cljs.core.keyword.call(null,k);
var attr_10094 = attrfn.call(null,this$__$1);
var has_QMARK__10095 = (function (){var and__7748__auto__ = attr_10094;
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_10094),kk_10093);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__10095)){
cljs.core.swap_BANG_.call(null,attr_10094,cljs.core.assoc,kk_10093,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__10096_SHARP_){
return p1__10096_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__10097_SHARP_){
return p1__10097_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__10098_SHARP_){
return p1__10098_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__10099_SHARP_){
return p1__10099_SHARP_.hoplonKids;
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
return m__8479__auto__.call(null,this$,kvs);
} else {
var m__8479__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return m__8479__auto____$1.call(null,this$,kvs);
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
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return m__8479__auto__.call(null,this$,kvs);
} else {
var m__8479__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return m__8479__auto____$1.call(null,this$,kvs);
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
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return m__8479__auto__.call(null,this$,child);
} else {
var m__8479__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return m__8479__auto____$1.call(null,this$,child);
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
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return m__8479__auto__.call(null,this$,child);
} else {
var m__8479__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return m__8479__auto____$1.call(null,this$,child);
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
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return m__8479__auto__.call(null,this$,new$,existing);
} else {
var m__8479__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return m__8479__auto____$1.call(null,this$,new$,existing);
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
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return m__8479__auto__.call(null,this$,new$,existing);
} else {
var m__8479__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return m__8479__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args10100 = [];
var len__8981__auto___10107 = arguments.length;
var i__8982__auto___10108 = (0);
while(true){
if((i__8982__auto___10108 < len__8981__auto___10107)){
args10100.push((arguments[i__8982__auto___10108]));

var G__10109 = (i__8982__auto___10108 + (1));
i__8982__auto___10108 = G__10109;
continue;
} else {
}
break;
}

var G__10106 = args10100.length;
switch (G__10106) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args10100.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10101){
var G__10102 = cljs.core.first.call(null,seq10101);
var seq10101__$1 = cljs.core.next.call(null,seq10101);
var G__10103 = cljs.core.first.call(null,seq10101__$1);
var seq10101__$2 = cljs.core.next.call(null,seq10101__$1);
var G__10104 = cljs.core.first.call(null,seq10101__$2);
var seq10101__$3 = cljs.core.next.call(null,seq10101__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10102,G__10103,G__10104,seq10101__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args10111 = [];
var len__8981__auto___10118 = arguments.length;
var i__8982__auto___10119 = (0);
while(true){
if((i__8982__auto___10119 < len__8981__auto___10118)){
args10111.push((arguments[i__8982__auto___10119]));

var G__10120 = (i__8982__auto___10119 + (1));
i__8982__auto___10119 = G__10120;
continue;
} else {
}
break;
}

var G__10117 = args10111.length;
switch (G__10117) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args10111.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq10112){
var G__10113 = cljs.core.first.call(null,seq10112);
var seq10112__$1 = cljs.core.next.call(null,seq10112);
var G__10114 = cljs.core.first.call(null,seq10112__$1);
var seq10112__$2 = cljs.core.next.call(null,seq10112__$1);
var G__10115 = cljs.core.first.call(null,seq10112__$2);
var seq10112__$3 = cljs.core.next.call(null,seq10112__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10113,G__10114,G__10115,seq10112__$3);
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
var x__8478__auto__ = (((this$ == null))?null:this$);
var m__8479__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8478__auto__)]);
if(!((m__8479__auto__ == null))){
return m__8479__auto__.call(null,this$,elem,value);
} else {
var m__8479__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8479__auto____$1 == null))){
return m__8479__auto____$1.call(null,this$,elem,value);
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
return (function (p1__10125_SHARP_,p2__10124_SHARP_){
return hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__10124_SHARP_);
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
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__10126_SHARP_){
return p1__10126_SHARP_.head;
}):(function (p1__10127_SHARP_){
return p1__10127_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10128_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__10128_SHARP_);
}catch (e10129){if((e10129 instanceof Error)){
var _ = e10129;
return null;
} else {
throw e10129;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10130_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__10130_SHARP_);
}catch (e10131){if((e10131 instanceof Error)){
var _ = e10131;
return null;
} else {
throw e10131;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args10132 = [];
var len__8981__auto___10136 = arguments.length;
var i__8982__auto___10137 = (0);
while(true){
if((i__8982__auto___10137 < len__8981__auto___10136)){
args10132.push((arguments[i__8982__auto___10137]));

var G__10138 = (i__8982__auto___10137 + (1));
i__8982__auto___10137 = G__10138;
continue;
} else {
}
break;
}

var G__10134 = args10132.length;
switch (G__10134) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10132.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e10135){if((e10135 instanceof Error)){
var _ = e10135;
return not_found;
} else {
throw e10135;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args10140 = [];
var len__8981__auto___10143 = arguments.length;
var i__8982__auto___10144 = (0);
while(true){
if((i__8982__auto___10144 < len__8981__auto___10143)){
args10140.push((arguments[i__8982__auto___10144]));

var G__10145 = (i__8982__auto___10144 + (1));
i__8982__auto___10144 = G__10145;
continue;
} else {
}
break;
}

var G__10142 = args10140.length;
switch (G__10142) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10140.length)].join('')));

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
var temp__6736__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return v.push(f);
} else {
goog.object.set(this$,"_hoplonWhenDom",[f]);

return setTimeout(((function (temp__6736__auto__){
return (function (){
return ((function (temp__6736__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not.call(null,document.documentElement.contains(this$))){
return setTimeout(((function (temp__6736__auto__){
return (function (){
return hoplon$core$when_dom_$_doit.call(null);
});})(temp__6736__auto__))
,(20));
} else {
var seq__10159_10163 = cljs.core.seq.call(null,goog.object.get(this$,"_hoplonWhenDom"));
var chunk__10160_10164 = null;
var count__10161_10165 = (0);
var i__10162_10166 = (0);
while(true){
if((i__10162_10166 < count__10161_10165)){
var f_10167__$1 = cljs.core._nth.call(null,chunk__10160_10164,i__10162_10166);
f_10167__$1.call(null);

var G__10168 = seq__10159_10163;
var G__10169 = chunk__10160_10164;
var G__10170 = count__10161_10165;
var G__10171 = (i__10162_10166 + (1));
seq__10159_10163 = G__10168;
chunk__10160_10164 = G__10169;
count__10161_10165 = G__10170;
i__10162_10166 = G__10171;
continue;
} else {
var temp__6738__auto___10172 = cljs.core.seq.call(null,seq__10159_10163);
if(temp__6738__auto___10172){
var seq__10159_10173__$1 = temp__6738__auto___10172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10159_10173__$1)){
var c__8671__auto___10174 = cljs.core.chunk_first.call(null,seq__10159_10173__$1);
var G__10175 = cljs.core.chunk_rest.call(null,seq__10159_10173__$1);
var G__10176 = c__8671__auto___10174;
var G__10177 = cljs.core.count.call(null,c__8671__auto___10174);
var G__10178 = (0);
seq__10159_10163 = G__10175;
chunk__10160_10164 = G__10176;
count__10161_10165 = G__10177;
i__10162_10166 = G__10178;
continue;
} else {
var f_10179__$1 = cljs.core.first.call(null,seq__10159_10173__$1);
f_10179__$1.call(null);

var G__10180 = cljs.core.next.call(null,seq__10159_10173__$1);
var G__10181 = null;
var G__10182 = (0);
var G__10183 = (0);
seq__10159_10163 = G__10180;
chunk__10160_10164 = G__10181;
count__10161_10165 = G__10182;
i__10162_10166 = G__10183;
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
,(0));
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__10200 = args;
var vec__10201 = G__10200;
var seq__10202 = cljs.core.seq.call(null,vec__10201);
var first__10203 = cljs.core.first.call(null,seq__10202);
var seq__10202__$1 = cljs.core.next.call(null,seq__10202);
var arg = first__10203;
var args__$1 = seq__10202__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__10200__$1 = G__10200;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10204 = G__10200__$1;
var seq__10205 = cljs.core.seq.call(null,vec__10204);
var first__10206 = cljs.core.first.call(null,seq__10205);
var seq__10205__$1 = cljs.core.next.call(null,seq__10205);
var arg__$1 = first__10206;
var args__$2 = seq__10205__$1;
if(cljs.core.not.call(null,(function (){var or__7760__auto__ = arg__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__10207 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__10200__$1,attr__$2,kids__$2,vec__10204,seq__10205,first__10206,seq__10205__$1,arg__$1,args__$2,attr,kids,G__10200,vec__10201,seq__10202,first__10203,seq__10202__$1,arg,args__$1){
return (function (p1__10184_SHARP_,p2__10185_SHARP_,p3__10186_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__10184_SHARP_,p2__10185_SHARP_,p3__10186_SHARP_);
});})(attr__$1,kids__$1,G__10200__$1,attr__$2,kids__$2,vec__10204,seq__10205,first__10206,seq__10205__$1,arg__$1,args__$2,attr,kids,G__10200,vec__10201,seq__10202,first__10203,seq__10202__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__10208 = kids__$2;
var G__10209 = args__$2;
attr__$1 = G__10207;
kids__$1 = G__10208;
G__10200__$1 = G__10209;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__10210 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__10211 = kids__$2;
var G__10212 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__10210;
kids__$1 = G__10211;
G__10200__$1 = G__10212;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__10213 = attr__$2;
var G__10214 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__10215 = args__$2;
attr__$1 = G__10213;
kids__$1 = G__10214;
G__10200__$1 = G__10215;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__10216 = attr__$2;
var G__10217 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__10218 = args__$2;
attr__$1 = G__10216;
kids__$1 = G__10217;
G__10200__$1 = G__10218;
continue;
} else {
var G__10219 = attr__$2;
var G__10220 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__10221 = args__$2;
attr__$1 = G__10219;
kids__$1 = G__10220;
G__10200__$1 = G__10221;
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
return cljs.core.reduce_kv.call(null,(function (p1__10223_SHARP_,p2__10222_SHARP_,p3__10224_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__10222_SHARP_,p1__10223_SHARP_,p3__10224_SHARP_);

return p1__10223_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__10225){
var vec__10233 = p__10225;
var seq__10234 = cljs.core.seq.call(null,vec__10233);
var first__10235 = cljs.core.first.call(null,seq__10234);
var seq__10234__$1 = cljs.core.next.call(null,seq__10234);
var child_cell = first__10235;
var _ = seq__10234__$1;
var kids = vec__10233;
var this$__$1 = this$;
var seq__10236_10240 = cljs.core.seq.call(null,hoplon.core.vflatten.call(null,kids));
var chunk__10237_10241 = null;
var count__10238_10242 = (0);
var i__10239_10243 = (0);
while(true){
if((i__10239_10243 < count__10238_10242)){
var x_10244 = cljs.core._nth.call(null,chunk__10237_10241,i__10239_10243);
var temp__6738__auto___10245 = hoplon.core.__GT_node.call(null,x_10244);
if(cljs.core.truth_(temp__6738__auto___10245)){
var x_10246__$1 = temp__6738__auto___10245;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_10246__$1);
} else {
}

var G__10247 = seq__10236_10240;
var G__10248 = chunk__10237_10241;
var G__10249 = count__10238_10242;
var G__10250 = (i__10239_10243 + (1));
seq__10236_10240 = G__10247;
chunk__10237_10241 = G__10248;
count__10238_10242 = G__10249;
i__10239_10243 = G__10250;
continue;
} else {
var temp__6738__auto___10251 = cljs.core.seq.call(null,seq__10236_10240);
if(temp__6738__auto___10251){
var seq__10236_10252__$1 = temp__6738__auto___10251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10236_10252__$1)){
var c__8671__auto___10253 = cljs.core.chunk_first.call(null,seq__10236_10252__$1);
var G__10254 = cljs.core.chunk_rest.call(null,seq__10236_10252__$1);
var G__10255 = c__8671__auto___10253;
var G__10256 = cljs.core.count.call(null,c__8671__auto___10253);
var G__10257 = (0);
seq__10236_10240 = G__10254;
chunk__10237_10241 = G__10255;
count__10238_10242 = G__10256;
i__10239_10243 = G__10257;
continue;
} else {
var x_10258 = cljs.core.first.call(null,seq__10236_10252__$1);
var temp__6738__auto___10259__$1 = hoplon.core.__GT_node.call(null,x_10258);
if(cljs.core.truth_(temp__6738__auto___10259__$1)){
var x_10260__$1 = temp__6738__auto___10259__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_10260__$1);
} else {
}

var G__10261 = cljs.core.next.call(null,seq__10236_10252__$1);
var G__10262 = null;
var G__10263 = (0);
var G__10264 = (0);
seq__10236_10240 = G__10261;
chunk__10237_10241 = G__10262;
count__10238_10242 = G__10263;
i__10239_10243 = G__10264;
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
var G__10297__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10266 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__10266,(0),null);
var kids = cljs.core.nth.call(null,vec__10266,(1),null);
var G__10269 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__10269,attr);

hoplon.core.add_children_BANG_.call(null,G__10269,kids);

return G__10269;
};
var G__10297 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__10298__i = 0, G__10298__a = new Array(arguments.length -  1);
while (G__10298__i < G__10298__a.length) {G__10298__a[G__10298__i] = arguments[G__10298__i + 1]; ++G__10298__i;}
  args = new cljs.core.IndexedSeq(G__10298__a,0);
} 
return G__10297__delegate.call(this,self__,args);};
G__10297.cljs$lang$maxFixedArity = 1;
G__10297.cljs$lang$applyTo = (function (arglist__10299){
var self__ = cljs.core.first(arglist__10299);
var args = cljs.core.rest(arglist__10299);
return G__10297__delegate(self__,args);
});
G__10297.cljs$core$IFn$_invoke$arity$variadic = G__10297__delegate;
return G__10297;
})()
;

Element.prototype.apply = (function (self__,args10265){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10265)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10300__delegate = function (args){
var this$ = this;
var vec__10270 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__10270,(0),null);
var kids = cljs.core.nth.call(null,vec__10270,(1),null);
var G__10273 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__10273,attr);

hoplon.core.add_children_BANG_.call(null,G__10273,kids);

return G__10273;
};
var G__10300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10301__i = 0, G__10301__a = new Array(arguments.length -  0);
while (G__10301__i < G__10301__a.length) {G__10301__a[G__10301__i] = arguments[G__10301__i + 0]; ++G__10301__i;}
  args = new cljs.core.IndexedSeq(G__10301__a,0);
} 
return G__10300__delegate.call(this,args);};
G__10300.cljs$lang$maxFixedArity = 0;
G__10300.cljs$lang$applyTo = (function (arglist__10302){
var args = cljs.core.seq(arglist__10302);
return G__10300__delegate(args);
});
G__10300.cljs$core$IFn$_invoke$arity$variadic = G__10300__delegate;
return G__10300;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10274 = cljs.core.seq.call(null,kvs);
var chunk__10276 = null;
var count__10277 = (0);
var i__10278 = (0);
while(true){
if((i__10278 < count__10277)){
var vec__10280 = cljs.core._nth.call(null,chunk__10276,i__10278);
var k = cljs.core.nth.call(null,vec__10280,(0),null);
var v = cljs.core.nth.call(null,vec__10280,(1),null);
var k_10303__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_10303__$1);
} else {
e.setAttribute(k_10303__$1,((cljs.core._EQ_.call(null,true,v))?k_10303__$1:v));
}

var G__10304 = seq__10274;
var G__10305 = chunk__10276;
var G__10306 = count__10277;
var G__10307 = (i__10278 + (1));
seq__10274 = G__10304;
chunk__10276 = G__10305;
count__10277 = G__10306;
i__10278 = G__10307;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__10274);
if(temp__6738__auto__){
var seq__10274__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10274__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__10274__$1);
var G__10308 = cljs.core.chunk_rest.call(null,seq__10274__$1);
var G__10309 = c__8671__auto__;
var G__10310 = cljs.core.count.call(null,c__8671__auto__);
var G__10311 = (0);
seq__10274 = G__10308;
chunk__10276 = G__10309;
count__10277 = G__10310;
i__10278 = G__10311;
continue;
} else {
var vec__10283 = cljs.core.first.call(null,seq__10274__$1);
var k = cljs.core.nth.call(null,vec__10283,(0),null);
var v = cljs.core.nth.call(null,vec__10283,(1),null);
var k_10312__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_10312__$1);
} else {
e.setAttribute(k_10312__$1,((cljs.core._EQ_.call(null,true,v))?k_10312__$1:v));
}

var G__10313 = cljs.core.next.call(null,seq__10274__$1);
var G__10314 = null;
var G__10315 = (0);
var G__10316 = (0);
seq__10274 = G__10313;
chunk__10276 = G__10314;
count__10277 = G__10315;
i__10278 = G__10316;
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
var seq__10286 = cljs.core.seq.call(null,kvs);
var chunk__10287 = null;
var count__10288 = (0);
var i__10289 = (0);
while(true){
if((i__10289 < count__10288)){
var vec__10290 = cljs.core._nth.call(null,chunk__10287,i__10289);
var k = cljs.core.nth.call(null,vec__10290,(0),null);
var v = cljs.core.nth.call(null,vec__10290,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__10317 = seq__10286;
var G__10318 = chunk__10287;
var G__10319 = count__10288;
var G__10320 = (i__10289 + (1));
seq__10286 = G__10317;
chunk__10287 = G__10318;
count__10288 = G__10319;
i__10289 = G__10320;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__10286);
if(temp__6738__auto__){
var seq__10286__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10286__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__10286__$1);
var G__10321 = cljs.core.chunk_rest.call(null,seq__10286__$1);
var G__10322 = c__8671__auto__;
var G__10323 = cljs.core.count.call(null,c__8671__auto__);
var G__10324 = (0);
seq__10286 = G__10321;
chunk__10287 = G__10322;
count__10288 = G__10323;
i__10289 = G__10324;
continue;
} else {
var vec__10293 = cljs.core.first.call(null,seq__10286__$1);
var k = cljs.core.nth.call(null,vec__10293,(0),null);
var v = cljs.core.nth.call(null,vec__10293,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__10325 = cljs.core.next.call(null,seq__10286__$1);
var G__10326 = null;
var G__10327 = (0);
var G__10328 = (0);
seq__10286 = G__10325;
chunk__10287 = G__10326;
count__10288 = G__10327;
i__10289 = G__10328;
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
}catch (e10296){if((e10296 instanceof Error)){
var _ = e10296;
return null;
} else {
throw e10296;

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
var G__10335__delegate = function (args){
var vec__10332 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__10332,(0),null);
var kids = cljs.core.nth.call(null,vec__10332,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__10335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10336__i = 0, G__10336__a = new Array(arguments.length -  0);
while (G__10336__i < G__10336__a.length) {G__10336__a[G__10336__i] = arguments[G__10336__i + 0]; ++G__10336__i;}
  args = new cljs.core.IndexedSeq(G__10336__a,0);
} 
return G__10335__delegate.call(this,args);};
G__10335.cljs$lang$maxFixedArity = 0;
G__10335.cljs$lang$applyTo = (function (arglist__10337){
var args = cljs.core.seq(arglist__10337);
return G__10335__delegate(args);
});
G__10335.cljs$core$IFn$_invoke$arity$variadic = G__10335__delegate;
return G__10335;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__10341__delegate = function (rest__10338_SHARP_){
return cljs.core.apply.call(null,document.createElement(tag),rest__10338_SHARP_);
};
var G__10341 = function (var_args){
var rest__10338_SHARP_ = null;
if (arguments.length > 0) {
var G__10342__i = 0, G__10342__a = new Array(arguments.length -  0);
while (G__10342__i < G__10342__a.length) {G__10342__a[G__10342__i] = arguments[G__10342__i + 0]; ++G__10342__i;}
  rest__10338_SHARP_ = new cljs.core.IndexedSeq(G__10342__a,0);
} 
return G__10341__delegate.call(this,rest__10338_SHARP_);};
G__10341.cljs$lang$maxFixedArity = 0;
G__10341.cljs$lang$applyTo = (function (arglist__10343){
var rest__10338_SHARP_ = cljs.core.seq(arglist__10343);
return G__10341__delegate(rest__10338_SHARP_);
});
G__10341.cljs$core$IFn$_invoke$arity$variadic = G__10341__delegate;
return G__10341;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__10344__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e10340){if((e10340 instanceof Error)){
var _ = e10340;
return cljs.core.apply.call(null,hoplon.core.make_elem_ctor.call(null,"div"),args);
} else {
throw e10340;

}
}};
var G__10344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10345__i = 0, G__10345__a = new Array(arguments.length -  0);
while (G__10345__i < G__10345__a.length) {G__10345__a[G__10345__i] = arguments[G__10345__i + 0]; ++G__10345__i;}
  args = new cljs.core.IndexedSeq(G__10345__a,0);
} 
return G__10344__delegate.call(this,args);};
G__10344.cljs$lang$maxFixedArity = 0;
G__10344.cljs$lang$applyTo = (function (arglist__10346){
var args = cljs.core.seq(arglist__10346);
return G__10344__delegate(args);
});
G__10344.cljs$core$IFn$_invoke$arity$variadic = G__10344__delegate;
return G__10344;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8988__auto__ = [];
var len__8981__auto___10348 = arguments.length;
var i__8982__auto___10349 = (0);
while(true){
if((i__8982__auto___10349 < len__8981__auto___10348)){
args__8988__auto__.push((arguments[i__8982__auto___10349]));

var G__10350 = (i__8982__auto___10349 + (1));
i__8982__auto___10349 = G__10350;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_.call(null,document.documentElement,cljs.core.nth.call(null,hoplon.core.parse_args.call(null,args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq10347){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10347));
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
hoplon.core.$text = (function hoplon$core$$text(p1__10351_SHARP_){
return document.createTextNode(p1__10351_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__10352_SHARP_){
return document.createComment(p1__10352_SHARP_);
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
return document.body.addEventListener("submit",(function (p1__10353_SHARP_){
var e = p1__10353_SHARP_.target;
if(cljs.core.truth_((function (){var or__7760__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__10353_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8791__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8795__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__){
return (function (elem,key,val){
var temp__6736__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__6736__auto__)){
var n = temp__6736__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__8795__auto__,method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__));
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
hoplon.core.on_BANG_ = (function (){var method_table__8791__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8795__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__){
return (function (elem,key,val){
var temp__6736__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__6736__auto__)){
var n = temp__6736__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__,hierarchy__8795__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__8795__auto__,method_table__8791__auto__,prefer_table__8792__auto__,method_cache__8793__auto__,cached_hierarchy__8794__auto__));
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
return (function (G__10365,G__10366){
return G__10365.call(null,G__10366);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__10354_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__10368,G__10369,G__10367){
return G__10367.call(null,G__10368,G__10369);
});})(on_deck,items_seq))
).call(null,items_seq,p1__10354_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__10355_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__10355_SHARP_));
cljs.core.swap_BANG_.call(null,p1__10355_SHARP_,cljs.core.rest);

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
var seq__10370 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__10371 = null;
var count__10372 = (0);
var i__10373 = (0);
while(true){
if((i__10373 < count__10372)){
var i = cljs.core._nth.call(null,chunk__10371,i__10373);
var e_10374 = (function (){var or__7760__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_10374);

var G__10375 = seq__10370;
var G__10376 = chunk__10371;
var G__10377 = count__10372;
var G__10378 = (i__10373 + (1));
seq__10370 = G__10375;
chunk__10371 = G__10376;
count__10372 = G__10377;
i__10373 = G__10378;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__10370);
if(temp__6738__auto__){
var seq__10370__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10370__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__10370__$1);
var G__10379 = cljs.core.chunk_rest.call(null,seq__10370__$1);
var G__10380 = c__8671__auto__;
var G__10381 = cljs.core.count.call(null,c__8671__auto__);
var G__10382 = (0);
seq__10370 = G__10379;
chunk__10371 = G__10380;
count__10372 = G__10381;
i__10373 = G__10382;
continue;
} else {
var i = cljs.core.first.call(null,seq__10370__$1);
var e_10383 = (function (){var or__7760__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_10383);

var G__10384 = cljs.core.next.call(null,seq__10370__$1);
var G__10385 = null;
var G__10386 = (0);
var G__10387 = (0);
seq__10370 = G__10384;
chunk__10371 = G__10385;
count__10372 = G__10386;
i__10373 = G__10387;
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
var e_10388 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_10388);

var G__10389 = (_ + (1));
_ = G__10389;
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
var len__8981__auto___10398 = arguments.length;
var i__8982__auto___10399 = (0);
while(true){
if((i__8982__auto___10399 < len__8981__auto___10398)){
args__8988__auto__.push((arguments[i__8982__auto___10399]));

var G__10400 = (i__8982__auto___10399 + (1));
i__8982__auto___10399 = G__10400;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__10391){
var vec__10392 = p__10391;
var default$ = cljs.core.nth.call(null,vec__10392,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__10392,default$){
return (function (G__10395,G__10397,G__10396){
var or__7760__auto__ = (function (){var and__7748__auto__ = G__10395.call(null,G__10396);
if(cljs.core.truth_(and__7748__auto__)){
return G__10396;
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return G__10397;
}
});})(c,vec__10392,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__10392,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__10392,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq10390){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10390));
});


//# sourceMappingURL=core.js.map