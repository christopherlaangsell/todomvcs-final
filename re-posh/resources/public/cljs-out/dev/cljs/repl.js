// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27922){
var map__27923 = p__27922;
var map__27923__$1 = (((((!((map__27923 == null))))?(((((map__27923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27923):map__27923);
var m = map__27923__$1;
var n = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27925_27957 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27926_27958 = null;
var count__27927_27959 = (0);
var i__27928_27960 = (0);
while(true){
if((i__27928_27960 < count__27927_27959)){
var f_27961 = cljs.core._nth.call(null,chunk__27926_27958,i__27928_27960);
cljs.core.println.call(null,"  ",f_27961);


var G__27962 = seq__27925_27957;
var G__27963 = chunk__27926_27958;
var G__27964 = count__27927_27959;
var G__27965 = (i__27928_27960 + (1));
seq__27925_27957 = G__27962;
chunk__27926_27958 = G__27963;
count__27927_27959 = G__27964;
i__27928_27960 = G__27965;
continue;
} else {
var temp__5457__auto___27966 = cljs.core.seq.call(null,seq__27925_27957);
if(temp__5457__auto___27966){
var seq__27925_27967__$1 = temp__5457__auto___27966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27925_27967__$1)){
var c__4550__auto___27968 = cljs.core.chunk_first.call(null,seq__27925_27967__$1);
var G__27969 = cljs.core.chunk_rest.call(null,seq__27925_27967__$1);
var G__27970 = c__4550__auto___27968;
var G__27971 = cljs.core.count.call(null,c__4550__auto___27968);
var G__27972 = (0);
seq__27925_27957 = G__27969;
chunk__27926_27958 = G__27970;
count__27927_27959 = G__27971;
i__27928_27960 = G__27972;
continue;
} else {
var f_27973 = cljs.core.first.call(null,seq__27925_27967__$1);
cljs.core.println.call(null,"  ",f_27973);


var G__27974 = cljs.core.next.call(null,seq__27925_27967__$1);
var G__27975 = null;
var G__27976 = (0);
var G__27977 = (0);
seq__27925_27957 = G__27974;
chunk__27926_27958 = G__27975;
count__27927_27959 = G__27976;
i__27928_27960 = G__27977;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27978 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27978);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27978)))?cljs.core.second.call(null,arglists_27978):arglists_27978));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27929_27979 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27930_27980 = null;
var count__27931_27981 = (0);
var i__27932_27982 = (0);
while(true){
if((i__27932_27982 < count__27931_27981)){
var vec__27943_27983 = cljs.core._nth.call(null,chunk__27930_27980,i__27932_27982);
var name_27984 = cljs.core.nth.call(null,vec__27943_27983,(0),null);
var map__27946_27985 = cljs.core.nth.call(null,vec__27943_27983,(1),null);
var map__27946_27986__$1 = (((((!((map__27946_27985 == null))))?(((((map__27946_27985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27946_27985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27946_27985):map__27946_27985);
var doc_27987 = cljs.core.get.call(null,map__27946_27986__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27988 = cljs.core.get.call(null,map__27946_27986__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27984);

cljs.core.println.call(null," ",arglists_27988);

if(cljs.core.truth_(doc_27987)){
cljs.core.println.call(null," ",doc_27987);
} else {
}


var G__27989 = seq__27929_27979;
var G__27990 = chunk__27930_27980;
var G__27991 = count__27931_27981;
var G__27992 = (i__27932_27982 + (1));
seq__27929_27979 = G__27989;
chunk__27930_27980 = G__27990;
count__27931_27981 = G__27991;
i__27932_27982 = G__27992;
continue;
} else {
var temp__5457__auto___27993 = cljs.core.seq.call(null,seq__27929_27979);
if(temp__5457__auto___27993){
var seq__27929_27994__$1 = temp__5457__auto___27993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27929_27994__$1)){
var c__4550__auto___27995 = cljs.core.chunk_first.call(null,seq__27929_27994__$1);
var G__27996 = cljs.core.chunk_rest.call(null,seq__27929_27994__$1);
var G__27997 = c__4550__auto___27995;
var G__27998 = cljs.core.count.call(null,c__4550__auto___27995);
var G__27999 = (0);
seq__27929_27979 = G__27996;
chunk__27930_27980 = G__27997;
count__27931_27981 = G__27998;
i__27932_27982 = G__27999;
continue;
} else {
var vec__27948_28000 = cljs.core.first.call(null,seq__27929_27994__$1);
var name_28001 = cljs.core.nth.call(null,vec__27948_28000,(0),null);
var map__27951_28002 = cljs.core.nth.call(null,vec__27948_28000,(1),null);
var map__27951_28003__$1 = (((((!((map__27951_28002 == null))))?(((((map__27951_28002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27951_28002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27951_28002):map__27951_28002);
var doc_28004 = cljs.core.get.call(null,map__27951_28003__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28005 = cljs.core.get.call(null,map__27951_28003__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28001);

cljs.core.println.call(null," ",arglists_28005);

if(cljs.core.truth_(doc_28004)){
cljs.core.println.call(null," ",doc_28004);
} else {
}


var G__28006 = cljs.core.next.call(null,seq__27929_27994__$1);
var G__28007 = null;
var G__28008 = (0);
var G__28009 = (0);
seq__27929_27979 = G__28006;
chunk__27930_27980 = G__28007;
count__27931_27981 = G__28008;
i__27932_27982 = G__28009;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__27953 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27954 = null;
var count__27955 = (0);
var i__27956 = (0);
while(true){
if((i__27956 < count__27955)){
var role = cljs.core._nth.call(null,chunk__27954,i__27956);
var temp__5457__auto___28010__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28010__$1)){
var spec_28011 = temp__5457__auto___28010__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28011));
} else {
}


var G__28012 = seq__27953;
var G__28013 = chunk__27954;
var G__28014 = count__27955;
var G__28015 = (i__27956 + (1));
seq__27953 = G__28012;
chunk__27954 = G__28013;
count__27955 = G__28014;
i__27956 = G__28015;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__27953);
if(temp__5457__auto____$1){
var seq__27953__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27953__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27953__$1);
var G__28016 = cljs.core.chunk_rest.call(null,seq__27953__$1);
var G__28017 = c__4550__auto__;
var G__28018 = cljs.core.count.call(null,c__4550__auto__);
var G__28019 = (0);
seq__27953 = G__28016;
chunk__27954 = G__28017;
count__27955 = G__28018;
i__27956 = G__28019;
continue;
} else {
var role = cljs.core.first.call(null,seq__27953__$1);
var temp__5457__auto___28020__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28020__$2)){
var spec_28021 = temp__5457__auto___28020__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28021));
} else {
}


var G__28022 = cljs.core.next.call(null,seq__27953__$1);
var G__28023 = null;
var G__28024 = (0);
var G__28025 = (0);
seq__27953 = G__28022;
chunk__27954 = G__28023;
count__27955 = G__28024;
i__27956 = G__28025;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28026 = cljs.core.conj.call(null,via,t);
var G__28027 = cljs.core.ex_cause.call(null,t);
via = G__28026;
t = G__28027;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28030 = datafied_throwable;
var map__28030__$1 = (((((!((map__28030 == null))))?(((((map__28030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28030):map__28030);
var via = cljs.core.get.call(null,map__28030__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28030__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28030__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28031 = cljs.core.last.call(null,via);
var map__28031__$1 = (((((!((map__28031 == null))))?(((((map__28031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28031):map__28031);
var type = cljs.core.get.call(null,map__28031__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28031__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28031__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28032 = data;
var map__28032__$1 = (((((!((map__28032 == null))))?(((((map__28032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28032):map__28032);
var problems = cljs.core.get.call(null,map__28032__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28032__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28032__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28033 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28033__$1 = (((((!((map__28033 == null))))?(((((map__28033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28033):map__28033);
var top_data = map__28033__$1;
var source = cljs.core.get.call(null,map__28033__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28038 = phase;
var G__28038__$1 = (((G__28038 instanceof cljs.core.Keyword))?G__28038.fqn:null);
switch (G__28038__$1) {
case "read-source":
var map__28039 = data;
var map__28039__$1 = (((((!((map__28039 == null))))?(((((map__28039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28039):map__28039);
var line = cljs.core.get.call(null,map__28039__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28039__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28041 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28041__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28041,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28041);
var G__28041__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28041__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28041__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28041__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28041__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28042 = top_data;
var G__28042__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28042,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28042);
var G__28042__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28042__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28042__$1);
var G__28042__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28042__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28042__$2);
var G__28042__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28042__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28042__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28042__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28042__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28043 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28043,(0),null);
var method = cljs.core.nth.call(null,vec__28043,(1),null);
var file = cljs.core.nth.call(null,vec__28043,(2),null);
var line = cljs.core.nth.call(null,vec__28043,(3),null);
var G__28046 = top_data;
var G__28046__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28046,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28046);
var G__28046__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28046__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28046__$1);
var G__28046__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__28046__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28046__$2);
var G__28046__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28046__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28046__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28046__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28046__$4;
}

break;
case "execution":
var vec__28047 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28047,(0),null);
var method = cljs.core.nth.call(null,vec__28047,(1),null);
var file = cljs.core.nth.call(null,vec__28047,(2),null);
var line = cljs.core.nth.call(null,vec__28047,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__28047,source__$1,method,file,line,G__28038,G__28038__$1,map__28030,map__28030__$1,via,trace,phase,map__28031,map__28031__$1,type,message,data,map__28032,map__28032__$1,problems,fn,caller,map__28033,map__28033__$1,top_data,source){
return (function (p1__28029_SHARP_){
var or__4131__auto__ = (p1__28029_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28029_SHARP_);
}
});})(vec__28047,source__$1,method,file,line,G__28038,G__28038__$1,map__28030,map__28030__$1,via,trace,phase,map__28031,map__28031__$1,type,message,data,map__28032,map__28032__$1,problems,fn,caller,map__28033,map__28033__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28050 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28050__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28050,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28050);
var G__28050__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28050__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28050__$1);
var G__28050__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__28050__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28050__$2);
var G__28050__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28050__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28050__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28050__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28050__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28038__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28054){
var map__28055 = p__28054;
var map__28055__$1 = (((((!((map__28055 == null))))?(((((map__28055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28055):map__28055);
var triage_data = map__28055__$1;
var phase = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28057 = phase;
var G__28057__$1 = (((G__28057 instanceof cljs.core.Keyword))?G__28057.fqn:null);
switch (G__28057__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28058_28067 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28059_28068 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28060_28069 = true;
var _STAR_print_fn_STAR__temp_val__28061_28070 = ((function (_STAR_print_newline_STAR__orig_val__28058_28067,_STAR_print_fn_STAR__orig_val__28059_28068,_STAR_print_newline_STAR__temp_val__28060_28069,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28058_28067,_STAR_print_fn_STAR__orig_val__28059_28068,_STAR_print_newline_STAR__temp_val__28060_28069,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28060_28069;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28061_28070;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28058_28067,_STAR_print_fn_STAR__orig_val__28059_28068,_STAR_print_newline_STAR__temp_val__28060_28069,_STAR_print_fn_STAR__temp_val__28061_28070,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28058_28067,_STAR_print_fn_STAR__orig_val__28059_28068,_STAR_print_newline_STAR__temp_val__28060_28069,_STAR_print_fn_STAR__temp_val__28061_28070,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28052_SHARP_){
return cljs.core.dissoc.call(null,p1__28052_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28058_28067,_STAR_print_fn_STAR__orig_val__28059_28068,_STAR_print_newline_STAR__temp_val__28060_28069,_STAR_print_fn_STAR__temp_val__28061_28070,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28058_28067,_STAR_print_fn_STAR__orig_val__28059_28068,_STAR_print_newline_STAR__temp_val__28060_28069,_STAR_print_fn_STAR__temp_val__28061_28070,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28059_28068;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28058_28067;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28062_28071 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28063_28072 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28064_28073 = true;
var _STAR_print_fn_STAR__temp_val__28065_28074 = ((function (_STAR_print_newline_STAR__orig_val__28062_28071,_STAR_print_fn_STAR__orig_val__28063_28072,_STAR_print_newline_STAR__temp_val__28064_28073,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28062_28071,_STAR_print_fn_STAR__orig_val__28063_28072,_STAR_print_newline_STAR__temp_val__28064_28073,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28064_28073;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28065_28074;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28062_28071,_STAR_print_fn_STAR__orig_val__28063_28072,_STAR_print_newline_STAR__temp_val__28064_28073,_STAR_print_fn_STAR__temp_val__28065_28074,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28062_28071,_STAR_print_fn_STAR__orig_val__28063_28072,_STAR_print_newline_STAR__temp_val__28064_28073,_STAR_print_fn_STAR__temp_val__28065_28074,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28053_SHARP_){
return cljs.core.dissoc.call(null,p1__28053_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28062_28071,_STAR_print_fn_STAR__orig_val__28063_28072,_STAR_print_newline_STAR__temp_val__28064_28073,_STAR_print_fn_STAR__temp_val__28065_28074,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28062_28071,_STAR_print_fn_STAR__orig_val__28063_28072,_STAR_print_newline_STAR__temp_val__28064_28073,_STAR_print_fn_STAR__temp_val__28065_28074,sb__4661__auto__,G__28057,G__28057__$1,loc,class_name,simple_class,cause_type,format,map__28055,map__28055__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28063_28072;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28062_28071;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28057__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
