// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args15932 = [];
var len__8981__auto___15951 = arguments.length;
var i__8982__auto___15952 = (0);
while(true){
if((i__8982__auto___15952 < len__8981__auto___15951)){
args15932.push((arguments[i__8982__auto___15952]));

var G__15953 = (i__8982__auto___15952 + (1));
i__8982__auto___15952 = G__15953;
continue;
} else {
}
break;
}

var G__15938 = args15932.length;
switch (G__15938) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15932.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15939 = cljs.core.seq(kvs);
var chunk__15941 = null;
var count__15942 = (0);
var i__15943 = (0);
while(true){
if((i__15943 < count__15942)){
var vec__15945 = chunk__15941.cljs$core$IIndexed$_nth$arity$2(null,i__15943);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15945,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15945,(1),null);
var k_15955__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15955__$1);
} else {
e.attr(k_15955__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15955__$1:v));
}

var G__15956 = seq__15939;
var G__15957 = chunk__15941;
var G__15958 = count__15942;
var G__15959 = (i__15943 + (1));
seq__15939 = G__15956;
chunk__15941 = G__15957;
count__15942 = G__15958;
i__15943 = G__15959;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15939);
if(temp__6738__auto__){
var seq__15939__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15939__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15939__$1);
var G__15960 = cljs.core.chunk_rest(seq__15939__$1);
var G__15961 = c__8671__auto__;
var G__15962 = cljs.core.count(c__8671__auto__);
var G__15963 = (0);
seq__15939 = G__15960;
chunk__15941 = G__15961;
count__15942 = G__15962;
i__15943 = G__15963;
continue;
} else {
var vec__15948 = cljs.core.first(seq__15939__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15948,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15948,(1),null);
var k_15964__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15964__$1);
} else {
e.attr(k_15964__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15964__$1:v));
}

var G__15965 = cljs.core.next(seq__15939__$1);
var G__15966 = null;
var G__15967 = (0);
var G__15968 = (0);
seq__15939 = G__15965;
chunk__15941 = G__15966;
count__15942 = G__15967;
i__15943 = G__15968;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15933){
var G__15934 = cljs.core.first(seq15933);
var seq15933__$1 = cljs.core.next(seq15933);
var G__15935 = cljs.core.first(seq15933__$1);
var seq15933__$2 = cljs.core.next(seq15933__$1);
var G__15936 = cljs.core.first(seq15933__$2);
var seq15933__$3 = cljs.core.next(seq15933__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15934,G__15935,G__15936,seq15933__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args15969 = [];
var len__8981__auto___15986 = arguments.length;
var i__8982__auto___15987 = (0);
while(true){
if((i__8982__auto___15987 < len__8981__auto___15986)){
args15969.push((arguments[i__8982__auto___15987]));

var G__15988 = (i__8982__auto___15987 + (1));
i__8982__auto___15987 = G__15988;
continue;
} else {
}
break;
}

var G__15975 = args15969.length;
switch (G__15975) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15969.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15976 = cljs.core.seq(kvs);
var chunk__15977 = null;
var count__15978 = (0);
var i__15979 = (0);
while(true){
if((i__15979 < count__15978)){
var vec__15980 = chunk__15977.cljs$core$IIndexed$_nth$arity$2(null,i__15979);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__15990 = seq__15976;
var G__15991 = chunk__15977;
var G__15992 = count__15978;
var G__15993 = (i__15979 + (1));
seq__15976 = G__15990;
chunk__15977 = G__15991;
count__15978 = G__15992;
i__15979 = G__15993;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15976);
if(temp__6738__auto__){
var seq__15976__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15976__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15976__$1);
var G__15994 = cljs.core.chunk_rest(seq__15976__$1);
var G__15995 = c__8671__auto__;
var G__15996 = cljs.core.count(c__8671__auto__);
var G__15997 = (0);
seq__15976 = G__15994;
chunk__15977 = G__15995;
count__15978 = G__15996;
i__15979 = G__15997;
continue;
} else {
var vec__15983 = cljs.core.first(seq__15976__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15983,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15983,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__15998 = cljs.core.next(seq__15976__$1);
var G__15999 = null;
var G__16000 = (0);
var G__16001 = (0);
seq__15976 = G__15998;
chunk__15977 = G__15999;
count__15978 = G__16000;
i__15979 = G__16001;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq15970){
var G__15971 = cljs.core.first(seq15970);
var seq15970__$1 = cljs.core.next(seq15970);
var G__15972 = cljs.core.first(seq15970__$1);
var seq15970__$2 = cljs.core.next(seq15970__$1);
var G__15973 = cljs.core.first(seq15970__$2);
var seq15970__$3 = cljs.core.next(seq15970__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15971,G__15972,G__15973,seq15970__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args16002 = [];
var len__8981__auto___16005 = arguments.length;
var i__8982__auto___16006 = (0);
while(true){
if((i__8982__auto___16006 < len__8981__auto___16005)){
args16002.push((arguments[i__8982__auto___16006]));

var G__16007 = (i__8982__auto___16006 + (1));
i__8982__auto___16006 = G__16007;
continue;
} else {
}
break;
}

var G__16004 = args16002.length;
switch (G__16004) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16002.length)].join('')));

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
var args16009 = [];
var len__8981__auto___16012 = arguments.length;
var i__8982__auto___16013 = (0);
while(true){
if((i__8982__auto___16013 < len__8981__auto___16012)){
args16009.push((arguments[i__8982__auto___16013]));

var G__16014 = (i__8982__auto___16013 + (1));
i__8982__auto___16013 = G__16014;
continue;
} else {
}
break;
}

var G__16011 = args16009.length;
switch (G__16011) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16009.length)].join('')));

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
var G__16016 = elem;
var G__16017 = cljs.core.cst$kw$attr;
var G__16018 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__16016,G__16017,G__16018) : hoplon.core.do_BANG_.call(null,G__16016,G__16017,G__16018));
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
var G__16019__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__16019 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__16020__i = 0, G__16020__a = new Array(arguments.length -  2);
while (G__16020__i < G__16020__a.length) {G__16020__a[G__16020__i] = arguments[G__16020__i + 2]; ++G__16020__i;}
  args = new cljs.core.IndexedSeq(G__16020__a,0);
} 
return G__16019__delegate.call(this,elem,_,args);};
G__16019.cljs$lang$maxFixedArity = 2;
G__16019.cljs$lang$applyTo = (function (arglist__16021){
var elem = cljs.core.first(arglist__16021);
arglist__16021 = cljs.core.next(arglist__16021);
var _ = cljs.core.first(arglist__16021);
var args = cljs.core.rest(arglist__16021);
return G__16019__delegate(elem,_,args);
});
G__16019.cljs$core$IFn$_invoke$arity$variadic = G__16019__delegate;
return G__16019;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__16022 = cljs.core.seq(clmap);
var chunk__16023 = null;
var count__16024 = (0);
var i__16025 = (0);
while(true){
if((i__16025 < count__16024)){
var vec__16026 = chunk__16023.cljs$core$IIndexed$_nth$arity$2(null,i__16025);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16026,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16026,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__16032 = seq__16022;
var G__16033 = chunk__16023;
var G__16034 = count__16024;
var G__16035 = (i__16025 + (1));
seq__16022 = G__16032;
chunk__16023 = G__16033;
count__16024 = G__16034;
i__16025 = G__16035;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__16022);
if(temp__6738__auto__){
var seq__16022__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16022__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__16022__$1);
var G__16036 = cljs.core.chunk_rest(seq__16022__$1);
var G__16037 = c__8671__auto__;
var G__16038 = cljs.core.count(c__8671__auto__);
var G__16039 = (0);
seq__16022 = G__16036;
chunk__16023 = G__16037;
count__16024 = G__16038;
i__16025 = G__16039;
continue;
} else {
var vec__16029 = cljs.core.first(seq__16022__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16029,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16029,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__16040 = cljs.core.next(seq__16022__$1);
var G__16041 = null;
var G__16042 = (0);
var G__16043 = (0);
seq__16022 = G__16040;
chunk__16023 = G__16041;
count__16024 = G__16042;
i__16025 = G__16043;
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
var G__16044 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__16045 = (0);
return setTimeout(G__16044,G__16045);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__16046_16052 = elem;
var G__16047_16053 = cljs.core.cst$kw$focus;
var G__16048_16054 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__16046_16052,G__16047_16053,G__16048_16054) : hoplon.core.do_BANG_.call(null,G__16046_16052,G__16047_16053,G__16048_16054));

var G__16049 = elem;
var G__16050 = cljs.core.cst$kw$select;
var G__16051 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__16049,G__16050,G__16051) : hoplon.core.do_BANG_.call(null,G__16049,G__16050,G__16051));
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
return (function (){var G__16055 = this$__$1.target;
return jQuery(G__16055);
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
