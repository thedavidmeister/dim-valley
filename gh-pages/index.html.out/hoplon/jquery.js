// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args21647 = [];
var len__8981__auto___21666 = arguments.length;
var i__8982__auto___21667 = (0);
while(true){
if((i__8982__auto___21667 < len__8981__auto___21666)){
args21647.push((arguments[i__8982__auto___21667]));

var G__21668 = (i__8982__auto___21667 + (1));
i__8982__auto___21667 = G__21668;
continue;
} else {
}
break;
}

var G__21653 = args21647.length;
switch (G__21653) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21647.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21654 = cljs.core.seq(kvs);
var chunk__21656 = null;
var count__21657 = (0);
var i__21658 = (0);
while(true){
if((i__21658 < count__21657)){
var vec__21660 = chunk__21656.cljs$core$IIndexed$_nth$arity$2(null,i__21658);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21660,(1),null);
var k_21670__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21670__$1);
} else {
e.attr(k_21670__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21670__$1:v));
}

var G__21671 = seq__21654;
var G__21672 = chunk__21656;
var G__21673 = count__21657;
var G__21674 = (i__21658 + (1));
seq__21654 = G__21671;
chunk__21656 = G__21672;
count__21657 = G__21673;
i__21658 = G__21674;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21654);
if(temp__6738__auto__){
var seq__21654__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21654__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21654__$1);
var G__21675 = cljs.core.chunk_rest(seq__21654__$1);
var G__21676 = c__8671__auto__;
var G__21677 = cljs.core.count(c__8671__auto__);
var G__21678 = (0);
seq__21654 = G__21675;
chunk__21656 = G__21676;
count__21657 = G__21677;
i__21658 = G__21678;
continue;
} else {
var vec__21663 = cljs.core.first(seq__21654__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21663,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21663,(1),null);
var k_21679__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_21679__$1);
} else {
e.attr(k_21679__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_21679__$1:v));
}

var G__21680 = cljs.core.next(seq__21654__$1);
var G__21681 = null;
var G__21682 = (0);
var G__21683 = (0);
seq__21654 = G__21680;
chunk__21656 = G__21681;
count__21657 = G__21682;
i__21658 = G__21683;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq21648){
var G__21649 = cljs.core.first(seq21648);
var seq21648__$1 = cljs.core.next(seq21648);
var G__21650 = cljs.core.first(seq21648__$1);
var seq21648__$2 = cljs.core.next(seq21648__$1);
var G__21651 = cljs.core.first(seq21648__$2);
var seq21648__$3 = cljs.core.next(seq21648__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21649,G__21650,G__21651,seq21648__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args21684 = [];
var len__8981__auto___21701 = arguments.length;
var i__8982__auto___21702 = (0);
while(true){
if((i__8982__auto___21702 < len__8981__auto___21701)){
args21684.push((arguments[i__8982__auto___21702]));

var G__21703 = (i__8982__auto___21702 + (1));
i__8982__auto___21702 = G__21703;
continue;
} else {
}
break;
}

var G__21690 = args21684.length;
switch (G__21690) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args21684.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__21691 = cljs.core.seq(kvs);
var chunk__21692 = null;
var count__21693 = (0);
var i__21694 = (0);
while(true){
if((i__21694 < count__21693)){
var vec__21695 = chunk__21692.cljs$core$IIndexed$_nth$arity$2(null,i__21694);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21695,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21695,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21705 = seq__21691;
var G__21706 = chunk__21692;
var G__21707 = count__21693;
var G__21708 = (i__21694 + (1));
seq__21691 = G__21705;
chunk__21692 = G__21706;
count__21693 = G__21707;
i__21694 = G__21708;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21691);
if(temp__6738__auto__){
var seq__21691__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21691__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21691__$1);
var G__21709 = cljs.core.chunk_rest(seq__21691__$1);
var G__21710 = c__8671__auto__;
var G__21711 = cljs.core.count(c__8671__auto__);
var G__21712 = (0);
seq__21691 = G__21709;
chunk__21692 = G__21710;
count__21693 = G__21711;
i__21694 = G__21712;
continue;
} else {
var vec__21698 = cljs.core.first(seq__21691__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21698,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21698,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__21713 = cljs.core.next(seq__21691__$1);
var G__21714 = null;
var G__21715 = (0);
var G__21716 = (0);
seq__21691 = G__21713;
chunk__21692 = G__21714;
count__21693 = G__21715;
i__21694 = G__21716;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq21685){
var G__21686 = cljs.core.first(seq21685);
var seq21685__$1 = cljs.core.next(seq21685);
var G__21687 = cljs.core.first(seq21685__$1);
var seq21685__$2 = cljs.core.next(seq21685__$1);
var G__21688 = cljs.core.first(seq21685__$2);
var seq21685__$3 = cljs.core.next(seq21685__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21686,G__21687,G__21688,seq21685__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args21717 = [];
var len__8981__auto___21720 = arguments.length;
var i__8982__auto___21721 = (0);
while(true){
if((i__8982__auto___21721 < len__8981__auto___21720)){
args21717.push((arguments[i__8982__auto___21721]));

var G__21722 = (i__8982__auto___21721 + (1));
i__8982__auto___21721 = G__21722;
continue;
} else {
}
break;
}

var G__21719 = args21717.length;
switch (G__21719) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21717.length)].join('')));

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
var args21724 = [];
var len__8981__auto___21727 = arguments.length;
var i__8982__auto___21728 = (0);
while(true){
if((i__8982__auto___21728 < len__8981__auto___21727)){
args21724.push((arguments[i__8982__auto___21728]));

var G__21729 = (i__8982__auto___21728 + (1));
i__8982__auto___21728 = G__21729;
continue;
} else {
}
break;
}

var G__21726 = args21724.length;
switch (G__21726) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21724.length)].join('')));

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
var G__21731 = elem;
var G__21732 = cljs.core.cst$kw$attr;
var G__21733 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21731,G__21732,G__21733) : hoplon.core.do_BANG_.call(null,G__21731,G__21732,G__21733));
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
var G__21734__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__21734 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__21735__i = 0, G__21735__a = new Array(arguments.length -  2);
while (G__21735__i < G__21735__a.length) {G__21735__a[G__21735__i] = arguments[G__21735__i + 2]; ++G__21735__i;}
  args = new cljs.core.IndexedSeq(G__21735__a,0);
} 
return G__21734__delegate.call(this,elem,_,args);};
G__21734.cljs$lang$maxFixedArity = 2;
G__21734.cljs$lang$applyTo = (function (arglist__21736){
var elem = cljs.core.first(arglist__21736);
arglist__21736 = cljs.core.next(arglist__21736);
var _ = cljs.core.first(arglist__21736);
var args = cljs.core.rest(arglist__21736);
return G__21734__delegate(elem,_,args);
});
G__21734.cljs$core$IFn$_invoke$arity$variadic = G__21734__delegate;
return G__21734;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__21737 = cljs.core.seq(clmap);
var chunk__21738 = null;
var count__21739 = (0);
var i__21740 = (0);
while(true){
if((i__21740 < count__21739)){
var vec__21741 = chunk__21738.cljs$core$IIndexed$_nth$arity$2(null,i__21740);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21747 = seq__21737;
var G__21748 = chunk__21738;
var G__21749 = count__21739;
var G__21750 = (i__21740 + (1));
seq__21737 = G__21747;
chunk__21738 = G__21748;
count__21739 = G__21749;
i__21740 = G__21750;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21737);
if(temp__6738__auto__){
var seq__21737__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21737__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21737__$1);
var G__21751 = cljs.core.chunk_rest(seq__21737__$1);
var G__21752 = c__8671__auto__;
var G__21753 = cljs.core.count(c__8671__auto__);
var G__21754 = (0);
seq__21737 = G__21751;
chunk__21738 = G__21752;
count__21739 = G__21753;
i__21740 = G__21754;
continue;
} else {
var vec__21744 = cljs.core.first(seq__21737__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21744,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21744,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__21755 = cljs.core.next(seq__21737__$1);
var G__21756 = null;
var G__21757 = (0);
var G__21758 = (0);
seq__21737 = G__21755;
chunk__21738 = G__21756;
count__21739 = G__21757;
i__21740 = G__21758;
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
var G__21759 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__21760 = (0);
return setTimeout(G__21759,G__21760);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__21761_21767 = elem;
var G__21762_21768 = cljs.core.cst$kw$focus;
var G__21763_21769 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21761_21767,G__21762_21768,G__21763_21769) : hoplon.core.do_BANG_.call(null,G__21761_21767,G__21762_21768,G__21763_21769));

var G__21764 = elem;
var G__21765 = cljs.core.cst$kw$select;
var G__21766 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__21764,G__21765,G__21766) : hoplon.core.do_BANG_.call(null,G__21764,G__21765,G__21766));
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
return (function (){var G__21770 = this$__$1.target;
return jQuery(G__21770);
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
