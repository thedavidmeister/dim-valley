// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args23155 = [];
var len__8981__auto___23174 = arguments.length;
var i__8982__auto___23175 = (0);
while(true){
if((i__8982__auto___23175 < len__8981__auto___23174)){
args23155.push((arguments[i__8982__auto___23175]));

var G__23176 = (i__8982__auto___23175 + (1));
i__8982__auto___23175 = G__23176;
continue;
} else {
}
break;
}

var G__23161 = args23155.length;
switch (G__23161) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args23155.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23162 = cljs.core.seq(kvs);
var chunk__23164 = null;
var count__23165 = (0);
var i__23166 = (0);
while(true){
if((i__23166 < count__23165)){
var vec__23168 = chunk__23164.cljs$core$IIndexed$_nth$arity$2(null,i__23166);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23168,(1),null);
var k_23178__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_23178__$1);
} else {
e.attr(k_23178__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23178__$1:v));
}

var G__23179 = seq__23162;
var G__23180 = chunk__23164;
var G__23181 = count__23165;
var G__23182 = (i__23166 + (1));
seq__23162 = G__23179;
chunk__23164 = G__23180;
count__23165 = G__23181;
i__23166 = G__23182;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23162);
if(temp__6738__auto__){
var seq__23162__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23162__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23162__$1);
var G__23183 = cljs.core.chunk_rest(seq__23162__$1);
var G__23184 = c__8671__auto__;
var G__23185 = cljs.core.count(c__8671__auto__);
var G__23186 = (0);
seq__23162 = G__23183;
chunk__23164 = G__23184;
count__23165 = G__23185;
i__23166 = G__23186;
continue;
} else {
var vec__23171 = cljs.core.first(seq__23162__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23171,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23171,(1),null);
var k_23187__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_23187__$1);
} else {
e.attr(k_23187__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23187__$1:v));
}

var G__23188 = cljs.core.next(seq__23162__$1);
var G__23189 = null;
var G__23190 = (0);
var G__23191 = (0);
seq__23162 = G__23188;
chunk__23164 = G__23189;
count__23165 = G__23190;
i__23166 = G__23191;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq23156){
var G__23157 = cljs.core.first(seq23156);
var seq23156__$1 = cljs.core.next(seq23156);
var G__23158 = cljs.core.first(seq23156__$1);
var seq23156__$2 = cljs.core.next(seq23156__$1);
var G__23159 = cljs.core.first(seq23156__$2);
var seq23156__$3 = cljs.core.next(seq23156__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23157,G__23158,G__23159,seq23156__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args23192 = [];
var len__8981__auto___23209 = arguments.length;
var i__8982__auto___23210 = (0);
while(true){
if((i__8982__auto___23210 < len__8981__auto___23209)){
args23192.push((arguments[i__8982__auto___23210]));

var G__23211 = (i__8982__auto___23210 + (1));
i__8982__auto___23210 = G__23211;
continue;
} else {
}
break;
}

var G__23198 = args23192.length;
switch (G__23198) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args23192.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23199 = cljs.core.seq(kvs);
var chunk__23200 = null;
var count__23201 = (0);
var i__23202 = (0);
while(true){
if((i__23202 < count__23201)){
var vec__23203 = chunk__23200.cljs$core$IIndexed$_nth$arity$2(null,i__23202);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23203,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23213 = seq__23199;
var G__23214 = chunk__23200;
var G__23215 = count__23201;
var G__23216 = (i__23202 + (1));
seq__23199 = G__23213;
chunk__23200 = G__23214;
count__23201 = G__23215;
i__23202 = G__23216;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23199);
if(temp__6738__auto__){
var seq__23199__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23199__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23199__$1);
var G__23217 = cljs.core.chunk_rest(seq__23199__$1);
var G__23218 = c__8671__auto__;
var G__23219 = cljs.core.count(c__8671__auto__);
var G__23220 = (0);
seq__23199 = G__23217;
chunk__23200 = G__23218;
count__23201 = G__23219;
i__23202 = G__23220;
continue;
} else {
var vec__23206 = cljs.core.first(seq__23199__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23221 = cljs.core.next(seq__23199__$1);
var G__23222 = null;
var G__23223 = (0);
var G__23224 = (0);
seq__23199 = G__23221;
chunk__23200 = G__23222;
count__23201 = G__23223;
i__23202 = G__23224;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq23193){
var G__23194 = cljs.core.first(seq23193);
var seq23193__$1 = cljs.core.next(seq23193);
var G__23195 = cljs.core.first(seq23193__$1);
var seq23193__$2 = cljs.core.next(seq23193__$1);
var G__23196 = cljs.core.first(seq23193__$2);
var seq23193__$3 = cljs.core.next(seq23193__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23194,G__23195,G__23196,seq23193__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args23225 = [];
var len__8981__auto___23228 = arguments.length;
var i__8982__auto___23229 = (0);
while(true){
if((i__8982__auto___23229 < len__8981__auto___23228)){
args23225.push((arguments[i__8982__auto___23229]));

var G__23230 = (i__8982__auto___23229 + (1));
i__8982__auto___23229 = G__23230;
continue;
} else {
}
break;
}

var G__23227 = args23225.length;
switch (G__23227) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23225.length)].join('')));

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
var args23232 = [];
var len__8981__auto___23235 = arguments.length;
var i__8982__auto___23236 = (0);
while(true){
if((i__8982__auto___23236 < len__8981__auto___23235)){
args23232.push((arguments[i__8982__auto___23236]));

var G__23237 = (i__8982__auto___23236 + (1));
i__8982__auto___23236 = G__23237;
continue;
} else {
}
break;
}

var G__23234 = args23232.length;
switch (G__23234) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23232.length)].join('')));

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
var G__23239 = elem;
var G__23240 = cljs.core.cst$kw$attr;
var G__23241 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23239,G__23240,G__23241) : hoplon.core.do_BANG_.call(null,G__23239,G__23240,G__23241));
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
var G__23242__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__23242 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__23243__i = 0, G__23243__a = new Array(arguments.length -  2);
while (G__23243__i < G__23243__a.length) {G__23243__a[G__23243__i] = arguments[G__23243__i + 2]; ++G__23243__i;}
  args = new cljs.core.IndexedSeq(G__23243__a,0);
} 
return G__23242__delegate.call(this,elem,_,args);};
G__23242.cljs$lang$maxFixedArity = 2;
G__23242.cljs$lang$applyTo = (function (arglist__23244){
var elem = cljs.core.first(arglist__23244);
arglist__23244 = cljs.core.next(arglist__23244);
var _ = cljs.core.first(arglist__23244);
var args = cljs.core.rest(arglist__23244);
return G__23242__delegate(elem,_,args);
});
G__23242.cljs$core$IFn$_invoke$arity$variadic = G__23242__delegate;
return G__23242;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__23245 = cljs.core.seq(clmap);
var chunk__23246 = null;
var count__23247 = (0);
var i__23248 = (0);
while(true){
if((i__23248 < count__23247)){
var vec__23249 = chunk__23246.cljs$core$IIndexed$_nth$arity$2(null,i__23248);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23249,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23249,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23255 = seq__23245;
var G__23256 = chunk__23246;
var G__23257 = count__23247;
var G__23258 = (i__23248 + (1));
seq__23245 = G__23255;
chunk__23246 = G__23256;
count__23247 = G__23257;
i__23248 = G__23258;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23245);
if(temp__6738__auto__){
var seq__23245__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23245__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23245__$1);
var G__23259 = cljs.core.chunk_rest(seq__23245__$1);
var G__23260 = c__8671__auto__;
var G__23261 = cljs.core.count(c__8671__auto__);
var G__23262 = (0);
seq__23245 = G__23259;
chunk__23246 = G__23260;
count__23247 = G__23261;
i__23248 = G__23262;
continue;
} else {
var vec__23252 = cljs.core.first(seq__23245__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23252,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23252,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23263 = cljs.core.next(seq__23245__$1);
var G__23264 = null;
var G__23265 = (0);
var G__23266 = (0);
seq__23245 = G__23263;
chunk__23246 = G__23264;
count__23247 = G__23265;
i__23248 = G__23266;
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
var G__23267 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__23268 = (0);
return setTimeout(G__23267,G__23268);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__23269_23275 = elem;
var G__23270_23276 = cljs.core.cst$kw$focus;
var G__23271_23277 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23269_23275,G__23270_23276,G__23271_23277) : hoplon.core.do_BANG_.call(null,G__23269_23275,G__23270_23276,G__23271_23277));

var G__23272 = elem;
var G__23273 = cljs.core.cst$kw$select;
var G__23274 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23272,G__23273,G__23274) : hoplon.core.do_BANG_.call(null,G__23272,G__23273,G__23274));
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
return (function (){var G__23278 = this$__$1.target;
return jQuery(G__23278);
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
