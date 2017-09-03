// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args21534 = [];
var len__8981__auto___21553 = arguments.length;
var i__8982__auto___21554 = (0);
while(true){
if((i__8982__auto___21554 < len__8981__auto___21553)){
args21534.push((arguments[i__8982__auto___21554]));

var G__21555 = (i__8982__auto___21554 + (1));
i__8982__auto___21554 = G__21555;
continue;
} else {
}
break;
}

var G__21540 = args21534.length;
switch (G__21540) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21534.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21541 = cljs.core.seq(kvs);
var chunk__21543 = null;
var count__21544 = (0);
var i__21545 = (0);
while(true){
if((i__21545 < count__21544)){
var vec__21547 = chunk__21543.cljs$core$IIndexed$_nth$arity$2(null,i__21545);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21547,(1),null);
var k_21557__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21557__$1);
} else {
e.attr(k_21557__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21557__$1:v));
}

var G__21558 = seq__21541;
var G__21559 = chunk__21543;
var G__21560 = count__21544;
var G__21561 = (i__21545 + (1));
seq__21541 = G__21558;
chunk__21543 = G__21559;
count__21544 = G__21560;
i__21545 = G__21561;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21541);
if(temp__6738__auto__){
var seq__21541__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21541__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21541__$1);
var G__21562 = cljs.core.chunk_rest(seq__21541__$1);
var G__21563 = c__8671__auto__;
var G__21564 = cljs.core.count(c__8671__auto__);
var G__21565 = (0);
seq__21541 = G__21562;
chunk__21543 = G__21563;
count__21544 = G__21564;
i__21545 = G__21565;
continue;
} else {
var vec__21550 = cljs.core.first(seq__21541__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21550,(1),null);
var k_21566__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21566__$1);
} else {
e.attr(k_21566__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21566__$1:v));
}

var G__21567 = cljs.core.next(seq__21541__$1);
var G__21568 = null;
var G__21569 = (0);
var G__21570 = (0);
seq__21541 = G__21567;
chunk__21543 = G__21568;
count__21544 = G__21569;
i__21545 = G__21570;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq21535){
var G__21536 = cljs.core.first(seq21535);
var seq21535__$1 = cljs.core.next(seq21535);
var G__21537 = cljs.core.first(seq21535__$1);
var seq21535__$2 = cljs.core.next(seq21535__$1);
var G__21538 = cljs.core.first(seq21535__$2);
var seq21535__$3 = cljs.core.next(seq21535__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21536,G__21537,G__21538,seq21535__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args21571 = [];
var len__8981__auto___21588 = arguments.length;
var i__8982__auto___21589 = (0);
while(true){
if((i__8982__auto___21589 < len__8981__auto___21588)){
args21571.push((arguments[i__8982__auto___21589]));

var G__21590 = (i__8982__auto___21589 + (1));
i__8982__auto___21589 = G__21590;
continue;
} else {
}
break;
}

var G__21577 = args21571.length;
switch (G__21577) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21571.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21578 = cljs.core.seq(kvs);
var chunk__21579 = null;
var count__21580 = (0);
var i__21581 = (0);
while(true){
if((i__21581 < count__21580)){
var vec__21582 = chunk__21579.cljs$core$IIndexed$_nth$arity$2(null,i__21581);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21582,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21582,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21592 = seq__21578;
var G__21593 = chunk__21579;
var G__21594 = count__21580;
var G__21595 = (i__21581 + (1));
seq__21578 = G__21592;
chunk__21579 = G__21593;
count__21580 = G__21594;
i__21581 = G__21595;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21578);
if(temp__6738__auto__){
var seq__21578__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21578__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21578__$1);
var G__21596 = cljs.core.chunk_rest(seq__21578__$1);
var G__21597 = c__8671__auto__;
var G__21598 = cljs.core.count(c__8671__auto__);
var G__21599 = (0);
seq__21578 = G__21596;
chunk__21579 = G__21597;
count__21580 = G__21598;
i__21581 = G__21599;
continue;
} else {
var vec__21585 = cljs.core.first(seq__21578__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21585,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21600 = cljs.core.next(seq__21578__$1);
var G__21601 = null;
var G__21602 = (0);
var G__21603 = (0);
seq__21578 = G__21600;
chunk__21579 = G__21601;
count__21580 = G__21602;
i__21581 = G__21603;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq21572){
var G__21573 = cljs.core.first(seq21572);
var seq21572__$1 = cljs.core.next(seq21572);
var G__21574 = cljs.core.first(seq21572__$1);
var seq21572__$2 = cljs.core.next(seq21572__$1);
var G__21575 = cljs.core.first(seq21572__$2);
var seq21572__$3 = cljs.core.next(seq21572__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21573,G__21574,G__21575,seq21572__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args21604 = [];
var len__8981__auto___21607 = arguments.length;
var i__8982__auto___21608 = (0);
while(true){
if((i__8982__auto___21608 < len__8981__auto___21607)){
args21604.push((arguments[i__8982__auto___21608]));

var G__21609 = (i__8982__auto___21608 + (1));
i__8982__auto___21608 = G__21609;
continue;
} else {
}
break;
}

var G__21606 = args21604.length;
switch (G__21606) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21604.length)].join('')));

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
var args21611 = [];
var len__8981__auto___21614 = arguments.length;
var i__8982__auto___21615 = (0);
while(true){
if((i__8982__auto___21615 < len__8981__auto___21614)){
args21611.push((arguments[i__8982__auto___21615]));

var G__21616 = (i__8982__auto___21615 + (1));
i__8982__auto___21615 = G__21616;
continue;
} else {
}
break;
}

var G__21613 = args21611.length;
switch (G__21613) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21611.length)].join('')));

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
var G__21618 = elem;
var G__21619 = cljs.core.cst$kw$attr;
var G__21620 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21618,G__21619,G__21620) : hoplon.core.do_BANG_.call(null,G__21618,G__21619,G__21620));
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
var G__21621__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__21621 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__21622__i = 0, G__21622__a = new Array(arguments.length -  2);
while (G__21622__i < G__21622__a.length) {G__21622__a[G__21622__i] = arguments[G__21622__i + 2]; ++G__21622__i;}
  args = new cljs.core.IndexedSeq(G__21622__a,0);
} 
return G__21621__delegate.call(this,elem,_,args);};
G__21621.cljs$lang$maxFixedArity = 2;
G__21621.cljs$lang$applyTo = (function (arglist__21623){
var elem = cljs.core.first(arglist__21623);
arglist__21623 = cljs.core.next(arglist__21623);
var _ = cljs.core.first(arglist__21623);
var args = cljs.core.rest(arglist__21623);
return G__21621__delegate(elem,_,args);
});
G__21621.cljs$core$IFn$_invoke$arity$variadic = G__21621__delegate;
return G__21621;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__21624 = cljs.core.seq(clmap);
var chunk__21625 = null;
var count__21626 = (0);
var i__21627 = (0);
while(true){
if((i__21627 < count__21626)){
var vec__21628 = chunk__21625.cljs$core$IIndexed$_nth$arity$2(null,i__21627);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21634 = seq__21624;
var G__21635 = chunk__21625;
var G__21636 = count__21626;
var G__21637 = (i__21627 + (1));
seq__21624 = G__21634;
chunk__21625 = G__21635;
count__21626 = G__21636;
i__21627 = G__21637;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21624);
if(temp__6738__auto__){
var seq__21624__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21624__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21624__$1);
var G__21638 = cljs.core.chunk_rest(seq__21624__$1);
var G__21639 = c__8671__auto__;
var G__21640 = cljs.core.count(c__8671__auto__);
var G__21641 = (0);
seq__21624 = G__21638;
chunk__21625 = G__21639;
count__21626 = G__21640;
i__21627 = G__21641;
continue;
} else {
var vec__21631 = cljs.core.first(seq__21624__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21642 = cljs.core.next(seq__21624__$1);
var G__21643 = null;
var G__21644 = (0);
var G__21645 = (0);
seq__21624 = G__21642;
chunk__21625 = G__21643;
count__21626 = G__21644;
i__21627 = G__21645;
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
var G__21646 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__21647 = (0);
return setTimeout(G__21646,G__21647);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__21648_21654 = elem;
var G__21649_21655 = cljs.core.cst$kw$focus;
var G__21650_21656 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21648_21654,G__21649_21655,G__21650_21656) : hoplon.core.do_BANG_.call(null,G__21648_21654,G__21649_21655,G__21650_21656));

var G__21651 = elem;
var G__21652 = cljs.core.cst$kw$select;
var G__21653 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21651,G__21652,G__21653) : hoplon.core.do_BANG_.call(null,G__21651,G__21652,G__21653));
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
return (function (){var G__21657 = this$__$1.target;
return jQuery(G__21657);
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
