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
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__10403_SHARP_,p2__10404_SHARP_){
return cljs.core.assoc.call(null,p1__10403_SHARP_,p2__10404_SHARP_.getAttribute("static-id"),p2__10404_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args10405 = [];
var len__8981__auto___10408 = arguments.length;
var i__8982__auto___10409 = (0);
while(true){
if((i__8982__auto___10409 < len__8981__auto___10408)){
args10405.push((arguments[i__8982__auto___10409]));

var G__10410 = (i__8982__auto___10409 + (1));
i__8982__auto___10409 = G__10410;
continue;
} else {
}
break;
}

var G__10407 = args10405.length;
switch (G__10407) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10405.length)].join('')));

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
var vec__10418 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__10419 = cljs.core.seq.call(null,vec__10418);
var first__10420 = cljs.core.first.call(null,seq__10419);
var seq__10419__$1 = cljs.core.next.call(null,seq__10419);
var f = first__10420;
var more = seq__10419__$1;
var vec__10421 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__10421,(0),null);
var f2 = cljs.core.nth.call(null,vec__10421,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("95ab7dde6c6447e686d872daeb92678f")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__10424_SHARP_){
return cljs.core.zipmap.call(null,p1__10424_SHARP_,cljs.core.repeat.call(null,true));
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
var G__10425 = (i + (1));
var G__10426 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__10425;
ret = G__10426;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args10427 = [];
var len__8981__auto___10430 = arguments.length;
var i__8982__auto___10431 = (0);
while(true){
if((i__8982__auto___10431 < len__8981__auto___10430)){
args10427.push((arguments[i__8982__auto___10431]));

var G__10432 = (i__8982__auto___10431 + (1));
i__8982__auto___10431 = G__10432;
continue;
} else {
}
break;
}

var G__10429 = args10427.length;
switch (G__10429) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10427.length)].join('')));

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

var G__10434 = (i + (1));
i = G__10434;
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
var new$__$1 = cljs.core.mapv.call(null,hoplon.core.__GT_node,cljs.core.reduce.call(null,(function (p1__10438_SHARP_,p2__10437_SHARP_){
if((p2__10437_SHARP_ == null)){
return p1__10438_SHARP_;
} else {
return cljs.core.conj.call(null,p1__10438_SHARP_,p2__10437_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__10465 = new$__$1;
var vec__10467 = G__10465;
var seq__10468 = cljs.core.seq.call(null,vec__10467);
var first__10469 = cljs.core.first.call(null,seq__10468);
var seq__10468__$1 = cljs.core.next.call(null,seq__10468);
var x = first__10469;
var xs = seq__10468__$1;
var G__10466 = hoplon.core.child_vec.call(null,this$);
var vec__10470 = G__10466;
var seq__10471 = cljs.core.seq.call(null,vec__10470);
var first__10472 = cljs.core.first.call(null,seq__10471);
var seq__10471__$1 = cljs.core.next.call(null,seq__10471);
var k = first__10472;
var ks = seq__10471__$1;
var kids = vec__10470;
var G__10465__$1 = G__10465;
var G__10466__$1 = G__10466;
while(true){
var vec__10473 = G__10465__$1;
var seq__10474 = cljs.core.seq.call(null,vec__10473);
var first__10475 = cljs.core.first.call(null,seq__10474);
var seq__10474__$1 = cljs.core.next.call(null,seq__10474);
var x__$1 = first__10475;
var xs__$1 = seq__10474__$1;
var vec__10476 = G__10466__$1;
var seq__10477 = cljs.core.seq.call(null,vec__10476);
var first__10478 = cljs.core.first.call(null,seq__10477);
var seq__10477__$1 = cljs.core.next.call(null,seq__10477);
var k__$1 = first__10478;
var ks__$1 = seq__10477__$1;
var kids__$1 = vec__10476;
if(cljs.core.truth_((function (){var or__7760__auto__ = x__$1;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return k__$1;
}
})())){
var G__10479 = xs__$1;
var G__10480 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
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
G__10465__$1 = G__10479;
G__10466__$1 = G__10480;
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
var kids_10481 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_10481;

hoplon.core.do_watch.call(null,kids_10481,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
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

var kids_10484 = kidfn.call(null,parent);
var i_10485 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_10484));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,child__$1))){
hoplon.core.do_watch.call(null,child__$1,((function (kids_10484,i_10485,child__$1){
return (function (p1__10483_SHARP_,p2__10482_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_10484,cljs.core.assoc,i_10485,p2__10482_SHARP_);
});})(kids_10484,i_10485,child__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_10484,cljs.core.assoc,i_10485,child__$1);
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
return (function (p1__10486_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__10486_SHARP_));
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
return (function (p1__10487_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__10487_SHARP_));
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
return (function (p1__10488_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__10488_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_10489 = cljs.core.keyword.call(null,k);
var attr_10490 = attrfn.call(null,this$__$1);
var has_QMARK__10491 = (function (){var and__7748__auto__ = attr_10490;
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_10490),kk_10489);
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__10491)){
cljs.core.swap_BANG_.call(null,attr_10490,cljs.core.assoc,kk_10489,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__10492_SHARP_){
return p1__10492_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__10493_SHARP_){
return p1__10493_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__10494_SHARP_){
return p1__10494_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__10495_SHARP_){
return p1__10495_SHARP_.hoplonKids;
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
var args10496 = [];
var len__8981__auto___10503 = arguments.length;
var i__8982__auto___10504 = (0);
while(true){
if((i__8982__auto___10504 < len__8981__auto___10503)){
args10496.push((arguments[i__8982__auto___10504]));

var G__10505 = (i__8982__auto___10504 + (1));
i__8982__auto___10504 = G__10505;
continue;
} else {
}
break;
}

var G__10502 = args10496.length;
switch (G__10502) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args10496.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10497){
var G__10498 = cljs.core.first.call(null,seq10497);
var seq10497__$1 = cljs.core.next.call(null,seq10497);
var G__10499 = cljs.core.first.call(null,seq10497__$1);
var seq10497__$2 = cljs.core.next.call(null,seq10497__$1);
var G__10500 = cljs.core.first.call(null,seq10497__$2);
var seq10497__$3 = cljs.core.next.call(null,seq10497__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10498,G__10499,G__10500,seq10497__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args10507 = [];
var len__8981__auto___10514 = arguments.length;
var i__8982__auto___10515 = (0);
while(true){
if((i__8982__auto___10515 < len__8981__auto___10514)){
args10507.push((arguments[i__8982__auto___10515]));

var G__10516 = (i__8982__auto___10515 + (1));
i__8982__auto___10515 = G__10516;
continue;
} else {
}
break;
}

var G__10513 = args10507.length;
switch (G__10513) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args10507.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq10508){
var G__10509 = cljs.core.first.call(null,seq10508);
var seq10508__$1 = cljs.core.next.call(null,seq10508);
var G__10510 = cljs.core.first.call(null,seq10508__$1);
var seq10508__$2 = cljs.core.next.call(null,seq10508__$1);
var G__10511 = cljs.core.first.call(null,seq10508__$2);
var seq10508__$3 = cljs.core.next.call(null,seq10508__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10509,G__10510,G__10511,seq10508__$3);
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
return (function (p1__10521_SHARP_,p2__10520_SHARP_){
return hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__10520_SHARP_);
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
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__10522_SHARP_){
return p1__10522_SHARP_.head;
}):(function (p1__10523_SHARP_){
return p1__10523_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10524_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__10524_SHARP_);
}catch (e10525){if((e10525 instanceof Error)){
var _ = e10525;
return null;
} else {
throw e10525;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10526_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__10526_SHARP_);
}catch (e10527){if((e10527 instanceof Error)){
var _ = e10527;
return null;
} else {
throw e10527;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args10528 = [];
var len__8981__auto___10532 = arguments.length;
var i__8982__auto___10533 = (0);
while(true){
if((i__8982__auto___10533 < len__8981__auto___10532)){
args10528.push((arguments[i__8982__auto___10533]));

var G__10534 = (i__8982__auto___10533 + (1));
i__8982__auto___10533 = G__10534;
continue;
} else {
}
break;
}

var G__10530 = args10528.length;
switch (G__10530) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10528.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e10531){if((e10531 instanceof Error)){
var _ = e10531;
return not_found;
} else {
throw e10531;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args10536 = [];
var len__8981__auto___10539 = arguments.length;
var i__8982__auto___10540 = (0);
while(true){
if((i__8982__auto___10540 < len__8981__auto___10539)){
args10536.push((arguments[i__8982__auto___10540]));

var G__10541 = (i__8982__auto___10540 + (1));
i__8982__auto___10540 = G__10541;
continue;
} else {
}
break;
}

var G__10538 = args10536.length;
switch (G__10538) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10536.length)].join('')));

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
var seq__10555_10559 = cljs.core.seq.call(null,goog.object.get(this$,"_hoplonWhenDom"));
var chunk__10556_10560 = null;
var count__10557_10561 = (0);
var i__10558_10562 = (0);
while(true){
if((i__10558_10562 < count__10557_10561)){
var f_10563__$1 = cljs.core._nth.call(null,chunk__10556_10560,i__10558_10562);
f_10563__$1.call(null);

var G__10564 = seq__10555_10559;
var G__10565 = chunk__10556_10560;
var G__10566 = count__10557_10561;
var G__10567 = (i__10558_10562 + (1));
seq__10555_10559 = G__10564;
chunk__10556_10560 = G__10565;
count__10557_10561 = G__10566;
i__10558_10562 = G__10567;
continue;
} else {
var temp__6738__auto___10568 = cljs.core.seq.call(null,seq__10555_10559);
if(temp__6738__auto___10568){
var seq__10555_10569__$1 = temp__6738__auto___10568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10555_10569__$1)){
var c__8671__auto___10570 = cljs.core.chunk_first.call(null,seq__10555_10569__$1);
var G__10571 = cljs.core.chunk_rest.call(null,seq__10555_10569__$1);
var G__10572 = c__8671__auto___10570;
var G__10573 = cljs.core.count.call(null,c__8671__auto___10570);
var G__10574 = (0);
seq__10555_10559 = G__10571;
chunk__10556_10560 = G__10572;
count__10557_10561 = G__10573;
i__10558_10562 = G__10574;
continue;
} else {
var f_10575__$1 = cljs.core.first.call(null,seq__10555_10569__$1);
f_10575__$1.call(null);

var G__10576 = cljs.core.next.call(null,seq__10555_10569__$1);
var G__10577 = null;
var G__10578 = (0);
var G__10579 = (0);
seq__10555_10559 = G__10576;
chunk__10556_10560 = G__10577;
count__10557_10561 = G__10578;
i__10558_10562 = G__10579;
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
var G__10596 = args;
var vec__10597 = G__10596;
var seq__10598 = cljs.core.seq.call(null,vec__10597);
var first__10599 = cljs.core.first.call(null,seq__10598);
var seq__10598__$1 = cljs.core.next.call(null,seq__10598);
var arg = first__10599;
var args__$1 = seq__10598__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__10596__$1 = G__10596;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10600 = G__10596__$1;
var seq__10601 = cljs.core.seq.call(null,vec__10600);
var first__10602 = cljs.core.first.call(null,seq__10601);
var seq__10601__$1 = cljs.core.next.call(null,seq__10601);
var arg__$1 = first__10602;
var args__$2 = seq__10601__$1;
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
var G__10603 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__10596__$1,attr__$2,kids__$2,vec__10600,seq__10601,first__10602,seq__10601__$1,arg__$1,args__$2,attr,kids,G__10596,vec__10597,seq__10598,first__10599,seq__10598__$1,arg,args__$1){
return (function (p1__10580_SHARP_,p2__10581_SHARP_,p3__10582_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__10580_SHARP_,p2__10581_SHARP_,p3__10582_SHARP_);
});})(attr__$1,kids__$1,G__10596__$1,attr__$2,kids__$2,vec__10600,seq__10601,first__10602,seq__10601__$1,arg__$1,args__$2,attr,kids,G__10596,vec__10597,seq__10598,first__10599,seq__10598__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__10604 = kids__$2;
var G__10605 = args__$2;
attr__$1 = G__10603;
kids__$1 = G__10604;
G__10596__$1 = G__10605;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__10606 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__10607 = kids__$2;
var G__10608 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__10606;
kids__$1 = G__10607;
G__10596__$1 = G__10608;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__10609 = attr__$2;
var G__10610 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__10611 = args__$2;
attr__$1 = G__10609;
kids__$1 = G__10610;
G__10596__$1 = G__10611;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__10612 = attr__$2;
var G__10613 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__10614 = args__$2;
attr__$1 = G__10612;
kids__$1 = G__10613;
G__10596__$1 = G__10614;
continue;
} else {
var G__10615 = attr__$2;
var G__10616 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__10617 = args__$2;
attr__$1 = G__10615;
kids__$1 = G__10616;
G__10596__$1 = G__10617;
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
return cljs.core.reduce_kv.call(null,(function (p1__10619_SHARP_,p2__10618_SHARP_,p3__10620_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__10618_SHARP_,p1__10619_SHARP_,p3__10620_SHARP_);

return p1__10619_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__10621){
var vec__10629 = p__10621;
var seq__10630 = cljs.core.seq.call(null,vec__10629);
var first__10631 = cljs.core.first.call(null,seq__10630);
var seq__10630__$1 = cljs.core.next.call(null,seq__10630);
var child_cell = first__10631;
var _ = seq__10630__$1;
var kids = vec__10629;
var this$__$1 = this$;
var seq__10632_10636 = cljs.core.seq.call(null,hoplon.core.vflatten.call(null,kids));
var chunk__10633_10637 = null;
var count__10634_10638 = (0);
var i__10635_10639 = (0);
while(true){
if((i__10635_10639 < count__10634_10638)){
var x_10640 = cljs.core._nth.call(null,chunk__10633_10637,i__10635_10639);
var temp__6738__auto___10641 = hoplon.core.__GT_node.call(null,x_10640);
if(cljs.core.truth_(temp__6738__auto___10641)){
var x_10642__$1 = temp__6738__auto___10641;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_10642__$1);
} else {
}

var G__10643 = seq__10632_10636;
var G__10644 = chunk__10633_10637;
var G__10645 = count__10634_10638;
var G__10646 = (i__10635_10639 + (1));
seq__10632_10636 = G__10643;
chunk__10633_10637 = G__10644;
count__10634_10638 = G__10645;
i__10635_10639 = G__10646;
continue;
} else {
var temp__6738__auto___10647 = cljs.core.seq.call(null,seq__10632_10636);
if(temp__6738__auto___10647){
var seq__10632_10648__$1 = temp__6738__auto___10647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10632_10648__$1)){
var c__8671__auto___10649 = cljs.core.chunk_first.call(null,seq__10632_10648__$1);
var G__10650 = cljs.core.chunk_rest.call(null,seq__10632_10648__$1);
var G__10651 = c__8671__auto___10649;
var G__10652 = cljs.core.count.call(null,c__8671__auto___10649);
var G__10653 = (0);
seq__10632_10636 = G__10650;
chunk__10633_10637 = G__10651;
count__10634_10638 = G__10652;
i__10635_10639 = G__10653;
continue;
} else {
var x_10654 = cljs.core.first.call(null,seq__10632_10648__$1);
var temp__6738__auto___10655__$1 = hoplon.core.__GT_node.call(null,x_10654);
if(cljs.core.truth_(temp__6738__auto___10655__$1)){
var x_10656__$1 = temp__6738__auto___10655__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_10656__$1);
} else {
}

var G__10657 = cljs.core.next.call(null,seq__10632_10648__$1);
var G__10658 = null;
var G__10659 = (0);
var G__10660 = (0);
seq__10632_10636 = G__10657;
chunk__10633_10637 = G__10658;
count__10634_10638 = G__10659;
i__10635_10639 = G__10660;
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
var G__10693__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10662 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__10662,(0),null);
var kids = cljs.core.nth.call(null,vec__10662,(1),null);
var G__10665 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__10665,attr);

hoplon.core.add_children_BANG_.call(null,G__10665,kids);

return G__10665;
};
var G__10693 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__10694__i = 0, G__10694__a = new Array(arguments.length -  1);
while (G__10694__i < G__10694__a.length) {G__10694__a[G__10694__i] = arguments[G__10694__i + 1]; ++G__10694__i;}
  args = new cljs.core.IndexedSeq(G__10694__a,0);
} 
return G__10693__delegate.call(this,self__,args);};
G__10693.cljs$lang$maxFixedArity = 1;
G__10693.cljs$lang$applyTo = (function (arglist__10695){
var self__ = cljs.core.first(arglist__10695);
var args = cljs.core.rest(arglist__10695);
return G__10693__delegate(self__,args);
});
G__10693.cljs$core$IFn$_invoke$arity$variadic = G__10693__delegate;
return G__10693;
})()
;

Element.prototype.apply = (function (self__,args10661){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10661)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10696__delegate = function (args){
var this$ = this;
var vec__10666 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__10666,(0),null);
var kids = cljs.core.nth.call(null,vec__10666,(1),null);
var G__10669 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__10669,attr);

hoplon.core.add_children_BANG_.call(null,G__10669,kids);

return G__10669;
};
var G__10696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10697__i = 0, G__10697__a = new Array(arguments.length -  0);
while (G__10697__i < G__10697__a.length) {G__10697__a[G__10697__i] = arguments[G__10697__i + 0]; ++G__10697__i;}
  args = new cljs.core.IndexedSeq(G__10697__a,0);
} 
return G__10696__delegate.call(this,args);};
G__10696.cljs$lang$maxFixedArity = 0;
G__10696.cljs$lang$applyTo = (function (arglist__10698){
var args = cljs.core.seq(arglist__10698);
return G__10696__delegate(args);
});
G__10696.cljs$core$IFn$_invoke$arity$variadic = G__10696__delegate;
return G__10696;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10670 = cljs.core.seq.call(null,kvs);
var chunk__10672 = null;
var count__10673 = (0);
var i__10674 = (0);
while(true){
if((i__10674 < count__10673)){
var vec__10676 = cljs.core._nth.call(null,chunk__10672,i__10674);
var k = cljs.core.nth.call(null,vec__10676,(0),null);
var v = cljs.core.nth.call(null,vec__10676,(1),null);
var k_10699__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_10699__$1);
} else {
e.setAttribute(k_10699__$1,((cljs.core._EQ_.call(null,true,v))?k_10699__$1:v));
}

var G__10700 = seq__10670;
var G__10701 = chunk__10672;
var G__10702 = count__10673;
var G__10703 = (i__10674 + (1));
seq__10670 = G__10700;
chunk__10672 = G__10701;
count__10673 = G__10702;
i__10674 = G__10703;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__10670);
if(temp__6738__auto__){
var seq__10670__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10670__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__10670__$1);
var G__10704 = cljs.core.chunk_rest.call(null,seq__10670__$1);
var G__10705 = c__8671__auto__;
var G__10706 = cljs.core.count.call(null,c__8671__auto__);
var G__10707 = (0);
seq__10670 = G__10704;
chunk__10672 = G__10705;
count__10673 = G__10706;
i__10674 = G__10707;
continue;
} else {
var vec__10679 = cljs.core.first.call(null,seq__10670__$1);
var k = cljs.core.nth.call(null,vec__10679,(0),null);
var v = cljs.core.nth.call(null,vec__10679,(1),null);
var k_10708__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_10708__$1);
} else {
e.setAttribute(k_10708__$1,((cljs.core._EQ_.call(null,true,v))?k_10708__$1:v));
}

var G__10709 = cljs.core.next.call(null,seq__10670__$1);
var G__10710 = null;
var G__10711 = (0);
var G__10712 = (0);
seq__10670 = G__10709;
chunk__10672 = G__10710;
count__10673 = G__10711;
i__10674 = G__10712;
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
var seq__10682 = cljs.core.seq.call(null,kvs);
var chunk__10683 = null;
var count__10684 = (0);
var i__10685 = (0);
while(true){
if((i__10685 < count__10684)){
var vec__10686 = cljs.core._nth.call(null,chunk__10683,i__10685);
var k = cljs.core.nth.call(null,vec__10686,(0),null);
var v = cljs.core.nth.call(null,vec__10686,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__10713 = seq__10682;
var G__10714 = chunk__10683;
var G__10715 = count__10684;
var G__10716 = (i__10685 + (1));
seq__10682 = G__10713;
chunk__10683 = G__10714;
count__10684 = G__10715;
i__10685 = G__10716;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__10682);
if(temp__6738__auto__){
var seq__10682__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10682__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__10682__$1);
var G__10717 = cljs.core.chunk_rest.call(null,seq__10682__$1);
var G__10718 = c__8671__auto__;
var G__10719 = cljs.core.count.call(null,c__8671__auto__);
var G__10720 = (0);
seq__10682 = G__10717;
chunk__10683 = G__10718;
count__10684 = G__10719;
i__10685 = G__10720;
continue;
} else {
var vec__10689 = cljs.core.first.call(null,seq__10682__$1);
var k = cljs.core.nth.call(null,vec__10689,(0),null);
var v = cljs.core.nth.call(null,vec__10689,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__10721 = cljs.core.next.call(null,seq__10682__$1);
var G__10722 = null;
var G__10723 = (0);
var G__10724 = (0);
seq__10682 = G__10721;
chunk__10683 = G__10722;
count__10684 = G__10723;
i__10685 = G__10724;
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
}catch (e10692){if((e10692 instanceof Error)){
var _ = e10692;
return null;
} else {
throw e10692;

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
var G__10731__delegate = function (args){
var vec__10728 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__10728,(0),null);
var kids = cljs.core.nth.call(null,vec__10728,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__10731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10732__i = 0, G__10732__a = new Array(arguments.length -  0);
while (G__10732__i < G__10732__a.length) {G__10732__a[G__10732__i] = arguments[G__10732__i + 0]; ++G__10732__i;}
  args = new cljs.core.IndexedSeq(G__10732__a,0);
} 
return G__10731__delegate.call(this,args);};
G__10731.cljs$lang$maxFixedArity = 0;
G__10731.cljs$lang$applyTo = (function (arglist__10733){
var args = cljs.core.seq(arglist__10733);
return G__10731__delegate(args);
});
G__10731.cljs$core$IFn$_invoke$arity$variadic = G__10731__delegate;
return G__10731;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__10737__delegate = function (rest__10734_SHARP_){
return cljs.core.apply.call(null,document.createElement(tag),rest__10734_SHARP_);
};
var G__10737 = function (var_args){
var rest__10734_SHARP_ = null;
if (arguments.length > 0) {
var G__10738__i = 0, G__10738__a = new Array(arguments.length -  0);
while (G__10738__i < G__10738__a.length) {G__10738__a[G__10738__i] = arguments[G__10738__i + 0]; ++G__10738__i;}
  rest__10734_SHARP_ = new cljs.core.IndexedSeq(G__10738__a,0);
} 
return G__10737__delegate.call(this,rest__10734_SHARP_);};
G__10737.cljs$lang$maxFixedArity = 0;
G__10737.cljs$lang$applyTo = (function (arglist__10739){
var rest__10734_SHARP_ = cljs.core.seq(arglist__10739);
return G__10737__delegate(rest__10734_SHARP_);
});
G__10737.cljs$core$IFn$_invoke$arity$variadic = G__10737__delegate;
return G__10737;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__10740__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e10736){if((e10736 instanceof Error)){
var _ = e10736;
return cljs.core.apply.call(null,hoplon.core.make_elem_ctor.call(null,"div"),args);
} else {
throw e10736;

}
}};
var G__10740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10741__i = 0, G__10741__a = new Array(arguments.length -  0);
while (G__10741__i < G__10741__a.length) {G__10741__a[G__10741__i] = arguments[G__10741__i + 0]; ++G__10741__i;}
  args = new cljs.core.IndexedSeq(G__10741__a,0);
} 
return G__10740__delegate.call(this,args);};
G__10740.cljs$lang$maxFixedArity = 0;
G__10740.cljs$lang$applyTo = (function (arglist__10742){
var args = cljs.core.seq(arglist__10742);
return G__10740__delegate(args);
});
G__10740.cljs$core$IFn$_invoke$arity$variadic = G__10740__delegate;
return G__10740;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8988__auto__ = [];
var len__8981__auto___10744 = arguments.length;
var i__8982__auto___10745 = (0);
while(true){
if((i__8982__auto___10745 < len__8981__auto___10744)){
args__8988__auto__.push((arguments[i__8982__auto___10745]));

var G__10746 = (i__8982__auto___10745 + (1));
i__8982__auto___10745 = G__10746;
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

hoplon.core.html.cljs$lang$applyTo = (function (seq10743){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10743));
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
hoplon.core.$text = (function hoplon$core$$text(p1__10747_SHARP_){
return document.createTextNode(p1__10747_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__10748_SHARP_){
return document.createComment(p1__10748_SHARP_);
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
return document.body.addEventListener("submit",(function (p1__10749_SHARP_){
var e = p1__10749_SHARP_.target;
if(cljs.core.truth_((function (){var or__7760__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__10749_SHARP_.preventDefault();
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
return (function (G__10761,G__10762){
return G__10761.call(null,G__10762);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__10750_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__10764,G__10765,G__10763){
return G__10763.call(null,G__10764,G__10765);
});})(on_deck,items_seq))
).call(null,items_seq,p1__10750_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__10751_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__10751_SHARP_));
cljs.core.swap_BANG_.call(null,p1__10751_SHARP_,cljs.core.rest);

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
var seq__10766 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__10767 = null;
var count__10768 = (0);
var i__10769 = (0);
while(true){
if((i__10769 < count__10768)){
var i = cljs.core._nth.call(null,chunk__10767,i__10769);
var e_10770 = (function (){var or__7760__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_10770);

var G__10771 = seq__10766;
var G__10772 = chunk__10767;
var G__10773 = count__10768;
var G__10774 = (i__10769 + (1));
seq__10766 = G__10771;
chunk__10767 = G__10772;
count__10768 = G__10773;
i__10769 = G__10774;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__10766);
if(temp__6738__auto__){
var seq__10766__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10766__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__10766__$1);
var G__10775 = cljs.core.chunk_rest.call(null,seq__10766__$1);
var G__10776 = c__8671__auto__;
var G__10777 = cljs.core.count.call(null,c__8671__auto__);
var G__10778 = (0);
seq__10766 = G__10775;
chunk__10767 = G__10776;
count__10768 = G__10777;
i__10769 = G__10778;
continue;
} else {
var i = cljs.core.first.call(null,seq__10766__$1);
var e_10779 = (function (){var or__7760__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_10779);

var G__10780 = cljs.core.next.call(null,seq__10766__$1);
var G__10781 = null;
var G__10782 = (0);
var G__10783 = (0);
seq__10766 = G__10780;
chunk__10767 = G__10781;
count__10768 = G__10782;
i__10769 = G__10783;
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
var e_10784 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_10784);

var G__10785 = (_ + (1));
_ = G__10785;
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
var len__8981__auto___10794 = arguments.length;
var i__8982__auto___10795 = (0);
while(true){
if((i__8982__auto___10795 < len__8981__auto___10794)){
args__8988__auto__.push((arguments[i__8982__auto___10795]));

var G__10796 = (i__8982__auto___10795 + (1));
i__8982__auto___10795 = G__10796;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__10787){
var vec__10788 = p__10787;
var default$ = cljs.core.nth.call(null,vec__10788,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__10788,default$){
return (function (G__10791,G__10793,G__10792){
var or__7760__auto__ = (function (){var and__7748__auto__ = G__10791.call(null,G__10792);
if(cljs.core.truth_(and__7748__auto__)){
return G__10792;
} else {
return and__7748__auto__;
}
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return G__10793;
}
});})(c,vec__10788,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__10788,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__10788,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq10786){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10786));
});


//# sourceMappingURL=core.js.map