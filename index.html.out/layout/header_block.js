// Compiled by ClojureScript 1.9.542 {}
goog.provide('layout.header_block');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('layout.content_block');
goog.require('wheel.hoplon.google_fonts.api');
layout.header_block.header = (function layout$header_block$header(heading,tagline){
return layout.content_block.content_inner.call(null,hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2.67rem 0"], null),wheel.hoplon.google_fonts.api.font__GT_css_map.call(null,fonts.config.playfair)),hoplon.core.h1.call(null,heading,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"4rem"], null)),hoplon.core.span.call(null,tagline,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null))));
});

//# sourceMappingURL=header_block.js.map