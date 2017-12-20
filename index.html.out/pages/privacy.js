// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('pages.privacy');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.content_block');
goog.require('contact.hoplon');
goog.require('contact.data');
goog.require('wheel.email.hoplon');
goog.require('thedavidmeister.privacy_policy');
pages.privacy.content = (function pages$privacy$content(){
var G__25776 = (image.hoplon.default_header.cljs$core$IFn$_invoke$arity$0 ? image.hoplon.default_header.cljs$core$IFn$_invoke$arity$0() : image.hoplon.default_header.call(null));
var G__25777 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thedavidmeister.privacy_policy.policy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$entity_DASH_name,cljs.core.constantly("Dim Valley"),cljs.core.cst$kw$entity_DASH_description,cljs.core.constantly("a modern business service consultancy owned and operated by David Meister and Amelia Schmidt."),cljs.core.cst$kw$contact_DASH_details,contact.hoplon.details,cljs.core.cst$kw$unsubscribe_DASH_email_DASH_address,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(wheel.email.hoplon.email,cljs.core.cst$kw$address,cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(contact.data.milly),cljs.core.cst$kw$subject,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsubscribe from email marketing",cljs.core.cst$kw$body,"Hi, as per the Dim Valley privacy policy, I would like to unsubscribe from future email marketing."], 0))], 0))], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25776,G__25777) : hoplon.core.div.call(null,G__25776,G__25777));
});
