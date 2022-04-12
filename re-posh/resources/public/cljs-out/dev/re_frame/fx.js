// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__16936 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16937 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16937;

try{try{var seq__16938 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__16939 = null;
var count__16940 = (0);
var i__16941 = (0);
while(true){
if((i__16941 < count__16940)){
var vec__16948 = cljs.core._nth.call(null,chunk__16939,i__16941);
var effect_key = cljs.core.nth.call(null,vec__16948,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16948,(1),null);
var temp__5455__auto___16970 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16970)){
var effect_fn_16971 = temp__5455__auto___16970;
effect_fn_16971.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16972 = seq__16938;
var G__16973 = chunk__16939;
var G__16974 = count__16940;
var G__16975 = (i__16941 + (1));
seq__16938 = G__16972;
chunk__16939 = G__16973;
count__16940 = G__16974;
i__16941 = G__16975;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16938);
if(temp__5457__auto__){
var seq__16938__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16938__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__16938__$1);
var G__16976 = cljs.core.chunk_rest.call(null,seq__16938__$1);
var G__16977 = c__4550__auto__;
var G__16978 = cljs.core.count.call(null,c__4550__auto__);
var G__16979 = (0);
seq__16938 = G__16976;
chunk__16939 = G__16977;
count__16940 = G__16978;
i__16941 = G__16979;
continue;
} else {
var vec__16951 = cljs.core.first.call(null,seq__16938__$1);
var effect_key = cljs.core.nth.call(null,vec__16951,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16951,(1),null);
var temp__5455__auto___16980 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16980)){
var effect_fn_16981 = temp__5455__auto___16980;
effect_fn_16981.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16982 = cljs.core.next.call(null,seq__16938__$1);
var G__16983 = null;
var G__16984 = (0);
var G__16985 = (0);
seq__16938 = G__16982;
chunk__16939 = G__16983;
count__16940 = G__16984;
i__16941 = G__16985;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16758__auto___16986 = re_frame.interop.now.call(null);
var duration__16759__auto___16987 = (end__16758__auto___16986 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16759__auto___16987,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16758__auto___16986);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16936;
}} else {
var seq__16954 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__16955 = null;
var count__16956 = (0);
var i__16957 = (0);
while(true){
if((i__16957 < count__16956)){
var vec__16964 = cljs.core._nth.call(null,chunk__16955,i__16957);
var effect_key = cljs.core.nth.call(null,vec__16964,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16964,(1),null);
var temp__5455__auto___16988 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16988)){
var effect_fn_16989 = temp__5455__auto___16988;
effect_fn_16989.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__16990 = seq__16954;
var G__16991 = chunk__16955;
var G__16992 = count__16956;
var G__16993 = (i__16957 + (1));
seq__16954 = G__16990;
chunk__16955 = G__16991;
count__16956 = G__16992;
i__16957 = G__16993;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16954);
if(temp__5457__auto__){
var seq__16954__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16954__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__16954__$1);
var G__16994 = cljs.core.chunk_rest.call(null,seq__16954__$1);
var G__16995 = c__4550__auto__;
var G__16996 = cljs.core.count.call(null,c__4550__auto__);
var G__16997 = (0);
seq__16954 = G__16994;
chunk__16955 = G__16995;
count__16956 = G__16996;
i__16957 = G__16997;
continue;
} else {
var vec__16967 = cljs.core.first.call(null,seq__16954__$1);
var effect_key = cljs.core.nth.call(null,vec__16967,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16967,(1),null);
var temp__5455__auto___16998 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16998)){
var effect_fn_16999 = temp__5455__auto___16998;
effect_fn_16999.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__17000 = cljs.core.next.call(null,seq__16954__$1);
var G__17001 = null;
var G__17002 = (0);
var G__17003 = (0);
seq__16954 = G__17000;
chunk__16955 = G__17001;
count__16956 = G__17002;
i__16957 = G__17003;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__17004 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__17005 = null;
var count__17006 = (0);
var i__17007 = (0);
while(true){
if((i__17007 < count__17006)){
var map__17012 = cljs.core._nth.call(null,chunk__17005,i__17007);
var map__17012__$1 = (((((!((map__17012 == null))))?(((((map__17012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17012):map__17012);
var effect = map__17012__$1;
var ms = cljs.core.get.call(null,map__17012__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__17012__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__17004,chunk__17005,count__17006,i__17007,map__17012,map__17012__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__17004,chunk__17005,count__17006,i__17007,map__17012,map__17012__$1,effect,ms,dispatch))
,ms);
}


var G__17016 = seq__17004;
var G__17017 = chunk__17005;
var G__17018 = count__17006;
var G__17019 = (i__17007 + (1));
seq__17004 = G__17016;
chunk__17005 = G__17017;
count__17006 = G__17018;
i__17007 = G__17019;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17004);
if(temp__5457__auto__){
var seq__17004__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17004__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17004__$1);
var G__17020 = cljs.core.chunk_rest.call(null,seq__17004__$1);
var G__17021 = c__4550__auto__;
var G__17022 = cljs.core.count.call(null,c__4550__auto__);
var G__17023 = (0);
seq__17004 = G__17020;
chunk__17005 = G__17021;
count__17006 = G__17022;
i__17007 = G__17023;
continue;
} else {
var map__17014 = cljs.core.first.call(null,seq__17004__$1);
var map__17014__$1 = (((((!((map__17014 == null))))?(((((map__17014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17014):map__17014);
var effect = map__17014__$1;
var ms = cljs.core.get.call(null,map__17014__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__17014__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__17004,chunk__17005,count__17006,i__17007,map__17014,map__17014__$1,effect,ms,dispatch,seq__17004__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__17004,chunk__17005,count__17006,i__17007,map__17014,map__17014__$1,effect,ms,dispatch,seq__17004__$1,temp__5457__auto__))
,ms);
}


var G__17024 = cljs.core.next.call(null,seq__17004__$1);
var G__17025 = null;
var G__17026 = (0);
var G__17027 = (0);
seq__17004 = G__17024;
chunk__17005 = G__17025;
count__17006 = G__17026;
i__17007 = G__17027;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__17028 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__17029 = null;
var count__17030 = (0);
var i__17031 = (0);
while(true){
if((i__17031 < count__17030)){
var event = cljs.core._nth.call(null,chunk__17029,i__17031);
re_frame.router.dispatch.call(null,event);


var G__17032 = seq__17028;
var G__17033 = chunk__17029;
var G__17034 = count__17030;
var G__17035 = (i__17031 + (1));
seq__17028 = G__17032;
chunk__17029 = G__17033;
count__17030 = G__17034;
i__17031 = G__17035;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17028);
if(temp__5457__auto__){
var seq__17028__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17028__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17028__$1);
var G__17036 = cljs.core.chunk_rest.call(null,seq__17028__$1);
var G__17037 = c__4550__auto__;
var G__17038 = cljs.core.count.call(null,c__4550__auto__);
var G__17039 = (0);
seq__17028 = G__17036;
chunk__17029 = G__17037;
count__17030 = G__17038;
i__17031 = G__17039;
continue;
} else {
var event = cljs.core.first.call(null,seq__17028__$1);
re_frame.router.dispatch.call(null,event);


var G__17040 = cljs.core.next.call(null,seq__17028__$1);
var G__17041 = null;
var G__17042 = (0);
var G__17043 = (0);
seq__17028 = G__17040;
chunk__17029 = G__17041;
count__17030 = G__17042;
i__17031 = G__17043;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__17044 = cljs.core.seq.call(null,value);
var chunk__17045 = null;
var count__17046 = (0);
var i__17047 = (0);
while(true){
if((i__17047 < count__17046)){
var event = cljs.core._nth.call(null,chunk__17045,i__17047);
clear_event.call(null,event);


var G__17048 = seq__17044;
var G__17049 = chunk__17045;
var G__17050 = count__17046;
var G__17051 = (i__17047 + (1));
seq__17044 = G__17048;
chunk__17045 = G__17049;
count__17046 = G__17050;
i__17047 = G__17051;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17044);
if(temp__5457__auto__){
var seq__17044__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17044__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17044__$1);
var G__17052 = cljs.core.chunk_rest.call(null,seq__17044__$1);
var G__17053 = c__4550__auto__;
var G__17054 = cljs.core.count.call(null,c__4550__auto__);
var G__17055 = (0);
seq__17044 = G__17052;
chunk__17045 = G__17053;
count__17046 = G__17054;
i__17047 = G__17055;
continue;
} else {
var event = cljs.core.first.call(null,seq__17044__$1);
clear_event.call(null,event);


var G__17056 = cljs.core.next.call(null,seq__17044__$1);
var G__17057 = null;
var G__17058 = (0);
var G__17059 = (0);
seq__17044 = G__17056;
chunk__17045 = G__17057;
count__17046 = G__17058;
i__17047 = G__17059;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
