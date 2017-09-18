// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('contact.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('contact.data');
goog.require('wheel.phone.hoplon');
goog.require('wheel.address.hoplon');
contact.hoplon.details = (function contact$hoplon$details(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25543 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Milly: ") : hoplon.core.strong.call(null,"Milly: "));
var G__25544 = wheel.phone.hoplon.phone(cljs.core.cst$kw$phone.cljs$core$IFn$_invoke$arity$1(contact.data.milly));
var G__25545 = " | ";
var G__25546 = cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(contact.data.milly);
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$4(G__25543,G__25544,G__25545,G__25546) : hoplon.core.p.call(null,G__25543,G__25544,G__25545,G__25546));
})(),(function (){var G__25547 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Dave: ") : hoplon.core.strong.call(null,"Dave: "));
var G__25548 = wheel.phone.hoplon.phone(cljs.core.cst$kw$phone.cljs$core$IFn$_invoke$arity$1(contact.data.dave));
var G__25549 = " | ";
var G__25550 = cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(contact.data.dave);
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$4(G__25547,G__25548,G__25549,G__25550) : hoplon.core.p.call(null,G__25547,G__25548,G__25549,G__25550));
})(),(function (){var G__25551 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("We are based at ") : hoplon.core.strong.call(null,"We are based at "));
var G__25552 = wheel.address.hoplon.simple(contact.data.address);
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__25551,G__25552) : hoplon.core.p.call(null,G__25551,G__25552));
})()], null);
});
