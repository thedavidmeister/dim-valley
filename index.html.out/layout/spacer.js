// Compiled by ClojureScript 1.9.293 {}
goog.provide('layout.spacer');
goog.require('cljs.core');
goog.require('layout.config');
goog.require('hoplon.core');
layout.spacer.vertical_spacer = (function layout$spacer$vertical_spacer(var_args){
var args10017 = [];
var len__7950__auto___10020 = arguments.length;
var i__7951__auto___10021 = (0);
while(true){
if((i__7951__auto___10021 < len__7950__auto___10020)){
args10017.push((arguments[i__7951__auto___10021]));

var G__10022 = (i__7951__auto___10021 + (1));
i__7951__auto___10021 = G__10022;
continue;
} else {
}
break;
}

var G__10019 = args10017.length;
switch (G__10019) {
case 0:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10017.length)].join('')));

}
});

layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0 = (function (){
return layout.spacer.vertical_spacer.call(null,null);
});

layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$1 = (function (height){
var height__$1 = (function (){var or__6842__auto__ = height;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return layout.config.spacer_height;
}
})();
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null));
});

layout.spacer.vertical_spacer.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=spacer.js.map