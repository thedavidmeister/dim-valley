// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args23154 = [];
var len__8981__auto___23173 = arguments.length;
var i__8982__auto___23174 = (0);
while(true){
if((i__8982__auto___23174 < len__8981__auto___23173)){
args23154.push((arguments[i__8982__auto___23174]));

var G__23175 = (i__8982__auto___23174 + (1));
i__8982__auto___23174 = G__23175;
continue;
} else {
}
break;
}

var G__23160 = args23154.length;
switch (G__23160) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args23154.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23161 = cljs.core.seq(kvs);
var chunk__23163 = null;
var count__23164 = (0);
var i__23165 = (0);
while(true){
if((i__23165 < count__23164)){
var vec__23167 = chunk__23163.cljs$core$IIndexed$_nth$arity$2(null,i__23165);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23167,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23167,(1),null);
var k_23177__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_23177__$1);
} else {
e.attr(k_23177__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23177__$1:v));
}

var G__23178 = seq__23161;
var G__23179 = chunk__23163;
var G__23180 = count__23164;
var G__23181 = (i__23165 + (1));
seq__23161 = G__23178;
chunk__23163 = G__23179;
count__23164 = G__23180;
i__23165 = G__23181;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23161);
if(temp__6738__auto__){
var seq__23161__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23161__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23161__$1);
var G__23182 = cljs.core.chunk_rest(seq__23161__$1);
var G__23183 = c__8671__auto__;
var G__23184 = cljs.core.count(c__8671__auto__);
var G__23185 = (0);
seq__23161 = G__23182;
chunk__23163 = G__23183;
count__23164 = G__23184;
i__23165 = G__23185;
continue;
} else {
var vec__23170 = cljs.core.first(seq__23161__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23170,(1),null);
var k_23186__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_23186__$1);
} else {
e.attr(k_23186__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_23186__$1:v));
}

var G__23187 = cljs.core.next(seq__23161__$1);
var G__23188 = null;
var G__23189 = (0);
var G__23190 = (0);
seq__23161 = G__23187;
chunk__23163 = G__23188;
count__23164 = G__23189;
i__23165 = G__23190;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq23155){
var G__23156 = cljs.core.first(seq23155);
var seq23155__$1 = cljs.core.next(seq23155);
var G__23157 = cljs.core.first(seq23155__$1);
var seq23155__$2 = cljs.core.next(seq23155__$1);
var G__23158 = cljs.core.first(seq23155__$2);
var seq23155__$3 = cljs.core.next(seq23155__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23156,G__23157,G__23158,seq23155__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args23191 = [];
var len__8981__auto___23208 = arguments.length;
var i__8982__auto___23209 = (0);
while(true){
if((i__8982__auto___23209 < len__8981__auto___23208)){
args23191.push((arguments[i__8982__auto___23209]));

var G__23210 = (i__8982__auto___23209 + (1));
i__8982__auto___23209 = G__23210;
continue;
} else {
}
break;
}

var G__23197 = args23191.length;
switch (G__23197) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args23191.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__23198 = cljs.core.seq(kvs);
var chunk__23199 = null;
var count__23200 = (0);
var i__23201 = (0);
while(true){
if((i__23201 < count__23200)){
var vec__23202 = chunk__23199.cljs$core$IIndexed$_nth$arity$2(null,i__23201);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23202,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23202,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23212 = seq__23198;
var G__23213 = chunk__23199;
var G__23214 = count__23200;
var G__23215 = (i__23201 + (1));
seq__23198 = G__23212;
chunk__23199 = G__23213;
count__23200 = G__23214;
i__23201 = G__23215;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23198);
if(temp__6738__auto__){
var seq__23198__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23198__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23198__$1);
var G__23216 = cljs.core.chunk_rest(seq__23198__$1);
var G__23217 = c__8671__auto__;
var G__23218 = cljs.core.count(c__8671__auto__);
var G__23219 = (0);
seq__23198 = G__23216;
chunk__23199 = G__23217;
count__23200 = G__23218;
i__23201 = G__23219;
continue;
} else {
var vec__23205 = cljs.core.first(seq__23198__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__23220 = cljs.core.next(seq__23198__$1);
var G__23221 = null;
var G__23222 = (0);
var G__23223 = (0);
seq__23198 = G__23220;
chunk__23199 = G__23221;
count__23200 = G__23222;
i__23201 = G__23223;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq23192){
var G__23193 = cljs.core.first(seq23192);
var seq23192__$1 = cljs.core.next(seq23192);
var G__23194 = cljs.core.first(seq23192__$1);
var seq23192__$2 = cljs.core.next(seq23192__$1);
var G__23195 = cljs.core.first(seq23192__$2);
var seq23192__$3 = cljs.core.next(seq23192__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23193,G__23194,G__23195,seq23192__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args23224 = [];
var len__8981__auto___23227 = arguments.length;
var i__8982__auto___23228 = (0);
while(true){
if((i__8982__auto___23228 < len__8981__auto___23227)){
args23224.push((arguments[i__8982__auto___23228]));

var G__23229 = (i__8982__auto___23228 + (1));
i__8982__auto___23228 = G__23229;
continue;
} else {
}
break;
}

var G__23226 = args23224.length;
switch (G__23226) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23224.length)].join('')));

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
var args23231 = [];
var len__8981__auto___23234 = arguments.length;
var i__8982__auto___23235 = (0);
while(true){
if((i__8982__auto___23235 < len__8981__auto___23234)){
args23231.push((arguments[i__8982__auto___23235]));

var G__23236 = (i__8982__auto___23235 + (1));
i__8982__auto___23235 = G__23236;
continue;
} else {
}
break;
}

var G__23233 = args23231.length;
switch (G__23233) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23231.length)].join('')));

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
var G__23238 = elem;
var G__23239 = cljs.core.cst$kw$attr;
var G__23240 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23238,G__23239,G__23240) : hoplon.core.do_BANG_.call(null,G__23238,G__23239,G__23240));
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
var G__23241__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__23241 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__23242__i = 0, G__23242__a = new Array(arguments.length -  2);
while (G__23242__i < G__23242__a.length) {G__23242__a[G__23242__i] = arguments[G__23242__i + 2]; ++G__23242__i;}
  args = new cljs.core.IndexedSeq(G__23242__a,0);
} 
return G__23241__delegate.call(this,elem,_,args);};
G__23241.cljs$lang$maxFixedArity = 2;
G__23241.cljs$lang$applyTo = (function (arglist__23243){
var elem = cljs.core.first(arglist__23243);
arglist__23243 = cljs.core.next(arglist__23243);
var _ = cljs.core.first(arglist__23243);
var args = cljs.core.rest(arglist__23243);
return G__23241__delegate(elem,_,args);
});
G__23241.cljs$core$IFn$_invoke$arity$variadic = G__23241__delegate;
return G__23241;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__23244 = cljs.core.seq(clmap);
var chunk__23245 = null;
var count__23246 = (0);
var i__23247 = (0);
while(true){
if((i__23247 < count__23246)){
var vec__23248 = chunk__23245.cljs$core$IIndexed$_nth$arity$2(null,i__23247);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23254 = seq__23244;
var G__23255 = chunk__23245;
var G__23256 = count__23246;
var G__23257 = (i__23247 + (1));
seq__23244 = G__23254;
chunk__23245 = G__23255;
count__23246 = G__23256;
i__23247 = G__23257;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23244);
if(temp__6738__auto__){
var seq__23244__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23244__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23244__$1);
var G__23258 = cljs.core.chunk_rest(seq__23244__$1);
var G__23259 = c__8671__auto__;
var G__23260 = cljs.core.count(c__8671__auto__);
var G__23261 = (0);
seq__23244 = G__23258;
chunk__23245 = G__23259;
count__23246 = G__23260;
i__23247 = G__23261;
continue;
} else {
var vec__23251 = cljs.core.first(seq__23244__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23251,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23251,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__23262 = cljs.core.next(seq__23244__$1);
var G__23263 = null;
var G__23264 = (0);
var G__23265 = (0);
seq__23244 = G__23262;
chunk__23245 = G__23263;
count__23246 = G__23264;
i__23247 = G__23265;
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
var G__23266 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__23267 = (0);
return setTimeout(G__23266,G__23267);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__23268_23274 = elem;
var G__23269_23275 = cljs.core.cst$kw$focus;
var G__23270_23276 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23268_23274,G__23269_23275,G__23270_23276) : hoplon.core.do_BANG_.call(null,G__23268_23274,G__23269_23275,G__23270_23276));

var G__23271 = elem;
var G__23272 = cljs.core.cst$kw$select;
var G__23273 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__23271,G__23272,G__23273) : hoplon.core.do_BANG_.call(null,G__23271,G__23272,G__23273));
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
return (function (){var G__23277 = this$__$1.target;
return jQuery(G__23277);
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
