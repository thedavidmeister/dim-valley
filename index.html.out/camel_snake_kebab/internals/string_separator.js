// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.string_separator');
goog.require('cljs.core');
goog.require('cljs.core.constants');

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
var x__8973__auto__ = (((this$ == null))?null:this$);
var m__8974__auto__ = (camel_snake_kebab.internals.string_separator.split[goog.typeOf(x__8973__auto__)]);
if(!((m__8974__auto__ == null))){
return (m__8974__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__8974__auto__.call(null,this$,s));
} else {
var m__8974__auto____$1 = (camel_snake_kebab.internals.string_separator.split["_"]);
if(!((m__8974__auto____$1 == null))){
return (m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8974__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,s) : m__8974__auto____$1.call(null,this$,s));
} else {
throw cljs.core.missing_protocol("StringSeparator.split",this$);
}
}
}
});

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.seq(s.split(this$__$1));
});

goog.object.set(camel_snake_kebab.internals.string_separator.StringSeparator,"string",true);

<<<<<<< HEAD
var G__24156_24159 = camel_snake_kebab.internals.string_separator.split;
var G__24157_24160 = "string";
var G__24158_24161 = ((function (G__24156_24159,G__24157_24160){
return (function (this$,s){
return cljs.core.seq(s.split(this$));
});})(G__24156_24159,G__24157_24160))
;
goog.object.set(G__24156_24159,G__24157_24160,G__24158_24161);
camel_snake_kebab.internals.string_separator.classify_char = (function camel_snake_kebab$internals$string_separator$classify_char(c){
var G__24162 = c;
switch (G__24162) {
=======
var G__13803_13806 = camel_snake_kebab.internals.string_separator.split;
var G__13804_13807 = "string";
var G__13805_13808 = ((function (G__13803_13806,G__13804_13807){
return (function (this$,s){
return cljs.core.seq(s.split(this$));
});})(G__13803_13806,G__13804_13807))
;
goog.object.set(G__13803_13806,G__13804_13807,G__13805_13808);
camel_snake_kebab.internals.string_separator.classify_char = (function camel_snake_kebab$internals$string_separator$classify_char(c){
var G__13809 = c;
switch (G__13809) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
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
return cljs.core.cst$kw$number;

break;
case "-":
case "_":
case " ":
case "\t":
case "\n":
case "\u000B":
case "\f":
case "\r":
return cljs.core.cst$kw$whitespace;

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
return cljs.core.cst$kw$lower;

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
return cljs.core.cst$kw$upper;

break;
default:
return cljs.core.cst$kw$other;

}
});
camel_snake_kebab.internals.string_separator.generic_split = (function camel_snake_kebab$internals$string_separator$generic_split(ss){
var cs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.internals.string_separator.classify_char,ss);
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var start = (0);
var current = (0);
while(true){
var next = (current + (1));
var result_PLUS_new = ((function (result,start,current,next,cs){
return (function (end){
if((end > start)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,ss.substring(start,end));
} else {
return result;
}
});})(result,start,current,next,cs))
;
if((current >= cljs.core.count(ss))){
var or__8240__auto__ = cljs.core.seq(cljs.core.persistent_BANG_(result_PLUS_new(current)));
if(or__8240__auto__){
return or__8240__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,current),cljs.core.cst$kw$whitespace)){
<<<<<<< HEAD
var G__24167 = result_PLUS_new(current);
var G__24168 = next;
var G__24169 = next;
result = G__24167;
start = G__24168;
current = G__24169;
continue;
} else {
if((function (){var vec__24164 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cs,current);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24164,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24164,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24164,(2),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$upper))) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$number)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$number))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$lower)));
})()){
var G__24170 = result_PLUS_new(next);
var G__24171 = next;
var G__24172 = next;
result = G__24170;
start = G__24171;
current = G__24172;
continue;
} else {
var G__24173 = result;
var G__24174 = start;
var G__24175 = next;
result = G__24173;
start = G__24174;
current = G__24175;
=======
var G__13814 = result_PLUS_new(current);
var G__13815 = next;
var G__13816 = next;
result = G__13814;
start = G__13815;
current = G__13816;
continue;
} else {
if((function (){var vec__13811 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cs,current);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13811,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13811,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13811,(2),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$upper))) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$number)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$number))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$lower)));
})()){
var G__13817 = result_PLUS_new(next);
var G__13818 = next;
var G__13819 = next;
result = G__13817;
start = G__13818;
current = G__13819;
continue;
} else {
var G__13820 = result;
var G__13821 = start;
var G__13822 = next;
result = G__13820;
start = G__13821;
current = G__13822;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;

}
}
}
break;
}
});
camel_snake_kebab.internals.string_separator.generic_separator = (function (){
<<<<<<< HEAD
if(typeof camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176 !== 'undefined'){
=======
if(typeof camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823 !== 'undefined'){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {

/**
* @constructor
 * @implements {camel_snake_kebab.internals.string_separator.StringSeparator}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176 = (function (meta24177){
this.meta24177 = meta24177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24178,meta24177__$1){
var self__ = this;
var _24178__$1 = this;
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176(meta24177__$1));
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24178){
var self__ = this;
var _24178__$1 = this;
return self__.meta24177;
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (_,s){
=======
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823 = (function (meta13824){
this.meta13824 = meta13824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13825,meta13824__$1){
var self__ = this;
var _13825__$1 = this;
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823(meta13824__$1));
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13825){
var self__ = this;
var _13825__$1 = this;
return self__.meta13824;
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (_,s){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var self__ = this;
var ___$1 = this;
return camel_snake_kebab.internals.string_separator.generic_split(s);
});

<<<<<<< HEAD
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta24177], null);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176.cljs$lang$type = true;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176.cljs$lang$ctorStr = "camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator24176";

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176.cljs$lang$ctorPrWriter = (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator24176");
});

camel_snake_kebab.internals.string_separator.__GT_t_camel_snake_kebab$internals$string_separator24176 = (function camel_snake_kebab$internals$string_separator$__GT_t_camel_snake_kebab$internals$string_separator24176(meta24177){
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176(meta24177));
=======
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta13824], null);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823.cljs$lang$type = true;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823.cljs$lang$ctorStr = "camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator13823";

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823.cljs$lang$ctorPrWriter = (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator13823");
});

camel_snake_kebab.internals.string_separator.__GT_t_camel_snake_kebab$internals$string_separator13823 = (function camel_snake_kebab$internals$string_separator$__GT_t_camel_snake_kebab$internals$string_separator13823(meta13824){
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823(meta13824));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

}

<<<<<<< HEAD
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator24176(cljs.core.PersistentArrayMap.EMPTY));
=======
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator13823(cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})()
;
