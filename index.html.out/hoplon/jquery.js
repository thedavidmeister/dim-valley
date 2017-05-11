// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9276 = [];
var len__7950__auto___9295 = arguments.length;
var i__7951__auto___9296 = (0);
while(true){
if((i__7951__auto___9296 < len__7950__auto___9295)){
args9276.push((arguments[i__7951__auto___9296]));

var G__9297 = (i__7951__auto___9296 + (1));
i__7951__auto___9296 = G__9297;
continue;
} else {
}
break;
}

var G__9282 = args9276.length;
switch (G__9282) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9276.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9283 = cljs.core.seq.call(null,kvs);
var chunk__9285 = null;
var count__9286 = (0);
var i__9287 = (0);
while(true){
if((i__9287 < count__9286)){
var vec__9289 = cljs.core._nth.call(null,chunk__9285,i__9287);
var k = cljs.core.nth.call(null,vec__9289,(0),null);
var v = cljs.core.nth.call(null,vec__9289,(1),null);
var k_9299__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9299__$1);
} else {
e.attr(k_9299__$1,((cljs.core._EQ_.call(null,true,v))?k_9299__$1:v));
}

var G__9300 = seq__9283;
var G__9301 = chunk__9285;
var G__9302 = count__9286;
var G__9303 = (i__9287 + (1));
seq__9283 = G__9300;
chunk__9285 = G__9301;
count__9286 = G__9302;
i__9287 = G__9303;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9283);
if(temp__4657__auto__){
var seq__9283__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9283__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9283__$1);
var G__9304 = cljs.core.chunk_rest.call(null,seq__9283__$1);
var G__9305 = c__7656__auto__;
var G__9306 = cljs.core.count.call(null,c__7656__auto__);
var G__9307 = (0);
seq__9283 = G__9304;
chunk__9285 = G__9305;
count__9286 = G__9306;
i__9287 = G__9307;
continue;
} else {
var vec__9292 = cljs.core.first.call(null,seq__9283__$1);
var k = cljs.core.nth.call(null,vec__9292,(0),null);
var v = cljs.core.nth.call(null,vec__9292,(1),null);
var k_9308__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9308__$1);
} else {
e.attr(k_9308__$1,((cljs.core._EQ_.call(null,true,v))?k_9308__$1:v));
}

var G__9309 = cljs.core.next.call(null,seq__9283__$1);
var G__9310 = null;
var G__9311 = (0);
var G__9312 = (0);
seq__9283 = G__9309;
chunk__9285 = G__9310;
count__9286 = G__9311;
i__9287 = G__9312;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9277){
var G__9278 = cljs.core.first.call(null,seq9277);
var seq9277__$1 = cljs.core.next.call(null,seq9277);
var G__9279 = cljs.core.first.call(null,seq9277__$1);
var seq9277__$2 = cljs.core.next.call(null,seq9277__$1);
var G__9280 = cljs.core.first.call(null,seq9277__$2);
var seq9277__$3 = cljs.core.next.call(null,seq9277__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9278,G__9279,G__9280,seq9277__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9313 = [];
var len__7950__auto___9330 = arguments.length;
var i__7951__auto___9331 = (0);
while(true){
if((i__7951__auto___9331 < len__7950__auto___9330)){
args9313.push((arguments[i__7951__auto___9331]));

var G__9332 = (i__7951__auto___9331 + (1));
i__7951__auto___9331 = G__9332;
continue;
} else {
}
break;
}

var G__9319 = args9313.length;
switch (G__9319) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9313.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9320 = cljs.core.seq.call(null,kvs);
var chunk__9321 = null;
var count__9322 = (0);
var i__9323 = (0);
while(true){
if((i__9323 < count__9322)){
var vec__9324 = cljs.core._nth.call(null,chunk__9321,i__9323);
var k = cljs.core.nth.call(null,vec__9324,(0),null);
var v = cljs.core.nth.call(null,vec__9324,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9334 = seq__9320;
var G__9335 = chunk__9321;
var G__9336 = count__9322;
var G__9337 = (i__9323 + (1));
seq__9320 = G__9334;
chunk__9321 = G__9335;
count__9322 = G__9336;
i__9323 = G__9337;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9320);
if(temp__4657__auto__){
var seq__9320__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9320__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9320__$1);
var G__9338 = cljs.core.chunk_rest.call(null,seq__9320__$1);
var G__9339 = c__7656__auto__;
var G__9340 = cljs.core.count.call(null,c__7656__auto__);
var G__9341 = (0);
seq__9320 = G__9338;
chunk__9321 = G__9339;
count__9322 = G__9340;
i__9323 = G__9341;
continue;
} else {
var vec__9327 = cljs.core.first.call(null,seq__9320__$1);
var k = cljs.core.nth.call(null,vec__9327,(0),null);
var v = cljs.core.nth.call(null,vec__9327,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9342 = cljs.core.next.call(null,seq__9320__$1);
var G__9343 = null;
var G__9344 = (0);
var G__9345 = (0);
seq__9320 = G__9342;
chunk__9321 = G__9343;
count__9322 = G__9344;
i__9323 = G__9345;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9314){
var G__9315 = cljs.core.first.call(null,seq9314);
var seq9314__$1 = cljs.core.next.call(null,seq9314);
var G__9316 = cljs.core.first.call(null,seq9314__$1);
var seq9314__$2 = cljs.core.next.call(null,seq9314__$1);
var G__9317 = cljs.core.first.call(null,seq9314__$2);
var seq9314__$3 = cljs.core.next.call(null,seq9314__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9315,G__9316,G__9317,seq9314__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9346 = [];
var len__7950__auto___9349 = arguments.length;
var i__7951__auto___9350 = (0);
while(true){
if((i__7951__auto___9350 < len__7950__auto___9349)){
args9346.push((arguments[i__7951__auto___9350]));

var G__9351 = (i__7951__auto___9350 + (1));
i__7951__auto___9350 = G__9351;
continue;
} else {
}
break;
}

var G__9348 = args9346.length;
switch (G__9348) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9346.length)].join('')));

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
var args9353 = [];
var len__7950__auto___9356 = arguments.length;
var i__7951__auto___9357 = (0);
while(true){
if((i__7951__auto___9357 < len__7950__auto___9356)){
args9353.push((arguments[i__7951__auto___9357]));

var G__9358 = (i__7951__auto___9357 + (1));
i__7951__auto___9357 = G__9358;
continue;
} else {
}
break;
}

var G__9355 = args9353.length;
switch (G__9355) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9353.length)].join('')));

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
var G__9360__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9360 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9361__i = 0, G__9361__a = new Array(arguments.length -  2);
while (G__9361__i < G__9361__a.length) {G__9361__a[G__9361__i] = arguments[G__9361__i + 2]; ++G__9361__i;}
  args = new cljs.core.IndexedSeq(G__9361__a,0);
} 
return G__9360__delegate.call(this,elem,_,args);};
G__9360.cljs$lang$maxFixedArity = 2;
G__9360.cljs$lang$applyTo = (function (arglist__9362){
var elem = cljs.core.first(arglist__9362);
arglist__9362 = cljs.core.next(arglist__9362);
var _ = cljs.core.first(arglist__9362);
var args = cljs.core.rest(arglist__9362);
return G__9360__delegate(elem,_,args);
});
G__9360.cljs$core$IFn$_invoke$arity$variadic = G__9360__delegate;
return G__9360;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9363 = cljs.core.seq.call(null,clmap);
var chunk__9364 = null;
var count__9365 = (0);
var i__9366 = (0);
while(true){
if((i__9366 < count__9365)){
var vec__9367 = cljs.core._nth.call(null,chunk__9364,i__9366);
var c = cljs.core.nth.call(null,vec__9367,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9367,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9373 = seq__9363;
var G__9374 = chunk__9364;
var G__9375 = count__9365;
var G__9376 = (i__9366 + (1));
seq__9363 = G__9373;
chunk__9364 = G__9374;
count__9365 = G__9375;
i__9366 = G__9376;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9363);
if(temp__4657__auto__){
var seq__9363__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9363__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9363__$1);
var G__9377 = cljs.core.chunk_rest.call(null,seq__9363__$1);
var G__9378 = c__7656__auto__;
var G__9379 = cljs.core.count.call(null,c__7656__auto__);
var G__9380 = (0);
seq__9363 = G__9377;
chunk__9364 = G__9378;
count__9365 = G__9379;
i__9366 = G__9380;
continue;
} else {
var vec__9370 = cljs.core.first.call(null,seq__9363__$1);
var c = cljs.core.nth.call(null,vec__9370,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9370,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9381 = cljs.core.next.call(null,seq__9363__$1);
var G__9382 = null;
var G__9383 = (0);
var G__9384 = (0);
seq__9363 = G__9381;
chunk__9364 = G__9382;
count__9365 = G__9383;
i__9366 = G__9384;
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