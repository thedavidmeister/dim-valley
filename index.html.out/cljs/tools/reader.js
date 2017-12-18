// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader.impl.errors');
goog.require('goog.array');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');






cljs.tools.reader.macro_terminating_QMARK_ = (function cljs$tools$reader$macro_terminating_QMARK_(ch){
<<<<<<< HEAD
var G__18006 = ch;
switch (G__18006) {
=======
var G__19170 = ch;
switch (G__19170) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case "\"":
case ";":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
return true;

break;
default:
return false;

}
});
cljs.tools.reader.sb = (new goog.string.StringBuffer());
/**
 * Read in a single logical token from the reader
 */
cljs.tools.reader.read_token = (function cljs$tools$reader$read_token(rdr,kind,initch){
if((initch == null)){
return cljs.tools.reader.impl.errors.throw_eof_at_start(rdr,kind);
} else {
cljs.tools.reader.sb.clear();

var ch = initch;
while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)) || (cljs.tools.reader.macro_terminating_QMARK_(ch)) || ((ch == null))){
if((ch == null)){
} else {
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);
}

return cljs.tools.reader.sb.toString();
} else {
cljs.tools.reader.sb.append(ch);

<<<<<<< HEAD
var G__18008 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__18008;
=======
var G__19172 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__19172;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
break;
}
}
});
cljs.tools.reader.read_dispatch = (function cljs$tools$reader$read_dispatch(rdr,_,opts,pending_forms){
var temp__5288__auto__ = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5288__auto__)){
var ch = temp__5288__auto__;
var temp__5288__auto____$1 = (cljs.tools.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.dispatch_macros.call(null,ch));
if(cljs.core.truth_(temp__5288__auto____$1)){
var dm = temp__5288__auto____$1;
return (dm.cljs$core$IFn$_invoke$arity$4 ? dm.cljs$core$IFn$_invoke$arity$4(rdr,ch,opts,pending_forms) : dm.call(null,rdr,ch,opts,pending_forms));
} else {
<<<<<<< HEAD
var G__18009 = (function (){var G__18013 = rdr;
G__18013.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);

return G__18013;
})();
var G__18010 = ch;
var G__18011 = opts;
var G__18012 = pending_forms;
return (cljs.tools.reader.read_tagged.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.read_tagged.cljs$core$IFn$_invoke$arity$4(G__18009,G__18010,G__18011,G__18012) : cljs.tools.reader.read_tagged.call(null,G__18009,G__18010,G__18011,G__18012));
=======
var G__19173 = (function (){var G__19177 = rdr;
G__19177.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);

return G__19177;
})();
var G__19174 = ch;
var G__19175 = opts;
var G__19176 = pending_forms;
return (cljs.tools.reader.read_tagged.cljs$core$IFn$_invoke$arity$4 ? cljs.tools.reader.read_tagged.cljs$core$IFn$_invoke$arity$4(G__19173,G__19174,G__19175,G__19176) : cljs.tools.reader.read_tagged.call(null,G__19173,G__19174,G__19175,G__19176));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_at_dispatch(rdr);
}
});
cljs.tools.reader.read_unmatched_delimiter = (function cljs$tools$reader$read_unmatched_delimiter(rdr,ch,opts,pending_forms){
return cljs.tools.reader.impl.errors.throw_unmatch_delimiter(rdr,ch);
});
cljs.tools.reader.read_regex = (function cljs$tools$reader$read_regex(rdr,ch,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch__$1 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch__$1)){
return cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
if((ch__$1 == null)){
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$regex,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sb], 0));
} else {
sb.append(ch__$1);

if(("\\" === ch__$1)){
<<<<<<< HEAD
var ch_18014__$2 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_18014__$2 == null)){
=======
var ch_19178__$2 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_19178__$2 == null)){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$regex,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sb], 0));
} else {
}

<<<<<<< HEAD
sb.append(ch_18014__$2);
} else {
}

var G__18015 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch__$1 = G__18015;
=======
sb.append(ch_19178__$2);
} else {
}

var G__19179 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch__$1 = G__19179;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
}
break;
}
});
cljs.tools.reader.char_code = (function cljs$tools$reader$char_code(ch,base){
var code = parseInt(ch,base);
if(cljs.core.truth_(isNaN(code))){
return (-1);
} else {
return code;
}
});
cljs.tools.reader.read_unicode_char = (function cljs$tools$reader$read_unicode_char(var_args){
<<<<<<< HEAD
var G__18017 = arguments.length;
switch (G__18017) {
=======
var G__19181 = arguments.length;
switch (G__19181) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 4:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count(token) === l)){
} else {
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal(null,token);
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),base);
if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,i),token);
} else {
<<<<<<< HEAD
var G__18019 = (i + (1));
var G__18020 = (d + (uc * base));
i = G__18019;
uc = G__18020;
=======
var G__19183 = (i + (1));
var G__19184 = (d + (uc * base));
i = G__19183;
uc = G__19184;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
}
break;
}
});

cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code(initch,base);
while(true){
if((uc === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit(rdr,initch);
} else {
if(!((i === length))){
var ch = rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core.truth_((function (){var or__8240__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__8240__auto__){
return or__8240__auto__;
} else {
var or__8240__auto____$1 = (cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.macros.call(null,ch));
if(cljs.core.truth_(or__8240__auto____$1)){
return or__8240__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_len(rdr,i,length);
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code(ch,base);
rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit(rdr,ch);
} else {
<<<<<<< HEAD
var G__18021 = (i + (1));
var G__18022 = (d + (uc * base));
i = G__18021;
uc = G__18022;
=======
var G__19185 = (i + (1));
var G__19186 = (d + (uc * base));
i = G__19185;
uc = G__19186;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.read_unicode_char.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.upper_limit = "\uD7FF".charCodeAt((0));
cljs.tools.reader.lower_limit = "\uE000".charCodeAt((0));
cljs.tools.reader.valid_octal_QMARK_ = (function cljs$tools$reader$valid_octal_QMARK_(token,base){
return (parseInt(token,base) <= (255));
});
/**
 * Read in a character literal
 */
cljs.tools.reader.read_char_STAR_ = (function cljs$tools$reader$read_char_STAR_(rdr,backslash,opts,pending_forms){
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(!((ch == null))){
var token = (((cljs.tools.reader.macro_terminating_QMARK_(ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''):cljs.tools.reader.read_token(rdr,cljs.core.cst$kw$character,ch));
var token_len = token.length;
if(((1) === token_len)){
return token.charAt((0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"newline")){
return "\n";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"space")){
return " ";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"tab")){
return "\t";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"backspace")){
return "\b";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"formfeed")){
return "\f";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,(1),(4),(16));
var ic = c.charCodeAt((0));
if(((ic > cljs.tools.reader.upper_limit)) && ((ic < cljs.tools.reader.lower_limit))){
return cljs.tools.reader.impl.errors.throw_invalid_character_literal(rdr,c);
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.impl.errors.throw_invalid_octal_len(rdr,token);
} else {
var offset = (1);
var base = (8);
var uc = cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4(token,offset,len,base);
if(cljs.core.not(cljs.tools.reader.valid_octal_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,offset),base))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number(rdr);
} else {
return uc;
}
}
} else {
return cljs.tools.reader.impl.errors.throw_unsupported_character(rdr,token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character(rdr);
}
});
cljs.tools.reader.starting_line_col_info = (function cljs$tools$reader$starting_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rdr.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),((rdr.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null) - (1)) | (0))], null);
} else {
return null;
}
});
cljs.tools.reader.ending_line_col_info = (function cljs$tools$reader$ending_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rdr.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),rdr.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null)], null);
} else {
return null;
}
});
if(typeof cljs.tools.reader.READ_EOF !== 'undefined'){
} else {
cljs.tools.reader.READ_EOF = (new Object());
}
if(typeof cljs.tools.reader.READ_FINISHED !== 'undefined'){
} else {
cljs.tools.reader.READ_FINISHED = (new Object());
}
cljs.tools.reader._STAR_read_delim_STAR_ = false;
cljs.tools.reader.read_delimited_internal = (function cljs$tools$reader$read_delimited_internal(kind,delim,rdr,opts,pending_forms){
<<<<<<< HEAD
var vec__18023 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18023,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18023,(1),null);
=======
var vec__19187 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var delim__$1 = cljs.tools.reader.impl.utils.char$(delim);
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var form = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(rdr,false,cljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms));
if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.core.persistent_BANG_(a);
} else {
if((form === cljs.tools.reader.READ_EOF)){
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(rdr,kind,start_line,start_column,cljs.core.count(a));
} else {
<<<<<<< HEAD
var G__18026 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,form);
a = G__18026;
=======
var G__19190 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,form);
a = G__19190;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
}
break;
}
});
/**
 * Reads and returns a collection ended with delim
 */
cljs.tools.reader.read_delimited = (function cljs$tools$reader$read_delimited(kind,delim,rdr,opts,pending_forms){
<<<<<<< HEAD
var _STAR_read_delim_STAR_18027 = cljs.tools.reader._STAR_read_delim_STAR_;
cljs.tools.reader._STAR_read_delim_STAR_ = true;

try{return cljs.tools.reader.read_delimited_internal(kind,delim,rdr,opts,pending_forms);
}finally {cljs.tools.reader._STAR_read_delim_STAR_ = _STAR_read_delim_STAR_18027;
=======
var _STAR_read_delim_STAR_19191 = cljs.tools.reader._STAR_read_delim_STAR_;
cljs.tools.reader._STAR_read_delim_STAR_ = true;

try{return cljs.tools.reader.read_delimited_internal(kind,delim,rdr,opts,pending_forms);
}finally {cljs.tools.reader._STAR_read_delim_STAR_ = _STAR_read_delim_STAR_19191;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}});
/**
 * Read in a list, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_list = (function cljs$tools$reader$read_list(rdr,_,opts,pending_forms){
<<<<<<< HEAD
var vec__18028 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(1),null);
var the_list = cljs.tools.reader.read_delimited(cljs.core.cst$kw$list,")",rdr,opts,pending_forms);
var vec__18031 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18031,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18031,(1),null);
=======
var vec__19192 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19192,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19192,(1),null);
var the_list = cljs.tools.reader.read_delimited(cljs.core.cst$kw$list,")",rdr,opts,pending_forms);
var vec__19195 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19195,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19195,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return cljs.core.with_meta(((cljs.core.empty_QMARK_(the_list))?cljs.core.List.EMPTY:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,the_list)),(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5290__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__5290__auto__)){
var file = temp__5290__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
/**
 * Read in a vector, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_vector = (function cljs$tools$reader$read_vector(rdr,_,opts,pending_forms){
<<<<<<< HEAD
var vec__18034 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18034,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18034,(1),null);
var the_vector = cljs.tools.reader.read_delimited(cljs.core.cst$kw$vector,"]",rdr,opts,pending_forms);
var vec__18037 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18037,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18037,(1),null);
=======
var vec__19198 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19198,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19198,(1),null);
var the_vector = cljs.tools.reader.read_delimited(cljs.core.cst$kw$vector,"]",rdr,opts,pending_forms);
var vec__19201 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19201,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19201,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return cljs.core.with_meta(the_vector,(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5290__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__5290__auto__)){
var file = temp__5290__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
/**
 * Read in a map, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_map = (function cljs$tools$reader$read_map(rdr,_,opts,pending_forms){
<<<<<<< HEAD
var vec__18040 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18040,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18040,(1),null);
=======
var vec__19204 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19204,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19204,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var the_map = cljs.tools.reader.read_delimited(cljs.core.cst$kw$map,"}",rdr,opts,pending_forms);
var map_count = cljs.core.count(the_map);
var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),the_map);
var key_set = cljs.core.set(ks);
<<<<<<< HEAD
var vec__18043 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18043,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18043,(1),null);
=======
var vec__19207 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19207,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19207,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.odd_QMARK_(map_count)){
cljs.tools.reader.impl.errors.throw_odd_map(rdr,start_line,start_column,the_map);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(key_set),cljs.core.count(ks))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$map,ks);
}

return cljs.core.with_meta((((map_count <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))?cljs.core.PersistentArrayMap.fromArray(cljs.core.to_array(the_map),true,true):cljs.core.PersistentHashMap.fromArray(cljs.core.to_array(the_map),true)),(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5290__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__5290__auto__)){
var file = temp__5290__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
cljs.tools.reader.read_number = (function cljs$tools$reader$read_number(rdr,initch){
<<<<<<< HEAD
var sb = (function (){var G__18046 = (new goog.string.StringBuffer());
G__18046.append(initch);

return G__18046;
=======
var sb = (function (){var G__19210 = (new goog.string.StringBuffer());
G__19210.append(initch);

return G__19210;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(cljs.core.truth_((function (){var or__8240__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_(ch);
if(or__8240__auto__){
return or__8240__auto__;
} else {
var or__8240__auto____$1 = (cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.macros.cljs$core$IFn$_invoke$arity$1(ch) : cljs.tools.reader.macros.call(null,ch));
if(cljs.core.truth_(or__8240__auto____$1)){
return or__8240__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);

var or__8240__auto__ = cljs.tools.reader.impl.commons.match_number(s);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid_number(rdr,s);
}
} else {
<<<<<<< HEAD
var G__18048 = (function (){var G__18047 = sb;
G__18047.append(ch);

return G__18047;
})();
var G__18049 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__18048;
ch = G__18049;
=======
var G__19212 = (function (){var G__19211 = sb;
G__19211.append(ch);

return G__19211;
})();
var G__19213 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__19212;
ch = G__19213;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
break;
}
});
cljs.tools.reader.escape_char = (function cljs$tools$reader$escape_char(sb,rdr){
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
<<<<<<< HEAD
var G__18050 = ch;
switch (G__18050) {
=======
var G__19214 = ch;
switch (G__19214) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
<<<<<<< HEAD
if(((-1) === (function (){var G__18051 = (ch__$1 | (0));
var G__18052 = (16);
return parseInt(G__18051,G__18052);
=======
if(((-1) === (function (){var G__19215 = (ch__$1 | (0));
var G__19216 = (16);
return parseInt(G__19215,G__19216);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})())){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_escape(rdr,ch__$1);
} else {
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_(ch)){
var ch__$1 = cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5(rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number(rdr);
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_escape_char(rdr,ch);
}

}
});
cljs.tools.reader.read_string_STAR_ = (function cljs$tools$reader$read_string_STAR_(reader,_,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if((ch == null)){
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",sb], 0));
} else {
<<<<<<< HEAD
var G__18054 = ch;
switch (G__18054) {
case "\\":
var G__18058 = (function (){var G__18055 = sb;
G__18055.append(cljs.tools.reader.escape_char(sb,reader));

return G__18055;
})();
var G__18059 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__18058;
ch = G__18059;
=======
var G__19218 = ch;
switch (G__19218) {
case "\\":
var G__19222 = (function (){var G__19219 = sb;
G__19219.append(cljs.tools.reader.escape_char(sb,reader));

return G__19219;
})();
var G__19223 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__19222;
ch = G__19223;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;

break;
case "\"":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');

break;
default:
<<<<<<< HEAD
var G__18060 = (function (){var G__18056 = sb;
G__18056.append(ch);

return G__18056;
})();
var G__18061 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__18060;
ch = G__18061;
=======
var G__19224 = (function (){var G__19220 = sb;
G__19220.append(ch);

return G__19220;
})();
var G__19225 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__19224;
ch = G__19225;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;

}
}
break;
}
});
cljs.tools.reader.loc_info = (function cljs$tools$reader$loc_info(rdr,line,column){
if((line == null)){
return null;
} else {
var file = cljs.tools.reader.reader_types.get_file_name(rdr);
var filem = (((file == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null));
<<<<<<< HEAD
var vec__18062 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18062,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18062,(1),null);
=======
var vec__19226 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19226,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19226,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var lcm = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([filem,lcm], 0));
}
});
cljs.tools.reader.read_symbol = (function cljs$tools$reader$read_symbol(rdr,initch){
<<<<<<< HEAD
var vec__18065 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18065,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18065,(1),null);
=======
var vec__19229 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19229,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19229,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var token = cljs.tools.reader.read_token(rdr,cljs.core.cst$kw$symbol,initch);
if((token == null)){
return null;
} else {
<<<<<<< HEAD
var G__18068 = token;
switch (G__18068) {
=======
var G__19232 = token;
switch (G__19232) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return cljs.core.cst$sym$_SLASH_;

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var p = cljs.tools.reader.impl.commons.parse_symbol(token);
if(!((p == null))){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(p.cljs$core$IIndexed$_nth$arity$2(null,(0)),p.cljs$core$IIndexed$_nth$arity$2(null,(1)));
return sym.cljs$core$IWithMeta$_with_meta$arity$2(null,cljs.tools.reader.loc_info(rdr,line,column));
} else {
return cljs.tools.reader.impl.errors.throw_invalid(rdr,cljs.core.cst$kw$symbol,token);
}

}
}
});
/**
 * Map from ns alias to ns, if non-nil, it will be used to resolve read-time
 * ns aliases.
 * 
 * Defaults to nil
 */
cljs.tools.reader._STAR_alias_map_STAR_ = null;
cljs.tools.reader.resolve_ns = (function cljs$tools$reader$resolve_ns(sym){
var or__8240__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader._STAR_alias_map_STAR_,sym);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var temp__5290__auto__ = cljs.core.find_ns(sym);
if(cljs.core.truth_(temp__5290__auto__)){
var ns = temp__5290__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(ns));
} else {
return null;
}
}
});
cljs.tools.reader.read_keyword = (function cljs$tools$reader$read_keyword(reader,initch,opts,pending_forms){
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch))){
var token = cljs.tools.reader.read_token(reader,cljs.core.cst$kw$keyword,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol(token);
if(!((s == null))){
var ns = s.cljs$core$IIndexed$_nth$arity$2(null,(0));
var name = s.cljs$core$IIndexed$_nth$arity$2(null,(1));
if((":" === token.charAt((0)))){
if(!((ns == null))){
var temp__5288__auto__ = cljs.tools.reader.resolve_ns(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ns,(1))));
if(cljs.core.truth_(temp__5288__auto__)){
var ns__$1 = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),name);
} else {
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''));
}
} else {
var temp__5288__auto__ = cljs.core._STAR_ns_STAR_;
if(cljs.core.truth_(temp__5288__auto__)){
var ns__$1 = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)));
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid token: :",token], 0));
}
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}
} else {
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''));
}
} else {
return cljs.tools.reader.impl.errors.throw_single_colon(reader);
}
});
/**
 * Returns a function which wraps a reader in a call to sym
 */
cljs.tools.reader.wrapping_reader = (function cljs$tools$reader$wrapping_reader(sym){
return (function (rdr,_,opts,pending_forms){
var x__9194__auto__ = sym;
return cljs.core._conj((function (){var x__9194__auto____$1 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
});
});
/**
 * Read metadata and return the following object with the metadata applied
 */
cljs.tools.reader.read_meta = (function cljs$tools$reader$read_meta(rdr,_,opts,pending_forms){
if((cljs.tools.reader.reader_types.source_logging_reader_QMARK_(rdr)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_(cljs.tools.reader.reader_types.peek_char(rdr))))){
return cljs.tools.reader.reader_types.log_source_STAR_(rdr,(function (){
<<<<<<< HEAD
var vec__18070 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(1),null);
=======
var vec__19234 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var m = cljs.tools.reader.impl.utils.desugar_meta((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.tools.reader.impl.errors.throw_bad_metadata(rdr,m);
}

var o = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__8228__auto__ = line;
if(cljs.core.truth_(and__8228__auto__)){
return cljs.core.seq_QMARK_(o);
} else {
return and__8228__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$line,line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$column,column], 0)):m);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$)))?true:false):false)){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(o),m__$1], 0)));
} else {
return cljs.core.reset_meta_BANG_(o,m__$1);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_metadata_target(rdr,o);
}
}));
} else {
<<<<<<< HEAD
var vec__18075 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18075,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18075,(1),null);
=======
var vec__19239 = cljs.tools.reader.starting_line_col_info(rdr);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19239,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19239,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var m = cljs.tools.reader.impl.utils.desugar_meta((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
if(cljs.core.map_QMARK_(m)){
} else {
cljs.tools.reader.impl.errors.throw_bad_metadata(rdr,m);
}

var o = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__8228__auto__ = line;
if(cljs.core.truth_(and__8228__auto__)){
return cljs.core.seq_QMARK_(o);
} else {
return and__8228__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$line,line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$column,column], 0)):m);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$)))?true:false):false)){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(o),m__$1], 0)));
} else {
return cljs.core.reset_meta_BANG_(o,m__$1);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_metadata_target(rdr,o);
}
}
});
cljs.tools.reader.read_set = (function cljs$tools$reader$read_set(rdr,_,opts,pending_forms){
<<<<<<< HEAD
var vec__18080 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18080,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18080,(1),null);
var start_column__$1 = (cljs.core.truth_(start_column)?((start_column - (1)) | (0)):null);
var coll = cljs.tools.reader.read_delimited(cljs.core.cst$kw$set,"}",rdr,opts,pending_forms);
var the_set = cljs.core.set(coll);
var vec__18083 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18083,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18083,(1),null);
=======
var vec__19244 = cljs.tools.reader.starting_line_col_info(rdr);
var start_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19244,(0),null);
var start_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19244,(1),null);
var start_column__$1 = (cljs.core.truth_(start_column)?((start_column - (1)) | (0)):null);
var coll = cljs.tools.reader.read_delimited(cljs.core.cst$kw$set,"}",rdr,opts,pending_forms);
var the_set = cljs.core.set(coll);
var vec__19247 = cljs.tools.reader.ending_line_col_info(rdr);
var end_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19247,(0),null);
var end_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19247,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$set,coll)], 0));
}

return cljs.core.with_meta(the_set,(cljs.core.truth_(start_line)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5290__auto__ = cljs.tools.reader.reader_types.get_file_name(rdr);
if(cljs.core.truth_(temp__5290__auto__)){
var file = temp__5290__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$file,file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,start_line,cljs.core.cst$kw$column,start_column__$1,cljs.core.cst$kw$end_DASH_line,end_line,cljs.core.cst$kw$end_DASH_column,end_column], null)], 0)):null));
});
/**
 * Read and discard the first object from rdr
 */
cljs.tools.reader.read_discard = (function cljs$tools$reader$read_discard(rdr,_,opts,pending_forms){
<<<<<<< HEAD
var G__18086 = rdr;
(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(G__18086,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,G__18086,true,null,opts,pending_forms));

return G__18086;
=======
var G__19250 = rdr;
(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(G__19250,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,G__19250,true,null,opts,pending_forms));

return G__19250;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
cljs.tools.reader.RESERVED_FEATURES = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$none,null], null), null);
cljs.tools.reader.has_feature_QMARK_ = (function cljs$tools$reader$has_feature_QMARK_(rdr,feature,opts){
if((feature instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,feature)) || (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$features),feature));
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature should be a keyword: ",feature], 0));
}
});
cljs.tools.reader.check_eof_error = (function cljs$tools$reader$check_eof_error(form,rdr,first_line){
if((form === cljs.tools.reader.READ_EOF)){
return cljs.tools.reader.impl.errors.throw_eof_error(rdr,(function (){var and__8228__auto__ = (first_line < (0));
if(and__8228__auto__){
return first_line;
} else {
return and__8228__auto__;
}
})());
} else {
return null;
}
});
cljs.tools.reader.check_reserved_features = (function cljs$tools$reader$check_reserved_features(rdr,form){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.RESERVED_FEATURES,form))){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature name ",form," is reserved"], 0));
} else {
return null;
}
});
cljs.tools.reader.check_invalid_read_cond = (function cljs$tools$reader$check_invalid_read_cond(form,rdr,first_line){
if((form === cljs.tools.reader.READ_FINISHED)){
if((first_line < (0))){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["read-cond requires an even number of forms"], 0));
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["read-cond starting on line ",first_line," requires an even number of forms"], 0));
}
} else {
return null;
}
});
/**
 * Read next form and suppress. Return nil or READ_FINISHED.
 */
cljs.tools.reader.read_suppress = (function cljs$tools$reader$read_suppress(first_line,rdr,opts,pending_forms){
<<<<<<< HEAD
var _STAR_suppress_read_STAR_18087 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = true;

try{var form = (function (){var G__18088 = rdr;
var G__18089 = false;
var G__18090 = cljs.tools.reader.READ_EOF;
var G__18091 = ")";
var G__18092 = opts;
var G__18093 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__18088,G__18089,G__18090,G__18091,G__18092,G__18093) : cljs.tools.reader.read_STAR_.call(null,G__18088,G__18089,G__18090,G__18091,G__18092,G__18093));
=======
var _STAR_suppress_read_STAR_19251 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = true;

try{var form = (function (){var G__19252 = rdr;
var G__19253 = false;
var G__19254 = cljs.tools.reader.READ_EOF;
var G__19255 = ")";
var G__19256 = opts;
var G__19257 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__19252,G__19253,G__19254,G__19255,G__19256,G__19257) : cljs.tools.reader.read_STAR_.call(null,G__19252,G__19253,G__19254,G__19255,G__19256,G__19257));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
cljs.tools.reader.check_eof_error(form,rdr,first_line);

if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
return null;
}
<<<<<<< HEAD
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_18087;
=======
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_19251;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}});
if(typeof cljs.tools.reader.NO_MATCH !== 'undefined'){
} else {
cljs.tools.reader.NO_MATCH = (new Object());
}
/**
 * Read next feature. If matched, read next form and return.
 * Otherwise, read and skip next form, returning READ_FINISHED or nil.
 */
cljs.tools.reader.match_feature = (function cljs$tools$reader$match_feature(first_line,rdr,opts,pending_forms){
<<<<<<< HEAD
var feature = (function (){var G__18094 = rdr;
var G__18095 = false;
var G__18096 = cljs.tools.reader.READ_EOF;
var G__18097 = ")";
var G__18098 = opts;
var G__18099 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__18094,G__18095,G__18096,G__18097,G__18098,G__18099) : cljs.tools.reader.read_STAR_.call(null,G__18094,G__18095,G__18096,G__18097,G__18098,G__18099));
=======
var feature = (function (){var G__19258 = rdr;
var G__19259 = false;
var G__19260 = cljs.tools.reader.READ_EOF;
var G__19261 = ")";
var G__19262 = opts;
var G__19263 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__19258,G__19259,G__19260,G__19261,G__19262,G__19263) : cljs.tools.reader.read_STAR_.call(null,G__19258,G__19259,G__19260,G__19261,G__19262,G__19263));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
cljs.tools.reader.check_eof_error(feature,rdr,first_line);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feature,cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
cljs.tools.reader.check_reserved_features(rdr,feature);

if(cljs.core.truth_(cljs.tools.reader.has_feature_QMARK_(rdr,feature,opts))){
<<<<<<< HEAD
var G__18100 = (function (){var G__18101 = rdr;
var G__18102 = false;
var G__18103 = cljs.tools.reader.READ_EOF;
var G__18104 = ")";
var G__18105 = opts;
var G__18106 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__18101,G__18102,G__18103,G__18104,G__18105,G__18106) : cljs.tools.reader.read_STAR_.call(null,G__18101,G__18102,G__18103,G__18104,G__18105,G__18106));
})();
cljs.tools.reader.check_eof_error(G__18100,rdr,first_line);

cljs.tools.reader.check_invalid_read_cond(G__18100,rdr,first_line);

return G__18100;
=======
var G__19264 = (function (){var G__19265 = rdr;
var G__19266 = false;
var G__19267 = cljs.tools.reader.READ_EOF;
var G__19268 = ")";
var G__19269 = opts;
var G__19270 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(G__19265,G__19266,G__19267,G__19268,G__19269,G__19270) : cljs.tools.reader.read_STAR_.call(null,G__19265,G__19266,G__19267,G__19268,G__19269,G__19270));
})();
cljs.tools.reader.check_eof_error(G__19264,rdr,first_line);

cljs.tools.reader.check_invalid_read_cond(G__19264,rdr,first_line);

return G__19264;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
var or__8240__auto__ = cljs.tools.reader.read_suppress(first_line,rdr,opts,pending_forms);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.tools.reader.NO_MATCH;
}
}
}
});
cljs.tools.reader.read_cond_delimited = (function cljs$tools$reader$read_cond_delimited(rdr,splicing,opts,pending_forms){
var first_line = (cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))?cljs.tools.reader.reader_types.get_line_number(rdr):(-1));
var result = (function (){var matched = cljs.tools.reader.NO_MATCH;
var finished = null;
while(true){
if((matched === cljs.tools.reader.NO_MATCH)){
var match = cljs.tools.reader.match_feature(first_line,rdr,opts,pending_forms);
if((match === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
<<<<<<< HEAD
var G__18111 = match;
var G__18112 = null;
matched = G__18111;
finished = G__18112;
=======
var G__19275 = match;
var G__19276 = null;
matched = G__19275;
finished = G__19276;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
if(!((finished === cljs.tools.reader.READ_FINISHED))){
<<<<<<< HEAD
var G__18113 = matched;
var G__18114 = cljs.tools.reader.read_suppress(first_line,rdr,opts,pending_forms);
matched = G__18113;
finished = G__18114;
=======
var G__19277 = matched;
var G__19278 = cljs.tools.reader.read_suppress(first_line,rdr,opts,pending_forms);
matched = G__19277;
finished = G__19278;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return matched;

}
}
break;
}
})();
if((result === cljs.tools.reader.READ_FINISHED)){
return rdr;
} else {
if(cljs.core.truth_(splicing)){
if(((!((result == null)))?((((result.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === result.cljs$core$ISequential$)))?true:false):false)){
<<<<<<< HEAD
var G__18108_18115 = pending_forms;
var G__18109_18116 = cljs.core.to_array(result);
var G__18110_18117 = (0);
goog.array.insertArrayAt(G__18108_18115,G__18109_18116,G__18110_18117);
=======
var G__19272_19279 = pending_forms;
var G__19273_19280 = cljs.core.to_array(result);
var G__19274_19281 = (0);
goog.array.insertArrayAt(G__19272_19279,G__19273_19280,G__19274_19281);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

return rdr;
} else {
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spliced form list in read-cond-splicing must implement ISequential"], 0));
}
} else {
return result;
}
}
});
cljs.tools.reader.read_cond = (function cljs$tools$reader$read_cond(rdr,_,opts,pending_forms){
<<<<<<< HEAD
if(cljs.core.not((function (){var and__8228__auto__ = opts;
if(cljs.core.truth_(and__8228__auto__)){
var G__18119 = cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(opts);
var fexpr__18118 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preserve,null,cljs.core.cst$kw$allow,null], null), null);
return (fexpr__18118.cljs$core$IFn$_invoke$arity$1 ? fexpr__18118.cljs$core$IFn$_invoke$arity$1(G__18119) : fexpr__18118.call(null,G__18119));
=======
if(cljs.core.not((function (){var and__8230__auto__ = opts;
if(cljs.core.truth_(and__8230__auto__)){
var G__19283 = cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(opts);
var fexpr__19282 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preserve,null,cljs.core.cst$kw$allow,null], null), null);
return (fexpr__19282.cljs$core$IFn$_invoke$arity$1 ? fexpr__19282.cljs$core$IFn$_invoke$arity$1(G__19283) : fexpr__19282.call(null,G__19283));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return and__8228__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Conditional read not allowed",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$runtime_DASH_exception], null));
} else {
}

var temp__5288__auto__ = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5288__auto__)){
var ch = temp__5288__auto__;
var splicing = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"@");
var ch__$1 = ((splicing)?rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null):ch);
if(splicing){
if(cljs.tools.reader._STAR_read_delim_STAR_){
} else {
cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cond-splice not in list"], 0));
}
} else {
}

var temp__5288__auto____$1 = ((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch__$1))?cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr):ch__$1);
if(cljs.core.truth_(temp__5288__auto____$1)){
var ch__$2 = temp__5288__auto____$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ch__$2,"(")){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("read-cond body must be a list",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$runtime_DASH_exception], null));
} else {
<<<<<<< HEAD
var _STAR_suppress_read_STAR_18120 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = (function (){var or__8240__auto__ = cljs.tools.reader._STAR_suppress_read_STAR_;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
var _STAR_suppress_read_STAR_19284 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = (function (){var or__8242__auto__ = cljs.tools.reader._STAR_suppress_read_STAR_;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$preserve,cljs.core.cst$kw$read_DASH_cond.cljs$core$IFn$_invoke$arity$1(opts));
}
})();

try{if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.tools.reader.impl.utils.reader_conditional(cljs.tools.reader.read_list(rdr,ch__$2,opts,pending_forms),splicing);
} else {
return cljs.tools.reader.read_cond_delimited(rdr,splicing,opts,pending_forms);
}
<<<<<<< HEAD
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_18120;
=======
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_19284;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character(rdr);
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character(rdr);
}
});
cljs.tools.reader.arg_env = null;
/**
 * Get a symbol for an anonymous ?argument?
 */
cljs.tools.reader.garg = (function cljs$tools$reader$garg(n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((-1) === n))?"rest":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''))),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.utils.next_id()),"#"].join(''));
});
cljs.tools.reader.read_fn = (function cljs$tools$reader$read_fn(rdr,_,opts,pending_forms){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Nested #()s are not allowed",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
}

<<<<<<< HEAD
var arg_env18121 = cljs.tools.reader.arg_env;
cljs.tools.reader.arg_env = cljs.core.sorted_map();

try{var form = (function (){var G__18122 = (function (){var G__18127 = rdr;
cljs.tools.reader.reader_types.unread(G__18127,"(");

return G__18127;
})();
var G__18123 = true;
var G__18124 = null;
var G__18125 = opts;
var G__18126 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(G__18122,G__18123,G__18124,G__18125,G__18126) : cljs.tools.reader.read_STAR_.call(null,G__18122,G__18123,G__18124,G__18125,G__18126));
=======
var arg_env19285 = cljs.tools.reader.arg_env;
cljs.tools.reader.arg_env = cljs.core.sorted_map();

try{var form = (function (){var G__19286 = (function (){var G__19291 = rdr;
cljs.tools.reader.reader_types.unread(G__19291,"(");

return G__19291;
})();
var G__19287 = true;
var G__19288 = null;
var G__19289 = opts;
var G__19290 = pending_forms;
return (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(G__19286,G__19287,G__19288,G__19289,G__19290) : cljs.tools.reader.read_STAR_.call(null,G__19286,G__19287,G__19288,G__19289,G__19290));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
var rargs = cljs.core.rseq(cljs.tools.reader.arg_env);
var args = ((rargs)?(function (){var higharg = cljs.core.key(cljs.core.first(rargs));
var args = (function (){var i = (1);
var args = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if((i > higharg)){
return cljs.core.persistent_BANG_(args);
} else {
<<<<<<< HEAD
var G__18128 = (i + (1));
var G__18129 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(args,(function (){var or__8240__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.arg_env,i);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
var G__19292 = (i + (1));
var G__19293 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(args,(function (){var or__8242__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.arg_env,i);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.tools.reader.garg(i);
}
})());
<<<<<<< HEAD
i = G__18128;
args = G__18129;
=======
i = G__19292;
args = G__19293;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
break;
}
})();
var args__$1 = (cljs.core.truth_((cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1((-1)) : cljs.tools.reader.arg_env.call(null,(-1))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.cst$sym$_AMPERSAND_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1((-1)) : cljs.tools.reader.arg_env.call(null,(-1)))], 0)):args);
return args__$1;
})():cljs.core.PersistentVector.EMPTY);
return cljs.core._conj((function (){var x__9194__auto__ = args;
return cljs.core._conj((function (){var x__9194__auto____$1 = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})(),cljs.core.cst$sym$fn_STAR_);
<<<<<<< HEAD
}finally {cljs.tools.reader.arg_env = arg_env18121;
=======
}finally {cljs.tools.reader.arg_env = arg_env19285;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}});
/**
 * Registers an argument to the arg-env
 */
cljs.tools.reader.register_arg = (function cljs$tools$reader$register_arg(n){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
var temp__5288__auto__ = (cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.arg_env.cljs$core$IFn$_invoke$arity$1(n) : cljs.tools.reader.arg_env.call(null,n));
if(cljs.core.truth_(temp__5288__auto__)){
var ret = temp__5288__auto__;
return ret;
} else {
var g = cljs.tools.reader.garg(n);
cljs.tools.reader.arg_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.tools.reader.arg_env,n,g);

return g;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Arg literal not in #()",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
}
});
cljs.tools.reader.read_arg = (function cljs$tools$reader$read_arg(rdr,pct,opts,pending_forms){
if((cljs.tools.reader.arg_env == null)){
return cljs.tools.reader.read_symbol(rdr,pct);
} else {
var ch = rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if((cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)) || (cljs.tools.reader.macro_terminating_QMARK_(ch)) || ((ch == null))){
return cljs.tools.reader.register_arg((1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"&")){
rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return cljs.tools.reader.register_arg((-1));
} else {
var n = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(!(cljs.core.integer_QMARK_(n))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Arg literal must be %, %& or %integer",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
return cljs.tools.reader.register_arg(n);
}

}
}
}
});
cljs.tools.reader.gensym_env = null;
cljs.tools.reader.read_unquote = (function cljs$tools$reader$read_unquote(rdr,comma,opts,pending_forms){
var temp__5288__auto__ = rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core.truth_(temp__5288__auto__)){
var ch = temp__5288__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",ch)){
<<<<<<< HEAD
var G__18131 = (function (){var G__18135 = rdr;
G__18135.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return G__18135;
})();
var G__18132 = "@";
var G__18133 = opts;
var G__18134 = pending_forms;
var fexpr__18130 = cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing);
return (fexpr__18130.cljs$core$IFn$_invoke$arity$4 ? fexpr__18130.cljs$core$IFn$_invoke$arity$4(G__18131,G__18132,G__18133,G__18134) : fexpr__18130.call(null,G__18131,G__18132,G__18133,G__18134));
} else {
var G__18137 = rdr;
var G__18138 = "~";
var G__18139 = opts;
var G__18140 = pending_forms;
var fexpr__18136 = cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_unquote);
return (fexpr__18136.cljs$core$IFn$_invoke$arity$4 ? fexpr__18136.cljs$core$IFn$_invoke$arity$4(G__18137,G__18138,G__18139,G__18140) : fexpr__18136.call(null,G__18137,G__18138,G__18139,G__18140));
=======
var G__19295 = (function (){var G__19299 = rdr;
G__19299.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return G__19299;
})();
var G__19296 = "@";
var G__19297 = opts;
var G__19298 = pending_forms;
var fexpr__19294 = cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing);
return (fexpr__19294.cljs$core$IFn$_invoke$arity$4 ? fexpr__19294.cljs$core$IFn$_invoke$arity$4(G__19295,G__19296,G__19297,G__19298) : fexpr__19294.call(null,G__19295,G__19296,G__19297,G__19298));
} else {
var G__19301 = rdr;
var G__19302 = "~";
var G__19303 = opts;
var G__19304 = pending_forms;
var fexpr__19300 = cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_unquote);
return (fexpr__19300.cljs$core$IFn$_invoke$arity$4 ? fexpr__19300.cljs$core$IFn$_invoke$arity$4(G__19301,G__19302,G__19303,G__19304) : fexpr__19300.call(null,G__19301,G__19302,G__19303,G__19304));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
} else {
return null;
}
});
cljs.tools.reader.unquote_splicing_QMARK_ = (function cljs$tools$reader$unquote_splicing_QMARK_(form){
return (cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$clojure$core_SLASH_unquote_DASH_splicing));
});
cljs.tools.reader.unquote_QMARK_ = (function cljs$tools$reader$unquote_QMARK_(form){
return (cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$clojure$core_SLASH_unquote));
});
/**
 * Expand a list by resolving its syntax quotes and unquotes
 */
cljs.tools.reader.expand_list = (function cljs$tools$reader$expand_list(s){
var s__$1 = cljs.core.seq(s);
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s__$1){
var item = cljs.core.first(s__$1);
var ret = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(cljs.tools.reader.unquote_QMARK_(item))?cljs.core._conj((function (){var x__9194__auto__ = cljs.core.second(item);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$clojure$core_SLASH_list):(cljs.core.truth_(cljs.tools.reader.unquote_splicing_QMARK_(item))?cljs.core.second(item):cljs.core._conj((function (){var x__9194__auto__ = (cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1(item) : cljs.tools.reader.syntax_quote_STAR_.call(null,item));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$clojure$core_SLASH_list)
)));
<<<<<<< HEAD
var G__18141 = cljs.core.next(s__$1);
var G__18142 = ret;
s__$1 = G__18141;
r = G__18142;
=======
var G__19305 = cljs.core.next(s__$1);
var G__19306 = ret;
s__$1 = G__19305;
r = G__19306;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(r));
}
break;
}
});
/**
 * Flatten a map into a seq of alternate keys and values
 */
cljs.tools.reader.flatten_map = (function cljs$tools$reader$flatten_map(form){
var s = cljs.core.seq(form);
var key_vals = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(s){
var e = cljs.core.first(s);
<<<<<<< HEAD
var G__18143 = cljs.core.next(s);
var G__18144 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(key_vals,cljs.core.key(e)),cljs.core.val(e));
s = G__18143;
key_vals = G__18144;
=======
var G__19307 = cljs.core.next(s);
var G__19308 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(key_vals,cljs.core.key(e)),cljs.core.val(e));
s = G__19307;
key_vals = G__19308;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return cljs.core.seq(cljs.core.persistent_BANG_(key_vals));
}
break;
}
});
cljs.tools.reader.register_gensym = (function cljs$tools$reader$register_gensym(sym){
if(cljs.core.not(cljs.tools.reader.gensym_env)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Gensym literal not in syntax-quote",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null));
} else {
}

var or__8240__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.gensym_env,sym);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
var gs = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(sym),(0),(cljs.core.count(cljs.core.name(sym)) - (1)))),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.utils.next_id()),"__auto__"].join(''));
cljs.tools.reader.gensym_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.tools.reader.gensym_env,sym,gs);

return gs;
}
});
cljs.tools.reader.add_meta = (function cljs$tools$reader$add_meta(form,ret){
if((function (){var and__8228__auto__ = ((!((form == null)))?((((form.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IWithMeta$)))?true:false):false);
if(and__8228__auto__){
return cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(form),cljs.core.cst$kw$line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$file,cljs.core.cst$kw$source], 0)));
} else {
return and__8228__auto__;
}
})()){
<<<<<<< HEAD
return cljs.core._conj((function (){var x__9194__auto__ = ret;
return cljs.core._conj((function (){var x__9194__auto____$1 = (function (){var G__18148 = cljs.core.meta(form);
return (cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1(G__18148) : cljs.tools.reader.syntax_quote_STAR_.call(null,G__18148));
=======
return cljs.core._conj((function (){var x__9196__auto__ = ret;
return cljs.core._conj((function (){var x__9196__auto____$1 = (function (){var G__19312 = cljs.core.meta(form);
return (cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.syntax_quote_STAR_.cljs$core$IFn$_invoke$arity$1(G__19312) : cljs.tools.reader.syntax_quote_STAR_.call(null,G__19312));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta);
} else {
return ret;
}
});
cljs.tools.reader.syntax_quote_coll = (function cljs$tools$reader$syntax_quote_coll(type,coll){
var res = cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_concat,cljs.tools.reader.expand_list(coll));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_sequence);
if(cljs.core.truth_(type)){
return cljs.core._conj((function (){var x__9194__auto__ = type;
return cljs.core._conj((function (){var x__9194__auto____$1 = res;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_apply);
} else {
return res;
}
});
/**
 * Decide which map type to use, array-map if less than 16 elements
 */
cljs.tools.reader.map_func = (function cljs$tools$reader$map_func(coll){
if((cljs.core.count(coll) >= (16))){
return cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_array_DASH_map;
}
});
cljs.tools.reader.bool_QMARK_ = (function cljs$tools$reader$bool_QMARK_(x){
return ((x instanceof Boolean)) || (x === true) || (x === false);
});
/**
 * Resolve a symbol s into its fully qualified namespace version
 */
cljs.tools.reader.resolve_symbol = (function cljs$tools$reader$resolve_symbol(s){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("resolve-symbol is not implemented",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,s], null));
});
cljs.tools.reader.syntax_quote_STAR_ = (function cljs$tools$reader$syntax_quote_STAR_(form){
<<<<<<< HEAD
return cljs.tools.reader.add_meta(form,((cljs.core.special_symbol_QMARK_(form))?cljs.core._conj((function (){var x__9194__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$quote):(((form instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__9194__auto__ = (cljs.core.truth_((function (){var and__8228__auto__ = cljs.core.not(cljs.core.namespace(form));
if(and__8228__auto__){
var G__18155 = cljs.core.name(form);
var G__18156 = "#";
return goog.string.endsWith(G__18155,G__18156);
=======
return cljs.tools.reader.add_meta(form,((cljs.core.special_symbol_QMARK_(form))?cljs.core._conj((function (){var x__9196__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$quote):(((form instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__9196__auto__ = (cljs.core.truth_((function (){var and__8230__auto__ = cljs.core.not(cljs.core.namespace(form));
if(and__8230__auto__){
var G__19319 = cljs.core.name(form);
var G__19320 = "#";
return goog.string.endsWith(G__19319,G__19320);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return and__8228__auto__;
}
})())?cljs.tools.reader.register_gensym(form):(function (){var sym = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');
if(cljs.core.truth_(goog.string.endsWith(sym,"."))){
var csym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym,(0),(cljs.core.count(sym) - (1))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1(csym) : cljs.tools.reader.resolve_symbol.call(null,csym))),"."].join(''));
} else {
return (cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.resolve_symbol.cljs$core$IFn$_invoke$arity$1(form) : cljs.tools.reader.resolve_symbol.call(null,form));
}
})());
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$quote):(cljs.core.truth_(cljs.tools.reader.unquote_QMARK_(form))?cljs.core.second(form):(cljs.core.truth_(cljs.tools.reader.unquote_splicing_QMARK_(form))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unquote-splice not in list",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$illegal_DASH_state], null))})():((cljs.core.coll_QMARK_(form))?((((!((form == null)))?((((form.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IRecord$)))?true:false):false))?form:((cljs.core.map_QMARK_(form))?cljs.tools.reader.syntax_quote_coll(cljs.tools.reader.map_func(form),cljs.tools.reader.flatten_map(form)):((cljs.core.vector_QMARK_(form))?cljs.core._conj((function (){var x__9194__auto__ = cljs.tools.reader.syntax_quote_coll(null,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_vec):((cljs.core.set_QMARK_(form))?cljs.tools.reader.syntax_quote_coll(cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_set,form):(((cljs.core.seq_QMARK_(form)) || (cljs.core.list_QMARK_(form)))?(function (){var seq = cljs.core.seq(form);
if(seq){
return cljs.tools.reader.syntax_quote_coll(null,seq);
} else {
return cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_list);
}
})():(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown Collection type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_operation], null))})()
))))):(cljs.core.truth_((function (){var or__8240__auto__ = (form instanceof cljs.core.Keyword);
if(or__8240__auto__){
return or__8240__auto__;
} else {
var or__8240__auto____$1 = typeof form === 'number';
if(or__8240__auto____$1){
return or__8240__auto____$1;
} else {
var or__8240__auto____$2 = typeof form === 'string';
if(or__8240__auto____$2){
return or__8240__auto____$2;
} else {
var or__8240__auto____$3 = (form == null);
if(or__8240__auto____$3){
return or__8240__auto____$3;
} else {
var or__8240__auto____$4 = cljs.tools.reader.bool_QMARK_(form);
if(cljs.core.truth_(or__8240__auto____$4)){
return or__8240__auto____$4;
} else {
return (form instanceof RegExp);
}
}
}
}
}
})())?form:cljs.core._conj((function (){var x__9194__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$quote)
)))))));
});
cljs.tools.reader.read_syntax_quote = (function cljs$tools$reader$read_syntax_quote(rdr,backquote,opts,pending_forms){
<<<<<<< HEAD
var gensym_env18158 = cljs.tools.reader.gensym_env;
cljs.tools.reader.gensym_env = cljs.core.PersistentArrayMap.EMPTY;

try{return cljs.tools.reader.syntax_quote_STAR_((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
}finally {cljs.tools.reader.gensym_env = gensym_env18158;
}});
cljs.tools.reader.read_namespaced_map = (function cljs$tools$reader$read_namespaced_map(rdr,_,opts,pending_forms){
var token = cljs.tools.reader.read_token(rdr,cljs.core.cst$kw$namespaced_DASH_map,cljs.tools.reader.reader_types.read_char(rdr));
var temp__5288__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,":"))?cljs.core.ns_name(cljs.core._STAR_ns_STAR_):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(token)))?(function (){var G__18159 = token;
var G__18159__$1 = (((G__18159 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__18159,(1)));
var G__18159__$2 = (((G__18159__$1 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__18159__$1));
var G__18159__$3 = (((G__18159__$2 == null))?null:cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__18159__$2));
var G__18159__$4 = (((G__18159__$3 == null))?null:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__18159__$3));
if((G__18159__$4 == null)){
return null;
} else {
return cljs.tools.reader.resolve_ns(G__18159__$4);
}
})():(function (){var G__18160 = token;
var G__18160__$1 = (((G__18160 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__18160));
if((G__18160__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__18160__$1);
=======
var gensym_env19322 = cljs.tools.reader.gensym_env;
cljs.tools.reader.gensym_env = cljs.core.PersistentArrayMap.EMPTY;

try{return cljs.tools.reader.syntax_quote_STAR_((cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
}finally {cljs.tools.reader.gensym_env = gensym_env19322;
}});
cljs.tools.reader.read_namespaced_map = (function cljs$tools$reader$read_namespaced_map(rdr,_,opts,pending_forms){
var token = cljs.tools.reader.read_token(rdr,cljs.core.cst$kw$namespaced_DASH_map,cljs.tools.reader.reader_types.read_char(rdr));
var temp__5288__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,":"))?cljs.core.ns_name(cljs.core._STAR_ns_STAR_):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(token)))?(function (){var G__19323 = token;
var G__19323__$1 = (((G__19323 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__19323,(1)));
var G__19323__$2 = (((G__19323__$1 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__19323__$1));
var G__19323__$3 = (((G__19323__$2 == null))?null:cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__19323__$2));
var G__19323__$4 = (((G__19323__$3 == null))?null:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__19323__$3));
if((G__19323__$4 == null)){
return null;
} else {
return cljs.tools.reader.resolve_ns(G__19323__$4);
}
})():(function (){var G__19324 = token;
var G__19324__$1 = (((G__19324 == null))?null:cljs.tools.reader.impl.commons.parse_symbol(G__19324));
if((G__19324__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_(G__19324__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
})()
));
if(cljs.core.truth_(temp__5288__auto__)){
var ns = temp__5288__auto__;
var ch = cljs.tools.reader.impl.commons.read_past(cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = cljs.tools.reader.read_delimited(cljs.core.cst$kw$namespaced_DASH_map,"}",rdr,opts,pending_forms);
if(cljs.core.odd_QMARK_(cljs.core.count(items))){
cljs.tools.reader.impl.errors.throw_odd_map(rdr,null,null,items);
} else {
}

var keys = cljs.tools.reader.impl.utils.namespace_keys([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),items));
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(items));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.set(keys)),cljs.core.count(keys))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys(rdr,cljs.core.cst$kw$namespaced_DASH_map,keys);
}

return cljs.core.zipmap(keys,vals);
} else {
return cljs.tools.reader.impl.errors.throw_ns_map_no_map(rdr,token);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_ns(rdr,token);
}
});
cljs.tools.reader.macros = (function cljs$tools$reader$macros(ch){
<<<<<<< HEAD
var G__18161 = ch;
switch (G__18161) {
=======
var G__19325 = ch;
switch (G__19325) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case "\"":
return cljs.tools.reader.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "'":
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$quote);

break;
case "@":
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$clojure$core_SLASH_deref);

break;
case "^":
return cljs.tools.reader.read_meta;

break;
case "`":
return cljs.tools.reader.read_syntax_quote;

break;
case "~":
return cljs.tools.reader.read_unquote;

break;
case "(":
return cljs.tools.reader.read_list;

break;
case ")":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.read_vector;

break;
case "]":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.read_map;

break;
case "}":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.read_char_STAR_;

break;
case "%":
return cljs.tools.reader.read_arg;

break;
case "#":
return cljs.tools.reader.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.dispatch_macros = (function cljs$tools$reader$dispatch_macros(ch){
<<<<<<< HEAD
var G__18163 = ch;
switch (G__18163) {
=======
var G__19327 = ch;
switch (G__19327) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case "^":
return cljs.tools.reader.read_meta;

break;
case "'":
return cljs.tools.reader.wrapping_reader(cljs.core.cst$sym$var);

break;
case "(":
return cljs.tools.reader.read_fn;

break;
case "{":
return cljs.tools.reader.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader("Unreadable form");

break;
case "=":
return cljs.tools.reader.impl.commons.throwing_reader("read-eval not supported");

break;
case "\"":
return cljs.tools.reader.read_regex;

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.read_discard;

break;
case "?":
return cljs.tools.reader.read_cond;

break;
case ":":
return cljs.tools.reader.read_namespaced_map;

break;
default:
return null;

}
});
cljs.tools.reader.read_tagged = (function cljs$tools$reader$read_tagged(rdr,initch,opts,pending_forms){
var tag = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.impl.errors.throw_bad_reader_tag(rdr,tag);
} else {
}

if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.core.tagged_literal(tag,(cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms)));
} else {
var temp__5288__auto__ = (function (){var or__8240__auto__ = (cljs.tools.reader._STAR_data_readers_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader._STAR_data_readers_STAR_.cljs$core$IFn$_invoke$arity$1(tag) : cljs.tools.reader._STAR_data_readers_STAR_.call(null,tag));
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1 ? cljs.tools.reader.default_data_readers.cljs$core$IFn$_invoke$arity$1(tag) : cljs.tools.reader.default_data_readers.call(null,tag));
}
})();
if(cljs.core.truth_(temp__5288__auto__)){
var f = temp__5288__auto__;
<<<<<<< HEAD
var G__18165 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18165) : f.call(null,G__18165));
=======
var G__19329 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19329) : f.call(null,G__19329));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
var temp__5288__auto____$1 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
if(cljs.core.truth_(temp__5288__auto____$1)){
var f = temp__5288__auto____$1;
<<<<<<< HEAD
var G__18166 = tag;
var G__18167 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18166,G__18167) : f.call(null,G__18166,G__18167));
=======
var G__19330 = tag;
var G__19331 = (cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5(rdr,true,null,opts,pending_forms) : cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19330,G__19331) : f.call(null,G__19330,G__19331));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.tools.reader.impl.errors.throw_unknown_reader_tag(rdr,tag);
}
}
}
});
/**
 * Map from reader tag symbols to data reader Vars.
 *   Reader tags without namespace qualifiers are reserved for Clojure.
 *   This light version of tools.reader has no implementation for default
 *   reader tags such as #inst and #uuid.
 */
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
 * When no data reader is found for a tag and *default-data-reader-fn*
 *   is non-nil, it will be called with two arguments, the tag and the value.
 *   If *default-data-reader-fn* is nil (the default value), an exception
 *   will be thrown for the unknown tag.
 */
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = null;
cljs.tools.reader._STAR_suppress_read_STAR_ = false;
/**
 * Default map of data reader functions provided by Clojure.
 *   May be overridden by binding *data-readers*
 */
cljs.tools.reader.default_data_readers = cljs.core.PersistentArrayMap.EMPTY;
cljs.tools.reader.read_STAR__internal = (function cljs$tools$reader$read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
while(true){
if((cljs.tools.reader.reader_types.source_logging_reader_QMARK_(reader)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_(reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null))))){
return cljs.tools.reader.reader_types.log_source_STAR_(reader,(function (){
while(true){
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.impl.errors.throw_eof_error(reader,null);
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_(reader,ch)){
return cljs.tools.reader.read_number(reader,ch);
} else {
var f = cljs.tools.reader.macros(ch);
if(!((f == null))){
var res = (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(reader,ch,opts,pending_forms) : f.call(null,reader,ch,opts,pending_forms));
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.read_symbol(reader,ch);
}

}
}
}
}
}
break;
}
}));
} else {
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.impl.errors.throw_eof_error(reader,null);
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_(reader,ch)){
return cljs.tools.reader.read_number(reader,ch);
} else {
var f = cljs.tools.reader.macros(ch);
if(!((f == null))){
var res = (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(reader,ch,opts,pending_forms) : f.call(null,reader,ch,opts,pending_forms));
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.read_symbol(reader,ch);
}

}
}
}
}
}
}
break;
}
});
cljs.tools.reader.read_STAR_ = (function cljs$tools$reader$read_STAR_(var_args){
<<<<<<< HEAD
var G__18169 = arguments.length;
switch (G__18169) {
=======
var G__19333 = arguments.length;
switch (G__19333) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 5:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (reader,eof_error_QMARK_,sentinel,opts,pending_forms){
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(reader,eof_error_QMARK_,sentinel,null,opts,pending_forms);
});

cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 = (function (reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
try{return cljs.tools.reader.read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms);
<<<<<<< HEAD
}catch (e18170){if((e18170 instanceof Error)){
var e = e18170;
=======
}catch (e19334){if((e19334 instanceof Error)){
var e = e19334;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.tools.reader.impl.utils.ex_info_QMARK_(e)){
var d = cljs.core.ex_data(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reader_DASH_exception,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),cljs.core.cst$kw$column,reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null),cljs.core.cst$kw$file,reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1(null)], null):null)], 0)),e);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(e.message,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),cljs.core.cst$kw$column,reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null),cljs.core.cst$kw$file,reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1(null)], null):null)], 0)),e);
}
} else {
<<<<<<< HEAD
throw e18170;
=======
throw e19334;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

}
}});

cljs.tools.reader.read_STAR_.cljs$lang$maxFixedArity = 6;

/**
 * Reads the first object from an IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true.
 * Otherwise returns sentinel. If no stream is providen, *in* will be used.
 * 
 * Opts is a persistent map with valid keys:
 *  :read-cond - :allow to process reader conditionals, or
 *               :preserve to keep all branches
 *  :features - persistent set of feature keywords for reader conditionals
 *  :eof - on eof, return value unless :eofthrow, then throw.
 *         if not specified, will throw
 * 
 * To read data structures only, use clojure.tools.reader.edn/read
 * 
 * Note that the function signature of clojure.tools.reader/read and
 * clojure.tools.reader.edn/read is not the same for eof-handling
 */
cljs.tools.reader.read = (function cljs$tools$reader$read(var_args){
<<<<<<< HEAD
var G__18173 = arguments.length;
switch (G__18173) {
=======
var G__19337 = arguments.length;
switch (G__19337) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(reader,true,null);
});

<<<<<<< HEAD
cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__18174,reader){
var map__18175 = p__18174;
var map__18175__$1 = ((((!((map__18175 == null)))?((((map__18175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18175):map__18175);
var opts = map__18175__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18175__$1,cljs.core.cst$kw$eof,cljs.core.cst$kw$eofthrow);
=======
cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__19338,reader){
var map__19339 = p__19338;
var map__19339__$1 = ((((!((map__19339 == null)))?((((map__19339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19339):map__19339);
var opts = map__19339__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19339__$1,cljs.core.cst$kw$eof,cljs.core.cst$kw$eofthrow);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(reader,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eof,cljs.core.cst$kw$eofthrow),eof,null,opts,cljs.core.to_array(cljs.core.PersistentVector.EMPTY));
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3 = (function (reader,eof_error_QMARK_,sentinel){
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6(reader,eof_error_QMARK_,sentinel,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.to_array(cljs.core.PersistentVector.EMPTY));
});

cljs.tools.reader.read.cljs$lang$maxFixedArity = 3;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * To read data structures only, use clojure.tools.reader.edn/read-string
 * 
 * Note that the function signature of clojure.tools.reader/read-string and
 * clojure.tools.reader.edn/read-string is not the same for eof-handling
 */
cljs.tools.reader.read_string = (function cljs$tools$reader$read_string(var_args){
<<<<<<< HEAD
var G__18179 = arguments.length;
switch (G__18179) {
=======
var G__19343 = arguments.length;
switch (G__19343) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,s);
});

cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__8228__auto__ = s;
if(cljs.core.truth_(and__8228__auto__)){
return !((s === ""));
} else {
return and__8228__auto__;
}
})())){
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(opts,cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
});

cljs.tools.reader.read_string.cljs$lang$maxFixedArity = 2;

