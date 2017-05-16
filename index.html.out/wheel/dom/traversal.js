// Compiled by ClojureScript 1.9.521 {}
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
var _PERCENT_ = ((!(cljs.core.coll_QMARK_.call(null,attrs)))?wheel.dom.traversal.contains_attrs_QMARK_.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),vals):((!(cljs.core.coll_QMARK_.call(null,vals)))?wheel.dom.traversal.contains_attrs_QMARK_.call(null,el,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)):cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,(function (){var iter__8622__auto__ = (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__14768(s__14769){
return (new cljs.core.LazySeq(null,(function (){
var s__14769__$1 = s__14769;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__14769__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var attr = cljs.core.first.call(null,xs__7294__auto__);
var iterys__8618__auto__ = ((function (s__14769__$1,attr,xs__7294__auto__,temp__6738__auto__){
return (function wheel$dom$traversal$contains_attrs_QMARK__$_iter__14768_$_iter__14770(s__14771){
return (new cljs.core.LazySeq(null,((function (s__14769__$1,attr,xs__7294__auto__,temp__6738__auto__){
return (function (){
var s__14771__$1 = s__14771;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__14771__$1);
if(temp__6738__auto____$1){
var s__14771__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14771__$2)){
var c__8620__auto__ = cljs.core.chunk_first.call(null,s__14771__$2);
var size__8621__auto__ = cljs.core.count.call(null,c__8620__auto__);
var b__14773 = cljs.core.chunk_buffer.call(null,size__8621__auto__);
if((function (){var i__14772 = (0);
while(true){
if((i__14772 < size__8621__auto__)){
var val = cljs.core._nth.call(null,c__8620__auto__,i__14772);
cljs.core.chunk_append.call(null,b__14773,!((wheel.dom.traversal.find.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('')) == null)));

var G__14774 = (i__14772 + (1));
i__14772 = G__14774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14773),wheel$dom$traversal$contains_attrs_QMARK__$_iter__14768_$_iter__14770.call(null,cljs.core.chunk_rest.call(null,s__14771__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14773),null);
}
} else {
var val = cljs.core.first.call(null,s__14771__$2);
return cljs.core.cons.call(null,!((wheel.dom.traversal.find.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('')) == null)),wheel$dom$traversal$contains_attrs_QMARK__$_iter__14768_$_iter__14770.call(null,cljs.core.rest.call(null,s__14771__$2)));
}
} else {
return null;
}
break;
}
});})(s__14769__$1,attr,xs__7294__auto__,temp__6738__auto__))
,null,null));
});})(s__14769__$1,attr,xs__7294__auto__,temp__6738__auto__))
;
var fs__8619__auto__ = cljs.core.seq.call(null,iterys__8618__auto__.call(null,vals));
if(fs__8619__auto__){
return cljs.core.concat.call(null,fs__8619__auto__,wheel$dom$traversal$contains_attrs_QMARK__$_iter__14768.call(null,cljs.core.rest.call(null,s__14769__$1)));
} else {
var G__14775 = cljs.core.rest.call(null,s__14769__$1);
s__14769__$1 = G__14775;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8622__auto__.call(null,attrs);
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
var _PERCENT_ = cljs.core.map.call(null,(function (p1__14776_SHARP_){
return wheel.dom.traversal.attr.call(null,p1__14776_SHARP_,attr_name);
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
var args14777 = [];
var len__8981__auto___14780 = arguments.length;
var i__8982__auto___14781 = (0);
while(true){
if((i__8982__auto___14781 < len__8981__auto___14780)){
args14777.push((arguments[i__8982__auto___14781]));

var G__14782 = (i__8982__auto___14781 + (1));
i__8982__auto___14781 = G__14782;
continue;
} else {
}
break;
}

var G__14779 = args14777.length;
switch (G__14779) {
case 3:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.dom.traversal.find_fn_input_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14777.length)].join('')));

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
var args14784 = [];
var len__8981__auto___14787 = arguments.length;
var i__8982__auto___14788 = (0);
while(true){
if((i__8982__auto___14788 < len__8981__auto___14787)){
args14784.push((arguments[i__8982__auto___14788]));

var G__14789 = (i__8982__auto___14788 + (1));
i__8982__auto___14788 = G__14789;
continue;
} else {
}
break;
}

var G__14786 = args14784.length;
switch (G__14786) {
case 2:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.traversal.input_val_first_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14784.length)].join('')));

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