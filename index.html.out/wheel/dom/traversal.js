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
return (function (p1__20702_SHARP_){
if(cljs.core.truth_((function (){var target_obj_20703 = el;
return oops.core.get_selector_dynamically(target_obj_20703,["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20702_SHARP_)].join(''));
})())){
return p1__20702_SHARP_;
} else {
return null;
}
});})(possible_methods))
,possible_methods);
var target_obj_20704 = el;
var call_info_20706 = oops.core.get_selector_call_info_dynamically(target_obj_20704,matches);
var fn_20705 = (call_info_20706[(1)]);
if(!((fn_20705 == null))){
return fn_20705.call((call_info_20706[(0)]),sel);
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
var and__8228__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,el_or_sel));
if(and__8228__auto__){
return goog.dom.contains(el,el_or_sel);
} else {
return and__8228__auto__;
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
var _PERCENT_ = ((!(cljs.core.coll_QMARK_(attrs)))?(function (){var G__20707 = el;
var G__20708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null);
var G__20709 = vals;
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__20707,G__20708,G__20709) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__20707,G__20708,G__20709));
})():((!(cljs.core.coll_QMARK_(vals)))?(function (){var G__20710 = el;
var G__20711 = attrs;
var G__20712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null);
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__20710,G__20711,G__20712) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__20710,G__20711,G__20712));
})():cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__9122__auto__ = (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__20713(s__20714){
return (new cljs.core.LazySeq(null,(function (){
var s__20714__$1 = s__20714;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__20714__$1);
if(temp__5290__auto__){
var xs__5843__auto__ = temp__5290__auto__;
var attr = cljs.core.first(xs__5843__auto__);
var iterys__9118__auto__ = ((function (s__20714__$1,attr,xs__5843__auto__,temp__5290__auto__){
return (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__20713_$_iter__20715(s__20716){
return (new cljs.core.LazySeq(null,((function (s__20714__$1,attr,xs__5843__auto__,temp__5290__auto__){
return (function (){
var s__20716__$1 = s__20716;
while(true){
var temp__5290__auto____$1 = cljs.core.seq(s__20716__$1);
if(temp__5290__auto____$1){
var s__20716__$2 = temp__5290__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20716__$2)){
var c__9120__auto__ = cljs.core.chunk_first(s__20716__$2);
var size__9121__auto__ = cljs.core.count(c__9120__auto__);
var b__20718 = cljs.core.chunk_buffer(size__9121__auto__);
if((function (){var i__20717 = (0);
while(true){
if((i__20717 < size__9121__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9120__auto__,i__20717);
cljs.core.chunk_append(b__20718,!((wheel.dom.traversal.find(el,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),"\"]"].join('')) == null)));

var G__20719 = (i__20717 + (1));
i__20717 = G__20719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20718),wheel$dom$traversal$contains_attrs_QMARK__$_iter__20713_$_iter__20715(cljs.core.chunk_rest(s__20716__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20718),null);
}
} else {
var val = cljs.core.first(s__20716__$2);
return cljs.core.cons(!((wheel.dom.traversal.find(el,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),"\"]"].join('')) == null)),wheel$dom$traversal$contains_attrs_QMARK__$_iter__20713_$_iter__20715(cljs.core.rest(s__20716__$2)));
}
} else {
return null;
}
break;
}
});})(s__20714__$1,attr,xs__5843__auto__,temp__5290__auto__))
,null,null));
});})(s__20714__$1,attr,xs__5843__auto__,temp__5290__auto__))
;
var fs__9119__auto__ = cljs.core.seq(iterys__9118__auto__(vals));
if(fs__9119__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9119__auto__,wheel$dom$traversal$contains_attrs_QMARK__$_iter__20713(cljs.core.rest(s__20714__$1)));
} else {
var G__20720 = cljs.core.rest(s__20714__$1);
s__20714__$1 = G__20720;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9122__auto__(attrs);
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
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20721_SHARP_){
return wheel.dom.traversal.attr(p1__20721_SHARP_,attr_name);
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
var G__20723 = arguments.length;
switch (G__20723) {
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
var target = (function (){var G__20724 = wheel.dom.traversal.find(el,sel);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20724) : f.call(null,G__20724));
})();
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.traversal.input_val_BANG_(target,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$lang$maxFixedArity = 4;

wheel.dom.traversal.input_val_first_BANG_ = (function wheel$dom$traversal$input_val_first_BANG_(var_args){
var G__20727 = arguments.length;
switch (G__20727) {
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
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Cannot find target ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)," to trigger ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')),"\n","target"].join('')));
}

return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2(target,e);
});
wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_ = (function wheel$dom$traversal$_QMARK__QMARK_contains_attrs_QMARK_(){
return cljs.test.test_var(wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$var);
});
wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$test = (function (){
var seq__20729 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar","bar baz"], null));
var chunk__20730 = null;
var count__20731 = (0);
var i__20732 = (0);
while(true){
if((i__20732 < count__20731)){
var v = chunk__20730.cljs$core$IIndexed$_nth$arity$2(null,i__20732);
try{var values__17363__auto___20747 = (function (){var x__9194__auto__ = (function (){var G__20737 = (function (){var G__20738 = cljs.core.cst$kw$data_DASH_foo;
var G__20739 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20738,G__20739) : hoplon.core.div.call(null,G__20738,G__20739));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__20737) : hoplon.core.div.call(null,G__20737));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__9194__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__9194__auto__);
})();
var result__17364__auto___20748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__17363__auto___20747);
if(cljs.core.truth_(result__17364__auto___20748)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__17363__auto___20747),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__17363__auto___20747);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20733){var t__17408__auto___20749 = e20733;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__17408__auto___20749,cljs.core.cst$kw$message,null], null));
}
var G__20750 = seq__20729;
var G__20751 = chunk__20730;
var G__20752 = count__20731;
var G__20753 = (i__20732 + (1));
seq__20729 = G__20750;
chunk__20730 = G__20751;
count__20731 = G__20752;
i__20732 = G__20753;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__20729);
if(temp__5290__auto__){
var seq__20729__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20729__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__20729__$1);
var G__20754 = cljs.core.chunk_rest(seq__20729__$1);
var G__20755 = c__9171__auto__;
var G__20756 = cljs.core.count(c__9171__auto__);
var G__20757 = (0);
seq__20729 = G__20754;
chunk__20730 = G__20755;
count__20731 = G__20756;
i__20732 = G__20757;
continue;
} else {
var v = cljs.core.first(seq__20729__$1);
try{var values__17363__auto___20758 = (function (){var x__9194__auto__ = (function (){var G__20744 = (function (){var G__20745 = cljs.core.cst$kw$data_DASH_foo;
var G__20746 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20745,G__20746) : hoplon.core.div.call(null,G__20745,G__20746));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__20744) : hoplon.core.div.call(null,G__20744));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__9194__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__9194__auto__);
})();
var result__17364__auto___20759 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__17363__auto___20758);
if(cljs.core.truth_(result__17364__auto___20759)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__17363__auto___20758),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__17363__auto___20758);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20740){var t__17408__auto___20760 = e20740;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__17408__auto___20760,cljs.core.cst$kw$message,null], null));
}
var G__20761 = cljs.core.next(seq__20729__$1);
var G__20762 = null;
var G__20763 = (0);
var G__20764 = (0);
seq__20729 = G__20761;
chunk__20730 = G__20762;
count__20731 = G__20763;
i__20732 = G__20764;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_contains_DASH_attrs_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_contains_DASH_attrs_QMARK_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/trb/ari3q5/index.html.out/wheel/dom/traversal.cljs",27,1,124,124,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_)?wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$test:null)]));
wheel.dom.traversal._QMARK__QMARK_find_text = (function wheel$dom$traversal$_QMARK__QMARK_find_text(){
return cljs.test.test_var(wheel.dom.traversal._QMARK__QMARK_find_text.cljs$lang$var);
});
wheel.dom.traversal._QMARK__QMARK_find_text.cljs$lang$test = (function (){
var el = (function (){var G__20765 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("foo") : hoplon.core.span.call(null,"foo"));
var G__20766 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1("bar") : hoplon.core.span.call(null,"bar"));
var G__20767 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("baz") : hoplon.core.p.call(null,"baz"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20765,G__20766,G__20767) : hoplon.core.div.call(null,G__20765,G__20766,G__20767));
})();
try{var values__17363__auto__ = (function (){var x__9194__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.find_text(el,"span");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null),cljs.core.list(cljs.core.cst$sym$find_DASH_text,cljs.core.cst$sym$el,"span")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null),cljs.core.list(cljs.core.cst$sym$find_DASH_text,cljs.core.cst$sym$el,"span")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e20768){var t__17408__auto__ = e20768;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null),cljs.core.list(cljs.core.cst$sym$find_DASH_text,cljs.core.cst$sym$el,"span")),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.dom.traversal._QMARK__QMARK_find_text.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_find_text;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_find_DASH_text,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_find_DASH_text,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/trb/ari3q5/index.html.out/wheel/dom/traversal.cljs",21,1,136,136,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_find_text)?wheel.dom.traversal._QMARK__QMARK_find_text.cljs$lang$test:null)]));
wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_ = (function wheel$dom$traversal$_QMARK__QMARK_input_val_first_BANG_(){
return cljs.test.test_var(wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_.cljs$lang$var);
});
wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_.cljs$lang$test = (function (){
var i1 = (hoplon.core.input.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$0() : hoplon.core.input.call(null));
var i2 = (hoplon.core.input.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$0() : hoplon.core.input.call(null));
var el = (hoplon.core.form.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.form.cljs$core$IFn$_invoke$arity$2(i1,i2) : hoplon.core.form.call(null,i1,i2));
try{var values__17363__auto___20771 = (function (){var x__9194__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.find_val(el,"input");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___20772 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___20771);
if(cljs.core.truth_(result__17364__auto___20772)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___20771),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___20771);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20769){var t__17408__auto___20773 = e20769;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,t__17408__auto___20773,cljs.core.cst$kw$message,null], null));
}
wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2(el,"foo");

try{var values__17363__auto__ = (function (){var x__9194__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo",""], null);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.find_val(el,"input");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e20770){var t__17408__auto__ = e20770;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo",""], null),cljs.core.list(cljs.core.cst$sym$find_DASH_val,cljs.core.cst$sym$el,"input")),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_input_DASH_val_DASH_first_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_input_DASH_val_DASH_first_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/trb/ari3q5/index.html.out/wheel/dom/traversal.cljs",28,1,144,144,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_)?wheel.dom.traversal._QMARK__QMARK_input_val_first_BANG_.cljs$lang$test:null)]));
