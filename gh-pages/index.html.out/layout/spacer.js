// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.spacer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('layout.config');
goog.require('hoplon.core');
layout.spacer.vertical_spacer = (function layout$spacer$vertical_spacer(var_args){
var args24113 = [];
var len__8981__auto___24118 = arguments.length;
var i__8982__auto___24119 = (0);
while(true){
if((i__8982__auto___24119 < len__8981__auto___24118)){
args24113.push((arguments[i__8982__auto___24119]));

var G__24120 = (i__8982__auto___24119 + (1));
i__8982__auto___24119 = G__24120;
continue;
} else {
}
break;
}

var G__24115 = args24113.length;
switch (G__24115) {
case 0:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24113.length)].join('')));

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
var G__24116 = cljs.core.cst$kw$css;
var G__24117 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height__$1], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24116,G__24117) : hoplon.core.div.call(null,G__24116,G__24117));
});

layout.spacer.vertical_spacer.cljs$lang$maxFixedArity = 1;

