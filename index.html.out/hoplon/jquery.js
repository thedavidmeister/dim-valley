// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__19037 = arguments.length;
switch (G__19037) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9540__auto__ = [];
var len__9517__auto___19051 = arguments.length;
var i__9518__auto___19052 = (0);
while(true){
if((i__9518__auto___19052 < len__9517__auto___19051)){
args_arr__9540__auto__.push((arguments[i__9518__auto___19052]));

var G__19053 = (i__9518__auto___19052 + (1));
i__9518__auto___19052 = G__19053;
continue;
} else {
}
break;
}

var argseq__9541__auto__ = (new cljs.core.IndexedSeq(args_arr__9540__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9541__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19038 = cljs.core.seq(kvs);
var chunk__19040 = null;
var count__19041 = (0);
var i__19042 = (0);
while(true){
if((i__19042 < count__19041)){
var vec__19044 = chunk__19040.cljs$core$IIndexed$_nth$arity$2(null,i__19042);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(1),null);
var k_19054__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19054__$1);
} else {
e.attr(k_19054__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19054__$1:v));
}

var G__19055 = seq__19038;
var G__19056 = chunk__19040;
var G__19057 = count__19041;
var G__19058 = (i__19042 + (1));
seq__19038 = G__19055;
chunk__19040 = G__19056;
count__19041 = G__19057;
i__19042 = G__19058;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19038);
if(temp__5290__auto__){
var seq__19038__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19038__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__19038__$1);
var G__19059 = cljs.core.chunk_rest(seq__19038__$1);
var G__19060 = c__9171__auto__;
var G__19061 = cljs.core.count(c__9171__auto__);
var G__19062 = (0);
seq__19038 = G__19059;
chunk__19040 = G__19060;
count__19041 = G__19061;
i__19042 = G__19062;
continue;
} else {
var vec__19047 = cljs.core.first(seq__19038__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(1),null);
var k_19063__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19063__$1);
} else {
e.attr(k_19063__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19063__$1:v));
}

var G__19064 = cljs.core.next(seq__19038__$1);
var G__19065 = null;
var G__19066 = (0);
var G__19067 = (0);
seq__19038 = G__19064;
chunk__19040 = G__19065;
count__19041 = G__19066;
i__19042 = G__19067;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19033){
var G__19034 = cljs.core.first(seq19033);
var seq19033__$1 = cljs.core.next(seq19033);
var G__19035 = cljs.core.first(seq19033__$1);
var seq19033__$2 = cljs.core.next(seq19033__$1);
var G__19036 = cljs.core.first(seq19033__$2);
var seq19033__$3 = cljs.core.next(seq19033__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19034,G__19035,G__19036,seq19033__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__19073 = arguments.length;
switch (G__19073) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9540__auto__ = [];
var len__9517__auto___19085 = arguments.length;
var i__9518__auto___19086 = (0);
while(true){
if((i__9518__auto___19086 < len__9517__auto___19085)){
args_arr__9540__auto__.push((arguments[i__9518__auto___19086]));

var G__19087 = (i__9518__auto___19086 + (1));
i__9518__auto___19086 = G__19087;
continue;
} else {
}
break;
}

var argseq__9541__auto__ = (new cljs.core.IndexedSeq(args_arr__9540__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9541__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19074 = cljs.core.seq(kvs);
var chunk__19075 = null;
var count__19076 = (0);
var i__19077 = (0);
while(true){
if((i__19077 < count__19076)){
var vec__19078 = chunk__19075.cljs$core$IIndexed$_nth$arity$2(null,i__19077);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19078,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19078,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19088 = seq__19074;
var G__19089 = chunk__19075;
var G__19090 = count__19076;
var G__19091 = (i__19077 + (1));
seq__19074 = G__19088;
chunk__19075 = G__19089;
count__19076 = G__19090;
i__19077 = G__19091;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19074);
if(temp__5290__auto__){
var seq__19074__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19074__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__19074__$1);
var G__19092 = cljs.core.chunk_rest(seq__19074__$1);
var G__19093 = c__9171__auto__;
var G__19094 = cljs.core.count(c__9171__auto__);
var G__19095 = (0);
seq__19074 = G__19092;
chunk__19075 = G__19093;
count__19076 = G__19094;
i__19077 = G__19095;
continue;
} else {
var vec__19081 = cljs.core.first(seq__19074__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19081,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19096 = cljs.core.next(seq__19074__$1);
var G__19097 = null;
var G__19098 = (0);
var G__19099 = (0);
seq__19074 = G__19096;
chunk__19075 = G__19097;
count__19076 = G__19098;
i__19077 = G__19099;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq19069){
var G__19070 = cljs.core.first(seq19069);
var seq19069__$1 = cljs.core.next(seq19069);
var G__19071 = cljs.core.first(seq19069__$1);
var seq19069__$2 = cljs.core.next(seq19069__$1);
var G__19072 = cljs.core.first(seq19069__$2);
var seq19069__$3 = cljs.core.next(seq19069__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19070,G__19071,G__19072,seq19069__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__19101 = arguments.length;
switch (G__19101) {
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
var G__19104 = arguments.length;
switch (G__19104) {
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
var G__19106 = elem;
var G__19107 = cljs.core.cst$kw$attr;
var G__19108 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19106,G__19107,G__19108) : hoplon.core.do_BANG_.call(null,G__19106,G__19107,G__19108));
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
var G__19109__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__19109 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__19110__i = 0, G__19110__a = new Array(arguments.length -  2);
while (G__19110__i < G__19110__a.length) {G__19110__a[G__19110__i] = arguments[G__19110__i + 2]; ++G__19110__i;}
  args = new cljs.core.IndexedSeq(G__19110__a,0,null);
} 
return G__19109__delegate.call(this,elem,_,args);};
G__19109.cljs$lang$maxFixedArity = 2;
G__19109.cljs$lang$applyTo = (function (arglist__19111){
var elem = cljs.core.first(arglist__19111);
arglist__19111 = cljs.core.next(arglist__19111);
var _ = cljs.core.first(arglist__19111);
var args = cljs.core.rest(arglist__19111);
return G__19109__delegate(elem,_,args);
});
G__19109.cljs$core$IFn$_invoke$arity$variadic = G__19109__delegate;
return G__19109;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__19112 = cljs.core.seq(clmap);
var chunk__19113 = null;
var count__19114 = (0);
var i__19115 = (0);
while(true){
if((i__19115 < count__19114)){
var vec__19116 = chunk__19113.cljs$core$IIndexed$_nth$arity$2(null,i__19115);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19116,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19116,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19122 = seq__19112;
var G__19123 = chunk__19113;
var G__19124 = count__19114;
var G__19125 = (i__19115 + (1));
seq__19112 = G__19122;
chunk__19113 = G__19123;
count__19114 = G__19124;
i__19115 = G__19125;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19112);
if(temp__5290__auto__){
var seq__19112__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19112__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__19112__$1);
var G__19126 = cljs.core.chunk_rest(seq__19112__$1);
var G__19127 = c__9171__auto__;
var G__19128 = cljs.core.count(c__9171__auto__);
var G__19129 = (0);
seq__19112 = G__19126;
chunk__19113 = G__19127;
count__19114 = G__19128;
i__19115 = G__19129;
continue;
} else {
var vec__19119 = cljs.core.first(seq__19112__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19119,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19119,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19130 = cljs.core.next(seq__19112__$1);
var G__19131 = null;
var G__19132 = (0);
var G__19133 = (0);
seq__19112 = G__19130;
chunk__19113 = G__19131;
count__19114 = G__19132;
i__19115 = G__19133;
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
var G__19134 = elem;
var G__19135 = cljs.core.cst$kw$class;
var G__19136 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19134,G__19135,G__19136) : hoplon.core.do_BANG_.call(null,G__19134,G__19135,G__19136));
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
var G__19137 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__19138 = (0);
return setTimeout(G__19137,G__19138);
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
var G__19139_19145 = elem;
var G__19140_19146 = cljs.core.cst$kw$focus;
var G__19141_19147 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19139_19145,G__19140_19146,G__19141_19147) : hoplon.core.do_BANG_.call(null,G__19139_19145,G__19140_19146,G__19141_19147));

var G__19142 = elem;
var G__19143 = cljs.core.cst$kw$select;
var G__19144 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19142,G__19143,G__19144) : hoplon.core.do_BANG_.call(null,G__19142,G__19143,G__19144));
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
return (function (){var G__19148 = this$__$1.target;
return jQuery(G__19148);
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
