// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9278 = [];
var len__7950__auto___9297 = arguments.length;
var i__7951__auto___9298 = (0);
while(true){
if((i__7951__auto___9298 < len__7950__auto___9297)){
args9278.push((arguments[i__7951__auto___9298]));

var G__9299 = (i__7951__auto___9298 + (1));
i__7951__auto___9298 = G__9299;
continue;
} else {
}
break;
}

var G__9284 = args9278.length;
switch (G__9284) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9278.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9285 = cljs.core.seq.call(null,kvs);
var chunk__9287 = null;
var count__9288 = (0);
var i__9289 = (0);
while(true){
if((i__9289 < count__9288)){
var vec__9291 = cljs.core._nth.call(null,chunk__9287,i__9289);
var k = cljs.core.nth.call(null,vec__9291,(0),null);
var v = cljs.core.nth.call(null,vec__9291,(1),null);
var k_9301__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9301__$1);
} else {
e.attr(k_9301__$1,((cljs.core._EQ_.call(null,true,v))?k_9301__$1:v));
}

var G__9302 = seq__9285;
var G__9303 = chunk__9287;
var G__9304 = count__9288;
var G__9305 = (i__9289 + (1));
seq__9285 = G__9302;
chunk__9287 = G__9303;
count__9288 = G__9304;
i__9289 = G__9305;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9285);
if(temp__4657__auto__){
var seq__9285__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9285__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9285__$1);
var G__9306 = cljs.core.chunk_rest.call(null,seq__9285__$1);
var G__9307 = c__7656__auto__;
var G__9308 = cljs.core.count.call(null,c__7656__auto__);
var G__9309 = (0);
seq__9285 = G__9306;
chunk__9287 = G__9307;
count__9288 = G__9308;
i__9289 = G__9309;
continue;
} else {
var vec__9294 = cljs.core.first.call(null,seq__9285__$1);
var k = cljs.core.nth.call(null,vec__9294,(0),null);
var v = cljs.core.nth.call(null,vec__9294,(1),null);
var k_9310__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9310__$1);
} else {
e.attr(k_9310__$1,((cljs.core._EQ_.call(null,true,v))?k_9310__$1:v));
}

var G__9311 = cljs.core.next.call(null,seq__9285__$1);
var G__9312 = null;
var G__9313 = (0);
var G__9314 = (0);
seq__9285 = G__9311;
chunk__9287 = G__9312;
count__9288 = G__9313;
i__9289 = G__9314;
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
return hoplon.jquery.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9279){
var G__9280 = cljs.core.first.call(null,seq9279);
var seq9279__$1 = cljs.core.next.call(null,seq9279);
var G__9281 = cljs.core.first.call(null,seq9279__$1);
var seq9279__$2 = cljs.core.next.call(null,seq9279__$1);
var G__9282 = cljs.core.first.call(null,seq9279__$2);
var seq9279__$3 = cljs.core.next.call(null,seq9279__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9280,G__9281,G__9282,seq9279__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9315 = [];
var len__7950__auto___9332 = arguments.length;
var i__7951__auto___9333 = (0);
while(true){
if((i__7951__auto___9333 < len__7950__auto___9332)){
args9315.push((arguments[i__7951__auto___9333]));

var G__9334 = (i__7951__auto___9333 + (1));
i__7951__auto___9333 = G__9334;
continue;
} else {
}
break;
}

var G__9321 = args9315.length;
switch (G__9321) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9315.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9322 = cljs.core.seq.call(null,kvs);
var chunk__9323 = null;
var count__9324 = (0);
var i__9325 = (0);
while(true){
if((i__9325 < count__9324)){
var vec__9326 = cljs.core._nth.call(null,chunk__9323,i__9325);
var k = cljs.core.nth.call(null,vec__9326,(0),null);
var v = cljs.core.nth.call(null,vec__9326,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9336 = seq__9322;
var G__9337 = chunk__9323;
var G__9338 = count__9324;
var G__9339 = (i__9325 + (1));
seq__9322 = G__9336;
chunk__9323 = G__9337;
count__9324 = G__9338;
i__9325 = G__9339;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9322);
if(temp__4657__auto__){
var seq__9322__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9322__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9322__$1);
var G__9340 = cljs.core.chunk_rest.call(null,seq__9322__$1);
var G__9341 = c__7656__auto__;
var G__9342 = cljs.core.count.call(null,c__7656__auto__);
var G__9343 = (0);
seq__9322 = G__9340;
chunk__9323 = G__9341;
count__9324 = G__9342;
i__9325 = G__9343;
continue;
} else {
var vec__9329 = cljs.core.first.call(null,seq__9322__$1);
var k = cljs.core.nth.call(null,vec__9329,(0),null);
var v = cljs.core.nth.call(null,vec__9329,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9344 = cljs.core.next.call(null,seq__9322__$1);
var G__9345 = null;
var G__9346 = (0);
var G__9347 = (0);
seq__9322 = G__9344;
chunk__9323 = G__9345;
count__9324 = G__9346;
i__9325 = G__9347;
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
return hoplon.jquery.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9316){
var G__9317 = cljs.core.first.call(null,seq9316);
var seq9316__$1 = cljs.core.next.call(null,seq9316);
var G__9318 = cljs.core.first.call(null,seq9316__$1);
var seq9316__$2 = cljs.core.next.call(null,seq9316__$1);
var G__9319 = cljs.core.first.call(null,seq9316__$2);
var seq9316__$3 = cljs.core.next.call(null,seq9316__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9317,G__9318,G__9319,seq9316__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9348 = [];
var len__7950__auto___9351 = arguments.length;
var i__7951__auto___9352 = (0);
while(true){
if((i__7951__auto___9352 < len__7950__auto___9351)){
args9348.push((arguments[i__7951__auto___9352]));

var G__9353 = (i__7951__auto___9352 + (1));
i__7951__auto___9352 = G__9353;
continue;
} else {
}
break;
}

var G__9350 = args9348.length;
switch (G__9350) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9348.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.jquery.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args9355 = [];
var len__7950__auto___9358 = arguments.length;
var i__7951__auto___9359 = (0);
while(true){
if((i__7951__auto___9359 < len__7950__auto___9358)){
args9355.push((arguments[i__7951__auto___9359]));

var G__9360 = (i__7951__auto___9359 + (1));
i__7951__auto___9359 = G__9360;
continue;
} else {
}
break;
}

var G__9357 = args9355.length;
switch (G__9357) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9355.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("attr","*","attr/*",-1283077225),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("prop","*","prop/*",-1283942139),(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__9362__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9362 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9363__i = 0, G__9363__a = new Array(arguments.length -  2);
while (G__9363__i < G__9363__a.length) {G__9363__a[G__9363__i] = arguments[G__9363__i + 2]; ++G__9363__i;}
  args = new cljs.core.IndexedSeq(G__9363__a,0);
} 
return G__9362__delegate.call(this,elem,_,args);};
G__9362.cljs$lang$maxFixedArity = 2;
G__9362.cljs$lang$applyTo = (function (arglist__9364){
var elem = cljs.core.first(arglist__9364);
arglist__9364 = cljs.core.next(arglist__9364);
var _ = cljs.core.first(arglist__9364);
var args = cljs.core.rest(arglist__9364);
return G__9362__delegate(elem,_,args);
});
G__9362.cljs$core$IFn$_invoke$arity$variadic = G__9362__delegate;
return G__9362;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9365 = cljs.core.seq.call(null,clmap);
var chunk__9366 = null;
var count__9367 = (0);
var i__9368 = (0);
while(true){
if((i__9368 < count__9367)){
var vec__9369 = cljs.core._nth.call(null,chunk__9366,i__9368);
var c = cljs.core.nth.call(null,vec__9369,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9369,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9375 = seq__9365;
var G__9376 = chunk__9366;
var G__9377 = count__9367;
var G__9378 = (i__9368 + (1));
seq__9365 = G__9375;
chunk__9366 = G__9376;
count__9367 = G__9377;
i__9368 = G__9378;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9365);
if(temp__4657__auto__){
var seq__9365__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9365__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9365__$1);
var G__9379 = cljs.core.chunk_rest.call(null,seq__9365__$1);
var G__9380 = c__7656__auto__;
var G__9381 = cljs.core.count.call(null,c__7656__auto__);
var G__9382 = (0);
seq__9365 = G__9379;
chunk__9366 = G__9380;
count__9367 = G__9381;
i__9368 = G__9382;
continue;
} else {
var vec__9372 = cljs.core.first.call(null,seq__9365__$1);
var c = cljs.core.nth.call(null,vec__9372,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9372,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9383 = cljs.core.next.call(null,seq__9365__$1);
var G__9384 = null;
var G__9385 = (0);
var G__9386 = (0);
seq__9365 = G__9383;
chunk__9366 = G__9384;
count__9367 = G__9385;
i__9368 = G__9386;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));

//# sourceMappingURL=jquery.js.map