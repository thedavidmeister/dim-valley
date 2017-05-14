// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args14028 = [];
var len__8306__auto___14047 = arguments.length;
var i__8307__auto___14048 = (0);
while(true){
if((i__8307__auto___14048 < len__8306__auto___14047)){
args14028.push((arguments[i__8307__auto___14048]));

var G__14049 = (i__8307__auto___14048 + (1));
i__8307__auto___14048 = G__14049;
continue;
} else {
}
break;
}

var G__14034 = args14028.length;
switch (G__14034) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8325__auto__ = (new cljs.core.IndexedSeq(args14028.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8325__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14035 = cljs.core.seq.call(null,kvs);
var chunk__14037 = null;
var count__14038 = (0);
var i__14039 = (0);
while(true){
if((i__14039 < count__14038)){
var vec__14041 = cljs.core._nth.call(null,chunk__14037,i__14039);
var k = cljs.core.nth.call(null,vec__14041,(0),null);
var v = cljs.core.nth.call(null,vec__14041,(1),null);
var k_14051__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_14051__$1);
} else {
e.attr(k_14051__$1,((cljs.core._EQ_.call(null,true,v))?k_14051__$1:v));
}

var G__14052 = seq__14035;
var G__14053 = chunk__14037;
var G__14054 = count__14038;
var G__14055 = (i__14039 + (1));
seq__14035 = G__14052;
chunk__14037 = G__14053;
count__14038 = G__14054;
i__14039 = G__14055;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14035);
if(temp__4657__auto__){
var seq__14035__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14035__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__14035__$1);
var G__14056 = cljs.core.chunk_rest.call(null,seq__14035__$1);
var G__14057 = c__8012__auto__;
var G__14058 = cljs.core.count.call(null,c__8012__auto__);
var G__14059 = (0);
seq__14035 = G__14056;
chunk__14037 = G__14057;
count__14038 = G__14058;
i__14039 = G__14059;
continue;
} else {
var vec__14044 = cljs.core.first.call(null,seq__14035__$1);
var k = cljs.core.nth.call(null,vec__14044,(0),null);
var v = cljs.core.nth.call(null,vec__14044,(1),null);
var k_14060__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_14060__$1);
} else {
e.attr(k_14060__$1,((cljs.core._EQ_.call(null,true,v))?k_14060__$1:v));
}

var G__14061 = cljs.core.next.call(null,seq__14035__$1);
var G__14062 = null;
var G__14063 = (0);
var G__14064 = (0);
seq__14035 = G__14061;
chunk__14037 = G__14062;
count__14038 = G__14063;
i__14039 = G__14064;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14029){
var G__14030 = cljs.core.first.call(null,seq14029);
var seq14029__$1 = cljs.core.next.call(null,seq14029);
var G__14031 = cljs.core.first.call(null,seq14029__$1);
var seq14029__$2 = cljs.core.next.call(null,seq14029__$1);
var G__14032 = cljs.core.first.call(null,seq14029__$2);
var seq14029__$3 = cljs.core.next.call(null,seq14029__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14030,G__14031,G__14032,seq14029__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args14065 = [];
var len__8306__auto___14082 = arguments.length;
var i__8307__auto___14083 = (0);
while(true){
if((i__8307__auto___14083 < len__8306__auto___14082)){
args14065.push((arguments[i__8307__auto___14083]));

var G__14084 = (i__8307__auto___14083 + (1));
i__8307__auto___14083 = G__14084;
continue;
} else {
}
break;
}

var G__14071 = args14065.length;
switch (G__14071) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8325__auto__ = (new cljs.core.IndexedSeq(args14065.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8325__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14072 = cljs.core.seq.call(null,kvs);
var chunk__14073 = null;
var count__14074 = (0);
var i__14075 = (0);
while(true){
if((i__14075 < count__14074)){
var vec__14076 = cljs.core._nth.call(null,chunk__14073,i__14075);
var k = cljs.core.nth.call(null,vec__14076,(0),null);
var v = cljs.core.nth.call(null,vec__14076,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14086 = seq__14072;
var G__14087 = chunk__14073;
var G__14088 = count__14074;
var G__14089 = (i__14075 + (1));
seq__14072 = G__14086;
chunk__14073 = G__14087;
count__14074 = G__14088;
i__14075 = G__14089;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14072);
if(temp__4657__auto__){
var seq__14072__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14072__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__14072__$1);
var G__14090 = cljs.core.chunk_rest.call(null,seq__14072__$1);
var G__14091 = c__8012__auto__;
var G__14092 = cljs.core.count.call(null,c__8012__auto__);
var G__14093 = (0);
seq__14072 = G__14090;
chunk__14073 = G__14091;
count__14074 = G__14092;
i__14075 = G__14093;
continue;
} else {
var vec__14079 = cljs.core.first.call(null,seq__14072__$1);
var k = cljs.core.nth.call(null,vec__14079,(0),null);
var v = cljs.core.nth.call(null,vec__14079,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14094 = cljs.core.next.call(null,seq__14072__$1);
var G__14095 = null;
var G__14096 = (0);
var G__14097 = (0);
seq__14072 = G__14094;
chunk__14073 = G__14095;
count__14074 = G__14096;
i__14075 = G__14097;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14066){
var G__14067 = cljs.core.first.call(null,seq14066);
var seq14066__$1 = cljs.core.next.call(null,seq14066);
var G__14068 = cljs.core.first.call(null,seq14066__$1);
var seq14066__$2 = cljs.core.next.call(null,seq14066__$1);
var G__14069 = cljs.core.first.call(null,seq14066__$2);
var seq14066__$3 = cljs.core.next.call(null,seq14066__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14067,G__14068,G__14069,seq14066__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args14098 = [];
var len__8306__auto___14101 = arguments.length;
var i__8307__auto___14102 = (0);
while(true){
if((i__8307__auto___14102 < len__8306__auto___14101)){
args14098.push((arguments[i__8307__auto___14102]));

var G__14103 = (i__8307__auto___14102 + (1));
i__8307__auto___14102 = G__14103;
continue;
} else {
}
break;
}

var G__14100 = args14098.length;
switch (G__14100) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14098.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.jquery.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args14105 = [];
var len__8306__auto___14108 = arguments.length;
var i__8307__auto___14109 = (0);
while(true){
if((i__8307__auto___14109 < len__8306__auto___14108)){
args14105.push((arguments[i__8307__auto___14109]));

var G__14110 = (i__8307__auto___14109 + (1));
i__8307__auto___14109 = G__14110;
continue;
} else {
}
break;
}

var G__14107 = args14105.length;
switch (G__14107) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14105.length)].join('')));

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
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]));
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
var G__14112__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14112 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14113__i = 0, G__14113__a = new Array(arguments.length -  2);
while (G__14113__i < G__14113__a.length) {G__14113__a[G__14113__i] = arguments[G__14113__i + 2]; ++G__14113__i;}
  args = new cljs.core.IndexedSeq(G__14113__a,0,null);
} 
return G__14112__delegate.call(this,elem,_,args);};
G__14112.cljs$lang$maxFixedArity = 2;
G__14112.cljs$lang$applyTo = (function (arglist__14114){
var elem = cljs.core.first(arglist__14114);
arglist__14114 = cljs.core.next(arglist__14114);
var _ = cljs.core.first(arglist__14114);
var args = cljs.core.rest(arglist__14114);
return G__14112__delegate(elem,_,args);
});
G__14112.cljs$core$IFn$_invoke$arity$variadic = G__14112__delegate;
return G__14112;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__14115 = cljs.core.seq.call(null,clmap);
var chunk__14116 = null;
var count__14117 = (0);
var i__14118 = (0);
while(true){
if((i__14118 < count__14117)){
var vec__14119 = cljs.core._nth.call(null,chunk__14116,i__14118);
var c = cljs.core.nth.call(null,vec__14119,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__14119,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__14125 = seq__14115;
var G__14126 = chunk__14116;
var G__14127 = count__14117;
var G__14128 = (i__14118 + (1));
seq__14115 = G__14125;
chunk__14116 = G__14126;
count__14117 = G__14127;
i__14118 = G__14128;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14115);
if(temp__4657__auto__){
var seq__14115__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14115__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__14115__$1);
var G__14129 = cljs.core.chunk_rest.call(null,seq__14115__$1);
var G__14130 = c__8012__auto__;
var G__14131 = cljs.core.count.call(null,c__8012__auto__);
var G__14132 = (0);
seq__14115 = G__14129;
chunk__14116 = G__14130;
count__14117 = G__14131;
i__14118 = G__14132;
continue;
} else {
var vec__14122 = cljs.core.first.call(null,seq__14115__$1);
var c = cljs.core.nth.call(null,vec__14122,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__14122,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__14133 = cljs.core.next.call(null,seq__14115__$1);
var G__14134 = null;
var G__14135 = (0);
var G__14136 = (0);
seq__14115 = G__14133;
chunk__14116 = G__14134;
count__14117 = G__14135;
i__14118 = G__14136;
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
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
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