// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.internals.string_separator');
goog.require('cljs.core');

/**
 * @interface
 */
camel_snake_kebab.internals.string_separator.StringSeparator = function(){};

/**
 * : StringSeparator -> String -> NonEmptySeq[String]
 */
camel_snake_kebab.internals.string_separator.split = (function camel_snake_kebab$internals$string_separator$split(this$,s){
if((!((this$ == null))) && (!((this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 == null)))){
return this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2(this$,s);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (camel_snake_kebab.internals.string_separator.split[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,s);
} else {
var m__7506__auto____$1 = (camel_snake_kebab.internals.string_separator.split["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,s);
} else {
throw cljs.core.missing_protocol.call(null,"StringSeparator.split",this$);
}
}
}
});

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.seq.call(null,s.split(this$__$1));
});

(camel_snake_kebab.internals.string_separator.StringSeparator["string"] = true);

(camel_snake_kebab.internals.string_separator.split["string"] = (function (this$,s){
return cljs.core.seq.call(null,s.split(this$));
}));
camel_snake_kebab.internals.string_separator.classify_char = (function camel_snake_kebab$internals$string_separator$classify_char(c){
var G__9495 = c;
switch (G__9495) {
case "0":
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
return new cljs.core.Keyword(null,"number","number",1570378438);

break;
case "-":
case "_":
case " ":
case "\t":
case "\n":
case "\u000B":
case "\f":
case "\r":
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);

break;
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
case "g":
case "h":
case "i":
case "j":
case "k":
case "l":
case "m":
case "n":
case "o":
case "p":
case "q":
case "r":
case "s":
case "t":
case "u":
case "v":
case "w":
case "x":
case "y":
case "z":
return new cljs.core.Keyword(null,"lower","lower",1120320821);

break;
case "A":
case "B":
case "C":
case "D":
case "E":
case "F":
case "G":
case "H":
case "I":
case "J":
case "K":
case "L":
case "M":
case "N":
case "O":
case "P":
case "Q":
case "R":
case "S":
case "T":
case "U":
case "V":
case "W":
case "X":
case "Y":
case "Z":
return new cljs.core.Keyword(null,"upper","upper",246243906);

break;
default:
return new cljs.core.Keyword(null,"other","other",995793544);

}
});
camel_snake_kebab.internals.string_separator.generic_split = (function camel_snake_kebab$internals$string_separator$generic_split(ss){
var cs = cljs.core.mapv.call(null,camel_snake_kebab.internals.string_separator.classify_char,ss);
var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var start = (0);
var current = (0);
while(true){
var next = (current + (1));
var result_PLUS_new = ((function (result,start,current,next,cs){
return (function (end){
if((end > start)){
return cljs.core.conj_BANG_.call(null,result,ss.substring(start,end));
} else {
return result;
}
});})(result,start,current,next,cs))
;
if((current >= cljs.core.count.call(null,ss))){
var or__6842__auto__ = cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,result_PLUS_new.call(null,current)));
if(or__6842__auto__){
return or__6842__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,cs,current),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
var G__9503 = result_PLUS_new.call(null,current);
var G__9504 = next;
var G__9505 = next;
result = G__9503;
start = G__9504;
current = G__9505;
continue;
} else {
if((function (){var vec__9500 = cljs.core.subvec.call(null,cs,current);
var a = cljs.core.nth.call(null,vec__9500,(0),null);
var b = cljs.core.nth.call(null,vec__9500,(1),null);
var c = cljs.core.nth.call(null,vec__9500,(2),null);
return ((cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"upper","upper",246243906)))) || ((cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword(null,"number","number",1570378438))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"number","number",1570378438)))) || ((cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.call(null,c,new cljs.core.Keyword(null,"lower","lower",1120320821))));
})()){
var G__9506 = result_PLUS_new.call(null,next);
var G__9507 = next;
var G__9508 = next;
result = G__9506;
start = G__9507;
current = G__9508;
continue;
} else {
var G__9509 = result;
var G__9510 = start;
var G__9511 = next;
result = G__9509;
start = G__9510;
current = G__9511;
continue;

}
}
}
break;
}
});
camel_snake_kebab.internals.string_separator.generic_separator = (function (){
if(typeof camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {camel_snake_kebab.internals.string_separator.StringSeparator}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512 = (function (meta9513){
this.meta9513 = meta9513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9514,meta9513__$1){
var self__ = this;
var _9514__$1 = this;
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512(meta9513__$1));
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9514){
var self__ = this;
var _9514__$1 = this;
return self__.meta9513;
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return camel_snake_kebab.internals.string_separator.generic_split.call(null,s);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9513","meta9513",-1800602503,null)], null);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512.cljs$lang$type = true;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512.cljs$lang$ctorStr = "camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator9512";

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512.cljs$lang$ctorPrWriter = (function (this__7448__auto__,writer__7449__auto__,opt__7450__auto__){
return cljs.core._write.call(null,writer__7449__auto__,"camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator9512");
});

camel_snake_kebab.internals.string_separator.__GT_t_camel_snake_kebab$internals$string_separator9512 = (function camel_snake_kebab$internals$string_separator$__GT_t_camel_snake_kebab$internals$string_separator9512(meta9513){
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512(meta9513));
});

}

return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator9512(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=string_separator.js.map