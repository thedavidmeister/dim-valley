// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.spacer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('layout.config');
goog.require('hoplon.core');
layout.spacer.vertical_spacer = (function layout$spacer$vertical_spacer(var_args){
var args23463 = [];
var len__8981__auto___23468 = arguments.length;
var i__8982__auto___23469 = (0);
while(true){
if((i__8982__auto___23469 < len__8981__auto___23468)){
args23463.push((arguments[i__8982__auto___23469]));

var G__23470 = (i__8982__auto___23469 + (1));
i__8982__auto___23469 = G__23470;
continue;
} else {
}
break;
}

var G__23465 = args23463.length;
switch (G__23465) {
case 0:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23463.length)].join('')));

}
});

layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0 = (function (){
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1(null);
});

layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1 = (function (height){
var height__$1 = (function (){var or__7760__auto__ = height;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return layout.config.spacer_height;
}
})();
var G__23466 = cljs.core.cst$kw$css;
var G__23467 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height__$1], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23466,G__23467) : hoplon.core.div.call(null,G__23466,G__23467));
});

layout.spacer.vertical_spacer.cljs$lang$maxFixedArity = 1;

