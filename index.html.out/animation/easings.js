// Compiled by ClojureScript 1.9.521 {}
goog.provide('animation.easings');
goog.require('cljs.core');
goog.require('cljsjs.js_yaml');
goog.require('camel_snake_kebab.core');
animation.easings.easings = (function (){var G__14505 = "- name: linear\n- name: easeInSine\n  css:  cubic-bezier(0.47, 0, 0.745, 0.715)\n- name: easeOutSine\n  css:  cubic-bezier(0.39, 0.575, 0.565, 1)\n- name: easeInOutSine\n  css:  cubic-bezier(0.445, 0.05, 0.55, 0.95)\n- name: easeInQuad\n  css:  cubic-bezier(0.55, 0.085, 0.68, 0.53)\n- name: easeOutQuad\n  css:  cubic-bezier(0.25, 0.46, 0.45, 0.94)\n- name: easeInOutQuad\n  css:  cubic-bezier(0.455, 0.03, 0.515, 0.955)\n- name: easeInCubic\n  css:  cubic-bezier(0.55, 0.055, 0.675, 0.19)\n- name: easeOutCubic\n  css:  cubic-bezier(0.215, 0.61, 0.355, 1)\n- name: easeInOutCubic\n  css:  cubic-bezier(0.645, 0.045, 0.355, 1)\n- name: easeInQuart\n  css:  cubic-bezier(0.895, 0.03, 0.685, 0.22)\n- name: easeOutQuart\n  css:  cubic-bezier(0.165, 0.84, 0.44, 1)\n- name: easeInOutQuart\n  css:  cubic-bezier(0.77, 0, 0.175, 1)\n- name: easeInQuint\n  css:  cubic-bezier(0.755, 0.05, 0.855, 0.06)\n- name: easeOutQuint\n  css:  cubic-bezier(0.23, 1, 0.32, 1)\n- name: easeInOutQuint\n  css:  cubic-bezier(0.86, 0, 0.07, 1)\n- name: easeInExpo\n  css:  cubic-bezier(0.95, 0.05, 0.795, 0.035)\n- name: easeOutExpo\n  css:  cubic-bezier(0.19, 1, 0.22, 1)\n- name: easeInOutExpo\n  css:  cubic-bezier(1, 0, 0, 1)\n- name: easeInCirc\n  css:  cubic-bezier(0.6, 0.04, 0.98, 0.335)\n- name: easeOutCirc\n  css:  cubic-bezier(0.075, 0.82, 0.165, 1)\n- name: easeInOutCirc\n  css:  cubic-bezier(0.785, 0.135, 0.15, 0.86)\n- name: easeInBack\n  css:  cubic-bezier(0.6, -0.28, 0.735, 0.045)\n- name: easeOutBack\n  css:  cubic-bezier(0.175, 0.885, 0.32, 1.275)\n- name: easeInOutBack\n  css:  cubic-bezier(0.68, -0.55, 0.265, 1.55)\n- name: easeInElastic\n  css:  no\n- name: easeOutElastic\n  css:  no\n- name: easeInOutElastic\n  css:  no\n- name: easeInBounce\n  css:  no\n- name: easeOutBounce\n  css:  no\n- name: easeInOutBounce\n  css:  no\n";
var G__14505__$1 = (((G__14505 == null))?null:jsyaml.load(G__14505));
var G__14505__$2 = (((G__14505__$1 == null))?null:cljs.core.js__GT_clj.call(null,G__14505__$1));
var G__14505__$3 = (((G__14505__$2 == null))?null:cljs.core.remove.call(null,((function (G__14505,G__14505__$1,G__14505__$2){
return (function (e){
var css = cljs.core.get.call(null,e,"css");
return (cljs.core._EQ_.call(null,"no",css)) || ((css == null));
});})(G__14505,G__14505__$1,G__14505__$2))
,G__14505__$2));
var G__14505__$4 = (((G__14505__$3 == null))?null:cljs.core.map.call(null,((function (G__14505,G__14505__$1,G__14505__$2,G__14505__$3){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,cljs.core.get.call(null,e,"name")),cljs.core.get.call(null,e,"css")], null);
});})(G__14505,G__14505__$1,G__14505__$2,G__14505__$3))
,G__14505__$3));
if((G__14505__$4 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14505__$4);
}
})();

//# sourceMappingURL=easings.js.map