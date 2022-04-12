// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__16780){
var map__16781 = p__16780;
var map__16781__$1 = (((((!((map__16781 == null))))?(((((map__16781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16781):map__16781);
var operation = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__16783_16803 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__16784_16804 = null;
var count__16785_16805 = (0);
var i__16786_16806 = (0);
while(true){
if((i__16786_16806 < count__16785_16805)){
var vec__16795_16807 = cljs.core._nth.call(null,chunk__16784_16804,i__16786_16806);
var k_16808 = cljs.core.nth.call(null,vec__16795_16807,(0),null);
var cb_16809 = cljs.core.nth.call(null,vec__16795_16807,(1),null);
try{cb_16809.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e16798){var e_16810 = e16798;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_16808,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_16810);
}

var G__16811 = seq__16783_16803;
var G__16812 = chunk__16784_16804;
var G__16813 = count__16785_16805;
var G__16814 = (i__16786_16806 + (1));
seq__16783_16803 = G__16811;
chunk__16784_16804 = G__16812;
count__16785_16805 = G__16813;
i__16786_16806 = G__16814;
continue;
} else {
var temp__5457__auto___16815 = cljs.core.seq.call(null,seq__16783_16803);
if(temp__5457__auto___16815){
var seq__16783_16816__$1 = temp__5457__auto___16815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16783_16816__$1)){
var c__4550__auto___16817 = cljs.core.chunk_first.call(null,seq__16783_16816__$1);
var G__16818 = cljs.core.chunk_rest.call(null,seq__16783_16816__$1);
var G__16819 = c__4550__auto___16817;
var G__16820 = cljs.core.count.call(null,c__4550__auto___16817);
var G__16821 = (0);
seq__16783_16803 = G__16818;
chunk__16784_16804 = G__16819;
count__16785_16805 = G__16820;
i__16786_16806 = G__16821;
continue;
} else {
var vec__16799_16822 = cljs.core.first.call(null,seq__16783_16816__$1);
var k_16823 = cljs.core.nth.call(null,vec__16799_16822,(0),null);
var cb_16824 = cljs.core.nth.call(null,vec__16799_16822,(1),null);
try{cb_16824.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e16802){var e_16825 = e16802;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_16823,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_16825);
}

var G__16826 = cljs.core.next.call(null,seq__16783_16816__$1);
var G__16827 = null;
var G__16828 = (0);
var G__16829 = (0);
seq__16783_16803 = G__16826;
chunk__16784_16804 = G__16827;
count__16785_16805 = G__16828;
i__16786_16806 = G__16829;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
