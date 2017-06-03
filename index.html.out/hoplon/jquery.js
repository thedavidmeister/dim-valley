// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args23124 = [];
var len__8981__auto___23143 = arguments.length;
var i__8982__auto___23144 = (0);
while(true){
if((i__8982__auto___23144 < len__8981__auto___23143)){
args23124.push((arguments[i__8982__auto___23144]));

var G__23145 = (i__8982__auto___23144 + (1));
i__8982__auto___23144 = G__23145;
continue;
} else {
}
break;
}

var G__23130 = args23124.length;
switch (G__23130) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args23124.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23131 = cljs.core.seq(kvs);
var chunk__23133 = null;
var count__23134 = (0);
var i__23135 = (0);
while(true){
if((i__23135 < count__23134)){
var vec__23137 = chunk__23133.cljs$core$IIndexed$_nth$arity$2(null,i__23135);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(1),null);
var k_23147__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_23147__$1);
} else {
e.attr(k_23147__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23147__$1:v));
}

var G__23148 = seq__23131;
var G__23149 = chunk__23133;
var G__23150 = count__23134;
var G__23151 = (i__23135 + (1));
seq__23131 = G__23148;
chunk__23133 = G__23149;
count__23134 = G__23150;
i__23135 = G__23151;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23131);
if(temp__6738__auto__){
var seq__23131__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23131__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23131__$1);
var G__23152 = cljs.core.chunk_rest(seq__23131__$1);
var G__23153 = c__8671__auto__;
var G__23154 = cljs.core.count(c__8671__auto__);
var G__23155 = (0);
seq__23131 = G__23152;
chunk__23133 = G__23153;
count__23134 = G__23154;
i__23135 = G__23155;
continue;
} else {
var vec__23140 = cljs.core.first(seq__23131__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23140,(1),null);
var k_23156__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_23156__$1);
} else {
e.attr(k_23156__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23156__$1:v));
}

var G__23157 = cljs.core.next(seq__23131__$1);
var G__23158 = null;
var G__23159 = (0);
var G__23160 = (0);
seq__23131 = G__23157;
chunk__23133 = G__23158;
count__23134 = G__23159;
i__23135 = G__23160;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq23125){
var G__23126 = cljs.core.first(seq23125);
var seq23125__$1 = cljs.core.next(seq23125);
var G__23127 = cljs.core.first(seq23125__$1);
var seq23125__$2 = cljs.core.next(seq23125__$1);
var G__23128 = cljs.core.first(seq23125__$2);
var seq23125__$3 = cljs.core.next(seq23125__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23126,G__23127,G__23128,seq23125__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args23161 = [];
var len__8981__auto___23178 = arguments.length;
var i__8982__auto___23179 = (0);
while(true){
if((i__8982__auto___23179 < len__8981__auto___23178)){
args23161.push((arguments[i__8982__auto___23179]));

var G__23180 = (i__8982__auto___23179 + (1));
i__8982__auto___23179 = G__23180;
continue;
} else {
}
break;
}

var G__23167 = args23161.length;
switch (G__23167) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args23161.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23168 = cljs.core.seq(kvs);
var chunk__23169 = null;
var count__23170 = (0);
var i__23171 = (0);
while(true){
if((i__23171 < count__23170)){
var vec__23172 = chunk__23169.cljs$core$IIndexed$_nth$arity$2(null,i__23171);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23182 = seq__23168;
var G__23183 = chunk__23169;
var G__23184 = count__23170;
var G__23185 = (i__23171 + (1));
seq__23168 = G__23182;
chunk__23169 = G__23183;
count__23170 = G__23184;
i__23171 = G__23185;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23168);
if(temp__6738__auto__){
var seq__23168__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23168__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23168__$1);
var G__23186 = cljs.core.chunk_rest(seq__23168__$1);
var G__23187 = c__8671__auto__;
var G__23188 = cljs.core.count(c__8671__auto__);
var G__23189 = (0);
seq__23168 = G__23186;
chunk__23169 = G__23187;
count__23170 = G__23188;
i__23171 = G__23189;
continue;
} else {
var vec__23175 = cljs.core.first(seq__23168__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23175,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23190 = cljs.core.next(seq__23168__$1);
var G__23191 = null;
var G__23192 = (0);
var G__23193 = (0);
seq__23168 = G__23190;
chunk__23169 = G__23191;
count__23170 = G__23192;
i__23171 = G__23193;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq23162){
var G__23163 = cljs.core.first(seq23162);
var seq23162__$1 = cljs.core.next(seq23162);
var G__23164 = cljs.core.first(seq23162__$1);
var seq23162__$2 = cljs.core.next(seq23162__$1);
var G__23165 = cljs.core.first(seq23162__$2);
var seq23162__$3 = cljs.core.next(seq23162__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23163,G__23164,G__23165,seq23162__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args23194 = [];
var len__8981__auto___23197 = arguments.length;
var i__8982__auto___23198 = (0);
while(true){
if((i__8982__auto___23198 < len__8981__auto___23197)){
args23194.push((arguments[i__8982__auto___23198]));

var G__23199 = (i__8982__auto___23198 + (1));
i__8982__auto___23198 = G__23199;
continue;
} else {
}
break;
}

var G__23196 = args23194.length;
switch (G__23196) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23194.length)].join('')));

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
var args23201 = [];
var len__8981__auto___23204 = arguments.length;
var i__8982__auto___23205 = (0);
while(true){
if((i__8982__auto___23205 < len__8981__auto___23204)){
args23201.push((arguments[i__8982__auto___23205]));

var G__23206 = (i__8982__auto___23205 + (1));
i__8982__auto___23205 = G__23206;
continue;
} else {
}
break;
}

var G__23203 = args23201.length;
switch (G__23203) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23201.length)].join('')));

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
var G__23208 = elem;
var G__23209 = cljs.core.cst$kw$attr;
var G__23210 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23208,G__23209,G__23210) : hoplon.core.do_BANG_.call(null,G__23208,G__23209,G__23210));
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
var G__23211__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__23211 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__23212__i = 0, G__23212__a = new Array(arguments.length -  2);
while (G__23212__i < G__23212__a.length) {G__23212__a[G__23212__i] = arguments[G__23212__i + 2]; ++G__23212__i;}
  args = new cljs.core.IndexedSeq(G__23212__a,0);
} 
return G__23211__delegate.call(this,elem,_,args);};
G__23211.cljs$lang$maxFixedArity = 2;
G__23211.cljs$lang$applyTo = (function (arglist__23213){
var elem = cljs.core.first(arglist__23213);
arglist__23213 = cljs.core.next(arglist__23213);
var _ = cljs.core.first(arglist__23213);
var args = cljs.core.rest(arglist__23213);
return G__23211__delegate(elem,_,args);
});
G__23211.cljs$core$IFn$_invoke$arity$variadic = G__23211__delegate;
return G__23211;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__23214 = cljs.core.seq(clmap);
var chunk__23215 = null;
var count__23216 = (0);
var i__23217 = (0);
while(true){
if((i__23217 < count__23216)){
var vec__23218 = chunk__23215.cljs$core$IIndexed$_nth$arity$2(null,i__23217);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23218,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23218,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23224 = seq__23214;
var G__23225 = chunk__23215;
var G__23226 = count__23216;
var G__23227 = (i__23217 + (1));
seq__23214 = G__23224;
chunk__23215 = G__23225;
count__23216 = G__23226;
i__23217 = G__23227;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23214);
if(temp__6738__auto__){
var seq__23214__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23214__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23214__$1);
var G__23228 = cljs.core.chunk_rest(seq__23214__$1);
var G__23229 = c__8671__auto__;
var G__23230 = cljs.core.count(c__8671__auto__);
var G__23231 = (0);
seq__23214 = G__23228;
chunk__23215 = G__23229;
count__23216 = G__23230;
i__23217 = G__23231;
continue;
} else {
var vec__23221 = cljs.core.first(seq__23214__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23221,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23221,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23232 = cljs.core.next(seq__23214__$1);
var G__23233 = null;
var G__23234 = (0);
var G__23235 = (0);
seq__23214 = G__23232;
chunk__23215 = G__23233;
count__23216 = G__23234;
i__23217 = G__23235;
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
var G__23236 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__23237 = (0);
return setTimeout(G__23236,G__23237);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__23238_23244 = elem;
var G__23239_23245 = cljs.core.cst$kw$focus;
var G__23240_23246 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23238_23244,G__23239_23245,G__23240_23246) : hoplon.core.do_BANG_.call(null,G__23238_23244,G__23239_23245,G__23240_23246));

var G__23241 = elem;
var G__23242 = cljs.core.cst$kw$select;
var G__23243 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23241,G__23242,G__23243) : hoplon.core.do_BANG_.call(null,G__23241,G__23242,G__23243));
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
return (function (){var G__23247 = this$__$1.target;
return jQuery(G__23247);
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
