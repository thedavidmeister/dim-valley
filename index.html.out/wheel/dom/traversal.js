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
var _PERCENT_ = ((!(cljs.core.coll_QMARK_(attrs)))?(function (){var G__23328 = el;
var G__23329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null);
var G__23330 = vals;
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__23328,G__23329,G__23330) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__23328,G__23329,G__23330));
})():((!(cljs.core.coll_QMARK_(vals)))?(function (){var G__23331 = el;
var G__23332 = attrs;
var G__23333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null);
return (wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 ? wheel.dom.traversal.contains_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(G__23331,G__23332,G__23333) : wheel.dom.traversal.contains_attrs_QMARK_.call(null,G__23331,G__23332,G__23333));
})():cljs.core.every_QMARK_(cljs.core.true_QMARK_,(function (){var iter__8622__auto__ = (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__23334(s__23335){
return (new cljs.core.LazySeq(null,(function (){
var s__23335__$1 = s__23335;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__23335__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var attr = cljs.core.first(xs__7294__auto__);
var iterys__8618__auto__ = ((function (s__23335__$1,attr,xs__7294__auto__,temp__6738__auto__){
return (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__23334_$_iter__23336(s__23337){
return (new cljs.core.LazySeq(null,((function (s__23335__$1,attr,xs__7294__auto__,temp__6738__auto__){
return (function (){
var s__23337__$1 = s__23337;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__23337__$1);
if(temp__6738__auto____$1){
var s__23337__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23337__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__23337__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__23339 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__23338 = (0);
while(true){
if((i__23338 < size__8621__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__23338);
cljs.core.chunk_append(b__23339,!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('')) == null)));

var G__23345 = (i__23338 + (1));
i__23338 = G__23345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23339),wheel$dom$traversal$contains_attrs_QMARK__$_iter__23334_$_iter__23336(cljs.core.chunk_rest(s__23337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23339),null);
}
} else {
var val = cljs.core.first(s__23337__$2);
return cljs.core.cons(!((wheel.dom.traversal.find(el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('')) == null)),wheel$dom$traversal$contains_attrs_QMARK__$_iter__23334_$_iter__23336(cljs.core.rest(s__23337__$2)));
}
} else {
return null;
}
break;
}
});})(s__23335__$1,attr,xs__7294__auto__,temp__6738__auto__))
,null,null));
});})(s__23335__$1,attr,xs__7294__auto__,temp__6738__auto__))
;
var fs__8619__auto__ = cljs.core.seq(iterys__8618__auto__(vals));
if(fs__8619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8619__auto__,wheel$dom$traversal$contains_attrs_QMARK__$_iter__23334(cljs.core.rest(s__23335__$1)));
} else {
var G__23346 = cljs.core.rest(s__23335__$1);
s__23335__$1 = G__23346;
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
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23347_SHARP_){
return wheel.dom.traversal.attr(p1__23347_SHARP_,attr_name);
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
var args23348 = [];
var len__8981__auto___23352 = arguments.length;
var i__8982__auto___23353 = (0);
while(true){
if((i__8982__auto___23353 < len__8981__auto___23352)){
args23348.push((arguments[i__8982__auto___23353]));

var G__23354 = (i__8982__auto___23353 + (1));
i__8982__auto___23353 = G__23354;
continue;
} else {
}
break;
}

var G__23350 = args23348.length;
switch (G__23350) {
case 3:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23348.length)].join('')));

}
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,f,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4(el,"input",f,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,sel,f,v){
var target = (function (){var G__23351 = wheel.dom.traversal.find(jQuery(el),sel);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23351) : f.call(null,G__23351));
})();
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.traversal.input_val_BANG_(target,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$lang$maxFixedArity = 4;

wheel.dom.traversal.input_val_first_BANG_ = (function wheel$dom$traversal$input_val_first_BANG_(var_args){
var args23356 = [];
var len__8981__auto___23359 = arguments.length;
var i__8982__auto___23360 = (0);
while(true){
if((i__8982__auto___23360 < len__8981__auto___23359)){
args23356.push((arguments[i__8982__auto___23360]));

var G__23361 = (i__8982__auto___23360 + (1));
i__8982__auto___23360 = G__23361;
continue;
} else {
}
break;
}

var G__23358 = args23356.length;
switch (G__23358) {
case 2:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23356.length)].join('')));

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
var seq__23363 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar","bar baz"], null));
var chunk__23364 = null;
var count__23365 = (0);
var i__23366 = (0);
while(true){
if((i__23366 < count__23365)){
var v = chunk__23364.cljs$core$IIndexed$_nth$arity$2(null,i__23366);
try{var values__20326__auto___23381 = (function (){var x__8694__auto__ = (function (){var G__23371 = (function (){var G__23372 = cljs.core.cst$kw$data_DASH_foo;
var G__23373 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23372,G__23373) : hoplon.core.div.call(null,G__23372,G__23373));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__23371) : hoplon.core.div.call(null,G__23371));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__8694__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__8694__auto__);
})();
var result__20327__auto___23382 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__20326__auto___23381);
if(cljs.core.truth_(result__20327__auto___23382)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__20326__auto___23381),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__20326__auto___23381);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23367){var t__20364__auto___23383 = e23367;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__20364__auto___23383,cljs.core.cst$kw$message,null], null));
}
var G__23384 = seq__23363;
var G__23385 = chunk__23364;
var G__23386 = count__23365;
var G__23387 = (i__23366 + (1));
seq__23363 = G__23384;
chunk__23364 = G__23385;
count__23365 = G__23386;
i__23366 = G__23387;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__23363);
if(temp__6738__auto__){
var seq__23363__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23363__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__23363__$1);
var G__23388 = cljs.core.chunk_rest(seq__23363__$1);
var G__23389 = c__8671__auto__;
var G__23390 = cljs.core.count(c__8671__auto__);
var G__23391 = (0);
seq__23363 = G__23388;
chunk__23364 = G__23389;
count__23365 = G__23390;
i__23366 = G__23391;
continue;
} else {
var v = cljs.core.first(seq__23363__$1);
try{var values__20326__auto___23392 = (function (){var x__8694__auto__ = (function (){var G__23378 = (function (){var G__23379 = cljs.core.cst$kw$data_DASH_foo;
var G__23380 = v;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23379,G__23380) : hoplon.core.div.call(null,G__23379,G__23380));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__23378) : hoplon.core.div.call(null,G__23378));
})();
return cljs.core._conj(cljs.core._conj((function (){var x__8694__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),cljs.core.cst$kw$data_DASH_foo),x__8694__auto__);
})();
var result__20327__auto___23393 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_attrs_QMARK_,values__20326__auto___23392);
if(cljs.core.truth_(result__20327__auto___23393)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_attrs_QMARK_,values__20326__auto___23392),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,values__20326__auto___23392);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23374){var t__20364__auto___23394 = e23374;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$contains_DASH_attrs_QMARK_,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.list(cljs.core.cst$sym$h_SLASH_div,cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v)),cljs.core.cst$kw$data_DASH_foo,cljs.core.cst$sym$v),cljs.core.cst$kw$actual,t__20364__auto___23394,cljs.core.cst$kw$message,null], null));
}
var G__23395 = cljs.core.next(seq__23363__$1);
var G__23396 = null;
var G__23397 = (0);
var G__23398 = (0);
seq__23363 = G__23395;
chunk__23364 = G__23396;
count__23365 = G__23397;
i__23366 = G__23398;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_;},cljs.core.cst$sym$wheel$dom$traversal_SLASH__QMARK__QMARK_contains_DASH_attrs_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$traversal,cljs.core.cst$sym$_QMARK__QMARK_contains_DASH_attrs_QMARK_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/dom/traversal.cljs",27,1,101,101,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_)?wheel.dom.traversal._QMARK__QMARK_contains_attrs_QMARK_.cljs$lang$test:null)]));
