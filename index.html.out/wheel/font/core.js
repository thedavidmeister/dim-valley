// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.font.core');
goog.require('cljs.core');
goog.require('wheel.font.config');
goog.require('wheel.font.spec');
goog.require('medley.core');
goog.require('cljs.spec');
goog.require('cljs.test');
/**
 * Looks up a fallback string from the config
 */
wheel.font.core.get_fallback = (function wheel$font$core$get_fallback(var_args){
var args14456 = [];
var len__8981__auto___14459 = arguments.length;
var i__8982__auto___14460 = (0);
while(true){
if((i__8982__auto___14460 < len__8981__auto___14459)){
args14456.push((arguments[i__8982__auto___14460]));

var G__14461 = (i__8982__auto___14460 + (1));
i__8982__auto___14460 = G__14461;
continue;
} else {
}
break;
}

var G__14458 = args14456.length;
switch (G__14458) {
case 0:
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14456.length)].join('')));

}
});

wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0 = (function (){
return wheel.font.core.get_fallback.call(null,wheel.font.config.default_fallback);
});

wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cljs.core.get.call(null,wheel.font.config.well_known_fallbacks,k,k);
});

wheel.font.core.get_fallback.cljs$lang$maxFixedArity = 1;

/**
 * Given a font map, returns a CSS font family string, including the fallback
 */
wheel.font.core.font__GT_family_str = (function wheel$font$core$font__GT_family_str(font){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),font))){
} else {
throw (new Error("Assert failed: (spec/valid? :wheel.font/font font)"));
}

var name = new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103).cljs$core$IFn$_invoke$arity$1(font);
var fallback = (function (){var or__7760__auto__ = new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857).cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return wheel.font.core.get_fallback.call(null);
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fallback)].join('');
});
/**
 * Given a font map, returns a CSS string, including the fallback
 */
wheel.font.core.font__GT_css_str = (function wheel$font$core$font__GT_css_str(font){
var _PERCENT_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str.call(null,font)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Given a font map, returns a Hoplon CSS map, including the fallback
 */
wheel.font.core.font__GT_css_map = (function wheel$font$core$font__GT_css_map(font){
var _PERCENT_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),wheel.font.core.font__GT_family_str.call(null,font)], null);
if(cljs.core.map_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (map? %)"));
}

return _PERCENT_;
});
wheel.font.core._QMARK__QMARK_get_fallback = (function wheel$font$core$_QMARK__QMARK_get_fallback(){
return cljs.test.test_var.call(null,wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$var);
});
wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$test = (function (){
try{var values__12007__auto___14466 = (function (){var x__8694__auto__ = cljs.core.get.call(null,wheel.font.config.well_known_fallbacks,wheel.font.config.default_fallback);
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.core.get_fallback.call(null,wheel.font.config.default_fallback);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14467 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___14466);
if(cljs.core.truth_(result__12008__auto___14467)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.font.config","well-known-fallbacks","wheel.font.config/well-known-fallbacks",1666206101,null),new cljs.core.Symbol("wheel.font.config","default-fallback","wheel.font.config/default-fallback",-1805977520,null)),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),new cljs.core.Symbol("wheel.font.config","default-fallback","wheel.font.config/default-fallback",-1805977520,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___14466),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.font.config","well-known-fallbacks","wheel.font.config/well-known-fallbacks",1666206101,null),new cljs.core.Symbol("wheel.font.config","default-fallback","wheel.font.config/default-fallback",-1805977520,null)),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),new cljs.core.Symbol("wheel.font.config","default-fallback","wheel.font.config/default-fallback",-1805977520,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___14466);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14463){var t__12045__auto___14468 = e14463;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.font.config","well-known-fallbacks","wheel.font.config/well-known-fallbacks",1666206101,null),new cljs.core.Symbol("wheel.font.config","default-fallback","wheel.font.config/default-fallback",-1805977520,null)),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),new cljs.core.Symbol("wheel.font.config","default-fallback","wheel.font.config/default-fallback",-1805977520,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14468,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14469 = (function (){var x__8694__auto__ = cljs.core.get.call(null,wheel.font.config.well_known_fallbacks,"medium");
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.core.get_fallback.call(null,"medium");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14470 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___14469);
if(cljs.core.truth_(result__12008__auto___14470)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.font.config","well-known-fallbacks","wheel.font.config/well-known-fallbacks",1666206101,null),"medium"),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"medium")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___14469),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.font.config","well-known-fallbacks","wheel.font.config/well-known-fallbacks",1666206101,null),"medium"),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"medium")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___14469);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14464){var t__12045__auto___14471 = e14464;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.font.config","well-known-fallbacks","wheel.font.config/well-known-fallbacks",1666206101,null),"medium"),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"medium")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14471,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto__ = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.font.core.get_fallback.call(null,"sans-serif");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"sans-serif");
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"sans-serif",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"sans-serif")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"sans-serif",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"sans-serif")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e14465){var t__12045__auto__ = e14465;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"sans-serif",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"sans-serif")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.core._QMARK__QMARK_get_fallback;},new cljs.core.Symbol("wheel.font.core","??get-fallback","wheel.font.core/??get-fallback",459866299,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.font.core","wheel.font.core",-1137143033,null),new cljs.core.Symbol(null,"??get-fallback","??get-fallback",442765710,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/font/core.cljc",24,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.core._QMARK__QMARK_get_fallback)?wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$test:null)]));
wheel.font.core._QMARK__QMARK_font__GT_family_str = (function wheel$font$core$_QMARK__QMARK_font__GT_family_str(){
return cljs.test.test_var.call(null,wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$var);
});
wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$test = (function (){
var vec__14472_14484 = cljs.core.rand_nth.call(null,wheel.font.config.test_examples);
var i_14485 = cljs.core.nth.call(null,vec__14472_14484,(0),null);
var __14486 = cljs.core.nth.call(null,vec__14472_14484,(1),null);
var n_14487 = new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103).cljs$core$IFn$_invoke$arity$1(i_14485);
try{var values__12007__auto___14488 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_14487),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.get_fallback.call(null))].join('');
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.core.font__GT_family_str.call(null,i_14485);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14489 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___14488);
if(cljs.core.truth_(result__12008__auto___14489)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null))),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___14488),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null))),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___14488);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14475){var t__12045__auto___14490 = e14475;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null))),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14490,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14491 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str.call(null,i_14485)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.core.font__GT_css_str.call(null,i_14485);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14492 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___14491);
if(cljs.core.truth_(result__12008__auto___14492)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___14491),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___14491);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14476){var t__12045__auto___14493 = e14476;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14493,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14494 = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),wheel.font.core.font__GT_family_str.call(null,i_14485)], null);
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.core.font__GT_css_map.call(null,i_14485);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14495 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___14494);
if(cljs.core.truth_(result__12008__auto___14495)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___14494),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___14494);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14477){var t__12045__auto___14496 = e14477;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14496,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__14478 = cljs.core.rand_nth.call(null,wheel.font.config.test_examples);
var i = cljs.core.nth.call(null,vec__14478,(0),null);
var _ = cljs.core.nth.call(null,vec__14478,(1),null);
var f = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(medley.core.random_uuid.call(null))].join('');
var i__$1 = cljs.core.merge.call(null,i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),f], null));
var n = new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103).cljs$core$IFn$_invoke$arity$1(i__$1);
try{var values__12007__auto___14497 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.core.font__GT_family_str.call(null,i__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14498 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___14497);
if(cljs.core.truth_(result__12008__auto___14498)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___14497),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___14497);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14481){var t__12045__auto___14499 = e14481;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14499,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14500 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str.call(null,i__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.core.font__GT_css_str.call(null,i__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14501 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___14500);
if(cljs.core.truth_(result__12008__auto___14501)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___14500),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___14500);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14482){var t__12045__auto___14502 = e14482;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14502,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto__ = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),wheel.font.core.font__GT_family_str.call(null,i__$1)], null);
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.core.font__GT_css_map.call(null,i__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e14483){var t__12045__auto__ = e14483;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.core._QMARK__QMARK_font__GT_family_str;},new cljs.core.Symbol("wheel.font.core","??font->family-str","wheel.font.core/??font->family-str",724792991,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.font.core","wheel.font.core",-1137143033,null),new cljs.core.Symbol(null,"??font->family-str","??font->family-str",675571074,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/font/core.cljc",28,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.core._QMARK__QMARK_font__GT_family_str)?wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$test:null)]));

//# sourceMappingURL=core.js.map