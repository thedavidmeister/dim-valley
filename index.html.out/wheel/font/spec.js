// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.font.spec');
goog.require('cljs.core');
goog.require('wheel.font.config');
goog.require('cljs.spec');
goog.require('cljs.test');
cljs.spec.def_impl.call(null,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__14260){
return cljs.core.map_QMARK_.call(null,G__14260);
}),(function (G__14260){
return cljs.core.contains_QMARK_.call(null,G__14260,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103));
})], null),(function (G__14260){
return (cljs.core.map_QMARK_.call(null,G__14260)) && (cljs.core.contains_QMARK_.call(null,G__14260,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null)])));
wheel.font.spec._QMARK__QMARK_spec = (function wheel$font$spec$_QMARK__QMARK_spec(){
return cljs.test.test_var.call(null,wheel.font.spec._QMARK__QMARK_spec.cljs$lang$var);
});
wheel.font.spec._QMARK__QMARK_spec.cljs$lang$test = (function (){
var seq__14261 = cljs.core.seq.call(null,wheel.font.config.test_examples);
var chunk__14262 = null;
var count__14263 = (0);
var i__14264 = (0);
while(true){
if((i__14264 < count__14263)){
var vec__14265 = cljs.core._nth.call(null,chunk__14262,i__14264);
var i = cljs.core.nth.call(null,vec__14265,(0),null);
var _ = cljs.core.nth.call(null,vec__14265,(1),null);
try{var values__12007__auto___14277 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12008__auto___14278 = cljs.core.apply.call(null,cljs.spec.valid_QMARK_,values__12007__auto___14277);
if(cljs.core.truth_(result__12008__auto___14278)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.valid_QMARK_,values__12007__auto___14277),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12007__auto___14277);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14268){var t__12045__auto___14279 = e14268;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14279,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14280 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.merge.call(null,i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12008__auto___14281 = cljs.core.apply.call(null,cljs.spec.valid_QMARK_,values__12007__auto___14280);
if(cljs.core.truth_(result__12008__auto___14281)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.valid_QMARK_,values__12007__auto___14280),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12007__auto___14280);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14269){var t__12045__auto___14282 = e14269;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14282,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14283 = (function (){var x__8694__auto__ = cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.dissoc.call(null,i,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12008__auto___14284 = cljs.core.apply.call(null,cljs.core.not,values__12007__auto___14283);
if(cljs.core.truth_(result__12008__auto___14284)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__12007__auto___14283),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__12007__auto___14283);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14270){var t__12045__auto___14285 = e14270;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14285,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__14286 = seq__14261;
var G__14287 = chunk__14262;
var G__14288 = count__14263;
var G__14289 = (i__14264 + (1));
seq__14261 = G__14286;
chunk__14262 = G__14287;
count__14263 = G__14288;
i__14264 = G__14289;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__14261);
if(temp__6738__auto__){
var seq__14261__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14261__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__14261__$1);
var G__14290 = cljs.core.chunk_rest.call(null,seq__14261__$1);
var G__14291 = c__8671__auto__;
var G__14292 = cljs.core.count.call(null,c__8671__auto__);
var G__14293 = (0);
seq__14261 = G__14290;
chunk__14262 = G__14291;
count__14263 = G__14292;
i__14264 = G__14293;
continue;
} else {
var vec__14271 = cljs.core.first.call(null,seq__14261__$1);
var i = cljs.core.nth.call(null,vec__14271,(0),null);
var _ = cljs.core.nth.call(null,vec__14271,(1),null);
try{var values__12007__auto___14294 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12008__auto___14295 = cljs.core.apply.call(null,cljs.spec.valid_QMARK_,values__12007__auto___14294);
if(cljs.core.truth_(result__12008__auto___14295)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.valid_QMARK_,values__12007__auto___14294),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12007__auto___14294);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14274){var t__12045__auto___14296 = e14274;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14296,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14297 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.merge.call(null,i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12008__auto___14298 = cljs.core.apply.call(null,cljs.spec.valid_QMARK_,values__12007__auto___14297);
if(cljs.core.truth_(result__12008__auto___14298)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.valid_QMARK_,values__12007__auto___14297),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12007__auto___14297);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14275){var t__12045__auto___14299 = e14275;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14299,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14300 = (function (){var x__8694__auto__ = cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.dissoc.call(null,i,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12008__auto___14301 = cljs.core.apply.call(null,cljs.core.not,values__12007__auto___14300);
if(cljs.core.truth_(result__12008__auto___14301)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__12007__auto___14300),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__12007__auto___14300);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14276){var t__12045__auto___14302 = e14276;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14302,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__14303 = cljs.core.next.call(null,seq__14261__$1);
var G__14304 = null;
var G__14305 = (0);
var G__14306 = (0);
seq__14261 = G__14303;
chunk__14262 = G__14304;
count__14263 = G__14305;
i__14264 = G__14306;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.spec._QMARK__QMARK_spec.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.spec._QMARK__QMARK_spec;},new cljs.core.Symbol("wheel.font.spec","??spec","wheel.font.spec/??spec",-817389885,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.font.spec","wheel.font.spec",-1511852501,null),new cljs.core.Symbol(null,"??spec","??spec",-833272348,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/font/spec.cljc",16,1,29,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.spec._QMARK__QMARK_spec)?wheel.font.spec._QMARK__QMARK_spec.cljs$lang$test:null)]));

//# sourceMappingURL=spec.js.map