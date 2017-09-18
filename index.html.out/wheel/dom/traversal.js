// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.dom.traversal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.jquery');
goog.require('wheel.dom.events');
goog.require('goog.dom');
goog.require('oops.core');
goog.require('wheel.dom.data');
goog.require('hoplon.core');
goog.require('cljs.test');
wheel.dom.traversal.is_QMARK_ = (function wheel$dom$traversal$is_QMARK_(el,sel){
if(cljs.core.truth_(wheel.dom.data.el_QMARK_(el))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/el? el)"));
}

var possible_methods = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matches","matchesSelector","msMatchesSelector","mozMatchesSelector","webkitMatchesSelector","oMatchesSelector"], null);
var matches = cljs.core.some(((function (possible_methods){
return (function (p1__24677_SHARP_){
if(cljs.core.truth_((function (){var target_obj_24678 = el;
return oops.core.get_selector_dynamically(target_obj_24678,["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24677_SHARP_)].join(''));
})())){
return p1__24677_SHARP_;
} else {
return null;
}
});})(possible_methods))
,possible_methods);
var target_obj_24679 = el;
var call_info_24681 = oops.core.get_selector_call_info_dynamically(target_obj_24679,matches);
var fn_24680 = (call_info_24681[(1)]);
if(!((fn_24680 == null))){
return fn_24680.call((call_info_24681[(0)]),sel);
} else {
return null;
}
});
wheel.dom.traversal.find = (function wheel$dom$traversal$find(el,sel){
if(cljs.core.truth_(wheel.dom.data.el_QMARK_(el))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/el? el)"));
}

if(cljs.core.truth_(wheel.dom.data.sel_QMARK_(sel))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/sel? sel)"));
}

return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(el.querySelectorAll(sel));
});
wheel.dom.traversal.contains_QMARK_ = (function wheel$dom$traversal$contains_QMARK_(el,el_or_sel){
if(cljs.core.truth_(wheel.dom.data.el_QMARK_(el))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/el? el)"));
}

if(cljs.core.truth_(wheel.dom.data.el_or_sel_QMARK_(el_or_sel))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/el-or-sel? el-or-sel)"));
}

if(cljs.core.truth_(wheel.dom.data.el_QMARK_(el_or_sel))){
var and__8626__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,el_or_sel));
if(and__8626__auto__){
return goog.dom.contains(el,el_or_sel);
} else {
return and__8626__auto__;
}
} else {
return !((wheel.dom.traversal.find(el,el_or_sel) == null));
}
});
wheel.dom.traversal.children = (function wheel$dom$traversal$children(el){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(jQuery(el).children());
});
wheel.dom.traversal.exists_QMARK_ = (function wheel$dom$traversal$exists_QMARK_(el,sel){
return ((0) < cljs.core.count(wheel.dom.traversal.find(el,sel)));
});
wheel.dom.traversal.contains_attrs_QMARK_ = (function wheel$dom$traversal$contains_attrs_QMARK_(el,attrs,vals){
var _PERCENT_ = ((!(cljs.core.coll_QMARK_(attrs)))?(function (){var G__24682 = el;
var G__24683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null);
var G__24684 = vals;
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__24682,G__24683,G__24684) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__24682,G__24683,G__24684));
})():((!(cljs.core.coll_QMARK_(vals)))?(function (){var G__24685 = el;
var G__24686 = attrs;
var G__24687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null);
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__24685,G__24686,G__24687) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__24685,G__24686,G__24687));
})():cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__9520__auto__ = (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__24688(s__24689){
return (new cljs.core.LazySeq(null,(function (){
var s__24689__$1 = s__24689;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__24689__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var attr = cljs.core.first(xs__5843__auto__);
var iterys__9516__auto__ = ((function (s__24689__$1,attr,xs__5843__auto__,temp__5290__auto__){
return (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__24688_$_iter__24690(s__24691){
return (new cljs.core.LazySeq(null,((function (s__24689__$1,attr,xs__5843__auto__,temp__5290__auto__){
return (function (){
var s__24691__$1 = s__24691;
while(true){
var temp__5290__auto____$1 = cljs.core.seq(s__24691__$1);
if(temp__5290__auto____$1){
var s__24691__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24691__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__24691__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__24693 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__24692 = (0);
while(true){
if((i__24692 < size__9519__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__24692);
cljs.core.chunk_append(b__24693,!((wheel.dom.traversal.find(el,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),"\"]"].join('')) == null)));

var G__24694 = (i__24692 + (1));
i__24692 = G__24694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24693),wheel$dom$traversal$contains_attrs_QMARK__$_iter__24688_$_iter__24690(cljs.core.chunk_rest(s__24691__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24693),null);
}
} else {
var val = cljs.core.first(s__24691__$2);
return cljs.core.cons(!((wheel.dom.traversal.find(el,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),"\"]"].join('')) == null)),wheel$dom$traversal$contains_attrs_QMARK__$_iter__24688_$_iter__24690(cljs.core.rest(s__24691__$2)));
}
} else {
return null;
}
break;
}
});})(s__24689__$1,attr,xs__5843__auto__,temp__5290__auto__))
,null,null));
});})(s__24689__$1,attr,xs__5843__auto__,temp__5290__auto__))
;
var fs__9517__auto__ = cljs.core.seq(iterys__9516__auto__(vals));
if(fs__9517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9517__auto__,wheel$dom$traversal$contains_attrs_QMARK__$_iter__24688(cljs.core.rest(s__24689__$1)));
} else {
var G__24695 = cljs.core.rest(s__24689__$1);
s__24689__$1 = G__24695;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9520__auto__(attrs);
})())
));
if(cljs.core.boolean_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (boolean? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.attr = (function wheel$dom$traversal$attr(el,attr_name){
return jQuery(el).attr(attr_name);
});
wheel.dom.traversal.find_attr = (function wheel$dom$traversal$find_attr(el,sel,attr_name){
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24696_SHARP_){
return wheel.dom.traversal.attr(p1__24696_SHARP_,attr_name);
}),wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.text = (function wheel$dom$traversal$text(el){
if(cljs.core.truth_(wheel.dom.data.el_QMARK_(el))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/el? el)"));
}

return el.textContent;
});
wheel.dom.traversal.find_text = (function wheel$dom$traversal$find_text(el,sel){
if(cljs.core.truth_(wheel.dom.data.el_QMARK_(el))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/el? el)"));
}

if(cljs.core.truth_(wheel.dom.data.sel_QMARK_(sel))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/sel? sel)"));
}

var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.text,wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.val = (function wheel$dom$traversal$val(el){
return jQuery(el).val();
});
wheel.dom.traversal.find_val = (function wheel$dom$traversal$find_val(el,sel){
if(cljs.core.truth_(wheel.dom.data.el_QMARK_(el))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/el? el)"));
}

if(cljs.core.truth_(wheel.dom.data.sel_QMARK_(sel))){
} else {
throw (new Error("Assert failed: (wheel.dom.data/sel? sel)"));
}

var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.val,wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
/**
 * Sets the val of el to the given v, but also triggers input, which is often necessary for tests.
 */
wheel.dom.traversal.input_val_BANG_ = (function wheel$dom$traversal$input_val_BANG_(el,v){
return jQuery(el).val(v).trigger("input");
});
wheel.dom.traversal.find_fn_input_val_BANG_ = (function wheel$dom$traversal$find_fn_input_val_BANG_(var_args){
var G__24698 = arguments.length;
switch (G__24698) {
case 3:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,f,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4(el,"input",f,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,sel,f,v){
var target = (function (){var G__24699 = wheel.dom.traversal.find(el,sel);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24699) : f.call(null,G__24699));
})();
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.traversal.input_val_BANG_(target,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$lang$maxFixedArity = 4;

wheel.dom.traversal.input_val_first_BANG_ = (function wheel$dom$traversal$input_val_first_BANG_(var_args){
var G__24702 = arguments.length;
switch (G__24702) {
case 2:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3(el,cljs.core.first,v);
});

wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,sel,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4(el,sel,cljs.core.first,v);
});

wheel.dom.traversal.input_val_first_BANG_.cljs$lang$maxFixedArity = 3;

wheel.dom.traversal.css = (function wheel$dom$traversal$css(el,k){
return jQuery(el).css(k);
});
/**
 * Use jQuery to trigger the given event on the first match of sel
 */
wheel.dom.traversal.trigger_first_BANG_ = (function wheel$dom$traversal$trigger_first_BANG_(el,sel,e){
var target = cljs.core.first(wheel.dom.traversal.find(el,sel));
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2(target,e);
});
wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_ = (function wheel$dom$traversal$_QMARK__QMARK_contains_attrs_QMARK_(){
return cljs.test.test_var(wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$var);
});
wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$test = (function (){
var seq__24704 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar","bar baz"], null));
var chunk__24705 = null;
var count__24706 = (0);
var i__24707 = (0);
while(true){
if((i__24707 < count__24706)){
var v = chunk__24705.cljs$core$IIndexed$_nth$arity$2(null,i__24707);
try{var values__17761__auto___24722 = (function (){var x__9592__auto__ = (function (){var G__24712 = (function (){var G__24713 = cljs.core.cst$kw$data_DASH_foo;
var G__24714 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24713,G__24714) : hoplon.core.div.call(null,G__24713,G__24714));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24712) : hoplon.core.div.call(null,G__24712));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__9592__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__9592__auto__);
})();
var result__17762__auto___24723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__17761__auto___24722);
if(cljs.core.truth_(result__17762__auto___24723)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__17761__auto___24722),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__17761__auto___24722);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24708){var t__17806__auto___24724 = e24708;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__17806__auto___24724,cljs.core.cst$kw$message,null], null));
}
var G__24725 = seq__24704;
var G__24726 = chunk__24705;
var G__24727 = count__24706;
var G__24728 = (i__24707 + (1));
seq__24704 = G__24725;
chunk__24705 = G__24726;
count__24706 = G__24727;
i__24707 = G__24728;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__24704);
if(temp__5290__auto__){
var seq__24704__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24704__$1)){
var c__9569__auto__ = cljs.core.chunk_first(seq__24704__$1);
var G__24729 = cljs.core.chunk_rest(seq__24704__$1);
var G__24730 = c__9569__auto__;
var G__24731 = cljs.core.count(c__9569__auto__);
var G__24732 = (0);
seq__24704 = G__24729;
chunk__24705 = G__24730;
count__24706 = G__24731;
i__24707 = G__24732;
continue;
} else {
var v = cljs.core.first(seq__24704__$1);
try{var values__17761__auto___24733 = (function (){var x__9592__auto__ = (function (){var G__24719 = (function (){var G__24720 = cljs.core.cst$kw$data_DASH_foo;
var G__24721 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24720,G__24721) : hoplon.core.div.call(null,G__24720,G__24721));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24719) : hoplon.core.div.call(null,G__24719));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__9592__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__9592__auto__);
})();
var result__17762__auto___24734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__17761__auto___24733);
if(cljs.core.truth_(result__17762__auto___24734)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__17761__auto___24733),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__17761__auto___24733);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24715){var t__17806__auto___24735 = e24715;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__17806__auto___24735,cljs.core.cst$kw$message,null], null));
}
var G__24736 = cljs.core.next(seq__24704__$1);
var G__24737 = null;
var G__24738 = (0);
var G__24739 = (0);
seq__24704 = G__24736;
chunk__24705 = G__24737;
count__24706 = G__24738;
i__24707 = G__24739;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_contains_DASH_attrs_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_contains_DASH_attrs_QMARK_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/dom/traversal.cljs",27,1,124,124,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_)?wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$test:null)]));
wheel.dom.traversal._QMARK__QMARK_find_text = (function wheel$dom$traversal$_QMARK__QMARK_find_text(){
return cljs.test.test_var(wheel.dom.traversal._QMARK__QMARK_find_text.cljs$lang$var);
});
wheel.dom.traversal._QMARK__QMARK_find_text.cljs$lang$test = (function (){
var el = (function (){var G__24740 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("foo") : hoplon.core.span.call(null,"foo"));
var G__24741 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("bar") : hoplon.core.span.call(null,"bar"));
var G__24742 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("baz") : hoplon.core.p.call(null,"baz"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24740,G__24741,G__24742) : hoplon.core.div.call(null,G__24740,G__24741,G__24742));
})();
try{var values__17761__auto__ = (function (){var x__9592__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null);
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.dom.traversal.find_text(el,"span");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null),cljs.core.list(cljs.core.cst$sym$find_DASH_text,cljs.core.cst$sym$el,"span")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null),cljs.core.list(cljs.core.cst$sym$find_DASH_text,cljs.core.cst$sym$el,"span")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e24743){var t__17806__auto__ = e24743;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null),cljs.core.list(cljs.core.cst$sym$find_DASH_text,cljs.core.cst$sym$el,"span")),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.dom.traversal._QMARK__QMARK_find_text.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_find_text;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_find_DASH_text,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_find_DASH_text,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/dom/traversal.cljs",21,1,136,136,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_find_text)?wheel.dom.traversal._QMARK__QMARK_find_text.cljs$lang$test:null)]));
wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_ = (function wheel$dom$traversal$_QMARK__QMARK_input_val_first_BANG_(){
return cljs.test.test_var(wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_.cljs$lang$var);
});
wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_.cljs$lang$test = (function (){
var i1 = (hoplon.core.input.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$0() : hoplon.core.input.call(null));
var i2 = (hoplon.core.input.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$0() : hoplon.core.input.call(null));
var el = (hoplon.core.form.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$2(i1,i2) : hoplon.core.form.call(null,i1,i2));
try{var values__17761__auto___24746 = (function (){var x__9592__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.dom.traversal.find_val(el,"input");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto___24747 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___24746);
if(cljs.core.truth_(result__17762__auto___24747)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___24746),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___24746);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24744){var t__17806__auto___24748 = e24744;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,t__17806__auto___24748,cljs.core.cst$kw$message,null], null));
}
wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2(el,"foo");

try{var values__17761__auto__ = (function (){var x__9592__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo",""], null);
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.dom.traversal.find_val(el,"input");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e24745){var t__17806__auto__ = e24745;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_input_DASH_val_DASH_first_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_input_DASH_val_DASH_first_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/dom/traversal.cljs",28,1,144,144,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_)?wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_.cljs$lang$test:null)]));
