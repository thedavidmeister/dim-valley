// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('bidi.schema');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('bidi.bidi');
goog.require('schema.core');
bidi.schema.Path = schema.core.Str;
bidi.schema.valid_qualifier_function_QMARK_ = (function bidi$schema$valid_qualifier_function_QMARK_(qual){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.long$,bidi.bidi.uuid,cljs.core.keyword], true),qual);
});
bidi.schema.PatternSegment = schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Regex,schema.core.Keyword,schema.core.pair(schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (p1__20717_SHARP_){
return cljs.core.fn_QMARK_(p1__20717_SHARP_);
}),schema.core.pred.cljs$core$IFn$_invoke$arity$1(bidi.schema.valid_qualifier_function_QMARK_),cljs.core.cst$kw$else,schema.core.Regex], 0)),"qual",schema.core.Keyword,"id")], 0));
bidi.schema.MethodGuard = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$get,cljs.core.cst$kw$post,cljs.core.cst$kw$put,cljs.core.cst$kw$patch,cljs.core.cst$kw$delete,cljs.core.cst$kw$head,cljs.core.cst$kw$options], 0));
bidi.schema.GeneralGuard = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword,schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.cst$sym$arg0)], null)], null))], 0))]);
/**
 * 
 */
bidi.schema.SegmentedPattern = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema.core.schema_with_name(schema.core.constrained.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.schema.PatternSegment], null),cljs.core.not_empty,cljs.core.cst$sym$not_DASH_empty),cljs.core.cst$sym$SegmentedPattern),cljs.core.assoc,cljs.core.cst$kw$ns,cljs.core.cst$sym$bidi$schema);
/**
 * 
 */
bidi.schema.AlternatesSet = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema.core.schema_with_name(schema.core.constrained.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([schema.core.recursive(new cljs.core.Var(function(){return bidi.schema.Pattern;},cljs.core.cst$sym$bidi$schema_SLASH_Pattern,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$declared,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$bidi$schema,cljs.core.cst$sym$Pattern,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e7g/9txbbm/index.html.out/bidi/schema.cljc",17,1,29,true,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(bidi.schema.Pattern)?bidi.schema.Pattern.cljs$lang$test:null)])))], true),cljs.core.not_empty,cljs.core.cst$sym$not_DASH_empty),cljs.core.cst$sym$AlternatesSet),cljs.core.assoc,cljs.core.cst$kw$ns,cljs.core.cst$sym$bidi$schema);
/**
 * 
 */
bidi.schema.DeprecatedAlternates = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema.core.schema_with_name(schema.core.record_STAR_(bidi.bidi.Alternates,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.recursive(new cljs.core.Var(function(){return bidi.schema.Pattern;},cljs.core.cst$sym$bidi$schema_SLASH_Pattern,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$declared,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$bidi$schema,cljs.core.cst$sym$Pattern,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e7g/9txbbm/index.html.out/bidi/schema.cljc",17,1,29,true,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(bidi.schema.Pattern)?bidi.schema.Pattern.cljs$lang$test:null)])))], null)], null),(function (p1__17652__17653__auto__){
return (map__GT_bidi.bidi.Alternates.cljs$core$IFn$_invoke$arity$1 ? map__GT_bidi.bidi.Alternates.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__17652__17653__auto__)) : map__GT_bidi.bidi.Alternates.call(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__17652__17653__auto__)));
})),cljs.core.cst$sym$DeprecatedAlternates),cljs.core.assoc,cljs.core.cst$kw$ns,cljs.core.cst$sym$bidi$schema);
bidi.schema.Pattern = schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bidi.schema.AlternatesSet,bidi.schema.DeprecatedAlternates,bidi.schema.Path,bidi.schema.SegmentedPattern,bidi.schema.MethodGuard,bidi.schema.GeneralGuard,schema.core.Bool], 0));
bidi.schema.Matched = schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.record_QMARK_),schema.core.Symbol,schema.core.Keyword,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.recursive(new cljs.core.Var(function(){return bidi.schema.RoutePair;},cljs.core.cst$sym$bidi$schema_SLASH_RoutePair,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$export,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$declared,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$bidi$schema,cljs.core.cst$sym$RoutePair,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e7g/9txbbm/index.html.out/bidi/schema.cljc",28,true,1,47,true,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(bidi.schema.RoutePair)?bidi.schema.RoutePair.cljs$lang$test:null)])))], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([bidi.schema.Pattern,schema.core.recursive(new cljs.core.Var(function(){return bidi.schema.Matched;},cljs.core.cst$sym$bidi$schema_SLASH_Matched,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$ns,cljs.core.cst$sym$bidi$schema,cljs.core.cst$kw$doc,null,cljs.core.cst$kw$file,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e7g/9txbbm/index.html.out/bidi/schema.cljc",cljs.core.cst$kw$line,49,cljs.core.cst$kw$column,1,cljs.core.cst$kw$name,cljs.core.cst$sym$Matched,cljs.core.cst$kw$test,(cljs.core.truth_(bidi.schema.Matched)?bidi.schema.Matched.cljs$lang$test:null),cljs.core.cst$kw$arglists,cljs.core.List.EMPTY], null)))]),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.cst$sym$arg0)], null)], null))], 0));
bidi.schema.RoutePair = schema.core.pair(bidi.schema.Pattern,"Pattern",bidi.schema.Matched,"Matched");
goog.exportSymbol('bidi.schema.RoutePair', bidi.schema.RoutePair);
