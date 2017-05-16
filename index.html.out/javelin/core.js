// Compiled by ClojureScript 1.9.521 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('goog.object');





javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__6738__auto__ = pri_map.shift();
if(cljs.core.truth_(temp__6738__auto__)){
var next = temp__6738__auto__;
var old = next.prev;
var new$ = (function (){var temp__6736__auto__ = next.thunk;
if(cljs.core.truth_(temp__6736__auto__)){
var f = temp__6736__auto__;
return f.call(null);
} else {
return next.state;
}
})();
if(cljs.core.not_EQ_.call(null,new$,old)){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);

var sinks_9816 = next.sinks;
var n__8781__auto___9817 = sinks_9816.length;
var i_9818 = (0);
while(true){
if((i_9818 < n__8781__auto___9817)){
goog.array.binaryInsert(pri_map,(sinks_9816[i_9818]),javelin.core.cmp_rank);

var G__9819 = (i_9818 + (1));
i_9818 = G__9819;
continue;
} else {
}
break;
}
} else {
}

var G__9820 = pri_map;
pri_map = G__9820;
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
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cmp_rank = (function javelin$core$cmp_rank(a,b){
var a__$1 = a.rank;
var b__$1 = b.rank;
if(cljs.core._EQ_.call(null,a__$1,b__$1)){
return (0);
} else {
return (a__$1 - b__$1);
}
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return goog.array.binaryInsert(javelin.core._STAR_tx_STAR_,c,javelin.core.cmp_rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e9822){if((e9822 instanceof Error)){
var _ = e9822;
return null;
} else {
throw e9822;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__9825 = c;
javelin.core.add_sync_BANG_.call(null,G__9825);

return G__9825;
} else {
var G__9826 = c;
javelin.core.propagate_STAR_.call(null,[G__9826]);

return G__9826;
}
});
/**
 * Unlinks this Cell from the cell graph and resets all internal state. Watches
 *   are preserved when keep-watches? is true, otherwise they are all removed.
 */
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args9828 = [];
var len__8981__auto___9831 = arguments.length;
var i__8982__auto___9832 = (0);
while(true){
if((i__8982__auto___9832 < len__8981__auto___9831)){
args9828.push((arguments[i__8982__auto___9832]));

var G__9833 = (i__8982__auto___9832 + (1));
i__8982__auto___9832 = G__9833;
continue;
} else {
}
break;
}

var G__9830 = args9828.length;
switch (G__9830) {
case 1:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9828.length)].join('')));

}
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return javelin.core.destroy_cell_BANG_.call(null,this$,null);
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

var n__8781__auto__ = srcs.length;
var i = (0);
while(true){
if((i < n__8781__auto__)){
var temp__6738__auto___9835 = javelin.core.cell_QMARK_.call(null,(srcs[i]));
if(cljs.core.truth_(temp__6738__auto___9835)){
var c_9836 = temp__6738__auto___9835;
goog.array.removeIf(c_9836.sinks,((function (i,c_9836,temp__6738__auto___9835,n__8781__auto__,srcs){
return (function (p1__9827_SHARP_){
return cljs.core._EQ_.call(null,p1__9827_SHARP_,this$);
});})(i,c_9836,temp__6738__auto___9835,n__8781__auto__,srcs))
);
} else {
}

var G__9837 = (i + (1));
i = G__9837;
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

this$.sources = (function (){var G__9839 = sources;
G__9839.push(f);

return G__9839;
})();

var n__8781__auto___9840 = this$.sources.length;
var i_9841 = (0);
while(true){
if((i_9841 < n__8781__auto___9840)){
var source_9842 = (this$.sources[i_9841]);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_9842))){
if(cljs.core.truth_((function (){var and__7748__auto__ = this$.constant;
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.not.call(null,source_9842.constant);
} else {
return and__7748__auto__;
}
})())){
this$.constant = false;
} else {
}

source_9842.sinks.push(this$);

if((source_9842.rank > this$.rank)){
var q_9843 = [source_9842];
while(true){
var temp__6738__auto___9844 = q_9843.shift();
if(cljs.core.truth_(temp__6738__auto___9844)){
var dep_9845 = temp__6738__auto___9844;
dep_9845.rank = javelin.core.next_rank.call(null);

var G__9846 = q_9843.concat(dep_9845.sinks);
q_9843 = G__9846;
continue;
} else {
}
break;
}
} else {
}
} else {
}

var G__9847 = (i_9841 + (1));
i_9841 = G__9847;
continue;
} else {
}
break;
}

this$.thunk = (function (){
var argv = this$.sources.slice();
var f__$1 = javelin.core.deref_STAR_.call(null,argv.pop());
var n__8781__auto___9848 = argv.length;
var i_9849 = (0);
while(true){
if((i_9849 < n__8781__auto___9848)){
(argv[i_9849] = javelin.core.deref_STAR_.call(null,(argv[i_9849])));

var G__9850 = (i_9849 + (1));
i_9849 = G__9850;
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

return javelin.core.propagate_BANG_.call(null,this$);
});
/**
 * Given a Cell and optional formula function f and the cells f depends on,
 *   sources, updates the formula for this cell in place. If f and/or sources
 *   is not spcified they are set to nil.
 */
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args9851 = [];
var len__8981__auto___9854 = arguments.length;
var i__8982__auto___9855 = (0);
while(true){
if((i__8982__auto___9855 < len__8981__auto___9854)){
args9851.push((arguments[i__8982__auto___9855]));

var G__9856 = (i__8982__auto___9855 + (1));
i__8982__auto___9855 = G__9856;
continue;
} else {
}
break;
}

var G__9853 = args9851.length;
switch (G__9853) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9851.length)].join('')));

}
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,null,null,null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,f,[],null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,sources){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,f,cljs.core.into_array.call(null,sources),null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,sources,updatefn){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,f,cljs.core.into_array.call(null,sources),updatefn);
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
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#object [javelin.core.Cell ",cljs.core.pr_str.call(null,self__.state),"]");
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
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
if(((0) < this$__$1.numwatches)){
var seq__9858 = cljs.core.seq.call(null,self__.watches);
var chunk__9859 = null;
var count__9860 = (0);
var i__9861 = (0);
while(true){
if((i__9861 < count__9860)){
var vec__9862 = cljs.core._nth.call(null,chunk__9859,i__9861);
var key = cljs.core.nth.call(null,vec__9862,(0),null);
var f = cljs.core.nth.call(null,vec__9862,(1),null);
f.call(null,key,this$__$1,o,n);

var G__9868 = seq__9858;
var G__9869 = chunk__9859;
var G__9870 = count__9860;
var G__9871 = (i__9861 + (1));
seq__9858 = G__9868;
chunk__9859 = G__9869;
count__9860 = G__9870;
i__9861 = G__9871;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__9858);
if(temp__6738__auto__){
var seq__9858__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9858__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__9858__$1);
var G__9872 = cljs.core.chunk_rest.call(null,seq__9858__$1);
var G__9873 = c__8671__auto__;
var G__9874 = cljs.core.count.call(null,c__8671__auto__);
var G__9875 = (0);
seq__9858 = G__9872;
chunk__9859 = G__9873;
count__9860 = G__9874;
i__9861 = G__9875;
continue;
} else {
var vec__9865 = cljs.core.first.call(null,seq__9858__$1);
var key = cljs.core.nth.call(null,vec__9865,(0),null);
var f = cljs.core.nth.call(null,vec__9865,(1),null);
f.call(null,key,this$__$1,o,n);

var G__9876 = cljs.core.next.call(null,seq__9858__$1);
var G__9877 = null;
var G__9878 = (0);
var G__9879 = (0);
seq__9858 = G__9876;
chunk__9859 = G__9877;
count__9860 = G__9878;
i__9861 = G__9879;
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
if(cljs.core.contains_QMARK_.call(null,this$__$1.watches,k)){
} else {
this$__$1.numwatches = (this$__$1.numwatches + (1));
}

return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,this$__$1.watches,k)){
this$__$1.numwatches = (this$__$1.numwatches - (1));

return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
} else {
return null;
}
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"constant","constant",1260922224,null),new cljs.core.Symbol(null,"numwatches","numwatches",2058987374,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__8417__auto__,writer__8418__auto__,opt__8419__auto__){
return cljs.core._write.call(null,writer__8418__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches));
});

/**
 * Returns c if c is a Cell, nil otherwise.
 */
javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){

if(cljs.core.truth_((function (){var and__7748__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7748__auto__)){
return c.thunk;
} else {
return and__7748__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){

if(cljs.core.truth_((function (){var and__7748__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7748__auto__)){
return c.update;
} else {
return and__7748__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){

if(cljs.core.truth_((function (){var and__7748__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__7748__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.constant_QMARK_ = (function javelin$core$constant_QMARK_(c){

if(cljs.core.truth_((function (){var and__7748__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7748__auto__)){
return c.constant;
} else {
return and__7748__auto__;
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

return javelin.core.set_formula_BANG_.call(null,c);
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
var args9880 = [];
var len__8981__auto___9883 = arguments.length;
var i__8982__auto___9884 = (0);
while(true){
if((i__8982__auto___9884 < len__8981__auto___9883)){
args9880.push((arguments[i__8982__auto___9884]));

var G__9885 = (i__8982__auto___9884 + (1));
i__8982__auto___9884 = G__9885;
continue;
} else {
}
break;
}

var G__9882 = args9880.length;
switch (G__9882) {
case 1:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9880.length)].join('')));

}
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$1 = (function (f){
return javelin.core.formula.call(null,f,null);
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$2 = (function (f,updatefn){
return (function (){
return javelin.core.set_formula_BANG__STAR_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,Array.prototype.slice.call(arguments),updatefn);
});
});

javelin.core.formula.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new lens whose value is the same as c's with update function f.
 *   This is equivalent to ((formula identity f) c).
 */
javelin.core.lens = (function javelin$core$lens(c,f){
return javelin.core.formula.call(null,cljs.core.identity,f).call(null,c);
});
/**
 * Returns a new input cell containing value x. The :meta option can be used
 *   to create the cell with the given metadata map.
 */
javelin.core.cell = (function javelin$core$cell(var_args){
var args9887 = [];
var len__8981__auto___9895 = arguments.length;
var i__8982__auto___9896 = (0);
while(true){
if((i__8982__auto___9896 < len__8981__auto___9895)){
args9887.push((arguments[i__8982__auto___9896]));

var G__9897 = (i__8982__auto___9896 + (1));
i__8982__auto___9896 = G__9897;
continue;
} else {
}
break;
}

var G__9891 = args9887.length;
switch (G__9891) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args9887.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9004__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__9892){
var map__9893 = p__9892;
var map__9893__$1 = ((((!((map__9893 == null)))?((((map__9893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9893):map__9893);
var meta = cljs.core.get.call(null,map__9893__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq9888){
var G__9889 = cljs.core.first.call(null,seq9888);
var seq9888__$1 = cljs.core.next.call(null,seq9888);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__9889,seq9888__$1);
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
return thunk.call(null);
} else {
var _STAR_tx_STAR_9901 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = [];

try{thunk.call(null);

var tx = javelin.core._STAR_tx_STAR_;
var _STAR_tx_STAR_9902 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9902;
}}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9901;
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
var args__8988__auto__ = [];
var len__8981__auto___9909 = arguments.length;
var i__8982__auto___9910 = (0);
while(true){
if((i__8982__auto___9910 < len__8981__auto___9909)){
args__8988__auto__.push((arguments[i__8982__auto___9910]));

var G__9911 = (i__8982__auto___9910 + (1));
i__8982__auto___9910 = G__9911;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__9903_SHARP_,p2__9904_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__9903_SHARP_,p2__9904_SHARP_),p2__9904_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9906_SHARP_,p2__9905_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__9906_SHARP_,p2__9905_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9912__delegate = function (rest__9907_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__9907_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__9907_SHARP_);

return news;
};
var G__9912 = function (var_args){
var rest__9907_SHARP_ = null;
if (arguments.length > 0) {
var G__9913__i = 0, G__9913__a = new Array(arguments.length -  0);
while (G__9913__i < G__9913__a.length) {G__9913__a[G__9913__i] = arguments[G__9913__i + 0]; ++G__9913__i;}
  rest__9907_SHARP_ = new cljs.core.IndexedSeq(G__9913__a,0);
} 
return G__9912__delegate.call(this,rest__9907_SHARP_);};
G__9912.cljs$lang$maxFixedArity = 0;
G__9912.cljs$lang$applyTo = (function (arglist__9914){
var rest__9907_SHARP_ = cljs.core.seq(arglist__9914);
return G__9912__delegate(rest__9907_SHARP_);
});
G__9912.cljs$core$IFn$_invoke$arity$variadic = G__9912__delegate;
return G__9912;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq9908){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9908));
});

/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   returns a seq of formula cells such that the ith formula cell is equivalent
 *   to (cell= (f (nth c i))).
 */
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__9915_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__9915_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
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
var pool_size = cljs.core.atom.call(null,(0));
return javelin.core.formula.call(null,((function (pool_size){
return (function (items){
var cnt = cljs.core.count.call(null,items);
if((cljs.core.deref.call(null,pool_size) < cnt)){
var n__8781__auto___9916 = (cnt - cljs.core.deref.call(null,pool_size));
var i_9917 = (0);
while(true){
if((i_9917 < n__8781__auto___9916)){
f.call(null,javelin.core.formula.call(null,javelin.core.safe_nth).call(null,c,(i_9917 + cljs.core.deref.call(null,pool_size))));

var G__9918 = (i_9917 + (1));
i_9917 = G__9918;
continue;
} else {
}
break;
}

return cljs.core.reset_BANG_.call(null,pool_size,cnt);
} else {
return null;
}
});})(pool_size))
).call(null,c);
});

//# sourceMappingURL=core.js.map