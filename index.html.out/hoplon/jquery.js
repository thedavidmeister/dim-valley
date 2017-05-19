// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args20852 = [];
var len__8981__auto___20871 = arguments.length;
var i__8982__auto___20872 = (0);
while(true){
if((i__8982__auto___20872 < len__8981__auto___20871)){
args20852.push((arguments[i__8982__auto___20872]));

var G__20873 = (i__8982__auto___20872 + (1));
i__8982__auto___20872 = G__20873;
continue;
} else {
}
break;
}

var G__20858 = args20852.length;
switch (G__20858) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args20852.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__20859 = cljs.core.seq(kvs);
var chunk__20861 = null;
var count__20862 = (0);
var i__20863 = (0);
while(true){
if((i__20863 < count__20862)){
var vec__20865 = chunk__20861.cljs$core$IIndexed$_nth$arity$2(null,i__20863);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20865,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20865,(1),null);
var k_20875__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_20875__$1);
} else {
e.attr(k_20875__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_20875__$1:v));
}

var G__20876 = seq__20859;
var G__20877 = chunk__20861;
var G__20878 = count__20862;
var G__20879 = (i__20863 + (1));
seq__20859 = G__20876;
chunk__20861 = G__20877;
count__20862 = G__20878;
i__20863 = G__20879;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__20859);
if(temp__6738__auto__){
var seq__20859__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20859__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__20859__$1);
var G__20880 = cljs.core.chunk_rest(seq__20859__$1);
var G__20881 = c__8671__auto__;
var G__20882 = cljs.core.count(c__8671__auto__);
var G__20883 = (0);
seq__20859 = G__20880;
chunk__20861 = G__20881;
count__20862 = G__20882;
i__20863 = G__20883;
continue;
} else {
var vec__20868 = cljs.core.first(seq__20859__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20868,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20868,(1),null);
var k_20884__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_20884__$1);
} else {
e.attr(k_20884__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_20884__$1:v));
}

var G__20885 = cljs.core.next(seq__20859__$1);
var G__20886 = null;
var G__20887 = (0);
var G__20888 = (0);
seq__20859 = G__20885;
chunk__20861 = G__20886;
count__20862 = G__20887;
i__20863 = G__20888;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq20853){
var G__20854 = cljs.core.first(seq20853);
var seq20853__$1 = cljs.core.next(seq20853);
var G__20855 = cljs.core.first(seq20853__$1);
var seq20853__$2 = cljs.core.next(seq20853__$1);
var G__20856 = cljs.core.first(seq20853__$2);
var seq20853__$3 = cljs.core.next(seq20853__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20854,G__20855,G__20856,seq20853__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args20889 = [];
var len__8981__auto___20906 = arguments.length;
var i__8982__auto___20907 = (0);
while(true){
if((i__8982__auto___20907 < len__8981__auto___20906)){
args20889.push((arguments[i__8982__auto___20907]));

var G__20908 = (i__8982__auto___20907 + (1));
i__8982__auto___20907 = G__20908;
continue;
} else {
}
break;
}

var G__20895 = args20889.length;
switch (G__20895) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args20889.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__20896 = cljs.core.seq(kvs);
var chunk__20897 = null;
var count__20898 = (0);
var i__20899 = (0);
while(true){
if((i__20899 < count__20898)){
var vec__20900 = chunk__20897.cljs$core$IIndexed$_nth$arity$2(null,i__20899);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20900,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__20910 = seq__20896;
var G__20911 = chunk__20897;
var G__20912 = count__20898;
var G__20913 = (i__20899 + (1));
seq__20896 = G__20910;
chunk__20897 = G__20911;
count__20898 = G__20912;
i__20899 = G__20913;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__20896);
if(temp__6738__auto__){
var seq__20896__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20896__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__20896__$1);
var G__20914 = cljs.core.chunk_rest(seq__20896__$1);
var G__20915 = c__8671__auto__;
var G__20916 = cljs.core.count(c__8671__auto__);
var G__20917 = (0);
seq__20896 = G__20914;
chunk__20897 = G__20915;
count__20898 = G__20916;
i__20899 = G__20917;
continue;
} else {
var vec__20903 = cljs.core.first(seq__20896__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20903,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20903,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__20918 = cljs.core.next(seq__20896__$1);
var G__20919 = null;
var G__20920 = (0);
var G__20921 = (0);
seq__20896 = G__20918;
chunk__20897 = G__20919;
count__20898 = G__20920;
i__20899 = G__20921;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq20890){
var G__20891 = cljs.core.first(seq20890);
var seq20890__$1 = cljs.core.next(seq20890);
var G__20892 = cljs.core.first(seq20890__$1);
var seq20890__$2 = cljs.core.next(seq20890__$1);
var G__20893 = cljs.core.first(seq20890__$2);
var seq20890__$3 = cljs.core.next(seq20890__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20891,G__20892,G__20893,seq20890__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args20922 = [];
var len__8981__auto___20925 = arguments.length;
var i__8982__auto___20926 = (0);
while(true){
if((i__8982__auto___20926 < len__8981__auto___20925)){
args20922.push((arguments[i__8982__auto___20926]));

var G__20927 = (i__8982__auto___20926 + (1));
i__8982__auto___20926 = G__20927;
continue;
} else {
}
break;
}

var G__20924 = args20922.length;
switch (G__20924) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20922.length)].join('')));

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
var args20929 = [];
var len__8981__auto___20932 = arguments.length;
var i__8982__auto___20933 = (0);
while(true){
if((i__8982__auto___20933 < len__8981__auto___20932)){
args20929.push((arguments[i__8982__auto___20933]));

var G__20934 = (i__8982__auto___20933 + (1));
i__8982__auto___20933 = G__20934;
continue;
} else {
}
break;
}

var G__20931 = args20929.length;
switch (G__20931) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20929.length)].join('')));

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
var G__20936 = elem;
var G__20937 = cljs.core.cst$kw$attr;
var G__20938 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__20936,G__20937,G__20938) : hoplon.core.do_BANG_.call(null,G__20936,G__20937,G__20938));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__20939__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__20939 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__20940__i = 0, G__20940__a = new Array(arguments.length -  2);
while (G__20940__i < G__20940__a.length) {G__20940__a[G__20940__i] = arguments[G__20940__i + 2]; ++G__20940__i;}
  args = new cljs.core.IndexedSeq(G__20940__a,0);
} 
return G__20939__delegate.call(this,elem,_,args);};
G__20939.cljs$lang$maxFixedArity = 2;
G__20939.cljs$lang$applyTo = (function (arglist__20941){
var elem = cljs.core.first(arglist__20941);
arglist__20941 = cljs.core.next(arglist__20941);
var _ = cljs.core.first(arglist__20941);
var args = cljs.core.rest(arglist__20941);
return G__20939__delegate(elem,_,args);
});
G__20939.cljs$core$IFn$_invoke$arity$variadic = G__20939__delegate;
return G__20939;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__20942 = cljs.core.seq(clmap);
var chunk__20943 = null;
var count__20944 = (0);
var i__20945 = (0);
while(true){
if((i__20945 < count__20944)){
var vec__20946 = chunk__20943.cljs$core$IIndexed$_nth$arity$2(null,i__20945);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20946,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20946,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__20952 = seq__20942;
var G__20953 = chunk__20943;
var G__20954 = count__20944;
var G__20955 = (i__20945 + (1));
seq__20942 = G__20952;
chunk__20943 = G__20953;
count__20944 = G__20954;
i__20945 = G__20955;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__20942);
if(temp__6738__auto__){
var seq__20942__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20942__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__20942__$1);
var G__20956 = cljs.core.chunk_rest(seq__20942__$1);
var G__20957 = c__8671__auto__;
var G__20958 = cljs.core.count(c__8671__auto__);
var G__20959 = (0);
seq__20942 = G__20956;
chunk__20943 = G__20957;
count__20944 = G__20958;
i__20945 = G__20959;
continue;
} else {
var vec__20949 = cljs.core.first(seq__20942__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20949,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20949,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__20960 = cljs.core.next(seq__20942__$1);
var G__20961 = null;
var G__20962 = (0);
var G__20963 = (0);
seq__20942 = G__20960;
chunk__20943 = G__20961;
count__20944 = G__20962;
i__20945 = G__20963;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__20964 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__20965 = (0);
return setTimeout(G__20964,G__20965);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__20966_20972 = elem;
var G__20967_20973 = cljs.core.cst$kw$focus;
var G__20968_20974 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__20966_20972,G__20967_20973,G__20968_20974) : hoplon.core.do_BANG_.call(null,G__20966_20972,G__20967_20973,G__20968_20974));

var G__20969 = elem;
var G__20970 = cljs.core.cst$kw$select;
var G__20971 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__20969,G__20970,G__20971) : hoplon.core.do_BANG_.call(null,G__20969,G__20970,G__20971));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
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
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__20975 = this$__$1.target;
return jQuery(G__20975);
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
