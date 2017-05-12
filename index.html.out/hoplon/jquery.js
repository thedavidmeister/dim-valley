// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9906 = [];
var len__7950__auto___9925 = arguments.length;
var i__7951__auto___9926 = (0);
while(true){
if((i__7951__auto___9926 < len__7950__auto___9925)){
args9906.push((arguments[i__7951__auto___9926]));

var G__9927 = (i__7951__auto___9926 + (1));
i__7951__auto___9926 = G__9927;
continue;
} else {
}
break;
}

var G__9912 = args9906.length;
switch (G__9912) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9906.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9913 = cljs.core.seq.call(null,kvs);
var chunk__9915 = null;
var count__9916 = (0);
var i__9917 = (0);
while(true){
if((i__9917 < count__9916)){
var vec__9919 = cljs.core._nth.call(null,chunk__9915,i__9917);
var k = cljs.core.nth.call(null,vec__9919,(0),null);
var v = cljs.core.nth.call(null,vec__9919,(1),null);
var k_9929__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9929__$1);
} else {
e.attr(k_9929__$1,((cljs.core._EQ_.call(null,true,v))?k_9929__$1:v));
}

var G__9930 = seq__9913;
var G__9931 = chunk__9915;
var G__9932 = count__9916;
var G__9933 = (i__9917 + (1));
seq__9913 = G__9930;
chunk__9915 = G__9931;
count__9916 = G__9932;
i__9917 = G__9933;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9913);
if(temp__4657__auto__){
var seq__9913__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9913__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9913__$1);
var G__9934 = cljs.core.chunk_rest.call(null,seq__9913__$1);
var G__9935 = c__7656__auto__;
var G__9936 = cljs.core.count.call(null,c__7656__auto__);
var G__9937 = (0);
seq__9913 = G__9934;
chunk__9915 = G__9935;
count__9916 = G__9936;
i__9917 = G__9937;
continue;
} else {
var vec__9922 = cljs.core.first.call(null,seq__9913__$1);
var k = cljs.core.nth.call(null,vec__9922,(0),null);
var v = cljs.core.nth.call(null,vec__9922,(1),null);
var k_9938__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9938__$1);
} else {
e.attr(k_9938__$1,((cljs.core._EQ_.call(null,true,v))?k_9938__$1:v));
}

var G__9939 = cljs.core.next.call(null,seq__9913__$1);
var G__9940 = null;
var G__9941 = (0);
var G__9942 = (0);
seq__9913 = G__9939;
chunk__9915 = G__9940;
count__9916 = G__9941;
i__9917 = G__9942;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9907){
var G__9908 = cljs.core.first.call(null,seq9907);
var seq9907__$1 = cljs.core.next.call(null,seq9907);
var G__9909 = cljs.core.first.call(null,seq9907__$1);
var seq9907__$2 = cljs.core.next.call(null,seq9907__$1);
var G__9910 = cljs.core.first.call(null,seq9907__$2);
var seq9907__$3 = cljs.core.next.call(null,seq9907__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9908,G__9909,G__9910,seq9907__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9943 = [];
var len__7950__auto___9960 = arguments.length;
var i__7951__auto___9961 = (0);
while(true){
if((i__7951__auto___9961 < len__7950__auto___9960)){
args9943.push((arguments[i__7951__auto___9961]));

var G__9962 = (i__7951__auto___9961 + (1));
i__7951__auto___9961 = G__9962;
continue;
} else {
}
break;
}

var G__9949 = args9943.length;
switch (G__9949) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9943.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9950 = cljs.core.seq.call(null,kvs);
var chunk__9951 = null;
var count__9952 = (0);
var i__9953 = (0);
while(true){
if((i__9953 < count__9952)){
var vec__9954 = cljs.core._nth.call(null,chunk__9951,i__9953);
var k = cljs.core.nth.call(null,vec__9954,(0),null);
var v = cljs.core.nth.call(null,vec__9954,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9964 = seq__9950;
var G__9965 = chunk__9951;
var G__9966 = count__9952;
var G__9967 = (i__9953 + (1));
seq__9950 = G__9964;
chunk__9951 = G__9965;
count__9952 = G__9966;
i__9953 = G__9967;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9950);
if(temp__4657__auto__){
var seq__9950__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9950__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9950__$1);
var G__9968 = cljs.core.chunk_rest.call(null,seq__9950__$1);
var G__9969 = c__7656__auto__;
var G__9970 = cljs.core.count.call(null,c__7656__auto__);
var G__9971 = (0);
seq__9950 = G__9968;
chunk__9951 = G__9969;
count__9952 = G__9970;
i__9953 = G__9971;
continue;
} else {
var vec__9957 = cljs.core.first.call(null,seq__9950__$1);
var k = cljs.core.nth.call(null,vec__9957,(0),null);
var v = cljs.core.nth.call(null,vec__9957,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9972 = cljs.core.next.call(null,seq__9950__$1);
var G__9973 = null;
var G__9974 = (0);
var G__9975 = (0);
seq__9950 = G__9972;
chunk__9951 = G__9973;
count__9952 = G__9974;
i__9953 = G__9975;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9944){
var G__9945 = cljs.core.first.call(null,seq9944);
var seq9944__$1 = cljs.core.next.call(null,seq9944);
var G__9946 = cljs.core.first.call(null,seq9944__$1);
var seq9944__$2 = cljs.core.next.call(null,seq9944__$1);
var G__9947 = cljs.core.first.call(null,seq9944__$2);
var seq9944__$3 = cljs.core.next.call(null,seq9944__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9945,G__9946,G__9947,seq9944__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9976 = [];
var len__7950__auto___9979 = arguments.length;
var i__7951__auto___9980 = (0);
while(true){
if((i__7951__auto___9980 < len__7950__auto___9979)){
args9976.push((arguments[i__7951__auto___9980]));

var G__9981 = (i__7951__auto___9980 + (1));
i__7951__auto___9980 = G__9981;
continue;
} else {
}
break;
}

var G__9978 = args9976.length;
switch (G__9978) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9976.length)].join('')));

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
var args9983 = [];
var len__7950__auto___9986 = arguments.length;
var i__7951__auto___9987 = (0);
while(true){
if((i__7951__auto___9987 < len__7950__auto___9986)){
args9983.push((arguments[i__7951__auto___9987]));

var G__9988 = (i__7951__auto___9987 + (1));
i__7951__auto___9987 = G__9988;
continue;
} else {
}
break;
}

var G__9985 = args9983.length;
switch (G__9985) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9983.length)].join('')));

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
var G__9990__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9990 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9991__i = 0, G__9991__a = new Array(arguments.length -  2);
while (G__9991__i < G__9991__a.length) {G__9991__a[G__9991__i] = arguments[G__9991__i + 2]; ++G__9991__i;}
  args = new cljs.core.IndexedSeq(G__9991__a,0);
} 
return G__9990__delegate.call(this,elem,_,args);};
G__9990.cljs$lang$maxFixedArity = 2;
G__9990.cljs$lang$applyTo = (function (arglist__9992){
var elem = cljs.core.first(arglist__9992);
arglist__9992 = cljs.core.next(arglist__9992);
var _ = cljs.core.first(arglist__9992);
var args = cljs.core.rest(arglist__9992);
return G__9990__delegate(elem,_,args);
});
G__9990.cljs$core$IFn$_invoke$arity$variadic = G__9990__delegate;
return G__9990;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9993 = cljs.core.seq.call(null,clmap);
var chunk__9994 = null;
var count__9995 = (0);
var i__9996 = (0);
while(true){
if((i__9996 < count__9995)){
var vec__9997 = cljs.core._nth.call(null,chunk__9994,i__9996);
var c = cljs.core.nth.call(null,vec__9997,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9997,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__10003 = seq__9993;
var G__10004 = chunk__9994;
var G__10005 = count__9995;
var G__10006 = (i__9996 + (1));
seq__9993 = G__10003;
chunk__9994 = G__10004;
count__9995 = G__10005;
i__9996 = G__10006;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9993);
if(temp__4657__auto__){
var seq__9993__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9993__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9993__$1);
var G__10007 = cljs.core.chunk_rest.call(null,seq__9993__$1);
var G__10008 = c__7656__auto__;
var G__10009 = cljs.core.count.call(null,c__7656__auto__);
var G__10010 = (0);
seq__9993 = G__10007;
chunk__9994 = G__10008;
count__9995 = G__10009;
i__9996 = G__10010;
continue;
} else {
var vec__10000 = cljs.core.first.call(null,seq__9993__$1);
var c = cljs.core.nth.call(null,vec__10000,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__10000,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__10011 = cljs.core.next.call(null,seq__9993__$1);
var G__10012 = null;
var G__10013 = (0);
var G__10014 = (0);
seq__9993 = G__10011;
chunk__9994 = G__10012;
count__9995 = G__10013;
i__9996 = G__10014;
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