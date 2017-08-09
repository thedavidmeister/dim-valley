// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args21564 = [];
var len__8981__auto___21583 = arguments.length;
var i__8982__auto___21584 = (0);
while(true){
if((i__8982__auto___21584 < len__8981__auto___21583)){
args21564.push((arguments[i__8982__auto___21584]));

var G__21585 = (i__8982__auto___21584 + (1));
i__8982__auto___21584 = G__21585;
continue;
} else {
}
break;
}

var G__21570 = args21564.length;
switch (G__21570) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21564.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21571 = cljs.core.seq(kvs);
var chunk__21573 = null;
var count__21574 = (0);
var i__21575 = (0);
while(true){
if((i__21575 < count__21574)){
var vec__21577 = chunk__21573.cljs$core$IIndexed$_nth$arity$2(null,i__21575);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21577,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21577,(1),null);
var k_21587__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21587__$1);
} else {
e.attr(k_21587__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21587__$1:v));
}

var G__21588 = seq__21571;
var G__21589 = chunk__21573;
var G__21590 = count__21574;
var G__21591 = (i__21575 + (1));
seq__21571 = G__21588;
chunk__21573 = G__21589;
count__21574 = G__21590;
i__21575 = G__21591;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21571);
if(temp__6738__auto__){
var seq__21571__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21571__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21571__$1);
var G__21592 = cljs.core.chunk_rest(seq__21571__$1);
var G__21593 = c__8671__auto__;
var G__21594 = cljs.core.count(c__8671__auto__);
var G__21595 = (0);
seq__21571 = G__21592;
chunk__21573 = G__21593;
count__21574 = G__21594;
i__21575 = G__21595;
continue;
} else {
var vec__21580 = cljs.core.first(seq__21571__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21580,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21580,(1),null);
var k_21596__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21596__$1);
} else {
e.attr(k_21596__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21596__$1:v));
}

var G__21597 = cljs.core.next(seq__21571__$1);
var G__21598 = null;
var G__21599 = (0);
var G__21600 = (0);
seq__21571 = G__21597;
chunk__21573 = G__21598;
count__21574 = G__21599;
i__21575 = G__21600;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq21565){
var G__21566 = cljs.core.first(seq21565);
var seq21565__$1 = cljs.core.next(seq21565);
var G__21567 = cljs.core.first(seq21565__$1);
var seq21565__$2 = cljs.core.next(seq21565__$1);
var G__21568 = cljs.core.first(seq21565__$2);
var seq21565__$3 = cljs.core.next(seq21565__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21566,G__21567,G__21568,seq21565__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args21601 = [];
var len__8981__auto___21618 = arguments.length;
var i__8982__auto___21619 = (0);
while(true){
if((i__8982__auto___21619 < len__8981__auto___21618)){
args21601.push((arguments[i__8982__auto___21619]));

var G__21620 = (i__8982__auto___21619 + (1));
i__8982__auto___21619 = G__21620;
continue;
} else {
}
break;
}

var G__21607 = args21601.length;
switch (G__21607) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21601.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21608 = cljs.core.seq(kvs);
var chunk__21609 = null;
var count__21610 = (0);
var i__21611 = (0);
while(true){
if((i__21611 < count__21610)){
var vec__21612 = chunk__21609.cljs$core$IIndexed$_nth$arity$2(null,i__21611);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21612,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21622 = seq__21608;
var G__21623 = chunk__21609;
var G__21624 = count__21610;
var G__21625 = (i__21611 + (1));
seq__21608 = G__21622;
chunk__21609 = G__21623;
count__21610 = G__21624;
i__21611 = G__21625;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21608);
if(temp__6738__auto__){
var seq__21608__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21608__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21608__$1);
var G__21626 = cljs.core.chunk_rest(seq__21608__$1);
var G__21627 = c__8671__auto__;
var G__21628 = cljs.core.count(c__8671__auto__);
var G__21629 = (0);
seq__21608 = G__21626;
chunk__21609 = G__21627;
count__21610 = G__21628;
i__21611 = G__21629;
continue;
} else {
var vec__21615 = cljs.core.first(seq__21608__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21615,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21630 = cljs.core.next(seq__21608__$1);
var G__21631 = null;
var G__21632 = (0);
var G__21633 = (0);
seq__21608 = G__21630;
chunk__21609 = G__21631;
count__21610 = G__21632;
i__21611 = G__21633;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq21602){
var G__21603 = cljs.core.first(seq21602);
var seq21602__$1 = cljs.core.next(seq21602);
var G__21604 = cljs.core.first(seq21602__$1);
var seq21602__$2 = cljs.core.next(seq21602__$1);
var G__21605 = cljs.core.first(seq21602__$2);
var seq21602__$3 = cljs.core.next(seq21602__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21603,G__21604,G__21605,seq21602__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args21634 = [];
var len__8981__auto___21637 = arguments.length;
var i__8982__auto___21638 = (0);
while(true){
if((i__8982__auto___21638 < len__8981__auto___21637)){
args21634.push((arguments[i__8982__auto___21638]));

var G__21639 = (i__8982__auto___21638 + (1));
i__8982__auto___21638 = G__21639;
continue;
} else {
}
break;
}

var G__21636 = args21634.length;
switch (G__21636) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21634.length)].join('')));

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
var args21641 = [];
var len__8981__auto___21644 = arguments.length;
var i__8982__auto___21645 = (0);
while(true){
if((i__8982__auto___21645 < len__8981__auto___21644)){
args21641.push((arguments[i__8982__auto___21645]));

var G__21646 = (i__8982__auto___21645 + (1));
i__8982__auto___21645 = G__21646;
continue;
} else {
}
break;
}

var G__21643 = args21641.length;
switch (G__21643) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21641.length)].join('')));

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
var G__21648 = elem;
var G__21649 = cljs.core.cst$kw$attr;
var G__21650 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21648,G__21649,G__21650) : hoplon.core.do_BANG_.call(null,G__21648,G__21649,G__21650));
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
var G__21651__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__21651 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__21652__i = 0, G__21652__a = new Array(arguments.length -  2);
while (G__21652__i < G__21652__a.length) {G__21652__a[G__21652__i] = arguments[G__21652__i + 2]; ++G__21652__i;}
  args = new cljs.core.IndexedSeq(G__21652__a,0);
} 
return G__21651__delegate.call(this,elem,_,args);};
G__21651.cljs$lang$maxFixedArity = 2;
G__21651.cljs$lang$applyTo = (function (arglist__21653){
var elem = cljs.core.first(arglist__21653);
arglist__21653 = cljs.core.next(arglist__21653);
var _ = cljs.core.first(arglist__21653);
var args = cljs.core.rest(arglist__21653);
return G__21651__delegate(elem,_,args);
});
G__21651.cljs$core$IFn$_invoke$arity$variadic = G__21651__delegate;
return G__21651;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__21654 = cljs.core.seq(clmap);
var chunk__21655 = null;
var count__21656 = (0);
var i__21657 = (0);
while(true){
if((i__21657 < count__21656)){
var vec__21658 = chunk__21655.cljs$core$IIndexed$_nth$arity$2(null,i__21657);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21658,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21658,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21664 = seq__21654;
var G__21665 = chunk__21655;
var G__21666 = count__21656;
var G__21667 = (i__21657 + (1));
seq__21654 = G__21664;
chunk__21655 = G__21665;
count__21656 = G__21666;
i__21657 = G__21667;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21654);
if(temp__6738__auto__){
var seq__21654__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21654__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21654__$1);
var G__21668 = cljs.core.chunk_rest(seq__21654__$1);
var G__21669 = c__8671__auto__;
var G__21670 = cljs.core.count(c__8671__auto__);
var G__21671 = (0);
seq__21654 = G__21668;
chunk__21655 = G__21669;
count__21656 = G__21670;
i__21657 = G__21671;
continue;
} else {
var vec__21661 = cljs.core.first(seq__21654__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21661,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21661,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21672 = cljs.core.next(seq__21654__$1);
var G__21673 = null;
var G__21674 = (0);
var G__21675 = (0);
seq__21654 = G__21672;
chunk__21655 = G__21673;
count__21656 = G__21674;
i__21657 = G__21675;
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
var G__21676 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__21677 = (0);
return setTimeout(G__21676,G__21677);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__21678_21684 = elem;
var G__21679_21685 = cljs.core.cst$kw$focus;
var G__21680_21686 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21678_21684,G__21679_21685,G__21680_21686) : hoplon.core.do_BANG_.call(null,G__21678_21684,G__21679_21685,G__21680_21686));

var G__21681 = elem;
var G__21682 = cljs.core.cst$kw$select;
var G__21683 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21681,G__21682,G__21683) : hoplon.core.do_BANG_.call(null,G__21681,G__21682,G__21683));
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
return (function (){var G__21687 = this$__$1.target;
return jQuery(G__21687);
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
