// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.Uri');
bidi.bidi.url_encode = (function bidi$bidi$url_encode(string){
var G__20927 = string;
var G__20927__$1 = (((G__20927 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20927)].join(''));
var G__20927__$2 = (((G__20927__$1 == null))?null:encodeURIComponent(G__20927__$1));
if((G__20927__$2 == null)){
return null;
} else {
return G__20927__$2.replace("+","%20");
}
});
bidi.bidi.url_decode = (function bidi$bidi$url_decode(string){
var G__20928 = string;
var G__20928__$1 = (((G__20928 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20928)].join(''));
if((G__20928__$1 == null)){
return null;
} else {
return decodeURIComponent(G__20928__$1);
}
});
/**
 * Function for creating a UUID of the appropriate type for the platform.
 * Note that this function should _only_ be used in route patterns as, at least
 * in the case of ClojureScript, it does not validate that the input string is
 * actually a valid UUID (this is handled by the route matching logic).
 */
bidi.bidi.uuid = (function bidi$bidi$uuid(s){
return (new cljs.core.UUID(s));
});

/**
 * @interface
 */
bidi.bidi.ParameterEncoding = function(){};

bidi.bidi.encode_parameter = (function bidi$bidi$encode_parameter(_){
if((!((_ == null))) && (!((_.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 == null)))){
return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto__.call(null,_));
} else {
var m__8976__auto____$1 = (bidi.bidi.encode_parameter["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ParameterEncoding.encode-parameter",_);
}
}
}
});

goog.object.set(bidi.bidi.ParameterEncoding,"string",true);

var G__20929_20935 = bidi.bidi.encode_parameter;
var G__20930_20936 = "string";
var G__20931_20937 = ((function (G__20929_20935,G__20930_20936){
return (function (s){
return s;
});})(G__20929_20935,G__20930_20936))
;
goog.object.set(G__20929_20935,G__20930_20936,G__20931_20937);

goog.object.set(bidi.bidi.ParameterEncoding,"number",true);

var G__20932_20938 = bidi.bidi.encode_parameter;
var G__20933_20939 = "number";
var G__20934_20940 = ((function (G__20932_20938,G__20933_20939){
return (function (s){
return s;
});})(G__20932_20938,G__20933_20939))
;
goog.object.set(G__20932_20938,G__20933_20939,G__20934_20940);

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)].join('');
});

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){
var k__$1 = this;
return bidi.bidi.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(k__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.namespace(k__$1))?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k__$1))].join(''));
});

/**
 * @interface
 */
bidi.bidi.PatternSegment = function(){};

bidi.bidi.segment_regex_group = (function bidi$bidi$segment_regex_group(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$segment_regex_group$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto__.call(null,_));
} else {
var m__8976__auto____$1 = (bidi.bidi.segment_regex_group["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.segment-regex-group",_);
}
}
}
});

bidi.bidi.param_key = (function bidi$bidi$param_key(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$param_key$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.param_key[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto__.call(null,_));
} else {
var m__8976__auto____$1 = (bidi.bidi.param_key["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.param-key",_);
}
}
}
});

bidi.bidi.transform_param = (function bidi$bidi$transform_param(_){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$transform_param$arity$1 == null)))){
return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto__.call(null,_));
} else {
var m__8976__auto____$1 = (bidi.bidi.transform_param["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("PatternSegment.transform-param",_);
}
}
}
});

bidi.bidi.unmatch_segment = (function bidi$bidi$unmatch_segment(_,params){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$unmatch_segment$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(_,params) : m__8976__auto__.call(null,_,params));
} else {
var m__8976__auto____$1 = (bidi.bidi.unmatch_segment["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(_,params) : m__8976__auto____$1.call(null,_,params));
} else {
throw cljs.core.missing_protocol("PatternSegment.unmatch-segment",_);
}
}
}
});

bidi.bidi.matches_QMARK_ = (function bidi$bidi$matches_QMARK_(_,s){
if((!((_ == null))) && (!((_.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 == null)))){
return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__8976__auto__.call(null,_,s));
} else {
var m__8976__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__8976__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PatternSegment.matches?",_);
}
}
}
});

goog.object.set(bidi.bidi.PatternSegment,"string",true);

var G__20944_20976 = bidi.bidi.segment_regex_group;
var G__20945_20977 = "string";
var G__20946_20978 = ((function (G__20944_20976,G__20945_20977){
return (function (this$){
return this$;
});})(G__20944_20976,G__20945_20977))
;
goog.object.set(G__20944_20976,G__20945_20977,G__20946_20978);

var G__20947_20979 = bidi.bidi.param_key;
var G__20948_20980 = "string";
var G__20949_20981 = ((function (G__20947_20979,G__20948_20980){
return (function (_){
return null;
});})(G__20947_20979,G__20948_20980))
;
goog.object.set(G__20947_20979,G__20948_20980,G__20949_20981);

var G__20950_20982 = bidi.bidi.transform_param;
var G__20951_20983 = "string";
var G__20952_20984 = ((function (G__20950_20982,G__20951_20983){
return (function (_){
return cljs.core.identity;
});})(G__20950_20982,G__20951_20983))
;
goog.object.set(G__20950_20982,G__20951_20983,G__20952_20984);

var G__20953_20985 = bidi.bidi.unmatch_segment;
var G__20954_20986 = "string";
var G__20955_20987 = ((function (G__20953_20985,G__20954_20986){
return (function (this$,_){
return this$;
});})(G__20953_20985,G__20954_20986))
;
goog.object.set(G__20953_20985,G__20954_20986,G__20955_20987);

RegExp.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1["source"]);
});

RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){
var ___$1 = this;
return null;
});

RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.re_matches(this$__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.segment_regex_group(cljs.core.first(this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["If a PatternSegment is represented by a vector, the second\n                               element must be the keyword associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){
var this$__$1 = this;
return bidi.bidi.transform_param(cljs.core.first(this$__$1));
});

cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var k = cljs.core.second(this$__$1);
if(!((k instanceof cljs.core.Keyword))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["If a PatternSegment is represented by a vector, the second element\n                               must be the key associated with the pattern: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var temp__5288__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
if(cljs.core.truth_(bidi.bidi.matches_QMARK_(cljs.core.first(this$__$1),v))){
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Parameter value of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," (key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),") ","is not compatible with the route pattern ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No parameter found in params for key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){
var ___$1 = this;
return "[A-Za-z0-9\\-\\_\\.]+";
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.identity;
});

cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){
var this$__$1 = this;
var temp__5288__auto__ = (this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1(params) : this$__$1.call(null,params));
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return bidi.bidi.encode_parameter(v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot form URI without a value given for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," parameter"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

goog.object.set(bidi.bidi.PatternSegment,"function",true);

var G__20956_20988 = bidi.bidi.segment_regex_group;
var G__20957_20989 = "function";
var G__20958_20990 = ((function (G__20956_20988,G__20957_20989){
return (function (this$){
var pred__20959 = cljs.core._EQ_;
var expr__20960 = this$;
if(cljs.core.truth_((pred__20959.cljs$core$IFn$_invoke$arity$2 ? pred__20959.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__20960) : pred__20959.call(null,cljs.core.keyword,expr__20960)))){
return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else {
if(cljs.core.truth_((pred__20959.cljs$core$IFn$_invoke$arity$2 ? pred__20959.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__20960) : pred__20959.call(null,cljs.core.long$,expr__20960)))){
return "-?\\d{1,19}";
} else {
if(cljs.core.truth_((pred__20959.cljs$core$IFn$_invoke$arity$2 ? pred__20959.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__20960) : pred__20959.call(null,bidi.bidi.uuid,expr__20960)))){
return "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}";
} else {
if(cljs.core.truth_((function (){var G__20962 = cljs.core.cst$kw$otherwise;
var G__20963 = expr__20960;
return (pred__20959.cljs$core$IFn$_invoke$arity$2 ? pred__20959.cljs$core$IFn$_invoke$arity$2(G__20962,G__20963) : pred__20959.call(null,G__20962,G__20963));
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unidentified function qualifier to pattern segment: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__20960)].join('')));
}
}
}
}
});})(G__20956_20988,G__20957_20989))
;
goog.object.set(G__20956_20988,G__20957_20989,G__20958_20990);

var G__20964_20991 = bidi.bidi.transform_param;
var G__20965_20992 = "function";
var G__20966_20993 = ((function (G__20964_20991,G__20965_20992){
return (function (this$){
var pred__20967 = cljs.core._EQ_;
var expr__20968 = this$;
if(cljs.core.truth_((pred__20967.cljs$core$IFn$_invoke$arity$2 ? pred__20967.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__20968) : pred__20967.call(null,cljs.core.keyword,expr__20968)))){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,bidi.bidi.url_decode);
} else {
if(cljs.core.truth_((pred__20967.cljs$core$IFn$_invoke$arity$2 ? pred__20967.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__20968) : pred__20967.call(null,cljs.core.long$,expr__20968)))){
return ((function (pred__20967,expr__20968,G__20964_20991,G__20965_20992){
return (function (p1__20942_SHARP_){
return Number(p1__20942_SHARP_);
});
;})(pred__20967,expr__20968,G__20964_20991,G__20965_20992))
} else {
if(cljs.core.truth_((pred__20967.cljs$core$IFn$_invoke$arity$2 ? pred__20967.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__20968) : pred__20967.call(null,bidi.bidi.uuid,expr__20968)))){
return bidi.bidi.uuid;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unrecognized function ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
});})(G__20964_20991,G__20965_20992))
;
goog.object.set(G__20964_20991,G__20965_20992,G__20966_20993);

var G__20970_20994 = bidi.bidi.matches_QMARK_;
var G__20971_20995 = "function";
var G__20972_20996 = ((function (G__20970_20994,G__20971_20995){
return (function (this$,s){
var pred__20973 = cljs.core._EQ_;
var expr__20974 = this$;
if(cljs.core.truth_((pred__20973.cljs$core$IFn$_invoke$arity$2 ? pred__20973.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,expr__20974) : pred__20973.call(null,cljs.core.keyword,expr__20974)))){
return (s instanceof cljs.core.Keyword);
} else {
if(cljs.core.truth_((pred__20973.cljs$core$IFn$_invoke$arity$2 ? pred__20973.cljs$core$IFn$_invoke$arity$2(cljs.core.long$,expr__20974) : pred__20973.call(null,cljs.core.long$,expr__20974)))){
return cljs.core.not(isNaN(s));
} else {
if(cljs.core.truth_((pred__20973.cljs$core$IFn$_invoke$arity$2 ? pred__20973.cljs$core$IFn$_invoke$arity$2(bidi.bidi.uuid,expr__20974) : pred__20973.call(null,bidi.bidi.uuid,expr__20974)))){
return (s instanceof cljs.core.UUID);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__20974)].join('')));
}
}
}
});})(G__20970_20994,G__20971_20995))
;
goog.object.set(G__20970_20994,G__20971_20995,G__20972_20996);

/**
 * @interface
 */
bidi.bidi.Pattern = function(){};

/**
 * Return a new state if this pattern matches the given state, or
 *  falsy otherwise. If a new state is returned it will usually have the
 *  rest of the path to match in the :remainder entry.
 */
bidi.bidi.match_pattern = (function bidi$bidi$match_pattern(_,env){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$match_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$match_pattern$arity$2(_,env);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(_,env) : m__8976__auto__.call(null,_,env));
} else {
var m__8976__auto____$1 = (bidi.bidi.match_pattern["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(_,env) : m__8976__auto____$1.call(null,_,env));
} else {
throw cljs.core.missing_protocol("Pattern.match-pattern",_);
}
}
}
});

bidi.bidi.unmatch_pattern = (function bidi$bidi$unmatch_pattern(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Pattern$unmatch_pattern$arity$2 == null)))){
return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__8976__auto__.call(null,_,m));
} else {
var m__8976__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__8976__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Pattern.unmatch-pattern",_);
}
}
}
});


/**
 * @interface
 */
bidi.bidi.Matched = function(){};

bidi.bidi.resolve_handler = (function bidi$bidi$resolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$resolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__8976__auto__.call(null,_,m));
} else {
var m__8976__auto____$1 = (bidi.bidi.resolve_handler["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__8976__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.resolve-handler",_);
}
}
}
});

bidi.bidi.unresolve_handler = (function bidi$bidi$unresolve_handler(_,m){
if((!((_ == null))) && (!((_.bidi$bidi$Matched$unresolve_handler$arity$2 == null)))){
return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__8976__auto__.call(null,_,m));
} else {
var m__8976__auto____$1 = (bidi.bidi.unresolve_handler["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__8976__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("Matched.unresolve-handler",_);
}
}
}
});

bidi.bidi.just_path = (function bidi$bidi$just_path(path){
var uri_string = ["file:///",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2((new goog.Uri(uri_string)).getPath(),(1));
});
/**
 * A pair contains a pattern to match (either fully or partially) and an
 *   expression yielding a handler. The second parameter is a map
 *   containing state, including the remaining path.
 */
bidi.bidi.match_pair = (function bidi$bidi$match_pair(p__20997,orig_env){
var vec__20998 = p__20997;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20998,(1),null);
var env = cljs.core.update.cljs$core$IFn$_invoke$arity$3(orig_env,cljs.core.cst$kw$remainder,bidi.bidi.just_path);
var temp__5290__auto__ = bidi.bidi.match_pattern(pattern,env);
if(cljs.core.truth_(temp__5290__auto__)){
var match_result = temp__5290__auto__;
return bidi.bidi.resolve_handler(matched,match_result);
} else {
return null;
}
});
/**
 * Match the beginning of the :remainder value in m. If matched, update
 *   the :remainder value in m with the path that remains after matching.
 */
bidi.bidi.match_beginning = (function bidi$bidi$match_beginning(regex_pattern,env){
var temp__5290__auto__ = cljs.core.last(cljs.core.re_matches(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_pattern),"(.*)"].join('')),cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_(temp__5290__auto__)){
var path = temp__5290__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$remainder,path);
} else {
return null;
}
});
bidi.bidi.succeed = (function bidi$bidi$succeed(handler,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(m),"")){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$remainder),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null)], 0));
} else {
return null;
}
});
goog.object.set(bidi.bidi.Pattern,"string",true);

var G__21004_21026 = bidi.bidi.match_pattern;
var G__21005_21027 = "string";
var G__21006_21028 = ((function (G__21004_21026,G__21005_21027){
return (function (this$,env){
return bidi.bidi.match_beginning(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group(this$)),")"].join(''),env);
});})(G__21004_21026,G__21005_21027))
;
goog.object.set(G__21004_21026,G__21005_21027,G__21006_21028);

var G__21007_21029 = bidi.bidi.unmatch_pattern;
var G__21008_21030 = "string";
var G__21009_21031 = ((function (G__21007_21029,G__21008_21030){
return (function (this$,_){
return this$;
});})(G__21007_21029,G__21008_21030))
;
goog.object.set(G__21007_21029,G__21008_21030,G__21009_21031);

RegExp.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
return bidi.bidi.match_beginning(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group(this$__$1)),")"].join(''),env);
});

RegExp.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
var p = this$__$1.pattern();
return bidi.bidi.unmatch_pattern(clojure.string.replace(p,/\\\\/,""),m);
});

goog.object.set(bidi.bidi.Pattern,"boolean",true);

var G__21010_21032 = bidi.bidi.match_pattern;
var G__21011_21033 = "boolean";
var G__21012_21034 = ((function (G__21010_21032,G__21011_21033){
return (function (this$,env){
if(this$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$remainder,"");
} else {
return null;
}
});})(G__21010_21032,G__21011_21033))
;
goog.object.set(G__21010_21032,G__21011_21033,G__21012_21034);

var G__21013_21035 = bidi.bidi.unmatch_pattern;
var G__21014_21036 = "boolean";
var G__21015_21037 = ((function (G__21013_21035,G__21014_21036){
return (function (this$,_){
if(this$){
return "";
} else {
return null;
}
});})(G__21013_21035,G__21014_21036))
;
goog.object.set(G__21013_21035,G__21014_21036,G__21015_21037);

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
var temp__5290__auto__ = (function (){var _PERCENT_ = this$__$1;
var _PERCENT___$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.segment_regex_group,_PERCENT_);
var _PERCENT___$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),")"].join('');
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);
var _PERCENT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,_PERCENT___$2);
var _PERCENT___$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_PERCENT___$3),"(.*)"].join('');
var _PERCENT___$5 = cljs.core.re_pattern(_PERCENT___$4);
var _PERCENT___$6 = cljs.core.re_matches(_PERCENT___$5,cljs.core.cst$kw$remainder.cljs$core$IFn$_invoke$arity$1(env));
return cljs.core.next(_PERCENT___$6);
})();
if(temp__5290__auto__){
var groups = temp__5290__auto__;
var params = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.param_key,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bidi.bidi.transform_param,this$__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.butlast(groups))))));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remainder], null),cljs.core.last(groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_params], null),cljs.core.merge,params);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__21001_SHARP_){
return bidi.bidi.unmatch_segment(p1__21001_SHARP_,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(env))){
return env;
} else {
return null;
}
});

cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_(((function (this$__$1){
return (function (p__21016){
var vec__21017 = p__21016;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21017,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21017,(1),null);
if((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
var G__21020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__21020) : v.call(null,G__21020));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
});})(this$__$1))
,cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){
var this$__$1 = this;
if(cljs.core.every_QMARK_(((function (this$__$1){
return (function (p__21021){
var vec__21022 = p__21021;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21022,(1),null);
if((cljs.core.fn_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
var G__21025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__21025) : v.call(null,G__21025));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k));

}
});})(this$__$1))
,cljs.core.seq(this$__$1))){
return env;
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){
var ___$2 = this;
return "";
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21002_SHARP_){
return bidi.bidi.match_pattern(p1__21002_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentHashSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21003_SHARP_){
return bidi.bidi.match_pattern(p1__21003_SHARP_,s);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,this$__$1));
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,s){
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(this$__$1),s);
});
bidi.bidi.unmatch_pair = (function bidi$bidi$unmatch_pair(v,m){
var temp__5290__auto__ = bidi.bidi.unresolve_handler(cljs.core.second(v),m);
if(cljs.core.truth_(temp__5290__auto__)){
var r = temp__5290__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.unmatch_pattern(cljs.core.first(v),m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return null;
}
});
goog.object.set(bidi.bidi.Matched,"null",true);

var G__21048_21063 = bidi.bidi.resolve_handler;
var G__21049_21064 = "null";
var G__21050_21065 = ((function (G__21048_21063,G__21049_21064){
return (function (this$,m){
return null;
});})(G__21048_21063,G__21049_21064))
;
goog.object.set(G__21048_21063,G__21049_21064,G__21050_21065);

var G__21051_21066 = bidi.bidi.unresolve_handler;
var G__21052_21067 = "null";
var G__21053_21068 = ((function (G__21051_21066,G__21052_21067){
return (function (this$,m){
return null;
});})(G__21051_21066,G__21052_21067))
;
goog.object.set(G__21051_21066,G__21052_21067,G__21053_21068);

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21038_SHARP_){
return bidi.bidi.match_pair(p1__21038_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21039_SHARP_){
return bidi.bidi.unmatch_pair(p1__21039_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Var.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Var.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Var.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.unresolve_handler(cljs.core.deref(this$__$1),m);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21042_SHARP_){
return bidi.bidi.match_pair(p1__21042_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21043_SHARP_){
return bidi.bidi.unmatch_pair(p1__21043_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21040_SHARP_){
return bidi.bidi.match_pair(p1__21040_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21041_SHARP_){
return bidi.bidi.unmatch_pair(p1__21041_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

goog.object.set(bidi.bidi.Matched,"string",true);

var G__21054_21069 = bidi.bidi.unresolve_handler;
var G__21055_21070 = "string";
var G__21056_21071 = ((function (G__21054_21069,G__21055_21070){
return (function (_,___$1){
return null;
});})(G__21054_21069,G__21055_21070))
;
goog.object.set(G__21054_21069,G__21055_21070,G__21056_21071);

cljs.core.Symbol.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});

goog.object.set(bidi.bidi.Matched,"function",true);

var G__21057_21072 = bidi.bidi.resolve_handler;
var G__21058_21073 = "function";
var G__21059_21074 = ((function (G__21057_21072,G__21058_21073){
return (function (this$,m){
return bidi.bidi.succeed(this$,m);
});})(G__21057_21072,G__21058_21073))
;
goog.object.set(G__21057_21072,G__21058_21073,G__21059_21074);

var G__21060_21075 = bidi.bidi.unresolve_handler;
var G__21061_21076 = "function";
var G__21062_21077 = ((function (G__21060_21075,G__21061_21076){
return (function (this$,m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});})(G__21060_21075,G__21061_21076))
;
goog.object.set(G__21060_21075,G__21061_21076,G__21062_21077);

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21044_SHARP_){
return bidi.bidi.match_pair(p1__21044_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21045_SHARP_){
return bidi.bidi.unmatch_pair(p1__21045_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21046_SHARP_){
return bidi.bidi.match_pair(p1__21046_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21047_SHARP_){
return bidi.bidi.unmatch_pair(p1__21047_SHARP_,m);
});})(this$__$1))
,this$__$1);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
return bidi.bidi.succeed(this$__$1,m);
});

cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return null;
}
});
bidi.bidi.match_route_STAR_ = (function bidi$bidi$match_route_STAR_(route,path,options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bidi.bidi.match_pair(route,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$remainder,path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route,route], 0))),cljs.core.cst$kw$route);
});
/**
 * Given a route definition data structure and a path, return the
 *   handler, if any, that matches the path.
 */
bidi.bidi.match_route = (function bidi$bidi$match_route(var_args){
var args__9526__auto__ = [];
var len__9519__auto___21084 = arguments.length;
var i__9520__auto___21085 = (0);
while(true){
if((i__9520__auto___21085 < len__9519__auto___21084)){
args__9526__auto__.push((arguments[i__9520__auto___21085]));

var G__21086 = (i__9520__auto___21085 + (1));
i__9520__auto___21085 = G__21086;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((2) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((2)),(0),null)):null);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9527__auto__);
});

bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic = (function (route,path,p__21081){
var map__21082 = p__21081;
var map__21082__$1 = ((((!((map__21082 == null)))?((((map__21082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21082):map__21082);
var options = map__21082__$1;
return bidi.bidi.match_route_STAR_(route,path,options);
});

bidi.bidi.match_route.cljs$lang$maxFixedArity = (2);

bidi.bidi.match_route.cljs$lang$applyTo = (function (seq21078){
var G__21079 = cljs.core.first(seq21078);
var seq21078__$1 = cljs.core.next(seq21078);
var G__21080 = cljs.core.first(seq21078__$1);
var seq21078__$2 = cljs.core.next(seq21078__$1);
return bidi.bidi.match_route.cljs$core$IFn$_invoke$arity$variadic(G__21079,G__21080,seq21078__$2);
});

/**
 * Given a route definition data structure, a handler and an option map, return a
 *   path that would route to the handler. The map must contain the values to any
 *   parameters required to create the path, and extra values are silently ignored.
 */
bidi.bidi.path_for = (function bidi$bidi$path_for(var_args){
var args__9526__auto__ = [];
var len__9519__auto___21093 = arguments.length;
var i__9520__auto___21094 = (0);
while(true){
if((i__9520__auto___21094 < len__9519__auto___21093)){
args__9526__auto__.push((arguments[i__9520__auto___21094]));

var G__21095 = (i__9520__auto___21094 + (1));
i__9520__auto___21094 = G__21095;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((2) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((2)),(0),null)):null);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9527__auto__);
});

bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,p__21090){
var map__21091 = p__21090;
var map__21091__$1 = ((((!((map__21091 == null)))?((((map__21091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21091):map__21091);
var params = map__21091__$1;
if((handler == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return bidi.bidi.unmatch_pair(route,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$params,params], null));
});

bidi.bidi.path_for.cljs$lang$maxFixedArity = (2);

bidi.bidi.path_for.cljs$lang$applyTo = (function (seq21087){
var G__21088 = cljs.core.first(seq21087);
var seq21087__$1 = cljs.core.next(seq21087);
var G__21089 = cljs.core.first(seq21087__$1);
var seq21087__$2 = cljs.core.next(seq21087__$1);
return bidi.bidi.path_for.cljs$core$IFn$_invoke$arity$variadic(G__21088,G__21089,seq21087__$2);
});


/**
 * @interface
 */
bidi.bidi.Matches = function(){};

/**
 * A protocol used in the expansion of possible matches that the pattern can match. This is used to gather all possible routes using route-seq below.
 */
bidi.bidi.matches = (function bidi$bidi$matches(_){
if((!((_ == null))) && (!((_.bidi$bidi$Matches$matches$arity$1 == null)))){
return _.bidi$bidi$Matches$matches$arity$1(_);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.matches[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto__.call(null,_));
} else {
var m__8976__auto____$1 = (bidi.bidi.matches["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Matches.matches",_);
}
}
}
});

goog.object.set(bidi.bidi.Matches,"_",true);

var G__21096_21099 = bidi.bidi.matches;
var G__21097_21100 = "_";
var G__21098_21101 = ((function (G__21096_21099,G__21097_21100){
return (function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null);
});})(G__21096_21099,G__21097_21100))
;
goog.object.set(G__21096_21099,G__21097_21100,G__21098_21101);

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.bidi$bidi$Matches$matches$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
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
bidi.bidi.Route = (function (handler,path,__meta,__extmap,__hash){
this.handler = handler;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

bidi.bidi.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k21103,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__21107 = k21103;
var G__21107__$1 = (((G__21107 instanceof cljs.core.Keyword))?G__21107.fqn:null);
switch (G__21107__$1) {
case "handler":
return self__.handler;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21103,else__8933__auto__);

}
});

bidi.bidi.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#bidi.bidi.Route{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21102){
var self__ = this;
var G__21102__$1 = this;
return (new cljs.core.RecordIter((0),G__21102__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__21108 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-350230779 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__21108(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

bidi.bidi.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21104,other21105){
var self__ = this;
var this21104__$1 = this;
return (!((other21105 == null))) && ((this21104__$1.constructor === other21105.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21104__$1.handler,other21105.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21104__$1.path,other21105.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21104__$1.__extmap,other21105.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$handler,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

bidi.bidi.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__21102){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__21109 = cljs.core.keyword_identical_QMARK_;
var expr__21110 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__21112 = cljs.core.cst$kw$handler;
var G__21113 = expr__21110;
return (pred__21109.cljs$core$IFn$_invoke$arity$2 ? pred__21109.cljs$core$IFn$_invoke$arity$2(G__21112,G__21113) : pred__21109.call(null,G__21112,G__21113));
})())){
return (new bidi.bidi.Route(G__21102,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21114 = cljs.core.cst$kw$path;
var G__21115 = expr__21110;
return (pred__21109.cljs$core$IFn$_invoke$arity$2 ? pred__21109.cljs$core$IFn$_invoke$arity$2(G__21114,G__21115) : pred__21109.call(null,G__21114,G__21115));
})())){
return (new bidi.bidi.Route(self__.handler,G__21102,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Route(self__.handler,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__21102),null));
}
}
});

bidi.bidi.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

bidi.bidi.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__21102){
var self__ = this;
var this__8929__auto____$1 = this;
return (new bidi.bidi.Route(self__.handler,self__.path,G__21102,self__.__extmap,self__.__hash));
});

bidi.bidi.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

bidi.bidi.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$path], null);
});

bidi.bidi.Route.cljs$lang$type = true;

bidi.bidi.Route.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/Route");
});

bidi.bidi.Route.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"bidi.bidi/Route");
});

bidi.bidi.__GT_Route = (function bidi$bidi$__GT_Route(handler,path){
return (new bidi.bidi.Route(handler,path,null,null,null));
});

bidi.bidi.map__GT_Route = (function bidi$bidi$map__GT_Route(G__21106){
return (new bidi.bidi.Route(cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__21106),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__21106),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21106,cljs.core.cst$kw$handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path], 0))),null));
});


/**
 * @interface
 */
bidi.bidi.RouteSeq = function(){};

/**
 * Return a sequence of leaves
 */
bidi.bidi.gather = (function bidi$bidi$gather(_,context){
if((!((_ == null))) && (!((_.bidi$bidi$RouteSeq$gather$arity$2 == null)))){
return _.bidi$bidi$RouteSeq$gather$arity$2(_,context);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.gather[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$2(_,context) : m__8976__auto__.call(null,_,context));
} else {
var m__8976__auto____$1 = (bidi.bidi.gather["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$2(_,context) : m__8976__auto____$1.call(null,_,context));
} else {
throw cljs.core.missing_protocol("RouteSeq.gather",_);
}
}
}
});

bidi.bidi.route_seq = (function bidi$bidi$route_seq(var_args){
var G__21118 = arguments.length;
switch (G__21118) {
case 2:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2 = (function (p__21119,ctx){
var vec__21120 = p__21119;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21120,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21120,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9124__auto__ = ((function (vec__21120,pattern,matched){
return (function bidi$bidi$iter__21123(s__21124){
return (new cljs.core.LazySeq(null,((function (vec__21120,pattern,matched){
return (function (){
var s__21124__$1 = s__21124;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__21124__$1);
if(temp__5290__auto__){
var s__21124__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21124__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__21124__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__21126 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__21125 = (0);
while(true){
if((i__21125 < size__9123__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__21125);
cljs.core.chunk_append(b__21126,bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)));

var G__21128 = (i__21125 + (1));
i__21125 = G__21128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21126),bidi$bidi$iter__21123(cljs.core.chunk_rest(s__21124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21126),null);
}
} else {
var p = cljs.core.first(s__21124__$2);
return cljs.core.cons(bidi.bidi.gather(matched,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),p)),bidi$bidi$iter__21123(cljs.core.rest(s__21124__$2)));
}
} else {
return null;
}
break;
}
});})(vec__21120,pattern,matched))
,null,null));
});})(vec__21120,pattern,matched))
;
return iter__9124__auto__(bidi.bidi.matches(pattern));
})()], 0));
});

bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$1 = (function (route){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

bidi.bidi.route_seq.cljs$lang$maxFixedArity = 2;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__21129_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__21129_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.List.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__21130_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__21130_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__21131_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__21131_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__21132_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__21132_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p1__21133_SHARP_){
return bidi.bidi.route_seq.cljs$core$IFn$_invoke$arity$2(p1__21133_SHARP_,context);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0));
});

goog.object.set(bidi.bidi.RouteSeq,"_",true);

var G__21134_21137 = bidi.bidi.gather;
var G__21135_21138 = "_";
var G__21136_21139 = ((function (G__21134_21137,G__21135_21138){
return (function (this$,context){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$handler,this$))], null);
});})(G__21134_21137,G__21135_21138))
;
goog.object.set(G__21134_21137,G__21135_21138,G__21136_21139);

/**
 * @interface
 */
bidi.bidi.RouteProvider = function(){};

/**
 * Provide a bidi route structure. Returns a vector pair,
 *   the first element is the pattern, the second element is the matched
 *   route or routes.
 */
bidi.bidi.routes = (function bidi$bidi$routes(_){
if((!((_ == null))) && (!((_.bidi$bidi$RouteProvider$routes$arity$1 == null)))){
return _.bidi$bidi$RouteProvider$routes$arity$1(_);
} else {
var x__8975__auto__ = (((_ == null))?null:_);
var m__8976__auto__ = (bidi.bidi.routes[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto__.call(null,_));
} else {
var m__8976__auto____$1 = (bidi.bidi.routes["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8976__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("RouteProvider.routes",_);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {bidi.bidi.Matches}
 * @implements {cljs.core.ICounted}
 * @implements {bidi.bidi.Pattern}
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
bidi.bidi.Alternates = (function (alts,__meta,__extmap,__hash){
this.alts = alts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

bidi.bidi.Alternates.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k21142,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__21146 = k21142;
var G__21146__$1 = (((G__21146 instanceof cljs.core.Keyword))?G__21146.fqn:null);
switch (G__21146__$1) {
case "alts":
return self__.alts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21142,else__8933__auto__);

}
});

bidi.bidi.Alternates.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#bidi.bidi.Alternates{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alts,self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21141){
var self__ = this;
var G__21141__$1 = this;
return (new cljs.core.RecordIter((0),G__21141__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$alts], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.Alternates.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.Alternates.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__21147 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1584309265 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__21147(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

bidi.bidi.Alternates.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21143,other21144){
var self__ = this;
var this21143__$1 = this;
return (!((other21144 == null))) && ((this21143__$1.constructor === other21144.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21143__$1.alts,other21144.alts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21143__$1.__extmap,other21144.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alts,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__21141){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__21148 = cljs.core.keyword_identical_QMARK_;
var expr__21149 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__21151 = cljs.core.cst$kw$alts;
var G__21152 = expr__21149;
return (pred__21148.cljs$core$IFn$_invoke$arity$2 ? pred__21148.cljs$core$IFn$_invoke$arity$2(G__21151,G__21152) : pred__21148.call(null,G__21151,G__21152));
})())){
return (new bidi.bidi.Alternates(G__21141,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.Alternates(self__.alts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__21141),null));
}
});

bidi.bidi.Alternates.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alts,self__.alts],null))], null),self__.__extmap));
});

bidi.bidi.Alternates.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__21141){
var self__ = this;
var this__8929__auto____$1 = this;
return (new bidi.bidi.Alternates(self__.alts,G__21141,self__.__extmap,self__.__hash));
});

bidi.bidi.Alternates.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Matches$matches$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.alts;
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.some(((function (this$__$1){
return (function (p1__21140_SHARP_){
return bidi.bidi.match_pattern(p1__21140_SHARP_,m);
});})(this$__$1))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,self__.alts));
});

bidi.bidi.Alternates.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.unmatch_pattern(cljs.core.first(self__.alts),m);
});

bidi.bidi.Alternates.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$alts], null);
});

bidi.bidi.Alternates.cljs$lang$type = true;

bidi.bidi.Alternates.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/Alternates");
});

bidi.bidi.Alternates.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"bidi.bidi/Alternates");
});

bidi.bidi.__GT_Alternates = (function bidi$bidi$__GT_Alternates(alts){
return (new bidi.bidi.Alternates(alts,null,null,null));
});

bidi.bidi.map__GT_Alternates = (function bidi$bidi$map__GT_Alternates(G__21145){
return (new bidi.bidi.Alternates(cljs.core.cst$kw$alts.cljs$core$IFn$_invoke$arity$1(G__21145),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21145,cljs.core.cst$kw$alts)),null));
});

bidi.bidi.alts = (function bidi$bidi$alts(var_args){
var args__9526__auto__ = [];
var len__9519__auto___21155 = arguments.length;
var i__9520__auto___21156 = (0);
while(true){
if((i__9520__auto___21156 < len__9519__auto___21155)){
args__9526__auto__.push((arguments[i__9520__auto___21156]));

var G__21157 = (i__9520__auto___21156 + (1));
i__9520__auto___21156 = G__21157;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic = (function (alts){
return bidi.bidi.__GT_Alternates(alts);
});

bidi.bidi.alts.cljs$lang$maxFixedArity = (0);

bidi.bidi.alts.cljs$lang$applyTo = (function (seq21154){
return bidi.bidi.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21154));
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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.TaggedMatch = (function (matched,tag,__meta,__extmap,__hash){
this.matched = matched;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k21159,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__21163 = k21159;
var G__21163__$1 = (((G__21163 instanceof cljs.core.Keyword))?G__21163.fqn:null);
switch (G__21163__$1) {
case "matched":
return self__.matched;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21159,else__8933__auto__);

}
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.map__GT_Route(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context,cljs.core.cst$kw$handler,self__.matched,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag,self__.tag], 0)))], null);
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#bidi.bidi.TaggedMatch{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$matched,self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tag,self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21158){
var self__ = this;
var G__21158__$1 = this;
return (new cljs.core.RecordIter((0),G__21158__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$matched,cljs.core.cst$kw$tag], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.matched,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$tag,self__.tag));
});

bidi.bidi.TaggedMatch.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(((cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tag,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m)))){
return "";
} else {
return bidi.bidi.unresolve_handler(self__.matched,m);
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__21164 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1322093519 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__21164(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21160,other21161){
var self__ = this;
var this21160__$1 = this;
return (!((other21161 == null))) && ((this21160__$1.constructor === other21161.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21160__$1.matched,other21161.matched)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21160__$1.tag,other21161.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21160__$1.__extmap,other21161.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$matched,null,cljs.core.cst$kw$tag,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__21158){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__21165 = cljs.core.keyword_identical_QMARK_;
var expr__21166 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__21168 = cljs.core.cst$kw$matched;
var G__21169 = expr__21166;
return (pred__21165.cljs$core$IFn$_invoke$arity$2 ? pred__21165.cljs$core$IFn$_invoke$arity$2(G__21168,G__21169) : pred__21165.call(null,G__21168,G__21169));
})())){
return (new bidi.bidi.TaggedMatch(G__21158,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21170 = cljs.core.cst$kw$tag;
var G__21171 = expr__21166;
return (pred__21165.cljs$core$IFn$_invoke$arity$2 ? pred__21165.cljs$core$IFn$_invoke$arity$2(G__21170,G__21171) : pred__21165.call(null,G__21170,G__21171));
})())){
return (new bidi.bidi.TaggedMatch(self__.matched,G__21158,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__21158),null));
}
}
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$matched,self__.matched],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tag,self__.tag],null))], null),self__.__extmap));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__21158){
var self__ = this;
var this__8929__auto____$1 = this;
return (new bidi.bidi.TaggedMatch(self__.matched,self__.tag,G__21158,self__.__extmap,self__.__hash));
});

bidi.bidi.TaggedMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

bidi.bidi.TaggedMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matched,cljs.core.cst$sym$tag], null);
});

bidi.bidi.TaggedMatch.cljs$lang$type = true;

bidi.bidi.TaggedMatch.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/TaggedMatch");
});

bidi.bidi.TaggedMatch.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"bidi.bidi/TaggedMatch");
});

bidi.bidi.__GT_TaggedMatch = (function bidi$bidi$__GT_TaggedMatch(matched,tag){
return (new bidi.bidi.TaggedMatch(matched,tag,null,null,null));
});

bidi.bidi.map__GT_TaggedMatch = (function bidi$bidi$map__GT_TaggedMatch(G__21162){
return (new bidi.bidi.TaggedMatch(cljs.core.cst$kw$matched.cljs$core$IFn$_invoke$arity$1(G__21162),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(G__21162),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21162,cljs.core.cst$kw$matched,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag], 0))),null));
});

bidi.bidi.tag = (function bidi$bidi$tag(matched,tag){
return bidi.bidi.__GT_TaggedMatch(matched,tag);
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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.IdentifiableHandler = (function (id,handler,__meta,__extmap,__hash){
this.id = id;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k21174,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__21178 = k21174;
var G__21178__$1 = (((G__21178 instanceof cljs.core.Keyword))?G__21178.fqn:null);
switch (G__21178__$1) {
case "id":
return self__.id;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21174,else__8933__auto__);

}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#bidi.bidi.IdentifiableHandler{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21173){
var self__ = this;
var G__21173__$1 = this;
return (new cljs.core.RecordIter((0),G__21173__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$handler], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return bidi.bidi.resolve_handler(self__.handler,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$id,self__.id));
});

bidi.bidi.IdentifiableHandler.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.id)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(m))){
return "";
} else {
return bidi.bidi.unresolve_handler(self__.handler,m);
}
} else {
return null;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__21179 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1607629977 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__21179(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21175,other21176){
var self__ = this;
var this21175__$1 = this;
return (!((other21176 == null))) && ((this21175__$1.constructor === other21176.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21175__$1.id,other21176.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21175__$1.handler,other21176.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21175__$1.__extmap,other21176.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,null,cljs.core.cst$kw$handler,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__21173){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__21180 = cljs.core.keyword_identical_QMARK_;
var expr__21181 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__21183 = cljs.core.cst$kw$id;
var G__21184 = expr__21181;
return (pred__21180.cljs$core$IFn$_invoke$arity$2 ? pred__21180.cljs$core$IFn$_invoke$arity$2(G__21183,G__21184) : pred__21180.call(null,G__21183,G__21184));
})())){
return (new bidi.bidi.IdentifiableHandler(G__21173,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21185 = cljs.core.cst$kw$handler;
var G__21186 = expr__21181;
return (pred__21180.cljs$core$IFn$_invoke$arity$2 ? pred__21180.cljs$core$IFn$_invoke$arity$2(G__21185,G__21186) : pred__21180.call(null,G__21185,G__21186));
})())){
return (new bidi.bidi.IdentifiableHandler(self__.id,G__21173,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__21173),null));
}
}
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id,self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handler,self__.handler],null))], null),self__.__extmap));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__21173){
var self__ = this;
var this__8929__auto____$1 = this;
return (new bidi.bidi.IdentifiableHandler(self__.id,self__.handler,G__21173,self__.__extmap,self__.__hash));
});

bidi.bidi.IdentifiableHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

bidi.bidi.IdentifiableHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$id,cljs.core.cst$sym$handler], null);
});

bidi.bidi.IdentifiableHandler.cljs$lang$type = true;

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.IdentifiableHandler.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"bidi.bidi/IdentifiableHandler");
});

bidi.bidi.__GT_IdentifiableHandler = (function bidi$bidi$__GT_IdentifiableHandler(id,handler){
return (new bidi.bidi.IdentifiableHandler(id,handler,null,null,null));
});

bidi.bidi.map__GT_IdentifiableHandler = (function bidi$bidi$map__GT_IdentifiableHandler(G__21177){
return (new bidi.bidi.IdentifiableHandler(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__21177),cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__21177),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21177,cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler], 0))),null));
});

bidi.bidi.handler = (function bidi$bidi$handler(var_args){
var G__21189 = arguments.length;
switch (G__21189) {
case 2:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$2 = (function (k,handler){
return bidi.bidi.__GT_IdentifiableHandler(k,handler);
});

bidi.bidi.handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return bidi.bidi.__GT_IdentifiableHandler(null,handler);
});

bidi.bidi.handler.cljs$lang$maxFixedArity = 2;


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
 * @implements {bidi.bidi.Matched}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {bidi.bidi.RouteSeq}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi.bidi.RoutesContext = (function (routes,context,__meta,__extmap,__hash){
this.routes = routes;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

bidi.bidi.RoutesContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k21192,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__21196 = k21192;
var G__21196__$1 = (((G__21196 instanceof cljs.core.Keyword))?G__21196.fqn:null);
switch (G__21196__$1) {
case "routes":
return self__.routes;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21192,else__8933__auto__);

}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$RouteSeq$gather$arity$2 = (function (_,context__$1){
var self__ = this;
var ___$1 = this;
return bidi.bidi.gather(self__.routes,context__$1);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#bidi.bidi.RoutesContext{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21191){
var self__ = this;
var G__21191__$1 = this;
return (new cljs.core.RecordIter((0),G__21191__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes,cljs.core.cst$kw$context], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$ = cljs.core.PROTOCOL_SENTINEL;

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var temp__5290__auto__ = bidi.bidi.resolve_handler(self__.routes,m);
if(cljs.core.truth_(temp__5290__auto__)){
var m__$1 = temp__5290__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.context,m__$1], 0));
} else {
return null;
}
});

bidi.bidi.RoutesContext.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return bidi.bidi.unresolve_handler(self__.routes,m);
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__21197 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-736389484 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__21197(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21193,other21194){
var self__ = this;
var this21193__$1 = this;
return (!((other21194 == null))) && ((this21193__$1.constructor === other21194.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21193__$1.routes,other21194.routes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21193__$1.context,other21194.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21193__$1.__extmap,other21194.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$routes,null,cljs.core.cst$kw$context,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__21191){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__21198 = cljs.core.keyword_identical_QMARK_;
var expr__21199 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__21201 = cljs.core.cst$kw$routes;
var G__21202 = expr__21199;
return (pred__21198.cljs$core$IFn$_invoke$arity$2 ? pred__21198.cljs$core$IFn$_invoke$arity$2(G__21201,G__21202) : pred__21198.call(null,G__21201,G__21202));
})())){
return (new bidi.bidi.RoutesContext(G__21191,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21203 = cljs.core.cst$kw$context;
var G__21204 = expr__21199;
return (pred__21198.cljs$core$IFn$_invoke$arity$2 ? pred__21198.cljs$core$IFn$_invoke$arity$2(G__21203,G__21204) : pred__21198.call(null,G__21203,G__21204));
})())){
return (new bidi.bidi.RoutesContext(self__.routes,G__21191,self__.__meta,self__.__extmap,null));
} else {
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__21191),null));
}
}
});

bidi.bidi.RoutesContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null))], null),self__.__extmap));
});

bidi.bidi.RoutesContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__21191){
var self__ = this;
var this__8929__auto____$1 = this;
return (new bidi.bidi.RoutesContext(self__.routes,self__.context,G__21191,self__.__extmap,self__.__hash));
});

bidi.bidi.RoutesContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

bidi.bidi.RoutesContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes,cljs.core.cst$sym$context], null);
});

bidi.bidi.RoutesContext.cljs$lang$type = true;

bidi.bidi.RoutesContext.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"bidi.bidi/RoutesContext");
});

bidi.bidi.RoutesContext.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"bidi.bidi/RoutesContext");
});

bidi.bidi.__GT_RoutesContext = (function bidi$bidi$__GT_RoutesContext(routes,context){
return (new bidi.bidi.RoutesContext(routes,context,null,null,null));
});

bidi.bidi.map__GT_RoutesContext = (function bidi$bidi$map__GT_RoutesContext(G__21195){
return (new bidi.bidi.RoutesContext(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(G__21195),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(G__21195),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21195,cljs.core.cst$kw$routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$context], 0))),null));
});

/**
 * Wrap a Matched such that a successful match will merge the given
 *   context with the match-context. The merge is such that where there
 *   is a conflict, the inner sub-tree overrides the outer container.
 */
bidi.bidi.routes_context = (function bidi$bidi$routes_context(routes,context){
return bidi.bidi.__GT_RoutesContext(routes,context);
});
bidi.bidi.compile_route = (function bidi$bidi$compile_route(route){
return route;
});
