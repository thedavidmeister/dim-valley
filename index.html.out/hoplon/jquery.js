// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9274 = [];
var len__7950__auto___9293 = arguments.length;
var i__7951__auto___9294 = (0);
while(true){
if((i__7951__auto___9294 < len__7950__auto___9293)){
args9274.push((arguments[i__7951__auto___9294]));

var G__9295 = (i__7951__auto___9294 + (1));
i__7951__auto___9294 = G__9295;
continue;
} else {
}
break;
}

var G__9280 = args9274.length;
switch (G__9280) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9274.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9281 = cljs.core.seq.call(null,kvs);
var chunk__9283 = null;
var count__9284 = (0);
var i__9285 = (0);
while(true){
if((i__9285 < count__9284)){
var vec__9287 = cljs.core._nth.call(null,chunk__9283,i__9285);
var k = cljs.core.nth.call(null,vec__9287,(0),null);
var v = cljs.core.nth.call(null,vec__9287,(1),null);
var k_9297__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9297__$1);
} else {
e.attr(k_9297__$1,((cljs.core._EQ_.call(null,true,v))?k_9297__$1:v));
}

var G__9298 = seq__9281;
var G__9299 = chunk__9283;
var G__9300 = count__9284;
var G__9301 = (i__9285 + (1));
seq__9281 = G__9298;
chunk__9283 = G__9299;
count__9284 = G__9300;
i__9285 = G__9301;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9281);
if(temp__4657__auto__){
var seq__9281__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9281__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9281__$1);
var G__9302 = cljs.core.chunk_rest.call(null,seq__9281__$1);
var G__9303 = c__7656__auto__;
var G__9304 = cljs.core.count.call(null,c__7656__auto__);
var G__9305 = (0);
seq__9281 = G__9302;
chunk__9283 = G__9303;
count__9284 = G__9304;
i__9285 = G__9305;
continue;
} else {
var vec__9290 = cljs.core.first.call(null,seq__9281__$1);
var k = cljs.core.nth.call(null,vec__9290,(0),null);
var v = cljs.core.nth.call(null,vec__9290,(1),null);
var k_9306__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9306__$1);
} else {
e.attr(k_9306__$1,((cljs.core._EQ_.call(null,true,v))?k_9306__$1:v));
}

var G__9307 = cljs.core.next.call(null,seq__9281__$1);
var G__9308 = null;
var G__9309 = (0);
var G__9310 = (0);
seq__9281 = G__9307;
chunk__9283 = G__9308;
count__9284 = G__9309;
i__9285 = G__9310;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9275){
var G__9276 = cljs.core.first.call(null,seq9275);
var seq9275__$1 = cljs.core.next.call(null,seq9275);
var G__9277 = cljs.core.first.call(null,seq9275__$1);
var seq9275__$2 = cljs.core.next.call(null,seq9275__$1);
var G__9278 = cljs.core.first.call(null,seq9275__$2);
var seq9275__$3 = cljs.core.next.call(null,seq9275__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9276,G__9277,G__9278,seq9275__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9311 = [];
var len__7950__auto___9328 = arguments.length;
var i__7951__auto___9329 = (0);
while(true){
if((i__7951__auto___9329 < len__7950__auto___9328)){
args9311.push((arguments[i__7951__auto___9329]));

var G__9330 = (i__7951__auto___9329 + (1));
i__7951__auto___9329 = G__9330;
continue;
} else {
}
break;
}

var G__9317 = args9311.length;
switch (G__9317) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9311.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9318 = cljs.core.seq.call(null,kvs);
var chunk__9319 = null;
var count__9320 = (0);
var i__9321 = (0);
while(true){
if((i__9321 < count__9320)){
var vec__9322 = cljs.core._nth.call(null,chunk__9319,i__9321);
var k = cljs.core.nth.call(null,vec__9322,(0),null);
var v = cljs.core.nth.call(null,vec__9322,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9332 = seq__9318;
var G__9333 = chunk__9319;
var G__9334 = count__9320;
var G__9335 = (i__9321 + (1));
seq__9318 = G__9332;
chunk__9319 = G__9333;
count__9320 = G__9334;
i__9321 = G__9335;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9318);
if(temp__4657__auto__){
var seq__9318__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9318__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9318__$1);
var G__9336 = cljs.core.chunk_rest.call(null,seq__9318__$1);
var G__9337 = c__7656__auto__;
var G__9338 = cljs.core.count.call(null,c__7656__auto__);
var G__9339 = (0);
seq__9318 = G__9336;
chunk__9319 = G__9337;
count__9320 = G__9338;
i__9321 = G__9339;
continue;
} else {
var vec__9325 = cljs.core.first.call(null,seq__9318__$1);
var k = cljs.core.nth.call(null,vec__9325,(0),null);
var v = cljs.core.nth.call(null,vec__9325,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9340 = cljs.core.next.call(null,seq__9318__$1);
var G__9341 = null;
var G__9342 = (0);
var G__9343 = (0);
seq__9318 = G__9340;
chunk__9319 = G__9341;
count__9320 = G__9342;
i__9321 = G__9343;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9312){
var G__9313 = cljs.core.first.call(null,seq9312);
var seq9312__$1 = cljs.core.next.call(null,seq9312);
var G__9314 = cljs.core.first.call(null,seq9312__$1);
var seq9312__$2 = cljs.core.next.call(null,seq9312__$1);
var G__9315 = cljs.core.first.call(null,seq9312__$2);
var seq9312__$3 = cljs.core.next.call(null,seq9312__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9313,G__9314,G__9315,seq9312__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9344 = [];
var len__7950__auto___9347 = arguments.length;
var i__7951__auto___9348 = (0);
while(true){
if((i__7951__auto___9348 < len__7950__auto___9347)){
args9344.push((arguments[i__7951__auto___9348]));

var G__9349 = (i__7951__auto___9348 + (1));
i__7951__auto___9348 = G__9349;
continue;
} else {
}
break;
}

var G__9346 = args9344.length;
switch (G__9346) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9344.length)].join('')));

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
var args9351 = [];
var len__7950__auto___9354 = arguments.length;
var i__7951__auto___9355 = (0);
while(true){
if((i__7951__auto___9355 < len__7950__auto___9354)){
args9351.push((arguments[i__7951__auto___9355]));

var G__9356 = (i__7951__auto___9355 + (1));
i__7951__auto___9355 = G__9356;
continue;
} else {
}
break;
}

var G__9353 = args9351.length;
switch (G__9353) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9351.length)].join('')));

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
var G__9358__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9358 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9359__i = 0, G__9359__a = new Array(arguments.length -  2);
while (G__9359__i < G__9359__a.length) {G__9359__a[G__9359__i] = arguments[G__9359__i + 2]; ++G__9359__i;}
  args = new cljs.core.IndexedSeq(G__9359__a,0);
} 
return G__9358__delegate.call(this,elem,_,args);};
G__9358.cljs$lang$maxFixedArity = 2;
G__9358.cljs$lang$applyTo = (function (arglist__9360){
var elem = cljs.core.first(arglist__9360);
arglist__9360 = cljs.core.next(arglist__9360);
var _ = cljs.core.first(arglist__9360);
var args = cljs.core.rest(arglist__9360);
return G__9358__delegate(elem,_,args);
});
G__9358.cljs$core$IFn$_invoke$arity$variadic = G__9358__delegate;
return G__9358;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9361 = cljs.core.seq.call(null,clmap);
var chunk__9362 = null;
var count__9363 = (0);
var i__9364 = (0);
while(true){
if((i__9364 < count__9363)){
var vec__9365 = cljs.core._nth.call(null,chunk__9362,i__9364);
var c = cljs.core.nth.call(null,vec__9365,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9365,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9371 = seq__9361;
var G__9372 = chunk__9362;
var G__9373 = count__9363;
var G__9374 = (i__9364 + (1));
seq__9361 = G__9371;
chunk__9362 = G__9372;
count__9363 = G__9373;
i__9364 = G__9374;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9361);
if(temp__4657__auto__){
var seq__9361__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9361__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9361__$1);
var G__9375 = cljs.core.chunk_rest.call(null,seq__9361__$1);
var G__9376 = c__7656__auto__;
var G__9377 = cljs.core.count.call(null,c__7656__auto__);
var G__9378 = (0);
seq__9361 = G__9375;
chunk__9362 = G__9376;
count__9363 = G__9377;
i__9364 = G__9378;
continue;
} else {
var vec__9368 = cljs.core.first.call(null,seq__9361__$1);
var c = cljs.core.nth.call(null,vec__9368,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9368,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9379 = cljs.core.next.call(null,seq__9361__$1);
var G__9380 = null;
var G__9381 = (0);
var G__9382 = (0);
seq__9361 = G__9379;
chunk__9362 = G__9380;
count__9363 = G__9381;
i__9364 = G__9382;
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