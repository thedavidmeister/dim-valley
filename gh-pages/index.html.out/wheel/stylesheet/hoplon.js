// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.stylesheet.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('medley.core');
goog.require('hoplon.core');
goog.require('cljs.test');
wheel.stylesheet.hoplon.link = (function wheel$stylesheet$hoplon$link(href){

var G__25348 = cljs.core.cst$kw$href;
var G__25349 = href;
var G__25350 = cljs.core.cst$kw$rel;
var G__25351 = "stylesheet";
var G__25352 = cljs.core.cst$kw$type;
var G__25353 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__25348,G__25349,G__25350,G__25351,G__25352,G__25353) : hoplon.core.link.call(null,G__25348,G__25349,G__25350,G__25351,G__25352,G__25353));
});
wheel.stylesheet.hoplon._QMARK__QMARK_link = (function wheel$stylesheet$hoplon$_QMARK__QMARK_link(){
return cljs.test.test_var(wheel.stylesheet.hoplon._QMARK__QMARK_link.cljs$lang$var);
});
wheel.stylesheet.hoplon._QMARK__QMARK_link.cljs$lang$test = (function (){
var href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(medley.core.random_uuid())].join('');
try{var values__18527__auto__ = (function (){var x__9196__auto__ = wheel.stylesheet.hoplon.link(href).outerHTML;
return cljs.core._conj((function (){var x__9196__auto____$1 = ["<link href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(href),"\" rel=\"stylesheet\" type=\"text/css\">"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$$_DASH_outerHTML,cljs.core.list(cljs.core.cst$sym$link,cljs.core.cst$sym$href)),cljs.core.list(cljs.core.cst$sym$str,"<link href=\"",cljs.core.cst$sym$href,"\" rel=\"stylesheet\" type=\"text/css\">")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$$_DASH_outerHTML,cljs.core.list(cljs.core.cst$sym$link,cljs.core.cst$sym$href)),cljs.core.list(cljs.core.cst$sym$str,"<link href=\"",cljs.core.cst$sym$href,"\" rel=\"stylesheet\" type=\"text/css\">")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e25354){var t__18572__auto__ = e25354;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$$_DASH_outerHTML,cljs.core.list(cljs.core.cst$sym$link,cljs.core.cst$sym$href)),cljs.core.list(cljs.core.cst$sym$str,"<link href=\"",cljs.core.cst$sym$href,"\" rel=\"stylesheet\" type=\"text/css\">")),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.stylesheet.hoplon._QMARK__QMARK_link.cljs$lang$var = new cljs.core.Var(function(){return wheel.stylesheet.hoplon._QMARK__QMARK_link;},cljs.core.cst$sym$wheel$stylesheet$hoplon_SLASH__QMARK__QMARK_link,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$stylesheet$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/stylesheet/hoplon.cljs",16,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.stylesheet.hoplon._QMARK__QMARK_link)?wheel.stylesheet.hoplon._QMARK__QMARK_link.cljs$lang$test:null)]));
