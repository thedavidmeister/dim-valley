// Compiled by ClojureScript 1.9.542 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('goog.object');





javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = pri_map.shift();
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null);
} else {
return next.state;
}
})();
if(cljs.core.not_EQ_.call(null,new$,old)){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);

var sinks_10121 = next.sinks;
var n__8116__auto___10122 = sinks_10121.length;
var i_10123 = (0);
while(true){
if((i_10123 < n__8116__auto___10122)){
goog.array.binaryInsert(pri_map,(sinks_10121[i_10123]),javelin.core.cmp_rank);

var G__10124 = (i_10123 + (1));
i_10123 = G__10124;
continue;
} else {
}
break;
}
} else {
}

var G__10125 = pri_map;
pri_map = G__10125;
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
}catch (e10127){if((e10127 instanceof Error)){
var _ = e10127;
return null;
} else {
throw e10127;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__10130 = c;
javelin.core.add_sync_BANG_.call(null,G__10130);

return G__10130;
} else {
var G__10131 = c;
javelin.core.propagate_STAR_.call(null,[G__10131]);

return G__10131;
}
});
/**
 * Unlinks this Cell from the cell graph and resets all internal state. Watches
 *   are preserved when keep-watches? is true, otherwise they are all removed.
 */
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args10133 = [];
var len__8306__auto___10136 = arguments.length;
var i__8307__auto___10137 = (0);
while(true){
if((i__8307__auto___10137 < len__8306__auto___10136)){
args10133.push((arguments[i__8307__auto___10137]));

var G__10138 = (i__8307__auto___10137 + (1));
i__8307__auto___10137 = G__10138;
continue;
} else {
}
break;
}

var G__10135 = args10133.length;
switch (G__10135) {
case 1:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10133.length)].join('')));

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

var n__8116__auto__ = srcs.length;
var i = (0);
while(true){
if((i < n__8116__auto__)){
var temp__4657__auto___10140 = javelin.core.cell_QMARK_.call(null,(srcs[i]));
if(cljs.core.truth_(temp__4657__auto___10140)){
var c_10141 = temp__4657__auto___10140;
goog.array.removeIf(c_10141.sinks,((function (i,c_10141,temp__4657__auto___10140,n__8116__auto__,srcs){
return (function (p1__10132_SHARP_){
return cljs.core._EQ_.call(null,p1__10132_SHARP_,this$);
});})(i,c_10141,temp__4657__auto___10140,n__8116__auto__,srcs))
);
} else {
}

var G__10142 = (i + (1));
i = G__10142;
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

this$.sources = (function (){var G__10144 = sources;
G__10144.push(f);

return G__10144;
})();

var n__8116__auto___10145 = this$.sources.length;
var i_10146 = (0);
while(true){
if((i_10146 < n__8116__auto___10145)){
var source_10147 = (this$.sources[i_10146]);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_10147))){
if(cljs.core.truth_((function (){var and__7181__auto__ = this$.constant;
if(cljs.core.truth_(and__7181__auto__)){
return cljs.core.not.call(null,source_10147.constant);
} else {
return and__7181__auto__;
}
})())){
this$.constant = false;
} else {
}

source_10147.sinks.push(this$);

if((source_10147.rank > this$.rank)){
var q_10148 = [source_10147];
while(true){
var temp__4657__auto___10149 = q_10148.shift();
if(cljs.core.truth_(temp__4657__auto___10149)){
var dep_10150 = temp__4657__auto___10149;
dep_10150.rank = javelin.core.next_rank.call(null);

var G__10151 = q_10148.concat(dep_10150.sinks);
q_10148 = G__10151;
continue;
} else {
}
break;
}
} else {
}
} else {
}

var G__10152 = (i_10146 + (1));
i_10146 = G__10152;
continue;
} else {
}
break;
}

this$.thunk = (function (){
var argv = this$.sources.slice();
var f__$1 = javelin.core.deref_STAR_.call(null,argv.pop());
var n__8116__auto___10153 = argv.length;
var i_10154 = (0);
while(true){
if((i_10154 < n__8116__auto___10153)){
(argv[i_10154] = javelin.core.deref_STAR_.call(null,(argv[i_10154])));

var G__10155 = (i_10154 + (1));
i_10154 = G__10155;
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
var args10156 = [];
var len__8306__auto___10159 = arguments.length;
var i__8307__auto___10160 = (0);
while(true){
if((i__8307__auto___10160 < len__8306__auto___10159)){
args10156.push((arguments[i__8307__auto___10160]));

var G__10161 = (i__8307__auto___10160 + (1));
i__8307__auto___10160 = G__10161;
continue;
} else {
}
break;
}

var G__10158 = args10156.length;
switch (G__10158) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10156.length)].join('')));

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
var seq__10163 = cljs.core.seq.call(null,self__.watches);
var chunk__10164 = null;
var count__10165 = (0);
var i__10166 = (0);
while(true){
if((i__10166 < count__10165)){
var vec__10167 = cljs.core._nth.call(null,chunk__10164,i__10166);
var key = cljs.core.nth.call(null,vec__10167,(0),null);
var f = cljs.core.nth.call(null,vec__10167,(1),null);
f.call(null,key,this$__$1,o,n);

var G__10173 = seq__10163;
var G__10174 = chunk__10164;
var G__10175 = count__10165;
var G__10176 = (i__10166 + (1));
seq__10163 = G__10173;
chunk__10164 = G__10174;
count__10165 = G__10175;
i__10166 = G__10176;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10163);
if(temp__4657__auto__){
var seq__10163__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10163__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__10163__$1);
var G__10177 = cljs.core.chunk_rest.call(null,seq__10163__$1);
var G__10178 = c__8012__auto__;
var G__10179 = cljs.core.count.call(null,c__8012__auto__);
var G__10180 = (0);
seq__10163 = G__10177;
chunk__10164 = G__10178;
count__10165 = G__10179;
i__10166 = G__10180;
continue;
} else {
var vec__10170 = cljs.core.first.call(null,seq__10163__$1);
var key = cljs.core.nth.call(null,vec__10170,(0),null);
var f = cljs.core.nth.call(null,vec__10170,(1),null);
f.call(null,key,this$__$1,o,n);

var G__10181 = cljs.core.next.call(null,seq__10163__$1);
var G__10182 = null;
var G__10183 = (0);
var G__10184 = (0);
seq__10163 = G__10181;
chunk__10164 = G__10182;
count__10165 = G__10183;
i__10166 = G__10184;
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

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7804__auto__,writer__7805__auto__,opt__7806__auto__){
return cljs.core._write.call(null,writer__7805__auto__,"javelin.core/Cell");
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

if(cljs.core.truth_((function (){var and__7181__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7181__auto__)){
return c.thunk;
} else {
return and__7181__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){

if(cljs.core.truth_((function (){var and__7181__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7181__auto__)){
return c.update;
} else {
return and__7181__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){

if(cljs.core.truth_((function (){var and__7181__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7181__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__7181__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.constant_QMARK_ = (function javelin$core$constant_QMARK_(c){

if(cljs.core.truth_((function (){var and__7181__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7181__auto__)){
return c.constant;
} else {
return and__7181__auto__;
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
var args10185 = [];
var len__8306__auto___10188 = arguments.length;
var i__8307__auto___10189 = (0);
while(true){
if((i__8307__auto___10189 < len__8306__auto___10188)){
args10185.push((arguments[i__8307__auto___10189]));

var G__10190 = (i__8307__auto___10189 + (1));
i__8307__auto___10189 = G__10190;
continue;
} else {
}
break;
}

var G__10187 = args10185.length;
switch (G__10187) {
case 1:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10185.length)].join('')));

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
var args10192 = [];
var len__8306__auto___10200 = arguments.length;
var i__8307__auto___10201 = (0);
while(true){
if((i__8307__auto___10201 < len__8306__auto___10200)){
args10192.push((arguments[i__8307__auto___10201]));

var G__10202 = (i__8307__auto___10201 + (1));
i__8307__auto___10201 = G__10202;
continue;
} else {
}
break;
}

var G__10196 = args10192.length;
switch (G__10196) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__8325__auto__ = (new cljs.core.IndexedSeq(args10192.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8325__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__10197){
var map__10198 = p__10197;
var map__10198__$1 = ((((!((map__10198 == null)))?((((map__10198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10198):map__10198);
var meta = cljs.core.get.call(null,map__10198__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq10193){
var G__10194 = cljs.core.first.call(null,seq10193);
var seq10193__$1 = cljs.core.next.call(null,seq10193);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__10194,seq10193__$1);
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
var _STAR_tx_STAR_10206 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = [];

try{thunk.call(null);

var tx = javelin.core._STAR_tx_STAR_;
var _STAR_tx_STAR_10207 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_10207;
}}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_10206;
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
var args__8313__auto__ = [];
var len__8306__auto___10214 = arguments.length;
var i__8307__auto___10215 = (0);
while(true){
if((i__8307__auto___10215 < len__8306__auto___10214)){
args__8313__auto__.push((arguments[i__8307__auto___10215]));

var G__10216 = (i__8307__auto___10215 + (1));
i__8307__auto___10215 = G__10216;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__10208_SHARP_,p2__10209_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__10208_SHARP_,p2__10209_SHARP_),p2__10209_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__10211_SHARP_,p2__10210_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__10211_SHARP_,p2__10210_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10217__delegate = function (rest__10212_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__10212_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__10212_SHARP_);

return news;
};
var G__10217 = function (var_args){
var rest__10212_SHARP_ = null;
if (arguments.length > 0) {
var G__10218__i = 0, G__10218__a = new Array(arguments.length -  0);
while (G__10218__i < G__10218__a.length) {G__10218__a[G__10218__i] = arguments[G__10218__i + 0]; ++G__10218__i;}
  rest__10212_SHARP_ = new cljs.core.IndexedSeq(G__10218__a,0,null);
} 
return G__10217__delegate.call(this,rest__10212_SHARP_);};
G__10217.cljs$lang$maxFixedArity = 0;
G__10217.cljs$lang$applyTo = (function (arglist__10219){
var rest__10212_SHARP_ = cljs.core.seq(arglist__10219);
return G__10217__delegate(rest__10212_SHARP_);
});
G__10217.cljs$core$IFn$_invoke$arity$variadic = G__10217__delegate;
return G__10217;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq10213){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10213));
});

/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   returns a seq of formula cells such that the ith formula cell is equivalent
 *   to (cell= (f (nth c i))).
 */
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__10220_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__10220_SHARP_);
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
var n__8116__auto___10221 = (cnt - cljs.core.deref.call(null,pool_size));
var i_10222 = (0);
while(true){
if((i_10222 < n__8116__auto___10221)){
f.call(null,javelin.core.formula.call(null,javelin.core.safe_nth).call(null,c,(i_10222 + cljs.core.deref.call(null,pool_size))));

var G__10223 = (i_10222 + (1));
i_10222 = G__10223;
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