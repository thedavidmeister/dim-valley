// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__19822 = arguments.length;
switch (G__19822) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19836 = arguments.length;
var i__9520__auto___19837 = (0);
while(true){
if((i__9520__auto___19837 < len__9519__auto___19836)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19837]));

var G__19838 = (i__9520__auto___19837 + (1));
i__9520__auto___19837 = G__19838;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9543__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19823 = cljs.core.seq(kvs);
var chunk__19825 = null;
var count__19826 = (0);
var i__19827 = (0);
while(true){
if((i__19827 < count__19826)){
var vec__19829 = chunk__19825.cljs$core$IIndexed$_nth$arity$2(null,i__19827);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19829,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19829,(1),null);
var k_19839__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19839__$1);
} else {
e.attr(k_19839__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19839__$1:v));
}

var G__19840 = seq__19823;
var G__19841 = chunk__19825;
var G__19842 = count__19826;
var G__19843 = (i__19827 + (1));
seq__19823 = G__19840;
chunk__19825 = G__19841;
count__19826 = G__19842;
i__19827 = G__19843;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19823);
if(temp__5290__auto__){
var seq__19823__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19823__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19823__$1);
var G__19844 = cljs.core.chunk_rest(seq__19823__$1);
var G__19845 = c__9173__auto__;
var G__19846 = cljs.core.count(c__9173__auto__);
var G__19847 = (0);
seq__19823 = G__19844;
chunk__19825 = G__19845;
count__19826 = G__19846;
i__19827 = G__19847;
continue;
} else {
var vec__19832 = cljs.core.first(seq__19823__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19832,(1),null);
var k_19848__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19848__$1);
} else {
e.attr(k_19848__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19848__$1:v));
}

var G__19849 = cljs.core.next(seq__19823__$1);
var G__19850 = null;
var G__19851 = (0);
var G__19852 = (0);
seq__19823 = G__19849;
chunk__19825 = G__19850;
count__19826 = G__19851;
i__19827 = G__19852;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19818){
var G__19819 = cljs.core.first(seq19818);
var seq19818__$1 = cljs.core.next(seq19818);
var G__19820 = cljs.core.first(seq19818__$1);
var seq19818__$2 = cljs.core.next(seq19818__$1);
var G__19821 = cljs.core.first(seq19818__$2);
var seq19818__$3 = cljs.core.next(seq19818__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19819,G__19820,G__19821,seq19818__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__19858 = arguments.length;
switch (G__19858) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19870 = arguments.length;
var i__9520__auto___19871 = (0);
while(true){
if((i__9520__auto___19871 < len__9519__auto___19870)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19871]));

var G__19872 = (i__9520__auto___19871 + (1));
i__9520__auto___19871 = G__19872;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9543__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19859 = cljs.core.seq(kvs);
var chunk__19860 = null;
var count__19861 = (0);
var i__19862 = (0);
while(true){
if((i__19862 < count__19861)){
var vec__19863 = chunk__19860.cljs$core$IIndexed$_nth$arity$2(null,i__19862);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19863,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19873 = seq__19859;
var G__19874 = chunk__19860;
var G__19875 = count__19861;
var G__19876 = (i__19862 + (1));
seq__19859 = G__19873;
chunk__19860 = G__19874;
count__19861 = G__19875;
i__19862 = G__19876;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19859);
if(temp__5290__auto__){
var seq__19859__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19859__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19859__$1);
var G__19877 = cljs.core.chunk_rest(seq__19859__$1);
var G__19878 = c__9173__auto__;
var G__19879 = cljs.core.count(c__9173__auto__);
var G__19880 = (0);
seq__19859 = G__19877;
chunk__19860 = G__19878;
count__19861 = G__19879;
i__19862 = G__19880;
continue;
} else {
var vec__19866 = cljs.core.first(seq__19859__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19866,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19881 = cljs.core.next(seq__19859__$1);
var G__19882 = null;
var G__19883 = (0);
var G__19884 = (0);
seq__19859 = G__19881;
chunk__19860 = G__19882;
count__19861 = G__19883;
i__19862 = G__19884;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq19854){
var G__19855 = cljs.core.first(seq19854);
var seq19854__$1 = cljs.core.next(seq19854);
var G__19856 = cljs.core.first(seq19854__$1);
var seq19854__$2 = cljs.core.next(seq19854__$1);
var G__19857 = cljs.core.first(seq19854__$2);
var seq19854__$3 = cljs.core.next(seq19854__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19855,G__19856,G__19857,seq19854__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__19886 = arguments.length;
switch (G__19886) {
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
var G__19889 = arguments.length;
switch (G__19889) {
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
var G__19891 = elem;
var G__19892 = cljs.core.cst$kw$attr;
var G__19893 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19891,G__19892,G__19893) : hoplon.core.do_BANG_.call(null,G__19891,G__19892,G__19893));
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
var G__19894__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__19894 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__19895__i = 0, G__19895__a = new Array(arguments.length -  2);
while (G__19895__i < G__19895__a.length) {G__19895__a[G__19895__i] = arguments[G__19895__i + 2]; ++G__19895__i;}
  args = new cljs.core.IndexedSeq(G__19895__a,0,null);
} 
return G__19894__delegate.call(this,elem,_,args);};
G__19894.cljs$lang$maxFixedArity = 2;
G__19894.cljs$lang$applyTo = (function (arglist__19896){
var elem = cljs.core.first(arglist__19896);
arglist__19896 = cljs.core.next(arglist__19896);
var _ = cljs.core.first(arglist__19896);
var args = cljs.core.rest(arglist__19896);
return G__19894__delegate(elem,_,args);
});
G__19894.cljs$core$IFn$_invoke$arity$variadic = G__19894__delegate;
return G__19894;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__19897 = cljs.core.seq(clmap);
var chunk__19898 = null;
var count__19899 = (0);
var i__19900 = (0);
while(true){
if((i__19900 < count__19899)){
var vec__19901 = chunk__19898.cljs$core$IIndexed$_nth$arity$2(null,i__19900);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19901,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19901,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19907 = seq__19897;
var G__19908 = chunk__19898;
var G__19909 = count__19899;
var G__19910 = (i__19900 + (1));
seq__19897 = G__19907;
chunk__19898 = G__19908;
count__19899 = G__19909;
i__19900 = G__19910;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19897);
if(temp__5290__auto__){
var seq__19897__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19897__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19897__$1);
var G__19911 = cljs.core.chunk_rest(seq__19897__$1);
var G__19912 = c__9173__auto__;
var G__19913 = cljs.core.count(c__9173__auto__);
var G__19914 = (0);
seq__19897 = G__19911;
chunk__19898 = G__19912;
count__19899 = G__19913;
i__19900 = G__19914;
continue;
} else {
var vec__19904 = cljs.core.first(seq__19897__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19904,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19904,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19915 = cljs.core.next(seq__19897__$1);
var G__19916 = null;
var G__19917 = (0);
var G__19918 = (0);
seq__19897 = G__19915;
chunk__19898 = G__19916;
count__19899 = G__19917;
i__19900 = G__19918;
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
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class_SLASH__STAR_,(function (elem,_,kvs){
var G__19919 = elem;
var G__19920 = cljs.core.cst$kw$class;
var G__19921 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19919,G__19920,G__19921) : hoplon.core.do_BANG_.call(null,G__19919,G__19920,G__19921));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class_SLASH__STAR_,(function (_){
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
var G__19922 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__19923 = (0);
return setTimeout(G__19922,G__19923);
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
var G__19924_19930 = elem;
var G__19925_19931 = cljs.core.cst$kw$focus;
var G__19926_19932 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19924_19930,G__19925_19931,G__19926_19932) : hoplon.core.do_BANG_.call(null,G__19924_19930,G__19925_19931,G__19926_19932));

var G__19927 = elem;
var G__19928 = cljs.core.cst$kw$select;
var G__19929 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19927,G__19928,G__19929) : hoplon.core.do_BANG_.call(null,G__19927,G__19928,G__19929));
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
return (function (){var G__19933 = this$__$1.target;
return jQuery(G__19933);
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
