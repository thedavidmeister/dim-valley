// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
<<<<<<< HEAD
var G__18271 = b.append("0");
b = G__18271;
=======
var G__19435 = b.append("0");
b = G__19435;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__8228__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__8228__auto__)){
var or__8240__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__8228__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
<<<<<<< HEAD
var vec__18272 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(10),null);
var v = vec__18272;
=======
var vec__19436 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19436,(10),null);
var v = vec__19436;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__8240__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__8240__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__8240__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__8240__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__8240__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__8240__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__8240__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__8240__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__18275 = months__$1;
var G__18276 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__18275,G__18276) : cljs.reader.days_in_month.call(null,G__18275,G__18276));
=======
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__19439 = months__$1;
var G__19440 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__19439,G__19440) : cljs.reader.days_in_month.call(null,G__19439,G__19440));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5288__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5288__auto__)){
<<<<<<< HEAD
var vec__18277 = temp__5288__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277,(7),null);
=======
var vec__19441 = temp__5288__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(7),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
<<<<<<< HEAD
var seq__18280_18302 = cljs.core.seq(form);
var chunk__18281_18303 = null;
var count__18282_18304 = (0);
var i__18283_18305 = (0);
while(true){
if((i__18283_18305 < count__18282_18304)){
var x_18306 = chunk__18281_18303.cljs$core$IIndexed$_nth$arity$2(null,i__18283_18305);
arr.push(x_18306);

var G__18307 = seq__18280_18302;
var G__18308 = chunk__18281_18303;
var G__18309 = count__18282_18304;
var G__18310 = (i__18283_18305 + (1));
seq__18280_18302 = G__18307;
chunk__18281_18303 = G__18308;
count__18282_18304 = G__18309;
i__18283_18305 = G__18310;
continue;
} else {
var temp__5290__auto___18311 = cljs.core.seq(seq__18280_18302);
if(temp__5290__auto___18311){
var seq__18280_18312__$1 = temp__5290__auto___18311;
if(cljs.core.chunked_seq_QMARK_(seq__18280_18312__$1)){
var c__9171__auto___18313 = cljs.core.chunk_first(seq__18280_18312__$1);
var G__18314 = cljs.core.chunk_rest(seq__18280_18312__$1);
var G__18315 = c__9171__auto___18313;
var G__18316 = cljs.core.count(c__9171__auto___18313);
var G__18317 = (0);
seq__18280_18302 = G__18314;
chunk__18281_18303 = G__18315;
count__18282_18304 = G__18316;
i__18283_18305 = G__18317;
continue;
} else {
var x_18318 = cljs.core.first(seq__18280_18312__$1);
arr.push(x_18318);

var G__18319 = cljs.core.next(seq__18280_18312__$1);
var G__18320 = null;
var G__18321 = (0);
var G__18322 = (0);
seq__18280_18302 = G__18319;
chunk__18281_18303 = G__18320;
count__18282_18304 = G__18321;
i__18283_18305 = G__18322;
=======
var seq__19444_19466 = cljs.core.seq(form);
var chunk__19445_19467 = null;
var count__19446_19468 = (0);
var i__19447_19469 = (0);
while(true){
if((i__19447_19469 < count__19446_19468)){
var x_19470 = chunk__19445_19467.cljs$core$IIndexed$_nth$arity$2(null,i__19447_19469);
arr.push(x_19470);

var G__19471 = seq__19444_19466;
var G__19472 = chunk__19445_19467;
var G__19473 = count__19446_19468;
var G__19474 = (i__19447_19469 + (1));
seq__19444_19466 = G__19471;
chunk__19445_19467 = G__19472;
count__19446_19468 = G__19473;
i__19447_19469 = G__19474;
continue;
} else {
var temp__5290__auto___19475 = cljs.core.seq(seq__19444_19466);
if(temp__5290__auto___19475){
var seq__19444_19476__$1 = temp__5290__auto___19475;
if(cljs.core.chunked_seq_QMARK_(seq__19444_19476__$1)){
var c__9173__auto___19477 = cljs.core.chunk_first(seq__19444_19476__$1);
var G__19478 = cljs.core.chunk_rest(seq__19444_19476__$1);
var G__19479 = c__9173__auto___19477;
var G__19480 = cljs.core.count(c__9173__auto___19477);
var G__19481 = (0);
seq__19444_19466 = G__19478;
chunk__19445_19467 = G__19479;
count__19446_19468 = G__19480;
i__19447_19469 = G__19481;
continue;
} else {
var x_19482 = cljs.core.first(seq__19444_19476__$1);
arr.push(x_19482);

var G__19483 = cljs.core.next(seq__19444_19476__$1);
var G__19484 = null;
var G__19485 = (0);
var G__19486 = (0);
seq__19444_19466 = G__19483;
chunk__19445_19467 = G__19484;
count__19446_19468 = G__19485;
i__19447_19469 = G__19486;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = {};
<<<<<<< HEAD
var seq__18286_18323 = cljs.core.seq(form);
var chunk__18287_18324 = null;
var count__18288_18325 = (0);
var i__18289_18326 = (0);
while(true){
if((i__18289_18326 < count__18288_18325)){
var vec__18290_18327 = chunk__18287_18324.cljs$core$IIndexed$_nth$arity$2(null,i__18289_18326);
var k_18328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18290_18327,(0),null);
var v_18329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18290_18327,(1),null);
var G__18293_18330 = obj;
var G__18294_18331 = cljs.core.name(k_18328);
var G__18295_18332 = v_18329;
goog.object.set(G__18293_18330,G__18294_18331,G__18295_18332);

var G__18333 = seq__18286_18323;
var G__18334 = chunk__18287_18324;
var G__18335 = count__18288_18325;
var G__18336 = (i__18289_18326 + (1));
seq__18286_18323 = G__18333;
chunk__18287_18324 = G__18334;
count__18288_18325 = G__18335;
i__18289_18326 = G__18336;
continue;
} else {
var temp__5290__auto___18337 = cljs.core.seq(seq__18286_18323);
if(temp__5290__auto___18337){
var seq__18286_18338__$1 = temp__5290__auto___18337;
if(cljs.core.chunked_seq_QMARK_(seq__18286_18338__$1)){
var c__9171__auto___18339 = cljs.core.chunk_first(seq__18286_18338__$1);
var G__18340 = cljs.core.chunk_rest(seq__18286_18338__$1);
var G__18341 = c__9171__auto___18339;
var G__18342 = cljs.core.count(c__9171__auto___18339);
var G__18343 = (0);
seq__18286_18323 = G__18340;
chunk__18287_18324 = G__18341;
count__18288_18325 = G__18342;
i__18289_18326 = G__18343;
continue;
} else {
var vec__18296_18344 = cljs.core.first(seq__18286_18338__$1);
var k_18345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18296_18344,(0),null);
var v_18346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18296_18344,(1),null);
var G__18299_18347 = obj;
var G__18300_18348 = cljs.core.name(k_18345);
var G__18301_18349 = v_18346;
goog.object.set(G__18299_18347,G__18300_18348,G__18301_18349);

var G__18350 = cljs.core.next(seq__18286_18338__$1);
var G__18351 = null;
var G__18352 = (0);
var G__18353 = (0);
seq__18286_18323 = G__18350;
chunk__18287_18324 = G__18351;
count__18288_18325 = G__18352;
i__18289_18326 = G__18353;
=======
var seq__19450_19487 = cljs.core.seq(form);
var chunk__19451_19488 = null;
var count__19452_19489 = (0);
var i__19453_19490 = (0);
while(true){
if((i__19453_19490 < count__19452_19489)){
var vec__19454_19491 = chunk__19451_19488.cljs$core$IIndexed$_nth$arity$2(null,i__19453_19490);
var k_19492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19454_19491,(0),null);
var v_19493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19454_19491,(1),null);
var G__19457_19494 = obj;
var G__19458_19495 = cljs.core.name(k_19492);
var G__19459_19496 = v_19493;
goog.object.set(G__19457_19494,G__19458_19495,G__19459_19496);

var G__19497 = seq__19450_19487;
var G__19498 = chunk__19451_19488;
var G__19499 = count__19452_19489;
var G__19500 = (i__19453_19490 + (1));
seq__19450_19487 = G__19497;
chunk__19451_19488 = G__19498;
count__19452_19489 = G__19499;
i__19453_19490 = G__19500;
continue;
} else {
var temp__5290__auto___19501 = cljs.core.seq(seq__19450_19487);
if(temp__5290__auto___19501){
var seq__19450_19502__$1 = temp__5290__auto___19501;
if(cljs.core.chunked_seq_QMARK_(seq__19450_19502__$1)){
var c__9173__auto___19503 = cljs.core.chunk_first(seq__19450_19502__$1);
var G__19504 = cljs.core.chunk_rest(seq__19450_19502__$1);
var G__19505 = c__9173__auto___19503;
var G__19506 = cljs.core.count(c__9173__auto___19503);
var G__19507 = (0);
seq__19450_19487 = G__19504;
chunk__19451_19488 = G__19505;
count__19452_19489 = G__19506;
i__19453_19490 = G__19507;
continue;
} else {
var vec__19460_19508 = cljs.core.first(seq__19450_19502__$1);
var k_19509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19460_19508,(0),null);
var v_19510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19460_19508,(1),null);
var G__19463_19511 = obj;
var G__19464_19512 = cljs.core.name(k_19509);
var G__19465_19513 = v_19510;
goog.object.set(G__19463_19511,G__19464_19512,G__19465_19513);

var G__19514 = cljs.core.next(seq__19450_19502__$1);
var G__19515 = null;
var G__19516 = (0);
var G__19517 = (0);
seq__19450_19487 = G__19514;
chunk__19451_19488 = G__19515;
count__19452_19489 = G__19516;
i__19453_19490 = G__19517;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$inst,cljs.reader.read_date,cljs.core.cst$sym$uuid,cljs.reader.read_uuid,cljs.core.cst$sym$queue,cljs.reader.read_queue,cljs.core.cst$sym$js,cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
<<<<<<< HEAD
var G__18355 = arguments.length;
switch (G__18355) {
=======
var G__19519 = arguments.length;
switch (G__19519) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),reader);
});

<<<<<<< HEAD
cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__18356,reader){
var map__18357 = p__18356;
var map__18357__$1 = ((((!((map__18357 == null)))?((((map__18357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18357):map__18357);
var opts = map__18357__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18357__$1,cljs.core.cst$kw$eof);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,((function (map__18357,map__18357__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__18357,map__18357__$1,opts,eof))
=======
cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__19520,reader){
var map__19521 = p__19520;
var map__19521__$1 = ((((!((map__19521 == null)))?((((map__19521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19521):map__19521);
var opts = map__19521__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19521__$1,cljs.core.cst$kw$eof);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,((function (map__19521,map__19521__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__19521,map__19521__$1,opts,eof))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
<<<<<<< HEAD
var G__18361 = arguments.length;
switch (G__18361) {
=======
var G__19525 = arguments.length;
switch (G__19525) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
