// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.header_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.content_block');
goog.require('wheel.font.core');
layout.header_block.header = (function layout$header_block$header(heading,tagline){
var G__24736 = (function (){var G__24737 = cljs.core.cst$kw$css;
var G__24738 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"2.67rem 0"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24739 = (function (){var G__24741 = cljs.core.cst$kw$css;
var G__24742 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"0 0 1.2rem 0"], null);
var G__24743 = heading;
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(G__24741,G__24742,G__24743) : hoplon.core.h1.call(null,G__24741,G__24742,G__24743));
})();
var G__24740 = (function (){var G__24744 = cljs.core.cst$kw$css;
var G__24745 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"2.2rem",cljs.core.cst$kw$max_DASH_width,"600px",cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$margin_DASH_top,"1rem"], null);
var G__24746 = tagline;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__24744,G__24745,G__24746) : hoplon.core.span.call(null,G__24744,G__24745,G__24746));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__24737,G__24738,G__24739,G__24740) : hoplon.core.div.call(null,G__24737,G__24738,G__24739,G__24740));
})();
return layout.body_text.p(G__24736);
});
