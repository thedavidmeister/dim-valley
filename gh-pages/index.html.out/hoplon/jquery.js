// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__19039 = arguments.length;
switch (G__19039) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19053 = arguments.length;
var i__9520__auto___19054 = (0);
while(true){
if((i__9520__auto___19054 < len__9519__auto___19053)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19054]));

var G__19055 = (i__9520__auto___19054 + (1));
i__9520__auto___19054 = G__19055;
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
var seq__19040 = cljs.core.seq(kvs);
var chunk__19042 = null;
var count__19043 = (0);
var i__19044 = (0);
while(true){
if((i__19044 < count__19043)){
var vec__19046 = chunk__19042.cljs$core$IIndexed$_nth$arity$2(null,i__19044);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(1),null);
var k_19056__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19056__$1);
} else {
e.attr(k_19056__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19056__$1:v));
}

var G__19057 = seq__19040;
var G__19058 = chunk__19042;
var G__19059 = count__19043;
var G__19060 = (i__19044 + (1));
seq__19040 = G__19057;
chunk__19042 = G__19058;
count__19043 = G__19059;
i__19044 = G__19060;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19040);
if(temp__5290__auto__){
var seq__19040__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19040__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19040__$1);
var G__19061 = cljs.core.chunk_rest(seq__19040__$1);
var G__19062 = c__9173__auto__;
var G__19063 = cljs.core.count(c__9173__auto__);
var G__19064 = (0);
seq__19040 = G__19061;
chunk__19042 = G__19062;
count__19043 = G__19063;
i__19044 = G__19064;
continue;
} else {
var vec__19049 = cljs.core.first(seq__19040__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(1),null);
var k_19065__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19065__$1);
} else {
e.attr(k_19065__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19065__$1:v));
}

var G__19066 = cljs.core.next(seq__19040__$1);
var G__19067 = null;
var G__19068 = (0);
var G__19069 = (0);
seq__19040 = G__19066;
chunk__19042 = G__19067;
count__19043 = G__19068;
i__19044 = G__19069;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19035){
var G__19036 = cljs.core.first(seq19035);
var seq19035__$1 = cljs.core.next(seq19035);
var G__19037 = cljs.core.first(seq19035__$1);
var seq19035__$2 = cljs.core.next(seq19035__$1);
var G__19038 = cljs.core.first(seq19035__$2);
var seq19035__$3 = cljs.core.next(seq19035__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19036,G__19037,G__19038,seq19035__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__19075 = arguments.length;
switch (G__19075) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19087 = arguments.length;
var i__9520__auto___19088 = (0);
while(true){
if((i__9520__auto___19088 < len__9519__auto___19087)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19088]));

var G__19089 = (i__9520__auto___19088 + (1));
i__9520__auto___19088 = G__19089;
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
var seq__19076 = cljs.core.seq(kvs);
var chunk__19077 = null;
var count__19078 = (0);
var i__19079 = (0);
while(true){
if((i__19079 < count__19078)){
var vec__19080 = chunk__19077.cljs$core$IIndexed$_nth$arity$2(null,i__19079);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19080,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19090 = seq__19076;
var G__19091 = chunk__19077;
var G__19092 = count__19078;
var G__19093 = (i__19079 + (1));
seq__19076 = G__19090;
chunk__19077 = G__19091;
count__19078 = G__19092;
i__19079 = G__19093;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19076);
if(temp__5290__auto__){
var seq__19076__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19076__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19076__$1);
var G__19094 = cljs.core.chunk_rest(seq__19076__$1);
var G__19095 = c__9173__auto__;
var G__19096 = cljs.core.count(c__9173__auto__);
var G__19097 = (0);
seq__19076 = G__19094;
chunk__19077 = G__19095;
count__19078 = G__19096;
i__19079 = G__19097;
continue;
} else {
var vec__19083 = cljs.core.first(seq__19076__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19083,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19098 = cljs.core.next(seq__19076__$1);
var G__19099 = null;
var G__19100 = (0);
var G__19101 = (0);
seq__19076 = G__19098;
chunk__19077 = G__19099;
count__19078 = G__19100;
i__19079 = G__19101;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq19071){
var G__19072 = cljs.core.first(seq19071);
var seq19071__$1 = cljs.core.next(seq19071);
var G__19073 = cljs.core.first(seq19071__$1);
var seq19071__$2 = cljs.core.next(seq19071__$1);
var G__19074 = cljs.core.first(seq19071__$2);
var seq19071__$3 = cljs.core.next(seq19071__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19072,G__19073,G__19074,seq19071__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__19103 = arguments.length;
switch (G__19103) {
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
var G__19106 = arguments.length;
switch (G__19106) {
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
var G__19108 = elem;
var G__19109 = cljs.core.cst$kw$attr;
var G__19110 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19108,G__19109,G__19110) : hoplon.core.do_BANG_.call(null,G__19108,G__19109,G__19110));
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
var G__19111__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__19111 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__19112__i = 0, G__19112__a = new Array(arguments.length -  2);
while (G__19112__i < G__19112__a.length) {G__19112__a[G__19112__i] = arguments[G__19112__i + 2]; ++G__19112__i;}
  args = new cljs.core.IndexedSeq(G__19112__a,0,null);
} 
return G__19111__delegate.call(this,elem,_,args);};
G__19111.cljs$lang$maxFixedArity = 2;
G__19111.cljs$lang$applyTo = (function (arglist__19113){
var elem = cljs.core.first(arglist__19113);
arglist__19113 = cljs.core.next(arglist__19113);
var _ = cljs.core.first(arglist__19113);
var args = cljs.core.rest(arglist__19113);
return G__19111__delegate(elem,_,args);
});
G__19111.cljs$core$IFn$_invoke$arity$variadic = G__19111__delegate;
return G__19111;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__19114 = cljs.core.seq(clmap);
var chunk__19115 = null;
var count__19116 = (0);
var i__19117 = (0);
while(true){
if((i__19117 < count__19116)){
var vec__19118 = chunk__19115.cljs$core$IIndexed$_nth$arity$2(null,i__19117);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19118,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19118,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19124 = seq__19114;
var G__19125 = chunk__19115;
var G__19126 = count__19116;
var G__19127 = (i__19117 + (1));
seq__19114 = G__19124;
chunk__19115 = G__19125;
count__19116 = G__19126;
i__19117 = G__19127;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19114);
if(temp__5290__auto__){
var seq__19114__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19114__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19114__$1);
var G__19128 = cljs.core.chunk_rest(seq__19114__$1);
var G__19129 = c__9173__auto__;
var G__19130 = cljs.core.count(c__9173__auto__);
var G__19131 = (0);
seq__19114 = G__19128;
chunk__19115 = G__19129;
count__19116 = G__19130;
i__19117 = G__19131;
continue;
} else {
var vec__19121 = cljs.core.first(seq__19114__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19121,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19121,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19132 = cljs.core.next(seq__19114__$1);
var G__19133 = null;
var G__19134 = (0);
var G__19135 = (0);
seq__19114 = G__19132;
chunk__19115 = G__19133;
count__19116 = G__19134;
i__19117 = G__19135;
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
var G__19136 = elem;
var G__19137 = cljs.core.cst$kw$class;
var G__19138 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19136,G__19137,G__19138) : hoplon.core.do_BANG_.call(null,G__19136,G__19137,G__19138));
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
var G__19139 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__19140 = (0);
return setTimeout(G__19139,G__19140);
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
var G__19141_19147 = elem;
var G__19142_19148 = cljs.core.cst$kw$focus;
var G__19143_19149 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19141_19147,G__19142_19148,G__19143_19149) : hoplon.core.do_BANG_.call(null,G__19141_19147,G__19142_19148,G__19143_19149));

var G__19144 = elem;
var G__19145 = cljs.core.cst$kw$select;
var G__19146 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19144,G__19145,G__19146) : hoplon.core.do_BANG_.call(null,G__19144,G__19145,G__19146));
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
return (function (){var G__19150 = this$__$1.target;
return jQuery(G__19150);
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
