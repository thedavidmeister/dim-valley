// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__9526__auto__ = [];
var len__9519__auto___17325 = arguments.length;
var i__9520__auto___17326 = (0);
while(true){
if((i__9520__auto___17326 < len__9519__auto___17325)){
args__9526__auto__.push((arguments[i__9520__auto___17326]));

var G__17327 = (i__9520__auto___17326 + (1));
i__9520__auto___17326 = G__17327;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq17324){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17324));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__9526__auto__ = [];
var len__9519__auto___17329 = arguments.length;
var i__9520__auto___17330 = (0);
while(true){
if((i__9520__auto___17330 < len__9519__auto___17329)){
args__9526__auto__.push((arguments[i__9520__auto___17330]));

var G__17331 = (i__9520__auto___17330 + (1));
i__9520__auto___17330 = G__17331;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq17328){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17328));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__17332 = cljs.core._EQ_;
var expr__17333 = c;
if(cljs.core.truth_((function (){var G__17335 = "\b";
var G__17336 = expr__17333;
return (pred__17332.cljs$core$IFn$_invoke$arity$2 ? pred__17332.cljs$core$IFn$_invoke$arity$2(G__17335,G__17336) : pred__17332.call(null,G__17335,G__17336));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__17337 = "\t";
var G__17338 = expr__17333;
return (pred__17332.cljs$core$IFn$_invoke$arity$2 ? pred__17332.cljs$core$IFn$_invoke$arity$2(G__17337,G__17338) : pred__17332.call(null,G__17337,G__17338));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__17339 = "\n";
var G__17340 = expr__17333;
return (pred__17332.cljs$core$IFn$_invoke$arity$2 ? pred__17332.cljs$core$IFn$_invoke$arity$2(G__17339,G__17340) : pred__17332.call(null,G__17339,G__17340));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__17341 = "\f";
var G__17342 = expr__17333;
return (pred__17332.cljs$core$IFn$_invoke$arity$2 ? pred__17332.cljs$core$IFn$_invoke$arity$2(G__17341,G__17342) : pred__17332.call(null,G__17341,G__17342));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__17343 = "\r";
var G__17344 = expr__17333;
return (pred__17332.cljs$core$IFn$_invoke$arity$2 ? pred__17332.cljs$core$IFn$_invoke$arity$2(G__17343,G__17344) : pred__17332.call(null,G__17343,G__17344));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__17345 = "\"";
var G__17346 = expr__17333;
return (pred__17332.cljs$core$IFn$_invoke$arity$2 ? pred__17332.cljs$core$IFn$_invoke$arity$2(G__17345,G__17346) : pred__17332.call(null,G__17345,G__17346));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__17347 = "\\";
var G__17348 = expr__17333;
return (pred__17332.cljs$core$IFn$_invoke$arity$2 ? pred__17332.cljs$core$IFn$_invoke$arity$2(G__17347,G__17348) : pred__17332.call(null,G__17347,G__17348));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__9526__auto__ = [];
var len__9519__auto___17350 = arguments.length;
var i__9520__auto___17351 = (0);
while(true){
if((i__9520__auto___17351 < len__9519__auto___17350)){
args__9526__auto__.push((arguments[i__9520__auto___17351]));

var G__17352 = (i__9520__auto___17351 + (1));
i__9520__auto___17351 = G__17352;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq17349){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17349));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__9526__auto__ = [];
var len__9519__auto___17354 = arguments.length;
var i__9520__auto___17355 = (0);
while(true){
if((i__9520__auto___17355 < len__9519__auto___17354)){
args__9526__auto__.push((arguments[i__9520__auto___17355]));

var G__17356 = (i__9520__auto___17355 + (1));
i__9520__auto___17355 = G__17356;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq17353){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17353));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__17357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17357,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17357,(1),null);
var G__17360 = new_context;
var G__17361 = remainder;
var G__17362 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__17360;
lis__$1 = G__17361;
acc = G__17362;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__17363 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__17366 = new_context;
var G__17367 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__17366;
acc = G__17367;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__17368 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17368,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17368,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17368,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__17371 = new_context;
var G__17372 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__17371;
acc = G__17372;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9124__auto__ = (function cljs$pprint$unzip_map_$_iter__17373(s__17374){
return (new cljs.core.LazySeq(null,(function (){
var s__17374__$1 = s__17374;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__17374__$1);
if(temp__5290__auto__){
var s__17374__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17374__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__17374__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__17376 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__17375 = (0);
while(true){
if((i__17375 < size__9123__auto__)){
var vec__17377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__17375);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17377,(0),null);
var vec__17380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17377,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17380,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17380,(1),null);
cljs.core.chunk_append(b__17376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__17405 = (i__17375 + (1));
i__17375 = G__17405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17376),cljs$pprint$unzip_map_$_iter__17373(cljs.core.chunk_rest(s__17374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17376),null);
}
} else {
var vec__17383 = cljs.core.first(s__17374__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17383,(0),null);
var vec__17386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17383,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17386,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17386,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__17373(cljs.core.rest(s__17374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9124__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9124__auto__ = (function cljs$pprint$unzip_map_$_iter__17389(s__17390){
return (new cljs.core.LazySeq(null,(function (){
var s__17390__$1 = s__17390;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__17390__$1);
if(temp__5290__auto__){
var s__17390__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17390__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__17390__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__17392 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__17391 = (0);
while(true){
if((i__17391 < size__9123__auto__)){
var vec__17393 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__17391);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17393,(0),null);
var vec__17396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17393,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17396,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17396,(1),null);
cljs.core.chunk_append(b__17392,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__17406 = (i__17391 + (1));
i__17391 = G__17406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17392),cljs$pprint$unzip_map_$_iter__17389(cljs.core.chunk_rest(s__17390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17392),null);
}
} else {
var vec__17399 = cljs.core.first(s__17390__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17399,(0),null);
var vec__17402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17399,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__17389(cljs.core.rest(s__17390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9124__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9124__auto__ = (function cljs$pprint$tuple_map_$_iter__17407(s__17408){
return (new cljs.core.LazySeq(null,(function (){
var s__17408__$1 = s__17408;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__17408__$1);
if(temp__5290__auto__){
var s__17408__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17408__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__17408__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__17410 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__17409 = (0);
while(true){
if((i__17409 < size__9123__auto__)){
var vec__17411 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__17409);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17411,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17411,(1),null);
cljs.core.chunk_append(b__17410,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__17417 = (i__17409 + (1));
i__17409 = G__17417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17410),cljs$pprint$tuple_map_$_iter__17407(cljs.core.chunk_rest(s__17408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17410),null);
}
} else {
var vec__17414 = cljs.core.first(s__17408__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17414,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__17407(cljs.core.rest(s__17408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9124__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__17418 = (n - (1));
n = G__17418;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__17419 = (n + (1));
n = G__17419;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__17421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__17421) : test.call(null,G__17421));
})()))){
return pos;
} else {
var G__17422 = (pos + (1));
pos = G__17422;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__8975__auto__ = (((pp == null))?null:pp);
var m__8976__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__8976__auto__.call(null,pp));
} else {
var m__8976__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__8976__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__17423 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__17423) : sym.call(null,G__17423));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__17426 = arguments.length;
switch (G__17426) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint17427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17427 = (function (writer,max_columns,fields,meta17428){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta17428 = meta17428;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_17429,meta17428__$1){
var self__ = this;
var _17429__$1 = this;
return (new cljs.pprint.t_cljs$pprint17427(self__.writer,self__.max_columns,self__.fields,meta17428__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint17427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_17429){
var self__ = this;
var _17429__$1 = this;
return self__.meta17428;
});})(fields))
;

cljs.pprint.t_cljs$pprint17427.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint17427.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint17427.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17430 = cljs.core._EQ_;
var expr__17431 = cljs.core.type(x);
if(cljs.core.truth_((pred__17430.cljs$core$IFn$_invoke$arity$2 ? pred__17430.cljs$core$IFn$_invoke$arity$2(String,expr__17431) : pred__17430.call(null,String,expr__17431)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__17430,expr__17431,this$__$1,fields){
return (function (p1__17424_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17424_SHARP_,"\n");
});})(s,nl,pred__17430,expr__17431,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__17430.cljs$core$IFn$_invoke$arity$2 ? pred__17430.cljs$core$IFn$_invoke$arity$2(Number,expr__17431) : pred__17430.call(null,Number,expr__17431)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17431)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint17427.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta17428], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint17427.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17427.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17427";

cljs.pprint.t_cljs$pprint17427.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.pprint/t_cljs$pprint17427");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint17427 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint17427(writer__$1,max_columns__$1,fields__$1,meta17428){
return (new cljs.pprint.t_cljs$pprint17427(writer__$1,max_columns__$1,fields__$1,meta17428));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint17427(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k17435,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__17439 = k17435;
var G__17439__$1 = (((G__17439 instanceof cljs.core.Keyword))?G__17439.fqn:null);
switch (G__17439__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17435,else__8933__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#cljs.pprint.logical-block{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17434){
var self__ = this;
var G__17434__$1 = this;
return (new cljs.core.RecordIter((0),G__17434__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__17440 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__17440(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17436,other17437){
var self__ = this;
var this17436__$1 = this;
return (!((other17437 == null))) && ((this17436__$1.constructor === other17437.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.parent,other17437.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.section,other17437.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.start_col,other17437.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.indent,other17437.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.done_nl,other17437.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.intra_block_nl,other17437.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.prefix,other17437.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.per_line_prefix,other17437.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.suffix,other17437.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.logical_block_callback,other17437.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17436__$1.__extmap,other17437.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__17434){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__17441 = cljs.core.keyword_identical_QMARK_;
var expr__17442 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__17444 = cljs.core.cst$kw$parent;
var G__17445 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17444,G__17445) : pred__17441.call(null,G__17444,G__17445));
})())){
return (new cljs.pprint.logical_block(G__17434,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17446 = cljs.core.cst$kw$section;
var G__17447 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17446,G__17447) : pred__17441.call(null,G__17446,G__17447));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__17434,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17448 = cljs.core.cst$kw$start_DASH_col;
var G__17449 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17448,G__17449) : pred__17441.call(null,G__17448,G__17449));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__17434,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17450 = cljs.core.cst$kw$indent;
var G__17451 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17450,G__17451) : pred__17441.call(null,G__17450,G__17451));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__17434,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17452 = cljs.core.cst$kw$done_DASH_nl;
var G__17453 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17452,G__17453) : pred__17441.call(null,G__17452,G__17453));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__17434,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17454 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__17455 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17454,G__17455) : pred__17441.call(null,G__17454,G__17455));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__17434,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17456 = cljs.core.cst$kw$prefix;
var G__17457 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17456,G__17457) : pred__17441.call(null,G__17456,G__17457));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__17434,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17458 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__17459 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17458,G__17459) : pred__17441.call(null,G__17458,G__17459));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__17434,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17460 = cljs.core.cst$kw$suffix;
var G__17461 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17460,G__17461) : pred__17441.call(null,G__17460,G__17461));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__17434,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17462 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__17463 = expr__17442;
return (pred__17441.cljs$core$IFn$_invoke$arity$2 ? pred__17441.cljs$core$IFn$_invoke$arity$2(G__17462,G__17463) : pred__17441.call(null,G__17462,G__17463));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__17434,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__17434),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__17434){
var self__ = this;
var this__8929__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__17434,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__17438){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__17438),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__17438),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__17438),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__17438),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__17438),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__17438),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__17438),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__17438),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__17438),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__17438),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17438,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__17465 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__17465;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k17467,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__17471 = k17467;
var G__17471__$1 = (((G__17471 instanceof cljs.core.Keyword))?G__17471.fqn:null);
switch (G__17471__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17467,else__8933__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17466){
var self__ = this;
var G__17466__$1 = this;
return (new cljs.core.RecordIter((0),G__17466__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__17472 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__17472(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17468,other17469){
var self__ = this;
var this17468__$1 = this;
return (!((other17469 == null))) && ((this17468__$1.constructor === other17469.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17468__$1.type_tag,other17469.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17468__$1.data,other17469.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17468__$1.trailing_white_space,other17469.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17468__$1.start_pos,other17469.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17468__$1.end_pos,other17469.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17468__$1.__extmap,other17469.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__17466){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__17473 = cljs.core.keyword_identical_QMARK_;
var expr__17474 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__17476 = cljs.core.cst$kw$type_DASH_tag;
var G__17477 = expr__17474;
return (pred__17473.cljs$core$IFn$_invoke$arity$2 ? pred__17473.cljs$core$IFn$_invoke$arity$2(G__17476,G__17477) : pred__17473.call(null,G__17476,G__17477));
})())){
return (new cljs.pprint.buffer_blob(G__17466,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17478 = cljs.core.cst$kw$data;
var G__17479 = expr__17474;
return (pred__17473.cljs$core$IFn$_invoke$arity$2 ? pred__17473.cljs$core$IFn$_invoke$arity$2(G__17478,G__17479) : pred__17473.call(null,G__17478,G__17479));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__17466,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17480 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__17481 = expr__17474;
return (pred__17473.cljs$core$IFn$_invoke$arity$2 ? pred__17473.cljs$core$IFn$_invoke$arity$2(G__17480,G__17481) : pred__17473.call(null,G__17480,G__17481));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__17466,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17482 = cljs.core.cst$kw$start_DASH_pos;
var G__17483 = expr__17474;
return (pred__17473.cljs$core$IFn$_invoke$arity$2 ? pred__17473.cljs$core$IFn$_invoke$arity$2(G__17482,G__17483) : pred__17473.call(null,G__17482,G__17483));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__17466,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17484 = cljs.core.cst$kw$end_DASH_pos;
var G__17485 = expr__17474;
return (pred__17473.cljs$core$IFn$_invoke$arity$2 ? pred__17473.cljs$core$IFn$_invoke$arity$2(G__17484,G__17485) : pred__17473.call(null,G__17484,G__17485));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__17466,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__17466),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__17466){
var self__ = this;
var this__8929__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__17466,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__17470){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17470),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__17470),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__17470),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17470),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17470),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17470,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__17255__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__17255__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k17488,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__17492 = k17488;
var G__17492__$1 = (((G__17492 instanceof cljs.core.Keyword))?G__17492.fqn:null);
switch (G__17492__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17488,else__8933__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#cljs.pprint.nl-t{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17487){
var self__ = this;
var G__17487__$1 = this;
return (new cljs.core.RecordIter((0),G__17487__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__17493 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__17493(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17489,other17490){
var self__ = this;
var this17489__$1 = this;
return (!((other17490 == null))) && ((this17489__$1.constructor === other17490.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17489__$1.type_tag,other17490.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17489__$1.type,other17490.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17489__$1.logical_block,other17490.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17489__$1.start_pos,other17490.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17489__$1.end_pos,other17490.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17489__$1.__extmap,other17490.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__17487){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__17494 = cljs.core.keyword_identical_QMARK_;
var expr__17495 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__17497 = cljs.core.cst$kw$type_DASH_tag;
var G__17498 = expr__17495;
return (pred__17494.cljs$core$IFn$_invoke$arity$2 ? pred__17494.cljs$core$IFn$_invoke$arity$2(G__17497,G__17498) : pred__17494.call(null,G__17497,G__17498));
})())){
return (new cljs.pprint.nl_t(G__17487,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17499 = cljs.core.cst$kw$type;
var G__17500 = expr__17495;
return (pred__17494.cljs$core$IFn$_invoke$arity$2 ? pred__17494.cljs$core$IFn$_invoke$arity$2(G__17499,G__17500) : pred__17494.call(null,G__17499,G__17500));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__17487,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17501 = cljs.core.cst$kw$logical_DASH_block;
var G__17502 = expr__17495;
return (pred__17494.cljs$core$IFn$_invoke$arity$2 ? pred__17494.cljs$core$IFn$_invoke$arity$2(G__17501,G__17502) : pred__17494.call(null,G__17501,G__17502));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__17487,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17503 = cljs.core.cst$kw$start_DASH_pos;
var G__17504 = expr__17495;
return (pred__17494.cljs$core$IFn$_invoke$arity$2 ? pred__17494.cljs$core$IFn$_invoke$arity$2(G__17503,G__17504) : pred__17494.call(null,G__17503,G__17504));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__17487,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17505 = cljs.core.cst$kw$end_DASH_pos;
var G__17506 = expr__17495;
return (pred__17494.cljs$core$IFn$_invoke$arity$2 ? pred__17494.cljs$core$IFn$_invoke$arity$2(G__17505,G__17506) : pred__17494.call(null,G__17505,G__17506));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__17487,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__17487),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__17487){
var self__ = this;
var this__8929__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__17487,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__17491){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17491),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__17491),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17491),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17491),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17491),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17491,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__17255__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__17255__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k17509,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__17513 = k17509;
var G__17513__$1 = (((G__17513 instanceof cljs.core.Keyword))?G__17513.fqn:null);
switch (G__17513__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17509,else__8933__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17508){
var self__ = this;
var G__17508__$1 = this;
return (new cljs.core.RecordIter((0),G__17508__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__17514 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__17514(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17510,other17511){
var self__ = this;
var this17510__$1 = this;
return (!((other17511 == null))) && ((this17510__$1.constructor === other17511.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17510__$1.type_tag,other17511.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17510__$1.logical_block,other17511.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17510__$1.start_pos,other17511.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17510__$1.end_pos,other17511.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17510__$1.__extmap,other17511.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__17508){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__17515 = cljs.core.keyword_identical_QMARK_;
var expr__17516 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__17518 = cljs.core.cst$kw$type_DASH_tag;
var G__17519 = expr__17516;
return (pred__17515.cljs$core$IFn$_invoke$arity$2 ? pred__17515.cljs$core$IFn$_invoke$arity$2(G__17518,G__17519) : pred__17515.call(null,G__17518,G__17519));
})())){
return (new cljs.pprint.start_block_t(G__17508,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17520 = cljs.core.cst$kw$logical_DASH_block;
var G__17521 = expr__17516;
return (pred__17515.cljs$core$IFn$_invoke$arity$2 ? pred__17515.cljs$core$IFn$_invoke$arity$2(G__17520,G__17521) : pred__17515.call(null,G__17520,G__17521));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__17508,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17522 = cljs.core.cst$kw$start_DASH_pos;
var G__17523 = expr__17516;
return (pred__17515.cljs$core$IFn$_invoke$arity$2 ? pred__17515.cljs$core$IFn$_invoke$arity$2(G__17522,G__17523) : pred__17515.call(null,G__17522,G__17523));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__17508,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17524 = cljs.core.cst$kw$end_DASH_pos;
var G__17525 = expr__17516;
return (pred__17515.cljs$core$IFn$_invoke$arity$2 ? pred__17515.cljs$core$IFn$_invoke$arity$2(G__17524,G__17525) : pred__17515.call(null,G__17524,G__17525));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__17508,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__17508),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__17508){
var self__ = this;
var this__8929__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__17508,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__17512){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17512),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17512),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17512),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17512),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17512,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__17255__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__17255__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k17528,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__17532 = k17528;
var G__17532__$1 = (((G__17532 instanceof cljs.core.Keyword))?G__17532.fqn:null);
switch (G__17532__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17528,else__8933__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17527){
var self__ = this;
var G__17527__$1 = this;
return (new cljs.core.RecordIter((0),G__17527__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__17533 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__17533(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17529,other17530){
var self__ = this;
var this17529__$1 = this;
return (!((other17530 == null))) && ((this17529__$1.constructor === other17530.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17529__$1.type_tag,other17530.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17529__$1.logical_block,other17530.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17529__$1.start_pos,other17530.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17529__$1.end_pos,other17530.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17529__$1.__extmap,other17530.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__17527){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__17534 = cljs.core.keyword_identical_QMARK_;
var expr__17535 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__17537 = cljs.core.cst$kw$type_DASH_tag;
var G__17538 = expr__17535;
return (pred__17534.cljs$core$IFn$_invoke$arity$2 ? pred__17534.cljs$core$IFn$_invoke$arity$2(G__17537,G__17538) : pred__17534.call(null,G__17537,G__17538));
})())){
return (new cljs.pprint.end_block_t(G__17527,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17539 = cljs.core.cst$kw$logical_DASH_block;
var G__17540 = expr__17535;
return (pred__17534.cljs$core$IFn$_invoke$arity$2 ? pred__17534.cljs$core$IFn$_invoke$arity$2(G__17539,G__17540) : pred__17534.call(null,G__17539,G__17540));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__17527,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17541 = cljs.core.cst$kw$start_DASH_pos;
var G__17542 = expr__17535;
return (pred__17534.cljs$core$IFn$_invoke$arity$2 ? pred__17534.cljs$core$IFn$_invoke$arity$2(G__17541,G__17542) : pred__17534.call(null,G__17541,G__17542));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__17527,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17543 = cljs.core.cst$kw$end_DASH_pos;
var G__17544 = expr__17535;
return (pred__17534.cljs$core$IFn$_invoke$arity$2 ? pred__17534.cljs$core$IFn$_invoke$arity$2(G__17543,G__17544) : pred__17534.call(null,G__17543,G__17544));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__17527,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__17527),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__17527){
var self__ = this;
var this__8929__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__17527,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__17531){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17531),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17531),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17531),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17531),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17531,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__17255__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__17255__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k17547,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__17551 = k17547;
var G__17551__$1 = (((G__17551 instanceof cljs.core.Keyword))?G__17551.fqn:null);
switch (G__17551__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17547,else__8933__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#cljs.pprint.indent-t{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17546){
var self__ = this;
var G__17546__$1 = this;
return (new cljs.core.RecordIter((0),G__17546__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__17552 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__17552(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17548,other17549){
var self__ = this;
var this17548__$1 = this;
return (!((other17549 == null))) && ((this17548__$1.constructor === other17549.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17548__$1.type_tag,other17549.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17548__$1.logical_block,other17549.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17548__$1.relative_to,other17549.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17548__$1.offset,other17549.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17548__$1.start_pos,other17549.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17548__$1.end_pos,other17549.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17548__$1.__extmap,other17549.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__17546){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__17553 = cljs.core.keyword_identical_QMARK_;
var expr__17554 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__17556 = cljs.core.cst$kw$type_DASH_tag;
var G__17557 = expr__17554;
return (pred__17553.cljs$core$IFn$_invoke$arity$2 ? pred__17553.cljs$core$IFn$_invoke$arity$2(G__17556,G__17557) : pred__17553.call(null,G__17556,G__17557));
})())){
return (new cljs.pprint.indent_t(G__17546,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17558 = cljs.core.cst$kw$logical_DASH_block;
var G__17559 = expr__17554;
return (pred__17553.cljs$core$IFn$_invoke$arity$2 ? pred__17553.cljs$core$IFn$_invoke$arity$2(G__17558,G__17559) : pred__17553.call(null,G__17558,G__17559));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__17546,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17560 = cljs.core.cst$kw$relative_DASH_to;
var G__17561 = expr__17554;
return (pred__17553.cljs$core$IFn$_invoke$arity$2 ? pred__17553.cljs$core$IFn$_invoke$arity$2(G__17560,G__17561) : pred__17553.call(null,G__17560,G__17561));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__17546,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17562 = cljs.core.cst$kw$offset;
var G__17563 = expr__17554;
return (pred__17553.cljs$core$IFn$_invoke$arity$2 ? pred__17553.cljs$core$IFn$_invoke$arity$2(G__17562,G__17563) : pred__17553.call(null,G__17562,G__17563));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__17546,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17564 = cljs.core.cst$kw$start_DASH_pos;
var G__17565 = expr__17554;
return (pred__17553.cljs$core$IFn$_invoke$arity$2 ? pred__17553.cljs$core$IFn$_invoke$arity$2(G__17564,G__17565) : pred__17553.call(null,G__17564,G__17565));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__17546,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17566 = cljs.core.cst$kw$end_DASH_pos;
var G__17567 = expr__17554;
return (pred__17553.cljs$core$IFn$_invoke$arity$2 ? pred__17553.cljs$core$IFn$_invoke$arity$2(G__17566,G__17567) : pred__17553.call(null,G__17566,G__17567));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__17546,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__17546),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__17546){
var self__ = this;
var this__8929__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__17546,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__17550){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__17550),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__17550),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__17550),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__17550),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17550),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__17550),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17550,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__17255__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__17255__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__9295__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9296__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9297__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9298__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9299__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__,hierarchy__9299__auto__){
return (function (p1__17570_SHARP_,p2__17569_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__17569_SHARP_);
});})(method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__,hierarchy__9299__auto__))
,cljs.core.cst$kw$default,hierarchy__9299__auto__,method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5290__auto___17572 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5290__auto___17572)){
var cb_17573 = temp__5290__auto___17572;
var G__17571_17574 = cljs.core.cst$kw$start;
(cb_17573.cljs$core$IFn$_invoke$arity$1 ? cb_17573.cljs$core$IFn$_invoke$arity$1(G__17571_17574) : cb_17573.call(null,G__17571_17574));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5290__auto___17575 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5290__auto___17575)){
var prefix_17576 = temp__5290__auto___17575;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_17576);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5290__auto___17578 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5290__auto___17578)){
var cb_17579 = temp__5290__auto___17578;
var G__17577_17580 = cljs.core.cst$kw$end;
(cb_17579.cljs$core$IFn$_invoke$arity$1 ? cb_17579.cljs$core$IFn$_invoke$arity$1(G__17577_17580) : cb_17579.call(null,G__17577_17580));
} else {
}

var temp__5290__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5290__auto__)){
var suffix = temp__5290__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__17581 = cljs.core._EQ_;
var expr__17582 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__17584 = cljs.core.cst$kw$block;
var G__17585 = expr__17582;
return (pred__17581.cljs$core$IFn$_invoke$arity$2 ? pred__17581.cljs$core$IFn$_invoke$arity$2(G__17584,G__17585) : pred__17581.call(null,G__17584,G__17585));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__17586 = cljs.core.cst$kw$current;
var G__17587 = expr__17582;
return (pred__17581.cljs$core$IFn$_invoke$arity$2 ? pred__17581.cljs$core$IFn$_invoke$arity$2(G__17586,G__17587) : pred__17581.call(null,G__17586,G__17587));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17582)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__8242__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__8242__auto__){
return or__8242__auto__;
} else {
var and__8230__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__8230__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__8230__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5288__auto___17588 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5288__auto___17588)){
var tws_17589 = temp__5288__auto___17588;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17589);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__17590 = cljs.core.seq(tokens);
var chunk__17591 = null;
var count__17592 = (0);
var i__17593 = (0);
while(true){
if((i__17593 < count__17592)){
var token = chunk__17591.cljs$core$IIndexed$_nth$arity$2(null,i__17593);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5288__auto___17594 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5288__auto___17594)){
var tws_17595 = temp__5288__auto___17594;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17595);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_17596 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8230__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8230__auto__)){
return tws_17596;
} else {
return and__8230__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17596);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__17597 = seq__17590;
var G__17598 = chunk__17591;
var G__17599 = count__17592;
var G__17600 = (i__17593 + (1));
seq__17590 = G__17597;
chunk__17591 = G__17598;
count__17592 = G__17599;
i__17593 = G__17600;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__17590);
if(temp__5290__auto__){
var seq__17590__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17590__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__17590__$1);
var G__17601 = cljs.core.chunk_rest(seq__17590__$1);
var G__17602 = c__9173__auto__;
var G__17603 = cljs.core.count(c__9173__auto__);
var G__17604 = (0);
seq__17590 = G__17601;
chunk__17591 = G__17602;
count__17592 = G__17603;
i__17593 = G__17604;
continue;
} else {
var token = cljs.core.first(seq__17590__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5288__auto___17605 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5288__auto___17605)){
var tws_17606 = temp__5288__auto___17605;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17606);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_17607 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8230__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8230__auto__)){
return tws_17607;
} else {
return and__8230__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17607);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__17608 = cljs.core.next(seq__17590__$1);
var G__17609 = null;
var G__17610 = (0);
var G__17611 = (0);
seq__17590 = G__17608;
chunk__17591 = G__17609;
count__17592 = G__17610;
i__17593 = G__17611;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__8242__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__8230__auto__ = miser_width;
if(cljs.core.truth_(and__8230__auto__)){
var and__8230__auto____$1 = maxcol;
if(cljs.core.truth_(and__8230__auto____$1)){
var and__8230__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__8230__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__8230__auto____$2;
}
} else {
return and__8230__auto____$1;
}
} else {
return and__8230__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__9295__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9296__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9297__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9298__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9299__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__,hierarchy__9299__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__,hierarchy__9299__auto__))
,cljs.core.cst$kw$default,hierarchy__9299__auto__,method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__8242__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
var or__8242__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__8242__auto____$1){
return or__8242__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__17612_SHARP_){
return cljs.core.not((function (){var and__8230__auto__ = cljs.pprint.nl_t_QMARK_(p1__17612_SHARP_);
if(cljs.core.truth_(and__8230__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__17612_SHARP_),lb);
} else {
return and__8230__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__17613_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__17613_SHARP_);
return cljs.core.not((function (){var and__8230__auto__ = cljs.pprint.nl_t_QMARK_(p1__17613_SHARP_);
if(cljs.core.truth_(and__8230__auto__)){
var or__8242__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__8242__auto__){
return or__8242__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__8230__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__17614 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__17614;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_17615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_17615);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17616_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__17616_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__17617 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17617,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17617,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__17620 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__17623 = newl;
var G__17624 = this$;
var G__17625 = section;
var G__17626 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__17623,G__17624,G__17625,G__17626) : cljs.pprint.emit_nl_QMARK_.call(null,G__17623,G__17624,G__17625,G__17626));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__17627 = new_buffer;
buffer = G__17627;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5288__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5288__auto__)){
var buf = temp__5288__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5290__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5290__auto__)){
var tws = temp__5290__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_17632 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_17633 = (oldpos_17632 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_17633);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_17632,newpos_17633));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__17628_17634 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__17629_17635 = null;
var count__17630_17636 = (0);
var i__17631_17637 = (0);
while(true){
if((i__17631_17637 < count__17630_17636)){
var l_17638__$1 = chunk__17629_17635.cljs$core$IIndexed$_nth$arity$2(null,i__17631_17637);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_17638__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__17639 = seq__17628_17634;
var G__17640 = chunk__17629_17635;
var G__17641 = count__17630_17636;
var G__17642 = (i__17631_17637 + (1));
seq__17628_17634 = G__17639;
chunk__17629_17635 = G__17640;
count__17630_17636 = G__17641;
i__17631_17637 = G__17642;
continue;
} else {
var temp__5290__auto___17643 = cljs.core.seq(seq__17628_17634);
if(temp__5290__auto___17643){
var seq__17628_17644__$1 = temp__5290__auto___17643;
if(cljs.core.chunked_seq_QMARK_(seq__17628_17644__$1)){
var c__9173__auto___17645 = cljs.core.chunk_first(seq__17628_17644__$1);
var G__17646 = cljs.core.chunk_rest(seq__17628_17644__$1);
var G__17647 = c__9173__auto___17645;
var G__17648 = cljs.core.count(c__9173__auto___17645);
var G__17649 = (0);
seq__17628_17634 = G__17646;
chunk__17629_17635 = G__17647;
count__17630_17636 = G__17648;
i__17631_17637 = G__17649;
continue;
} else {
var l_17650__$1 = cljs.core.first(seq__17628_17644__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_17650__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__17651 = cljs.core.next(seq__17628_17644__$1);
var G__17652 = null;
var G__17653 = (0);
var G__17654 = (0);
seq__17628_17634 = G__17651;
chunk__17629_17635 = G__17652;
count__17630_17636 = G__17653;
i__17631_17637 = G__17654;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint17655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17655 = (function (writer,max_columns,miser_width,lb,fields,meta17656){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta17656 = meta17656;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_17657,meta17656__$1){
var self__ = this;
var _17657__$1 = this;
return (new cljs.pprint.t_cljs$pprint17655(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta17656__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_17657){
var self__ = this;
var _17657__$1 = this;
return self__.meta17656;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17655.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17655.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17658 = cljs.core._EQ_;
var expr__17659 = cljs.core.type(x);
if(cljs.core.truth_((pred__17658.cljs$core$IFn$_invoke$arity$2 ? pred__17658.cljs$core$IFn$_invoke$arity$2(String,expr__17659) : pred__17658.call(null,String,expr__17659)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__17658.cljs$core$IFn$_invoke$arity$2 ? pred__17658.cljs$core$IFn$_invoke$arity$2(Number,expr__17659) : pred__17658.call(null,Number,expr__17659)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17659)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17655.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17655.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint17655.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17655.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta17656], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17655.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17655.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17655";

cljs.pprint.t_cljs$pprint17655.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.pprint/t_cljs$pprint17655");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint17655 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint17655(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta17656){
return (new cljs.pprint.t_cljs$pprint17655(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta17656));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint17655(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5290__auto___17662 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5290__auto___17662)){
var cb_17663 = temp__5290__auto___17662;
var G__17661_17664 = cljs.core.cst$kw$start;
(cb_17663.cljs$core$IFn$_invoke$arity$1 ? cb_17663.cljs$core$IFn$_invoke$arity$1(G__17661_17664) : cb_17663.call(null,G__17661_17664));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5290__auto___17666 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5290__auto___17666)){
var cb_17667 = temp__5290__auto___17666;
var G__17665_17668 = cljs.core.cst$kw$end;
(cb_17667.cljs$core$IFn$_invoke$arity$1 ? cb_17667.cljs$core$IFn$_invoke$arity$1(G__17665_17668) : cb_17667.call(null,G__17665_17668));
} else {
}
} else {
var oldpos_17669 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_17670 = (oldpos_17669 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_17670);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_17669,newpos_17670));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__17671 = cljs.core._EQ_;
var expr__17672 = relative_to;
if(cljs.core.truth_((function (){var G__17674 = cljs.core.cst$kw$block;
var G__17675 = expr__17672;
return (pred__17671.cljs$core$IFn$_invoke$arity$2 ? pred__17671.cljs$core$IFn$_invoke$arity$2(G__17674,G__17675) : pred__17671.call(null,G__17674,G__17675));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__17676 = cljs.core.cst$kw$current;
var G__17677 = expr__17672;
return (pred__17671.cljs$core$IFn$_invoke$arity$2 ? pred__17671.cljs$core$IFn$_invoke$arity$2(G__17676,G__17677) : pred__17671.call(null,G__17676,G__17677));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17672)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__17678_SHARP_){
var temp__5290__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__17678_SHARP_));
if(cljs.core.truth_(temp__5290__auto__)){
var v = temp__5290__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__17678_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__8230__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__8230__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__8230__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__8230__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__8230__auto__)){
var and__8230__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__8230__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__8230__auto____$1;
}
} else {
return and__8230__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__9526__auto__ = [];
var len__9519__auto___17697 = arguments.length;
var i__9520__auto___17698 = (0);
while(true){
if((i__9520__auto___17698 < len__9519__auto___17697)){
args__9526__auto__.push((arguments[i__9520__auto___17698]));

var G__17699 = (i__9520__auto___17698 + (1));
i__9520__auto___17698 = G__17699;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_17683 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_17684 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_17685 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_17686 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_17687 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_17688 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_17689 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_17690 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_17691 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_17692 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_17693 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_17694 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__17238__auto___17700 = base_writer;
var new_writer__17239__auto___17701 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__17238__auto___17700));
var _STAR_out_STAR_17695_17702 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__17239__auto___17701)?cljs.pprint.make_pretty_writer(base_writer__17238__auto___17700,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__17238__auto___17700);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17695_17702;
}} else {
var _STAR_out_STAR_17696_17703 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17696_17703;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_17694;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_17693;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_17692;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_17691;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_17690;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_17689;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_17688;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_17687;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_17686;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_17685;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_17684;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_17683;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq17681){
var G__17682 = cljs.core.first(seq17681);
var seq17681__$1 = cljs.core.next(seq17681);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__17682,seq17681__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__17705 = arguments.length;
switch (G__17705) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_17706 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17706;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__17238__auto__ = writer;
var new_writer__17239__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__17238__auto__));
var _STAR_out_STAR_17707 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__17239__auto__)?cljs.pprint.make_pretty_writer(base_writer__17238__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__17238__auto__);

try{var _STAR_print_pretty_STAR_17708_17710 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_17708_17710;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17707;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__8230__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__8230__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__8230__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__9526__auto__ = [];
var len__9519__auto___17714 = arguments.length;
var i__9520__auto___17715 = (0);
while(true){
if((i__9520__auto___17715 < len__9519__auto___17714)){
args__9526__auto__.push((arguments[i__9520__auto___17715]));

var G__17716 = (i__9520__auto___17715 + (1));
i__9520__auto___17715 = G__17716;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((2) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9527__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq17711){
var G__17712 = cljs.core.first(seq17711);
var seq17711__$1 = cljs.core.next(seq17711);
var G__17713 = cljs.core.first(seq17711__$1);
var seq17711__$2 = cljs.core.next(seq17711__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__17712,G__17713,seq17711__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k17718,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__17722 = k17718;
var G__17722__$1 = (((G__17722 instanceof cljs.core.Keyword))?G__17722.fqn:null);
switch (G__17722__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17718,else__8933__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17717){
var self__ = this;
var G__17717__$1 = this;
return (new cljs.core.RecordIter((0),G__17717__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__17723 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__17723(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17719,other17720){
var self__ = this;
var this17719__$1 = this;
return (!((other17720 == null))) && ((this17719__$1.constructor === other17720.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17719__$1.seq,other17720.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17719__$1.rest,other17720.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17719__$1.pos,other17720.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17719__$1.__extmap,other17720.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__17717){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__17724 = cljs.core.keyword_identical_QMARK_;
var expr__17725 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__17727 = cljs.core.cst$kw$seq;
var G__17728 = expr__17725;
return (pred__17724.cljs$core$IFn$_invoke$arity$2 ? pred__17724.cljs$core$IFn$_invoke$arity$2(G__17727,G__17728) : pred__17724.call(null,G__17727,G__17728));
})())){
return (new cljs.pprint.arg_navigator(G__17717,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17729 = cljs.core.cst$kw$rest;
var G__17730 = expr__17725;
return (pred__17724.cljs$core$IFn$_invoke$arity$2 ? pred__17724.cljs$core$IFn$_invoke$arity$2(G__17729,G__17730) : pred__17724.call(null,G__17729,G__17730));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__17717,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17731 = cljs.core.cst$kw$pos;
var G__17732 = expr__17725;
return (pred__17724.cljs$core$IFn$_invoke$arity$2 ? pred__17724.cljs$core$IFn$_invoke$arity$2(G__17731,G__17732) : pred__17724.call(null,G__17731,G__17732));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__17717,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__17717),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__17717){
var self__ = this;
var this__8929__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__17717,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__17721){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__17721),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__17721),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__17721),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17721,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__17734 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17734,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17734,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__17737 = navigator;
var G__17738 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__17737,G__17738) : cljs.pprint.relative_reposition.call(null,G__17737,G__17738));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k17740,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__17744 = k17740;
var G__17744__$1 = (((G__17744 instanceof cljs.core.Keyword))?G__17744.fqn:null);
switch (G__17744__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17740,else__8933__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17739){
var self__ = this;
var G__17739__$1 = this;
return (new cljs.core.RecordIter((0),G__17739__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__17745 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__17745(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17741,other17742){
var self__ = this;
var this17741__$1 = this;
return (!((other17742 == null))) && ((this17741__$1.constructor === other17742.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17741__$1.func,other17742.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17741__$1.def,other17742.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17741__$1.params,other17742.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17741__$1.offset,other17742.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17741__$1.__extmap,other17742.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__17739){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__17746 = cljs.core.keyword_identical_QMARK_;
var expr__17747 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__17749 = cljs.core.cst$kw$func;
var G__17750 = expr__17747;
return (pred__17746.cljs$core$IFn$_invoke$arity$2 ? pred__17746.cljs$core$IFn$_invoke$arity$2(G__17749,G__17750) : pred__17746.call(null,G__17749,G__17750));
})())){
return (new cljs.pprint.compiled_directive(G__17739,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17751 = cljs.core.cst$kw$def;
var G__17752 = expr__17747;
return (pred__17746.cljs$core$IFn$_invoke$arity$2 ? pred__17746.cljs$core$IFn$_invoke$arity$2(G__17751,G__17752) : pred__17746.call(null,G__17751,G__17752));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__17739,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17753 = cljs.core.cst$kw$params;
var G__17754 = expr__17747;
return (pred__17746.cljs$core$IFn$_invoke$arity$2 ? pred__17746.cljs$core$IFn$_invoke$arity$2(G__17753,G__17754) : pred__17746.call(null,G__17753,G__17754));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__17739,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17755 = cljs.core.cst$kw$offset;
var G__17756 = expr__17747;
return (pred__17746.cljs$core$IFn$_invoke$arity$2 ? pred__17746.cljs$core$IFn$_invoke$arity$2(G__17755,G__17756) : pred__17746.call(null,G__17755,G__17756));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__17739,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__17739),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__17739){
var self__ = this;
var this__8929__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__17739,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__17743){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__17743),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__17743),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__17743),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__17743),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17743,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__17758,navigator){
var vec__17759 = p__17758;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17759,(0),null);
var vec__17762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17759,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17762,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17762,(1),null);
var vec__17765 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17765,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17765,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__17768 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17768,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17768,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__8242__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__17771 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17771,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17771,(1),null);
var base_output = (function (){var or__8242__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__17774_SHARP_){
if((p1__17774_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__17774_SHARP_,base),cljs.core.quot(p1__17774_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__17775_SHARP_){
if((p1__17775_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__17775_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__17775_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__17777 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17777,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17777,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_17780 = (arg < (0));
var pos_arg_17781 = ((neg_17780)?(- arg):arg);
var raw_str_17782 = cljs.pprint.opt_base_str(base,pos_arg_17781);
var group_str_17783 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_17780,pos_arg_17781,raw_str_17782,vec__17777,arg,arg_navigator__$1){
return (function (p1__17776_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__17776_SHARP_);
});})(neg_17780,pos_arg_17781,raw_str_17782,vec__17777,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_17782));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_17782);
var signed_str_17784 = ((neg_17780)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_17783)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_17783)].join(''):group_str_17783
));
var padded_str_17785 = (((signed_str_17784.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_17784.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_17784)].join(''):signed_str_17784);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_17785], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__17786 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__17787 = (pos - (1));
var G__17788 = cljs.core.first(remainder);
var G__17789 = cljs.core.next(remainder);
acc = G__17786;
pos = G__17787;
this$ = G__17788;
remainder = G__17789;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__17790 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17790,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17790,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_17793 = (((arg < (0)))?(- arg):arg);
var parts_17794 = cljs.pprint.remainders((1000),abs_arg_17793);
if((cljs.core.count(parts_17794) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_17795 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_17794);
var full_str_17796 = cljs.pprint.add_english_scales(parts_strs_17795,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_17796)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__17797 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17797,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17797,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_17800 = (((arg < (0)))?(- arg):arg);
var parts_17801 = cljs.pprint.remainders((1000),abs_arg_17800);
if((cljs.core.count(parts_17801) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_17802 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_17801));
var head_str_17803 = cljs.pprint.add_english_scales(parts_strs_17802,(1));
var tail_str_17804 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_17801));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_17803))) && (!(cljs.core.empty_QMARK_(tail_str_17804))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_17803),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_17804)].join(''):((!(cljs.core.empty_QMARK_(head_str_17803)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_17803),"th"].join(''):tail_str_17804
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_17805 = cljs.core.rem(arg,(100));
var not_teens_17806 = (((11) < low_two_digits_17805)) || (((19) > low_two_digits_17805));
var low_digit_17807 = cljs.core.rem(low_two_digits_17805,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_17807 === (1))) && (not_teens_17806))?"st":((((low_digit_17807 === (2))) && (not_teens_17806))?"nd":((((low_digit_17807 === (3))) && (not_teens_17806))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__17808 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17808,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17808,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_17811 = cljs.pprint.remainders((10),arg);
var acc_17812 = cljs.core.PersistentVector.EMPTY;
var pos_17813 = (cljs.core.count(digits_17811) - (1));
var digits_17814__$1 = digits_17811;
while(true){
if(cljs.core.empty_QMARK_(digits_17814__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_17812)], 0));
} else {
var digit_17815 = cljs.core.first(digits_17814__$1);
var G__17816 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_17815))?acc_17812:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_17812,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_17813),(digit_17815 - (1)))));
var G__17817 = (pos_17813 - (1));
var G__17818 = cljs.core.next(digits_17814__$1);
acc_17812 = G__17816;
pos_17813 = G__17817;
digits_17814__$1 = G__17818;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__17819 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17819,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17819,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__17822 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17822,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17822,(1),null);
var pred__17825_17832 = cljs.core._EQ_;
var expr__17826_17833 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__17828 = "o";
var G__17829 = expr__17826_17833;
return (pred__17825_17832.cljs$core$IFn$_invoke$arity$2 ? pred__17825_17832.cljs$core$IFn$_invoke$arity$2(G__17828,G__17829) : pred__17825_17832.call(null,G__17828,G__17829));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__17830 = "u";
var G__17831 = expr__17826_17833;
return (pred__17825_17832.cljs$core$IFn$_invoke$arity$2 ? pred__17825_17832.cljs$core$IFn$_invoke$arity$2(G__17830,G__17831) : pred__17825_17832.call(null,G__17830,G__17831));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__17825_17832.cljs$core$IFn$_invoke$arity$2 ? pred__17825_17832.cljs$core$IFn$_invoke$arity$2(null,expr__17826_17833) : pred__17825_17832.call(null,null,expr__17826_17833)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17826_17833)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__17834 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17834,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17834,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__17837 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17837,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17837,(1),null);
var vec__17840 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__17843 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17843,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17843,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__17846 = (i - (1));
i = G__17846;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__8242__auto__ = d;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__8594__auto__ = (2);
var y__8595__auto__ = w;
return ((x__8594__auto__ > y__8595__auto__) ? x__8594__auto__ : y__8595__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__8594__auto__ = (e + (1));
var y__8595__auto__ = (w__$1 - (1));
return ((x__8594__auto__ > y__8595__auto__) ? x__8594__auto__ : y__8595__auto__);
})():(w__$1 + e)
));
var vec__17847 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17847,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17847,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17847,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17847,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__17850 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17850,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17850,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__17853 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17853,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17853,(1),null);
var vec__17856 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17856,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17856,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__17859 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__8242__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__17862 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__8230__auto__ = w;
if(cljs.core.truth_(and__8230__auto__)){
var and__8230__auto____$1 = d;
if(cljs.core.truth_(and__8230__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__8230__auto____$1;
}
} else {
return and__8230__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_17865 = cljs.core.count(fixed_repr__$1);
var signed_len_17866 = (cljs.core.truth_(add_sign)?(len_17865 + (1)):len_17865);
var prepend_zero_17867__$1 = (prepend_zero) && (!((signed_len_17866 >= w)));
var append_zero_17868__$1 = (append_zero) && (!((signed_len_17866 >= w)));
var full_len_17869 = (((prepend_zero_17867__$1) || (append_zero_17868__$1))?(signed_len_17866 + (1)):signed_len_17866);
if(cljs.core.truth_((function (){var and__8230__auto__ = (full_len_17869 > w);
if(and__8230__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8230__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_17869),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_17867__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_17868__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__17870 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17870,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17870,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__17876_17886 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__17877_17887 = G__17876_17886;
var mantissa_17888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877_17887,(0),null);
var exp_17889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877_17887,(1),null);
var G__17876_17890__$1 = G__17876_17886;
while(true){
var vec__17880_17891 = G__17876_17890__$1;
var mantissa_17892__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880_17891,(0),null);
var exp_17893__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880_17891,(1),null);
var w_17894 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_17895 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_17896 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_17897 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_17898 = (function (){var or__8242__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return "E";
}
})();
var add_sign_17899 = (function (){var or__8242__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_17900 = (k_17897 <= (0));
var scaled_exp_17901 = (exp_17893__$1 - (k_17897 - (1)));
var scaled_exp_str_17902 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_17901))].join('');
var scaled_exp_str_17903__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_17898),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_17901 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_17896)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_17896 - cljs.core.count(scaled_exp_str_17902)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_17902)].join('');
var exp_width_17904 = cljs.core.count(scaled_exp_str_17903__$1);
var base_mantissa_width_17905 = cljs.core.count(mantissa_17892__$1);
var scaled_mantissa_17906 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_17897),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_17892__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_17895)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_17895 - (base_mantissa_width_17905 - (1))) - (((k_17897 < (0)))?(- k_17897):(0))),"0")):null))].join('');
var w_mantissa_17907 = (cljs.core.truth_(w_17894)?(w_17894 - exp_width_17904):null);
var vec__17883_17908 = cljs.pprint.round_str(scaled_mantissa_17906,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_17897,(0)))?(d_17895 - (1)):(((k_17897 > (0)))?d_17895:(((k_17897 < (0)))?(d_17895 - (1)):null))),(cljs.core.truth_(w_mantissa_17907)?(w_mantissa_17907 - (cljs.core.truth_(add_sign_17899)?(1):(0))):null));
var rounded_mantissa_17909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883_17908,(0),null);
var __17910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883_17908,(1),null);
var incr_exp_17911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883_17908,(2),null);
var full_mantissa_17912 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_17909,k_17897);
var append_zero_17913 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_17897,cljs.core.count(rounded_mantissa_17909))) && ((d_17895 == null));
if(cljs.core.not(incr_exp_17911)){
if(cljs.core.truth_(w_17894)){
var len_17914 = (cljs.core.count(full_mantissa_17912) + exp_width_17904);
var signed_len_17915 = (cljs.core.truth_(add_sign_17899)?(len_17914 + (1)):len_17914);
var prepend_zero_17916__$1 = (prepend_zero_17900) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_17915,w_17894)));
var full_len_17917 = ((prepend_zero_17916__$1)?(signed_len_17915 + (1)):signed_len_17915);
var append_zero_17918__$1 = (append_zero_17913) && ((full_len_17917 < w_17894));
if(cljs.core.truth_((function (){var and__8230__auto__ = (function (){var or__8242__auto__ = (full_len_17917 > w_17894);
if(or__8242__auto__){
return or__8242__auto__;
} else {
var and__8230__auto__ = e_17896;
if(cljs.core.truth_(and__8230__auto__)){
return ((exp_width_17904 - (2)) > e_17896);
} else {
return and__8230__auto__;
}
}
})();
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8230__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_17894,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_17894 - full_len_17917) - ((append_zero_17918__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_17899)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_17916__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_17912),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_17918__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_17903__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_17899)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_17900)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_17912),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_17913)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_17903__$1)].join('')], 0));
}
} else {
var G__17919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_17909,(exp_17893__$1 + (1))], null);
G__17876_17890__$1 = G__17919;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__17920 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__17923 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17923,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17923,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__8594__auto__ = cljs.core.count(mantissa);
var y__8595__auto__ = (function (){var x__8601__auto__ = n;
var y__8602__auto__ = (7);
return ((x__8601__auto__ < y__8602__auto__) ? x__8601__auto__ : y__8602__auto__);
})();
return ((x__8594__auto__ > y__8595__auto__) ? x__8594__auto__ : y__8595__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__17926 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17926,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17926,(1),null);
var vec__17929 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17929,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17929,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__8242__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return (arg < (0));
}
})();
var vec__17932 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8230__auto__)){
return add_sign;
} else {
return and__8230__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__8230__auto__){
return add_sign;
} else {
return and__8230__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__17935 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__17938 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17938,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17938,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__17941 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17941,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17941,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17944 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(1),null);
var vec__17947 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17947,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17947,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8242__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8242__auto__){
return or__8242__auto__;
} else {
var and__8230__auto__ = max_count;
if(cljs.core.truth_(and__8230__auto__)){
return (count >= max_count);
} else {
return and__8230__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__17950 = (count + (1));
var G__17951 = iter_result;
var G__17952 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__17950;
args__$1 = G__17951;
last_pos = G__17952;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17953 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17953,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17953,(1),null);
var vec__17956 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17956,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17956,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__8242__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8242__auto__){
return or__8242__auto__;
} else {
var and__8230__auto__ = max_count;
if(cljs.core.truth_(and__8230__auto__)){
return (count >= max_count);
} else {
return and__8230__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__17959 = (count + (1));
var G__17960 = cljs.core.next(arg_list__$1);
count = G__17959;
arg_list__$1 = G__17960;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17961 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17961,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17961,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8242__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8242__auto__){
return or__8242__auto__;
} else {
var and__8230__auto__ = max_count;
if(cljs.core.truth_(and__8230__auto__)){
return (count >= max_count);
} else {
return and__8230__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__17964 = (count + (1));
var G__17965 = iter_result;
var G__17966 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__17964;
navigator__$2 = G__17965;
last_pos = G__17966;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17967 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17967,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17967,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__8242__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8242__auto__){
return or__8242__auto__;
} else {
var and__8230__auto__ = max_count;
if(cljs.core.truth_(and__8230__auto__)){
return (count >= max_count);
} else {
return and__8230__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__17970 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17970,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17970,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__17973 = (count + (1));
var G__17974 = navigator__$3;
count = G__17973;
navigator__$2 = G__17974;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__17975 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_17978 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17978;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17975,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17975,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__17979 = cljs.core.next(clauses__$1);
var G__17980 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__17981 = iter_result;
clauses__$1 = G__17979;
acc = G__17980;
navigator__$1 = G__17981;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__17982 = (function (){var temp__5290__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5290__auto__)){
var else$ = temp__5290__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__17985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17982,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17982,(1),null);
var navigator__$1 = (function (){var or__8242__auto__ = new_navigator;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return navigator;
}
})();
var vec__17988 = (function (){var temp__5290__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5290__auto__)){
var p = temp__5290__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17988,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17988,(1),null);
var navigator__$2 = (function (){var or__8242__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__8242__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__8242__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__17991 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17991,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17991,(1),null);
var slots = (function (){var x__8594__auto__ = (1);
var y__8595__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__8594__auto__ > y__8595__auto__) ? x__8594__auto__ : y__8595__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__8594__auto__ = minpad;
var y__8595__auto__ = cljs.core.quot(total_pad,slots);
return ((x__8594__auto__ > y__8595__auto__) ? x__8594__auto__ : y__8595__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__8230__auto__ = eol_str;
if(cljs.core.truth_(and__8230__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__8230__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_17994__$1 = slots;
var extra_pad_17995__$1 = extra_pad;
var strs_17996__$1 = strs;
var pad_only_17997 = (function (){var or__8242__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_17996__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_17996__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_17997))?cljs.core.first(strs_17996__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__8242__auto__ = pad_only_17997;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
var or__8242__auto____$1 = cljs.core.next(strs_17996__$1);
if(or__8242__auto____$1){
return or__8242__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_17995__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__17998 = (slots_17994__$1 - (1));
var G__17999 = (extra_pad_17995__$1 - (1));
var G__18000 = (cljs.core.truth_(pad_only_17997)?strs_17996__$1:cljs.core.next(strs_17996__$1));
var G__18001 = false;
slots_17994__$1 = G__17998;
extra_pad_17995__$1 = G__17999;
strs_17996__$1 = G__18000;
pad_only_17997 = G__18001;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint18002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18002 = (function (writer,meta18003){
this.writer = writer;
this.meta18003 = meta18003;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18004,meta18003__$1){
var self__ = this;
var _18004__$1 = this;
return (new cljs.pprint.t_cljs$pprint18002(self__.writer,meta18003__$1));
});

cljs.pprint.t_cljs$pprint18002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18004){
var self__ = this;
var _18004__$1 = this;
return self__.meta18003;
});

cljs.pprint.t_cljs$pprint18002.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint18002.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18005 = cljs.core._EQ_;
var expr__18006 = cljs.core.type(x);
if(cljs.core.truth_((pred__18005.cljs$core$IFn$_invoke$arity$2 ? pred__18005.cljs$core$IFn$_invoke$arity$2(String,expr__18006) : pred__18005.call(null,String,expr__18006)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__18005.cljs$core$IFn$_invoke$arity$2 ? pred__18005.cljs$core$IFn$_invoke$arity$2(Number,expr__18006) : pred__18005.call(null,Number,expr__18006)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18006)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint18002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta18003], null);
});

cljs.pprint.t_cljs$pprint18002.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18002.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18002";

cljs.pprint.t_cljs$pprint18002.cljs$lang$ctorPrWriter = (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.pprint/t_cljs$pprint18002");
});

cljs.pprint.__GT_t_cljs$pprint18002 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint18002(writer__$1,meta18003){
return (new cljs.pprint.t_cljs$pprint18002(writer__$1,meta18003));
});

}

return (new cljs.pprint.t_cljs$pprint18002(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint18008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18008 = (function (writer,meta18009){
this.writer = writer;
this.meta18009 = meta18009;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18010,meta18009__$1){
var self__ = this;
var _18010__$1 = this;
return (new cljs.pprint.t_cljs$pprint18008(self__.writer,meta18009__$1));
});

cljs.pprint.t_cljs$pprint18008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18010){
var self__ = this;
var _18010__$1 = this;
return self__.meta18009;
});

cljs.pprint.t_cljs$pprint18008.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint18008.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18011 = cljs.core._EQ_;
var expr__18012 = cljs.core.type(x);
if(cljs.core.truth_((pred__18011.cljs$core$IFn$_invoke$arity$2 ? pred__18011.cljs$core$IFn$_invoke$arity$2(String,expr__18012) : pred__18011.call(null,String,expr__18012)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__18011.cljs$core$IFn$_invoke$arity$2 ? pred__18011.cljs$core$IFn$_invoke$arity$2(Number,expr__18012) : pred__18011.call(null,Number,expr__18012)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18012)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint18008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta18009], null);
});

cljs.pprint.t_cljs$pprint18008.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18008.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18008";

cljs.pprint.t_cljs$pprint18008.cljs$lang$ctorPrWriter = (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.pprint/t_cljs$pprint18008");
});

cljs.pprint.__GT_t_cljs$pprint18008 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint18008(writer__$1,meta18009){
return (new cljs.pprint.t_cljs$pprint18008(writer__$1,meta18009));
});

}

return (new cljs.pprint.t_cljs$pprint18008(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__8230__auto__ = first_QMARK_;
if(cljs.core.truth_(and__8230__auto__)){
var and__8230__auto____$1 = f;
if(cljs.core.truth_(and__8230__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__8230__auto____$1;
}
} else {
return and__8230__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__8230__auto__ = m;
if(cljs.core.truth_(and__8230__auto__)){
return (m.index + (1));
} else {
return and__8230__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint18014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18014 = (function (writer,last_was_whitespace_QMARK_,meta18015){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta18015 = meta18015;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_18016,meta18015__$1){
var self__ = this;
var _18016__$1 = this;
return (new cljs.pprint.t_cljs$pprint18014(self__.writer,self__.last_was_whitespace_QMARK_,meta18015__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_18016){
var self__ = this;
var _18016__$1 = this;
return self__.meta18015;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18014.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18014.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18017 = cljs.core._EQ_;
var expr__18018 = cljs.core.type(x);
if(cljs.core.truth_((pred__18017.cljs$core$IFn$_invoke$arity$2 ? pred__18017.cljs$core$IFn$_invoke$arity$2(String,expr__18018) : pred__18017.call(null,String,expr__18018)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__18020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__18020);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__18017.cljs$core$IFn$_invoke$arity$2 ? pred__18017.cljs$core$IFn$_invoke$arity$2(Number,expr__18018) : pred__18017.call(null,Number,expr__18018)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18018)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18014.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta18015], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint18014.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18014.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18014";

cljs.pprint.t_cljs$pprint18014.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.pprint/t_cljs$pprint18014");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint18014 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint18014(writer__$1,last_was_whitespace_QMARK___$1,meta18015){
return (new cljs.pprint.t_cljs$pprint18014(writer__$1,last_was_whitespace_QMARK___$1,meta18015));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint18014(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint18021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint18021 = (function (writer,capped,meta18022){
this.writer = writer;
this.capped = capped;
this.meta18022 = meta18022;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint18021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_18023,meta18022__$1){
var self__ = this;
var _18023__$1 = this;
return (new cljs.pprint.t_cljs$pprint18021(self__.writer,self__.capped,meta18022__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint18021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_18023){
var self__ = this;
var _18023__$1 = this;
return self__.meta18022;
});})(capped))
;

cljs.pprint.t_cljs$pprint18021.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint18021.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__18024 = cljs.core._EQ_;
var expr__18025 = cljs.core.type(x);
if(cljs.core.truth_((pred__18024.cljs$core$IFn$_invoke$arity$2 ? pred__18024.cljs$core$IFn$_invoke$arity$2(String,expr__18025) : pred__18024.call(null,String,expr__18025)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__8230__auto__ = m;
if(cljs.core.truth_(and__8230__auto__)){
return m.index;
} else {
return and__8230__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__18024.cljs$core$IFn$_invoke$arity$2 ? pred__18024.cljs$core$IFn$_invoke$arity$2(Number,expr__18025) : pred__18024.call(null,Number,expr__18025)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__8230__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__8230__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18025)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint18021.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta18022], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint18021.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint18021.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint18021";

cljs.pprint.t_cljs$pprint18021.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"cljs.pprint/t_cljs$pprint18021");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint18021 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint18021(writer__$1,capped__$1,meta18022){
return (new cljs.pprint.t_cljs$pprint18021(writer__$1,capped__$1,meta18022));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint18021(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_18027 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18027;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_18029 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_18030 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_18031 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_18032 = (((current_18031 < colnum_18029))?(colnum_18029 - current_18031):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_18030,(0)))?(0):(colinc_18030 - cljs.core.rem((current_18031 - colnum_18029),colinc_18030))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_18032," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_18033 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_18034 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_18035 = (colrel_18033 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_18036 = (((colinc_18034 > (0)))?cljs.core.rem(start_col_18035,colinc_18034):(0));
var space_count_18037 = (colrel_18033 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_18036))?(0):(colinc_18034 - offset_18036)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_18037," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__18038 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18038,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18038,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18041_18043 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18042_18044 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18042_18044;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18041_18043;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18045_SHARP_,p2__18046_SHARP_,p3__18047_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__18045_SHARP_,p2__18046_SHARP_,p3__18047_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18048_SHARP_,p2__18049_SHARP_,p3__18050_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__18048_SHARP_,p2__18049_SHARP_,p3__18050_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18051_SHARP_,p2__18052_SHARP_,p3__18053_SHARP_){
return cljs.pprint.format_integer((10),p1__18051_SHARP_,p2__18052_SHARP_,p3__18053_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18054_SHARP_,p2__18055_SHARP_,p3__18056_SHARP_){
return cljs.pprint.format_integer((2),p1__18054_SHARP_,p2__18055_SHARP_,p3__18056_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18057_SHARP_,p2__18058_SHARP_,p3__18059_SHARP_){
return cljs.pprint.format_integer((8),p1__18057_SHARP_,p2__18058_SHARP_,p3__18059_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__18060_SHARP_,p2__18061_SHARP_,p3__18062_SHARP_){
return cljs.pprint.format_integer((16),p1__18060_SHARP_,p2__18061_SHARP_,p3__18062_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__18063_SHARP_,p2__18064_SHARP_,p3__18065_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__18063_SHARP_),p1__18063_SHARP_,p2__18064_SHARP_,p3__18065_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8230__auto__;
}
})())){
return (function (p1__18066_SHARP_,p2__18067_SHARP_,p3__18068_SHARP_){
return cljs.pprint.format_old_roman(p1__18066_SHARP_,p2__18067_SHARP_,p3__18068_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__18069_SHARP_,p2__18070_SHARP_,p3__18071_SHARP_){
return cljs.pprint.format_new_roman(p1__18069_SHARP_,p2__18070_SHARP_,p3__18071_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__18072_SHARP_,p2__18073_SHARP_,p3__18074_SHARP_){
return cljs.pprint.format_ordinal_english(p1__18072_SHARP_,p2__18073_SHARP_,p3__18074_SHARP_);
});
} else {
return (function (p1__18075_SHARP_,p2__18076_SHARP_,p3__18077_SHARP_){
return cljs.pprint.format_cardinal_english(p1__18075_SHARP_,p2__18076_SHARP_,p3__18077_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__18087 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18087,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18087,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9285__auto___18105 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_18106 = (0);
while(true){
if((i_18106 < n__9285__auto___18105)){
cljs.pprint.prn();

var G__18107 = (i_18106 + (1));
i_18106 = G__18107;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_18108 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_18108 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__9285__auto___18109 = (cnt_18108 - (1));
var i_18110 = (0);
while(true){
if((i_18110 < n__9285__auto___18109)){
cljs.pprint.prn();

var G__18111 = (i_18110 + (1));
i_18110 = G__18111;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9285__auto___18112 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_18113 = (0);
while(true){
if((i_18113 < n__9285__auto___18112)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__18114 = (i_18113 + (1));
i_18113 = G__18114;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__18078_SHARP_,p2__18079_SHARP_,p3__18080_SHARP_){
return cljs.pprint.relative_tabulation(p1__18078_SHARP_,p2__18079_SHARP_,p3__18080_SHARP_);
});
} else {
return (function (p1__18081_SHARP_,p2__18082_SHARP_,p3__18083_SHARP_){
return cljs.pprint.absolute_tabulation(p1__18081_SHARP_,p2__18082_SHARP_,p3__18083_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__18090 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18090,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18090,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__18093 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(1),null);
var vec__18096 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18096,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18096,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8230__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__18084_SHARP_,p2__18085_SHARP_,p3__18086_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__18084_SHARP_,p2__18085_SHARP_,p3__18086_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8230__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__8230__auto__ = arg1;
if(cljs.core.truth_(and__8230__auto__)){
var and__8230__auto____$1 = arg2;
if(cljs.core.truth_(and__8230__auto____$1)){
return arg3;
} else {
return and__8230__auto____$1;
}
} else {
return and__8230__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__8230__auto__ = arg1;
if(cljs.core.truth_(and__8230__auto__)){
return arg2;
} else {
return and__8230__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__8242__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__18099 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18099,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18099,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__18102 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__18115){
var vec__18116 = p__18115;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__18119){
var vec__18120 = p__18119;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__18123){
var vec__18124 = p__18123;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18124,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8230__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8230__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8230__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8230__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8230__auto__){
var and__8230__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__8230__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8230__auto____$1;
}
} else {
return and__8230__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__8601__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__8602__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__8601__auto__ < y__8602__auto__) ? x__8601__auto__ : y__8602__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__18127_SHARP_,p2__18128_SHARP_){
var val = cljs.core.first(p1__18127_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__18128_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__18128_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__18127_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__9124__auto__ = (function cljs$pprint$map_params_$_iter__18132(s__18133){
return (new cljs.core.LazySeq(null,(function (){
var s__18133__$1 = s__18133;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__18133__$1);
if(temp__5290__auto__){
var s__18133__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18133__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__18133__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__18135 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__18134 = (0);
while(true){
if((i__18134 < size__9123__auto__)){
var vec__18136 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__18134);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18136,(0),null);
var vec__18139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18136,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18139,(0),null);
cljs.core.chunk_append(b__18135,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__18148 = (i__18134 + (1));
i__18134 = G__18148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18135),cljs$pprint$map_params_$_iter__18132(cljs.core.chunk_rest(s__18133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18135),null);
}
} else {
var vec__18142 = cljs.core.first(s__18133__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(0),null);
var vec__18145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18145,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__18132(cljs.core.rest(s__18133__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9124__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18129_SHARP_,p2__18130_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__18129_SHARP_,p2__18130_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18131_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__18131_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__18149 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18149,(0),null);
var vec__18152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18149,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18152,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18152,(1),null);
var vec__18155 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18155,(0),null);
var vec__18158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18155,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18158,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18158,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18158,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__18161 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__18161.cljs$core$IFn$_invoke$arity$2 ? fexpr__18161.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__18161.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__8230__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__8230__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__18162 = (function (){var G__18165 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__18166 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__18167 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__18165,G__18166,G__18167) : cljs.pprint.collect_clauses.call(null,G__18165,G__18166,G__18167));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18162,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18162,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__18168){
var vec__18169 = p__18168;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18169,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18169,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18169,(2),null);
var vec__18172 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18172,(0),null);
var vec__18175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18172,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18175,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18175,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18175,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18175,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_18178 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_18178){
return (function (p__18179){
var vec__18180 = p__18179;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18180,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18180,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_18178))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_18178;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__8242__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
var or__8242__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__8242__auto____$1)){
return or__8242__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__18183 = cljs.core.next(format__$1);
format__$1 = G__18183;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__18185 = arguments.length;
switch (G__18185) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__8230__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__8230__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_18186 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18186;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__18187 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18187,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18187,(1),null);
var vec__18190 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18190,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18190,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__18194 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__18194) : cljs.pprint.reader_macros.call(null,G__18194));
})();
if(cljs.core.truth_((function (){var and__8230__auto__ = macro_char;
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__8230__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18195_18198 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18196_18199 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count18197_18200 = (0);
var alis_18201__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18197_18200 < cljs.core._STAR_print_length_STAR_))){
if(alis_18201__$1){
cljs.pprint.write_out(cljs.core.first(alis_18201__$1));

if(cljs.core.next(alis_18201__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18202 = (length_count18197_18200 + (1));
var G__18203 = cljs.core.next(alis_18201__$1);
length_count18197_18200 = G__18202;
alis_18201__$1 = G__18203;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18196_18199;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18195_18198;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18204_18207 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18205_18208 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count18206_18209 = (0);
var aseq_18210 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18206_18209 < cljs.core._STAR_print_length_STAR_))){
if(aseq_18210){
cljs.pprint.write_out(cljs.core.first(aseq_18210));

if(cljs.core.next(aseq_18210)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18211 = (length_count18206_18209 + (1));
var G__18212 = cljs.core.next(aseq_18210);
length_count18206_18209 = G__18211;
aseq_18210 = G__18212;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18205_18208;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18204_18207;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__17303__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__){
return (function() { 
var G__18213__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18213 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18214__i = 0, G__18214__a = new Array(arguments.length -  0);
while (G__18214__i < G__18214__a.length) {G__18214__a[G__18214__i] = arguments[G__18214__i + 0]; ++G__18214__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18214__a,0,null);
} 
return G__18213__delegate.call(this,args__17305__auto__);};
G__18213.cljs$lang$maxFixedArity = 0;
G__18213.cljs$lang$applyTo = (function (arglist__18215){
var args__17305__auto__ = cljs.core.seq(arglist__18215);
return G__18213__delegate(args__17305__auto__);
});
G__18213.cljs$core$IFn$_invoke$arity$variadic = G__18213__delegate;
return G__18213;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__18216 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__18219 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9804,9804,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__18219.cljs$core$IFn$_invoke$arity$1 ? fexpr__18219.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__18219.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18216,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18216,(1),null);
var amap__$1 = (function (){var or__8242__auto__ = lift_map;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18220_18225 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18221_18226 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count18222_18227 = (0);
var aseq_18228 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18222_18227 < cljs.core._STAR_print_length_STAR_))){
if(aseq_18228){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18223_18229 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18224_18230 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_18228));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_18228)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18224_18230;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18223_18229;
}}


if(cljs.core.next(aseq_18228)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18231 = (length_count18222_18227 + (1));
var G__18232 = cljs.core.next(aseq_18228);
length_count18222_18227 = G__18231;
aseq_18228 = G__18232;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18221_18226;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18220_18225;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__17303__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__){
return (function() { 
var G__18233__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18233 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18234__i = 0, G__18234__a = new Array(arguments.length -  0);
while (G__18234__i < G__18234__a.length) {G__18234__a[G__18234__i] = arguments[G__18234__i + 0]; ++G__18234__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18234__a,0,null);
} 
return G__18233__delegate.call(this,args__17305__auto__);};
G__18233.cljs$lang$maxFixedArity = 0;
G__18233.cljs$lang$applyTo = (function (arglist__18235){
var args__17305__auto__ = cljs.core.seq(arglist__18235);
return G__18233__delegate(args__17305__auto__);
});
G__18233.cljs$core$IFn$_invoke$arity$variadic = G__18233__delegate;
return G__18233;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__8242__auto__ = (function (){var temp__5290__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5290__auto__)){
var match = temp__5290__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18236_18240 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18237_18241 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__8230__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__8230__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__8230__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18237_18241;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18236_18240;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__17303__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__){
return (function() { 
var G__18242__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18242 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18243__i = 0, G__18243__a = new Array(arguments.length -  0);
while (G__18243__i < G__18243__a.length) {G__18243__a[G__18243__i] = arguments[G__18243__i + 0]; ++G__18243__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18243__a,0,null);
} 
return G__18242__delegate.call(this,args__17305__auto__);};
G__18242.cljs$lang$maxFixedArity = 0;
G__18242.cljs$lang$applyTo = (function (arglist__18244){
var args__17305__auto__ = cljs.core.seq(arglist__18244);
return G__18242__delegate(args__17305__auto__);
});
G__18242.cljs$core$IFn$_invoke$arity$variadic = G__18242__delegate;
return G__18242;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__9295__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9296__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9297__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9298__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9299__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9299__auto__,method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__18246 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18246,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18246,(1),null);
var vec__18249 = reference;
var seq__18250 = cljs.core.seq(vec__18249);
var first__18251 = cljs.core.first(seq__18250);
var seq__18250__$1 = cljs.core.next(seq__18250);
var keyw = first__18251;
var args = seq__18250__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18252_18268 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18253_18269 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__18254_18270 = (function (){var format_in__17303__auto__ = "~w~:i";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args){
return (function() { 
var G__18271__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18271 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18272__i = 0, G__18272__a = new Array(arguments.length -  0);
while (G__18272__i < G__18272__a.length) {G__18272__a[G__18272__i] = arguments[G__18272__i + 0]; ++G__18272__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18272__a,0,null);
} 
return G__18271__delegate.call(this,args__17305__auto__);};
G__18271.cljs$lang$maxFixedArity = 0;
G__18271.cljs$lang$applyTo = (function (arglist__18273){
var args__17305__auto__ = cljs.core.seq(arglist__18273);
return G__18271__delegate(args__17305__auto__);
});
G__18271.cljs$core$IFn$_invoke$arity$variadic = G__18271__delegate;
return G__18271;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args))
})();
(fexpr__18254_18270.cljs$core$IFn$_invoke$arity$1 ? fexpr__18254_18270.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__18254_18270.call(null,keyw));

var args_18274__$1 = args;
while(true){
if(cljs.core.seq(args_18274__$1)){
var fexpr__18255_18275 = (function (){var format_in__17303__auto__ = " ";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (args_18274__$1,format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args){
return (function() { 
var G__18276__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18276 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18277__i = 0, G__18277__a = new Array(arguments.length -  0);
while (G__18277__i < G__18277__a.length) {G__18277__a[G__18277__i] = arguments[G__18277__i + 0]; ++G__18277__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18277__a,0,null);
} 
return G__18276__delegate.call(this,args__17305__auto__);};
G__18276.cljs$lang$maxFixedArity = 0;
G__18276.cljs$lang$applyTo = (function (arglist__18278){
var args__17305__auto__ = cljs.core.seq(arglist__18278);
return G__18276__delegate(args__17305__auto__);
});
G__18276.cljs$core$IFn$_invoke$arity$variadic = G__18276__delegate;
return G__18276;
})()
;
;})(args_18274__$1,format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args))
})();
(fexpr__18255_18275.cljs$core$IFn$_invoke$arity$0 ? fexpr__18255_18275.cljs$core$IFn$_invoke$arity$0() : fexpr__18255_18275.call(null));

var arg_18279 = cljs.core.first(args_18274__$1);
if(cljs.core.sequential_QMARK_(arg_18279)){
var vec__18256_18280 = cljs.pprint.brackets(arg_18279);
var start_18281__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18256_18280,(0),null);
var end_18282__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18256_18280,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18259_18283 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18260_18284 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_18281__$1,null,end_18282__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_18279),(3))) && ((cljs.core.second(arg_18279) instanceof cljs.core.Keyword))){
var vec__18261_18285 = arg_18279;
var ns_18286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18261_18285,(0),null);
var kw_18287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18261_18285,(1),null);
var lis_18288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18261_18285,(2),null);
var fexpr__18264_18289 = (function (){var format_in__17303__auto__ = "~w ~w ";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (args_18274__$1,format_in__17303__auto__,cf__17304__auto__,vec__18261_18285,ns_18286,kw_18287,lis_18288,_STAR_current_level_STAR_18259_18283,_STAR_current_length_STAR_18260_18284,vec__18256_18280,start_18281__$1,end_18282__$1,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args){
return (function() { 
var G__18290__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18290 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18291__i = 0, G__18291__a = new Array(arguments.length -  0);
while (G__18291__i < G__18291__a.length) {G__18291__a[G__18291__i] = arguments[G__18291__i + 0]; ++G__18291__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18291__a,0,null);
} 
return G__18290__delegate.call(this,args__17305__auto__);};
G__18290.cljs$lang$maxFixedArity = 0;
G__18290.cljs$lang$applyTo = (function (arglist__18292){
var args__17305__auto__ = cljs.core.seq(arglist__18292);
return G__18290__delegate(args__17305__auto__);
});
G__18290.cljs$core$IFn$_invoke$arity$variadic = G__18290__delegate;
return G__18290;
})()
;
;})(args_18274__$1,format_in__17303__auto__,cf__17304__auto__,vec__18261_18285,ns_18286,kw_18287,lis_18288,_STAR_current_level_STAR_18259_18283,_STAR_current_length_STAR_18260_18284,vec__18256_18280,start_18281__$1,end_18282__$1,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args))
})();
(fexpr__18264_18289.cljs$core$IFn$_invoke$arity$2 ? fexpr__18264_18289.cljs$core$IFn$_invoke$arity$2(ns_18286,kw_18287) : fexpr__18264_18289.call(null,ns_18286,kw_18287));

if(cljs.core.sequential_QMARK_(lis_18288)){
var fexpr__18265_18293 = (function (){var format_in__17303__auto__ = ((cljs.core.vector_QMARK_(lis_18288))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (args_18274__$1,format_in__17303__auto__,cf__17304__auto__,vec__18261_18285,ns_18286,kw_18287,lis_18288,_STAR_current_level_STAR_18259_18283,_STAR_current_length_STAR_18260_18284,vec__18256_18280,start_18281__$1,end_18282__$1,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args){
return (function() { 
var G__18294__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18294 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18295__i = 0, G__18295__a = new Array(arguments.length -  0);
while (G__18295__i < G__18295__a.length) {G__18295__a[G__18295__i] = arguments[G__18295__i + 0]; ++G__18295__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18295__a,0,null);
} 
return G__18294__delegate.call(this,args__17305__auto__);};
G__18294.cljs$lang$maxFixedArity = 0;
G__18294.cljs$lang$applyTo = (function (arglist__18296){
var args__17305__auto__ = cljs.core.seq(arglist__18296);
return G__18294__delegate(args__17305__auto__);
});
G__18294.cljs$core$IFn$_invoke$arity$variadic = G__18294__delegate;
return G__18294;
})()
;
;})(args_18274__$1,format_in__17303__auto__,cf__17304__auto__,vec__18261_18285,ns_18286,kw_18287,lis_18288,_STAR_current_level_STAR_18259_18283,_STAR_current_length_STAR_18260_18284,vec__18256_18280,start_18281__$1,end_18282__$1,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args))
})();
(fexpr__18265_18293.cljs$core$IFn$_invoke$arity$1 ? fexpr__18265_18293.cljs$core$IFn$_invoke$arity$1(lis_18288) : fexpr__18265_18293.call(null,lis_18288));
} else {
cljs.pprint.write_out(lis_18288);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__17303__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (args_18274__$1,format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18259_18283,_STAR_current_length_STAR_18260_18284,vec__18256_18280,start_18281__$1,end_18282__$1,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args){
return (function() { 
var G__18297__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18297 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18298__i = 0, G__18298__a = new Array(arguments.length -  0);
while (G__18298__i < G__18298__a.length) {G__18298__a[G__18298__i] = arguments[G__18298__i + 0]; ++G__18298__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18298__a,0,null);
} 
return G__18297__delegate.call(this,args__17305__auto__);};
G__18297.cljs$lang$maxFixedArity = 0;
G__18297.cljs$lang$applyTo = (function (arglist__18299){
var args__17305__auto__ = cljs.core.seq(arglist__18299);
return G__18297__delegate(args__17305__auto__);
});
G__18297.cljs$core$IFn$_invoke$arity$variadic = G__18297__delegate;
return G__18297;
})()
;
;})(args_18274__$1,format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18259_18283,_STAR_current_length_STAR_18260_18284,vec__18256_18280,start_18281__$1,end_18282__$1,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args))
})(),arg_18279);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18260_18284;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18259_18283;
}}


if(cljs.core.next(args_18274__$1)){
var fexpr__18266_18300 = (function (){var format_in__17303__auto__ = "~_";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (args_18274__$1,format_in__17303__auto__,cf__17304__auto__,vec__18256_18280,start_18281__$1,end_18282__$1,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args){
return (function() { 
var G__18301__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18301 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18302__i = 0, G__18302__a = new Array(arguments.length -  0);
while (G__18302__i < G__18302__a.length) {G__18302__a[G__18302__i] = arguments[G__18302__i + 0]; ++G__18302__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18302__a,0,null);
} 
return G__18301__delegate.call(this,args__17305__auto__);};
G__18301.cljs$lang$maxFixedArity = 0;
G__18301.cljs$lang$applyTo = (function (arglist__18303){
var args__17305__auto__ = cljs.core.seq(arglist__18303);
return G__18301__delegate(args__17305__auto__);
});
G__18301.cljs$core$IFn$_invoke$arity$variadic = G__18301__delegate;
return G__18301;
})()
;
;})(args_18274__$1,format_in__17303__auto__,cf__17304__auto__,vec__18256_18280,start_18281__$1,end_18282__$1,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args))
})();
(fexpr__18266_18300.cljs$core$IFn$_invoke$arity$0 ? fexpr__18266_18300.cljs$core$IFn$_invoke$arity$0() : fexpr__18266_18300.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_18279);

if(cljs.core.next(args_18274__$1)){
var fexpr__18267_18304 = (function (){var format_in__17303__auto__ = "~:_";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (args_18274__$1,format_in__17303__auto__,cf__17304__auto__,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args){
return (function() { 
var G__18305__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18305 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18306__i = 0, G__18306__a = new Array(arguments.length -  0);
while (G__18306__i < G__18306__a.length) {G__18306__a[G__18306__i] = arguments[G__18306__i + 0]; ++G__18306__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18306__a,0,null);
} 
return G__18305__delegate.call(this,args__17305__auto__);};
G__18305.cljs$lang$maxFixedArity = 0;
G__18305.cljs$lang$applyTo = (function (arglist__18307){
var args__17305__auto__ = cljs.core.seq(arglist__18307);
return G__18305__delegate(args__17305__auto__);
});
G__18305.cljs$core$IFn$_invoke$arity$variadic = G__18305__delegate;
return G__18305;
})()
;
;})(args_18274__$1,format_in__17303__auto__,cf__17304__auto__,arg_18279,_STAR_current_level_STAR_18252_18268,_STAR_current_length_STAR_18253_18269,vec__18246,start,end,vec__18249,seq__18250,first__18251,seq__18250__$1,keyw,args))
})();
(fexpr__18267_18304.cljs$core$IFn$_invoke$arity$0 ? fexpr__18267_18304.cljs$core$IFn$_invoke$arity$0() : fexpr__18267_18304.call(null));
} else {
}
}

var G__18308 = cljs.core.next(args_18274__$1);
args_18274__$1 = G__18308;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18253_18269;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18252_18268;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__18309 = alis;
var seq__18310 = cljs.core.seq(vec__18309);
var first__18311 = cljs.core.first(seq__18310);
var seq__18310__$1 = cljs.core.next(seq__18310);
var ns_sym = first__18311;
var first__18311__$1 = cljs.core.first(seq__18310__$1);
var seq__18310__$2 = cljs.core.next(seq__18310__$1);
var ns_name = first__18311__$1;
var stuff = seq__18310__$2;
var vec__18312 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18312,(1),null);
var vec__18315 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18315,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18315,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18318_18325 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18319_18326 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__18320_18327 = (function (){var format_in__17303__auto__ = "~w ~1I~@_~w";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18318_18325,_STAR_current_length_STAR_18319_18326,vec__18309,seq__18310,first__18311,seq__18310__$1,ns_sym,first__18311__$1,seq__18310__$2,ns_name,stuff,vec__18312,doc_str,stuff__$1,vec__18315,attr_map,references){
return (function() { 
var G__18328__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18328 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18329__i = 0, G__18329__a = new Array(arguments.length -  0);
while (G__18329__i < G__18329__a.length) {G__18329__a[G__18329__i] = arguments[G__18329__i + 0]; ++G__18329__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18329__a,0,null);
} 
return G__18328__delegate.call(this,args__17305__auto__);};
G__18328.cljs$lang$maxFixedArity = 0;
G__18328.cljs$lang$applyTo = (function (arglist__18330){
var args__17305__auto__ = cljs.core.seq(arglist__18330);
return G__18328__delegate(args__17305__auto__);
});
G__18328.cljs$core$IFn$_invoke$arity$variadic = G__18328__delegate;
return G__18328;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18318_18325,_STAR_current_length_STAR_18319_18326,vec__18309,seq__18310,first__18311,seq__18310__$1,ns_sym,first__18311__$1,seq__18310__$2,ns_name,stuff,vec__18312,doc_str,stuff__$1,vec__18315,attr_map,references))
})();
(fexpr__18320_18327.cljs$core$IFn$_invoke$arity$2 ? fexpr__18320_18327.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__18320_18327.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__8242__auto__ = doc_str;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
var or__8242__auto____$1 = attr_map;
if(cljs.core.truth_(or__8242__auto____$1)){
return or__8242__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__18321_18331 = (function (){var format_in__17303__auto__ = "~@:_";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18318_18325,_STAR_current_length_STAR_18319_18326,vec__18309,seq__18310,first__18311,seq__18310__$1,ns_sym,first__18311__$1,seq__18310__$2,ns_name,stuff,vec__18312,doc_str,stuff__$1,vec__18315,attr_map,references){
return (function() { 
var G__18332__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18332 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18333__i = 0, G__18333__a = new Array(arguments.length -  0);
while (G__18333__i < G__18333__a.length) {G__18333__a[G__18333__i] = arguments[G__18333__i + 0]; ++G__18333__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18333__a,0,null);
} 
return G__18332__delegate.call(this,args__17305__auto__);};
G__18332.cljs$lang$maxFixedArity = 0;
G__18332.cljs$lang$applyTo = (function (arglist__18334){
var args__17305__auto__ = cljs.core.seq(arglist__18334);
return G__18332__delegate(args__17305__auto__);
});
G__18332.cljs$core$IFn$_invoke$arity$variadic = G__18332__delegate;
return G__18332;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18318_18325,_STAR_current_length_STAR_18319_18326,vec__18309,seq__18310,first__18311,seq__18310__$1,ns_sym,first__18311__$1,seq__18310__$2,ns_name,stuff,vec__18312,doc_str,stuff__$1,vec__18315,attr_map,references))
})();
(fexpr__18321_18331.cljs$core$IFn$_invoke$arity$0 ? fexpr__18321_18331.cljs$core$IFn$_invoke$arity$0() : fexpr__18321_18331.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__8242__auto__ = attr_map;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__18323_18335 = attr_map;
var G__18324_18336 = cljs.core.seq(references);
var fexpr__18322_18337 = (function (){var format_in__17303__auto__ = "~w~:[~;~:@_~]";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,G__18323_18335,G__18324_18336,_STAR_current_level_STAR_18318_18325,_STAR_current_length_STAR_18319_18326,vec__18309,seq__18310,first__18311,seq__18310__$1,ns_sym,first__18311__$1,seq__18310__$2,ns_name,stuff,vec__18312,doc_str,stuff__$1,vec__18315,attr_map,references){
return (function() { 
var G__18338__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18338 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18339__i = 0, G__18339__a = new Array(arguments.length -  0);
while (G__18339__i < G__18339__a.length) {G__18339__a[G__18339__i] = arguments[G__18339__i + 0]; ++G__18339__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18339__a,0,null);
} 
return G__18338__delegate.call(this,args__17305__auto__);};
G__18338.cljs$lang$maxFixedArity = 0;
G__18338.cljs$lang$applyTo = (function (arglist__18340){
var args__17305__auto__ = cljs.core.seq(arglist__18340);
return G__18338__delegate(args__17305__auto__);
});
G__18338.cljs$core$IFn$_invoke$arity$variadic = G__18338__delegate;
return G__18338;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,G__18323_18335,G__18324_18336,_STAR_current_level_STAR_18318_18325,_STAR_current_length_STAR_18319_18326,vec__18309,seq__18310,first__18311,seq__18310__$1,ns_sym,first__18311__$1,seq__18310__$2,ns_name,stuff,vec__18312,doc_str,stuff__$1,vec__18315,attr_map,references))
})();
(fexpr__18322_18337.cljs$core$IFn$_invoke$arity$2 ? fexpr__18322_18337.cljs$core$IFn$_invoke$arity$2(G__18323_18335,G__18324_18336) : fexpr__18322_18337.call(null,G__18323_18335,G__18324_18336));
} else {
}

var references_18341__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_18341__$1));

var temp__5290__auto___18342 = cljs.core.next(references_18341__$1);
if(temp__5290__auto___18342){
var references_18343__$2 = temp__5290__auto___18342;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18344 = references_18343__$2;
references_18341__$1 = G__18344;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18319_18326;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18318_18325;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__17303__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__){
return (function() { 
var G__18345__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18345 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18346__i = 0, G__18346__a = new Array(arguments.length -  0);
while (G__18346__i < G__18346__a.length) {G__18346__a[G__18346__i] = arguments[G__18346__i + 0]; ++G__18346__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18346__a,0,null);
} 
return G__18345__delegate.call(this,args__17305__auto__);};
G__18345.cljs$lang$maxFixedArity = 0;
G__18345.cljs$lang$applyTo = (function (arglist__18347){
var args__17305__auto__ = cljs.core.seq(arglist__18347);
return G__18345__delegate(args__17305__auto__);
});
G__18345.cljs$core$IFn$_invoke$arity$variadic = G__18345__delegate;
return G__18345;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__18348_18351 = (function (){var format_in__17303__auto__ = " ~_";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__){
return (function() { 
var G__18352__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18352 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18353__i = 0, G__18353__a = new Array(arguments.length -  0);
while (G__18353__i < G__18353__a.length) {G__18353__a[G__18353__i] = arguments[G__18353__i + 0]; ++G__18353__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18353__a,0,null);
} 
return G__18352__delegate.call(this,args__17305__auto__);};
G__18352.cljs$lang$maxFixedArity = 0;
G__18352.cljs$lang$applyTo = (function (arglist__18354){
var args__17305__auto__ = cljs.core.seq(arglist__18354);
return G__18352__delegate(args__17305__auto__);
});
G__18352.cljs$core$IFn$_invoke$arity$variadic = G__18352__delegate;
return G__18352;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__))
})();
(fexpr__18348_18351.cljs$core$IFn$_invoke$arity$0 ? fexpr__18348_18351.cljs$core$IFn$_invoke$arity$0() : fexpr__18348_18351.call(null));
} else {
var fexpr__18349_18355 = (function (){var format_in__17303__auto__ = " ~@_";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__){
return (function() { 
var G__18356__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18356 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18357__i = 0, G__18357__a = new Array(arguments.length -  0);
while (G__18357__i < G__18357__a.length) {G__18357__a[G__18357__i] = arguments[G__18357__i + 0]; ++G__18357__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18357__a,0,null);
} 
return G__18356__delegate.call(this,args__17305__auto__);};
G__18356.cljs$lang$maxFixedArity = 0;
G__18356.cljs$lang$applyTo = (function (arglist__18358){
var args__17305__auto__ = cljs.core.seq(arglist__18358);
return G__18356__delegate(args__17305__auto__);
});
G__18356.cljs$core$IFn$_invoke$arity$variadic = G__18356__delegate;
return G__18356;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__))
})();
(fexpr__18349_18355.cljs$core$IFn$_invoke$arity$0 ? fexpr__18349_18355.cljs$core$IFn$_invoke$arity$0() : fexpr__18349_18355.call(null));
}

var fexpr__18350 = (function (){var format_in__17303__auto__ = "~{~w~^ ~_~}";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__){
return (function() { 
var G__18359__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18359 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18360__i = 0, G__18360__a = new Array(arguments.length -  0);
while (G__18360__i < G__18360__a.length) {G__18360__a[G__18360__i] = arguments[G__18360__i + 0]; ++G__18360__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18360__a,0,null);
} 
return G__18359__delegate.call(this,args__17305__auto__);};
G__18359.cljs$lang$maxFixedArity = 0;
G__18359.cljs$lang$applyTo = (function (arglist__18361){
var args__17305__auto__ = cljs.core.seq(arglist__18361);
return G__18359__delegate(args__17305__auto__);
});
G__18359.cljs$core$IFn$_invoke$arity$variadic = G__18359__delegate;
return G__18359;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__))
})();
return (fexpr__18350.cljs$core$IFn$_invoke$arity$1 ? fexpr__18350.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__18350.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__18362 = (function (){var format_in__17303__auto__ = " ~_~{~w~^ ~_~}";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__){
return (function() { 
var G__18363__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18363 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18364__i = 0, G__18364__a = new Array(arguments.length -  0);
while (G__18364__i < G__18364__a.length) {G__18364__a[G__18364__i] = arguments[G__18364__i + 0]; ++G__18364__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18364__a,0,null);
} 
return G__18363__delegate.call(this,args__17305__auto__);};
G__18363.cljs$lang$maxFixedArity = 0;
G__18363.cljs$lang$applyTo = (function (arglist__18365){
var args__17305__auto__ = cljs.core.seq(arglist__18365);
return G__18363__delegate(args__17305__auto__);
});
G__18363.cljs$core$IFn$_invoke$arity$variadic = G__18363__delegate;
return G__18363;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__))
})();
return (fexpr__18362.cljs$core$IFn$_invoke$arity$1 ? fexpr__18362.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__18362.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__18366 = alis;
var seq__18367 = cljs.core.seq(vec__18366);
var first__18368 = cljs.core.first(seq__18367);
var seq__18367__$1 = cljs.core.next(seq__18367);
var defn_sym = first__18368;
var first__18368__$1 = cljs.core.first(seq__18367__$1);
var seq__18367__$2 = cljs.core.next(seq__18367__$1);
var defn_name = first__18368__$1;
var stuff = seq__18367__$2;
var vec__18369 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18369,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18369,(1),null);
var vec__18372 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18372,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18372,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18375_18380 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18376_18381 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__18377_18382 = (function (){var format_in__17303__auto__ = "~w ~1I~@_~w";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18375_18380,_STAR_current_length_STAR_18376_18381,vec__18366,seq__18367,first__18368,seq__18367__$1,defn_sym,first__18368__$1,seq__18367__$2,defn_name,stuff,vec__18369,doc_str,stuff__$1,vec__18372,attr_map,stuff__$2){
return (function() { 
var G__18383__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18383 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18384__i = 0, G__18384__a = new Array(arguments.length -  0);
while (G__18384__i < G__18384__a.length) {G__18384__a[G__18384__i] = arguments[G__18384__i + 0]; ++G__18384__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18384__a,0,null);
} 
return G__18383__delegate.call(this,args__17305__auto__);};
G__18383.cljs$lang$maxFixedArity = 0;
G__18383.cljs$lang$applyTo = (function (arglist__18385){
var args__17305__auto__ = cljs.core.seq(arglist__18385);
return G__18383__delegate(args__17305__auto__);
});
G__18383.cljs$core$IFn$_invoke$arity$variadic = G__18383__delegate;
return G__18383;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18375_18380,_STAR_current_length_STAR_18376_18381,vec__18366,seq__18367,first__18368,seq__18367__$1,defn_sym,first__18368__$1,seq__18367__$2,defn_name,stuff,vec__18369,doc_str,stuff__$1,vec__18372,attr_map,stuff__$2))
})();
(fexpr__18377_18382.cljs$core$IFn$_invoke$arity$2 ? fexpr__18377_18382.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__18377_18382.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__18378_18386 = (function (){var format_in__17303__auto__ = " ~_~w";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18375_18380,_STAR_current_length_STAR_18376_18381,vec__18366,seq__18367,first__18368,seq__18367__$1,defn_sym,first__18368__$1,seq__18367__$2,defn_name,stuff,vec__18369,doc_str,stuff__$1,vec__18372,attr_map,stuff__$2){
return (function() { 
var G__18387__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18387 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18388__i = 0, G__18388__a = new Array(arguments.length -  0);
while (G__18388__i < G__18388__a.length) {G__18388__a[G__18388__i] = arguments[G__18388__i + 0]; ++G__18388__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18388__a,0,null);
} 
return G__18387__delegate.call(this,args__17305__auto__);};
G__18387.cljs$lang$maxFixedArity = 0;
G__18387.cljs$lang$applyTo = (function (arglist__18389){
var args__17305__auto__ = cljs.core.seq(arglist__18389);
return G__18387__delegate(args__17305__auto__);
});
G__18387.cljs$core$IFn$_invoke$arity$variadic = G__18387__delegate;
return G__18387;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18375_18380,_STAR_current_length_STAR_18376_18381,vec__18366,seq__18367,first__18368,seq__18367__$1,defn_sym,first__18368__$1,seq__18367__$2,defn_name,stuff,vec__18369,doc_str,stuff__$1,vec__18372,attr_map,stuff__$2))
})();
(fexpr__18378_18386.cljs$core$IFn$_invoke$arity$1 ? fexpr__18378_18386.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__18378_18386.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__18379_18390 = (function (){var format_in__17303__auto__ = " ~_~w";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18375_18380,_STAR_current_length_STAR_18376_18381,vec__18366,seq__18367,first__18368,seq__18367__$1,defn_sym,first__18368__$1,seq__18367__$2,defn_name,stuff,vec__18369,doc_str,stuff__$1,vec__18372,attr_map,stuff__$2){
return (function() { 
var G__18391__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18391 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18392__i = 0, G__18392__a = new Array(arguments.length -  0);
while (G__18392__i < G__18392__a.length) {G__18392__a[G__18392__i] = arguments[G__18392__i + 0]; ++G__18392__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18392__a,0,null);
} 
return G__18391__delegate.call(this,args__17305__auto__);};
G__18391.cljs$lang$maxFixedArity = 0;
G__18391.cljs$lang$applyTo = (function (arglist__18393){
var args__17305__auto__ = cljs.core.seq(arglist__18393);
return G__18391__delegate(args__17305__auto__);
});
G__18391.cljs$core$IFn$_invoke$arity$variadic = G__18391__delegate;
return G__18391;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18375_18380,_STAR_current_length_STAR_18376_18381,vec__18366,seq__18367,first__18368,seq__18367__$1,defn_sym,first__18368__$1,seq__18367__$2,defn_name,stuff,vec__18369,doc_str,stuff__$1,vec__18372,attr_map,stuff__$2))
})();
(fexpr__18379_18390.cljs$core$IFn$_invoke$arity$1 ? fexpr__18379_18390.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__18379_18390.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__8242__auto__ = doc_str;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__8242__auto__ = doc_str;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18376_18381;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18375_18380;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18394_18399 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18395_18400 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count18396_18401 = (0);
var binding_18402 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18396_18401 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_18402)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18397_18403 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18398_18404 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_18402));

if(cljs.core.next(binding_18402)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_18402));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18398_18404;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18397_18403;
}}


if(cljs.core.next(cljs.core.rest(binding_18402))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18405 = (length_count18396_18401 + (1));
var G__18406 = cljs.core.next(cljs.core.rest(binding_18402));
length_count18396_18401 = G__18405;
binding_18402 = G__18406;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18395_18400;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18394_18399;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18407_18412 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18408_18413 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__18409_18414 = (function (){var format_in__17303__auto__ = "~w ~1I~@_";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18407_18412,_STAR_current_length_STAR_18408_18413,base_sym){
return (function() { 
var G__18415__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18415 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18416__i = 0, G__18416__a = new Array(arguments.length -  0);
while (G__18416__i < G__18416__a.length) {G__18416__a[G__18416__i] = arguments[G__18416__i + 0]; ++G__18416__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18416__a,0,null);
} 
return G__18415__delegate.call(this,args__17305__auto__);};
G__18415.cljs$lang$maxFixedArity = 0;
G__18415.cljs$lang$applyTo = (function (arglist__18417){
var args__17305__auto__ = cljs.core.seq(arglist__18417);
return G__18415__delegate(args__17305__auto__);
});
G__18415.cljs$core$IFn$_invoke$arity$variadic = G__18415__delegate;
return G__18415;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18407_18412,_STAR_current_length_STAR_18408_18413,base_sym))
})();
(fexpr__18409_18414.cljs$core$IFn$_invoke$arity$1 ? fexpr__18409_18414.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__18409_18414.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__18411_18418 = cljs.core.next(cljs.core.rest(alis));
var fexpr__18410_18419 = (function (){var format_in__17303__auto__ = " ~_~{~w~^ ~_~}";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,G__18411_18418,_STAR_current_level_STAR_18407_18412,_STAR_current_length_STAR_18408_18413,base_sym){
return (function() { 
var G__18420__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18420 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18421__i = 0, G__18421__a = new Array(arguments.length -  0);
while (G__18421__i < G__18421__a.length) {G__18421__a[G__18421__i] = arguments[G__18421__i + 0]; ++G__18421__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18421__a,0,null);
} 
return G__18420__delegate.call(this,args__17305__auto__);};
G__18420.cljs$lang$maxFixedArity = 0;
G__18420.cljs$lang$applyTo = (function (arglist__18422){
var args__17305__auto__ = cljs.core.seq(arglist__18422);
return G__18420__delegate(args__17305__auto__);
});
G__18420.cljs$core$IFn$_invoke$arity$variadic = G__18420__delegate;
return G__18420;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,G__18411_18418,_STAR_current_level_STAR_18407_18412,_STAR_current_length_STAR_18408_18413,base_sym))
})();
(fexpr__18410_18419.cljs$core$IFn$_invoke$arity$1 ? fexpr__18410_18419.cljs$core$IFn$_invoke$arity$1(G__18411_18418) : fexpr__18410_18419.call(null,G__18411_18418));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18408_18413;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18407_18412;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__17303__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__){
return (function() { 
var G__18423__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18423 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18424__i = 0, G__18424__a = new Array(arguments.length -  0);
while (G__18424__i < G__18424__a.length) {G__18424__a[G__18424__i] = arguments[G__18424__i + 0]; ++G__18424__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18424__a,0,null);
} 
return G__18423__delegate.call(this,args__17305__auto__);};
G__18423.cljs$lang$maxFixedArity = 0;
G__18423.cljs$lang$applyTo = (function (arglist__18425){
var args__17305__auto__ = cljs.core.seq(arglist__18425);
return G__18423__delegate(args__17305__auto__);
});
G__18423.cljs$core$IFn$_invoke$arity$variadic = G__18423__delegate;
return G__18423;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18426_18431 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18427_18432 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count18428_18433 = (0);
var alis_18434__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18428_18433 < cljs.core._STAR_print_length_STAR_))){
if(alis_18434__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18429_18435 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18430_18436 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_18434__$1));

if(cljs.core.next(alis_18434__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_18434__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18430_18436;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18429_18435;
}}


if(cljs.core.next(cljs.core.rest(alis_18434__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18437 = (length_count18428_18433 + (1));
var G__18438 = cljs.core.next(cljs.core.rest(alis_18434__$1));
length_count18428_18433 = G__18437;
alis_18434__$1 = G__18438;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18427_18432;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18426_18431;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18439_18444 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18440_18445 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__17303__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18439_18444,_STAR_current_length_STAR_18440_18445){
return (function() { 
var G__18446__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18446 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18447__i = 0, G__18447__a = new Array(arguments.length -  0);
while (G__18447__i < G__18447__a.length) {G__18447__a[G__18447__i] = arguments[G__18447__i + 0]; ++G__18447__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18447__a,0,null);
} 
return G__18446__delegate.call(this,args__17305__auto__);};
G__18446.cljs$lang$maxFixedArity = 0;
G__18446.cljs$lang$applyTo = (function (arglist__18448){
var args__17305__auto__ = cljs.core.seq(arglist__18448);
return G__18446__delegate(args__17305__auto__);
});
G__18446.cljs$core$IFn$_invoke$arity$variadic = G__18446__delegate;
return G__18446;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,_STAR_current_level_STAR_18439_18444,_STAR_current_length_STAR_18440_18445))
})(),alis);

var length_count18441_18449 = (0);
var alis_18450__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18441_18449 < cljs.core._STAR_print_length_STAR_))){
if(alis_18450__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18442_18451 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18443_18452 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_18450__$1));

if(cljs.core.next(alis_18450__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_18450__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18443_18452;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18442_18451;
}}


if(cljs.core.next(cljs.core.rest(alis_18450__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18453 = (length_count18441_18449 + (1));
var G__18454 = cljs.core.next(cljs.core.rest(alis_18450__$1));
length_count18441_18449 = G__18453;
alis_18450__$1 = G__18454;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18440_18445;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18439_18444;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_18457 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_18457,args,nlis){
return (function (p1__18455_SHARP_,p2__18456_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__18455_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18456_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_18457,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__18458 = (function (){var format_in__17303__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__17304__auto__ = ((typeof format_in__17303__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__17303__auto__) : cljs.pprint.cached_compile.call(null,format_in__17303__auto__)):format_in__17303__auto__);
return ((function (format_in__17303__auto__,cf__17304__auto__,_STAR_symbol_map_STAR_18457,args,nlis){
return (function() { 
var G__18459__delegate = function (args__17305__auto__){
var navigator__17306__auto__ = cljs.pprint.init_navigator(args__17305__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__17304__auto__,navigator__17306__auto__);
};
var G__18459 = function (var_args){
var args__17305__auto__ = null;
if (arguments.length > 0) {
var G__18460__i = 0, G__18460__a = new Array(arguments.length -  0);
while (G__18460__i < G__18460__a.length) {G__18460__a[G__18460__i] = arguments[G__18460__i + 0]; ++G__18460__i;}
  args__17305__auto__ = new cljs.core.IndexedSeq(G__18460__a,0,null);
} 
return G__18459__delegate.call(this,args__17305__auto__);};
G__18459.cljs$lang$maxFixedArity = 0;
G__18459.cljs$lang$applyTo = (function (arglist__18461){
var args__17305__auto__ = cljs.core.seq(arglist__18461);
return G__18459__delegate(args__17305__auto__);
});
G__18459.cljs$core$IFn$_invoke$arity$variadic = G__18459__delegate;
return G__18459;
})()
;
;})(format_in__17303__auto__,cf__17304__auto__,_STAR_symbol_map_STAR_18457,args,nlis))
})();
return (fexpr__18458.cljs$core$IFn$_invoke$arity$1 ? fexpr__18458.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__18458.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_18457;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18462_18465 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18463_18466 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count18464_18467 = (0);
var alis_18468__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18464_18467 < cljs.core._STAR_print_length_STAR_))){
if(alis_18468__$1){
cljs.pprint.write_out(cljs.core.first(alis_18468__$1));

if(cljs.core.next(alis_18468__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18469 = (length_count18464_18467 + (1));
var G__18470 = cljs.core.next(alis_18468__$1);
length_count18464_18467 = G__18469;
alis_18468__$1 = G__18470;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18463_18466;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18462_18465;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9124__auto__ = (function cljs$pprint$two_forms_$_iter__18471(s__18472){
return (new cljs.core.LazySeq(null,(function (){
var s__18472__$1 = s__18472;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__18472__$1);
if(temp__5290__auto__){
var s__18472__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18472__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__18472__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__18474 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__18473 = (0);
while(true){
if((i__18473 < size__9123__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__18473);
cljs.core.chunk_append(b__18474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__18475 = (i__18473 + (1));
i__18473 = G__18475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18474),cljs$pprint$two_forms_$_iter__18471(cljs.core.chunk_rest(s__18472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18474),null);
}
} else {
var x = cljs.core.first(s__18472__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__18471(cljs.core.rest(s__18472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9124__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__18476_SHARP_){
var vec__18477 = p1__18476_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(1),null);
if(cljs.core.not((function (){var or__8242__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__18476_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5288__auto__ = (function (){var G__18480 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__18480) : cljs.pprint._STAR_code_table_STAR_.call(null,G__18480));
})();
if(cljs.core.truth_(temp__5288__auto__)){
var special_form = temp__5288__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5288__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5288__auto__)){
var arg_num = temp__5288__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__9295__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9296__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9297__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9298__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9299__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9299__auto__,method_table__9295__auto__,prefer_table__9296__auto__,method_cache__9297__auto__,cached_hierarchy__9298__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__8594__auto__ = (0);
var y__8595__auto__ = (width - cljs.core.count(s));
return ((x__8594__auto__ > y__8595__auto__) ? x__8594__auto__ : y__8595__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__18485 = arguments.length;
switch (G__18485) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_18486 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_18486){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_18486){
return (function (p1__18481_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__18481_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_18486))
,rows));
});})(_STAR_print_newline_STAR_18486))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_18486){
return (function (p1__18482_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__18482_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_18486))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_18486){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__9124__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_18486){
return (function cljs$pprint$iter__18487(s__18488){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_18486){
return (function (){
var s__18488__$1 = s__18488;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__18488__$1);
if(temp__5290__auto__){
var s__18488__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18488__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__18488__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__18490 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__18489 = (0);
while(true){
if((i__18489 < size__9123__auto__)){
var vec__18491 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__18489);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18491,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18491,(1),null);
cljs.core.chunk_append(b__18490,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__18502 = (i__18489 + (1));
i__18489 = G__18502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18490),cljs$pprint$iter__18487(cljs.core.chunk_rest(s__18488__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18490),null);
}
} else {
var vec__18494 = cljs.core.first(s__18488__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18494,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18494,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__18487(cljs.core.rest(s__18488__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_18486))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_18486))
;
return iter__9124__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__9124__auto__,widths,spacers,_STAR_print_newline_STAR_18486){
return (function (p1__18483_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__18483_SHARP_);
});})(iter__9124__auto__,widths,spacers,_STAR_print_newline_STAR_18486))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_18486))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__18497 = cljs.core.seq(rows);
var chunk__18498 = null;
var count__18499 = (0);
var i__18500 = (0);
while(true){
if((i__18500 < count__18499)){
var row = chunk__18498.cljs$core$IIndexed$_nth$arity$2(null,i__18500);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__18503 = seq__18497;
var G__18504 = chunk__18498;
var G__18505 = count__18499;
var G__18506 = (i__18500 + (1));
seq__18497 = G__18503;
chunk__18498 = G__18504;
count__18499 = G__18505;
i__18500 = G__18506;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__18497);
if(temp__5290__auto__){
var seq__18497__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18497__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__18497__$1);
var G__18507 = cljs.core.chunk_rest(seq__18497__$1);
var G__18508 = c__9173__auto__;
var G__18509 = cljs.core.count(c__9173__auto__);
var G__18510 = (0);
seq__18497 = G__18507;
chunk__18498 = G__18508;
count__18499 = G__18509;
i__18500 = G__18510;
continue;
} else {
var row = cljs.core.first(seq__18497__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__18511 = cljs.core.next(seq__18497__$1);
var G__18512 = null;
var G__18513 = (0);
var G__18514 = (0);
seq__18497 = G__18511;
chunk__18498 = G__18512;
count__18499 = G__18513;
i__18500 = G__18514;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18486;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

