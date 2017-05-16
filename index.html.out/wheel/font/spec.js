// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.font.spec');
goog.require('cljs.core');
goog.require('wheel.font.config');
goog.require('cljs.spec');
goog.require('cljs.test');
cljs.spec.def_impl.call(null,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__14116){
return cljs.core.map_QMARK_.call(null,G__14116);
}),(function (G__14116){
return cljs.core.contains_QMARK_.call(null,G__14116,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103));
})], null),(function (G__14116){
return (cljs.core.map_QMARK_.call(null,G__14116)) && (cljs.core.contains_QMARK_.call(null,G__14116,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857)], null)])));
wheel.font.spec._QMARK__QMARK_spec = (function wheel$font$spec$_QMARK__QMARK_spec(){
return cljs.test.test_var.call(null,wheel.font.spec._QMARK__QMARK_spec.cljs$lang$var);
});
wheel.font.spec._QMARK__QMARK_spec.cljs$lang$test = (function (){
var seq__14117 = cljs.core.seq.call(null,wheel.font.config.test_examples);
var chunk__14118 = null;
var count__14119 = (0);
var i__14120 = (0);
while(true){
if((i__14120 < count__14119)){
var vec__14121 = cljs.core._nth.call(null,chunk__14118,i__14120);
var i = cljs.core.nth.call(null,vec__14121,(0),null);
var _ = cljs.core.nth.call(null,vec__14121,(1),null);
try{var values__12430__auto___14133 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12431__auto___14134 = cljs.core.apply.call(null,cljs.spec.valid_QMARK_,values__12430__auto___14133);
if(cljs.core.truth_(result__12431__auto___14134)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.valid_QMARK_,values__12430__auto___14133),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12430__auto___14133);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14124){var t__12468__auto___14135 = e14124;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14135,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14136 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.merge.call(null,i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12431__auto___14137 = cljs.core.apply.call(null,cljs.spec.valid_QMARK_,values__12430__auto___14136);
if(cljs.core.truth_(result__12431__auto___14137)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.valid_QMARK_,values__12430__auto___14136),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12430__auto___14136);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14125){var t__12468__auto___14138 = e14125;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14138,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14139 = (function (){var x__8694__auto__ = cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.dissoc.call(null,i,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12431__auto___14140 = cljs.core.apply.call(null,cljs.core.not,values__12430__auto___14139);
if(cljs.core.truth_(result__12431__auto___14140)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__12430__auto___14139),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__12430__auto___14139);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14126){var t__12468__auto___14141 = e14126;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14141,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__14142 = seq__14117;
var G__14143 = chunk__14118;
var G__14144 = count__14119;
var G__14145 = (i__14120 + (1));
seq__14117 = G__14142;
chunk__14118 = G__14143;
count__14119 = G__14144;
i__14120 = G__14145;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__14117);
if(temp__6738__auto__){
var seq__14117__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14117__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__14117__$1);
var G__14146 = cljs.core.chunk_rest.call(null,seq__14117__$1);
var G__14147 = c__8671__auto__;
var G__14148 = cljs.core.count.call(null,c__8671__auto__);
var G__14149 = (0);
seq__14117 = G__14146;
chunk__14118 = G__14147;
count__14119 = G__14148;
i__14120 = G__14149;
continue;
} else {
var vec__14127 = cljs.core.first.call(null,seq__14117__$1);
var i = cljs.core.nth.call(null,vec__14127,(0),null);
var _ = cljs.core.nth.call(null,vec__14127,(1),null);
try{var values__12430__auto___14150 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12431__auto___14151 = cljs.core.apply.call(null,cljs.spec.valid_QMARK_,values__12430__auto___14150);
if(cljs.core.truth_(result__12431__auto___14151)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.valid_QMARK_,values__12430__auto___14150),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12430__auto___14150);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14130){var t__12468__auto___14152 = e14130;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),new cljs.core.Symbol(null,"i","i",253690212,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14152,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14153 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.merge.call(null,i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917));
var result__12431__auto___14154 = cljs.core.apply.call(null,cljs.spec.valid_QMARK_,values__12430__auto___14153);
if(cljs.core.truth_(result__12431__auto___14154)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.valid_QMARK_,values__12430__auto___14153),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),values__12430__auto___14153);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14131){var t__12468__auto___14155 = e14131;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"baz"], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14155,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14156 = (function (){var x__8694__auto__ = cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.dissoc.call(null,i,new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12431__auto___14157 = cljs.core.apply.call(null,cljs.core.not,values__12430__auto___14156);
if(cljs.core.truth_(result__12431__auto___14157)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__12430__auto___14156),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__12430__auto___14156);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14132){var t__12468__auto___14158 = e14132;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("spec","valid?","spec/valid?",1431643689,null),new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14158,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__14159 = cljs.core.next.call(null,seq__14117__$1);
var G__14160 = null;
var G__14161 = (0);
var G__14162 = (0);
seq__14117 = G__14159;
chunk__14118 = G__14160;
count__14119 = G__14161;
i__14120 = G__14162;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.spec._QMARK__QMARK_spec.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.spec._QMARK__QMARK_spec;},new cljs.core.Symbol("wheel.font.spec","??spec","wheel.font.spec/??spec",-817389885,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.font.spec","wheel.font.spec",-1511852501,null),new cljs.core.Symbol(null,"??spec","??spec",-833272348,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/1ici/9txbbm/index.html.out/wheel/font/spec.cljc",16,1,29,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.spec._QMARK__QMARK_spec)?wheel.font.spec._QMARK__QMARK_spec.cljs$lang$test:null)]));

//# sourceMappingURL=spec.js.map