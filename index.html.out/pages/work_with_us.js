// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('pages.work_with_us');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.header_block');
goog.require('layout.content_block');
goog.require('layout.spacer');
goog.require('image.hoplon');
goog.require('layout.body_text');
goog.require('wheel.link.hoplon');
pages.work_with_us.link = (function pages$work_with_us$link(){
var G__24747 = cljs.core.cst$kw$handler;
var G__24748 = cljs.core.cst$kw$work_DASH_with_DASH_us;
var G__24749 = "Check our current rates and availability.";
return route.hoplon.link(G__24747,G__24748,G__24749);
});
pages.work_with_us.content = (function pages$work_with_us$content(){
var G__24750 = image.hoplon.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$src,"https://s3-ap-southeast-2.amazonaws.com/estimatework/collab.jpeg"], 0));
var G__24751 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Work with us") : hoplon.core.h1.call(null,"Work with us")),(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Availability") : hoplon.core.h2.call(null,"Availability")),layout.body_text.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("We are both available for short-medium term contracts up to 3 days per week.") : hoplon.core.strong.call(null,"We are both available for short-medium term contracts up to 3 days per week."))], 0)),layout.body_text.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Milly is available for advocacy and community engagements.") : hoplon.core.strong.call(null,"Milly is available for advocacy and community engagements."))], 0)),layout.body_text.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["We typically take on commercial engagements ranging from several days to 3-6 months."], 0)),our_services.hoplon.service_list()], 0));
var G__24752 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Rates") : hoplon.core.h2.call(null,"Rates")),layout.body_text.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Our hourly rate:") : hoplon.core.strong.call(null,"Our hourly rate:"))," $AUD 120 + GST",(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),(hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Our day rate (prebooked):") : hoplon.core.strong.call(null,"Our day rate (prebooked):"))," $AUD 800 + GST"], 0)),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24750,G__24751,G__24752) : hoplon.core.div.call(null,G__24750,G__24751,G__24752));
});
