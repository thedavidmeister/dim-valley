// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
goog.require('animation.easings');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24930 = arguments.length;
var i__8982__auto___24931 = (0);
while(true){
if((i__8982__auto___24931 < len__8981__auto___24930)){
args__8988__auto__.push((arguments[i__8982__auto___24931]));

var G__24932 = (i__8982__auto___24931 + (1));
i__8982__auto___24931 = G__24932;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24927 = cljs.core.cst$kw$css;
var G__24928 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__24929 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24927,G__24928,G__24929) : hoplon.core.div.call(null,G__24927,G__24928,G__24929));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq24926){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24926));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24952 = arguments.length;
var i__8982__auto___24953 = (0);
while(true){
if((i__8982__auto___24953 < len__8981__auto___24952)){
args__8988__auto__.push((arguments[i__8982__auto___24953]));

var G__24954 = (i__8982__auto___24953 + (1));
i__8982__auto___24953 = G__24954;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((2) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((2)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8989__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,offset,children){
var transition_length = menu.config.transition_length;
var el = (function (){var G__24936 = cljs.core.cst$kw$css;
var G__24937 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24936,transition_length){
return (function (G__24942,G__24939,G__24940,G__24941){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24939),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__24940)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24941)?G__24939:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24941)?"0px":G__24942)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__24941)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__24941)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__24936,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__24938 = (function (){var G__24943 = cljs.core.cst$kw$class;
var G__24944 = "clearfix";
var G__24945 = cljs.core.cst$kw$position;
var G__24946 = "relative";
var G__24947 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24943,G__24944,G__24945,G__24946,G__24947) : hoplon.core.div.call(null,G__24943,G__24944,G__24945,G__24946,G__24947));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24936,G__24937,G__24938) : hoplon.core.div.call(null,G__24936,G__24937,G__24938));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__24950,G__24949,G__24948){
if(cljs.core.truth_(G__24948)){
return jQuery("html, body").animate((function (){var G__24951 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__24949.cljs$core$IFn$_invoke$arity$1 ? G__24949.cljs$core$IFn$_invoke$arity$1(G__24951) : G__24949.call(null,G__24951));
})(),G__24950);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq24933){
var G__24934 = cljs.core.first(seq24933);
var seq24933__$1 = cljs.core.next(seq24933);
var G__24935 = cljs.core.first(seq24933__$1);
var seq24933__$2 = cljs.core.next(seq24933__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__24934,G__24935,seq24933__$2);
});

