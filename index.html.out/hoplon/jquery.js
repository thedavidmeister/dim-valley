// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args15498 = [];
var len__8981__auto___15517 = arguments.length;
var i__8982__auto___15518 = (0);
while(true){
if((i__8982__auto___15518 < len__8981__auto___15517)){
args15498.push((arguments[i__8982__auto___15518]));

var G__15519 = (i__8982__auto___15518 + (1));
i__8982__auto___15518 = G__15519;
continue;
} else {
}
break;
}

var G__15504 = args15498.length;
switch (G__15504) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15498.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15505 = cljs.core.seq(kvs);
var chunk__15507 = null;
var count__15508 = (0);
var i__15509 = (0);
while(true){
if((i__15509 < count__15508)){
var vec__15511 = chunk__15507.cljs$core$IIndexed$_nth$arity$2(null,i__15509);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15511,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15511,(1),null);
var k_15521__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15521__$1);
} else {
e.attr(k_15521__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15521__$1:v));
}

var G__15522 = seq__15505;
var G__15523 = chunk__15507;
var G__15524 = count__15508;
var G__15525 = (i__15509 + (1));
seq__15505 = G__15522;
chunk__15507 = G__15523;
count__15508 = G__15524;
i__15509 = G__15525;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15505);
if(temp__6738__auto__){
var seq__15505__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15505__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15505__$1);
var G__15526 = cljs.core.chunk_rest(seq__15505__$1);
var G__15527 = c__8671__auto__;
var G__15528 = cljs.core.count(c__8671__auto__);
var G__15529 = (0);
seq__15505 = G__15526;
chunk__15507 = G__15527;
count__15508 = G__15528;
i__15509 = G__15529;
continue;
} else {
var vec__15514 = cljs.core.first(seq__15505__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15514,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15514,(1),null);
var k_15530__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_15530__$1);
} else {
e.attr(k_15530__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_15530__$1:v));
}

var G__15531 = cljs.core.next(seq__15505__$1);
var G__15532 = null;
var G__15533 = (0);
var G__15534 = (0);
seq__15505 = G__15531;
chunk__15507 = G__15532;
count__15508 = G__15533;
i__15509 = G__15534;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15499){
var G__15500 = cljs.core.first(seq15499);
var seq15499__$1 = cljs.core.next(seq15499);
var G__15501 = cljs.core.first(seq15499__$1);
var seq15499__$2 = cljs.core.next(seq15499__$1);
var G__15502 = cljs.core.first(seq15499__$2);
var seq15499__$3 = cljs.core.next(seq15499__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15500,G__15501,G__15502,seq15499__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args15535 = [];
var len__8981__auto___15552 = arguments.length;
var i__8982__auto___15553 = (0);
while(true){
if((i__8982__auto___15553 < len__8981__auto___15552)){
args15535.push((arguments[i__8982__auto___15553]));

var G__15554 = (i__8982__auto___15553 + (1));
i__8982__auto___15553 = G__15554;
continue;
} else {
}
break;
}

var G__15541 = args15535.length;
switch (G__15541) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args15535.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15542 = cljs.core.seq(kvs);
var chunk__15543 = null;
var count__15544 = (0);
var i__15545 = (0);
while(true){
if((i__15545 < count__15544)){
var vec__15546 = chunk__15543.cljs$core$IIndexed$_nth$arity$2(null,i__15545);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__15556 = seq__15542;
var G__15557 = chunk__15543;
var G__15558 = count__15544;
var G__15559 = (i__15545 + (1));
seq__15542 = G__15556;
chunk__15543 = G__15557;
count__15544 = G__15558;
i__15545 = G__15559;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15542);
if(temp__6738__auto__){
var seq__15542__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15542__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15542__$1);
var G__15560 = cljs.core.chunk_rest(seq__15542__$1);
var G__15561 = c__8671__auto__;
var G__15562 = cljs.core.count(c__8671__auto__);
var G__15563 = (0);
seq__15542 = G__15560;
chunk__15543 = G__15561;
count__15544 = G__15562;
i__15545 = G__15563;
continue;
} else {
var vec__15549 = cljs.core.first(seq__15542__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15549,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__15564 = cljs.core.next(seq__15542__$1);
var G__15565 = null;
var G__15566 = (0);
var G__15567 = (0);
seq__15542 = G__15564;
chunk__15543 = G__15565;
count__15544 = G__15566;
i__15545 = G__15567;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq15536){
var G__15537 = cljs.core.first(seq15536);
var seq15536__$1 = cljs.core.next(seq15536);
var G__15538 = cljs.core.first(seq15536__$1);
var seq15536__$2 = cljs.core.next(seq15536__$1);
var G__15539 = cljs.core.first(seq15536__$2);
var seq15536__$3 = cljs.core.next(seq15536__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15537,G__15538,G__15539,seq15536__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args15568 = [];
var len__8981__auto___15571 = arguments.length;
var i__8982__auto___15572 = (0);
while(true){
if((i__8982__auto___15572 < len__8981__auto___15571)){
args15568.push((arguments[i__8982__auto___15572]));

var G__15573 = (i__8982__auto___15572 + (1));
i__8982__auto___15572 = G__15573;
continue;
} else {
}
break;
}

var G__15570 = args15568.length;
switch (G__15570) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15568.length)].join('')));

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
var args15575 = [];
var len__8981__auto___15578 = arguments.length;
var i__8982__auto___15579 = (0);
while(true){
if((i__8982__auto___15579 < len__8981__auto___15578)){
args15575.push((arguments[i__8982__auto___15579]));

var G__15580 = (i__8982__auto___15579 + (1));
i__8982__auto___15579 = G__15580;
continue;
} else {
}
break;
}

var G__15577 = args15575.length;
switch (G__15577) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15575.length)].join('')));

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
var G__15582 = elem;
var G__15583 = cljs.core.cst$kw$attr;
var G__15584 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15582,G__15583,G__15584) : hoplon.core.do_BANG_.call(null,G__15582,G__15583,G__15584));
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
var G__15585__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15585 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15586__i = 0, G__15586__a = new Array(arguments.length -  2);
while (G__15586__i < G__15586__a.length) {G__15586__a[G__15586__i] = arguments[G__15586__i + 2]; ++G__15586__i;}
  args = new cljs.core.IndexedSeq(G__15586__a,0);
} 
return G__15585__delegate.call(this,elem,_,args);};
G__15585.cljs$lang$maxFixedArity = 2;
G__15585.cljs$lang$applyTo = (function (arglist__15587){
var elem = cljs.core.first(arglist__15587);
arglist__15587 = cljs.core.next(arglist__15587);
var _ = cljs.core.first(arglist__15587);
var args = cljs.core.rest(arglist__15587);
return G__15585__delegate(elem,_,args);
});
G__15585.cljs$core$IFn$_invoke$arity$variadic = G__15585__delegate;
return G__15585;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__15588 = cljs.core.seq(clmap);
var chunk__15589 = null;
var count__15590 = (0);
var i__15591 = (0);
while(true){
if((i__15591 < count__15590)){
var vec__15592 = chunk__15589.cljs$core$IIndexed$_nth$arity$2(null,i__15591);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15592,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15592,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15598 = seq__15588;
var G__15599 = chunk__15589;
var G__15600 = count__15590;
var G__15601 = (i__15591 + (1));
seq__15588 = G__15598;
chunk__15589 = G__15599;
count__15590 = G__15600;
i__15591 = G__15601;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__15588);
if(temp__6738__auto__){
var seq__15588__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15588__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__15588__$1);
var G__15602 = cljs.core.chunk_rest(seq__15588__$1);
var G__15603 = c__8671__auto__;
var G__15604 = cljs.core.count(c__8671__auto__);
var G__15605 = (0);
seq__15588 = G__15602;
chunk__15589 = G__15603;
count__15590 = G__15604;
i__15591 = G__15605;
continue;
} else {
var vec__15595 = cljs.core.first(seq__15588__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15595,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15595,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15606 = cljs.core.next(seq__15588__$1);
var G__15607 = null;
var G__15608 = (0);
var G__15609 = (0);
seq__15588 = G__15606;
chunk__15589 = G__15607;
count__15590 = G__15608;
i__15591 = G__15609;
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
var G__15610 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__15611 = (0);
return setTimeout(G__15610,G__15611);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__15612_15618 = elem;
var G__15613_15619 = cljs.core.cst$kw$focus;
var G__15614_15620 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15612_15618,G__15613_15619,G__15614_15620) : hoplon.core.do_BANG_.call(null,G__15612_15618,G__15613_15619,G__15614_15620));

var G__15615 = elem;
var G__15616 = cljs.core.cst$kw$select;
var G__15617 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15615,G__15616,G__15617) : hoplon.core.do_BANG_.call(null,G__15615,G__15616,G__15617));
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
return (function (){var G__15621 = this$__$1.target;
return jQuery(G__15621);
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
