// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9891 = [];
var len__7950__auto___9910 = arguments.length;
var i__7951__auto___9911 = (0);
while(true){
if((i__7951__auto___9911 < len__7950__auto___9910)){
args9891.push((arguments[i__7951__auto___9911]));

var G__9912 = (i__7951__auto___9911 + (1));
i__7951__auto___9911 = G__9912;
continue;
} else {
}
break;
}

var G__9897 = args9891.length;
switch (G__9897) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9891.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9898 = cljs.core.seq.call(null,kvs);
var chunk__9900 = null;
var count__9901 = (0);
var i__9902 = (0);
while(true){
if((i__9902 < count__9901)){
var vec__9904 = cljs.core._nth.call(null,chunk__9900,i__9902);
var k = cljs.core.nth.call(null,vec__9904,(0),null);
var v = cljs.core.nth.call(null,vec__9904,(1),null);
var k_9914__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9914__$1);
} else {
e.attr(k_9914__$1,((cljs.core._EQ_.call(null,true,v))?k_9914__$1:v));
}

var G__9915 = seq__9898;
var G__9916 = chunk__9900;
var G__9917 = count__9901;
var G__9918 = (i__9902 + (1));
seq__9898 = G__9915;
chunk__9900 = G__9916;
count__9901 = G__9917;
i__9902 = G__9918;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9898);
if(temp__4657__auto__){
var seq__9898__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9898__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9898__$1);
var G__9919 = cljs.core.chunk_rest.call(null,seq__9898__$1);
var G__9920 = c__7656__auto__;
var G__9921 = cljs.core.count.call(null,c__7656__auto__);
var G__9922 = (0);
seq__9898 = G__9919;
chunk__9900 = G__9920;
count__9901 = G__9921;
i__9902 = G__9922;
continue;
} else {
var vec__9907 = cljs.core.first.call(null,seq__9898__$1);
var k = cljs.core.nth.call(null,vec__9907,(0),null);
var v = cljs.core.nth.call(null,vec__9907,(1),null);
var k_9923__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9923__$1);
} else {
e.attr(k_9923__$1,((cljs.core._EQ_.call(null,true,v))?k_9923__$1:v));
}

var G__9924 = cljs.core.next.call(null,seq__9898__$1);
var G__9925 = null;
var G__9926 = (0);
var G__9927 = (0);
seq__9898 = G__9924;
chunk__9900 = G__9925;
count__9901 = G__9926;
i__9902 = G__9927;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9892){
var G__9893 = cljs.core.first.call(null,seq9892);
var seq9892__$1 = cljs.core.next.call(null,seq9892);
var G__9894 = cljs.core.first.call(null,seq9892__$1);
var seq9892__$2 = cljs.core.next.call(null,seq9892__$1);
var G__9895 = cljs.core.first.call(null,seq9892__$2);
var seq9892__$3 = cljs.core.next.call(null,seq9892__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9893,G__9894,G__9895,seq9892__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9928 = [];
var len__7950__auto___9945 = arguments.length;
var i__7951__auto___9946 = (0);
while(true){
if((i__7951__auto___9946 < len__7950__auto___9945)){
args9928.push((arguments[i__7951__auto___9946]));

var G__9947 = (i__7951__auto___9946 + (1));
i__7951__auto___9946 = G__9947;
continue;
} else {
}
break;
}

var G__9934 = args9928.length;
switch (G__9934) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9928.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9935 = cljs.core.seq.call(null,kvs);
var chunk__9936 = null;
var count__9937 = (0);
var i__9938 = (0);
while(true){
if((i__9938 < count__9937)){
var vec__9939 = cljs.core._nth.call(null,chunk__9936,i__9938);
var k = cljs.core.nth.call(null,vec__9939,(0),null);
var v = cljs.core.nth.call(null,vec__9939,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9949 = seq__9935;
var G__9950 = chunk__9936;
var G__9951 = count__9937;
var G__9952 = (i__9938 + (1));
seq__9935 = G__9949;
chunk__9936 = G__9950;
count__9937 = G__9951;
i__9938 = G__9952;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9935);
if(temp__4657__auto__){
var seq__9935__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9935__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9935__$1);
var G__9953 = cljs.core.chunk_rest.call(null,seq__9935__$1);
var G__9954 = c__7656__auto__;
var G__9955 = cljs.core.count.call(null,c__7656__auto__);
var G__9956 = (0);
seq__9935 = G__9953;
chunk__9936 = G__9954;
count__9937 = G__9955;
i__9938 = G__9956;
continue;
} else {
var vec__9942 = cljs.core.first.call(null,seq__9935__$1);
var k = cljs.core.nth.call(null,vec__9942,(0),null);
var v = cljs.core.nth.call(null,vec__9942,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9957 = cljs.core.next.call(null,seq__9935__$1);
var G__9958 = null;
var G__9959 = (0);
var G__9960 = (0);
seq__9935 = G__9957;
chunk__9936 = G__9958;
count__9937 = G__9959;
i__9938 = G__9960;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9929){
var G__9930 = cljs.core.first.call(null,seq9929);
var seq9929__$1 = cljs.core.next.call(null,seq9929);
var G__9931 = cljs.core.first.call(null,seq9929__$1);
var seq9929__$2 = cljs.core.next.call(null,seq9929__$1);
var G__9932 = cljs.core.first.call(null,seq9929__$2);
var seq9929__$3 = cljs.core.next.call(null,seq9929__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9930,G__9931,G__9932,seq9929__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9961 = [];
var len__7950__auto___9964 = arguments.length;
var i__7951__auto___9965 = (0);
while(true){
if((i__7951__auto___9965 < len__7950__auto___9964)){
args9961.push((arguments[i__7951__auto___9965]));

var G__9966 = (i__7951__auto___9965 + (1));
i__7951__auto___9965 = G__9966;
continue;
} else {
}
break;
}

var G__9963 = args9961.length;
switch (G__9963) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9961.length)].join('')));

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
var args9968 = [];
var len__7950__auto___9971 = arguments.length;
var i__7951__auto___9972 = (0);
while(true){
if((i__7951__auto___9972 < len__7950__auto___9971)){
args9968.push((arguments[i__7951__auto___9972]));

var G__9973 = (i__7951__auto___9972 + (1));
i__7951__auto___9972 = G__9973;
continue;
} else {
}
break;
}

var G__9970 = args9968.length;
switch (G__9970) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9968.length)].join('')));

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
var G__9975__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9975 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9976__i = 0, G__9976__a = new Array(arguments.length -  2);
while (G__9976__i < G__9976__a.length) {G__9976__a[G__9976__i] = arguments[G__9976__i + 2]; ++G__9976__i;}
  args = new cljs.core.IndexedSeq(G__9976__a,0);
} 
return G__9975__delegate.call(this,elem,_,args);};
G__9975.cljs$lang$maxFixedArity = 2;
G__9975.cljs$lang$applyTo = (function (arglist__9977){
var elem = cljs.core.first(arglist__9977);
arglist__9977 = cljs.core.next(arglist__9977);
var _ = cljs.core.first(arglist__9977);
var args = cljs.core.rest(arglist__9977);
return G__9975__delegate(elem,_,args);
});
G__9975.cljs$core$IFn$_invoke$arity$variadic = G__9975__delegate;
return G__9975;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9978 = cljs.core.seq.call(null,clmap);
var chunk__9979 = null;
var count__9980 = (0);
var i__9981 = (0);
while(true){
if((i__9981 < count__9980)){
var vec__9982 = cljs.core._nth.call(null,chunk__9979,i__9981);
var c = cljs.core.nth.call(null,vec__9982,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9982,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9988 = seq__9978;
var G__9989 = chunk__9979;
var G__9990 = count__9980;
var G__9991 = (i__9981 + (1));
seq__9978 = G__9988;
chunk__9979 = G__9989;
count__9980 = G__9990;
i__9981 = G__9991;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9978);
if(temp__4657__auto__){
var seq__9978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9978__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9978__$1);
var G__9992 = cljs.core.chunk_rest.call(null,seq__9978__$1);
var G__9993 = c__7656__auto__;
var G__9994 = cljs.core.count.call(null,c__7656__auto__);
var G__9995 = (0);
seq__9978 = G__9992;
chunk__9979 = G__9993;
count__9980 = G__9994;
i__9981 = G__9995;
continue;
} else {
var vec__9985 = cljs.core.first.call(null,seq__9978__$1);
var c = cljs.core.nth.call(null,vec__9985,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9985,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9996 = cljs.core.next.call(null,seq__9978__$1);
var G__9997 = null;
var G__9998 = (0);
var G__9999 = (0);
seq__9978 = G__9996;
chunk__9979 = G__9997;
count__9980 = G__9998;
i__9981 = G__9999;
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