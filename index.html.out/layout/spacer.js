// Compiled by ClojureScript 1.9.542 {}
goog.provide('layout.spacer');
goog.require('cljs.core');
goog.require('layout.config');
goog.require('hoplon.core');
layout.spacer.vertical_spacer = (function layout$spacer$vertical_spacer(var_args){
var args14150 = [];
var len__8306__auto___14153 = arguments.length;
var i__8307__auto___14154 = (0);
while(true){
if((i__8307__auto___14154 < len__8306__auto___14153)){
args14150.push((arguments[i__8307__auto___14154]));

var G__14155 = (i__8307__auto___14154 + (1));
i__8307__auto___14154 = G__14155;
continue;
} else {
}
break;
}

var G__14152 = args14150.length;
switch (G__14152) {
case 0:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14150.length)].join('')));

}
});

layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0 = (function (){
return layout.spacer.vertical_spacer.call(null,null);
});

layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1 = (function (height){
var height__$1 = (function (){var or__7193__auto__ = height;
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
return layout.config.spacer_height;
}
})();
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null));
});

layout.spacer.vertical_spacer.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=spacer.js.map