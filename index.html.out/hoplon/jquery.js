// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9272 = [];
var len__7950__auto___9291 = arguments.length;
var i__7951__auto___9292 = (0);
while(true){
if((i__7951__auto___9292 < len__7950__auto___9291)){
args9272.push((arguments[i__7951__auto___9292]));

var G__9293 = (i__7951__auto___9292 + (1));
i__7951__auto___9292 = G__9293;
continue;
} else {
}
break;
}

var G__9278 = args9272.length;
switch (G__9278) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9272.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9279 = cljs.core.seq.call(null,kvs);
var chunk__9281 = null;
var count__9282 = (0);
var i__9283 = (0);
while(true){
if((i__9283 < count__9282)){
var vec__9285 = cljs.core._nth.call(null,chunk__9281,i__9283);
var k = cljs.core.nth.call(null,vec__9285,(0),null);
var v = cljs.core.nth.call(null,vec__9285,(1),null);
var k_9295__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9295__$1);
} else {
e.attr(k_9295__$1,((cljs.core._EQ_.call(null,true,v))?k_9295__$1:v));
}

var G__9296 = seq__9279;
var G__9297 = chunk__9281;
var G__9298 = count__9282;
var G__9299 = (i__9283 + (1));
seq__9279 = G__9296;
chunk__9281 = G__9297;
count__9282 = G__9298;
i__9283 = G__9299;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9279);
if(temp__4657__auto__){
var seq__9279__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9279__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9279__$1);
var G__9300 = cljs.core.chunk_rest.call(null,seq__9279__$1);
var G__9301 = c__7656__auto__;
var G__9302 = cljs.core.count.call(null,c__7656__auto__);
var G__9303 = (0);
seq__9279 = G__9300;
chunk__9281 = G__9301;
count__9282 = G__9302;
i__9283 = G__9303;
continue;
} else {
var vec__9288 = cljs.core.first.call(null,seq__9279__$1);
var k = cljs.core.nth.call(null,vec__9288,(0),null);
var v = cljs.core.nth.call(null,vec__9288,(1),null);
var k_9304__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9304__$1);
} else {
e.attr(k_9304__$1,((cljs.core._EQ_.call(null,true,v))?k_9304__$1:v));
}

var G__9305 = cljs.core.next.call(null,seq__9279__$1);
var G__9306 = null;
var G__9307 = (0);
var G__9308 = (0);
seq__9279 = G__9305;
chunk__9281 = G__9306;
count__9282 = G__9307;
i__9283 = G__9308;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9273){
var G__9274 = cljs.core.first.call(null,seq9273);
var seq9273__$1 = cljs.core.next.call(null,seq9273);
var G__9275 = cljs.core.first.call(null,seq9273__$1);
var seq9273__$2 = cljs.core.next.call(null,seq9273__$1);
var G__9276 = cljs.core.first.call(null,seq9273__$2);
var seq9273__$3 = cljs.core.next.call(null,seq9273__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9274,G__9275,G__9276,seq9273__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9309 = [];
var len__7950__auto___9326 = arguments.length;
var i__7951__auto___9327 = (0);
while(true){
if((i__7951__auto___9327 < len__7950__auto___9326)){
args9309.push((arguments[i__7951__auto___9327]));

var G__9328 = (i__7951__auto___9327 + (1));
i__7951__auto___9327 = G__9328;
continue;
} else {
}
break;
}

var G__9315 = args9309.length;
switch (G__9315) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9309.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9316 = cljs.core.seq.call(null,kvs);
var chunk__9317 = null;
var count__9318 = (0);
var i__9319 = (0);
while(true){
if((i__9319 < count__9318)){
var vec__9320 = cljs.core._nth.call(null,chunk__9317,i__9319);
var k = cljs.core.nth.call(null,vec__9320,(0),null);
var v = cljs.core.nth.call(null,vec__9320,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9330 = seq__9316;
var G__9331 = chunk__9317;
var G__9332 = count__9318;
var G__9333 = (i__9319 + (1));
seq__9316 = G__9330;
chunk__9317 = G__9331;
count__9318 = G__9332;
i__9319 = G__9333;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9316);
if(temp__4657__auto__){
var seq__9316__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9316__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9316__$1);
var G__9334 = cljs.core.chunk_rest.call(null,seq__9316__$1);
var G__9335 = c__7656__auto__;
var G__9336 = cljs.core.count.call(null,c__7656__auto__);
var G__9337 = (0);
seq__9316 = G__9334;
chunk__9317 = G__9335;
count__9318 = G__9336;
i__9319 = G__9337;
continue;
} else {
var vec__9323 = cljs.core.first.call(null,seq__9316__$1);
var k = cljs.core.nth.call(null,vec__9323,(0),null);
var v = cljs.core.nth.call(null,vec__9323,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9338 = cljs.core.next.call(null,seq__9316__$1);
var G__9339 = null;
var G__9340 = (0);
var G__9341 = (0);
seq__9316 = G__9338;
chunk__9317 = G__9339;
count__9318 = G__9340;
i__9319 = G__9341;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9310){
var G__9311 = cljs.core.first.call(null,seq9310);
var seq9310__$1 = cljs.core.next.call(null,seq9310);
var G__9312 = cljs.core.first.call(null,seq9310__$1);
var seq9310__$2 = cljs.core.next.call(null,seq9310__$1);
var G__9313 = cljs.core.first.call(null,seq9310__$2);
var seq9310__$3 = cljs.core.next.call(null,seq9310__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9311,G__9312,G__9313,seq9310__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9342 = [];
var len__7950__auto___9345 = arguments.length;
var i__7951__auto___9346 = (0);
while(true){
if((i__7951__auto___9346 < len__7950__auto___9345)){
args9342.push((arguments[i__7951__auto___9346]));

var G__9347 = (i__7951__auto___9346 + (1));
i__7951__auto___9346 = G__9347;
continue;
} else {
}
break;
}

var G__9344 = args9342.length;
switch (G__9344) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9342.length)].join('')));

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
var args9349 = [];
var len__7950__auto___9352 = arguments.length;
var i__7951__auto___9353 = (0);
while(true){
if((i__7951__auto___9353 < len__7950__auto___9352)){
args9349.push((arguments[i__7951__auto___9353]));

var G__9354 = (i__7951__auto___9353 + (1));
i__7951__auto___9353 = G__9354;
continue;
} else {
}
break;
}

var G__9351 = args9349.length;
switch (G__9351) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9349.length)].join('')));

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
var G__9356__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9356 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9357__i = 0, G__9357__a = new Array(arguments.length -  2);
while (G__9357__i < G__9357__a.length) {G__9357__a[G__9357__i] = arguments[G__9357__i + 2]; ++G__9357__i;}
  args = new cljs.core.IndexedSeq(G__9357__a,0);
} 
return G__9356__delegate.call(this,elem,_,args);};
G__9356.cljs$lang$maxFixedArity = 2;
G__9356.cljs$lang$applyTo = (function (arglist__9358){
var elem = cljs.core.first(arglist__9358);
arglist__9358 = cljs.core.next(arglist__9358);
var _ = cljs.core.first(arglist__9358);
var args = cljs.core.rest(arglist__9358);
return G__9356__delegate(elem,_,args);
});
G__9356.cljs$core$IFn$_invoke$arity$variadic = G__9356__delegate;
return G__9356;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9359 = cljs.core.seq.call(null,clmap);
var chunk__9360 = null;
var count__9361 = (0);
var i__9362 = (0);
while(true){
if((i__9362 < count__9361)){
var vec__9363 = cljs.core._nth.call(null,chunk__9360,i__9362);
var c = cljs.core.nth.call(null,vec__9363,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9363,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9369 = seq__9359;
var G__9370 = chunk__9360;
var G__9371 = count__9361;
var G__9372 = (i__9362 + (1));
seq__9359 = G__9369;
chunk__9360 = G__9370;
count__9361 = G__9371;
i__9362 = G__9372;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9359);
if(temp__4657__auto__){
var seq__9359__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9359__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9359__$1);
var G__9373 = cljs.core.chunk_rest.call(null,seq__9359__$1);
var G__9374 = c__7656__auto__;
var G__9375 = cljs.core.count.call(null,c__7656__auto__);
var G__9376 = (0);
seq__9359 = G__9373;
chunk__9360 = G__9374;
count__9361 = G__9375;
i__9362 = G__9376;
continue;
} else {
var vec__9366 = cljs.core.first.call(null,seq__9359__$1);
var c = cljs.core.nth.call(null,vec__9366,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9366,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9377 = cljs.core.next.call(null,seq__9359__$1);
var G__9378 = null;
var G__9379 = (0);
var G__9380 = (0);
seq__9359 = G__9377;
chunk__9360 = G__9378;
count__9361 = G__9379;
i__9362 = G__9380;
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