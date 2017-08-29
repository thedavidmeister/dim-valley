// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args15923 = [];
var len__8981__auto___15942 = arguments.length;
var i__8982__auto___15943 = (0);
while(true){
if((i__8982__auto___15943 < len__8981__auto___15942)){
args15923.push((arguments[i__8982__auto___15943]));

var G__15944 = (i__8982__auto___15943 + (1));
i__8982__auto___15943 = G__15944;
continue;
} else {
}
break;
}

var G__15929 = args15923.length;
switch (G__15929) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15923.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15930 = cljs.core.seq(kvs);
var chunk__15932 = null;
var count__15933 = (0);
var i__15934 = (0);
while(true){
if((i__15934 < count__15933)){
var vec__15936 = chunk__15932.cljs$core$IIndexed$_nth$arity$2(null,i__15934);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(1),null);
var k_15946__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15946__$1);
} else {
e.attr(k_15946__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15946__$1:v));
}

var G__15947 = seq__15930;
var G__15948 = chunk__15932;
var G__15949 = count__15933;
var G__15950 = (i__15934 + (1));
seq__15930 = G__15947;
chunk__15932 = G__15948;
count__15933 = G__15949;
i__15934 = G__15950;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15930);
if(temp__6738__auto__){
var seq__15930__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15930__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15930__$1);
var G__15951 = cljs.core.chunk_rest(seq__15930__$1);
var G__15952 = c__8671__auto__;
var G__15953 = cljs.core.count(c__8671__auto__);
var G__15954 = (0);
seq__15930 = G__15951;
chunk__15932 = G__15952;
count__15933 = G__15953;
i__15934 = G__15954;
continue;
} else {
var vec__15939 = cljs.core.first(seq__15930__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15939,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15939,(1),null);
var k_15955__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15955__$1);
} else {
e.attr(k_15955__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15955__$1:v));
}

var G__15956 = cljs.core.next(seq__15930__$1);
var G__15957 = null;
var G__15958 = (0);
var G__15959 = (0);
seq__15930 = G__15956;
chunk__15932 = G__15957;
count__15933 = G__15958;
i__15934 = G__15959;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15924){
var G__15925 = cljs.core.first(seq15924);
var seq15924__$1 = cljs.core.next(seq15924);
var G__15926 = cljs.core.first(seq15924__$1);
var seq15924__$2 = cljs.core.next(seq15924__$1);
var G__15927 = cljs.core.first(seq15924__$2);
var seq15924__$3 = cljs.core.next(seq15924__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15925,G__15926,G__15927,seq15924__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args15960 = [];
var len__8981__auto___15977 = arguments.length;
var i__8982__auto___15978 = (0);
while(true){
if((i__8982__auto___15978 < len__8981__auto___15977)){
args15960.push((arguments[i__8982__auto___15978]));

var G__15979 = (i__8982__auto___15978 + (1));
i__8982__auto___15978 = G__15979;
continue;
} else {
}
break;
}

var G__15966 = args15960.length;
switch (G__15966) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15960.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15967 = cljs.core.seq(kvs);
var chunk__15968 = null;
var count__15969 = (0);
var i__15970 = (0);
while(true){
if((i__15970 < count__15969)){
var vec__15971 = chunk__15968.cljs$core$IIndexed$_nth$arity$2(null,i__15970);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15971,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15971,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__15981 = seq__15967;
var G__15982 = chunk__15968;
var G__15983 = count__15969;
var G__15984 = (i__15970 + (1));
seq__15967 = G__15981;
chunk__15968 = G__15982;
count__15969 = G__15983;
i__15970 = G__15984;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15967);
if(temp__6738__auto__){
var seq__15967__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15967__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15967__$1);
var G__15985 = cljs.core.chunk_rest(seq__15967__$1);
var G__15986 = c__8671__auto__;
var G__15987 = cljs.core.count(c__8671__auto__);
var G__15988 = (0);
seq__15967 = G__15985;
chunk__15968 = G__15986;
count__15969 = G__15987;
i__15970 = G__15988;
continue;
} else {
var vec__15974 = cljs.core.first(seq__15967__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15974,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15974,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__15989 = cljs.core.next(seq__15967__$1);
var G__15990 = null;
var G__15991 = (0);
var G__15992 = (0);
seq__15967 = G__15989;
chunk__15968 = G__15990;
count__15969 = G__15991;
i__15970 = G__15992;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq15961){
var G__15962 = cljs.core.first(seq15961);
var seq15961__$1 = cljs.core.next(seq15961);
var G__15963 = cljs.core.first(seq15961__$1);
var seq15961__$2 = cljs.core.next(seq15961__$1);
var G__15964 = cljs.core.first(seq15961__$2);
var seq15961__$3 = cljs.core.next(seq15961__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15962,G__15963,G__15964,seq15961__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args15993 = [];
var len__8981__auto___15996 = arguments.length;
var i__8982__auto___15997 = (0);
while(true){
if((i__8982__auto___15997 < len__8981__auto___15996)){
args15993.push((arguments[i__8982__auto___15997]));

var G__15998 = (i__8982__auto___15997 + (1));
i__8982__auto___15997 = G__15998;
continue;
} else {
}
break;
}

var G__15995 = args15993.length;
switch (G__15995) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15993.length)].join('')));

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
var args16000 = [];
var len__8981__auto___16003 = arguments.length;
var i__8982__auto___16004 = (0);
while(true){
if((i__8982__auto___16004 < len__8981__auto___16003)){
args16000.push((arguments[i__8982__auto___16004]));

var G__16005 = (i__8982__auto___16004 + (1));
i__8982__auto___16004 = G__16005;
continue;
} else {
}
break;
}

var G__16002 = args16000.length;
switch (G__16002) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16000.length)].join('')));

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
var G__16007 = elem;
var G__16008 = cljs.core.cst$kw$attr;
var G__16009 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__16007,G__16008,G__16009) : hoplon.core.do_BANG_.call(null,G__16007,G__16008,G__16009));
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
var G__16010__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__16010 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__16011__i = 0, G__16011__a = new Array(arguments.length -  2);
while (G__16011__i < G__16011__a.length) {G__16011__a[G__16011__i] = arguments[G__16011__i + 2]; ++G__16011__i;}
  args = new cljs.core.IndexedSeq(G__16011__a,0);
} 
return G__16010__delegate.call(this,elem,_,args);};
G__16010.cljs$lang$maxFixedArity = 2;
G__16010.cljs$lang$applyTo = (function (arglist__16012){
var elem = cljs.core.first(arglist__16012);
arglist__16012 = cljs.core.next(arglist__16012);
var _ = cljs.core.first(arglist__16012);
var args = cljs.core.rest(arglist__16012);
return G__16010__delegate(elem,_,args);
});
G__16010.cljs$core$IFn$_invoke$arity$variadic = G__16010__delegate;
return G__16010;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__16013 = cljs.core.seq(clmap);
var chunk__16014 = null;
var count__16015 = (0);
var i__16016 = (0);
while(true){
if((i__16016 < count__16015)){
var vec__16017 = chunk__16014.cljs$core$IIndexed$_nth$arity$2(null,i__16016);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16017,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16017,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__16023 = seq__16013;
var G__16024 = chunk__16014;
var G__16025 = count__16015;
var G__16026 = (i__16016 + (1));
seq__16013 = G__16023;
chunk__16014 = G__16024;
count__16015 = G__16025;
i__16016 = G__16026;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__16013);
if(temp__6738__auto__){
var seq__16013__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16013__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__16013__$1);
var G__16027 = cljs.core.chunk_rest(seq__16013__$1);
var G__16028 = c__8671__auto__;
var G__16029 = cljs.core.count(c__8671__auto__);
var G__16030 = (0);
seq__16013 = G__16027;
chunk__16014 = G__16028;
count__16015 = G__16029;
i__16016 = G__16030;
continue;
} else {
var vec__16020 = cljs.core.first(seq__16013__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16020,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16020,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__16031 = cljs.core.next(seq__16013__$1);
var G__16032 = null;
var G__16033 = (0);
var G__16034 = (0);
seq__16013 = G__16031;
chunk__16014 = G__16032;
count__16015 = G__16033;
i__16016 = G__16034;
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
var G__16035 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__16036 = (0);
return setTimeout(G__16035,G__16036);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__16037_16043 = elem;
var G__16038_16044 = cljs.core.cst$kw$focus;
var G__16039_16045 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__16037_16043,G__16038_16044,G__16039_16045) : hoplon.core.do_BANG_.call(null,G__16037_16043,G__16038_16044,G__16039_16045));

var G__16040 = elem;
var G__16041 = cljs.core.cst$kw$select;
var G__16042 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__16040,G__16041,G__16042) : hoplon.core.do_BANG_.call(null,G__16040,G__16041,G__16042));
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
return (function (){var G__16046 = this$__$1.target;
return jQuery(G__16046);
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
