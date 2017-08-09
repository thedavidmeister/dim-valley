// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('cuerdas.regexp');
goog.require('goog.string');
goog.require('cljs.reader');
cuerdas.core.keyword_STAR_ = cljs.core.keyword;
/**
 * Checks if a string is empty.
 */
cuerdas.core.empty_QMARK_ = (function cuerdas$core$empty_QMARK_(s){
if(typeof s === 'string'){
return (cljs.core.count(s) === (0));
} else {
return null;
}
});
/**
 * Convenient helper for check emptines or if value is nil.
 */
cuerdas.core.empty_or_nil_QMARK_ = (function cuerdas$core$empty_or_nil_QMARK_(s){
var or__7760__auto__ = (s == null);
if(or__7760__auto__){
return or__7760__auto__;
} else {
return cuerdas.core.empty_QMARK_(s);
}
});
/**
 * Determines whether a string contains a substring.
 */
cuerdas.core.includes_QMARK_ = (function cuerdas$core$includes_QMARK_(s,subs){
if(typeof s === 'string'){
if((subs == null)){
return false;
} else {
return goog.string.contains(s,subs);
}
} else {
return null;
}
});
/**
 * Extracts a section of a string and returns a new string.
 */
cuerdas.core.slice = (function cuerdas$core$slice(var_args){
var args20670 = [];
var len__8981__auto___20673 = arguments.length;
var i__8982__auto___20674 = (0);
while(true){
if((i__8982__auto___20674 < len__8981__auto___20673)){
args20670.push((arguments[i__8982__auto___20674]));

var G__20675 = (i__8982__auto___20674 + (1));
i__8982__auto___20674 = G__20675;
continue;
} else {
}
break;
}

var G__20672 = args20670.length;
switch (G__20672) {
case 2:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20670.length)].join('')));

}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2 = (function (s,begin){
if(typeof s === 'string'){
return s.slice(begin);
} else {
return null;
}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3 = (function (s,begin,end){
if(typeof s === 'string'){
return s.slice(begin,end);
} else {
return null;
}
});

cuerdas.core.slice.cljs$lang$maxFixedArity = 3;

/**
 * Check if the string starts with prefix.
 */
cuerdas.core.starts_with_QMARK_ = (function cuerdas$core$starts_with_QMARK_(s,prefix){
if(typeof s === 'string'){
if((prefix == null)){
return false;
} else {
if(cljs.core.truth_(cuerdas.core.empty_QMARK_(prefix))){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s.lastIndexOf(prefix,(0)),(0));

}
}
} else {
return null;
}
});
/**
 * Check if the string ends with suffix.
 */
cuerdas.core.ends_with_QMARK_ = (function cuerdas$core$ends_with_QMARK_(s,suffix){
if(typeof s === 'string'){
if((s == null)){
return false;
} else {
if((suffix == null)){
return false;
} else {
if(cljs.core.truth_(cuerdas.core.empty_QMARK_(suffix))){
return true;
} else {
var l = (cljs.core.count(s) - cljs.core.count(suffix));
return ((l >= (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s.indexOf(suffix,l),l));

}
}
}
} else {
return null;
}
});
/**
 * Converts string to all lower-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-lower`
 */
cuerdas.core.lower = (function cuerdas$core$lower(s){
if(typeof s === 'string'){
return s.toLowerCase();
} else {
return null;
}
});
/**
 * Converts string to all upper-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-upper`
 */
cuerdas.core.upper = (function cuerdas$core$upper(s){
if(typeof s === 'string'){
return s.toUpperCase();
} else {
return null;
}
});
/**
 * Converts string to all lower-case respecting
 *   the current system locale.
 * 
 *   In the jvm you can provide a concrete locale to
 *   use as the second optional argument.
 */
cuerdas.core.locale_lower = (function cuerdas$core$locale_lower(s){
if(typeof s === 'string'){
return s.toLocaleLowerCase();
} else {
return null;
}
});
/**
 * Converts string to all upper-case respecting
 *   the current system locale.
 * 
 *   In the jvm you can provide a concrete locale to
 *   use as the second optional argument.
 */
cuerdas.core.locale_upper = (function cuerdas$core$locale_upper(s){
if(typeof s === 'string'){
return s.toLocaleUpperCase();
} else {
return null;
}
});
/**
 * Compare strings in a case-insensitive manner.
 * 
 *   This function is locale independent.
 */
cuerdas.core.caseless_EQ_ = (function cuerdas$core$caseless_EQ_(s1,s2){
if(typeof s1 === 'string'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.lower(s1),cuerdas.core.lower(s2));
} else {
return null;
}
});
/**
 * Compare strings in a case-insensitive manner
 *   respecting the current locale.
 * 
 *   An optional locale can be passed as third
 *   argument (only on JVM).
 */
cuerdas.core.locale_caseless_EQ_ = (function cuerdas$core$locale_caseless_EQ_(s1,s2){
if(typeof s1 === 'string'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.locale_lower(s1),cuerdas.core.locale_lower(s2));
} else {
return null;
}
});
/**
 * Checks if a string is empty or contains only whitespace.
 */
cuerdas.core.blank_QMARK_ = (function cuerdas$core$blank_QMARK_(s){
if(typeof s === 'string'){
return ((cljs.core.count(s) === (0))) || (cljs.core.boolean$(cljs.core.re_matches(cuerdas.regexp.enhace(/^[\s\p{Z}]+$/),s)));
} else {
return null;
}
});
/**
 * Checks if a string contains only alpha characters.
 */
cuerdas.core.alpha_QMARK_ = (function cuerdas$core$alpha_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/^[a-zA-Z]+$/,s));
} else {
return null;
}
});
/**
 * Checks if a string contains only digit characters.
 */
cuerdas.core.digits_QMARK_ = (function cuerdas$core$digits_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/^[0-9]+$/,s));
} else {
return null;
}
});
/**
 * Checks if a string contains only alphanumeric characters.
 */
cuerdas.core.alnum_QMARK_ = (function cuerdas$core$alnum_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/^[a-zA-Z0-9]+$/,s));
} else {
return null;
}
});
/**
 * Checks if a string contains only the word characters.
 *   This function will use all the unicode range.
 */
cuerdas.core.word_QMARK_ = (function cuerdas$core$word_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(cuerdas.regexp.enhace(/^[\p{N}\p{L}_-]+$/),s));
} else {
return null;
}
});
/**
 * Checks if string contains only letters.
 *   This function will use all the unicode range.
 */
cuerdas.core.letters_QMARK_ = (function cuerdas$core$letters_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(cuerdas.regexp.enhace(/^\p{L}+$/),s));
} else {
return null;
}
});
/**
 * Check if a string contains only numeric values.
 */
cuerdas.core.numeric_QMARK_ = (function cuerdas$core$numeric_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$/,s));
} else {
return null;
}
});
/**
 * Removes whitespace or specified characters
 *   from both ends of string.
 */
cuerdas.core.trim = (function cuerdas$core$trim(var_args){
var args20677 = [];
var len__8981__auto___20680 = arguments.length;
var i__8982__auto___20681 = (0);
while(true){
if((i__8982__auto___20681 < len__8981__auto___20680)){
args20677.push((arguments[i__8982__auto___20681]));

var G__20682 = (i__8982__auto___20681 + (1));
i__8982__auto___20681 = G__20682;
continue;
} else {
}
break;
}

var G__20679 = args20677.length;
switch (G__20679) {
case 1:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20677.length)].join('')));

}
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2(s,"\n\t\f\r ");
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.regexp.escape(chs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
var rxstr__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+$")].join('');
var rx = cljs.core.re_pattern(rxstr__$1);
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,rx,"") : cuerdas.core.replace.call(null,s,rx,""));
} else {
return null;
}
});

cuerdas.core.trim.cljs$lang$maxFixedArity = 2;

/**
 * Removes whitespace or specified characters
 *   from right side of string.
 */
cuerdas.core.rtrim = (function cuerdas$core$rtrim(var_args){
var args20684 = [];
var len__8981__auto___20687 = arguments.length;
var i__8982__auto___20688 = (0);
while(true){
if((i__8982__auto___20688 < len__8981__auto___20687)){
args20684.push((arguments[i__8982__auto___20688]));

var G__20689 = (i__8982__auto___20688 + (1));
i__8982__auto___20688 = G__20689;
continue;
} else {
}
break;
}

var G__20686 = args20684.length;
switch (G__20686) {
case 1:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20684.length)].join('')));

}
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2(s,"\n\t\f\r ");
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.regexp.escape(chs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
var rxstr__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+$")].join('');
var rx = cljs.core.re_pattern(rxstr__$1);
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,rx,"") : cuerdas.core.replace.call(null,s,rx,""));
} else {
return null;
}
});

cuerdas.core.rtrim.cljs$lang$maxFixedArity = 2;

/**
 * Removes whitespace or specified characters
 *   from left side of string.
 */
cuerdas.core.ltrim = (function cuerdas$core$ltrim(var_args){
var args20691 = [];
var len__8981__auto___20694 = arguments.length;
var i__8982__auto___20695 = (0);
while(true){
if((i__8982__auto___20695 < len__8981__auto___20694)){
args20691.push((arguments[i__8982__auto___20695]));

var G__20696 = (i__8982__auto___20695 + (1));
i__8982__auto___20695 = G__20696;
continue;
} else {
}
break;
}

var G__20693 = args20691.length;
switch (G__20693) {
case 1:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20691.length)].join('')));

}
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2(s,"\b\t\f\r ");
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.regexp.escape(chs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
var rxstr__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+")].join('');
var rx = cljs.core.re_pattern(rxstr__$1);
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,rx,"") : cuerdas.core.replace.call(null,s,rx,""));
} else {
return null;
}
});

cuerdas.core.ltrim.cljs$lang$maxFixedArity = 2;

/**
 * Trim and replace multiple spaces with
 *   a single space.
 */
cuerdas.core.clean = (function cuerdas$core$clean(s){
var G__20701 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(s);
var G__20702 = cuerdas.regexp.enhace(/[\s\p{Z}]+/);
var G__20703 = " ";
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(G__20701,G__20702,G__20703) : cuerdas.core.replace.call(null,G__20701,G__20702,G__20703));
});
cuerdas.core.strip = cuerdas.core.trim;
cuerdas.core.rstrip = cuerdas.core.rtrim;
cuerdas.core.lstrip = cuerdas.core.ltrim;
/**
 * Strip prefix in more efficient way.
 */
cuerdas.core.strip_prefix = (function cuerdas$core$strip_prefix(s,prefix){
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_(s,prefix))){
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,cljs.core.count(prefix.toString()),cljs.core.count(s));
} else {
return s;
}
});
/**
 * Strip suffix in more efficient way.
 */
cuerdas.core.strip_suffix = (function cuerdas$core$strip_suffix(s,suffix){
if(cljs.core.truth_(cuerdas.core.ends_with_QMARK_(s,suffix))){
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),(cljs.core.count(s) - cljs.core.count(suffix.toString())));
} else {
return s;
}
});
/**
 * Repeats string n times.
 */
cuerdas.core.repeat = (function cuerdas$core$repeat(var_args){
var args20704 = [];
var len__8981__auto___20707 = arguments.length;
var i__8982__auto___20708 = (0);
while(true){
if((i__8982__auto___20708 < len__8981__auto___20707)){
args20704.push((arguments[i__8982__auto___20708]));

var G__20709 = (i__8982__auto___20708 + (1));
i__8982__auto___20708 = G__20709;
continue;
} else {
}
break;
}

var G__20706 = args20704.length;
switch (G__20706) {
case 1:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20704.length)].join('')));

}
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(s,(1));
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
if(typeof s === 'string'){
return goog.string.repeat(s,n);
} else {
return null;
}
});

cuerdas.core.repeat.cljs$lang$maxFixedArity = 2;

cuerdas.core.replace_all = (function cuerdas$core$replace_all(s,re,replacement){
var flags = re.flags;
var flags__$1 = (cljs.core.truth_(cuerdas.core.includes_QMARK_(flags,"g"))?flags:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(flags),cljs.core.str.cljs$core$IFn$_invoke$arity$1("g")].join(''));
var rx = (new RegExp(re.source,flags__$1));
return s.replace(rx,replacement);
});
cuerdas.core.replace_STAR_ = (function cuerdas$core$replace_STAR_(s,match,replacement){
if(typeof match === 'string'){
return clojure.string.replace(s,match,replacement);
} else {
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_(match))){
if(typeof replacement === 'string'){
return cuerdas.core.replace_all(s,match,replacement);
} else {
return cuerdas.core.replace_all(s,match,clojure.string.replace_with(replacement));
}
} else {
return null;
}
}
});
/**
 * Replaces all instance of match with replacement in s.
 * 
 *   The replacement is literal (i.e. none of its characters are treated
 *   specially) for all cases above except pattern / string.
 * 
 *   In match is pattern instance, replacement can contain $1, $2, etc.
 *   will be substituted with string that matcher the corresponding
 *   parenthesized group in pattern.
 * 
 *   If you wish your replacement string to be used literary,
 *   use `(cuerdas.regexp/escape replacement)`.
 * 
 *   Example:
 *  (replace "Almost Pig Latin" #"\b(\w)(\w+)\b" "$2$1ay")
 *  ;; => "lmostAay igPay atinLay"
 *   
 */
cuerdas.core.replace = (function cuerdas$core$replace(s,match,replacement){
if(typeof s === 'string'){
return cuerdas.core.replace_STAR_(s,match,replacement);
} else {
return null;
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.replace_first = (function cuerdas$core$replace_first(s,match,replacement){
if(typeof s === 'string'){
return clojure.string.replace_first(s,match,replacement);
} else {
return null;
}
});
/**
 * Truncates a string to a certain length and adds '...'
 *   if necessary.
 */
cuerdas.core.prune = (function cuerdas$core$prune(var_args){
var args20711 = [];
var len__8981__auto___20714 = arguments.length;
var i__8982__auto___20715 = (0);
while(true){
if((i__8982__auto___20715 < len__8981__auto___20714)){
args20711.push((arguments[i__8982__auto___20715]));

var G__20716 = (i__8982__auto___20715 + (1));
i__8982__auto___20715 = G__20716;
continue;
} else {
}
break;
}

var G__20713 = args20711.length;
switch (G__20713) {
case 2:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20711.length)].join('')));

}
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2 = (function (s,num){
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3(s,num,"...");
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3 = (function (s,num,subs){
if((cljs.core.count(s) <= num)){
return s;
} else {
var tmpl = (function (c){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.upper(c),cuerdas.core.lower(c))){
return "A";
} else {
return " ";
}
});
var template = cuerdas.core.replace(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),(num + (1))),/.(?=\W*\w*$)/,tmpl);
var tmp = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(template,(cljs.core.count(template) - (2)));
var template__$1 = (cljs.core.truth_(tmp.match(/\w\w/))?cuerdas.core.replace_first(template,/\s*\S+$/,""):cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(template,(0),(cljs.core.count(template) - (1)))));
if((cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(template__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs)].join('')) > cljs.core.count(s))){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),cljs.core.count(template__$1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs)].join('');
}
}
});

cuerdas.core.prune.cljs$lang$maxFixedArity = 3;

/**
 * Takes a string and replaces newlines with a space.
 *   Multiple lines are replaced with a single space.
 */
cuerdas.core.strip_newlines = (function cuerdas$core$strip_newlines(s){
return cuerdas.core.replace(s,/(\r\n|\r|\n)+/," ");
});
/**
 * Splits a string on a separator a limited
 *   number of times. The separator can be a string,
 *   character or Pattern (clj) / RegExp (cljs) instance.
 */
cuerdas.core.split = (function cuerdas$core$split(var_args){
var args20718 = [];
var len__8981__auto___20721 = arguments.length;
var i__8982__auto___20722 = (0);
while(true){
if((i__8982__auto___20722 < len__8981__auto___20721)){
args20718.push((arguments[i__8982__auto___20722]));

var G__20723 = (i__8982__auto___20722 + (1));
i__8982__auto___20722 = G__20723;
continue;
} else {
}
break;
}

var G__20720 = args20718.length;
switch (G__20720) {
case 1:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20718.length)].join('')));

}
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(s,/\s+/,null);
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$2 = (function (s,sep){
if((s == null)){
return s;
} else {
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_(sep))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,sep);
} else {
if(typeof sep === 'string'){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep)));
} else {
if(cljs.core.char_QMARK_(sep)){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep.toString())));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sep,sep], null));

}
}
}
}
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$3 = (function (s,sep,num){
if((s == null)){
return s;
} else {
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_(sep))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,sep,num);
} else {
if(typeof sep === 'string'){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep)),num);
} else {
if(cljs.core.char_QMARK_(sep)){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep.toString())),num);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sep,sep], null));

}
}
}
}
});

cuerdas.core.split.cljs$lang$maxFixedArity = 3;

/**
 * Return string reversed.
 */
cuerdas.core.reverse = (function cuerdas$core$reverse(s){
if(typeof s === 'string'){
return clojure.string.reverse(s);
} else {
return null;
}
});
/**
 * Split a string in a seq of chars.
 */
cuerdas.core.chars = (function cuerdas$core$chars(s){
if(typeof s === 'string'){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(s.split(""));
} else {
return null;
}
});
/**
 * Return a list of the lines in the string.
 */
cuerdas.core.lines = (function cuerdas$core$lines(s){
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(s,/\n|\r\n/);
});
/**
 * Returns a new string joining a list of strings with a newline char (\n).
 */
cuerdas.core.unlines = (function cuerdas$core$unlines(s){
if(cljs.core.sequential_QMARK_(s)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",s);
} else {
return null;
}
});
/**
 * Returns a vector of the words in the string.
 */
cuerdas.core.words = (function cuerdas$core$words(var_args){
var args20725 = [];
var len__8981__auto___20728 = arguments.length;
var i__8982__auto___20729 = (0);
while(true){
if((i__8982__auto___20729 < len__8981__auto___20728)){
args20725.push((arguments[i__8982__auto___20729]));

var G__20730 = (i__8982__auto___20729 + (1));
i__8982__auto___20729 = G__20730;
continue;
} else {
}
break;
}

var G__20727 = args20725.length;
switch (G__20727) {
case 1:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20725.length)].join('')));

}
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2(s,cuerdas.regexp.enhace(/[\p{N}\p{L}_-]+/));
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
if(typeof s === 'string'){
return cljs.core.vec(cljs.core.re_seq(re,s));
} else {
return null;
}
});

cuerdas.core.words.cljs$lang$maxFixedArity = 2;

cuerdas.core.interpolate_format = (function cuerdas$core$interpolate_format(s,params){
var on_match = (function cuerdas$core$interpolate_format_$_on_match(match){
var val = cljs.reader.read_string(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),(1)),"$"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,(1)):cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(match,(2),(-2))));
var val__$1 = (((val instanceof cljs.core.Symbol))?(cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1(val) : cuerdas.core.keyword_STAR_.call(null,val)):val);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,val__$1,""))].join('');
});
var $ = /(?:%\([\d\w\:\_\-]+\)s|\$[\w\d\:\_\-]+)/;
return cuerdas.core.replace(s,$,on_match);
});
cuerdas.core.indexed_format = (function cuerdas$core$indexed_format(s,params){
var params__$1 = cljs.core.clj__GT_js((function (){var or__7760__auto__ = params;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var rx = (new RegExp("%s","g"));
return cuerdas.core.replace(s,rx,((function (params__$1,rx){
return (function (_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.count(params__$1) === (0)))?"%s":params__$1.shift()))].join('');
});})(params__$1,rx))
);
});
/**
 * Simple string interpolation.
 */
cuerdas.core.format = (function cuerdas$core$format(var_args){
var args__8988__auto__ = [];
var len__8981__auto___20734 = arguments.length;
var i__8982__auto___20735 = (0);
while(true){
if((i__8982__auto___20735 < len__8981__auto___20734)){
args__8988__auto__.push((arguments[i__8982__auto___20735]));

var G__20736 = (i__8982__auto___20735 + (1));
i__8982__auto___20735 = G__20736;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,more){
if(typeof s === 'string'){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(more),(1))) && (cljs.core.associative_QMARK_(cljs.core.first(more)))){
return cuerdas.core.interpolate_format(s,cljs.core.first(more));
} else {
return cuerdas.core.indexed_format(s,more);
}
} else {
return null;
}
});

cuerdas.core.format.cljs$lang$maxFixedArity = (1);

cuerdas.core.format.cljs$lang$applyTo = (function (seq20732){
var G__20733 = cljs.core.first(seq20732);
var seq20732__$1 = cljs.core.next(seq20732);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(G__20733,seq20732__$1);
});

/**
 * A shorter alias to `format` function.
 */
cuerdas.core.fmt = cuerdas.core.format;
/**
 * Joins strings together with given separator.
 */
cuerdas.core.join = (function cuerdas$core$join(var_args){
var args20737 = [];
var len__8981__auto___20740 = arguments.length;
var i__8982__auto___20741 = (0);
while(true){
if((i__8982__auto___20741 < len__8981__auto___20740)){
args20737.push((arguments[i__8982__auto___20741]));

var G__20742 = (i__8982__auto___20741 + (1));
i__8982__auto___20741 = G__20742;
continue;
} else {
}
break;
}

var G__20739 = args20737.length;
switch (G__20739) {
case 1:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20737.length)].join('')));

}
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,coll);
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(separator,coll));
});

cuerdas.core.join.cljs$lang$maxFixedArity = 2;

/**
 * Surround a string with another string or character.
 */
cuerdas.core.surround = (function cuerdas$core$surround(s,wrap){
if(typeof s === 'string'){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
} else {
return null;
}
});
/**
 * Unsurround a string surrounded by another string or character.
 */
cuerdas.core.unsurround = (function cuerdas$core$unsurround(s,surrounding){
var surrounding__$1 = surrounding.toString();
var length = cljs.core.count(surrounding__$1);
var fstr = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),length);
var slength = cljs.core.count(s);
var rightend = (slength - length);
var lstr = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,rightend,slength);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fstr,surrounding__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lstr,surrounding__$1))){
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,length,rightend);
} else {
return s;
}
});
/**
 * Quotes a string.
 */
cuerdas.core.quote = (function cuerdas$core$quote(var_args){
var args20744 = [];
var len__8981__auto___20747 = arguments.length;
var i__8982__auto___20748 = (0);
while(true){
if((i__8982__auto___20748 < len__8981__auto___20747)){
args20744.push((arguments[i__8982__auto___20748]));

var G__20749 = (i__8982__auto___20748 + (1));
i__8982__auto___20748 = G__20749;
continue;
} else {
}
break;
}

var G__20746 = args20744.length;
switch (G__20746) {
case 1:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20744.length)].join('')));

}
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.surround(s,"\"");
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.surround(s,qchar);
});

cuerdas.core.quote.cljs$lang$maxFixedArity = 2;

/**
 * Unquote a string.
 */
cuerdas.core.unquote = (function cuerdas$core$unquote(var_args){
var args20751 = [];
var len__8981__auto___20754 = arguments.length;
var i__8982__auto___20755 = (0);
while(true){
if((i__8982__auto___20755 < len__8981__auto___20754)){
args20751.push((arguments[i__8982__auto___20755]));

var G__20756 = (i__8982__auto___20755 + (1));
i__8982__auto___20755 = G__20756;
continue;
} else {
}
break;
}

var G__20753 = args20751.length;
switch (G__20753) {
case 1:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20751.length)].join('')));

}
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.unsurround(s,"\"");
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.unsurround(s,qchar);
});

cuerdas.core.unquote.cljs$lang$maxFixedArity = 2;

cuerdas.core.stylize_split = (function cuerdas$core$stylize_split(s){
var re1 = cuerdas.regexp.enhace(/(\p{Lu}+[\p{Ll}\u0027\p{Ps}\p{Pe}]*)/);
var re2 = cuerdas.regexp.enhace(/[^\p{L}\p{N}\u0027\p{Ps}\p{Pe}]+/);
var G__20759 = s;
var G__20759__$1 = (((G__20759 == null))?null:cljs.core.name(G__20759));
var G__20759__$2 = (((G__20759__$1 == null))?null:cuerdas.core.replace(G__20759__$1,re1,"-$1"));
var G__20759__$3 = (((G__20759__$2 == null))?null:cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(G__20759__$2,re2));
if((G__20759__$3 == null)){
return null;
} else {
return cljs.core.seq(G__20759__$3);
}
});
cuerdas.core.stylize_join = (function cuerdas$core$stylize_join(var_args){
var args20760 = [];
var len__8981__auto___20767 = arguments.length;
var i__8982__auto___20768 = (0);
while(true){
if((i__8982__auto___20768 < len__8981__auto___20767)){
args20760.push((arguments[i__8982__auto___20768]));

var G__20769 = (i__8982__auto___20768 + (1));
i__8982__auto___20768 = G__20769;
continue;
} else {
}
break;
}

var G__20762 = args20760.length;
switch (G__20762) {
case 3:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20760.length)].join('')));

}
});

cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3 = (function (coll,every_fn,join_with){
if(cljs.core.seq(coll)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(join_with,cljs.core.map.cljs$core$IFn$_invoke$arity$2(every_fn,coll));
} else {
return null;
}
});

cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4 = (function (p__20763,first_fn,rest_fn,join_with){
var vec__20764 = p__20763;
var seq__20765 = cljs.core.seq(vec__20764);
var first__20766 = cljs.core.first(seq__20765);
var seq__20765__$1 = cljs.core.next(seq__20765);
var fst = first__20766;
var rst = seq__20765__$1;
if(typeof fst === 'string'){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(join_with,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(fst) : first_fn.call(null,fst)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rst)));
} else {
return null;
}
});

cuerdas.core.stylize_join.cljs$lang$maxFixedArity = 4;

cuerdas.core.stylize = (function cuerdas$core$stylize(var_args){
var args20772 = [];
var len__8981__auto___20776 = arguments.length;
var i__8982__auto___20777 = (0);
while(true){
if((i__8982__auto___20777 < len__8981__auto___20776)){
args20772.push((arguments[i__8982__auto___20777]));

var G__20778 = (i__8982__auto___20777 + (1));
i__8982__auto___20777 = G__20778;
continue;
} else {
}
break;
}

var G__20774 = args20772.length;
switch (G__20774) {
case 3:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20772.length)].join('')));

}
});

cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3 = (function (s,every_fn,join_with){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4(s,every_fn,every_fn,join_with);
});

cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4 = (function (s,first_fn,rest_fn,join_with){
var remove_empty = (function (p1__20771_SHARP_){
return cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cuerdas.core.empty_QMARK_,p1__20771_SHARP_));
});
var G__20775 = cuerdas.core.stylize_split(s);
var G__20775__$1 = (((G__20775 == null))?null:remove_empty(G__20775));
if((G__20775__$1 == null)){
return null;
} else {
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4(G__20775__$1,first_fn,rest_fn,join_with);
}
});

cuerdas.core.stylize.cljs$lang$maxFixedArity = 4;

/**
 * Uppercases the first character of a string or keyword
 */
cuerdas.core.capital = (function cuerdas$core$capital(s){
if(cljs.core.truth_((function (){var and__7748__auto__ = typeof s === 'string';
if(and__7748__auto__){
return cljs.core.not_empty(s);
} else {
return and__7748__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.upper(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),cljs.core.count(s)))].join('');
} else {
return null;
}
});
/**
 * Output will be: lowerUpperUpperNoSpaces
 *   accepts strings and keywords
 */
cuerdas.core.camel = (function cuerdas$core$camel(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4(s,cuerdas.core.lower,cuerdas.core.capital,"");
});
/**
 * Output will be: lower_cased_and_underscore_separated
 *   accepts strings and keywords
 */
cuerdas.core.snake = (function cuerdas$core$snake(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.lower,"_");
});
/**
 * Output will be: Space separated with the first letter capitalized.
 *   accepts strings and keywords
 */
cuerdas.core.phrase = (function cuerdas$core$phrase(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4(s,cuerdas.core.capital,cuerdas.core.lower," ");
});
/**
 * Output will be: lower cased and space separated
 *   accepts strings and keywords
 */
cuerdas.core.human = (function cuerdas$core$human(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.lower," ");
});
/**
 * Output will be: Each Word Capitalized And Separated With Spaces
 *   accepts strings and keywords
 */
cuerdas.core.title = (function cuerdas$core$title(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.capital," ");
});
/**
 * Output will be: CapitalizedAndTouchingTheNext
 *   accepts strings and keywords
 */
cuerdas.core.pascal = (function cuerdas$core$pascal(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.capital,"");
});
/**
 * Output will be: lower-cased-and-separated-with-dashes
 *   accepts strings and keywords
 */
cuerdas.core.kebab = (function cuerdas$core$kebab(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.lower,"-");
});
/**
 * Output will be either:
 *   (js-selector "-pascal-case-me") ;; => PascalCaseMe
 *   (js-selector "camel-case-me") ;; => camelCaseMe
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.js_selector = (function cuerdas$core$js_selector(s){
var G__20781 = cuerdas.core.stylize_split(s);
if((G__20781 == null)){
return null;
} else {
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4(G__20781,cljs.core.identity,cuerdas.core.capital,"");
}
});
/**
 * Output will be either:
 *   (js-selector "LeadingDash") ;; => -leading-dash
 *   (js-selector "noLeadingDash") ;; => no-leading-dash
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.css_selector = (function cuerdas$core$css_selector(s){
var G__20783 = cuerdas.core.stylize_split(s);
if((G__20783 == null)){
return null;
} else {
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3(G__20783,cuerdas.core.lower,"-");
}
});
cuerdas.core._PLUS_slug_tr_map_PLUS_ = cljs.core.zipmap("\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E","aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz");
/**
 * Transform text into a URL slug.
 */
cuerdas.core.slug = (function cuerdas$core$slug(s){
var G__20785 = cuerdas.core.lower(s);
var G__20785__$1 = (((G__20785 == null))?null:clojure.string.escape(G__20785,cuerdas.core._PLUS_slug_tr_map_PLUS_));
var G__20785__$2 = (((G__20785__$1 == null))?null:cuerdas.core.replace(G__20785__$1,/[^\w\s]+/,""));
if((G__20785__$2 == null)){
return null;
} else {
return cuerdas.core.replace(G__20785__$2,/\s+/,"-");
}
});
/**
 * Unicode friendly version of `slug` function.
 */
cuerdas.core.uslug = (function cuerdas$core$uslug(s){
var G__20787 = cuerdas.core.lower(s);
var G__20787__$1 = (((G__20787 == null))?null:cuerdas.core.replace(G__20787,cuerdas.regexp.enhace(/[^\p{L}\p{N}]+/)," "));
if((G__20787__$1 == null)){
return null;
} else {
return cuerdas.core.replace(G__20787__$1,cuerdas.regexp.enhace(/[\p{Z}\s]+/),"-");
}
});
/**
 * Safer version of clojure keyword, accepting a
 *   symbol for the namespace and kebab-casing the key
 */
cuerdas.core.keyword = (function cuerdas$core$keyword(var_args){
var args20788 = [];
var len__8981__auto___20794 = arguments.length;
var i__8982__auto___20795 = (0);
while(true){
if((i__8982__auto___20795 < len__8981__auto___20794)){
args20788.push((arguments[i__8982__auto___20795]));

var G__20796 = (i__8982__auto___20795 + (1));
i__8982__auto___20795 = G__20796;
continue;
} else {
}
break;
}

var G__20790 = args20788.length;
switch (G__20790) {
case 1:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20788.length)].join('')));

}
});

cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1 = (function (k){
var G__20791 = cuerdas.core.kebab(k);
return (cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1(G__20791) : cuerdas.core.keyword_STAR_.call(null,G__20791));
});

cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2 = (function (n,k){
var G__20792 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
var G__20793 = cuerdas.core.kebab(k);
return (cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$2(G__20792,G__20793) : cuerdas.core.keyword_STAR_.call(null,G__20792,G__20793));
});

cuerdas.core.keyword.cljs$lang$maxFixedArity = 2;

/**
 * General purpose function for parse number like
 *   string to number. It works with both integers
 *   and floats.
 */
cuerdas.core.parse_number = (function cuerdas$core$parse_number(s){
if((s == null)){
return NaN;
} else {
if(cljs.core.truth_(cuerdas.core.numeric_QMARK_(s))){
return cljs.reader.read_string(s);
} else {
return NaN;
}
}
});
/**
 * Return the double value from string.
 */
cuerdas.core.parse_double = (function cuerdas$core$parse_double(s){
return parseFloat(s);
});
/**
 * Return the number value in integer form.
 */
cuerdas.core.parse_int = (function cuerdas$core$parse_int(s){
if(cljs.core.truth_((function (){var and__7748__auto__ = typeof s === 'string';
if(and__7748__auto__){
return cljs.core.re_matches(/-?\d+(\.\d+)?/,s);
} else {
return and__7748__auto__;
}
})())){
return parseInt(s,(10));
} else {
return NaN;
}
});
/**
 * Returns true if s can be found in coll.
 */
cuerdas.core.one_of_QMARK_ = (function cuerdas$core$one_of_QMARK_(coll,s){
return cljs.core.boolean$(cljs.core.some((function (p1__20798_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20798_SHARP_,s);
}),coll));
});
/**
 * Returns true for 1/on/true/yes string values (case-insensitive),
 *   false otherwise.
 */
cuerdas.core.to_bool = (function cuerdas$core$to_bool(s){
return cuerdas.core.one_of_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","on","true","yes"], null),cuerdas.core.lower(s));
});
/**
 * Pads the str with characters until the total string
 *   length is equal to the passed length parameter. By
 *   default, pads on the left with the space char.
 */
cuerdas.core.pad = (function cuerdas$core$pad(var_args){
var args__8988__auto__ = [];
var len__8981__auto___20818 = arguments.length;
var i__8982__auto___20819 = (0);
while(true){
if((i__8982__auto___20819 < len__8981__auto___20818)){
args__8988__auto__.push((arguments[i__8982__auto___20819]));

var G__20820 = (i__8982__auto___20819 + (1));
i__8982__auto___20819 = G__20820;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__20801){
var vec__20802 = p__20801;
var map__20805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20802,(0),null);
var map__20805__$1 = ((((!((map__20805 == null)))?((((map__20805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20805):map__20805);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20805__$1,cljs.core.cst$kw$length,(0));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20805__$1,cljs.core.cst$kw$padding," ");
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20805__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$left);
if(typeof s === 'string'){
var padding__$1 = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(padding,(0),(1));
var padlen = (length - cljs.core.count(s));
var pred__20807 = cljs.core._EQ_;
var expr__20808 = type;
if(cljs.core.truth_((function (){var G__20810 = cljs.core.cst$kw$right;
var G__20811 = expr__20808;
return (pred__20807.cljs$core$IFn$_invoke$arity$2 ? pred__20807.cljs$core$IFn$_invoke$arity$2(G__20810,G__20811) : pred__20807.call(null,G__20810,G__20811));
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,padlen))].join('');
} else {
if(cljs.core.truth_((function (){var G__20812 = cljs.core.cst$kw$both;
var G__20813 = expr__20808;
return (pred__20807.cljs$core$IFn$_invoke$arity$2 ? pred__20807.cljs$core$IFn$_invoke$arity$2(G__20812,G__20813) : pred__20807.call(null,G__20812,G__20813));
})())){
var first = cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,(function (){var G__20814 = (padlen / (2));
return Math.ceil(G__20814);
})());
var second = cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,(function (){var G__20815 = (padlen / (2));
return Math.floor(G__20815);
})());
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(first),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(second)].join('');
} else {
if(cljs.core.truth_((function (){var G__20816 = cljs.core.cst$kw$left;
var G__20817 = expr__20808;
return (pred__20807.cljs$core$IFn$_invoke$arity$2 ? pred__20807.cljs$core$IFn$_invoke$arity$2(G__20816,G__20817) : pred__20807.call(null,G__20816,G__20817));
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,padlen)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__20808)].join('')));
}
}
}
} else {
return null;
}
});

cuerdas.core.pad.cljs$lang$maxFixedArity = (1);

cuerdas.core.pad.cljs$lang$applyTo = (function (seq20799){
var G__20800 = cljs.core.first(seq20799);
var seq20799__$1 = cljs.core.next(seq20799);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic(G__20800,seq20799__$1);
});

/**
 * Converts all adjacent whitespace characters
 *   to a single space.
 */
cuerdas.core.collapse_whitespace = (function cuerdas$core$collapse_whitespace(s){
var G__20822 = s;
var G__20822__$1 = (((G__20822 == null))?null:cuerdas.core.replace(G__20822,cuerdas.regexp.enhace(/[\p{Z}\s]+/)," "));
if((G__20822__$1 == null)){
return null;
} else {
return cuerdas.core.replace(G__20822__$1,/^\s+|\s+$/,"");
}
});
cuerdas.core.escape_html = (function cuerdas$core$escape_html(s){

if(cljs.core.truth_(s)){
return cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(s,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
} else {
return null;
}
});
/**
 * Converts entity characters to HTML equivalents.
 */
cuerdas.core.unescape_html = (function cuerdas$core$unescape_html(s){
if(cljs.core.truth_(s)){
return cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(s,"&amp;","&"),"&lt;","<"),"&gt;",">"),"&quot;","\"");
} else {
return null;
}
});
cuerdas.core.strip_tags_impl = (function cuerdas$core$strip_tags_impl(s,tags,mappings){
var kwdize = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cuerdas.core.keyword,cuerdas.core.lower,cljs.core.name);
var tags__$1 = (((tags == null))?tags:((typeof tags === 'string')?cljs.core.PersistentHashSet.createAsIfByAssoc([(kwdize.cljs$core$IFn$_invoke$arity$1 ? kwdize.cljs$core$IFn$_invoke$arity$1(tags) : kwdize.call(null,tags))]):((cljs.core.sequential_QMARK_(tags))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(kwdize,tags)):null)));
var rx = cljs.core.re_pattern("<\\/?([^<>]*)>");
return cuerdas.core.replace(s,rx,(((tags__$1 == null))?((function (kwdize,tags__$1,rx){
return (function (p__20831){
var vec__20832 = p__20831;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20832,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20832,(1),null);
var tag__$1 = (kwdize.cljs$core$IFn$_invoke$arity$1 ? kwdize.cljs$core$IFn$_invoke$arity$1(tag) : kwdize.call(null,tag));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mappings,tag__$1,"");
});})(kwdize,tags__$1,rx))
:((function (kwdize,tags__$1,rx){
return (function (p__20835){
var vec__20836 = p__20835;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20836,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20836,(1),null);
var tag__$1 = (kwdize.cljs$core$IFn$_invoke$arity$1 ? kwdize.cljs$core$IFn$_invoke$arity$1(tag) : kwdize.call(null,tag));
if(cljs.core.truth_((tags__$1.cljs$core$IFn$_invoke$arity$1 ? tags__$1.cljs$core$IFn$_invoke$arity$1(tag__$1) : tags__$1.call(null,tag__$1)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mappings,tag__$1,"");
} else {
return match;
}
});})(kwdize,tags__$1,rx))
));
});
/**
 * Remove html tags from string.
 */
cuerdas.core.strip_tags = (function cuerdas$core$strip_tags(var_args){
var args20839 = [];
var len__8981__auto___20842 = arguments.length;
var i__8982__auto___20843 = (0);
while(true){
if((i__8982__auto___20843 < len__8981__auto___20842)){
args20839.push((arguments[i__8982__auto___20843]));

var G__20844 = (i__8982__auto___20843 + (1));
i__8982__auto___20843 = G__20844;
continue;
} else {
}
break;
}

var G__20841 = args20839.length;
switch (G__20841) {
case 1:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20839.length)].join('')));

}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.strip_tags_impl(s,null,cljs.core.PersistentArrayMap.EMPTY);
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2 = (function (s,tags){
if(cljs.core.map_QMARK_(tags)){
return cuerdas.core.strip_tags_impl(s,null,tags);
} else {
return cuerdas.core.strip_tags_impl(s,tags,cljs.core.PersistentArrayMap.EMPTY);
}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3 = (function (s,tags,mapping){
return cuerdas.core.strip_tags_impl(s,tags,mapping);
});

cuerdas.core.strip_tags.cljs$lang$maxFixedArity = 3;

/**
 * Find string that is nested in between two strings. Return first match
 */
cuerdas.core.substr_between = (function cuerdas$core$substr_between(s,prefix,suffix){
if((s == null)){
return null;
} else {
if((prefix == null)){
return null;
} else {
if((suffix == null)){
return null;
} else {
if(cljs.core.not(cuerdas.core.includes_QMARK_(s,prefix))){
return null;
} else {
if(cljs.core.not(cuerdas.core.includes_QMARK_(s,suffix))){
return null;
} else {
var G__20847 = s;
var G__20847__$1 = (((G__20847 == null))?null:cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(G__20847,prefix));
var G__20847__$2 = (((G__20847__$1 == null))?null:cljs.core.second(G__20847__$1));
var G__20847__$3 = (((G__20847__$2 == null))?null:cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(G__20847__$2,suffix));
if((G__20847__$3 == null)){
return null;
} else {
return cljs.core.first(G__20847__$3);
}

}
}
}
}
}
});
/**
 * Unindent multiline text.
 *   Uses either a supplied regex or the shortest
 *   beginning-of-line to non-whitespace distance
 */
cuerdas.core._LT__LT__ = (function cuerdas$core$_LT__LT__(var_args){
var args20850 = [];
var len__8981__auto___20853 = arguments.length;
var i__8982__auto___20854 = (0);
while(true){
if((i__8982__auto___20854 < len__8981__auto___20853)){
args20850.push((arguments[i__8982__auto___20854]));

var G__20855 = (i__8982__auto___20854 + (1));
i__8982__auto___20854 = G__20855;
continue;
} else {
}
break;
}

var G__20852 = args20850.length;
switch (G__20852) {
case 1:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20850.length)].join('')));

}
});

cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1 = (function (s){
var all_indents = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20848_SHARP_){
return cljs.core.count(cljs.core.second(cljs.core.re_find(/^( +)/,p1__20848_SHARP_)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(cuerdas.core.lines(s))], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cuerdas.core.blank_QMARK_,cljs.core.rest(cuerdas.core.lines(s)))));
var min_indent = cljs.core.re_pattern(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("^ {%s}",cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,all_indents)], 0)));
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2(min_indent,s);
});

cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2 = (function (r,s){
return cuerdas.core.unlines(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20849_SHARP_){
return cuerdas.core.replace(p1__20849_SHARP_,r,"");
}),cuerdas.core.lines(s)));
});

cuerdas.core._LT__LT__.cljs$lang$maxFixedArity = 2;

cuerdas.core.slugify = cuerdas.core.slug;
cuerdas.core.dasherize = cuerdas.core.kebab;
cuerdas.core.underscore = cuerdas.core.snake;
cuerdas.core.underscored = cuerdas.core.snake;
cuerdas.core.classify = cuerdas.core.pascal;
cuerdas.core.humanize = cuerdas.core.human;
cuerdas.core.titleize = cuerdas.core.title;
cuerdas.core.capitalize = cuerdas.core.capital;
cuerdas.core.alpha_numeric_QMARK_ = cuerdas.core.alnum_QMARK_;
cuerdas.core.parse_long = cuerdas.core.parse_int;
cuerdas.core.parse_float = cuerdas.core.parse_double;
cuerdas.core.contains_QMARK_ = cuerdas.core.includes_QMARK_;
cuerdas.core.startswith_QMARK_ = cuerdas.core.starts_with_QMARK_;
cuerdas.core.endswith_QMARK_ = cuerdas.core.ends_with_QMARK_;
