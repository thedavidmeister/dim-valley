// Compiled by ClojureScript 1.9.521 {}
goog.provide('layout.spacer');
goog.require('cljs.core');
goog.require('layout.config');
goog.require('hoplon.core');
layout.spacer.vertical_spacer = (function layout$spacer$vertical_spacer(var_args){
var args14878 = [];
var len__8981__auto___14881 = arguments.length;
var i__8982__auto___14882 = (0);
while(true){
if((i__8982__auto___14882 < len__8981__auto___14881)){
args14878.push((arguments[i__8982__auto___14882]));

var G__14883 = (i__8982__auto___14882 + (1));
i__8982__auto___14882 = G__14883;
continue;
} else {
}
break;
}

var G__14880 = args14878.length;
switch (G__14880) {
case 0:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14878.length)].join('')));

}
});

layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0 = (function (){
return layout.spacer.vertical_spacer.call(null,null);
});

layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1 = (function (height){
var height__$1 = (function (){var or__7760__auto__ = height;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return layout.config.spacer_height;
}
})();
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null));
});

layout.spacer.vertical_spacer.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=spacer.js.map