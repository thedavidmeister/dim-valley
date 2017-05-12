// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9902 = [];
var len__7950__auto___9921 = arguments.length;
var i__7951__auto___9922 = (0);
while(true){
if((i__7951__auto___9922 < len__7950__auto___9921)){
args9902.push((arguments[i__7951__auto___9922]));

var G__9923 = (i__7951__auto___9922 + (1));
i__7951__auto___9922 = G__9923;
continue;
} else {
}
break;
}

var G__9908 = args9902.length;
switch (G__9908) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9902.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9909 = cljs.core.seq.call(null,kvs);
var chunk__9911 = null;
var count__9912 = (0);
var i__9913 = (0);
while(true){
if((i__9913 < count__9912)){
var vec__9915 = cljs.core._nth.call(null,chunk__9911,i__9913);
var k = cljs.core.nth.call(null,vec__9915,(0),null);
var v = cljs.core.nth.call(null,vec__9915,(1),null);
var k_9925__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9925__$1);
} else {
e.attr(k_9925__$1,((cljs.core._EQ_.call(null,true,v))?k_9925__$1:v));
}

var G__9926 = seq__9909;
var G__9927 = chunk__9911;
var G__9928 = count__9912;
var G__9929 = (i__9913 + (1));
seq__9909 = G__9926;
chunk__9911 = G__9927;
count__9912 = G__9928;
i__9913 = G__9929;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9909);
if(temp__4657__auto__){
var seq__9909__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9909__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9909__$1);
var G__9930 = cljs.core.chunk_rest.call(null,seq__9909__$1);
var G__9931 = c__7656__auto__;
var G__9932 = cljs.core.count.call(null,c__7656__auto__);
var G__9933 = (0);
seq__9909 = G__9930;
chunk__9911 = G__9931;
count__9912 = G__9932;
i__9913 = G__9933;
continue;
} else {
var vec__9918 = cljs.core.first.call(null,seq__9909__$1);
var k = cljs.core.nth.call(null,vec__9918,(0),null);
var v = cljs.core.nth.call(null,vec__9918,(1),null);
var k_9934__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9934__$1);
} else {
e.attr(k_9934__$1,((cljs.core._EQ_.call(null,true,v))?k_9934__$1:v));
}

var G__9935 = cljs.core.next.call(null,seq__9909__$1);
var G__9936 = null;
var G__9937 = (0);
var G__9938 = (0);
seq__9909 = G__9935;
chunk__9911 = G__9936;
count__9912 = G__9937;
i__9913 = G__9938;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9903){
var G__9904 = cljs.core.first.call(null,seq9903);
var seq9903__$1 = cljs.core.next.call(null,seq9903);
var G__9905 = cljs.core.first.call(null,seq9903__$1);
var seq9903__$2 = cljs.core.next.call(null,seq9903__$1);
var G__9906 = cljs.core.first.call(null,seq9903__$2);
var seq9903__$3 = cljs.core.next.call(null,seq9903__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9904,G__9905,G__9906,seq9903__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9939 = [];
var len__7950__auto___9956 = arguments.length;
var i__7951__auto___9957 = (0);
while(true){
if((i__7951__auto___9957 < len__7950__auto___9956)){
args9939.push((arguments[i__7951__auto___9957]));

var G__9958 = (i__7951__auto___9957 + (1));
i__7951__auto___9957 = G__9958;
continue;
} else {
}
break;
}

var G__9945 = args9939.length;
switch (G__9945) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9939.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9946 = cljs.core.seq.call(null,kvs);
var chunk__9947 = null;
var count__9948 = (0);
var i__9949 = (0);
while(true){
if((i__9949 < count__9948)){
var vec__9950 = cljs.core._nth.call(null,chunk__9947,i__9949);
var k = cljs.core.nth.call(null,vec__9950,(0),null);
var v = cljs.core.nth.call(null,vec__9950,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9960 = seq__9946;
var G__9961 = chunk__9947;
var G__9962 = count__9948;
var G__9963 = (i__9949 + (1));
seq__9946 = G__9960;
chunk__9947 = G__9961;
count__9948 = G__9962;
i__9949 = G__9963;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9946);
if(temp__4657__auto__){
var seq__9946__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9946__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9946__$1);
var G__9964 = cljs.core.chunk_rest.call(null,seq__9946__$1);
var G__9965 = c__7656__auto__;
var G__9966 = cljs.core.count.call(null,c__7656__auto__);
var G__9967 = (0);
seq__9946 = G__9964;
chunk__9947 = G__9965;
count__9948 = G__9966;
i__9949 = G__9967;
continue;
} else {
var vec__9953 = cljs.core.first.call(null,seq__9946__$1);
var k = cljs.core.nth.call(null,vec__9953,(0),null);
var v = cljs.core.nth.call(null,vec__9953,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9968 = cljs.core.next.call(null,seq__9946__$1);
var G__9969 = null;
var G__9970 = (0);
var G__9971 = (0);
seq__9946 = G__9968;
chunk__9947 = G__9969;
count__9948 = G__9970;
i__9949 = G__9971;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9940){
var G__9941 = cljs.core.first.call(null,seq9940);
var seq9940__$1 = cljs.core.next.call(null,seq9940);
var G__9942 = cljs.core.first.call(null,seq9940__$1);
var seq9940__$2 = cljs.core.next.call(null,seq9940__$1);
var G__9943 = cljs.core.first.call(null,seq9940__$2);
var seq9940__$3 = cljs.core.next.call(null,seq9940__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9941,G__9942,G__9943,seq9940__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9972 = [];
var len__7950__auto___9975 = arguments.length;
var i__7951__auto___9976 = (0);
while(true){
if((i__7951__auto___9976 < len__7950__auto___9975)){
args9972.push((arguments[i__7951__auto___9976]));

var G__9977 = (i__7951__auto___9976 + (1));
i__7951__auto___9976 = G__9977;
continue;
} else {
}
break;
}

var G__9974 = args9972.length;
switch (G__9974) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9972.length)].join('')));

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
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9979.length)].join('')));

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
var G__9986__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9986 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9987__i = 0, G__9987__a = new Array(arguments.length -  2);
while (G__9987__i < G__9987__a.length) {G__9987__a[G__9987__i] = arguments[G__9987__i + 2]; ++G__9987__i;}
  args = new cljs.core.IndexedSeq(G__9987__a,0);
} 
return G__9986__delegate.call(this,elem,_,args);};
G__9986.cljs$lang$maxFixedArity = 2;
G__9986.cljs$lang$applyTo = (function (arglist__9988){
var elem = cljs.core.first(arglist__9988);
arglist__9988 = cljs.core.next(arglist__9988);
var _ = cljs.core.first(arglist__9988);
var args = cljs.core.rest(arglist__9988);
return G__9986__delegate(elem,_,args);
});
G__9986.cljs$core$IFn$_invoke$arity$variadic = G__9986__delegate;
return G__9986;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9989 = cljs.core.seq.call(null,clmap);
var chunk__9990 = null;
var count__9991 = (0);
var i__9992 = (0);
while(true){
if((i__9992 < count__9991)){
var vec__9993 = cljs.core._nth.call(null,chunk__9990,i__9992);
var c = cljs.core.nth.call(null,vec__9993,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9993,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9999 = seq__9989;
var G__10000 = chunk__9990;
var G__10001 = count__9991;
var G__10002 = (i__9992 + (1));
seq__9989 = G__9999;
chunk__9990 = G__10000;
count__9991 = G__10001;
i__9992 = G__10002;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9989);
if(temp__4657__auto__){
var seq__9989__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9989__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9989__$1);
var G__10003 = cljs.core.chunk_rest.call(null,seq__9989__$1);
var G__10004 = c__7656__auto__;
var G__10005 = cljs.core.count.call(null,c__7656__auto__);
var G__10006 = (0);
seq__9989 = G__10003;
chunk__9990 = G__10004;
count__9991 = G__10005;
i__9992 = G__10006;
continue;
} else {
var vec__9996 = cljs.core.first.call(null,seq__9989__$1);
var c = cljs.core.nth.call(null,vec__9996,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9996,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__10007 = cljs.core.next.call(null,seq__9989__$1);
var G__10008 = null;
var G__10009 = (0);
var G__10010 = (0);
seq__9989 = G__10007;
chunk__9990 = G__10008;
count__9991 = G__10009;
i__9992 = G__10010;
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