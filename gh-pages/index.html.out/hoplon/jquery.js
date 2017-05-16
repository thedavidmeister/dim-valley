// Compiled by ClojureScript 1.9.521 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args14919 = [];
var len__8981__auto___14938 = arguments.length;
var i__8982__auto___14939 = (0);
while(true){
if((i__8982__auto___14939 < len__8981__auto___14938)){
args14919.push((arguments[i__8982__auto___14939]));

var G__14940 = (i__8982__auto___14939 + (1));
i__8982__auto___14939 = G__14940;
continue;
} else {
}
break;
}

var G__14925 = args14919.length;
switch (G__14925) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14919.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14926 = cljs.core.seq.call(null,kvs);
var chunk__14928 = null;
var count__14929 = (0);
var i__14930 = (0);
while(true){
if((i__14930 < count__14929)){
var vec__14932 = cljs.core._nth.call(null,chunk__14928,i__14930);
var k = cljs.core.nth.call(null,vec__14932,(0),null);
var v = cljs.core.nth.call(null,vec__14932,(1),null);
var k_14942__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_14942__$1);
} else {
e.attr(k_14942__$1,((cljs.core._EQ_.call(null,true,v))?k_14942__$1:v));
}

var G__14943 = seq__14926;
var G__14944 = chunk__14928;
var G__14945 = count__14929;
var G__14946 = (i__14930 + (1));
seq__14926 = G__14943;
chunk__14928 = G__14944;
count__14929 = G__14945;
i__14930 = G__14946;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__14926);
if(temp__6738__auto__){
var seq__14926__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14926__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__14926__$1);
var G__14947 = cljs.core.chunk_rest.call(null,seq__14926__$1);
var G__14948 = c__8671__auto__;
var G__14949 = cljs.core.count.call(null,c__8671__auto__);
var G__14950 = (0);
seq__14926 = G__14947;
chunk__14928 = G__14948;
count__14929 = G__14949;
i__14930 = G__14950;
continue;
} else {
var vec__14935 = cljs.core.first.call(null,seq__14926__$1);
var k = cljs.core.nth.call(null,vec__14935,(0),null);
var v = cljs.core.nth.call(null,vec__14935,(1),null);
var k_14951__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_14951__$1);
} else {
e.attr(k_14951__$1,((cljs.core._EQ_.call(null,true,v))?k_14951__$1:v));
}

var G__14952 = cljs.core.next.call(null,seq__14926__$1);
var G__14953 = null;
var G__14954 = (0);
var G__14955 = (0);
seq__14926 = G__14952;
chunk__14928 = G__14953;
count__14929 = G__14954;
i__14930 = G__14955;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14920){
var G__14921 = cljs.core.first.call(null,seq14920);
var seq14920__$1 = cljs.core.next.call(null,seq14920);
var G__14922 = cljs.core.first.call(null,seq14920__$1);
var seq14920__$2 = cljs.core.next.call(null,seq14920__$1);
var G__14923 = cljs.core.first.call(null,seq14920__$2);
var seq14920__$3 = cljs.core.next.call(null,seq14920__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14921,G__14922,G__14923,seq14920__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args14956 = [];
var len__8981__auto___14973 = arguments.length;
var i__8982__auto___14974 = (0);
while(true){
if((i__8982__auto___14974 < len__8981__auto___14973)){
args14956.push((arguments[i__8982__auto___14974]));

var G__14975 = (i__8982__auto___14974 + (1));
i__8982__auto___14974 = G__14975;
continue;
} else {
}
break;
}

var G__14962 = args14956.length;
switch (G__14962) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14956.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14963 = cljs.core.seq.call(null,kvs);
var chunk__14964 = null;
var count__14965 = (0);
var i__14966 = (0);
while(true){
if((i__14966 < count__14965)){
var vec__14967 = cljs.core._nth.call(null,chunk__14964,i__14966);
var k = cljs.core.nth.call(null,vec__14967,(0),null);
var v = cljs.core.nth.call(null,vec__14967,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14977 = seq__14963;
var G__14978 = chunk__14964;
var G__14979 = count__14965;
var G__14980 = (i__14966 + (1));
seq__14963 = G__14977;
chunk__14964 = G__14978;
count__14965 = G__14979;
i__14966 = G__14980;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__14963);
if(temp__6738__auto__){
var seq__14963__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14963__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__14963__$1);
var G__14981 = cljs.core.chunk_rest.call(null,seq__14963__$1);
var G__14982 = c__8671__auto__;
var G__14983 = cljs.core.count.call(null,c__8671__auto__);
var G__14984 = (0);
seq__14963 = G__14981;
chunk__14964 = G__14982;
count__14965 = G__14983;
i__14966 = G__14984;
continue;
} else {
var vec__14970 = cljs.core.first.call(null,seq__14963__$1);
var k = cljs.core.nth.call(null,vec__14970,(0),null);
var v = cljs.core.nth.call(null,vec__14970,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14985 = cljs.core.next.call(null,seq__14963__$1);
var G__14986 = null;
var G__14987 = (0);
var G__14988 = (0);
seq__14963 = G__14985;
chunk__14964 = G__14986;
count__14965 = G__14987;
i__14966 = G__14988;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14957){
var G__14958 = cljs.core.first.call(null,seq14957);
var seq14957__$1 = cljs.core.next.call(null,seq14957);
var G__14959 = cljs.core.first.call(null,seq14957__$1);
var seq14957__$2 = cljs.core.next.call(null,seq14957__$1);
var G__14960 = cljs.core.first.call(null,seq14957__$2);
var seq14957__$3 = cljs.core.next.call(null,seq14957__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14958,G__14959,G__14960,seq14957__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args14989 = [];
var len__8981__auto___14992 = arguments.length;
var i__8982__auto___14993 = (0);
while(true){
if((i__8982__auto___14993 < len__8981__auto___14992)){
args14989.push((arguments[i__8982__auto___14993]));

var G__14994 = (i__8982__auto___14993 + (1));
i__8982__auto___14993 = G__14994;
continue;
} else {
}
break;
}

var G__14991 = args14989.length;
switch (G__14991) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14989.length)].join('')));

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
var args14996 = [];
var len__8981__auto___14999 = arguments.length;
var i__8982__auto___15000 = (0);
while(true){
if((i__8982__auto___15000 < len__8981__auto___14999)){
args14996.push((arguments[i__8982__auto___15000]));

var G__15001 = (i__8982__auto___15000 + (1));
i__8982__auto___15000 = G__15001;
continue;
} else {
}
break;
}

var G__14998 = args14996.length;
switch (G__14998) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14996.length)].join('')));

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
var G__15003__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15003 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15004__i = 0, G__15004__a = new Array(arguments.length -  2);
while (G__15004__i < G__15004__a.length) {G__15004__a[G__15004__i] = arguments[G__15004__i + 2]; ++G__15004__i;}
  args = new cljs.core.IndexedSeq(G__15004__a,0);
} 
return G__15003__delegate.call(this,elem,_,args);};
G__15003.cljs$lang$maxFixedArity = 2;
G__15003.cljs$lang$applyTo = (function (arglist__15005){
var elem = cljs.core.first(arglist__15005);
arglist__15005 = cljs.core.next(arglist__15005);
var _ = cljs.core.first(arglist__15005);
var args = cljs.core.rest(arglist__15005);
return G__15003__delegate(elem,_,args);
});
G__15003.cljs$core$IFn$_invoke$arity$variadic = G__15003__delegate;
return G__15003;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__15006 = cljs.core.seq.call(null,clmap);
var chunk__15007 = null;
var count__15008 = (0);
var i__15009 = (0);
while(true){
if((i__15009 < count__15008)){
var vec__15010 = cljs.core._nth.call(null,chunk__15007,i__15009);
var c = cljs.core.nth.call(null,vec__15010,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__15010,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__15016 = seq__15006;
var G__15017 = chunk__15007;
var G__15018 = count__15008;
var G__15019 = (i__15009 + (1));
seq__15006 = G__15016;
chunk__15007 = G__15017;
count__15008 = G__15018;
i__15009 = G__15019;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__15006);
if(temp__6738__auto__){
var seq__15006__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15006__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__15006__$1);
var G__15020 = cljs.core.chunk_rest.call(null,seq__15006__$1);
var G__15021 = c__8671__auto__;
var G__15022 = cljs.core.count.call(null,c__8671__auto__);
var G__15023 = (0);
seq__15006 = G__15020;
chunk__15007 = G__15021;
count__15008 = G__15022;
i__15009 = G__15023;
continue;
} else {
var vec__15013 = cljs.core.first.call(null,seq__15006__$1);
var c = cljs.core.nth.call(null,vec__15013,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__15013,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__15024 = cljs.core.next.call(null,seq__15006__$1);
var G__15025 = null;
var G__15026 = (0);
var G__15027 = (0);
seq__15006 = G__15024;
chunk__15007 = G__15025;
count__15008 = G__15026;
i__15009 = G__15027;
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