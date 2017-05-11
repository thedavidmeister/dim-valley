// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9374 = [];
var len__7950__auto___9393 = arguments.length;
var i__7951__auto___9394 = (0);
while(true){
if((i__7951__auto___9394 < len__7950__auto___9393)){
args9374.push((arguments[i__7951__auto___9394]));

var G__9395 = (i__7951__auto___9394 + (1));
i__7951__auto___9394 = G__9395;
continue;
} else {
}
break;
}

var G__9380 = args9374.length;
switch (G__9380) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9374.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9381 = cljs.core.seq.call(null,kvs);
var chunk__9383 = null;
var count__9384 = (0);
var i__9385 = (0);
while(true){
if((i__9385 < count__9384)){
var vec__9387 = cljs.core._nth.call(null,chunk__9383,i__9385);
var k = cljs.core.nth.call(null,vec__9387,(0),null);
var v = cljs.core.nth.call(null,vec__9387,(1),null);
var k_9397__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9397__$1);
} else {
e.attr(k_9397__$1,((cljs.core._EQ_.call(null,true,v))?k_9397__$1:v));
}

var G__9398 = seq__9381;
var G__9399 = chunk__9383;
var G__9400 = count__9384;
var G__9401 = (i__9385 + (1));
seq__9381 = G__9398;
chunk__9383 = G__9399;
count__9384 = G__9400;
i__9385 = G__9401;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9381);
if(temp__4657__auto__){
var seq__9381__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9381__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9381__$1);
var G__9402 = cljs.core.chunk_rest.call(null,seq__9381__$1);
var G__9403 = c__7656__auto__;
var G__9404 = cljs.core.count.call(null,c__7656__auto__);
var G__9405 = (0);
seq__9381 = G__9402;
chunk__9383 = G__9403;
count__9384 = G__9404;
i__9385 = G__9405;
continue;
} else {
var vec__9390 = cljs.core.first.call(null,seq__9381__$1);
var k = cljs.core.nth.call(null,vec__9390,(0),null);
var v = cljs.core.nth.call(null,vec__9390,(1),null);
var k_9406__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9406__$1);
} else {
e.attr(k_9406__$1,((cljs.core._EQ_.call(null,true,v))?k_9406__$1:v));
}

var G__9407 = cljs.core.next.call(null,seq__9381__$1);
var G__9408 = null;
var G__9409 = (0);
var G__9410 = (0);
seq__9381 = G__9407;
chunk__9383 = G__9408;
count__9384 = G__9409;
i__9385 = G__9410;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9375){
var G__9376 = cljs.core.first.call(null,seq9375);
var seq9375__$1 = cljs.core.next.call(null,seq9375);
var G__9377 = cljs.core.first.call(null,seq9375__$1);
var seq9375__$2 = cljs.core.next.call(null,seq9375__$1);
var G__9378 = cljs.core.first.call(null,seq9375__$2);
var seq9375__$3 = cljs.core.next.call(null,seq9375__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9376,G__9377,G__9378,seq9375__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9411 = [];
var len__7950__auto___9428 = arguments.length;
var i__7951__auto___9429 = (0);
while(true){
if((i__7951__auto___9429 < len__7950__auto___9428)){
args9411.push((arguments[i__7951__auto___9429]));

var G__9430 = (i__7951__auto___9429 + (1));
i__7951__auto___9429 = G__9430;
continue;
} else {
}
break;
}

var G__9417 = args9411.length;
switch (G__9417) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9411.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9418 = cljs.core.seq.call(null,kvs);
var chunk__9419 = null;
var count__9420 = (0);
var i__9421 = (0);
while(true){
if((i__9421 < count__9420)){
var vec__9422 = cljs.core._nth.call(null,chunk__9419,i__9421);
var k = cljs.core.nth.call(null,vec__9422,(0),null);
var v = cljs.core.nth.call(null,vec__9422,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9432 = seq__9418;
var G__9433 = chunk__9419;
var G__9434 = count__9420;
var G__9435 = (i__9421 + (1));
seq__9418 = G__9432;
chunk__9419 = G__9433;
count__9420 = G__9434;
i__9421 = G__9435;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9418);
if(temp__4657__auto__){
var seq__9418__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9418__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9418__$1);
var G__9436 = cljs.core.chunk_rest.call(null,seq__9418__$1);
var G__9437 = c__7656__auto__;
var G__9438 = cljs.core.count.call(null,c__7656__auto__);
var G__9439 = (0);
seq__9418 = G__9436;
chunk__9419 = G__9437;
count__9420 = G__9438;
i__9421 = G__9439;
continue;
} else {
var vec__9425 = cljs.core.first.call(null,seq__9418__$1);
var k = cljs.core.nth.call(null,vec__9425,(0),null);
var v = cljs.core.nth.call(null,vec__9425,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9440 = cljs.core.next.call(null,seq__9418__$1);
var G__9441 = null;
var G__9442 = (0);
var G__9443 = (0);
seq__9418 = G__9440;
chunk__9419 = G__9441;
count__9420 = G__9442;
i__9421 = G__9443;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9412){
var G__9413 = cljs.core.first.call(null,seq9412);
var seq9412__$1 = cljs.core.next.call(null,seq9412);
var G__9414 = cljs.core.first.call(null,seq9412__$1);
var seq9412__$2 = cljs.core.next.call(null,seq9412__$1);
var G__9415 = cljs.core.first.call(null,seq9412__$2);
var seq9412__$3 = cljs.core.next.call(null,seq9412__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9413,G__9414,G__9415,seq9412__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9444 = [];
var len__7950__auto___9447 = arguments.length;
var i__7951__auto___9448 = (0);
while(true){
if((i__7951__auto___9448 < len__7950__auto___9447)){
args9444.push((arguments[i__7951__auto___9448]));

var G__9449 = (i__7951__auto___9448 + (1));
i__7951__auto___9448 = G__9449;
continue;
} else {
}
break;
}

var G__9446 = args9444.length;
switch (G__9446) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9444.length)].join('')));

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
var args9451 = [];
var len__7950__auto___9454 = arguments.length;
var i__7951__auto___9455 = (0);
while(true){
if((i__7951__auto___9455 < len__7950__auto___9454)){
args9451.push((arguments[i__7951__auto___9455]));

var G__9456 = (i__7951__auto___9455 + (1));
i__7951__auto___9455 = G__9456;
continue;
} else {
}
break;
}

var G__9453 = args9451.length;
switch (G__9453) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9451.length)].join('')));

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
var G__9458__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9458 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9459__i = 0, G__9459__a = new Array(arguments.length -  2);
while (G__9459__i < G__9459__a.length) {G__9459__a[G__9459__i] = arguments[G__9459__i + 2]; ++G__9459__i;}
  args = new cljs.core.IndexedSeq(G__9459__a,0);
} 
return G__9458__delegate.call(this,elem,_,args);};
G__9458.cljs$lang$maxFixedArity = 2;
G__9458.cljs$lang$applyTo = (function (arglist__9460){
var elem = cljs.core.first(arglist__9460);
arglist__9460 = cljs.core.next(arglist__9460);
var _ = cljs.core.first(arglist__9460);
var args = cljs.core.rest(arglist__9460);
return G__9458__delegate(elem,_,args);
});
G__9458.cljs$core$IFn$_invoke$arity$variadic = G__9458__delegate;
return G__9458;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9461 = cljs.core.seq.call(null,clmap);
var chunk__9462 = null;
var count__9463 = (0);
var i__9464 = (0);
while(true){
if((i__9464 < count__9463)){
var vec__9465 = cljs.core._nth.call(null,chunk__9462,i__9464);
var c = cljs.core.nth.call(null,vec__9465,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9465,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9471 = seq__9461;
var G__9472 = chunk__9462;
var G__9473 = count__9463;
var G__9474 = (i__9464 + (1));
seq__9461 = G__9471;
chunk__9462 = G__9472;
count__9463 = G__9473;
i__9464 = G__9474;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9461);
if(temp__4657__auto__){
var seq__9461__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9461__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9461__$1);
var G__9475 = cljs.core.chunk_rest.call(null,seq__9461__$1);
var G__9476 = c__7656__auto__;
var G__9477 = cljs.core.count.call(null,c__7656__auto__);
var G__9478 = (0);
seq__9461 = G__9475;
chunk__9462 = G__9476;
count__9463 = G__9477;
i__9464 = G__9478;
continue;
} else {
var vec__9468 = cljs.core.first.call(null,seq__9461__$1);
var c = cljs.core.nth.call(null,vec__9468,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9468,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9479 = cljs.core.next.call(null,seq__9461__$1);
var G__9480 = null;
var G__9481 = (0);
var G__9482 = (0);
seq__9461 = G__9479;
chunk__9462 = G__9480;
count__9463 = G__9481;
i__9464 = G__9482;
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