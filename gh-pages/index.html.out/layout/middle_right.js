// Compiled by ClojureScript 1.9.521 {}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
return hoplon.core.td.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"25vw",new cljs.core.Keyword(null,"height","height",1025178622),"10vh"], null));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
return hoplon.core.tr.call(null,layout.middle_right.spacer_td.call(null),hoplon.core.td.call(null));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
return hoplon.core.tr.call(null,hoplon.core.td.call(null),hoplon.core.td.call(null,content));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
return hoplon.core.table.call(null,new cljs.core.Keyword(null,"cellpadding","cellpadding",-1752450238),(0),new cljs.core.Keyword(null,"cellspacing","cellspacing",357415863),(0),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),layout.middle_right.spacer_tr.call(null),layout.middle_right.content_tr.call(null,children),layout.middle_right.spacer_tr.call(null));
});

//# sourceMappingURL=middle_right.js.map