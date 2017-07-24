// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('route.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.route.core');
route.config.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 7, ["dave",cljs.core.cst$kw$dave,"milly",cljs.core.cst$kw$milly,"legal",cljs.core.cst$kw$legal,"github",cljs.core.cst$kw$github,"work-with-us",cljs.core.cst$kw$work_DASH_with_DASH_us,"contact",cljs.core.cst$kw$contact,"about",cljs.core.cst$kw$about], null)], null);
if(cljs.core.truth_(wheel.route.core.routes_QMARK_(route.config.routes))){
} else {
throw (new Error("Assert failed: (wheel.route.core/routes? routes)"));
}
route.config.fallback_handler = cljs.core.cst$kw$about;
