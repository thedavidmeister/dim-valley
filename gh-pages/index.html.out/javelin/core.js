// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.array');
goog.require('goog.object');





javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__5290__auto__ = pri_map.shift();
if(cljs.core.truth_(temp__5290__auto__)){
var next = temp__5290__auto__;
var old = next.prev;
var new$ = (function (){var temp__5288__auto__ = next.thunk;
if(cljs.core.truth_(temp__5288__auto__)){
var f = temp__5288__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old)){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);

<<<<<<< HEAD
var sinks_15391 = next.sinks;
var n__9283__auto___15392 = sinks_15391.length;
var i_15393 = (0);
while(true){
if((i_15393 < n__9283__auto___15392)){
var G__15388_15394 = pri_map;
var G__15389_15395 = (sinks_15391[i_15393]);
var G__15390_15396 = javelin.core.cmp_rank;
goog.array.binaryInsert(G__15388_15394,G__15389_15395,G__15390_15396);

var G__15397 = (i_15393 + (1));
i_15393 = G__15397;
=======
var sinks_16555 = next.sinks;
var n__9285__auto___16556 = sinks_16555.length;
var i_16557 = (0);
while(true){
if((i_16557 < n__9285__auto___16556)){
var G__16552_16558 = pri_map;
var G__16553_16559 = (sinks_16555[i_16557]);
var G__16554_16560 = javelin.core.cmp_rank;
goog.array.binaryInsert(G__16552_16558,G__16553_16559,G__16554_16560);

var G__16561 = (i_16557 + (1));
i_16557 = G__16561;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}
} else {
}

<<<<<<< HEAD
var G__15398 = pri_map;
pri_map = G__15398;
=======
var G__16562 = pri_map;
pri_map = G__16562;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return null;
}
break;
}
});
/**
 * If x is a Cell dereferences x and returns the value, otherwise returns x.
 */
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return cljs.core.deref(x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cmp_rank = (function javelin$core$cmp_rank(a,b){
var a__$1 = a.rank;
var b__$1 = b.rank;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1)){
return (0);
} else {
return (a__$1 - b__$1);
}
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return goog.array.binaryInsert(javelin.core._STAR_tx_STAR_,c,javelin.core.cmp_rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
<<<<<<< HEAD
}catch (e15399){if((e15399 instanceof Error)){
var _ = e15399;
return null;
} else {
throw e15399;
=======
}catch (e16563){if((e16563 instanceof Error)){
var _ = e16563;
return null;
} else {
throw e16563;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
<<<<<<< HEAD
var G__15400 = c;
javelin.core.add_sync_BANG_(G__15400);

return G__15400;
} else {
var G__15401 = c;
javelin.core.propagate_STAR_([G__15401]);

return G__15401;
=======
var G__16564 = c;
javelin.core.add_sync_BANG_(G__16564);

return G__16564;
} else {
var G__16565 = c;
javelin.core.propagate_STAR_([G__16565]);

return G__16565;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
});
/**
 * Unlinks this Cell from the cell graph and resets all internal state. Watches
 *   are preserved when keep-watches? is true, otherwise they are all removed.
 */
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
<<<<<<< HEAD
var G__15404 = arguments.length;
switch (G__15404) {
=======
var G__16568 = arguments.length;
switch (G__16568) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,null);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,keep_watches_QMARK_){
var srcs = this$.sources;
this$.sources = [];

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;

this$.numwatches = (0);
}

var n__9283__auto__ = srcs.length;
var i = (0);
while(true){
<<<<<<< HEAD
if((i < n__9283__auto__)){
var temp__5290__auto___15409 = (function (){var G__15405 = (srcs[i]);
return (javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15405) : javelin.core.cell_QMARK_.call(null,G__15405));
})();
if(cljs.core.truth_(temp__5290__auto___15409)){
var c_15410 = temp__5290__auto___15409;
var G__15406_15411 = c_15410.sinks;
var G__15407_15412 = ((function (i,G__15406_15411,c_15410,temp__5290__auto___15409,n__9283__auto__,srcs){
return (function (p1__15402_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15402_SHARP_,this$);
});})(i,G__15406_15411,c_15410,temp__5290__auto___15409,n__9283__auto__,srcs))
;
goog.array.removeIf(G__15406_15411,G__15407_15412);
} else {
}

var G__15413 = (i + (1));
i = G__15413;
=======
if((i < n__9285__auto__)){
var temp__5290__auto___16573 = (function (){var G__16569 = (srcs[i]);
return (javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16569) : javelin.core.cell_QMARK_.call(null,G__16569));
})();
if(cljs.core.truth_(temp__5290__auto___16573)){
var c_16574 = temp__5290__auto___16573;
var G__16570_16575 = c_16574.sinks;
var G__16571_16576 = ((function (i,G__16570_16575,c_16574,temp__5290__auto___16573,n__9285__auto__,srcs){
return (function (p1__16566_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16566_SHARP_,this$);
});})(i,G__16570_16575,c_16574,temp__5290__auto___16573,n__9285__auto__,srcs))
;
goog.array.removeIf(G__16570_16575,G__16571_16576);
} else {
}

var G__16577 = (i + (1));
i = G__16577;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return null;
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = 2;

javelin.core.set_formula_BANG__STAR_ = (function javelin$core$set_formula_BANG__STAR_(this$,f,sources,updatefn){
if(cljs.core.truth_(f)){
this$.constant = true;

<<<<<<< HEAD
this$.sources = (function (){var G__15414 = sources;
G__15414.push(f);

return G__15414;
})();

var n__9283__auto___15415 = this$.sources.length;
var i_15416 = (0);
while(true){
if((i_15416 < n__9283__auto___15415)){
var source_15417 = (this$.sources[i_15416]);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_15417) : javelin.core.cell_QMARK_.call(null,source_15417)))){
if(cljs.core.truth_((function (){var and__8228__auto__ = this$.constant;
if(cljs.core.truth_(and__8228__auto__)){
return cljs.core.not(source_15417.constant);
=======
this$.sources = (function (){var G__16578 = sources;
G__16578.push(f);

return G__16578;
})();

var n__9285__auto___16579 = this$.sources.length;
var i_16580 = (0);
while(true){
if((i_16580 < n__9285__auto___16579)){
var source_16581 = (this$.sources[i_16580]);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_16581) : javelin.core.cell_QMARK_.call(null,source_16581)))){
if(cljs.core.truth_((function (){var and__8230__auto__ = this$.constant;
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.not(source_16581.constant);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return and__8228__auto__;
}
})())){
this$.constant = false;
} else {
}

<<<<<<< HEAD
source_15417.sinks.push(this$);

if((source_15417.rank > this$.rank)){
var q_15418 = [source_15417];
while(true){
var temp__5290__auto___15419 = q_15418.shift();
if(cljs.core.truth_(temp__5290__auto___15419)){
var dep_15420 = temp__5290__auto___15419;
dep_15420.rank = javelin.core.next_rank();

var G__15421 = q_15418.concat(dep_15420.sinks);
q_15418 = G__15421;
=======
source_16581.sinks.push(this$);

if((source_16581.rank > this$.rank)){
var q_16582 = [source_16581];
while(true){
var temp__5290__auto___16583 = q_16582.shift();
if(cljs.core.truth_(temp__5290__auto___16583)){
var dep_16584 = temp__5290__auto___16583;
dep_16584.rank = javelin.core.next_rank();

var G__16585 = q_16582.concat(dep_16584.sinks);
q_16582 = G__16585;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}
} else {
}
} else {
}

<<<<<<< HEAD
var G__15422 = (i_15416 + (1));
i_15416 = G__15422;
=======
var G__16586 = (i_16580 + (1));
i_16580 = G__16586;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

this$.thunk = (function (){
var argv = this$.sources.slice();
var f__$1 = javelin.core.deref_STAR_(argv.pop());
<<<<<<< HEAD
var n__9283__auto___15423 = argv.length;
var i_15424 = (0);
while(true){
if((i_15424 < n__9283__auto___15423)){
(argv[i_15424] = javelin.core.deref_STAR_((argv[i_15424])));

var G__15425 = (i_15424 + (1));
i_15424 = G__15425;
=======
var n__9285__auto___16587 = argv.length;
var i_16588 = (0);
while(true){
if((i_16588 < n__9285__auto___16587)){
(argv[i_16588] = javelin.core.deref_STAR_((argv[i_16588])));

var G__16589 = (i_16588 + (1));
i_16588 = G__16589;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

return this$.state = f__$1.apply(null,argv);
});

this$.update = updatefn;
} else {
}

return javelin.core.propagate_BANG_(this$);
});
/**
 * Given a Cell and optional formula function f and the cells f depends on,
 *   sources, updates the formula for this cell in place. If f and/or sources
 *   is not spcified they are set to nil.
 */
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
<<<<<<< HEAD
var G__15427 = arguments.length;
switch (G__15427) {
=======
var G__16591 = arguments.length;
switch (G__16591) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,null,null,null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,f,[],null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,sources){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,f,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(sources),null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,sources,updatefn){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,f,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(sources),updatefn);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.constant = constant;
this.numwatches = numwatches;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
});
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object [javelin.core.Cell ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.state], 0)),"]"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update,self__.constant,self__.numwatches));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
<<<<<<< HEAD
var fexpr__15429_15446 = this$__$1.update;
(fexpr__15429_15446.cljs$core$IFn$_invoke$arity$1 ? fexpr__15429_15446.cljs$core$IFn$_invoke$arity$1(x) : fexpr__15429_15446.call(null,x));
=======
var fexpr__16593_16610 = this$__$1.update;
(fexpr__16593_16610.cljs$core$IFn$_invoke$arity$1 ? fexpr__16593_16610.cljs$core$IFn$_invoke$arity$1(x) : fexpr__16593_16610.call(null,x));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
<<<<<<< HEAD
return cljs.core.reset_BANG_(this$__$1,(function (){var G__15430 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15430) : f.call(null,G__15430));
=======
return cljs.core.reset_BANG_(this$__$1,(function (){var G__16594 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16594) : f.call(null,G__16594));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})());
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
<<<<<<< HEAD
return cljs.core.reset_BANG_(this$__$1,(function (){var G__15431 = this$__$1.state;
var G__15432 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15431,G__15432) : f.call(null,G__15431,G__15432));
=======
return cljs.core.reset_BANG_(this$__$1,(function (){var G__16595 = this$__$1.state;
var G__16596 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16595,G__16596) : f.call(null,G__16595,G__16596));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})());
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
<<<<<<< HEAD
return cljs.core.reset_BANG_(this$__$1,(function (){var G__15433 = this$__$1.state;
var G__15434 = a;
var G__15435 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15433,G__15434,G__15435) : f.call(null,G__15433,G__15434,G__15435));
=======
return cljs.core.reset_BANG_(this$__$1,(function (){var G__16597 = this$__$1.state;
var G__16598 = a;
var G__16599 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16597,G__16598,G__16599) : f.call(null,G__16597,G__16598,G__16599));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})());
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
if(((0) < this$__$1.numwatches)){
<<<<<<< HEAD
var seq__15436 = cljs.core.seq(self__.watches);
var chunk__15437 = null;
var count__15438 = (0);
var i__15439 = (0);
while(true){
if((i__15439 < count__15438)){
var vec__15440 = chunk__15437.cljs$core$IIndexed$_nth$arity$2(null,i__15439);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15440,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15440,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__15447 = seq__15436;
var G__15448 = chunk__15437;
var G__15449 = count__15438;
var G__15450 = (i__15439 + (1));
seq__15436 = G__15447;
chunk__15437 = G__15448;
count__15438 = G__15449;
i__15439 = G__15450;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__15436);
if(temp__5290__auto__){
var seq__15436__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15436__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__15436__$1);
var G__15451 = cljs.core.chunk_rest(seq__15436__$1);
var G__15452 = c__9171__auto__;
var G__15453 = cljs.core.count(c__9171__auto__);
var G__15454 = (0);
seq__15436 = G__15451;
chunk__15437 = G__15452;
count__15438 = G__15453;
i__15439 = G__15454;
continue;
} else {
var vec__15443 = cljs.core.first(seq__15436__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15443,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15443,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__15455 = cljs.core.next(seq__15436__$1);
var G__15456 = null;
var G__15457 = (0);
var G__15458 = (0);
seq__15436 = G__15455;
chunk__15437 = G__15456;
count__15438 = G__15457;
i__15439 = G__15458;
=======
var seq__16600 = cljs.core.seq(self__.watches);
var chunk__16601 = null;
var count__16602 = (0);
var i__16603 = (0);
while(true){
if((i__16603 < count__16602)){
var vec__16604 = chunk__16601.cljs$core$IIndexed$_nth$arity$2(null,i__16603);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16604,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16604,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__16611 = seq__16600;
var G__16612 = chunk__16601;
var G__16613 = count__16602;
var G__16614 = (i__16603 + (1));
seq__16600 = G__16611;
chunk__16601 = G__16612;
count__16602 = G__16613;
i__16603 = G__16614;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__16600);
if(temp__5290__auto__){
var seq__16600__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16600__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__16600__$1);
var G__16615 = cljs.core.chunk_rest(seq__16600__$1);
var G__16616 = c__9173__auto__;
var G__16617 = cljs.core.count(c__9173__auto__);
var G__16618 = (0);
seq__16600 = G__16615;
chunk__16601 = G__16616;
count__16602 = G__16617;
i__16603 = G__16618;
continue;
} else {
var vec__16607 = cljs.core.first(seq__16600__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16607,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16607,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__16619 = cljs.core.next(seq__16600__$1);
var G__16620 = null;
var G__16621 = (0);
var G__16622 = (0);
seq__16600 = G__16619;
chunk__16601 = G__16620;
count__16602 = G__16621;
i__16603 = G__16622;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
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
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(this$__$1.watches,k)){
} else {
this$__$1.numwatches = (this$__$1.numwatches + (1));
}

return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(this$__$1.watches,k)){
this$__$1.numwatches = (this$__$1.numwatches - (1));

return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
} else {
return null;
}
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update,cljs.core.cst$sym$constant,cljs.core.cst$sym$numwatches], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches));
});

/**
 * Returns c if c is a Cell, nil otherwise.
 */
javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){

if(cljs.core.truth_((function (){var and__8228__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8228__auto__)){
return c.thunk;
} else {
return and__8228__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){

if(cljs.core.truth_((function (){var and__8228__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8228__auto__)){
return c.update;
} else {
return and__8228__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){

if(cljs.core.truth_((function (){var and__8228__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8228__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__8228__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.constant_QMARK_ = (function javelin$core$constant_QMARK_(c){

if(cljs.core.truth_((function (){var and__8228__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8228__auto__)){
return c.constant;
} else {
return and__8228__auto__;
}
})())){
return c;
} else {
return null;
}
});
/**
 * Converts c to an input cell in place, setting its contents to x. It's okay
 *   if c was already an input cell. Changes will be propagated to any cells that
 *   depend on c.
 */
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1(c);
});
/**
 * Returns a function that returns a formula cell with f as its formula, and
 *   if updatefn is provided the returned cell is a lens.
 * 
 *   See also: the javelin.core/cell= macro.
 * 
 *    (def x (cell 100))
 *    (def y (cell 200))
 * 
 *    (def z1 (cell= (+ x y)))
 *    (def z2 ((formula +) x y))
 * 
 *   The formula cells z1 and z2 are equivalent.
 */
javelin.core.formula = (function javelin$core$formula(var_args){
<<<<<<< HEAD
var G__15460 = arguments.length;
switch (G__15460) {
=======
var G__16624 = arguments.length;
switch (G__16624) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$1 = (function (f){
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2(f,null);
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$2 = (function (f,updatefn){
return (function (){
<<<<<<< HEAD
return javelin.core.set_formula_BANG__STAR_((function (){var G__15461 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__15461) : javelin.core.cell.call(null,G__15461));
=======
return javelin.core.set_formula_BANG__STAR_((function (){var G__16625 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__16625) : javelin.core.cell.call(null,G__16625));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})(),f,Array.prototype.slice.call(arguments),updatefn);
});
});

javelin.core.formula.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new lens whose value is the same as c's with update function f.
 *   This is equivalent to ((formula identity f) c).
 */
javelin.core.lens = (function javelin$core$lens(c,f){
<<<<<<< HEAD
var fexpr__15463 = javelin.core.formula.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,f);
return (fexpr__15463.cljs$core$IFn$_invoke$arity$1 ? fexpr__15463.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15463.call(null,c));
=======
var fexpr__16627 = javelin.core.formula.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,f);
return (fexpr__16627.cljs$core$IFn$_invoke$arity$1 ? fexpr__16627.cljs$core$IFn$_invoke$arity$1(c) : fexpr__16627.call(null,c));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
/**
 * Returns a new input cell containing value x. The :meta option can be used
 *   to create the cell with the given metadata map.
 */
javelin.core.cell = (function javelin$core$cell(var_args){
<<<<<<< HEAD
var G__15467 = arguments.length;
switch (G__15467) {
=======
var G__16631 = arguments.length;
switch (G__16631) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
<<<<<<< HEAD
var args_arr__9540__auto__ = [];
var len__9517__auto___15472 = arguments.length;
var i__9518__auto___15473 = (0);
while(true){
if((i__9518__auto___15473 < len__9517__auto___15472)){
args_arr__9540__auto__.push((arguments[i__9518__auto___15473]));

var G__15474 = (i__9518__auto___15473 + (1));
i__9518__auto___15473 = G__15474;
=======
var args_arr__9542__auto__ = [];
var len__9519__auto___16636 = arguments.length;
var i__9520__auto___16637 = (0);
while(true){
if((i__9520__auto___16637 < len__9519__auto___16636)){
args_arr__9542__auto__.push((arguments[i__9520__auto___16637]));

var G__16638 = (i__9520__auto___16637 + (1));
i__9520__auto___16637 = G__16638;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9541__auto__ = (new cljs.core.IndexedSeq(args_arr__9540__auto__.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9541__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new javelin.core.Cell(null,x,javelin.core.next_rank(),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

<<<<<<< HEAD
javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__15468){
var map__15469 = p__15468;
var map__15469__$1 = ((((!((map__15469 == null)))?((((map__15469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15469):map__15469);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15469__$1,cljs.core.cst$kw$meta);
return (new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq15465){
var G__15466 = cljs.core.first(seq15465);
var seq15465__$1 = cljs.core.next(seq15465);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__15466,seq15465__$1);
=======
javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__16632){
var map__16633 = p__16632;
var map__16633__$1 = ((((!((map__16633 == null)))?((((map__16633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16633):map__16633);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16633__$1,cljs.core.cst$kw$meta);
return (new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq16629){
var G__16630 = cljs.core.first(seq16629);
var seq16629__$1 = cljs.core.next(seq16629);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__16630,seq16629__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

/**
 * This function is deprecated, please use #'javelin.core/formula instead.
 */
javelin.core.lift = javelin.core.formula;
/**
 * Calls the thunk with no arguments within a transaction. Propagation of
 *   updates to formula cells is deferred until the transaction is complete.
 *   Input cells *will* update during the transaction. Transactions may be
 *   nested.
 * 
 *   See also: the javelin.core/dosync macro.
 */
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
<<<<<<< HEAD
var _STAR_tx_STAR_15475 = javelin.core._STAR_tx_STAR_;
=======
var _STAR_tx_STAR_16639 = javelin.core._STAR_tx_STAR_;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
javelin.core._STAR_tx_STAR_ = [];

try{(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

var tx = javelin.core._STAR_tx_STAR_;
<<<<<<< HEAD
var _STAR_tx_STAR_15476 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_15476;
}}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_15475;
=======
var _STAR_tx_STAR_16640 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_16640;
}}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_16639;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}}
});
/**
 * Given a number of cells, returns a formula cell whose value is a seq of
 *   values from cells that changed in the last update. Note that multiple cells
 *   may update atomically, which is why the formula's value is a seq.
 * 
 *   Consider:
 * 
 *    (def a (cell {:x 1 :y 2}))
 *    (def x (cell= (:x a)))
 *    (def y (cell= (:y a)))
 *    (def z (alts! x y))
 * 
 *   then,
 * 
 *    (deref z) ;=> (1 2)
 * 
 *    (swap! a assoc :x 42)
 *    (deref z) ;=> (42)
 * 
 *    (reset! a {:x 10 :y 20})
 *    (deref z) ;=> (10 20)
 *   
 */
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___15483 = arguments.length;
var i__9518__auto___15484 = (0);
while(true){
if((i__9518__auto___15484 < len__9517__auto___15483)){
args__9524__auto__.push((arguments[i__9518__auto___15484]));

var G__15485 = (i__9518__auto___15484 + (1));
i__9518__auto___15484 = G__15485;
=======
var args__9526__auto__ = [];
var len__9519__auto___16647 = arguments.length;
var i__9520__auto___16648 = (0);
while(true){
if((i__9520__auto___16648 < len__9519__auto___16647)){
args__9526__auto__.push((arguments[i__9520__auto___16648]));

var G__16649 = (i__9520__auto___16648 + (1));
i__9520__auto___16648 = G__16649;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none));
var tag_neq = ((function (olds){
<<<<<<< HEAD
return (function (p1__15477_SHARP_,p2__15478_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__15477_SHARP_,p2__15478_SHARP_),p2__15478_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__15480_SHARP_,p2__15479_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__15480_SHARP_,p2__15479_SHARP_))));
=======
return (function (p1__16641_SHARP_,p2__16642_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__16641_SHARP_,p2__16642_SHARP_),p2__16642_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__16644_SHARP_,p2__16643_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__16644_SHARP_,p2__16643_SHARP_))));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
<<<<<<< HEAD
var G__15486__delegate = function (rest__15481_SHARP_){
var news = diff(cljs.core.deref(olds),rest__15481_SHARP_);
cljs.core.reset_BANG_(olds,rest__15481_SHARP_);

return news;
};
var G__15486 = function (var_args){
var rest__15481_SHARP_ = null;
if (arguments.length > 0) {
var G__15487__i = 0, G__15487__a = new Array(arguments.length -  0);
while (G__15487__i < G__15487__a.length) {G__15487__a[G__15487__i] = arguments[G__15487__i + 0]; ++G__15487__i;}
  rest__15481_SHARP_ = new cljs.core.IndexedSeq(G__15487__a,0,null);
} 
return G__15486__delegate.call(this,rest__15481_SHARP_);};
G__15486.cljs$lang$maxFixedArity = 0;
G__15486.cljs$lang$applyTo = (function (arglist__15488){
var rest__15481_SHARP_ = cljs.core.seq(arglist__15488);
return G__15486__delegate(rest__15481_SHARP_);
});
G__15486.cljs$core$IFn$_invoke$arity$variadic = G__15486__delegate;
return G__15486;
=======
var G__16650__delegate = function (rest__16645_SHARP_){
var news = diff(cljs.core.deref(olds),rest__16645_SHARP_);
cljs.core.reset_BANG_(olds,rest__16645_SHARP_);

return news;
};
var G__16650 = function (var_args){
var rest__16645_SHARP_ = null;
if (arguments.length > 0) {
var G__16651__i = 0, G__16651__a = new Array(arguments.length -  0);
while (G__16651__i < G__16651__a.length) {G__16651__a[G__16651__i] = arguments[G__16651__i + 0]; ++G__16651__i;}
  rest__16645_SHARP_ = new cljs.core.IndexedSeq(G__16651__a,0,null);
} 
return G__16650__delegate.call(this,rest__16645_SHARP_);};
G__16650.cljs$lang$maxFixedArity = 0;
G__16650.cljs$lang$applyTo = (function (arglist__16652){
var rest__16645_SHARP_ = cljs.core.seq(arglist__16652);
return G__16650__delegate(rest__16645_SHARP_);
});
G__16650.cljs$core$IFn$_invoke$arity$variadic = G__16650__delegate;
return G__16650;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula.cljs$core$IFn$_invoke$arity$1(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq15482){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15482));
=======
javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq16646){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16646));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   returns a seq of formula cells such that the ith formula cell is equivalent
 *   to (cell= (f (nth c i))).
 */
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
<<<<<<< HEAD
var cseq = (function (){var fexpr__15490 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.seq);
return (fexpr__15490.cljs$core$IFn$_invoke$arity$1 ? fexpr__15490.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15490.call(null,c));
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__15489_SHARP_){
var fexpr__15491 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth));
return (fexpr__15491.cljs$core$IFn$_invoke$arity$2 ? fexpr__15491.cljs$core$IFn$_invoke$arity$2(cseq,p1__15489_SHARP_) : fexpr__15491.call(null,cseq,p1__15489_SHARP_));
=======
var cseq = (function (){var fexpr__16654 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.seq);
return (fexpr__16654.cljs$core$IFn$_invoke$arity$1 ? fexpr__16654.cljs$core$IFn$_invoke$arity$1(c) : fexpr__16654.call(null,c));
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__16653_SHARP_){
var fexpr__16655 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth));
return (fexpr__16655.cljs$core$IFn$_invoke$arity$2 ? fexpr__16655.cljs$core$IFn$_invoke$arity$2(cseq,p1__16653_SHARP_) : fexpr__16655.call(null,cseq,p1__16653_SHARP_));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.deref(cseq))));
});
/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   calls f for side effects once for each item in c, passing one argument: a
 *   formula cell equivalent to (cell= (nth c i)) for the ith item in c. Whenever
 *   c grows beyond its previous maximum size f is called as above for each item
 *   beyond the maximum size. Nothing happens when c shrinks.
 * 
 *   See also: the javelin.core/cell-doseq macro.
 * 
 *   Consider:
 * 
 *    (def things (cell [:a :b :c]))
 *    (cell-doseq*
 *      things
 *      (fn doit [x]
 *        (prn :creating @x)
 *        (add-watch x nil #(prn :updating %3 %4))))
 * 
 *    ;; the following is printed:
 * 
 *    :creating :a
 *    :creating :b
 *    :creating :c
 * 
 *   Shrink things by removing the last item:
 * 
 *    (swap! things pop)
 * 
 *    ;; the following is printed (because the 3rd item in things is now nil,
 *    ;; since things only contains 2 items) -- note that the doit function is
 *    ;; not called (or we would see a :creating message):
 * 
 *    :updating :c nil
 * 
 *   Grow things such that it is one item larger than it ever was:
 * 
 *    (swap! things into [:u :v])
 * 
 *    ;; the following is printed (because things now has 4 items, so the 3rd
 *    ;; item is now :u and the max size increases by one with the new item :v):
 * 
 *    :updating nil :u
 *    :creating :v
 * 
 *   A weird imagination is most useful to gain full advantage of all the features.
 */
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(c,f){
var pool_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
<<<<<<< HEAD
var fexpr__15496 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (pool_size){
return (function (items){
var cnt = cljs.core.count(items);
if((cljs.core.deref(pool_size) < cnt)){
var n__9283__auto___15501 = (cnt - cljs.core.deref(pool_size));
var i_15502 = (0);
while(true){
if((i_15502 < n__9283__auto___15501)){
var G__15497_15503 = (function (){var G__15499 = c;
var G__15500 = (i_15502 + cljs.core.deref(pool_size));
var fexpr__15498 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(javelin.core.safe_nth);
return (fexpr__15498.cljs$core$IFn$_invoke$arity$2 ? fexpr__15498.cljs$core$IFn$_invoke$arity$2(G__15499,G__15500) : fexpr__15498.call(null,G__15499,G__15500));
})();
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15497_15503) : f.call(null,G__15497_15503));

var G__15504 = (i_15502 + (1));
i_15502 = G__15504;
=======
var fexpr__16660 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (pool_size){
return (function (items){
var cnt = cljs.core.count(items);
if((cljs.core.deref(pool_size) < cnt)){
var n__9285__auto___16665 = (cnt - cljs.core.deref(pool_size));
var i_16666 = (0);
while(true){
if((i_16666 < n__9285__auto___16665)){
var G__16661_16667 = (function (){var G__16663 = c;
var G__16664 = (i_16666 + cljs.core.deref(pool_size));
var fexpr__16662 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(javelin.core.safe_nth);
return (fexpr__16662.cljs$core$IFn$_invoke$arity$2 ? fexpr__16662.cljs$core$IFn$_invoke$arity$2(G__16663,G__16664) : fexpr__16662.call(null,G__16663,G__16664));
})();
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16661_16667) : f.call(null,G__16661_16667));

var G__16668 = (i_16666 + (1));
i_16666 = G__16668;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

return cljs.core.reset_BANG_(pool_size,cnt);
} else {
return null;
}
});})(pool_size))
);
<<<<<<< HEAD
return (fexpr__15496.cljs$core$IFn$_invoke$arity$1 ? fexpr__15496.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15496.call(null,c));
=======
return (fexpr__16660.cljs$core$IFn$_invoke$arity$1 ? fexpr__16660.cljs$core$IFn$_invoke$arity$1(c) : fexpr__16660.call(null,c));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
