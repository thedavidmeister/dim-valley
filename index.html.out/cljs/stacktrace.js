// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__9293__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9294__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9295__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9296__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9297__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),((function (method_table__9293__auto__,prefer_table__9294__auto__,method_cache__9295__auto__,cached_hierarchy__9296__auto__,hierarchy__9297__auto__){
return (function (repl_env,st,err,opts){
return cljs.core.cst$kw$ua_DASH_product.cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__9293__auto__,prefer_table__9294__auto__,method_cache__9295__auto__,cached_hierarchy__9296__auto__,hierarchy__9297__auto__))
,cljs.core.cst$kw$default,hierarchy__9297__auto__,method_table__9293__auto__,prefer_table__9294__auto__,method_cache__9295__auto__,cached_hierarchy__9296__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__8240__auto__ = cljs.core.cst$kw$output_DASH_dir.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
<<<<<<< HEAD
var vec__15567 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__15573,p__15574){
var vec__15575 = p__15573;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15575,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15575,(1),null);
var vec__15578 = p__15574;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15578,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15578,(1),null);
=======
var vec__16731 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__16737,p__16738){
var vec__16739 = p__16737;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16739,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16739,(1),null);
var vec__16742 = p__16738;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16742,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16742,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
<<<<<<< HEAD
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15567,(0),null);
var vec__15570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15567,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15570,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15570,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15581 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__15581,"(","");
} else {
return G__15581;
}
})(),cljs.stacktrace.parse_int((function (){var G__15582 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__15582,")","");
} else {
return G__15582;
}
})()),cljs.stacktrace.parse_int((function (){var G__15583 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__15583,")","");
} else {
return G__15583;
=======
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16731,(0),null);
var vec__16734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16731,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16734,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16734,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16745 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__16745,"(","");
} else {
return G__16745;
}
})(),cljs.stacktrace.parse_int((function (){var G__16746 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__16746,")","");
} else {
return G__16746;
}
})()),cljs.stacktrace.parse_int((function (){var G__16747 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__16747,")","");
} else {
return G__16747;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
<<<<<<< HEAD
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__15584,file,p__15585){
var map__15586 = p__15584;
var map__15586__$1 = ((((!((map__15586 == null)))?((((map__15586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15586):map__15586);
var repl_env = map__15586__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15586__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15586__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15586__$1,cljs.core.cst$kw$port);
var map__15587 = p__15585;
var map__15587__$1 = ((((!((map__15587 == null)))?((((map__15587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15587):map__15587);
var opts = map__15587__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15587__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8240__auto__ = host_port;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__16748,file,p__16749){
var map__16750 = p__16748;
var map__16750__$1 = ((((!((map__16750 == null)))?((((map__16750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16750):map__16750);
var repl_env = map__16750__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,cljs.core.cst$kw$port);
var map__16751 = p__16749;
var map__16751__$1 = ((((!((map__16751 == null)))?((((map__16751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16751):map__16751);
var opts = map__16751__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16751__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8242__auto__ = host_port;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$output_DASH_dir));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8240__auto__ = (function (){var and__8228__auto__ = asset_path;
if(cljs.core.truth_(and__8228__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__8228__auto__;
}
})();
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),"/"].join('')),"");
} else {
var temp__5288__auto__ = cljs.core.cst$kw$asset_DASH_root.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5288__auto__)){
var asset_root = temp__5288__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$parse_DASH_stacktrace,cljs.core.cst$kw$reason,cljs.core.cst$kw$relativize_DASH_url], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
<<<<<<< HEAD
var vec__15590 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590,(1),null);
var vec__15593 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15593,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15593,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15593,(2),null);
if(cljs.core.truth_((function (){var and__8228__auto__ = file;
if(cljs.core.truth_(and__8228__auto__)){
var and__8228__auto____$1 = function$;
if(cljs.core.truth_(and__8228__auto____$1)){
var and__8228__auto____$2 = line;
if(cljs.core.truth_(and__8228__auto____$2)){
=======
var vec__16754 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16754,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16754,(1),null);
var vec__16757 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16757,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16757,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16757,(2),null);
if(cljs.core.truth_((function (){var and__8230__auto__ = file;
if(cljs.core.truth_(and__8230__auto__)){
var and__8230__auto____$1 = function$;
if(cljs.core.truth_(and__8230__auto____$1)){
var and__8230__auto____$2 = line;
if(cljs.core.truth_(and__8230__auto____$2)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return column;
} else {
return and__8228__auto____$2;
}
} else {
return and__8228__auto____$1;
}
} else {
return and__8228__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chrome,(function (repl_env,st,err,opts){
<<<<<<< HEAD
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15598_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__15598_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15597_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__15597_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15596_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__15596_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__15599 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599,(1),null);
var vec__15602 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15602,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15602,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15602,(2),null);
if(cljs.core.truth_((function (){var and__8228__auto__ = file;
if(cljs.core.truth_(and__8228__auto__)){
var and__8228__auto____$1 = function$;
if(cljs.core.truth_(and__8228__auto____$1)){
var and__8228__auto____$2 = line;
if(cljs.core.truth_(and__8228__auto____$2)){
=======
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16762_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__16762_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16761_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__16761_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__16760_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__16760_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__16763 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763,(1),null);
var vec__16766 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16766,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16766,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16766,(2),null);
if(cljs.core.truth_((function (){var and__8230__auto__ = file;
if(cljs.core.truth_(and__8230__auto__)){
var and__8230__auto____$1 = function$;
if(cljs.core.truth_(and__8230__auto____$1)){
var and__8230__auto____$2 = line;
if(cljs.core.truth_(and__8230__auto____$2)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return column;
} else {
return and__8228__auto____$2;
}
} else {
return and__8228__auto____$1;
}
} else {
return and__8228__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$safari,(function (repl_env,st,err,opts){
<<<<<<< HEAD
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15607_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__15607_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15606_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__15606_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15605_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__15605_SHARP_,"Error");
=======
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16771_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__16771_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16770_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__16770_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__16769_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__16769_SHARP_,"Error");
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
<<<<<<< HEAD
var vec__15608 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15608,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15608,(1),null);
var vec__15611 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15611,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15611,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15611,(2),null);
if(cljs.core.truth_((function (){var and__8228__auto__ = file;
if(cljs.core.truth_(and__8228__auto__)){
var and__8228__auto____$1 = function$;
if(cljs.core.truth_(and__8228__auto____$1)){
var and__8228__auto____$2 = line;
if(cljs.core.truth_(and__8228__auto____$2)){
=======
var vec__16772 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16772,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16772,(1),null);
var vec__16775 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(2),null);
if(cljs.core.truth_((function (){var and__8230__auto__ = file;
if(cljs.core.truth_(and__8230__auto__)){
var and__8230__auto____$1 = function$;
if(cljs.core.truth_(and__8230__auto____$1)){
var and__8230__auto____$2 = line;
if(cljs.core.truth_(and__8230__auto____$2)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return column;
} else {
return and__8228__auto____$2;
}
} else {
return and__8228__auto____$1;
}
} else {
return and__8228__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$firefox,(function (repl_env,st,err,opts){
<<<<<<< HEAD
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15616_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__15616_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15615_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15615_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15614_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__15614_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__15617){
var map__15618 = p__15617;
var map__15618__$1 = ((((!((map__15618 == null)))?((((map__15618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15618):map__15618);
var opts = map__15618__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15618__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__15618,map__15618__$1,opts,output_dir){
=======
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16780_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__16780_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16779_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16779_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__16778_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__16778_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__16781){
var map__16782 = p__16781;
var map__16782__$1 = ((((!((map__16782 == null)))?((((map__16782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16782):map__16782);
var opts = map__16782__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16782__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__16782,map__16782__$1,opts,output_dir){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
<<<<<<< HEAD
var vec__15626 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15626,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15626,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__15629 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15629,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15629,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8228__auto__ = line;
if(cljs.core.truth_(and__8228__auto__)){
=======
var vec__16790 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16790,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16790,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__16793 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16793,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16793,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8230__auto__ = line;
if(cljs.core.truth_(and__8230__auto__)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return !(clojure.string.blank_QMARK_(line));
} else {
return and__8228__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
<<<<<<< HEAD
});})(map__15618,map__15618__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__15632){
var map__15633 = p__15632;
var map__15633__$1 = ((((!((map__15633 == null)))?((((map__15633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15633):map__15633);
var opts = map__15633__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15633__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__15633,map__15633__$1,opts,output_dir){
=======
});})(map__16782,map__16782__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__16796){
var map__16797 = p__16796;
var map__16797__$1 = ((((!((map__16797 == null)))?((((map__16797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16797):map__16797);
var opts = map__16797__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16797__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__16797,map__16797__$1,opts,output_dir){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
<<<<<<< HEAD
var vec__15641 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15641,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15641,(1),null);
var vec__15644 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15644,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15644,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8228__auto__ = line_part;
if(cljs.core.truth_(and__8228__auto__)){
=======
var vec__16805 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16805,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16805,(1),null);
var vec__16808 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16808,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16808,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__8230__auto__ = line_part;
if(cljs.core.truth_(and__8230__auto__)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__8228__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
<<<<<<< HEAD
});})(map__15633,map__15633__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nodejs,(function (repl_env,st,err,p__15647){
var map__15648 = p__15647;
var map__15648__$1 = ((((!((map__15648 == null)))?((((map__15648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15648):map__15648);
var opts = map__15648__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15648__$1,cljs.core.cst$kw$output_DASH_dir);
var parse_source_loc_info = ((function (map__15648,map__15648__$1,opts,output_dir){
=======
});})(map__16797,map__16797__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nodejs,(function (repl_env,st,err,p__16811){
var map__16812 = p__16811;
var map__16812__$1 = ((((!((map__16812 == null)))?((((map__16812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16812):map__16812);
var opts = map__16812__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16812__$1,cljs.core.cst$kw$output_DASH_dir);
var parse_source_loc_info = ((function (map__16812,map__16812__$1,opts,output_dir){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__8228__auto__ = x;
if(cljs.core.truth_(and__8228__auto__)){
return !(clojure.string.blank_QMARK_(x));
} else {
return and__8228__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
<<<<<<< HEAD
});})(map__15648,map__15648__$1,opts,output_dir))
;
var process_frame = ((function (map__15648,map__15648__$1,opts,output_dir){
=======
});})(map__16812,map__16812__$1,opts,output_dir))
;
var process_frame = ((function (map__16812,map__16812__$1,opts,output_dir){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
<<<<<<< HEAD
var vec__15657 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15657,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15657,(1),null);
var vec__15660 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15660,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15660,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15660,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,(cljs.core.truth_(function$)?(function (){var G__15663 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__15663,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__15663;
=======
var vec__16821 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16821,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16821,(1),null);
var vec__16824 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,(cljs.core.truth_(function$)?(function (){var G__16827 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__16827,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__16827;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
})():file_part),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,parse_source_loc_info(line_part),cljs.core.cst$kw$column,parse_source_loc_info(col_part)], null);
}
}
<<<<<<< HEAD
});})(map__15648,map__15648__$1,opts,output_dir))
=======
});})(map__16812,map__16812__$1,opts,output_dir))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
<<<<<<< HEAD
return cljs.core.last((function (){var or__8240__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__15664_SHARP_){
return (p1__15664_SHARP_ <= (column__$1 - (1)));
=======
return cljs.core.last((function (){var or__8242__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__16828_SHARP_){
return (p1__16828_SHARP_ <= (column__$1 - (1)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(source_map))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (source_map){
<<<<<<< HEAD
return (function (p1__15665_SHARP_,p2__15666_SHARP_){
return (p1__15665_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15665_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__15666_SHARP_) : p1__15665_SHARP_.call(null,p2__15666_SHARP_));
=======
return (function (p1__16829_SHARP_,p2__16830_SHARP_){
return (p1__16829_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16829_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__16830_SHARP_) : p1__16829_SHARP_.call(null,p2__16830_SHARP_));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5288__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__5288__auto__)){
var columns = temp__5288__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$col,cljs.core.cst$kw$name], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
<<<<<<< HEAD
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__15667,sms,opts){
var map__15668 = p__15667;
var map__15668__$1 = ((((!((map__15668 == null)))?((((map__15668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15668):map__15668);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15668__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15668__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15668__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15668__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__15670 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670,(2),null);
=======
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__16831,sms,opts){
var map__16832 = p__16831;
var map__16832__$1 = ((((!((map__16832 == null)))?((((map__16832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16832):map__16832);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16832__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16832__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16832__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16832__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__16834 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16834,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16834,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16834,(2),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3)))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$function,function$,cljs.core.cst$kw$call,call,cljs.core.cst$kw$file,((no_source_file_QMARK_)?["NO_SOURCE_FILE",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),cljs.core.cst$kw$line,line_SINGLEQUOTE_,cljs.core.cst$kw$column,column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
<<<<<<< HEAD
var G__15676 = arguments.length;
switch (G__15676) {
=======
var G__16840 = arguments.length;
switch (G__16840) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$function],[cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([function$,call], 0));
});
<<<<<<< HEAD
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__15673_SHARP_){
return cljs.stacktrace.mapped_frame(p1__15673_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__15674_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15674_SHARP_,cljs.core.cst$kw$call);
=======
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__16837_SHARP_){
return cljs.stacktrace.mapped_frame(p1__16837_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__16838_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16838_SHARP_,cljs.core.cst$kw$call);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(mapped_frames))
,mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
<<<<<<< HEAD
var G__15679 = arguments.length;
switch (G__15679) {
=======
var G__16843 = arguments.length;
switch (G__16843) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
<<<<<<< HEAD
var sb__9365__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15680_15691 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15681_15692 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15680_15691,_STAR_print_fn_STAR_15681_15692,sb__9365__auto__){
return (function (x__9366__auto__){
return sb__9365__auto__.append(x__9366__auto__);
});})(_STAR_print_newline_STAR_15680_15691,_STAR_print_fn_STAR_15681_15692,sb__9365__auto__))
;

try{var seq__15682_15693 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__15683_15694 = null;
var count__15684_15695 = (0);
var i__15685_15696 = (0);
while(true){
if((i__15685_15696 < count__15684_15695)){
var map__15686_15697 = chunk__15683_15694.cljs$core$IIndexed$_nth$arity$2(null,i__15685_15696);
var map__15686_15698__$1 = ((((!((map__15686_15697 == null)))?((((map__15686_15697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15686_15697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15686_15697):map__15686_15697);
var function_15699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15686_15698__$1,cljs.core.cst$kw$function);
var file_15700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15686_15698__$1,cljs.core.cst$kw$file);
var line_15701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15686_15698__$1,cljs.core.cst$kw$line);
var column_15702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15686_15698__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_15699)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_15699)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15700),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_15701)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15701)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_15702)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_15702)].join(''):null)),")"].join('')], 0));

var G__15703 = seq__15682_15693;
var G__15704 = chunk__15683_15694;
var G__15705 = count__15684_15695;
var G__15706 = (i__15685_15696 + (1));
seq__15682_15693 = G__15703;
chunk__15683_15694 = G__15704;
count__15684_15695 = G__15705;
i__15685_15696 = G__15706;
continue;
} else {
var temp__5290__auto___15707 = cljs.core.seq(seq__15682_15693);
if(temp__5290__auto___15707){
var seq__15682_15708__$1 = temp__5290__auto___15707;
if(cljs.core.chunked_seq_QMARK_(seq__15682_15708__$1)){
var c__9171__auto___15709 = cljs.core.chunk_first(seq__15682_15708__$1);
var G__15710 = cljs.core.chunk_rest(seq__15682_15708__$1);
var G__15711 = c__9171__auto___15709;
var G__15712 = cljs.core.count(c__9171__auto___15709);
var G__15713 = (0);
seq__15682_15693 = G__15710;
chunk__15683_15694 = G__15711;
count__15684_15695 = G__15712;
i__15685_15696 = G__15713;
continue;
} else {
var map__15688_15714 = cljs.core.first(seq__15682_15708__$1);
var map__15688_15715__$1 = ((((!((map__15688_15714 == null)))?((((map__15688_15714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15688_15714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15688_15714):map__15688_15714);
var function_15716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688_15715__$1,cljs.core.cst$kw$function);
var file_15717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688_15715__$1,cljs.core.cst$kw$file);
var line_15718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688_15715__$1,cljs.core.cst$kw$line);
var column_15719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15688_15715__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_15716)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_15716)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_15717),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_15718)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_15718)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_15719)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_15719)].join(''):null)),")"].join('')], 0));

var G__15720 = cljs.core.next(seq__15682_15708__$1);
var G__15721 = null;
var G__15722 = (0);
var G__15723 = (0);
seq__15682_15693 = G__15720;
chunk__15683_15694 = G__15721;
count__15684_15695 = G__15722;
i__15685_15696 = G__15723;
=======
var sb__9367__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16844_16855 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16845_16856 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16844_16855,_STAR_print_fn_STAR_16845_16856,sb__9367__auto__){
return (function (x__9368__auto__){
return sb__9367__auto__.append(x__9368__auto__);
});})(_STAR_print_newline_STAR_16844_16855,_STAR_print_fn_STAR_16845_16856,sb__9367__auto__))
;

try{var seq__16846_16857 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__16847_16858 = null;
var count__16848_16859 = (0);
var i__16849_16860 = (0);
while(true){
if((i__16849_16860 < count__16848_16859)){
var map__16850_16861 = chunk__16847_16858.cljs$core$IIndexed$_nth$arity$2(null,i__16849_16860);
var map__16850_16862__$1 = ((((!((map__16850_16861 == null)))?((((map__16850_16861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16850_16861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16850_16861):map__16850_16861);
var function_16863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16850_16862__$1,cljs.core.cst$kw$function);
var file_16864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16850_16862__$1,cljs.core.cst$kw$file);
var line_16865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16850_16862__$1,cljs.core.cst$kw$line);
var column_16866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16850_16862__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_16863)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_16863)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_16864),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_16865)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_16865)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_16866)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_16866)].join(''):null)),")"].join('')], 0));

var G__16867 = seq__16846_16857;
var G__16868 = chunk__16847_16858;
var G__16869 = count__16848_16859;
var G__16870 = (i__16849_16860 + (1));
seq__16846_16857 = G__16867;
chunk__16847_16858 = G__16868;
count__16848_16859 = G__16869;
i__16849_16860 = G__16870;
continue;
} else {
var temp__5290__auto___16871 = cljs.core.seq(seq__16846_16857);
if(temp__5290__auto___16871){
var seq__16846_16872__$1 = temp__5290__auto___16871;
if(cljs.core.chunked_seq_QMARK_(seq__16846_16872__$1)){
var c__9173__auto___16873 = cljs.core.chunk_first(seq__16846_16872__$1);
var G__16874 = cljs.core.chunk_rest(seq__16846_16872__$1);
var G__16875 = c__9173__auto___16873;
var G__16876 = cljs.core.count(c__9173__auto___16873);
var G__16877 = (0);
seq__16846_16857 = G__16874;
chunk__16847_16858 = G__16875;
count__16848_16859 = G__16876;
i__16849_16860 = G__16877;
continue;
} else {
var map__16852_16878 = cljs.core.first(seq__16846_16872__$1);
var map__16852_16879__$1 = ((((!((map__16852_16878 == null)))?((((map__16852_16878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16852_16878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16852_16878):map__16852_16878);
var function_16880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852_16879__$1,cljs.core.cst$kw$function);
var file_16881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852_16879__$1,cljs.core.cst$kw$file);
var line_16882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852_16879__$1,cljs.core.cst$kw$line);
var column_16883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852_16879__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_16880)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_16880)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_16881),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_16882)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_16882)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_16883)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_16883)].join(''):null)),")"].join('')], 0));

var G__16884 = cljs.core.next(seq__16846_16872__$1);
var G__16885 = null;
var G__16886 = (0);
var G__16887 = (0);
seq__16846_16857 = G__16884;
chunk__16847_16858 = G__16885;
count__16848_16859 = G__16886;
i__16849_16860 = G__16887;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
}
}
break;
}
<<<<<<< HEAD
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15681_15692;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15680_15691;
=======
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16845_16856;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16844_16855;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9365__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

