// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args20879 = [];
var len__8981__auto___20898 = arguments.length;
var i__8982__auto___20899 = (0);
while(true){
if((i__8982__auto___20899 < len__8981__auto___20898)){
args20879.push((arguments[i__8982__auto___20899]));

var G__20900 = (i__8982__auto___20899 + (1));
i__8982__auto___20899 = G__20900;
continue;
} else {
}
break;
}

var G__20885 = args20879.length;
switch (G__20885) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args20879.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__20886 = cljs.core.seq(kvs);
var chunk__20888 = null;
var count__20889 = (0);
var i__20890 = (0);
while(true){
if((i__20890 < count__20889)){
var vec__20892 = chunk__20888.cljs$core$IIndexed$_nth$arity$2(null,i__20890);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20892,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20892,(1),null);
var k_20902__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_20902__$1);
} else {
e.attr(k_20902__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_20902__$1:v));
}

var G__20903 = seq__20886;
var G__20904 = chunk__20888;
var G__20905 = count__20889;
var G__20906 = (i__20890 + (1));
seq__20886 = G__20903;
chunk__20888 = G__20904;
count__20889 = G__20905;
i__20890 = G__20906;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__20886);
if(temp__6738__auto__){
var seq__20886__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20886__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__20886__$1);
var G__20907 = cljs.core.chunk_rest(seq__20886__$1);
var G__20908 = c__8671__auto__;
var G__20909 = cljs.core.count(c__8671__auto__);
var G__20910 = (0);
seq__20886 = G__20907;
chunk__20888 = G__20908;
count__20889 = G__20909;
i__20890 = G__20910;
continue;
} else {
var vec__20895 = cljs.core.first(seq__20886__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20895,(1),null);
var k_20911__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_20911__$1);
} else {
e.attr(k_20911__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_20911__$1:v));
}

var G__20912 = cljs.core.next(seq__20886__$1);
var G__20913 = null;
var G__20914 = (0);
var G__20915 = (0);
seq__20886 = G__20912;
chunk__20888 = G__20913;
count__20889 = G__20914;
i__20890 = G__20915;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq20880){
var G__20881 = cljs.core.first(seq20880);
var seq20880__$1 = cljs.core.next(seq20880);
var G__20882 = cljs.core.first(seq20880__$1);
var seq20880__$2 = cljs.core.next(seq20880__$1);
var G__20883 = cljs.core.first(seq20880__$2);
var seq20880__$3 = cljs.core.next(seq20880__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20881,G__20882,G__20883,seq20880__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args20916 = [];
var len__8981__auto___20933 = arguments.length;
var i__8982__auto___20934 = (0);
while(true){
if((i__8982__auto___20934 < len__8981__auto___20933)){
args20916.push((arguments[i__8982__auto___20934]));

var G__20935 = (i__8982__auto___20934 + (1));
i__8982__auto___20934 = G__20935;
continue;
} else {
}
break;
}

var G__20922 = args20916.length;
switch (G__20922) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args20916.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__20923 = cljs.core.seq(kvs);
var chunk__20924 = null;
var count__20925 = (0);
var i__20926 = (0);
while(true){
if((i__20926 < count__20925)){
var vec__20927 = chunk__20924.cljs$core$IIndexed$_nth$arity$2(null,i__20926);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20927,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__20937 = seq__20923;
var G__20938 = chunk__20924;
var G__20939 = count__20925;
var G__20940 = (i__20926 + (1));
seq__20923 = G__20937;
chunk__20924 = G__20938;
count__20925 = G__20939;
i__20926 = G__20940;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__20923);
if(temp__6738__auto__){
var seq__20923__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20923__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__20923__$1);
var G__20941 = cljs.core.chunk_rest(seq__20923__$1);
var G__20942 = c__8671__auto__;
var G__20943 = cljs.core.count(c__8671__auto__);
var G__20944 = (0);
seq__20923 = G__20941;
chunk__20924 = G__20942;
count__20925 = G__20943;
i__20926 = G__20944;
continue;
} else {
var vec__20930 = cljs.core.first(seq__20923__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20930,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__20945 = cljs.core.next(seq__20923__$1);
var G__20946 = null;
var G__20947 = (0);
var G__20948 = (0);
seq__20923 = G__20945;
chunk__20924 = G__20946;
count__20925 = G__20947;
i__20926 = G__20948;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq20917){
var G__20918 = cljs.core.first(seq20917);
var seq20917__$1 = cljs.core.next(seq20917);
var G__20919 = cljs.core.first(seq20917__$1);
var seq20917__$2 = cljs.core.next(seq20917__$1);
var G__20920 = cljs.core.first(seq20917__$2);
var seq20917__$3 = cljs.core.next(seq20917__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20918,G__20919,G__20920,seq20917__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args20949 = [];
var len__8981__auto___20952 = arguments.length;
var i__8982__auto___20953 = (0);
while(true){
if((i__8982__auto___20953 < len__8981__auto___20952)){
args20949.push((arguments[i__8982__auto___20953]));

var G__20954 = (i__8982__auto___20953 + (1));
i__8982__auto___20953 = G__20954;
continue;
} else {
}
break;
}

var G__20951 = args20949.length;
switch (G__20951) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20949.length)].join('')));

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
var args20956 = [];
var len__8981__auto___20959 = arguments.length;
var i__8982__auto___20960 = (0);
while(true){
if((i__8982__auto___20960 < len__8981__auto___20959)){
args20956.push((arguments[i__8982__auto___20960]));

var G__20961 = (i__8982__auto___20960 + (1));
i__8982__auto___20960 = G__20961;
continue;
} else {
}
break;
}

var G__20958 = args20956.length;
switch (G__20958) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20956.length)].join('')));

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
var G__20963 = elem;
var G__20964 = cljs.core.cst$kw$attr;
var G__20965 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__20963,G__20964,G__20965) : hoplon.core.do_BANG_.call(null,G__20963,G__20964,G__20965));
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
var G__20966__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__20966 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__20967__i = 0, G__20967__a = new Array(arguments.length -  2);
while (G__20967__i < G__20967__a.length) {G__20967__a[G__20967__i] = arguments[G__20967__i + 2]; ++G__20967__i;}
  args = new cljs.core.IndexedSeq(G__20967__a,0);
} 
return G__20966__delegate.call(this,elem,_,args);};
G__20966.cljs$lang$maxFixedArity = 2;
G__20966.cljs$lang$applyTo = (function (arglist__20968){
var elem = cljs.core.first(arglist__20968);
arglist__20968 = cljs.core.next(arglist__20968);
var _ = cljs.core.first(arglist__20968);
var args = cljs.core.rest(arglist__20968);
return G__20966__delegate(elem,_,args);
});
G__20966.cljs$core$IFn$_invoke$arity$variadic = G__20966__delegate;
return G__20966;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__20969 = cljs.core.seq(clmap);
var chunk__20970 = null;
var count__20971 = (0);
var i__20972 = (0);
while(true){
if((i__20972 < count__20971)){
var vec__20973 = chunk__20970.cljs$core$IIndexed$_nth$arity$2(null,i__20972);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20973,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20973,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__20979 = seq__20969;
var G__20980 = chunk__20970;
var G__20981 = count__20971;
var G__20982 = (i__20972 + (1));
seq__20969 = G__20979;
chunk__20970 = G__20980;
count__20971 = G__20981;
i__20972 = G__20982;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__20969);
if(temp__6738__auto__){
var seq__20969__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20969__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__20969__$1);
var G__20983 = cljs.core.chunk_rest(seq__20969__$1);
var G__20984 = c__8671__auto__;
var G__20985 = cljs.core.count(c__8671__auto__);
var G__20986 = (0);
seq__20969 = G__20983;
chunk__20970 = G__20984;
count__20971 = G__20985;
i__20972 = G__20986;
continue;
} else {
var vec__20976 = cljs.core.first(seq__20969__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20976,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20976,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__20987 = cljs.core.next(seq__20969__$1);
var G__20988 = null;
var G__20989 = (0);
var G__20990 = (0);
seq__20969 = G__20987;
chunk__20970 = G__20988;
count__20971 = G__20989;
i__20972 = G__20990;
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
var G__20991 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__20992 = (0);
return setTimeout(G__20991,G__20992);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__20993_20999 = elem;
var G__20994_21000 = cljs.core.cst$kw$focus;
var G__20995_21001 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__20993_20999,G__20994_21000,G__20995_21001) : hoplon.core.do_BANG_.call(null,G__20993_20999,G__20994_21000,G__20995_21001));

var G__20996 = elem;
var G__20997 = cljs.core.cst$kw$select;
var G__20998 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__20996,G__20997,G__20998) : hoplon.core.do_BANG_.call(null,G__20996,G__20997,G__20998));
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
return (function (){var G__21002 = this$__$1.target;
return jQuery(G__21002);
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
