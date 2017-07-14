// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('cuerdas.regexp');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
cuerdas.regexp.xregexp = XRegExp;
/**
 * Return `true` if `x` is a regexp pattern
 *   instance.
 */
cuerdas.regexp.regexp_QMARK_ = (function cuerdas$regexp$regexp_QMARK_(x){
return cljs.core.regexp_QMARK_(x);
});
/**
 * Enhace the regexp instance with unicode support. This is noop
 *   in JVM because it already works perfectly with unicode.
 */
cuerdas.regexp.enhace = (function cuerdas$regexp$enhace(re){
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_(re))){
} else {
throw (new Error("Assert failed: (regexp? re)"));
}

var G__20748 = re.source;
var G__20749 = re.flags;
return (cuerdas.regexp.xregexp.cljs$core$IFn$_invoke$arity$2 ? cuerdas.regexp.xregexp.cljs$core$IFn$_invoke$arity$2(G__20748,G__20749) : cuerdas.regexp.xregexp.call(null,G__20748,G__20749));
});
/**
 * Escapes characters in the string that are not safe
 * to use in a RegExp.
 */
cuerdas.regexp.escape = (function cuerdas$regexp$escape(s){
return goog.string.regExpEscape(s);
});
