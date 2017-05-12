// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9909 = [];
var len__7950__auto___9928 = arguments.length;
var i__7951__auto___9929 = (0);
while(true){
if((i__7951__auto___9929 < len__7950__auto___9928)){
args9909.push((arguments[i__7951__auto___9929]));

var G__9930 = (i__7951__auto___9929 + (1));
i__7951__auto___9929 = G__9930;
continue;
} else {
}
break;
}

var G__9915 = args9909.length;
switch (G__9915) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9909.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9916 = cljs.core.seq.call(null,kvs);
var chunk__9918 = null;
var count__9919 = (0);
var i__9920 = (0);
while(true){
if((i__9920 < count__9919)){
var vec__9922 = cljs.core._nth.call(null,chunk__9918,i__9920);
var k = cljs.core.nth.call(null,vec__9922,(0),null);
var v = cljs.core.nth.call(null,vec__9922,(1),null);
var k_9932__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9932__$1);
} else {
e.attr(k_9932__$1,((cljs.core._EQ_.call(null,true,v))?k_9932__$1:v));
}

var G__9933 = seq__9916;
var G__9934 = chunk__9918;
var G__9935 = count__9919;
var G__9936 = (i__9920 + (1));
seq__9916 = G__9933;
chunk__9918 = G__9934;
count__9919 = G__9935;
i__9920 = G__9936;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9916);
if(temp__4657__auto__){
var seq__9916__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9916__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9916__$1);
var G__9937 = cljs.core.chunk_rest.call(null,seq__9916__$1);
var G__9938 = c__7656__auto__;
var G__9939 = cljs.core.count.call(null,c__7656__auto__);
var G__9940 = (0);
seq__9916 = G__9937;
chunk__9918 = G__9938;
count__9919 = G__9939;
i__9920 = G__9940;
continue;
} else {
var vec__9925 = cljs.core.first.call(null,seq__9916__$1);
var k = cljs.core.nth.call(null,vec__9925,(0),null);
var v = cljs.core.nth.call(null,vec__9925,(1),null);
var k_9941__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9941__$1);
} else {
e.attr(k_9941__$1,((cljs.core._EQ_.call(null,true,v))?k_9941__$1:v));
}

var G__9942 = cljs.core.next.call(null,seq__9916__$1);
var G__9943 = null;
var G__9944 = (0);
var G__9945 = (0);
seq__9916 = G__9942;
chunk__9918 = G__9943;
count__9919 = G__9944;
i__9920 = G__9945;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9910){
var G__9911 = cljs.core.first.call(null,seq9910);
var seq9910__$1 = cljs.core.next.call(null,seq9910);
var G__9912 = cljs.core.first.call(null,seq9910__$1);
var seq9910__$2 = cljs.core.next.call(null,seq9910__$1);
var G__9913 = cljs.core.first.call(null,seq9910__$2);
var seq9910__$3 = cljs.core.next.call(null,seq9910__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9911,G__9912,G__9913,seq9910__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9946 = [];
var len__7950__auto___9963 = arguments.length;
var i__7951__auto___9964 = (0);
while(true){
if((i__7951__auto___9964 < len__7950__auto___9963)){
args9946.push((arguments[i__7951__auto___9964]));

var G__9965 = (i__7951__auto___9964 + (1));
i__7951__auto___9964 = G__9965;
continue;
} else {
}
break;
}

var G__9952 = args9946.length;
switch (G__9952) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9946.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9953 = cljs.core.seq.call(null,kvs);
var chunk__9954 = null;
var count__9955 = (0);
var i__9956 = (0);
while(true){
if((i__9956 < count__9955)){
var vec__9957 = cljs.core._nth.call(null,chunk__9954,i__9956);
var k = cljs.core.nth.call(null,vec__9957,(0),null);
var v = cljs.core.nth.call(null,vec__9957,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9967 = seq__9953;
var G__9968 = chunk__9954;
var G__9969 = count__9955;
var G__9970 = (i__9956 + (1));
seq__9953 = G__9967;
chunk__9954 = G__9968;
count__9955 = G__9969;
i__9956 = G__9970;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9953);
if(temp__4657__auto__){
var seq__9953__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9953__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9953__$1);
var G__9971 = cljs.core.chunk_rest.call(null,seq__9953__$1);
var G__9972 = c__7656__auto__;
var G__9973 = cljs.core.count.call(null,c__7656__auto__);
var G__9974 = (0);
seq__9953 = G__9971;
chunk__9954 = G__9972;
count__9955 = G__9973;
i__9956 = G__9974;
continue;
} else {
var vec__9960 = cljs.core.first.call(null,seq__9953__$1);
var k = cljs.core.nth.call(null,vec__9960,(0),null);
var v = cljs.core.nth.call(null,vec__9960,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9975 = cljs.core.next.call(null,seq__9953__$1);
var G__9976 = null;
var G__9977 = (0);
var G__9978 = (0);
seq__9953 = G__9975;
chunk__9954 = G__9976;
count__9955 = G__9977;
i__9956 = G__9978;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9947){
var G__9948 = cljs.core.first.call(null,seq9947);
var seq9947__$1 = cljs.core.next.call(null,seq9947);
var G__9949 = cljs.core.first.call(null,seq9947__$1);
var seq9947__$2 = cljs.core.next.call(null,seq9947__$1);
var G__9950 = cljs.core.first.call(null,seq9947__$2);
var seq9947__$3 = cljs.core.next.call(null,seq9947__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9948,G__9949,G__9950,seq9947__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9979 = [];
var len__7950__auto___9982 = arguments.length;
var i__7951__auto___9983 = (0);
while(true){
if((i__7951__auto___9983 < len__7950__auto___9982)){
args9979.push((arguments[i__7951__auto___9983]));

var G__9984 = (i__7951__auto___9983 + (1));
i__7951__auto___9983 = G__9984;
continue;
} else {
}
break;
}

var G__9981 = args9979.length;
switch (G__9981) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9979.length)].join('')));

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
var args9986 = [];
var len__7950__auto___9989 = arguments.length;
var i__7951__auto___9990 = (0);
while(true){
if((i__7951__auto___9990 < len__7950__auto___9989)){
args9986.push((arguments[i__7951__auto___9990]));

var G__9991 = (i__7951__auto___9990 + (1));
i__7951__auto___9990 = G__9991;
continue;
} else {
}
break;
}

var G__9988 = args9986.length;
switch (G__9988) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9986.length)].join('')));

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
var G__9993__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9993 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9994__i = 0, G__9994__a = new Array(arguments.length -  2);
while (G__9994__i < G__9994__a.length) {G__9994__a[G__9994__i] = arguments[G__9994__i + 2]; ++G__9994__i;}
  args = new cljs.core.IndexedSeq(G__9994__a,0);
} 
return G__9993__delegate.call(this,elem,_,args);};
G__9993.cljs$lang$maxFixedArity = 2;
G__9993.cljs$lang$applyTo = (function (arglist__9995){
var elem = cljs.core.first(arglist__9995);
arglist__9995 = cljs.core.next(arglist__9995);
var _ = cljs.core.first(arglist__9995);
var args = cljs.core.rest(arglist__9995);
return G__9993__delegate(elem,_,args);
});
G__9993.cljs$core$IFn$_invoke$arity$variadic = G__9993__delegate;
return G__9993;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9996 = cljs.core.seq.call(null,clmap);
var chunk__9997 = null;
var count__9998 = (0);
var i__9999 = (0);
while(true){
if((i__9999 < count__9998)){
var vec__10000 = cljs.core._nth.call(null,chunk__9997,i__9999);
var c = cljs.core.nth.call(null,vec__10000,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__10000,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__10006 = seq__9996;
var G__10007 = chunk__9997;
var G__10008 = count__9998;
var G__10009 = (i__9999 + (1));
seq__9996 = G__10006;
chunk__9997 = G__10007;
count__9998 = G__10008;
i__9999 = G__10009;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9996);
if(temp__4657__auto__){
var seq__9996__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9996__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9996__$1);
var G__10010 = cljs.core.chunk_rest.call(null,seq__9996__$1);
var G__10011 = c__7656__auto__;
var G__10012 = cljs.core.count.call(null,c__7656__auto__);
var G__10013 = (0);
seq__9996 = G__10010;
chunk__9997 = G__10011;
count__9998 = G__10012;
i__9999 = G__10013;
continue;
} else {
var vec__10003 = cljs.core.first.call(null,seq__9996__$1);
var c = cljs.core.nth.call(null,vec__10003,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__10003,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__10014 = cljs.core.next.call(null,seq__9996__$1);
var G__10015 = null;
var G__10016 = (0);
var G__10017 = (0);
seq__9996 = G__10014;
chunk__9997 = G__10015;
count__9998 = G__10016;
i__9999 = G__10017;
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