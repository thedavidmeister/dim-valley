// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__23873 = arguments.length;
switch (G__23873) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9938__auto__ = [];
var len__9915__auto___23887 = arguments.length;
var i__9916__auto___23888 = (0);
while(true){
if((i__9916__auto___23888 < len__9915__auto___23887)){
args_arr__9938__auto__.push((arguments[i__9916__auto___23888]));

var G__23889 = (i__9916__auto___23888 + (1));
i__9916__auto___23888 = G__23889;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23874 = cljs.core.seq(kvs);
var chunk__23876 = null;
var count__23877 = (0);
var i__23878 = (0);
while(true){
if((i__23878 < count__23877)){
var vec__23880 = chunk__23876.cljs$core$IIndexed$_nth$arity$2(null,i__23878);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23880,(1),null);
var k_23890__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_23890__$1);
} else {
e.attr(k_23890__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23890__$1:v));
}

var G__23891 = seq__23874;
var G__23892 = chunk__23876;
var G__23893 = count__23877;
var G__23894 = (i__23878 + (1));
seq__23874 = G__23891;
chunk__23876 = G__23892;
count__23877 = G__23893;
i__23878 = G__23894;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__23874);
if(temp__5290__auto__){
var seq__23874__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23874__$1)){
var c__9569__auto__ = cljs.core.chunk_first(seq__23874__$1);
var G__23895 = cljs.core.chunk_rest(seq__23874__$1);
var G__23896 = c__9569__auto__;
var G__23897 = cljs.core.count(c__9569__auto__);
var G__23898 = (0);
seq__23874 = G__23895;
chunk__23876 = G__23896;
count__23877 = G__23897;
i__23878 = G__23898;
continue;
} else {
var vec__23883 = cljs.core.first(seq__23874__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23883,(1),null);
var k_23899__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_23899__$1);
} else {
e.attr(k_23899__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23899__$1:v));
}

var G__23900 = cljs.core.next(seq__23874__$1);
var G__23901 = null;
var G__23902 = (0);
var G__23903 = (0);
seq__23874 = G__23900;
chunk__23876 = G__23901;
count__23877 = G__23902;
i__23878 = G__23903;
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
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq23869){
var G__23870 = cljs.core.first(seq23869);
var seq23869__$1 = cljs.core.next(seq23869);
var G__23871 = cljs.core.first(seq23869__$1);
var seq23869__$2 = cljs.core.next(seq23869__$1);
var G__23872 = cljs.core.first(seq23869__$2);
var seq23869__$3 = cljs.core.next(seq23869__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23870,G__23871,G__23872,seq23869__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__23909 = arguments.length;
switch (G__23909) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9938__auto__ = [];
var len__9915__auto___23921 = arguments.length;
var i__9916__auto___23922 = (0);
while(true){
if((i__9916__auto___23922 < len__9915__auto___23921)){
args_arr__9938__auto__.push((arguments[i__9916__auto___23922]));

var G__23923 = (i__9916__auto___23922 + (1));
i__9916__auto___23922 = G__23923;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23910 = cljs.core.seq(kvs);
var chunk__23911 = null;
var count__23912 = (0);
var i__23913 = (0);
while(true){
if((i__23913 < count__23912)){
var vec__23914 = chunk__23911.cljs$core$IIndexed$_nth$arity$2(null,i__23913);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23924 = seq__23910;
var G__23925 = chunk__23911;
var G__23926 = count__23912;
var G__23927 = (i__23913 + (1));
seq__23910 = G__23924;
chunk__23911 = G__23925;
count__23912 = G__23926;
i__23913 = G__23927;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__23910);
if(temp__5290__auto__){
var seq__23910__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23910__$1)){
var c__9569__auto__ = cljs.core.chunk_first(seq__23910__$1);
var G__23928 = cljs.core.chunk_rest(seq__23910__$1);
var G__23929 = c__9569__auto__;
var G__23930 = cljs.core.count(c__9569__auto__);
var G__23931 = (0);
seq__23910 = G__23928;
chunk__23911 = G__23929;
count__23912 = G__23930;
i__23913 = G__23931;
continue;
} else {
var vec__23917 = cljs.core.first(seq__23910__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23932 = cljs.core.next(seq__23910__$1);
var G__23933 = null;
var G__23934 = (0);
var G__23935 = (0);
seq__23910 = G__23932;
chunk__23911 = G__23933;
count__23912 = G__23934;
i__23913 = G__23935;
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
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq23905){
var G__23906 = cljs.core.first(seq23905);
var seq23905__$1 = cljs.core.next(seq23905);
var G__23907 = cljs.core.first(seq23905__$1);
var seq23905__$2 = cljs.core.next(seq23905__$1);
var G__23908 = cljs.core.first(seq23905__$2);
var seq23905__$3 = cljs.core.next(seq23905__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23906,G__23907,G__23908,seq23905__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__23937 = arguments.length;
switch (G__23937) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var G__23940 = arguments.length;
switch (G__23940) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__23942 = elem;
var G__23943 = cljs.core.cst$kw$attr;
var G__23944 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23942,G__23943,G__23944) : hoplon.core.do_BANG_.call(null,G__23942,G__23943,G__23944));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__23945__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__23945 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__23946__i = 0, G__23946__a = new Array(arguments.length -  2);
while (G__23946__i < G__23946__a.length) {G__23946__a[G__23946__i] = arguments[G__23946__i + 2]; ++G__23946__i;}
  args = new cljs.core.IndexedSeq(G__23946__a,0,null);
} 
return G__23945__delegate.call(this,elem,_,args);};
G__23945.cljs$lang$maxFixedArity = 2;
G__23945.cljs$lang$applyTo = (function (arglist__23947){
var elem = cljs.core.first(arglist__23947);
arglist__23947 = cljs.core.next(arglist__23947);
var _ = cljs.core.first(arglist__23947);
var args = cljs.core.rest(arglist__23947);
return G__23945__delegate(elem,_,args);
});
G__23945.cljs$core$IFn$_invoke$arity$variadic = G__23945__delegate;
return G__23945;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__23948 = cljs.core.seq(clmap);
var chunk__23949 = null;
var count__23950 = (0);
var i__23951 = (0);
while(true){
if((i__23951 < count__23950)){
var vec__23952 = chunk__23949.cljs$core$IIndexed$_nth$arity$2(null,i__23951);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23952,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23952,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23958 = seq__23948;
var G__23959 = chunk__23949;
var G__23960 = count__23950;
var G__23961 = (i__23951 + (1));
seq__23948 = G__23958;
chunk__23949 = G__23959;
count__23950 = G__23960;
i__23951 = G__23961;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__23948);
if(temp__5290__auto__){
var seq__23948__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23948__$1)){
var c__9569__auto__ = cljs.core.chunk_first(seq__23948__$1);
var G__23962 = cljs.core.chunk_rest(seq__23948__$1);
var G__23963 = c__9569__auto__;
var G__23964 = cljs.core.count(c__9569__auto__);
var G__23965 = (0);
seq__23948 = G__23962;
chunk__23949 = G__23963;
count__23950 = G__23964;
i__23951 = G__23965;
continue;
} else {
var vec__23955 = cljs.core.first(seq__23948__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23955,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23955,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23966 = cljs.core.next(seq__23948__$1);
var G__23967 = null;
var G__23968 = (0);
var G__23969 = (0);
seq__23948 = G__23966;
chunk__23949 = G__23967;
count__23950 = G__23968;
i__23951 = G__23969;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_class);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__23970 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__23971 = (0);
return setTimeout(G__23970,G__23971);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__23972_23978 = elem;
var G__23973_23979 = cljs.core.cst$kw$focus;
var G__23974_23980 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23972_23978,G__23973_23979,G__23974_23980) : hoplon.core.do_BANG_.call(null,G__23972_23978,G__23973_23979,G__23974_23980));

var G__23975 = elem;
var G__23976 = cljs.core.cst$kw$select;
var G__23977 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23975,G__23976,G__23977) : hoplon.core.do_BANG_.call(null,G__23975,G__23976,G__23977));
} else {
return null;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__23981 = this$__$1.target;
return jQuery(G__23981);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
