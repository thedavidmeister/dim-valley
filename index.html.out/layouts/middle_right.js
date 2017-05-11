// Compiled by ClojureScript 1.9.293 {}
goog.provide('layouts.middle_right');
goog.require('cljs.core');
goog.require('hoplon.core');
layouts.middle_right.spacer_td = (function layouts$middle_right$spacer_td(){
return hoplon.core.td.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"5vw",new cljs.core.Keyword(null,"height","height",1025178622),"5vh"], null));
});
layouts.middle_right.spacer_tr = (function layouts$middle_right$spacer_tr(){
return hoplon.core.tr.call(null,layouts.middle_right.spacer_td.call(null),hoplon.core.td.call(null));
});
layouts.middle_right.content_tr = (function layouts$middle_right$content_tr(content){
return hoplon.core.tr.call(null,hoplon.core.td.call(null),hoplon.core.td.call(null,content));
});
layouts.middle_right.middle_right = (function layouts$middle_right$middle_right(children){
return hoplon.core.table.call(null,new cljs.core.Keyword(null,"cellpadding","cellpadding",-1752450238),(0),new cljs.core.Keyword(null,"cellspacing","cellspacing",357415863),(0),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),layouts.middle_right.spacer_tr.call(null),layouts.middle_right.content_tr.call(null,children),layouts.middle_right.spacer_tr.call(null));
});

//# sourceMappingURL=middle_right.js.map