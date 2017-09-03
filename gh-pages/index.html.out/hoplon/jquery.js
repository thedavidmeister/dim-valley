// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args21533 = [];
var len__8981__auto___21552 = arguments.length;
var i__8982__auto___21553 = (0);
while(true){
if((i__8982__auto___21553 < len__8981__auto___21552)){
args21533.push((arguments[i__8982__auto___21553]));

var G__21554 = (i__8982__auto___21553 + (1));
i__8982__auto___21553 = G__21554;
continue;
} else {
}
break;
}

var G__21539 = args21533.length;
switch (G__21539) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21533.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21540 = cljs.core.seq(kvs);
var chunk__21542 = null;
var count__21543 = (0);
var i__21544 = (0);
while(true){
if((i__21544 < count__21543)){
var vec__21546 = chunk__21542.cljs$core$IIndexed$_nth$arity$2(null,i__21544);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21546,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21546,(1),null);
var k_21556__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21556__$1);
} else {
e.attr(k_21556__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21556__$1:v));
}

var G__21557 = seq__21540;
var G__21558 = chunk__21542;
var G__21559 = count__21543;
var G__21560 = (i__21544 + (1));
seq__21540 = G__21557;
chunk__21542 = G__21558;
count__21543 = G__21559;
i__21544 = G__21560;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21540);
if(temp__6738__auto__){
var seq__21540__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21540__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21540__$1);
var G__21561 = cljs.core.chunk_rest(seq__21540__$1);
var G__21562 = c__8671__auto__;
var G__21563 = cljs.core.count(c__8671__auto__);
var G__21564 = (0);
seq__21540 = G__21561;
chunk__21542 = G__21562;
count__21543 = G__21563;
i__21544 = G__21564;
continue;
} else {
var vec__21549 = cljs.core.first(seq__21540__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21549,(1),null);
var k_21565__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21565__$1);
} else {
e.attr(k_21565__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21565__$1:v));
}

var G__21566 = cljs.core.next(seq__21540__$1);
var G__21567 = null;
var G__21568 = (0);
var G__21569 = (0);
seq__21540 = G__21566;
chunk__21542 = G__21567;
count__21543 = G__21568;
i__21544 = G__21569;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq21534){
var G__21535 = cljs.core.first(seq21534);
var seq21534__$1 = cljs.core.next(seq21534);
var G__21536 = cljs.core.first(seq21534__$1);
var seq21534__$2 = cljs.core.next(seq21534__$1);
var G__21537 = cljs.core.first(seq21534__$2);
var seq21534__$3 = cljs.core.next(seq21534__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21535,G__21536,G__21537,seq21534__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args21570 = [];
var len__8981__auto___21587 = arguments.length;
var i__8982__auto___21588 = (0);
while(true){
if((i__8982__auto___21588 < len__8981__auto___21587)){
args21570.push((arguments[i__8982__auto___21588]));

var G__21589 = (i__8982__auto___21588 + (1));
i__8982__auto___21588 = G__21589;
continue;
} else {
}
break;
}

var G__21576 = args21570.length;
switch (G__21576) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21570.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21577 = cljs.core.seq(kvs);
var chunk__21578 = null;
var count__21579 = (0);
var i__21580 = (0);
while(true){
if((i__21580 < count__21579)){
var vec__21581 = chunk__21578.cljs$core$IIndexed$_nth$arity$2(null,i__21580);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21581,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21591 = seq__21577;
var G__21592 = chunk__21578;
var G__21593 = count__21579;
var G__21594 = (i__21580 + (1));
seq__21577 = G__21591;
chunk__21578 = G__21592;
count__21579 = G__21593;
i__21580 = G__21594;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21577);
if(temp__6738__auto__){
var seq__21577__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21577__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21577__$1);
var G__21595 = cljs.core.chunk_rest(seq__21577__$1);
var G__21596 = c__8671__auto__;
var G__21597 = cljs.core.count(c__8671__auto__);
var G__21598 = (0);
seq__21577 = G__21595;
chunk__21578 = G__21596;
count__21579 = G__21597;
i__21580 = G__21598;
continue;
} else {
var vec__21584 = cljs.core.first(seq__21577__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21584,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21584,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21599 = cljs.core.next(seq__21577__$1);
var G__21600 = null;
var G__21601 = (0);
var G__21602 = (0);
seq__21577 = G__21599;
chunk__21578 = G__21600;
count__21579 = G__21601;
i__21580 = G__21602;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq21571){
var G__21572 = cljs.core.first(seq21571);
var seq21571__$1 = cljs.core.next(seq21571);
var G__21573 = cljs.core.first(seq21571__$1);
var seq21571__$2 = cljs.core.next(seq21571__$1);
var G__21574 = cljs.core.first(seq21571__$2);
var seq21571__$3 = cljs.core.next(seq21571__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21572,G__21573,G__21574,seq21571__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args21603 = [];
var len__8981__auto___21606 = arguments.length;
var i__8982__auto___21607 = (0);
while(true){
if((i__8982__auto___21607 < len__8981__auto___21606)){
args21603.push((arguments[i__8982__auto___21607]));

var G__21608 = (i__8982__auto___21607 + (1));
i__8982__auto___21607 = G__21608;
continue;
} else {
}
break;
}

var G__21605 = args21603.length;
switch (G__21605) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21603.length)].join('')));

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
var args21610 = [];
var len__8981__auto___21613 = arguments.length;
var i__8982__auto___21614 = (0);
while(true){
if((i__8982__auto___21614 < len__8981__auto___21613)){
args21610.push((arguments[i__8982__auto___21614]));

var G__21615 = (i__8982__auto___21614 + (1));
i__8982__auto___21614 = G__21615;
continue;
} else {
}
break;
}

var G__21612 = args21610.length;
switch (G__21612) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21610.length)].join('')));

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
var G__21617 = elem;
var G__21618 = cljs.core.cst$kw$attr;
var G__21619 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21617,G__21618,G__21619) : hoplon.core.do_BANG_.call(null,G__21617,G__21618,G__21619));
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
var G__21620__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__21620 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__21621__i = 0, G__21621__a = new Array(arguments.length -  2);
while (G__21621__i < G__21621__a.length) {G__21621__a[G__21621__i] = arguments[G__21621__i + 2]; ++G__21621__i;}
  args = new cljs.core.IndexedSeq(G__21621__a,0);
} 
return G__21620__delegate.call(this,elem,_,args);};
G__21620.cljs$lang$maxFixedArity = 2;
G__21620.cljs$lang$applyTo = (function (arglist__21622){
var elem = cljs.core.first(arglist__21622);
arglist__21622 = cljs.core.next(arglist__21622);
var _ = cljs.core.first(arglist__21622);
var args = cljs.core.rest(arglist__21622);
return G__21620__delegate(elem,_,args);
});
G__21620.cljs$core$IFn$_invoke$arity$variadic = G__21620__delegate;
return G__21620;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__21623 = cljs.core.seq(clmap);
var chunk__21624 = null;
var count__21625 = (0);
var i__21626 = (0);
while(true){
if((i__21626 < count__21625)){
var vec__21627 = chunk__21624.cljs$core$IIndexed$_nth$arity$2(null,i__21626);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21633 = seq__21623;
var G__21634 = chunk__21624;
var G__21635 = count__21625;
var G__21636 = (i__21626 + (1));
seq__21623 = G__21633;
chunk__21624 = G__21634;
count__21625 = G__21635;
i__21626 = G__21636;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21623);
if(temp__6738__auto__){
var seq__21623__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21623__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21623__$1);
var G__21637 = cljs.core.chunk_rest(seq__21623__$1);
var G__21638 = c__8671__auto__;
var G__21639 = cljs.core.count(c__8671__auto__);
var G__21640 = (0);
seq__21623 = G__21637;
chunk__21624 = G__21638;
count__21625 = G__21639;
i__21626 = G__21640;
continue;
} else {
var vec__21630 = cljs.core.first(seq__21623__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21630,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21630,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21641 = cljs.core.next(seq__21623__$1);
var G__21642 = null;
var G__21643 = (0);
var G__21644 = (0);
seq__21623 = G__21641;
chunk__21624 = G__21642;
count__21625 = G__21643;
i__21626 = G__21644;
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
var G__21645 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__21646 = (0);
return setTimeout(G__21645,G__21646);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__21647_21653 = elem;
var G__21648_21654 = cljs.core.cst$kw$focus;
var G__21649_21655 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21647_21653,G__21648_21654,G__21649_21655) : hoplon.core.do_BANG_.call(null,G__21647_21653,G__21648_21654,G__21649_21655));

var G__21650 = elem;
var G__21651 = cljs.core.cst$kw$select;
var G__21652 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21650,G__21651,G__21652) : hoplon.core.do_BANG_.call(null,G__21650,G__21651,G__21652));
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
return (function (){var G__21656 = this$__$1.target;
return jQuery(G__21656);
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
