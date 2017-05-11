// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9859 = [];
var len__7950__auto___9878 = arguments.length;
var i__7951__auto___9879 = (0);
while(true){
if((i__7951__auto___9879 < len__7950__auto___9878)){
args9859.push((arguments[i__7951__auto___9879]));

var G__9880 = (i__7951__auto___9879 + (1));
i__7951__auto___9879 = G__9880;
continue;
} else {
}
break;
}

var G__9865 = args9859.length;
switch (G__9865) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9859.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9866 = cljs.core.seq.call(null,kvs);
var chunk__9868 = null;
var count__9869 = (0);
var i__9870 = (0);
while(true){
if((i__9870 < count__9869)){
var vec__9872 = cljs.core._nth.call(null,chunk__9868,i__9870);
var k = cljs.core.nth.call(null,vec__9872,(0),null);
var v = cljs.core.nth.call(null,vec__9872,(1),null);
var k_9882__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9882__$1);
} else {
e.attr(k_9882__$1,((cljs.core._EQ_.call(null,true,v))?k_9882__$1:v));
}

var G__9883 = seq__9866;
var G__9884 = chunk__9868;
var G__9885 = count__9869;
var G__9886 = (i__9870 + (1));
seq__9866 = G__9883;
chunk__9868 = G__9884;
count__9869 = G__9885;
i__9870 = G__9886;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9866);
if(temp__4657__auto__){
var seq__9866__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9866__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9866__$1);
var G__9887 = cljs.core.chunk_rest.call(null,seq__9866__$1);
var G__9888 = c__7656__auto__;
var G__9889 = cljs.core.count.call(null,c__7656__auto__);
var G__9890 = (0);
seq__9866 = G__9887;
chunk__9868 = G__9888;
count__9869 = G__9889;
i__9870 = G__9890;
continue;
} else {
var vec__9875 = cljs.core.first.call(null,seq__9866__$1);
var k = cljs.core.nth.call(null,vec__9875,(0),null);
var v = cljs.core.nth.call(null,vec__9875,(1),null);
var k_9891__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9891__$1);
} else {
e.attr(k_9891__$1,((cljs.core._EQ_.call(null,true,v))?k_9891__$1:v));
}

var G__9892 = cljs.core.next.call(null,seq__9866__$1);
var G__9893 = null;
var G__9894 = (0);
var G__9895 = (0);
seq__9866 = G__9892;
chunk__9868 = G__9893;
count__9869 = G__9894;
i__9870 = G__9895;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9860){
var G__9861 = cljs.core.first.call(null,seq9860);
var seq9860__$1 = cljs.core.next.call(null,seq9860);
var G__9862 = cljs.core.first.call(null,seq9860__$1);
var seq9860__$2 = cljs.core.next.call(null,seq9860__$1);
var G__9863 = cljs.core.first.call(null,seq9860__$2);
var seq9860__$3 = cljs.core.next.call(null,seq9860__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9861,G__9862,G__9863,seq9860__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9896 = [];
var len__7950__auto___9913 = arguments.length;
var i__7951__auto___9914 = (0);
while(true){
if((i__7951__auto___9914 < len__7950__auto___9913)){
args9896.push((arguments[i__7951__auto___9914]));

var G__9915 = (i__7951__auto___9914 + (1));
i__7951__auto___9914 = G__9915;
continue;
} else {
}
break;
}

var G__9902 = args9896.length;
switch (G__9902) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9896.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9903 = cljs.core.seq.call(null,kvs);
var chunk__9904 = null;
var count__9905 = (0);
var i__9906 = (0);
while(true){
if((i__9906 < count__9905)){
var vec__9907 = cljs.core._nth.call(null,chunk__9904,i__9906);
var k = cljs.core.nth.call(null,vec__9907,(0),null);
var v = cljs.core.nth.call(null,vec__9907,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9917 = seq__9903;
var G__9918 = chunk__9904;
var G__9919 = count__9905;
var G__9920 = (i__9906 + (1));
seq__9903 = G__9917;
chunk__9904 = G__9918;
count__9905 = G__9919;
i__9906 = G__9920;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9903);
if(temp__4657__auto__){
var seq__9903__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9903__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9903__$1);
var G__9921 = cljs.core.chunk_rest.call(null,seq__9903__$1);
var G__9922 = c__7656__auto__;
var G__9923 = cljs.core.count.call(null,c__7656__auto__);
var G__9924 = (0);
seq__9903 = G__9921;
chunk__9904 = G__9922;
count__9905 = G__9923;
i__9906 = G__9924;
continue;
} else {
var vec__9910 = cljs.core.first.call(null,seq__9903__$1);
var k = cljs.core.nth.call(null,vec__9910,(0),null);
var v = cljs.core.nth.call(null,vec__9910,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9925 = cljs.core.next.call(null,seq__9903__$1);
var G__9926 = null;
var G__9927 = (0);
var G__9928 = (0);
seq__9903 = G__9925;
chunk__9904 = G__9926;
count__9905 = G__9927;
i__9906 = G__9928;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9897){
var G__9898 = cljs.core.first.call(null,seq9897);
var seq9897__$1 = cljs.core.next.call(null,seq9897);
var G__9899 = cljs.core.first.call(null,seq9897__$1);
var seq9897__$2 = cljs.core.next.call(null,seq9897__$1);
var G__9900 = cljs.core.first.call(null,seq9897__$2);
var seq9897__$3 = cljs.core.next.call(null,seq9897__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9898,G__9899,G__9900,seq9897__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9929 = [];
var len__7950__auto___9932 = arguments.length;
var i__7951__auto___9933 = (0);
while(true){
if((i__7951__auto___9933 < len__7950__auto___9932)){
args9929.push((arguments[i__7951__auto___9933]));

var G__9934 = (i__7951__auto___9933 + (1));
i__7951__auto___9933 = G__9934;
continue;
} else {
}
break;
}

var G__9931 = args9929.length;
switch (G__9931) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9929.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.jquery.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args9936 = [];
var len__7950__auto___9939 = arguments.length;
var i__7951__auto___9940 = (0);
while(true){
if((i__7951__auto___9940 < len__7950__auto___9939)){
args9936.push((arguments[i__7951__auto___9940]));

var G__9941 = (i__7951__auto___9940 + (1));
i__7951__auto___9940 = G__9941;
continue;
} else {
}
break;
}

var G__9938 = args9936.length;
switch (G__9938) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9936.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("attr","*","attr/*",-1283077225),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("prop","*","prop/*",-1283942139),(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__9943__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9943 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9944__i = 0, G__9944__a = new Array(arguments.length -  2);
while (G__9944__i < G__9944__a.length) {G__9944__a[G__9944__i] = arguments[G__9944__i + 2]; ++G__9944__i;}
  args = new cljs.core.IndexedSeq(G__9944__a,0);
} 
return G__9943__delegate.call(this,elem,_,args);};
G__9943.cljs$lang$maxFixedArity = 2;
G__9943.cljs$lang$applyTo = (function (arglist__9945){
var elem = cljs.core.first(arglist__9945);
arglist__9945 = cljs.core.next(arglist__9945);
var _ = cljs.core.first(arglist__9945);
var args = cljs.core.rest(arglist__9945);
return G__9943__delegate(elem,_,args);
});
G__9943.cljs$core$IFn$_invoke$arity$variadic = G__9943__delegate;
return G__9943;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9946 = cljs.core.seq.call(null,clmap);
var chunk__9947 = null;
var count__9948 = (0);
var i__9949 = (0);
while(true){
if((i__9949 < count__9948)){
var vec__9950 = cljs.core._nth.call(null,chunk__9947,i__9949);
var c = cljs.core.nth.call(null,vec__9950,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9950,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9956 = seq__9946;
var G__9957 = chunk__9947;
var G__9958 = count__9948;
var G__9959 = (i__9949 + (1));
seq__9946 = G__9956;
chunk__9947 = G__9957;
count__9948 = G__9958;
i__9949 = G__9959;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9946);
if(temp__4657__auto__){
var seq__9946__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9946__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9946__$1);
var G__9960 = cljs.core.chunk_rest.call(null,seq__9946__$1);
var G__9961 = c__7656__auto__;
var G__9962 = cljs.core.count.call(null,c__7656__auto__);
var G__9963 = (0);
seq__9946 = G__9960;
chunk__9947 = G__9961;
count__9948 = G__9962;
i__9949 = G__9963;
continue;
} else {
var vec__9953 = cljs.core.first.call(null,seq__9946__$1);
var c = cljs.core.nth.call(null,vec__9953,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9953,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9964 = cljs.core.next.call(null,seq__9946__$1);
var G__9965 = null;
var G__9966 = (0);
var G__9967 = (0);
seq__9946 = G__9964;
chunk__9947 = G__9965;
count__9948 = G__9966;
i__9949 = G__9967;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));

//# sourceMappingURL=jquery.js.map