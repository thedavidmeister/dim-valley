// Compiled by ClojureScript 1.9.293 {}
goog.provide('fonts.google_fonts');
goog.require('cljs.core');
goog.require('hoplon.core');
fonts.google_fonts.fonts = (function fonts$google_fonts$fonts(fs){
var name__GT_uri_name = (function (p1__9272_SHARP_){
return clojure.string.replace.call(null,p1__9272_SHARP_," ","+");
});
var family_string = clojure.string.join.call(null,"|",cljs.core.map.call(null,cljs.core.comp.call(null,name__GT_uri_name,new cljs.core.Keyword(null,"name","name",1843675177)),fs));
var f__GT_style_string = ((function (name__GT_uri_name,family_string){
return (function (p1__9273_SHARP_){
return [cljs.core.str("font-family: '"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__9273_SHARP_)),cljs.core.str("', "),cljs.core.str(new cljs.core.Keyword(null,"fallback","fallback",761637929).cljs$core$IFn$_invoke$arity$1(p1__9273_SHARP_)),cljs.core.str(";")].join('');
});})(name__GT_uri_name,family_string))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("https://fonts.googleapis.com/css?family="),cljs.core.str(family_string)].join(''),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"type","type",1174270348),"text/css"),hoplon.core.style.call(null,clojure.string.join.call(null," ",cljs.core.map.call(null,f__GT_style_string,fs)))], null);
});

//# sourceMappingURL=google_fonts.js.map