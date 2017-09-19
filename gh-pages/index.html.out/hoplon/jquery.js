// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__19826 = arguments.length;
switch (G__19826) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19840 = arguments.length;
var i__9520__auto___19841 = (0);
while(true){
if((i__9520__auto___19841 < len__9519__auto___19840)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19841]));

var G__19842 = (i__9520__auto___19841 + (1));
i__9520__auto___19841 = G__19842;
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
var seq__19827 = cljs.core.seq(kvs);
var chunk__19829 = null;
var count__19830 = (0);
var i__19831 = (0);
while(true){
if((i__19831 < count__19830)){
var vec__19833 = chunk__19829.cljs$core$IIndexed$_nth$arity$2(null,i__19831);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19833,(1),null);
var k_19843__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19843__$1);
} else {
e.attr(k_19843__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19843__$1:v));
}

var G__19844 = seq__19827;
var G__19845 = chunk__19829;
var G__19846 = count__19830;
var G__19847 = (i__19831 + (1));
seq__19827 = G__19844;
chunk__19829 = G__19845;
count__19830 = G__19846;
i__19831 = G__19847;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19827);
if(temp__5290__auto__){
var seq__19827__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19827__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19827__$1);
var G__19848 = cljs.core.chunk_rest(seq__19827__$1);
var G__19849 = c__9173__auto__;
var G__19850 = cljs.core.count(c__9173__auto__);
var G__19851 = (0);
seq__19827 = G__19848;
chunk__19829 = G__19849;
count__19830 = G__19850;
i__19831 = G__19851;
continue;
} else {
var vec__19836 = cljs.core.first(seq__19827__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19836,(1),null);
var k_19852__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19852__$1);
} else {
e.attr(k_19852__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19852__$1:v));
}

var G__19853 = cljs.core.next(seq__19827__$1);
var G__19854 = null;
var G__19855 = (0);
var G__19856 = (0);
seq__19827 = G__19853;
chunk__19829 = G__19854;
count__19830 = G__19855;
i__19831 = G__19856;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19822){
var G__19823 = cljs.core.first(seq19822);
var seq19822__$1 = cljs.core.next(seq19822);
var G__19824 = cljs.core.first(seq19822__$1);
var seq19822__$2 = cljs.core.next(seq19822__$1);
var G__19825 = cljs.core.first(seq19822__$2);
var seq19822__$3 = cljs.core.next(seq19822__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19823,G__19824,G__19825,seq19822__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__19862 = arguments.length;
switch (G__19862) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19874 = arguments.length;
var i__9520__auto___19875 = (0);
while(true){
if((i__9520__auto___19875 < len__9519__auto___19874)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19875]));

var G__19876 = (i__9520__auto___19875 + (1));
i__9520__auto___19875 = G__19876;
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
var seq__19863 = cljs.core.seq(kvs);
var chunk__19864 = null;
var count__19865 = (0);
var i__19866 = (0);
while(true){
if((i__19866 < count__19865)){
var vec__19867 = chunk__19864.cljs$core$IIndexed$_nth$arity$2(null,i__19866);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19877 = seq__19863;
var G__19878 = chunk__19864;
var G__19879 = count__19865;
var G__19880 = (i__19866 + (1));
seq__19863 = G__19877;
chunk__19864 = G__19878;
count__19865 = G__19879;
i__19866 = G__19880;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19863);
if(temp__5290__auto__){
var seq__19863__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19863__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19863__$1);
var G__19881 = cljs.core.chunk_rest(seq__19863__$1);
var G__19882 = c__9173__auto__;
var G__19883 = cljs.core.count(c__9173__auto__);
var G__19884 = (0);
seq__19863 = G__19881;
chunk__19864 = G__19882;
count__19865 = G__19883;
i__19866 = G__19884;
continue;
} else {
var vec__19870 = cljs.core.first(seq__19863__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19870,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19885 = cljs.core.next(seq__19863__$1);
var G__19886 = null;
var G__19887 = (0);
var G__19888 = (0);
seq__19863 = G__19885;
chunk__19864 = G__19886;
count__19865 = G__19887;
i__19866 = G__19888;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq19858){
var G__19859 = cljs.core.first(seq19858);
var seq19858__$1 = cljs.core.next(seq19858);
var G__19860 = cljs.core.first(seq19858__$1);
var seq19858__$2 = cljs.core.next(seq19858__$1);
var G__19861 = cljs.core.first(seq19858__$2);
var seq19858__$3 = cljs.core.next(seq19858__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19859,G__19860,G__19861,seq19858__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__19890 = arguments.length;
switch (G__19890) {
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
var G__19893 = arguments.length;
switch (G__19893) {
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
var G__19895 = elem;
var G__19896 = cljs.core.cst$kw$attr;
var G__19897 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19895,G__19896,G__19897) : hoplon.core.do_BANG_.call(null,G__19895,G__19896,G__19897));
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
var G__19898__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__19898 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__19899__i = 0, G__19899__a = new Array(arguments.length -  2);
while (G__19899__i < G__19899__a.length) {G__19899__a[G__19899__i] = arguments[G__19899__i + 2]; ++G__19899__i;}
  args = new cljs.core.IndexedSeq(G__19899__a,0,null);
} 
return G__19898__delegate.call(this,elem,_,args);};
G__19898.cljs$lang$maxFixedArity = 2;
G__19898.cljs$lang$applyTo = (function (arglist__19900){
var elem = cljs.core.first(arglist__19900);
arglist__19900 = cljs.core.next(arglist__19900);
var _ = cljs.core.first(arglist__19900);
var args = cljs.core.rest(arglist__19900);
return G__19898__delegate(elem,_,args);
});
G__19898.cljs$core$IFn$_invoke$arity$variadic = G__19898__delegate;
return G__19898;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__19901 = cljs.core.seq(clmap);
var chunk__19902 = null;
var count__19903 = (0);
var i__19904 = (0);
while(true){
if((i__19904 < count__19903)){
var vec__19905 = chunk__19902.cljs$core$IIndexed$_nth$arity$2(null,i__19904);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19905,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19905,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19911 = seq__19901;
var G__19912 = chunk__19902;
var G__19913 = count__19903;
var G__19914 = (i__19904 + (1));
seq__19901 = G__19911;
chunk__19902 = G__19912;
count__19903 = G__19913;
i__19904 = G__19914;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19901);
if(temp__5290__auto__){
var seq__19901__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19901__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19901__$1);
var G__19915 = cljs.core.chunk_rest(seq__19901__$1);
var G__19916 = c__9173__auto__;
var G__19917 = cljs.core.count(c__9173__auto__);
var G__19918 = (0);
seq__19901 = G__19915;
chunk__19902 = G__19916;
count__19903 = G__19917;
i__19904 = G__19918;
continue;
} else {
var vec__19908 = cljs.core.first(seq__19901__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19908,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19908,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19919 = cljs.core.next(seq__19901__$1);
var G__19920 = null;
var G__19921 = (0);
var G__19922 = (0);
seq__19901 = G__19919;
chunk__19902 = G__19920;
count__19903 = G__19921;
i__19904 = G__19922;
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
var G__19923 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__19924 = (0);
return setTimeout(G__19923,G__19924);
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
var G__19925_19931 = elem;
var G__19926_19932 = cljs.core.cst$kw$focus;
var G__19927_19933 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19925_19931,G__19926_19932,G__19927_19933) : hoplon.core.do_BANG_.call(null,G__19925_19931,G__19926_19932,G__19927_19933));

var G__19928 = elem;
var G__19929 = cljs.core.cst$kw$select;
var G__19930 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19928,G__19929,G__19930) : hoplon.core.do_BANG_.call(null,G__19928,G__19929,G__19930));
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
return (function (){var G__19934 = this$__$1.target;
return jQuery(G__19934);
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
