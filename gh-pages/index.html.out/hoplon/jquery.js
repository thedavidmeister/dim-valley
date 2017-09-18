// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__19034 = arguments.length;
switch (G__19034) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19048 = arguments.length;
var i__9520__auto___19049 = (0);
while(true){
if((i__9520__auto___19049 < len__9519__auto___19048)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19049]));

var G__19050 = (i__9520__auto___19049 + (1));
i__9520__auto___19049 = G__19050;
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
var seq__19035 = cljs.core.seq(kvs);
var chunk__19037 = null;
var count__19038 = (0);
var i__19039 = (0);
while(true){
if((i__19039 < count__19038)){
var vec__19041 = chunk__19037.cljs$core$IIndexed$_nth$arity$2(null,i__19039);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041,(1),null);
var k_19051__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19051__$1);
} else {
e.attr(k_19051__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19051__$1:v));
}

var G__19052 = seq__19035;
var G__19053 = chunk__19037;
var G__19054 = count__19038;
var G__19055 = (i__19039 + (1));
seq__19035 = G__19052;
chunk__19037 = G__19053;
count__19038 = G__19054;
i__19039 = G__19055;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19035);
if(temp__5290__auto__){
var seq__19035__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19035__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19035__$1);
var G__19056 = cljs.core.chunk_rest(seq__19035__$1);
var G__19057 = c__9173__auto__;
var G__19058 = cljs.core.count(c__9173__auto__);
var G__19059 = (0);
seq__19035 = G__19056;
chunk__19037 = G__19057;
count__19038 = G__19058;
i__19039 = G__19059;
continue;
} else {
var vec__19044 = cljs.core.first(seq__19035__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(1),null);
var k_19060__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19060__$1);
} else {
e.attr(k_19060__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19060__$1:v));
}

var G__19061 = cljs.core.next(seq__19035__$1);
var G__19062 = null;
var G__19063 = (0);
var G__19064 = (0);
seq__19035 = G__19061;
chunk__19037 = G__19062;
count__19038 = G__19063;
i__19039 = G__19064;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19030){
var G__19031 = cljs.core.first(seq19030);
var seq19030__$1 = cljs.core.next(seq19030);
var G__19032 = cljs.core.first(seq19030__$1);
var seq19030__$2 = cljs.core.next(seq19030__$1);
var G__19033 = cljs.core.first(seq19030__$2);
var seq19030__$3 = cljs.core.next(seq19030__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19031,G__19032,G__19033,seq19030__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__19070 = arguments.length;
switch (G__19070) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___19082 = arguments.length;
var i__9520__auto___19083 = (0);
while(true){
if((i__9520__auto___19083 < len__9519__auto___19082)){
args_arr__9542__auto__.push((arguments[i__9520__auto___19083]));

var G__19084 = (i__9520__auto___19083 + (1));
i__9520__auto___19083 = G__19084;
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
var seq__19071 = cljs.core.seq(kvs);
var chunk__19072 = null;
var count__19073 = (0);
var i__19074 = (0);
while(true){
if((i__19074 < count__19073)){
var vec__19075 = chunk__19072.cljs$core$IIndexed$_nth$arity$2(null,i__19074);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19085 = seq__19071;
var G__19086 = chunk__19072;
var G__19087 = count__19073;
var G__19088 = (i__19074 + (1));
seq__19071 = G__19085;
chunk__19072 = G__19086;
count__19073 = G__19087;
i__19074 = G__19088;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19071);
if(temp__5290__auto__){
var seq__19071__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19071__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19071__$1);
var G__19089 = cljs.core.chunk_rest(seq__19071__$1);
var G__19090 = c__9173__auto__;
var G__19091 = cljs.core.count(c__9173__auto__);
var G__19092 = (0);
seq__19071 = G__19089;
chunk__19072 = G__19090;
count__19073 = G__19091;
i__19074 = G__19092;
continue;
} else {
var vec__19078 = cljs.core.first(seq__19071__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19078,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19078,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19093 = cljs.core.next(seq__19071__$1);
var G__19094 = null;
var G__19095 = (0);
var G__19096 = (0);
seq__19071 = G__19093;
chunk__19072 = G__19094;
count__19073 = G__19095;
i__19074 = G__19096;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq19066){
var G__19067 = cljs.core.first(seq19066);
var seq19066__$1 = cljs.core.next(seq19066);
var G__19068 = cljs.core.first(seq19066__$1);
var seq19066__$2 = cljs.core.next(seq19066__$1);
var G__19069 = cljs.core.first(seq19066__$2);
var seq19066__$3 = cljs.core.next(seq19066__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19067,G__19068,G__19069,seq19066__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__19098 = arguments.length;
switch (G__19098) {
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
var G__19101 = arguments.length;
switch (G__19101) {
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
var G__19103 = elem;
var G__19104 = cljs.core.cst$kw$attr;
var G__19105 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19103,G__19104,G__19105) : hoplon.core.do_BANG_.call(null,G__19103,G__19104,G__19105));
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
var G__19106__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__19106 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__19107__i = 0, G__19107__a = new Array(arguments.length -  2);
while (G__19107__i < G__19107__a.length) {G__19107__a[G__19107__i] = arguments[G__19107__i + 2]; ++G__19107__i;}
  args = new cljs.core.IndexedSeq(G__19107__a,0,null);
} 
return G__19106__delegate.call(this,elem,_,args);};
G__19106.cljs$lang$maxFixedArity = 2;
G__19106.cljs$lang$applyTo = (function (arglist__19108){
var elem = cljs.core.first(arglist__19108);
arglist__19108 = cljs.core.next(arglist__19108);
var _ = cljs.core.first(arglist__19108);
var args = cljs.core.rest(arglist__19108);
return G__19106__delegate(elem,_,args);
});
G__19106.cljs$core$IFn$_invoke$arity$variadic = G__19106__delegate;
return G__19106;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__19109 = cljs.core.seq(clmap);
var chunk__19110 = null;
var count__19111 = (0);
var i__19112 = (0);
while(true){
if((i__19112 < count__19111)){
var vec__19113 = chunk__19110.cljs$core$IIndexed$_nth$arity$2(null,i__19112);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19113,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19113,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19119 = seq__19109;
var G__19120 = chunk__19110;
var G__19121 = count__19111;
var G__19122 = (i__19112 + (1));
seq__19109 = G__19119;
chunk__19110 = G__19120;
count__19111 = G__19121;
i__19112 = G__19122;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19109);
if(temp__5290__auto__){
var seq__19109__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19109__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__19109__$1);
var G__19123 = cljs.core.chunk_rest(seq__19109__$1);
var G__19124 = c__9173__auto__;
var G__19125 = cljs.core.count(c__9173__auto__);
var G__19126 = (0);
seq__19109 = G__19123;
chunk__19110 = G__19124;
count__19111 = G__19125;
i__19112 = G__19126;
continue;
} else {
var vec__19116 = cljs.core.first(seq__19109__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19116,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19116,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19127 = cljs.core.next(seq__19109__$1);
var G__19128 = null;
var G__19129 = (0);
var G__19130 = (0);
seq__19109 = G__19127;
chunk__19110 = G__19128;
count__19111 = G__19129;
i__19112 = G__19130;
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
var G__19131 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__19132 = (0);
return setTimeout(G__19131,G__19132);
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
var G__19133_19139 = elem;
var G__19134_19140 = cljs.core.cst$kw$focus;
var G__19135_19141 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19133_19139,G__19134_19140,G__19135_19141) : hoplon.core.do_BANG_.call(null,G__19133_19139,G__19134_19140,G__19135_19141));

var G__19136 = elem;
var G__19137 = cljs.core.cst$kw$select;
var G__19138 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19136,G__19137,G__19138) : hoplon.core.do_BANG_.call(null,G__19136,G__19137,G__19138));
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
return (function (){var G__19142 = this$__$1.target;
return jQuery(G__19142);
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
