// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('contact.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('contact.data');
goog.require('wheel.email.hoplon');
goog.require('wheel.phone.hoplon');
goog.require('wheel.address.hoplon');
contact.hoplon.details = (function contact$hoplon$details(){
var email_subject = "Dim Valley enquiry";
var email_body = "Hi, I saw the Dim Valley website and wanted to reach out\u2026";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25660 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Milly: ") : hoplon.core.strong.call(null,"Milly: "));
var G__25661 = wheel.phone.hoplon.phone(cljs.core.cst$kw$phone.cljs$core$IFn$_invoke$arity$1(contact.data.milly));
var G__25662 = " | ";
var G__25663 = wheel.email.hoplon.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$address,cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(contact.data.milly),cljs.core.cst$kw$subject,email_subject,cljs.core.cst$kw$body,email_body], 0));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$4(G__25660,G__25661,G__25662,G__25663) : hoplon.core.p.call(null,G__25660,G__25661,G__25662,G__25663));
})(),(function (){var G__25664 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Dave: ") : hoplon.core.strong.call(null,"Dave: "));
var G__25665 = wheel.phone.hoplon.phone(cljs.core.cst$kw$phone.cljs$core$IFn$_invoke$arity$1(contact.data.dave));
var G__25666 = " | ";
var G__25667 = wheel.email.hoplon.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$address,cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(contact.data.dave),cljs.core.cst$kw$subject,email_subject,cljs.core.cst$kw$body,email_body], 0));
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$4(G__25664,G__25665,G__25666,G__25667) : hoplon.core.p.call(null,G__25664,G__25665,G__25666,G__25667));
})(),(function (){var G__25668 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("We are based at ") : hoplon.core.strong.call(null,"We are based at "));
var G__25669 = wheel.address.hoplon.simple(contact.data.address);
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__25668,G__25669) : hoplon.core.p.call(null,G__25668,G__25669));
})()], null);
});
