// Compiled by ClojureScript 1.9.542 {}
goog.provide('wheel.dom.traversal');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('wheel.dom.events');
wheel.dom.traversal.is_QMARK_ = (function wheel$dom$traversal$is_QMARK_(el,sel){
return jQuery(el).is(sel);
});
wheel.dom.traversal.find = (function wheel$dom$traversal$find(el,sel){
return cljs.core.array_seq.call(null,jQuery(el).find(sel));
});
wheel.dom.traversal.contains_QMARK_ = (function wheel$dom$traversal$contains_QMARK_(el,sel){
return !((wheel.dom.traversal.find.call(null,el,sel) == null));
});
wheel.dom.traversal.children = (function wheel$dom$traversal$children(el){
return cljs.core.array_seq.call(null,jQuery(el).children());
});
wheel.dom.traversal.exists_QMARK_ = (function wheel$dom$traversal$exists_QMARK_(el,sel){
return ((0) < cljs.core.count.call(null,wheel.dom.traversal.find.call(null,el,sel)));
});
wheel.dom.traversal.contains_attrs_QMARK_ = (function wheel$dom$traversal$contains_attrs_QMARK_(el,attrs,vals){
var _PERCENT_ = ((!(cljs.core.coll_QMARK_.call(null,attrs)))?wheel.dom.traversal.contains_attrs_QMARK_.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),vals):((!(cljs.core.coll_QMARK_.call(null,vals)))?wheel.dom.traversal.contains_attrs_QMARK_.call(null,el,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)):cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,(function (){var iter__7981__auto__ = (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__12943(s__12944){
return (new cljs.core.LazySeq(null,(function (){
var s__12944__$1 = s__12944;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12944__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var attr = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7977__auto__ = ((function (s__12944__$1,attr,xs__5205__auto__,temp__4657__auto__){
return (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__12943_$_iter__12945(s__12946){
return (new cljs.core.LazySeq(null,((function (s__12944__$1,attr,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__12946__$1 = s__12946;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__12946__$1);
if(temp__4657__auto____$1){
var s__12946__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12946__$2)){
var c__7979__auto__ = cljs.core.chunk_first.call(null,s__12946__$2);
var size__7980__auto__ = cljs.core.count.call(null,c__7979__auto__);
var b__12948 = cljs.core.chunk_buffer.call(null,size__7980__auto__);
if((function (){var i__12947 = (0);
while(true){
if((i__12947 < size__7980__auto__)){
var val = cljs.core._nth.call(null,c__7979__auto__,i__12947);
cljs.core.chunk_append.call(null,b__12948,!((wheel.dom.traversal.find.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('')) == null)));

var G__12949 = (i__12947 + (1));
i__12947 = G__12949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12948),wheel$dom$traversal$contains_attrs_QMARK__$_iter__12943_$_iter__12945.call(null,cljs.core.chunk_rest.call(null,s__12946__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12948),null);
}
} else {
var val = cljs.core.first.call(null,s__12946__$2);
return cljs.core.cons.call(null,!((wheel.dom.traversal.find.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('')) == null)),wheel$dom$traversal$contains_attrs_QMARK__$_iter__12943_$_iter__12945.call(null,cljs.core.rest.call(null,s__12946__$2)));
}
} else {
return null;
}
break;
}
});})(s__12944__$1,attr,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__12944__$1,attr,xs__5205__auto__,temp__4657__auto__))
;
var fs__7978__auto__ = cljs.core.seq.call(null,iterys__7977__auto__.call(null,vals));
if(fs__7978__auto__){
return cljs.core.concat.call(null,fs__7978__auto__,wheel$dom$traversal$contains_attrs_QMARK__$_iter__12943.call(null,cljs.core.rest.call(null,s__12944__$1)));
} else {
var G__12950 = cljs.core.rest.call(null,s__12944__$1);
s__12944__$1 = G__12950;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7981__auto__.call(null,attrs);
})())
));
if(cljs.core.boolean_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (boolean? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.attr = (function wheel$dom$traversal$attr(el,attr_name){
return jQuery(el).attr(attr_name);
});
wheel.dom.traversal.find_attr = (function wheel$dom$traversal$find_attr(el,sel,attr_name){
var _PERCENT_ = cljs.core.map.call(null,(function (p1__12951_SHARP_){
return wheel.dom.traversal.attr.call(null,p1__12951_SHARP_,attr_name);
}),wheel.dom.traversal.find.call(null,el,sel));
if(cljs.core.seq_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.text = (function wheel$dom$traversal$text(el){
return jQuery(el).text();
});
wheel.dom.traversal.find_text = (function wheel$dom$traversal$find_text(el,sel){
var _PERCENT_ = cljs.core.map.call(null,wheel.dom.traversal.text,wheel.dom.traversal.find.call(null,el,sel));
if(cljs.core.seq_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (seq? %)"));
}

return _PERCENT_;
});
wheel.dom.traversal.val = (function wheel$dom$traversal$val(el){
return jQuery(el).val();
});
wheel.dom.traversal.find_val = (function wheel$dom$traversal$find_val(el,sel){
var _PERCENT_ = cljs.core.map.call(null,wheel.dom.traversal.val,wheel.dom.traversal.find.call(null,el,sel));
if(cljs.core.seq_QMARK_.call(null,_PERCENT_)){
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
var args12952 = [];
var len__8306__auto___12955 = arguments.length;
var i__8307__auto___12956 = (0);
while(true){
if((i__8307__auto___12956 < len__8306__auto___12955)){
args12952.push((arguments[i__8307__auto___12956]));

var G__12957 = (i__8307__auto___12956 + (1));
i__8307__auto___12956 = G__12957;
continue;
} else {
}
break;
}

var G__12954 = args12952.length;
switch (G__12954) {
case 3:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12952.length)].join('')));

}
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,f,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.call(null,el,"input",f,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,sel,f,v){
var target = f.call(null,wheel.dom.traversal.find.call(null,jQuery(el),sel));
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.traversal.input_val_BANG_.call(null,target,v);
});

wheel.dom.traversal.find_fn_input_val_BANG_.cljs$lang$maxFixedArity = 4;

wheel.dom.traversal.input_val_first_BANG_ = (function wheel$dom$traversal$input_val_first_BANG_(var_args){
var args12959 = [];
var len__8306__auto___12962 = arguments.length;
var i__8307__auto___12963 = (0);
while(true){
if((i__8307__auto___12963 < len__8306__auto___12962)){
args12959.push((arguments[i__8307__auto___12963]));

var G__12964 = (i__8307__auto___12963 + (1));
i__8307__auto___12963 = G__12964;
continue;
} else {
}
break;
}

var G__12961 = args12959.length;
switch (G__12961) {
case 2:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12959.length)].join('')));

}
});

wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.call(null,el,cljs.core.first,v);
});

wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,sel,v){
return wheel.dom.traversal.find_fn_input_val_BANG_.call(null,el,sel,cljs.core.first,v);
});

wheel.dom.traversal.input_val_first_BANG_.cljs$lang$maxFixedArity = 3;

wheel.dom.traversal.css = (function wheel$dom$traversal$css(el,k){
return jQuery(el).css(k);
});
/**
 * Use jQuery to trigger the given event on the first match of sel
 */
wheel.dom.traversal.trigger_first_BANG_ = (function wheel$dom$traversal$trigger_first_BANG_(el,sel,e){
var target = cljs.core.first.call(null,wheel.dom.traversal.find.call(null,el,sel));
if(cljs.core.truth_(target)){
} else {
throw (new Error("Assert failed: target"));
}

return wheel.dom.events.trigger_jq_BANG_.call(null,target,e);
});

//# sourceMappingURL=traversal.js.map