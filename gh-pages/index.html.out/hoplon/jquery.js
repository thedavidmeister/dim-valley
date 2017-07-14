// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args23121 = [];
var len__8981__auto___23140 = arguments.length;
var i__8982__auto___23141 = (0);
while(true){
if((i__8982__auto___23141 < len__8981__auto___23140)){
args23121.push((arguments[i__8982__auto___23141]));

var G__23142 = (i__8982__auto___23141 + (1));
i__8982__auto___23141 = G__23142;
continue;
} else {
}
break;
}

var G__23127 = args23121.length;
switch (G__23127) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args23121.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23128 = cljs.core.seq(kvs);
var chunk__23130 = null;
var count__23131 = (0);
var i__23132 = (0);
while(true){
if((i__23132 < count__23131)){
var vec__23134 = chunk__23130.cljs$core$IIndexed$_nth$arity$2(null,i__23132);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23134,(1),null);
var k_23144__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_23144__$1);
} else {
e.attr(k_23144__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23144__$1:v));
}

var G__23145 = seq__23128;
var G__23146 = chunk__23130;
var G__23147 = count__23131;
var G__23148 = (i__23132 + (1));
seq__23128 = G__23145;
chunk__23130 = G__23146;
count__23131 = G__23147;
i__23132 = G__23148;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23128);
if(temp__6738__auto__){
var seq__23128__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23128__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23128__$1);
var G__23149 = cljs.core.chunk_rest(seq__23128__$1);
var G__23150 = c__8671__auto__;
var G__23151 = cljs.core.count(c__8671__auto__);
var G__23152 = (0);
seq__23128 = G__23149;
chunk__23130 = G__23150;
count__23131 = G__23151;
i__23132 = G__23152;
continue;
} else {
var vec__23137 = cljs.core.first(seq__23128__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(1),null);
var k_23153__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_23153__$1);
} else {
e.attr(k_23153__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23153__$1:v));
}

var G__23154 = cljs.core.next(seq__23128__$1);
var G__23155 = null;
var G__23156 = (0);
var G__23157 = (0);
seq__23128 = G__23154;
chunk__23130 = G__23155;
count__23131 = G__23156;
i__23132 = G__23157;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq23122){
var G__23123 = cljs.core.first(seq23122);
var seq23122__$1 = cljs.core.next(seq23122);
var G__23124 = cljs.core.first(seq23122__$1);
var seq23122__$2 = cljs.core.next(seq23122__$1);
var G__23125 = cljs.core.first(seq23122__$2);
var seq23122__$3 = cljs.core.next(seq23122__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23123,G__23124,G__23125,seq23122__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args23158 = [];
var len__8981__auto___23175 = arguments.length;
var i__8982__auto___23176 = (0);
while(true){
if((i__8982__auto___23176 < len__8981__auto___23175)){
args23158.push((arguments[i__8982__auto___23176]));

var G__23177 = (i__8982__auto___23176 + (1));
i__8982__auto___23176 = G__23177;
continue;
} else {
}
break;
}

var G__23164 = args23158.length;
switch (G__23164) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args23158.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23165 = cljs.core.seq(kvs);
var chunk__23166 = null;
var count__23167 = (0);
var i__23168 = (0);
while(true){
if((i__23168 < count__23167)){
var vec__23169 = chunk__23166.cljs$core$IIndexed$_nth$arity$2(null,i__23168);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23169,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23179 = seq__23165;
var G__23180 = chunk__23166;
var G__23181 = count__23167;
var G__23182 = (i__23168 + (1));
seq__23165 = G__23179;
chunk__23166 = G__23180;
count__23167 = G__23181;
i__23168 = G__23182;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23165);
if(temp__6738__auto__){
var seq__23165__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23165__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23165__$1);
var G__23183 = cljs.core.chunk_rest(seq__23165__$1);
var G__23184 = c__8671__auto__;
var G__23185 = cljs.core.count(c__8671__auto__);
var G__23186 = (0);
seq__23165 = G__23183;
chunk__23166 = G__23184;
count__23167 = G__23185;
i__23168 = G__23186;
continue;
} else {
var vec__23172 = cljs.core.first(seq__23165__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23187 = cljs.core.next(seq__23165__$1);
var G__23188 = null;
var G__23189 = (0);
var G__23190 = (0);
seq__23165 = G__23187;
chunk__23166 = G__23188;
count__23167 = G__23189;
i__23168 = G__23190;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq23159){
var G__23160 = cljs.core.first(seq23159);
var seq23159__$1 = cljs.core.next(seq23159);
var G__23161 = cljs.core.first(seq23159__$1);
var seq23159__$2 = cljs.core.next(seq23159__$1);
var G__23162 = cljs.core.first(seq23159__$2);
var seq23159__$3 = cljs.core.next(seq23159__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23160,G__23161,G__23162,seq23159__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args23191 = [];
var len__8981__auto___23194 = arguments.length;
var i__8982__auto___23195 = (0);
while(true){
if((i__8982__auto___23195 < len__8981__auto___23194)){
args23191.push((arguments[i__8982__auto___23195]));

var G__23196 = (i__8982__auto___23195 + (1));
i__8982__auto___23195 = G__23196;
continue;
} else {
}
break;
}

var G__23193 = args23191.length;
switch (G__23193) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23191.length)].join('')));

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
var args23198 = [];
var len__8981__auto___23201 = arguments.length;
var i__8982__auto___23202 = (0);
while(true){
if((i__8982__auto___23202 < len__8981__auto___23201)){
args23198.push((arguments[i__8982__auto___23202]));

var G__23203 = (i__8982__auto___23202 + (1));
i__8982__auto___23202 = G__23203;
continue;
} else {
}
break;
}

var G__23200 = args23198.length;
switch (G__23200) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23198.length)].join('')));

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
var G__23205 = elem;
var G__23206 = cljs.core.cst$kw$attr;
var G__23207 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23205,G__23206,G__23207) : hoplon.core.do_BANG_.call(null,G__23205,G__23206,G__23207));
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
var G__23208__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__23208 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__23209__i = 0, G__23209__a = new Array(arguments.length -  2);
while (G__23209__i < G__23209__a.length) {G__23209__a[G__23209__i] = arguments[G__23209__i + 2]; ++G__23209__i;}
  args = new cljs.core.IndexedSeq(G__23209__a,0);
} 
return G__23208__delegate.call(this,elem,_,args);};
G__23208.cljs$lang$maxFixedArity = 2;
G__23208.cljs$lang$applyTo = (function (arglist__23210){
var elem = cljs.core.first(arglist__23210);
arglist__23210 = cljs.core.next(arglist__23210);
var _ = cljs.core.first(arglist__23210);
var args = cljs.core.rest(arglist__23210);
return G__23208__delegate(elem,_,args);
});
G__23208.cljs$core$IFn$_invoke$arity$variadic = G__23208__delegate;
return G__23208;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__23211 = cljs.core.seq(clmap);
var chunk__23212 = null;
var count__23213 = (0);
var i__23214 = (0);
while(true){
if((i__23214 < count__23213)){
var vec__23215 = chunk__23212.cljs$core$IIndexed$_nth$arity$2(null,i__23214);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23215,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23215,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23221 = seq__23211;
var G__23222 = chunk__23212;
var G__23223 = count__23213;
var G__23224 = (i__23214 + (1));
seq__23211 = G__23221;
chunk__23212 = G__23222;
count__23213 = G__23223;
i__23214 = G__23224;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23211);
if(temp__6738__auto__){
var seq__23211__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23211__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23211__$1);
var G__23225 = cljs.core.chunk_rest(seq__23211__$1);
var G__23226 = c__8671__auto__;
var G__23227 = cljs.core.count(c__8671__auto__);
var G__23228 = (0);
seq__23211 = G__23225;
chunk__23212 = G__23226;
count__23213 = G__23227;
i__23214 = G__23228;
continue;
} else {
var vec__23218 = cljs.core.first(seq__23211__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23218,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23218,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23229 = cljs.core.next(seq__23211__$1);
var G__23230 = null;
var G__23231 = (0);
var G__23232 = (0);
seq__23211 = G__23229;
chunk__23212 = G__23230;
count__23213 = G__23231;
i__23214 = G__23232;
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
var G__23233 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__23234 = (0);
return setTimeout(G__23233,G__23234);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__23235_23241 = elem;
var G__23236_23242 = cljs.core.cst$kw$focus;
var G__23237_23243 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23235_23241,G__23236_23242,G__23237_23243) : hoplon.core.do_BANG_.call(null,G__23235_23241,G__23236_23242,G__23237_23243));

var G__23238 = elem;
var G__23239 = cljs.core.cst$kw$select;
var G__23240 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23238,G__23239,G__23240) : hoplon.core.do_BANG_.call(null,G__23238,G__23239,G__23240));
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
return (function (){var G__23244 = this$__$1.target;
return jQuery(G__23244);
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
