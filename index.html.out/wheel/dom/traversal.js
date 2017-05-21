// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.dom.traversal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.jquery');
goog.require('wheel.dom.events');
goog.require('hoplon.core');
goog.require('cljs.test');
wheel.dom.traversal.is_QMARK_ = (function wheel$dom$traversal$is_QMARK_(el,sel){
return jQuery(el).is(sel);
});
wheel.dom.traversal.find = (function wheel$dom$traversal$find(el,sel){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(jQuery(el).find(sel));
});
wheel.dom.traversal.contains_QMARK_ = (function wheel$dom$traversal$contains_QMARK_(el,sel){
return !((wheel.dom.traversal.find(el,sel) == null));
});
wheel.dom.traversal.children = (function wheel$dom$traversal$children(el){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(jQuery(el).children());
});
wheel.dom.traversal.exists_QMARK_ = (function wheel$dom$traversal$exists_QMARK_(el,sel){
return ((0) < cljs.core.count(wheel.dom.traversal.find(el,sel)));
});
wheel.dom.traversal.contains_attrs_QMARK_ = (function wheel$dom$traversal$contains_attrs_QMARK_(el,attrs,vals){
var _PERCENT_ = ((!(cljs.core.coll_QMARK_(attrs)))?(function (){var G__17996 = el;
var G__17997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null);
var G__17998 = vals;
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__17996,G__17997,G__17998) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__17996,G__17997,G__17998));
})():((!(cljs.core.coll_QMARK_(vals)))?(function (){var G__17999 = el;
var G__18000 = attrs;
var G__18001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null);
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__17999,G__18000,G__18001) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__17999,G__18000,G__18001));
})():cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__8622__auto__ = (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__18002(s__18003){
return (new cljs.core.LazySeq(null,(function (){
var s__18003__$1 = s__18003;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__18003__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var attr = cljs.core.first(xs__7294__auto__);
var iterys__8618__auto__ = ((function (s__18003__$1,attr,xs__7294__auto__,temp__6738__auto__){
return (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__18002_$_iter__18004(s__18005){
return (new cljs.core.LazySeq(null,((function (s__18003__$1,attr,xs__7294__auto__,temp__6738__auto__){
return (function (){
var s__18005__$1 = s__18005;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__18005__$1);
if(temp__6738__auto____$1){
var s__18005__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18005__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__18005__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__18007 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__18006 = (0);
while(true){
if((i__18006 < size__8621__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__18006);
cljs.core.chunk_append(b__18007,!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('')) == null)));

var G__18013 = (i__18006 + (1));
i__18006 = G__18013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18007),wheel$dom$traversal$contains_attrs_QMARK__$_iter__18002_$_iter__18004(cljs.core.chunk_rest(s__18005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18007),null);
}
} else {
var val = cljs.core.first(s__18005__$2);
return cljs.core.cons(!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('')) == null)),wheel$dom$traversal$contains_attrs_QMARK__$_iter__18002_$_iter__18004(cljs.core.rest(s__18005__$2)));
}
} else {
return null;
}
break;
}
});})(s__18003__$1,attr,xs__7294__auto__,temp__6738__auto__))
,null,null));
});})(s__18003__$1,attr,xs__7294__auto__,temp__6738__auto__))
;
var fs__8619__auto__ = cljs.core.seq(iterys__8618__auto__(vals));
if(fs__8619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8619__auto__,wheel$dom$traversal$contains_attrs_QMARK__$_iter__18002(cljs.core.rest(s__18003__$1)));
} else {
var G__18014 = cljs.core.rest(s__18003__$1);
s__18003__$1 = G__18014;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8622__auto__(attrs);
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
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18015_SHARP_){
return wheel.dom.traversal.attr(p1__18015_SHARP_,attr_name);
}),wheel.dom.traversal.find(el,sel));
if(cljs.core.seq_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.text = (function wheel$dom$traversal$text(el){
return jQuery(el).text();
});
wheel.dom.traversal.find_text = (function wheel$dom$traversal$find_text(el,sel){
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
var args18016 = [];
var len__8981__auto___18020 = arguments.length;
var i__8982__auto___18021 = (0);
while(true){
if((i__8982__auto___18021 < len__8981__auto___18020)){
args18016.push((arguments[i__8982__auto___18021]));

var G__18022 = (i__8982__auto___18021 + (1));
i__8982__auto___18021 = G__18022;
continue;
} else {
}
break;
}

var G__18018 = args18016.length;
switch (G__18018) {
case 3:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18016.length)].join('')));

}
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,f,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4(el,"input",f,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,sel,f,v){
var target = (function (){var G__18019 = wheel.dom.traversal.find(jQuery(el),sel);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18019) : f.call(null,G__18019));
})();
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.traversal.input_val_BANG_(target,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$lang$maxFixedArity = 4;

wheel.dom.traversal.input_val_first_BANG_ = (function wheel$dom$traversal$input_val_first_BANG_(var_args){
var args18024 = [];
var len__8981__auto___18027 = arguments.length;
var i__8982__auto___18028 = (0);
while(true){
if((i__8982__auto___18028 < len__8981__auto___18027)){
args18024.push((arguments[i__8982__auto___18028]));

var G__18029 = (i__8982__auto___18028 + (1));
i__8982__auto___18028 = G__18029;
continue;
} else {
}
break;
}

var G__18026 = args18024.length;
switch (G__18026) {
case 2:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18024.length)].join('')));

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
var seq__18031 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar","bar baz"], null));
var chunk__18032 = null;
var count__18033 = (0);
var i__18034 = (0);
while(true){
if((i__18034 < count__18033)){
var v = chunk__18032.cljs$core$IIndexed$_nth$arity$2(null,i__18034);
try{var values__17649__auto___18049 = (function (){var x__8694__auto__ = (function (){var G__18039 = (function (){var G__18040 = cljs.core.cst$kw$data_DASH_foo;
var G__18041 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__18040,G__18041) : hoplon.core.div.call(null,G__18040,G__18041));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__18039) : hoplon.core.div.call(null,G__18039));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__8694__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__8694__auto__);
})();
var result__17650__auto___18050 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__17649__auto___18049);
if(cljs.core.truth_(result__17650__auto___18050)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__17649__auto___18049),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__17649__auto___18049);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e18035){var t__17687__auto___18051 = e18035;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__17687__auto___18051,cljs.core.cst$kw$message,null], null));
}
var G__18052 = seq__18031;
var G__18053 = chunk__18032;
var G__18054 = count__18033;
var G__18055 = (i__18034 + (1));
seq__18031 = G__18052;
chunk__18032 = G__18053;
count__18033 = G__18054;
i__18034 = G__18055;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__18031);
if(temp__6738__auto__){
var seq__18031__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18031__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__18031__$1);
var G__18056 = cljs.core.chunk_rest(seq__18031__$1);
var G__18057 = c__8671__auto__;
var G__18058 = cljs.core.count(c__8671__auto__);
var G__18059 = (0);
seq__18031 = G__18056;
chunk__18032 = G__18057;
count__18033 = G__18058;
i__18034 = G__18059;
continue;
} else {
var v = cljs.core.first(seq__18031__$1);
try{var values__17649__auto___18060 = (function (){var x__8694__auto__ = (function (){var G__18046 = (function (){var G__18047 = cljs.core.cst$kw$data_DASH_foo;
var G__18048 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__18047,G__18048) : hoplon.core.div.call(null,G__18047,G__18048));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__18046) : hoplon.core.div.call(null,G__18046));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__8694__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__8694__auto__);
})();
var result__17650__auto___18061 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__17649__auto___18060);
if(cljs.core.truth_(result__17650__auto___18061)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__17649__auto___18060),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__17649__auto___18060);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e18042){var t__17687__auto___18062 = e18042;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__17687__auto___18062,cljs.core.cst$kw$message,null], null));
}
var G__18063 = cljs.core.next(seq__18031__$1);
var G__18064 = null;
var G__18065 = (0);
var G__18066 = (0);
seq__18031 = G__18063;
chunk__18032 = G__18064;
count__18033 = G__18065;
i__18034 = G__18066;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_contains_DASH_attrs_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_contains_DASH_attrs_QMARK_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/1a37/9txbbm/index.html.out/wheel/dom/traversal.cljs",27,1,101,101,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_)?wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$test:null)]));
