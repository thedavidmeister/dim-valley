// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.svg');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$xlink_SLASH__STAR_,(function (elem,kw,val){
var xlink = "http://www.w3.org/1999/xlink";
return elem.setAttributeNS(xlink,cljs.core.name(kw),val);
}));
hoplon.svg.mksvg = (function hoplon$svg$mksvg(tag){
return (function() { 
var G__24018__delegate = function (args){
var vec__24015 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015,(1),null);
var xmlns = "http://www.w3.org/2000/svg";
var elem = document.createElementNS(xmlns,tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__24018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24019__i = 0, G__24019__a = new Array(arguments.length -  0);
while (G__24019__i < G__24019__a.length) {G__24019__a[G__24019__i] = arguments[G__24019__i + 0]; ++G__24019__i;}
  args = new cljs.core.IndexedSeq(G__24019__a,0,null);
} 
return G__24018__delegate.call(this,args);};
G__24018.cljs$lang$maxFixedArity = 0;
G__24018.cljs$lang$applyTo = (function (arglist__24020){
var args = cljs.core.seq(arglist__24020);
return G__24018__delegate(args);
});
G__24018.cljs$core$IFn$_invoke$arity$variadic = G__24018__delegate;
return G__24018;
})()
;
});
hoplon.svg.a = hoplon.svg.mksvg("a");
hoplon.svg.altGlyph = hoplon.svg.mksvg("altGlyph");
hoplon.svg.altGlyphDef = hoplon.svg.mksvg("altGlyphDef");
hoplon.svg.altGlyphItem = hoplon.svg.mksvg("altGlyphItem");
hoplon.svg.animate = hoplon.svg.mksvg("animate");
hoplon.svg.animateColor = hoplon.svg.mksvg("animateColor");
hoplon.svg.animateMotion = hoplon.svg.mksvg("animateMotion");
hoplon.svg.animateTransform = hoplon.svg.mksvg("animateTransform");
hoplon.svg.circle = hoplon.svg.mksvg("circle");
hoplon.svg.clipPath = hoplon.svg.mksvg("clipPath");
hoplon.svg.color_profile = hoplon.svg.mksvg("color-profile");
hoplon.svg.cursor = hoplon.svg.mksvg("cursor");
hoplon.svg.defs = hoplon.svg.mksvg("defs");
hoplon.svg.desc = hoplon.svg.mksvg("desc");
hoplon.svg.ellipse = hoplon.svg.mksvg("ellipse");
hoplon.svg.feBlend = hoplon.svg.mksvg("feBlend");
hoplon.svg.feColorMatrix = hoplon.svg.mksvg("feColorMatrix");
hoplon.svg.feComponentTransfer = hoplon.svg.mksvg("feComponentTransfer");
hoplon.svg.feComposite = hoplon.svg.mksvg("feComposite");
hoplon.svg.feConvolveMatrix = hoplon.svg.mksvg("feConvolveMatrix");
hoplon.svg.feDiffuseLighting = hoplon.svg.mksvg("feDiffuseLighting");
hoplon.svg.feDisplacementMap = hoplon.svg.mksvg("feDisplacementMap");
hoplon.svg.feDistantLight = hoplon.svg.mksvg("feDistantLight");
hoplon.svg.feFlood = hoplon.svg.mksvg("feFlood");
hoplon.svg.feFuncA = hoplon.svg.mksvg("feFuncA");
hoplon.svg.feFuncB = hoplon.svg.mksvg("feFuncB");
hoplon.svg.feFuncG = hoplon.svg.mksvg("feFuncG");
hoplon.svg.feFuncR = hoplon.svg.mksvg("feFuncR");
hoplon.svg.feGaussianBlur = hoplon.svg.mksvg("feGaussianBlur");
hoplon.svg.feImage = hoplon.svg.mksvg("feImage");
hoplon.svg.feMerge = hoplon.svg.mksvg("feMerge");
hoplon.svg.feMergeNode = hoplon.svg.mksvg("feMergeNode");
hoplon.svg.feMorphology = hoplon.svg.mksvg("feMorphology");
hoplon.svg.feOffset = hoplon.svg.mksvg("feOffset");
hoplon.svg.fePointLight = hoplon.svg.mksvg("fePointLight");
hoplon.svg.feSpecularLighting = hoplon.svg.mksvg("feSpecularLighting");
hoplon.svg.feSpotLight = hoplon.svg.mksvg("feSpotLight");
hoplon.svg.feTile = hoplon.svg.mksvg("feTile");
hoplon.svg.feTurbulence = hoplon.svg.mksvg("feTurbulence");
hoplon.svg.filter = hoplon.svg.mksvg("filter");
hoplon.svg.font = hoplon.svg.mksvg("font");
hoplon.svg.font_face = hoplon.svg.mksvg("font-face");
hoplon.svg.font_face_format = hoplon.svg.mksvg("font-face-format");
hoplon.svg.font_face_name = hoplon.svg.mksvg("font-face-name");
hoplon.svg.font_face_src = hoplon.svg.mksvg("font-face-src");
hoplon.svg.font_face_uri = hoplon.svg.mksvg("font-face-uri");
hoplon.svg.foreignObject = hoplon.svg.mksvg("foreignObject");
hoplon.svg.g = hoplon.svg.mksvg("g");
hoplon.svg.glyph = hoplon.svg.mksvg("glyph");
hoplon.svg.glyphRef = hoplon.svg.mksvg("glyphRef");
hoplon.svg.hkern = hoplon.svg.mksvg("hkern");
hoplon.svg.image = hoplon.svg.mksvg("image");
hoplon.svg.line = hoplon.svg.mksvg("line");
hoplon.svg.linearGradient = hoplon.svg.mksvg("linearGradient");
hoplon.svg.marker = hoplon.svg.mksvg("marker");
hoplon.svg.mask = hoplon.svg.mksvg("mask");
hoplon.svg.metadata = hoplon.svg.mksvg("metadata");
hoplon.svg.missing_glyph = hoplon.svg.mksvg("missing-glyph");
hoplon.svg.mpath = hoplon.svg.mksvg("mpath");
hoplon.svg.path = hoplon.svg.mksvg("path");
hoplon.svg.pattern = hoplon.svg.mksvg("pattern");
hoplon.svg.polygon = hoplon.svg.mksvg("polygon");
hoplon.svg.polyline = hoplon.svg.mksvg("polyline");
hoplon.svg.radialGradient = hoplon.svg.mksvg("radialGradient");
hoplon.svg.rect = hoplon.svg.mksvg("rect");
hoplon.svg.script = hoplon.svg.mksvg("script");
hoplon.svg.set = hoplon.svg.mksvg("set");
hoplon.svg.stop = hoplon.svg.mksvg("stop");
hoplon.svg.style = hoplon.svg.mksvg("style");
hoplon.svg.svg = hoplon.svg.mksvg("svg");
hoplon.svg.switch$ = hoplon.svg.mksvg("switch");
hoplon.svg.symbol = hoplon.svg.mksvg("symbol");
hoplon.svg.text = hoplon.svg.mksvg("text");
hoplon.svg.textPath = hoplon.svg.mksvg("textPath");
hoplon.svg.title = hoplon.svg.mksvg("title");
hoplon.svg.tref = hoplon.svg.mksvg("tref");
hoplon.svg.tspan = hoplon.svg.mksvg("tspan");
hoplon.svg.use = hoplon.svg.mksvg("use");
hoplon.svg.view = hoplon.svg.mksvg("view");
hoplon.svg.vkern = hoplon.svg.mksvg("vkern");
