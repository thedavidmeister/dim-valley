// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.abn.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.abn.core');
goog.require('wheel.link.hoplon');
goog.require('cljs.test');
wheel.abn.hoplon.abn = (function wheel$abn$hoplon$abn(n){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(wheel.abn.core.abr_search_url(n),wheel.abn.core.normalize(n));
});
wheel.abn.hoplon._QMARK__QMARK_abn = (function wheel$abn$hoplon$_QMARK__QMARK_abn(){
return cljs.test.test_var(wheel.abn.hoplon._QMARK__QMARK_abn.cljs$lang$var);
});
wheel.abn.hoplon._QMARK__QMARK_abn.cljs$lang$test = (function (){
var n = "12345678910";
var el = wheel.abn.hoplon.abn(n);
return wheel.link.hoplon.external_QMARK_(el,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910","12 345 678 910");
});

wheel.abn.hoplon._QMARK__QMARK_abn.cljs$lang$var = new cljs.core.Var(function(){return wheel.abn.hoplon._QMARK__QMARK_abn;},cljs.core.cst$sym$wheel$abn$hoplon_SLASH__QMARK__QMARK_abn,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$abn$hoplon,cljs.core.cst$sym$_QMARK__QMARK_abn,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ea2/9txbbm/index.html.out/wheel/abn/hoplon.cljs",15,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.abn.hoplon._QMARK__QMARK_abn)?wheel.abn.hoplon._QMARK__QMARK_abn.cljs$lang$test:null)]));
