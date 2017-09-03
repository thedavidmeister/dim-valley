// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args21531 = [];
var len__8981__auto___21550 = arguments.length;
var i__8982__auto___21551 = (0);
while(true){
if((i__8982__auto___21551 < len__8981__auto___21550)){
args21531.push((arguments[i__8982__auto___21551]));

var G__21552 = (i__8982__auto___21551 + (1));
i__8982__auto___21551 = G__21552;
continue;
} else {
}
break;
}

var G__21537 = args21531.length;
switch (G__21537) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21531.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21538 = cljs.core.seq(kvs);
var chunk__21540 = null;
var count__21541 = (0);
var i__21542 = (0);
while(true){
if((i__21542 < count__21541)){
var vec__21544 = chunk__21540.cljs$core$IIndexed$_nth$arity$2(null,i__21542);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21544,(1),null);
var k_21554__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21554__$1);
} else {
e.attr(k_21554__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21554__$1:v));
}

var G__21555 = seq__21538;
var G__21556 = chunk__21540;
var G__21557 = count__21541;
var G__21558 = (i__21542 + (1));
seq__21538 = G__21555;
chunk__21540 = G__21556;
count__21541 = G__21557;
i__21542 = G__21558;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21538);
if(temp__6738__auto__){
var seq__21538__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21538__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21538__$1);
var G__21559 = cljs.core.chunk_rest(seq__21538__$1);
var G__21560 = c__8671__auto__;
var G__21561 = cljs.core.count(c__8671__auto__);
var G__21562 = (0);
seq__21538 = G__21559;
chunk__21540 = G__21560;
count__21541 = G__21561;
i__21542 = G__21562;
continue;
} else {
var vec__21547 = cljs.core.first(seq__21538__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21547,(1),null);
var k_21563__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21563__$1);
} else {
e.attr(k_21563__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21563__$1:v));
}

var G__21564 = cljs.core.next(seq__21538__$1);
var G__21565 = null;
var G__21566 = (0);
var G__21567 = (0);
seq__21538 = G__21564;
chunk__21540 = G__21565;
count__21541 = G__21566;
i__21542 = G__21567;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq21532){
var G__21533 = cljs.core.first(seq21532);
var seq21532__$1 = cljs.core.next(seq21532);
var G__21534 = cljs.core.first(seq21532__$1);
var seq21532__$2 = cljs.core.next(seq21532__$1);
var G__21535 = cljs.core.first(seq21532__$2);
var seq21532__$3 = cljs.core.next(seq21532__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21533,G__21534,G__21535,seq21532__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args21568 = [];
var len__8981__auto___21585 = arguments.length;
var i__8982__auto___21586 = (0);
while(true){
if((i__8982__auto___21586 < len__8981__auto___21585)){
args21568.push((arguments[i__8982__auto___21586]));

var G__21587 = (i__8982__auto___21586 + (1));
i__8982__auto___21586 = G__21587;
continue;
} else {
}
break;
}

var G__21574 = args21568.length;
switch (G__21574) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21568.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21575 = cljs.core.seq(kvs);
var chunk__21576 = null;
var count__21577 = (0);
var i__21578 = (0);
while(true){
if((i__21578 < count__21577)){
var vec__21579 = chunk__21576.cljs$core$IIndexed$_nth$arity$2(null,i__21578);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21579,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21589 = seq__21575;
var G__21590 = chunk__21576;
var G__21591 = count__21577;
var G__21592 = (i__21578 + (1));
seq__21575 = G__21589;
chunk__21576 = G__21590;
count__21577 = G__21591;
i__21578 = G__21592;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21575);
if(temp__6738__auto__){
var seq__21575__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21575__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21575__$1);
var G__21593 = cljs.core.chunk_rest(seq__21575__$1);
var G__21594 = c__8671__auto__;
var G__21595 = cljs.core.count(c__8671__auto__);
var G__21596 = (0);
seq__21575 = G__21593;
chunk__21576 = G__21594;
count__21577 = G__21595;
i__21578 = G__21596;
continue;
} else {
var vec__21582 = cljs.core.first(seq__21575__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21582,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21582,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21597 = cljs.core.next(seq__21575__$1);
var G__21598 = null;
var G__21599 = (0);
var G__21600 = (0);
seq__21575 = G__21597;
chunk__21576 = G__21598;
count__21577 = G__21599;
i__21578 = G__21600;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq21569){
var G__21570 = cljs.core.first(seq21569);
var seq21569__$1 = cljs.core.next(seq21569);
var G__21571 = cljs.core.first(seq21569__$1);
var seq21569__$2 = cljs.core.next(seq21569__$1);
var G__21572 = cljs.core.first(seq21569__$2);
var seq21569__$3 = cljs.core.next(seq21569__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21570,G__21571,G__21572,seq21569__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args21601 = [];
var len__8981__auto___21604 = arguments.length;
var i__8982__auto___21605 = (0);
while(true){
if((i__8982__auto___21605 < len__8981__auto___21604)){
args21601.push((arguments[i__8982__auto___21605]));

var G__21606 = (i__8982__auto___21605 + (1));
i__8982__auto___21605 = G__21606;
continue;
} else {
}
break;
}

var G__21603 = args21601.length;
switch (G__21603) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21601.length)].join('')));

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
var args21608 = [];
var len__8981__auto___21611 = arguments.length;
var i__8982__auto___21612 = (0);
while(true){
if((i__8982__auto___21612 < len__8981__auto___21611)){
args21608.push((arguments[i__8982__auto___21612]));

var G__21613 = (i__8982__auto___21612 + (1));
i__8982__auto___21612 = G__21613;
continue;
} else {
}
break;
}

var G__21610 = args21608.length;
switch (G__21610) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21608.length)].join('')));

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
var G__21615 = elem;
var G__21616 = cljs.core.cst$kw$attr;
var G__21617 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21615,G__21616,G__21617) : hoplon.core.do_BANG_.call(null,G__21615,G__21616,G__21617));
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
var G__21618__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__21618 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__21619__i = 0, G__21619__a = new Array(arguments.length -  2);
while (G__21619__i < G__21619__a.length) {G__21619__a[G__21619__i] = arguments[G__21619__i + 2]; ++G__21619__i;}
  args = new cljs.core.IndexedSeq(G__21619__a,0);
} 
return G__21618__delegate.call(this,elem,_,args);};
G__21618.cljs$lang$maxFixedArity = 2;
G__21618.cljs$lang$applyTo = (function (arglist__21620){
var elem = cljs.core.first(arglist__21620);
arglist__21620 = cljs.core.next(arglist__21620);
var _ = cljs.core.first(arglist__21620);
var args = cljs.core.rest(arglist__21620);
return G__21618__delegate(elem,_,args);
});
G__21618.cljs$core$IFn$_invoke$arity$variadic = G__21618__delegate;
return G__21618;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__21621 = cljs.core.seq(clmap);
var chunk__21622 = null;
var count__21623 = (0);
var i__21624 = (0);
while(true){
if((i__21624 < count__21623)){
var vec__21625 = chunk__21622.cljs$core$IIndexed$_nth$arity$2(null,i__21624);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21625,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21625,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21631 = seq__21621;
var G__21632 = chunk__21622;
var G__21633 = count__21623;
var G__21634 = (i__21624 + (1));
seq__21621 = G__21631;
chunk__21622 = G__21632;
count__21623 = G__21633;
i__21624 = G__21634;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21621);
if(temp__6738__auto__){
var seq__21621__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21621__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21621__$1);
var G__21635 = cljs.core.chunk_rest(seq__21621__$1);
var G__21636 = c__8671__auto__;
var G__21637 = cljs.core.count(c__8671__auto__);
var G__21638 = (0);
seq__21621 = G__21635;
chunk__21622 = G__21636;
count__21623 = G__21637;
i__21624 = G__21638;
continue;
} else {
var vec__21628 = cljs.core.first(seq__21621__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21639 = cljs.core.next(seq__21621__$1);
var G__21640 = null;
var G__21641 = (0);
var G__21642 = (0);
seq__21621 = G__21639;
chunk__21622 = G__21640;
count__21623 = G__21641;
i__21624 = G__21642;
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
var G__21643 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__21644 = (0);
return setTimeout(G__21643,G__21644);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__21645_21651 = elem;
var G__21646_21652 = cljs.core.cst$kw$focus;
var G__21647_21653 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21645_21651,G__21646_21652,G__21647_21653) : hoplon.core.do_BANG_.call(null,G__21645_21651,G__21646_21652,G__21647_21653));

var G__21648 = elem;
var G__21649 = cljs.core.cst$kw$select;
var G__21650 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21648,G__21649,G__21650) : hoplon.core.do_BANG_.call(null,G__21648,G__21649,G__21650));
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
return (function (){var G__21654 = this$__$1.target;
return jQuery(G__21654);
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
