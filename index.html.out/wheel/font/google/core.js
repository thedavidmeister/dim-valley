// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.font.google.core');
goog.require('cljs.core');
goog.require('wheel.font.config');
goog.require('wheel.font.google.config');
goog.require('cljs.spec');
goog.require('cljs.test');
/**
 * Given a font hash map, returns a string suitable in a Google Fonts URI
 */
wheel.font.google.core.font__GT_uri_str = (function wheel$font$google$core$font__GT_uri_str(font){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("wheel.font","font","wheel.font/font",110839917),font))){
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
wheel.font.google.core.fonts__GT_uri_str = (function wheel$font$google$core$fonts__GT_uri_str(fonts__$1){
if(cljs.core.sequential_QMARK_.call(null,fonts__$1)){
} else {
throw (new Error("Assert failed: (sequential? fonts)"));
}

return clojure.string.join.call(null,"|",cljs.core.map.call(null,wheel.font.google.core.font__GT_uri_str,fonts__$1));
});
/**
 * Given a sequence of fonts, returns the entire Google Fonts URL
 */
wheel.font.google.core.fonts__GT_url = (function wheel$font$google$core$fonts__GT_url(fonts__$1){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.core.fonts__GT_uri_str.call(null,fonts__$1))].join('');
});
wheel.font.google.core._QMARK__QMARK_font__GT_uri_str = (function wheel$font$google$core$_QMARK__QMARK_font__GT_uri_str(){
return cljs.test.test_var.call(null,wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$test = (function (){
var seq__15034 = cljs.core.seq.call(null,wheel.font.config.test_examples);
var chunk__15035 = null;
var count__15036 = (0);
var i__15037 = (0);
while(true){
if((i__15037 < count__15036)){
var vec__15038 = cljs.core._nth.call(null,chunk__15035,i__15037);
var i = cljs.core.nth.call(null,vec__15038,(0),null);
var o = cljs.core.nth.call(null,vec__15038,(1),null);
try{var values__12007__auto___15046 = (function (){var x__8694__auto__ = o;
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str.call(null,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___15047 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___15046);
if(cljs.core.truth_(result__12008__auto___15047)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___15046),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___15046);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15041){var t__12045__auto___15048 = e15041;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___15048,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__15049 = seq__15034;
var G__15050 = chunk__15035;
var G__15051 = count__15036;
var G__15052 = (i__15037 + (1));
seq__15034 = G__15049;
chunk__15035 = G__15050;
count__15036 = G__15051;
i__15037 = G__15052;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__15034);
if(temp__6738__auto__){
var seq__15034__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15034__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__15034__$1);
var G__15053 = cljs.core.chunk_rest.call(null,seq__15034__$1);
var G__15054 = c__8671__auto__;
var G__15055 = cljs.core.count.call(null,c__8671__auto__);
var G__15056 = (0);
seq__15034 = G__15053;
chunk__15035 = G__15054;
count__15036 = G__15055;
i__15037 = G__15056;
continue;
} else {
var vec__15042 = cljs.core.first.call(null,seq__15034__$1);
var i = cljs.core.nth.call(null,vec__15042,(0),null);
var o = cljs.core.nth.call(null,vec__15042,(1),null);
try{var values__12007__auto___15057 = (function (){var x__8694__auto__ = o;
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str.call(null,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___15058 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___15057);
if(cljs.core.truth_(result__12008__auto___15058)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___15057),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___15057);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15045){var t__12045__auto___15059 = e15045;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"font->uri-str","font->uri-str",608249974,null),new cljs.core.Symbol(null,"i","i",253690212,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___15059,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__15060 = cljs.core.next.call(null,seq__15034__$1);
var G__15061 = null;
var G__15062 = (0);
var G__15063 = (0);
seq__15034 = G__15060;
chunk__15035 = G__15061;
count__15036 = G__15062;
i__15037 = G__15063;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_font__GT_uri_str;},new cljs.core.Symbol("wheel.font.google.core","??font->uri-str","wheel.font.google.core/??font->uri-str",-1628733397,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.font.google.core","wheel.font.google.core",1912772390,null),new cljs.core.Symbol(null,"??font->uri-str","??font->uri-str",-1555084445,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/font/google/core.cljc",25,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_font__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_uri_str(){
return cljs.test.test_var.call(null,wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test = (function (){
try{var values__12007__auto___15076 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.font.google.core.fonts__GT_uri_str.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"");
var result__12008__auto___15077 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___15076);
if(cljs.core.truth_(result__12008__auto___15077)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___15076),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___15076);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15064){var t__12045__auto___15078 = e15064;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"",cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___15078,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__15065_15079 = cljs.core.rand_nth.call(null,wheel.font.config.test_examples);
var i_15080 = cljs.core.nth.call(null,vec__15065_15079,(0),null);
var o_15081 = cljs.core.nth.call(null,vec__15065_15079,(1),null);
try{var values__12007__auto___15082 = (function (){var x__8694__auto__ = o_15081;
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_uri_str.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_15080], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___15083 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___15082);
if(cljs.core.truth_(result__12008__auto___15083)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___15082),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___15082);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15068){var t__12045__auto___15084 = e15068;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"o","o",290524299,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___15084,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__15069 = cljs.core.rand_nth.call(null,wheel.font.config.test_examples);
var i = cljs.core.nth.call(null,vec__15069,(0),null);
var o = cljs.core.nth.call(null,vec__15069,(1),null);
var vec__15072 = cljs.core.rand_nth.call(null,wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__15072,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__15072,(1),null);
try{var values__12007__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_uri_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e15075){var t__12045__auto__ = e15075;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->uri-str","fonts->uri-str",-716962752,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str;},new cljs.core.Symbol("wheel.font.google.core","??fonts->uri-str","wheel.font.google.core/??fonts->uri-str",1668452877,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.font.google.core","wheel.font.google.core",1912772390,null),new cljs.core.Symbol(null,"??fonts->uri-str","??fonts->uri-str",-1898534955,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/font/google/core.cljc",26,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_url = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_url(){
return cljs.test.test_var.call(null,wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test = (function (){
try{var values__12007__auto___15097 = (function (){var x__8694__auto__ = wheel.font.google.config.base_url;
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___15098 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___15097);
if(cljs.core.truth_(result__12008__auto___15098)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("wheel.font.google.config","base-url","wheel.font.google.config/base-url",-1979734080,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___15097),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("wheel.font.google.config","base-url","wheel.font.google.config/base-url",-1979734080,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___15097);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15085){var t__12045__auto___15099 = e15085;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("wheel.font.google.config","base-url","wheel.font.google.config/base-url",-1979734080,null),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___15099,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__15086_15100 = cljs.core.rand_nth.call(null,wheel.font.config.test_examples);
var i_15101 = cljs.core.nth.call(null,vec__15086_15100,(0),null);
var o_15102 = cljs.core.nth.call(null,vec__15086_15100,(1),null);
try{var values__12007__auto___15103 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_15102)].join('');
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_15101], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___15104 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___15103);
if(cljs.core.truth_(result__12008__auto___15104)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.font.google.config","base-url","wheel.font.google.config/base-url",-1979734080,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___15103),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.font.google.config","base-url","wheel.font.google.config/base-url",-1979734080,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___15103);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15089){var t__12045__auto___15105 = e15089;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.font.google.config","base-url","wheel.font.google.config/base-url",-1979734080,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___15105,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var vec__15090 = cljs.core.rand_nth.call(null,wheel.font.config.test_examples);
var i = cljs.core.nth.call(null,vec__15090,(0),null);
var o = cljs.core.nth.call(null,vec__15090,(1),null);
var vec__15093 = cljs.core.rand_nth.call(null,wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__15093,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__15093,(1),null);
try{var values__12007__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.font.google.config","base-url","wheel.font.google.config/base-url",-1979734080,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.font.google.config","base-url","wheel.font.google.config/base-url",-1979734080,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e15096){var t__12045__auto__ = e15096;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol("wheel.font.google.config","base-url","wheel.font.google.config/base-url",-1979734080,null),new cljs.core.Symbol(null,"o","o",290524299,null),"|",new cljs.core.Symbol(null,"o'","o'",-1441609448,null)),cljs.core.list(new cljs.core.Symbol(null,"fonts->url","fonts->url",1130269164,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"i'","i'",1016858601,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_url;},new cljs.core.Symbol("wheel.font.google.core","??fonts->url","wheel.font.google.core/??fonts->url",-905233358,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.font.google.core","wheel.font.google.core",1912772390,null),new cljs.core.Symbol(null,"??fonts->url","??fonts->url",-307762822,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/font/google/core.cljc",22,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_url)?wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test:null)]));

//# sourceMappingURL=core.js.map