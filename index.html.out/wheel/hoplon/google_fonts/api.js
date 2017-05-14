// Compiled by ClojureScript 1.9.542 {}
goog.provide('wheel.hoplon.google_fonts.api');
goog.require('cljs.core');
goog.require('wheel.hoplon.google_fonts.config');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__13405){
return cljs.core.map_QMARK_.call(null,G__13405);
}),(function (G__13405){
return cljs.core.contains_QMARK_.call(null,G__13405,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103));
})], null),(function (G__13405){
return (cljs.core.map_QMARK_.call(null,G__13405)) && (cljs.core.contains_QMARK_.call(null,G__13405,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null)])));
/**
 * Given a font hash map, returns a string suitable in a Google Fonts URI
 */
wheel.hoplon.google_fonts.api.font__GT_uri_str = (function wheel$hoplon$google_fonts$api$font__GT_uri_str(font){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),font))){
} else {
throw (new Error("Assert failed: (spec/valid? :wheel.font/font font)"));
}

var name = new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103).cljs$core$IFn$_invoke$arity$1(font);
var variants = new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790).cljs$core$IFn$_invoke$arity$1(font);
var name_uri = clojure.string.replace.call(null,name," ","+");
var variants_uri = ((cljs.core.seq.call(null,variants))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",variants))].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variants_uri)].join('');
});
/**
 * Given a sequence of fonts, returns a string suitable in a Google Fonts URI
 */
wheel.hoplon.google_fonts.api.fonts__GT_uri_str = (function wheel$hoplon$google_fonts$api$fonts__GT_uri_str(fonts__$1){
if(cljs.core.sequential_QMARK_.call(null,fonts__$1)){
} else {
throw (new Error("Assert failed: (sequential? fonts)"));
}

return clojure.string.join.call(null,"|",cljs.core.map.call(null,wheel.hoplon.google_fonts.api.font__GT_uri_str,fonts__$1));
});
/**
 * Given a sequence of fonts, returns the entire Google Fonts URL
 */
wheel.hoplon.google_fonts.api.fonts__GT_url = (function wheel$hoplon$google_fonts$api$fonts__GT_url(fonts__$1){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.hoplon.google_fonts.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.hoplon.google_fonts.api.fonts__GT_uri_str.call(null,fonts__$1))].join('');
});
/**
 * Looks up a fallback string from the config
 */
wheel.hoplon.google_fonts.api.get_fallback = (function wheel$hoplon$google_fonts$api$get_fallback(var_args){
var args13406 = [];
var len__8306__auto___13409 = arguments.length;
var i__8307__auto___13410 = (0);
while(true){
if((i__8307__auto___13410 < len__8306__auto___13409)){
args13406.push((arguments[i__8307__auto___13410]));

var G__13411 = (i__8307__auto___13410 + (1));
i__8307__auto___13410 = G__13411;
continue;
} else {
}
break;
}

var G__13408 = args13406.length;
switch (G__13408) {
case 0:
return wheel.hoplon.google_fonts.api.get_fallback.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return wheel.hoplon.google_fonts.api.get_fallback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13406.length)].join('')));

}
});

wheel.hoplon.google_fonts.api.get_fallback.cljs$core$IFn$_invoke$arity$0 = (function (){
return wheel.hoplon.google_fonts.api.get_fallback.call(null,wheel.hoplon.google_fonts.config.default_fallback);
});

wheel.hoplon.google_fonts.api.get_fallback.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cljs.core.get.call(null,wheel.hoplon.google_fonts.config.well_known_fallbacks,k,k);
});

wheel.hoplon.google_fonts.api.get_fallback.cljs$lang$maxFixedArity = 1;

/**
 * Given a font map, returns a CSS font family string, including the fallback
 */
wheel.hoplon.google_fonts.api.font__GT_family_str = (function wheel$hoplon$google_fonts$api$font__GT_family_str(font){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),font))){
} else {
throw (new Error("Assert failed: (spec/valid? :wheel.font/font font)"));
}

var name = new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103).cljs$core$IFn$_invoke$arity$1(font);
var fallback = (function (){var or__7193__auto__ = new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857).cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
return wheel.hoplon.google_fonts.api.get_fallback.call(null);
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fallback)].join('');
});
/**
 * Given a font map, returns a CSS string, including the fallback
 */
wheel.hoplon.google_fonts.api.font__GT_css_str = (function wheel$hoplon$google_fonts$api$font__GT_css_str(font){
var _PERCENT_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.hoplon.google_fonts.api.font__GT_family_str.call(null,font)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Given a font map, returns a Hoplon CSS map, including the fallback
 */
wheel.hoplon.google_fonts.api.font__GT_css_map = (function wheel$hoplon$google_fonts$api$font__GT_css_map(font){
var _PERCENT_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),wheel.hoplon.google_fonts.api.font__GT_family_str.call(null,font)], null);
if(cljs.core.map_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (map? %)"));
}

return _PERCENT_;
});
wheel.hoplon.google_fonts.api.examples = cljs.core.partition.call(null,(2),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),""], null),"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),"foo"], null),"foo",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),"foo bar"], null),"foo+bar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),"foo",new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),cljs.core.PersistentVector.EMPTY], null),"foo",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),"foo",new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1"], null)], null),"foo:1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),"foo",new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2"], null)], null),"foo:1,2",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),"foo bar",new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2"], null)], null),"foo+bar:1,2"], null));
wheel.hoplon.google_fonts.api._QMARK__QMARK_spec = (function wheel$hoplon$google_fonts$api$_QMARK__QMARK_spec(){
return cljs.test.test_var.call(null,wheel.hoplon.google_fonts.api._QMARK__QMARK_spec.cljs$lang$var);
});
wheel.hoplon.google_fonts.api._QMARK__QMARK_spec.cljs$lang$test = (function (){
var seq__13413 = cljs.core.seq.call(null,wheel.hoplon.google_fonts.api.examples);
var chunk__13414 = null;
var count__13415 = (0);
var i__13416 = (0);
while(true){
if((i__13416 < count__13415)){
var vec__13417 = cljs.core._nth.call(null,chunk__13414,i__13416);
var i = cljs.core.nth.call(null,vec__13417,(0),null);
var _ = cljs.core.nth.call(null,vec__13417,(1),null);
try{var values__12662__auto___13429 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12663__auto___13430 = cljs.core.apply.call(null,cljs.spec.alpha.valid_QMARK_,values__12662__auto___13429);
if(cljs.core.truth_(result__12663__auto___13430)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.alpha.valid_QMARK_,values__12662__auto___13429),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12662__auto___13429);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13420){var t__12700__auto___13431 = e13420;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13431,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13432 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.merge.call(null,i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12663__auto___13433 = cljs.core.apply.call(null,cljs.spec.alpha.valid_QMARK_,values__12662__auto___13432);
if(cljs.core.truth_(result__12663__auto___13433)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.alpha.valid_QMARK_,values__12662__auto___13432),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12662__auto___13432);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13421){var t__12700__auto___13434 = e13421;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13434,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13435 = (function (){var x__8035__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.dissoc.call(null,i,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})();
var result__12663__auto___13436 = cljs.core.apply.call(null,cljs.core.not,values__12662__auto___13435);
if(cljs.core.truth_(result__12663__auto___13436)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__12662__auto___13435),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__12662__auto___13435);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13422){var t__12700__auto___13437 = e13422;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13437,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__13438 = seq__13413;
var G__13439 = chunk__13414;
var G__13440 = count__13415;
var G__13441 = (i__13416 + (1));
seq__13413 = G__13438;
chunk__13414 = G__13439;
count__13415 = G__13440;
i__13416 = G__13441;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13413);
if(temp__4657__auto__){
var seq__13413__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13413__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__13413__$1);
var G__13442 = cljs.core.chunk_rest.call(null,seq__13413__$1);
var G__13443 = c__8012__auto__;
var G__13444 = cljs.core.count.call(null,c__8012__auto__);
var G__13445 = (0);
seq__13413 = G__13442;
chunk__13414 = G__13443;
count__13415 = G__13444;
i__13416 = G__13445;
continue;
} else {
var vec__13423 = cljs.core.first.call(null,seq__13413__$1);
var i = cljs.core.nth.call(null,vec__13423,(0),null);
var _ = cljs.core.nth.call(null,vec__13423,(1),null);
try{var values__12662__auto___13446 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12663__auto___13447 = cljs.core.apply.call(null,cljs.spec.alpha.valid_QMARK_,values__12662__auto___13446);
if(cljs.core.truth_(result__12663__auto___13447)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.alpha.valid_QMARK_,values__12662__auto___13446),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12662__auto___13446);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13426){var t__12700__auto___13448 = e13426;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13448,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13449 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.merge.call(null,i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12663__auto___13450 = cljs.core.apply.call(null,cljs.spec.alpha.valid_QMARK_,values__12662__auto___13449);
if(cljs.core.truth_(result__12663__auto___13450)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.alpha.valid_QMARK_,values__12662__auto___13449),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12662__auto___13449);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13427){var t__12700__auto___13451 = e13427;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13451,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13452 = (function (){var x__8035__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.dissoc.call(null,i,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})();
var result__12663__auto___13453 = cljs.core.apply.call(null,cljs.core.not,values__12662__auto___13452);
if(cljs.core.truth_(result__12663__auto___13453)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__12662__auto___13452),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__12662__auto___13452);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13428){var t__12700__auto___13454 = e13428;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13454,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__13455 = cljs.core.next.call(null,seq__13413__$1);
var G__13456 = null;
var G__13457 = (0);
var G__13458 = (0);
seq__13413 = G__13455;
chunk__13414 = G__13456;
count__13415 = G__13457;
i__13416 = G__13458;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.hoplon.google_fonts.api._QMARK__QMARK_spec.cljs$lang$var = new cljs.core.Var(function(){return wheel.hoplon.google_fonts.api._QMARK__QMARK_spec;},new cljs.core.Symbol("wheel.hoplon.google-fonts.api","??spec","wheel.hoplon.google-fonts.api/??spec",1107971281,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.hoplon.google-fonts.api","wheel.hoplon.google-fonts.api",-2123923084,null),new cljs.core.Symbol(null,"??spec","??spec",-833272348,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/hoplon/google_fonts/api.cljs",16,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.hoplon.google_fonts.api._QMARK__QMARK_spec)?wheel.hoplon.google_fonts.api._QMARK__QMARK_spec.cljs$lang$test:null)]));
wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_uri_str = (function wheel$hoplon$google_fonts$api$_QMARK__QMARK_font__GT_uri_str(){
return cljs.test.test_var.call(null,wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_uri_str.cljs$lang$var);
});
wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_uri_str.cljs$lang$test = (function (){
var seq__13459 = cljs.core.seq.call(null,wheel.hoplon.google_fonts.api.examples);
var chunk__13460 = null;
var count__13461 = (0);
var i__13462 = (0);
while(true){
if((i__13462 < count__13461)){
var vec__13463 = cljs.core._nth.call(null,chunk__13460,i__13462);
var i = cljs.core.nth.call(null,vec__13463,(0),null);
var o = cljs.core.nth.call(null,vec__13463,(1),null);
try{var values__12662__auto___13471 = (function (){var x__8035__auto__ = o;
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.font__GT_uri_str.call(null,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13472 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13471);
if(cljs.core.truth_(result__12663__auto___13472)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13471),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13471);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13466){var t__12700__auto___13473 = e13466;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13473,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__13474 = seq__13459;
var G__13475 = chunk__13460;
var G__13476 = count__13461;
var G__13477 = (i__13462 + (1));
seq__13459 = G__13474;
chunk__13460 = G__13475;
count__13461 = G__13476;
i__13462 = G__13477;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13459);
if(temp__4657__auto__){
var seq__13459__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13459__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__13459__$1);
var G__13478 = cljs.core.chunk_rest.call(null,seq__13459__$1);
var G__13479 = c__8012__auto__;
var G__13480 = cljs.core.count.call(null,c__8012__auto__);
var G__13481 = (0);
seq__13459 = G__13478;
chunk__13460 = G__13479;
count__13461 = G__13480;
i__13462 = G__13481;
continue;
} else {
var vec__13467 = cljs.core.first.call(null,seq__13459__$1);
var i = cljs.core.nth.call(null,vec__13467,(0),null);
var o = cljs.core.nth.call(null,vec__13467,(1),null);
try{var values__12662__auto___13482 = (function (){var x__8035__auto__ = o;
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.font__GT_uri_str.call(null,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13483 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13482);
if(cljs.core.truth_(result__12663__auto___13483)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13482),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13482);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13470){var t__12700__auto___13484 = e13470;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13484,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__13485 = cljs.core.next.call(null,seq__13459__$1);
var G__13486 = null;
var G__13487 = (0);
var G__13488 = (0);
seq__13459 = G__13485;
chunk__13460 = G__13486;
count__13461 = G__13487;
i__13462 = G__13488;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_uri_str;},new cljs.core.Symbol("wheel.hoplon.google-fonts.api","??font->uri-str","wheel.hoplon.google-fonts.api/??font->uri-str",916616286,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.hoplon.google-fonts.api","wheel.hoplon.google-fonts.api",-2123923084,null),new cljs.core.Symbol(null,"??font->uri-str","??font->uri-str",-1555084445,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/hoplon/google_fonts/api.cljs",25,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_uri_str)?wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_uri_str.cljs$lang$test:null)]));
wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_uri_str = (function wheel$hoplon$google_fonts$api$_QMARK__QMARK_fonts__GT_uri_str(){
return cljs.test.test_var.call(null,wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var);
});
wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test = (function (){
try{var values__12662__auto___13501 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.google_fonts.api.fonts__GT_uri_str.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"");
var result__12663__auto___13502 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13501);
if(cljs.core.truth_(result__12663__auto___13502)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13501),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13501);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13489){var t__12700__auto___13503 = e13489;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13503,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__13490_13504 = cljs.core.rand_nth.call(null,wheel.hoplon.google_fonts.api.examples);
var i_13505 = cljs.core.nth.call(null,vec__13490_13504,(0),null);
var o_13506 = cljs.core.nth.call(null,vec__13490_13504,(1),null);
try{var values__12662__auto___13507 = (function (){var x__8035__auto__ = o_13506;
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.fonts__GT_uri_str.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_13505], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13508 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13507);
if(cljs.core.truth_(result__12663__auto___13508)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13507),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13507);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13493){var t__12700__auto___13509 = e13493;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13509,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__13494 = cljs.core.rand_nth.call(null,wheel.hoplon.google_fonts.api.examples);
var i = cljs.core.nth.call(null,vec__13494,(0),null);
var o = cljs.core.nth.call(null,vec__13494,(1),null);
var vec__13497 = cljs.core.rand_nth.call(null,wheel.hoplon.google_fonts.api.examples);
var i_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13497,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13497,(1),null);
try{var values__12662__auto__ = (function (){var x__8035__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.fonts__GT_uri_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e13500){var t__12700__auto__ = e13500;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_uri_str;},new cljs.core.Symbol("wheel.hoplon.google-fonts.api","??fonts->uri-str","wheel.hoplon.google-fonts.api/??fonts->uri-str",453619392,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.hoplon.google-fonts.api","wheel.hoplon.google-fonts.api",-2123923084,null),new cljs.core.Symbol(null,"??fonts->uri-str","??fonts->uri-str",-1898534955,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/hoplon/google_fonts/api.cljs",26,1,93,93,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_uri_str)?wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test:null)]));
wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_url = (function wheel$hoplon$google_fonts$api$_QMARK__QMARK_fonts__GT_url(){
return cljs.test.test_var.call(null,wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_url.cljs$lang$var);
});
wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_url.cljs$lang$test = (function (){
try{var values__12662__auto___13522 = (function (){var x__8035__auto__ = wheel.hoplon.google_fonts.config.base_url;
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.fonts__GT_url.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13523 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13522);
if(cljs.core.truth_(result__12663__auto___13523)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","base-url","wheel.hoplon.google-fonts.config/base-url",-366564452,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13522),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","base-url","wheel.hoplon.google-fonts.config/base-url",-366564452,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13522);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13510){var t__12700__auto___13524 = e13510;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","base-url","wheel.hoplon.google-fonts.config/base-url",-366564452,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13524,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__13511_13525 = cljs.core.rand_nth.call(null,wheel.hoplon.google_fonts.api.examples);
var i_13526 = cljs.core.nth.call(null,vec__13511_13525,(0),null);
var o_13527 = cljs.core.nth.call(null,vec__13511_13525,(1),null);
try{var values__12662__auto___13528 = (function (){var x__8035__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.hoplon.google_fonts.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_13527)].join('');
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.fonts__GT_url.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_13526], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13529 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13528);
if(cljs.core.truth_(result__12663__auto___13529)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","base-url","wheel.hoplon.google-fonts.config/base-url",-366564452,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13528),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","base-url","wheel.hoplon.google-fonts.config/base-url",-366564452,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13528);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13514){var t__12700__auto___13530 = e13514;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","base-url","wheel.hoplon.google-fonts.config/base-url",-366564452,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13530,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__13515 = cljs.core.rand_nth.call(null,wheel.hoplon.google_fonts.api.examples);
var i = cljs.core.nth.call(null,vec__13515,(0),null);
var o = cljs.core.nth.call(null,vec__13515,(1),null);
var vec__13518 = cljs.core.rand_nth.call(null,wheel.hoplon.google_fonts.api.examples);
var i_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13518,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13518,(1),null);
try{var values__12662__auto__ = (function (){var x__8035__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.hoplon.google_fonts.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.fonts__GT_url.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","base-url","wheel.hoplon.google-fonts.config/base-url",-366564452,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","base-url","wheel.hoplon.google-fonts.config/base-url",-366564452,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e13521){var t__12700__auto__ = e13521;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","base-url","wheel.hoplon.google-fonts.config/base-url",-366564452,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_url;},new cljs.core.Symbol("wheel.hoplon.google-fonts.api","??fonts->url","wheel.hoplon.google-fonts.api/??fonts->url",1640763463,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.hoplon.google-fonts.api","wheel.hoplon.google-fonts.api",-2123923084,null),new cljs.core.Symbol(null,"??fonts->url","??fonts->url",-307762822,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/hoplon/google_fonts/api.cljs",22,1,102,102,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_url)?wheel.hoplon.google_fonts.api._QMARK__QMARK_fonts__GT_url.cljs$lang$test:null)]));
wheel.hoplon.google_fonts.api._QMARK__QMARK_get_fallback = (function wheel$hoplon$google_fonts$api$_QMARK__QMARK_get_fallback(){
return cljs.test.test_var.call(null,wheel.hoplon.google_fonts.api._QMARK__QMARK_get_fallback.cljs$lang$var);
});
wheel.hoplon.google_fonts.api._QMARK__QMARK_get_fallback.cljs$lang$test = (function (){
try{var values__12662__auto___13534 = (function (){var x__8035__auto__ = cljs.core.get.call(null,wheel.hoplon.google_fonts.config.well_known_fallbacks,wheel.hoplon.google_fonts.config.default_fallback);
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.get_fallback.call(null,wheel.hoplon.google_fonts.config.default_fallback);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13535 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13534);
if(cljs.core.truth_(result__12663__auto___13535)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","well-known-fallbacks","wheel.hoplon.google-fonts.config/well-known-fallbacks",-967913396,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","default-fallback","wheel.hoplon.google-fonts.config/default-fallback",-79609575,null)),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","default-fallback","wheel.hoplon.google-fonts.config/default-fallback",-79609575,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13534),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","well-known-fallbacks","wheel.hoplon.google-fonts.config/well-known-fallbacks",-967913396,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","default-fallback","wheel.hoplon.google-fonts.config/default-fallback",-79609575,null)),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","default-fallback","wheel.hoplon.google-fonts.config/default-fallback",-79609575,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13534);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13531){var t__12700__auto___13536 = e13531;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","well-known-fallbacks","wheel.hoplon.google-fonts.config/well-known-fallbacks",-967913396,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","default-fallback","wheel.hoplon.google-fonts.config/default-fallback",-79609575,null)),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","default-fallback","wheel.hoplon.google-fonts.config/default-fallback",-79609575,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13536,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13537 = (function (){var x__8035__auto__ = cljs.core.get.call(null,wheel.hoplon.google_fonts.config.well_known_fallbacks,"medium");
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.get_fallback.call(null,"medium");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13538 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13537);
if(cljs.core.truth_(result__12663__auto___13538)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","well-known-fallbacks","wheel.hoplon.google-fonts.config/well-known-fallbacks",-967913396,null),"medium"),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"medium")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13537),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","well-known-fallbacks","wheel.hoplon.google-fonts.config/well-known-fallbacks",-967913396,null),"medium"),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"medium")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13537);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13532){var t__12700__auto___13539 = e13532;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol("wheel.hoplon.google-fonts.config","well-known-fallbacks","wheel.hoplon.google-fonts.config/well-known-fallbacks",-967913396,null),"medium"),cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"medium")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13539,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto__ = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.google_fonts.api.get_fallback.call(null,"sans-serif");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"sans-serif");
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"sans-serif",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"sans-serif")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"sans-serif",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"sans-serif")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e13533){var t__12700__auto__ = e13533;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"sans-serif",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null),"sans-serif")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.hoplon.google_fonts.api._QMARK__QMARK_get_fallback.cljs$lang$var = new cljs.core.Var(function(){return wheel.hoplon.google_fonts.api._QMARK__QMARK_get_fallback;},new cljs.core.Symbol("wheel.hoplon.google-fonts.api","??get-fallback","wheel.hoplon.google-fonts.api/??get-fallback",-296542559,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.hoplon.google-fonts.api","wheel.hoplon.google-fonts.api",-2123923084,null),new cljs.core.Symbol(null,"??get-fallback","??get-fallback",442765710,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/hoplon/google_fonts/api.cljs",24,1,113,113,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.hoplon.google_fonts.api._QMARK__QMARK_get_fallback)?wheel.hoplon.google_fonts.api._QMARK__QMARK_get_fallback.cljs$lang$test:null)]));
wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_family_str = (function wheel$hoplon$google_fonts$api$_QMARK__QMARK_font__GT_family_str(){
return cljs.test.test_var.call(null,wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_family_str.cljs$lang$var);
});
wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_family_str.cljs$lang$test = (function (){
var vec__13540_13552 = cljs.core.rand_nth.call(null,wheel.hoplon.google_fonts.api.examples);
var i_13553 = cljs.core.nth.call(null,vec__13540_13552,(0),null);
var __13554 = cljs.core.nth.call(null,vec__13540_13552,(1),null);
var n_13555 = new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103).cljs$core$IFn$_invoke$arity$1(i_13553);
try{var values__12662__auto___13556 = (function (){var x__8035__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_13555),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.hoplon.google_fonts.api.get_fallback.call(null))].join('');
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.font__GT_family_str.call(null,i_13553);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13557 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13556);
if(cljs.core.truth_(result__12663__auto___13557)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null))),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13556),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null))),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13556);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13543){var t__12700__auto___13558 = e13543;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",cljs.core.list(new cljs.core.Symbol(null,"get-fallback","get-fallback",853618279,null))),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13558,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13559 = (function (){var x__8035__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.hoplon.google_fonts.api.font__GT_family_str.call(null,i_13553)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.font__GT_css_str.call(null,i_13553);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13560 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13559);
if(cljs.core.truth_(result__12663__auto___13560)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13559),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13559);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13544){var t__12700__auto___13561 = e13544;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13561,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13562 = (function (){var x__8035__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),wheel.hoplon.google_fonts.api.font__GT_family_str.call(null,i_13553)], null);
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.font__GT_css_map.call(null,i_13553);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13563 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13562);
if(cljs.core.truth_(result__12663__auto___13563)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13562),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13562);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13545){var t__12700__auto___13564 = e13545;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13564,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__13546 = cljs.core.rand_nth.call(null,wheel.hoplon.google_fonts.api.examples);
var i = cljs.core.nth.call(null,vec__13546,(0),null);
var _ = cljs.core.nth.call(null,vec__13546,(1),null);
var f = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join('');
var i__$1 = cljs.core.merge.call(null,i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),f], null));
var n = new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103).cljs$core$IFn$_invoke$arity$1(i__$1);
try{var values__12662__auto___13565 = (function (){var x__8035__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.font__GT_family_str.call(null,i__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13566 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13565);
if(cljs.core.truth_(result__12663__auto___13566)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13565),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13565);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13549){var t__12700__auto___13567 = e13549;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"\"",new cljs.core.Symbol(null,"n","n",-2092305744,null),"\", ",new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13567,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13568 = (function (){var x__8035__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.hoplon.google_fonts.api.font__GT_family_str.call(null,i__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.font__GT_css_str.call(null,i__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13569 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13568);
if(cljs.core.truth_(result__12663__auto___13569)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13568),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13568);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13550){var t__12700__auto___13570 = e13550;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"font-family: ",cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null)),";"),cljs.core.list(new cljs.core.Symbol(null,"font->css-str","font->css-str",-1273416107,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13570,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto__ = (function (){var x__8035__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),wheel.hoplon.google_fonts.api.font__GT_family_str.call(null,i__$1)], null);
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.hoplon.google_fonts.api.font__GT_css_map.call(null,i__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e13551){var t__12700__auto__ = e13551;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),cljs.core.list(new cljs.core.Symbol(null,"font->family-str","font->family-str",588679741,null),new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"font->css-map","font->css-map",-239242816,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_family_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_family_str;},new cljs.core.Symbol("wheel.hoplon.google-fonts.api","??font->family-str","wheel.hoplon.google-fonts.api/??font->family-str",-1132888919,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.hoplon.google-fonts.api","wheel.hoplon.google-fonts.api",-2123923084,null),new cljs.core.Symbol(null,"??font->family-str","??font->family-str",675571074,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/hoplon/google_fonts/api.cljs",28,1,121,121,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_family_str)?wheel.hoplon.google_fonts.api._QMARK__QMARK_font__GT_family_str.cljs$lang$test:null)]));

//# sourceMappingURL=api.js.map