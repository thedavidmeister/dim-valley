// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('route.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.route.core');
goog.require('javelin.core');
if(typeof route.state.history !== 'undefined'){
} else {
route.state.history = wheel.route.core.history_cell();
}
