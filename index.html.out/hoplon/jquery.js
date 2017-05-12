// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9889 = [];
var len__7950__auto___9908 = arguments.length;
var i__7951__auto___9909 = (0);
while(true){
if((i__7951__auto___9909 < len__7950__auto___9908)){
args9889.push((arguments[i__7951__auto___9909]));

var G__9910 = (i__7951__auto___9909 + (1));
i__7951__auto___9909 = G__9910;
continue;
} else {
}
break;
}

var G__9895 = args9889.length;
switch (G__9895) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9889.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9896 = cljs.core.seq.call(null,kvs);
var chunk__9898 = null;
var count__9899 = (0);
var i__9900 = (0);
while(true){
if((i__9900 < count__9899)){
var vec__9902 = cljs.core._nth.call(null,chunk__9898,i__9900);
var k = cljs.core.nth.call(null,vec__9902,(0),null);
var v = cljs.core.nth.call(null,vec__9902,(1),null);
var k_9912__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9912__$1);
} else {
e.attr(k_9912__$1,((cljs.core._EQ_.call(null,true,v))?k_9912__$1:v));
}

var G__9913 = seq__9896;
var G__9914 = chunk__9898;
var G__9915 = count__9899;
var G__9916 = (i__9900 + (1));
seq__9896 = G__9913;
chunk__9898 = G__9914;
count__9899 = G__9915;
i__9900 = G__9916;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9896);
if(temp__4657__auto__){
var seq__9896__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9896__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9896__$1);
var G__9917 = cljs.core.chunk_rest.call(null,seq__9896__$1);
var G__9918 = c__7656__auto__;
var G__9919 = cljs.core.count.call(null,c__7656__auto__);
var G__9920 = (0);
seq__9896 = G__9917;
chunk__9898 = G__9918;
count__9899 = G__9919;
i__9900 = G__9920;
continue;
} else {
var vec__9905 = cljs.core.first.call(null,seq__9896__$1);
var k = cljs.core.nth.call(null,vec__9905,(0),null);
var v = cljs.core.nth.call(null,vec__9905,(1),null);
var k_9921__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9921__$1);
} else {
e.attr(k_9921__$1,((cljs.core._EQ_.call(null,true,v))?k_9921__$1:v));
}

var G__9922 = cljs.core.next.call(null,seq__9896__$1);
var G__9923 = null;
var G__9924 = (0);
var G__9925 = (0);
seq__9896 = G__9922;
chunk__9898 = G__9923;
count__9899 = G__9924;
i__9900 = G__9925;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9890){
var G__9891 = cljs.core.first.call(null,seq9890);
var seq9890__$1 = cljs.core.next.call(null,seq9890);
var G__9892 = cljs.core.first.call(null,seq9890__$1);
var seq9890__$2 = cljs.core.next.call(null,seq9890__$1);
var G__9893 = cljs.core.first.call(null,seq9890__$2);
var seq9890__$3 = cljs.core.next.call(null,seq9890__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9891,G__9892,G__9893,seq9890__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9926 = [];
var len__7950__auto___9943 = arguments.length;
var i__7951__auto___9944 = (0);
while(true){
if((i__7951__auto___9944 < len__7950__auto___9943)){
args9926.push((arguments[i__7951__auto___9944]));

var G__9945 = (i__7951__auto___9944 + (1));
i__7951__auto___9944 = G__9945;
continue;
} else {
}
break;
}

var G__9932 = args9926.length;
switch (G__9932) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9926.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9933 = cljs.core.seq.call(null,kvs);
var chunk__9934 = null;
var count__9935 = (0);
var i__9936 = (0);
while(true){
if((i__9936 < count__9935)){
var vec__9937 = cljs.core._nth.call(null,chunk__9934,i__9936);
var k = cljs.core.nth.call(null,vec__9937,(0),null);
var v = cljs.core.nth.call(null,vec__9937,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9947 = seq__9933;
var G__9948 = chunk__9934;
var G__9949 = count__9935;
var G__9950 = (i__9936 + (1));
seq__9933 = G__9947;
chunk__9934 = G__9948;
count__9935 = G__9949;
i__9936 = G__9950;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9933);
if(temp__4657__auto__){
var seq__9933__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9933__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9933__$1);
var G__9951 = cljs.core.chunk_rest.call(null,seq__9933__$1);
var G__9952 = c__7656__auto__;
var G__9953 = cljs.core.count.call(null,c__7656__auto__);
var G__9954 = (0);
seq__9933 = G__9951;
chunk__9934 = G__9952;
count__9935 = G__9953;
i__9936 = G__9954;
continue;
} else {
var vec__9940 = cljs.core.first.call(null,seq__9933__$1);
var k = cljs.core.nth.call(null,vec__9940,(0),null);
var v = cljs.core.nth.call(null,vec__9940,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9955 = cljs.core.next.call(null,seq__9933__$1);
var G__9956 = null;
var G__9957 = (0);
var G__9958 = (0);
seq__9933 = G__9955;
chunk__9934 = G__9956;
count__9935 = G__9957;
i__9936 = G__9958;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9927){
var G__9928 = cljs.core.first.call(null,seq9927);
var seq9927__$1 = cljs.core.next.call(null,seq9927);
var G__9929 = cljs.core.first.call(null,seq9927__$1);
var seq9927__$2 = cljs.core.next.call(null,seq9927__$1);
var G__9930 = cljs.core.first.call(null,seq9927__$2);
var seq9927__$3 = cljs.core.next.call(null,seq9927__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9928,G__9929,G__9930,seq9927__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9959 = [];
var len__7950__auto___9962 = arguments.length;
var i__7951__auto___9963 = (0);
while(true){
if((i__7951__auto___9963 < len__7950__auto___9962)){
args9959.push((arguments[i__7951__auto___9963]));

var G__9964 = (i__7951__auto___9963 + (1));
i__7951__auto___9963 = G__9964;
continue;
} else {
}
break;
}

var G__9961 = args9959.length;
switch (G__9961) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9959.length)].join('')));

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
var args9966 = [];
var len__7950__auto___9969 = arguments.length;
var i__7951__auto___9970 = (0);
while(true){
if((i__7951__auto___9970 < len__7950__auto___9969)){
args9966.push((arguments[i__7951__auto___9970]));

var G__9971 = (i__7951__auto___9970 + (1));
i__7951__auto___9970 = G__9971;
continue;
} else {
}
break;
}

var G__9968 = args9966.length;
switch (G__9968) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9966.length)].join('')));

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
var G__9973__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9973 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9974__i = 0, G__9974__a = new Array(arguments.length -  2);
while (G__9974__i < G__9974__a.length) {G__9974__a[G__9974__i] = arguments[G__9974__i + 2]; ++G__9974__i;}
  args = new cljs.core.IndexedSeq(G__9974__a,0);
} 
return G__9973__delegate.call(this,elem,_,args);};
G__9973.cljs$lang$maxFixedArity = 2;
G__9973.cljs$lang$applyTo = (function (arglist__9975){
var elem = cljs.core.first(arglist__9975);
arglist__9975 = cljs.core.next(arglist__9975);
var _ = cljs.core.first(arglist__9975);
var args = cljs.core.rest(arglist__9975);
return G__9973__delegate(elem,_,args);
});
G__9973.cljs$core$IFn$_invoke$arity$variadic = G__9973__delegate;
return G__9973;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9976 = cljs.core.seq.call(null,clmap);
var chunk__9977 = null;
var count__9978 = (0);
var i__9979 = (0);
while(true){
if((i__9979 < count__9978)){
var vec__9980 = cljs.core._nth.call(null,chunk__9977,i__9979);
var c = cljs.core.nth.call(null,vec__9980,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9980,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9986 = seq__9976;
var G__9987 = chunk__9977;
var G__9988 = count__9978;
var G__9989 = (i__9979 + (1));
seq__9976 = G__9986;
chunk__9977 = G__9987;
count__9978 = G__9988;
i__9979 = G__9989;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9976);
if(temp__4657__auto__){
var seq__9976__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9976__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9976__$1);
var G__9990 = cljs.core.chunk_rest.call(null,seq__9976__$1);
var G__9991 = c__7656__auto__;
var G__9992 = cljs.core.count.call(null,c__7656__auto__);
var G__9993 = (0);
seq__9976 = G__9990;
chunk__9977 = G__9991;
count__9978 = G__9992;
i__9979 = G__9993;
continue;
} else {
var vec__9983 = cljs.core.first.call(null,seq__9976__$1);
var c = cljs.core.nth.call(null,vec__9983,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9983,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9994 = cljs.core.next.call(null,seq__9976__$1);
var G__9995 = null;
var G__9996 = (0);
var G__9997 = (0);
seq__9976 = G__9994;
chunk__9977 = G__9995;
count__9978 = G__9996;
i__9979 = G__9997;
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