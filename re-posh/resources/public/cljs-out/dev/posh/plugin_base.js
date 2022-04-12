// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh.plugin_base');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh.stateful');
goog.require('posh.lib.db');
goog.require('posh.lib.update');
posh.plugin_base.missing_pull_result = (function posh$plugin_base$missing_pull_result(dcfg,pull_expr){
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),pull_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
} else {
return null;
}
});
posh.plugin_base.safe_pull = (function posh$plugin_base$safe_pull(dcfg,db,query,id){
if(cljs.core.integer_QMARK_.call(null,id)){
return new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db,query,id);
} else {
if(cljs.core.vector_QMARK_.call(null,id)){
var temp__5455__auto__ = new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db,id);
if(cljs.core.truth_(temp__5455__auto__)){
var eid = temp__5455__auto__;
return new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db,query,eid);
} else {
return posh.plugin_base.missing_pull_result.call(null,dcfg,query);
}
} else {
if((id == null)){
return posh.plugin_base.missing_pull_result.call(null,dcfg,query);
} else {
return null;
}
}
}
});
posh.plugin_base.set_conn_listener_BANG_ = (function posh$plugin_base$set_conn_listener_BANG_(dcfg,posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810),posh_atom,new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn,new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766),((function (posh_vars){
return (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.call(null,posh_vars,var$);
} else {
return null;
}
});})(posh_vars))
);

cljs.core.add_watch.call(null,conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),((function (posh_vars){
return (function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.call(null,posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
});})(posh_vars))
);

new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn,new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061),((function (posh_vars){
return (function (tx_report){
var map__10707 = cljs.core.swap_BANG_.call(null,posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__10707__$1 = (((((!((map__10707 == null))))?(((((map__10707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10707):map__10707);
var ratoms = cljs.core.get.call(null,map__10707__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.call(null,map__10707__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__10709 = cljs.core.seq.call(null,changed);
var chunk__10710 = null;
var count__10711 = (0);
var i__10712 = (0);
while(true){
if((i__10712 < count__10711)){
var vec__10719 = cljs.core._nth.call(null,chunk__10710,i__10712);
var k = cljs.core.nth.call(null,vec__10719,(0),null);
var v = cljs.core.nth.call(null,vec__10719,(1),null);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__10725 = seq__10709;
var G__10726 = chunk__10710;
var G__10727 = count__10711;
var G__10728 = (i__10712 + (1));
seq__10709 = G__10725;
chunk__10710 = G__10726;
count__10711 = G__10727;
i__10712 = G__10728;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10709);
if(temp__5457__auto__){
var seq__10709__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10709__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10709__$1);
var G__10729 = cljs.core.chunk_rest.call(null,seq__10709__$1);
var G__10730 = c__4550__auto__;
var G__10731 = cljs.core.count.call(null,c__4550__auto__);
var G__10732 = (0);
seq__10709 = G__10729;
chunk__10710 = G__10730;
count__10711 = G__10731;
i__10712 = G__10732;
continue;
} else {
var vec__10722 = cljs.core.first.call(null,seq__10709__$1);
var k = cljs.core.nth.call(null,vec__10722,(0),null);
var v = cljs.core.nth.call(null,vec__10722,(1),null);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__10733 = cljs.core.next.call(null,seq__10709__$1);
var G__10734 = null;
var G__10735 = (0);
var G__10736 = (0);
seq__10709 = G__10733;
chunk__10710 = G__10734;
count__10711 = G__10735;
i__10712 = G__10736;
continue;
}
} else {
return null;
}
}
break;
}
});})(posh_vars))
);

return conn;
});
posh.plugin_base.posh_BANG_ = (function posh$plugin_base$posh_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10739 = arguments.length;
var i__4731__auto___10740 = (0);
while(true){
if((i__4731__auto___10740 < len__4730__auto___10739)){
args__4736__auto__.push((arguments[i__4731__auto___10740]));

var G__10741 = (i__4731__auto___10740 + (1));
i__4731__auto___10740 = G__10741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,conns){
var posh_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reset_BANG_.call(null,posh_atom,(function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.call(null,posh.core.empty_tree.call(null,dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null)),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.PersistentArrayMap.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,conns__$1)){
return posh_tree;
} else {
var G__10742 = (n + (1));
var G__10743 = cljs.core.rest.call(null,conns__$1);
var G__10744 = (function (){var db_id = cljs.core.keyword.call(null,["conn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.call(null,posh_tree,db_id,posh.plugin_base.set_conn_listener_BANG_.call(null,dcfg,posh_atom,cljs.core.first.call(null,conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.first.call(null,conns__$1))));
})();
n = G__10742;
conns__$1 = G__10743;
posh_tree = G__10744;
continue;
}
break;
}
})());
});

posh.plugin_base.posh_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
posh.plugin_base.posh_BANG_.cljs$lang$applyTo = (function (seq10737){
var G__10738 = cljs.core.first.call(null,seq10737);
var seq10737__$1 = cljs.core.next.call(null,seq10737);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10738,seq10737__$1);
});

posh.plugin_base.get_conn_var = (function posh$plugin_base$get_conn_var(dcfg,conn,var$){
return new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)))).call(null,var$);
});
posh.plugin_base.get_posh_atom = (function posh$plugin_base$get_posh_atom(dcfg,poshdb_or_conn){
if(cljs.core.truth_(new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,poshdb_or_conn))){
return posh.plugin_base.get_conn_var.call(null,dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom.call(null,poshdb_or_conn);
}
});
posh.plugin_base.get_db = (function posh$plugin_base$get_db(dcfg,poshdb_or_conn){
if(cljs.core.truth_(new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,poshdb_or_conn))){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),posh.plugin_base.get_conn_var.call(null,dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"db-id","db-id",747248515))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh.plugin_base.get_conn_var.call(null,dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810))], null));
} else {
return poshdb_or_conn;
}
});
posh.plugin_base.rm_posh_item = (function posh$plugin_base$rm_posh_item(dcfg,posh_atom,storage_key){
return cljs.core.swap_BANG_.call(null,posh_atom,(function (posh_atom_val){
return cljs.core.assoc.call(null,posh.core.remove_item.call(null,posh_atom_val,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key));
}));
});
posh.plugin_base.make_query_reaction = (function posh$plugin_base$make_query_reaction(var_args){
var G__10746 = arguments.length;
switch (G__10746) {
case 5:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,posh_atom,storage_key,add_query_fn,options){
var temp__5455__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,posh_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reactions","reactions",2029850654),storage_key], null));
if(cljs.core.truth_(temp__5455__auto__)){
var r = temp__5455__auto__;
return r;
} else {
return cljs.core.get.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,posh_atom,((function (temp__5455__auto__){
return (function (posh_atom_val){
var posh_atom_with_query = add_query_fn.call(null,posh_atom_val);
var query_result = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__4131__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"ratom","ratom",-126521267).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,query_result);
}
})();
var query_reaction = new cljs.core.Keyword(null,"make-reaction","make-reaction",295148585).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,((function (posh_atom_with_query,query_result,query_ratom,temp__5455__auto__){
return (function (){
return cljs.core.deref.call(null,query_ratom);
});})(posh_atom_with_query,query_result,query_ratom,temp__5455__auto__))
,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (posh_atom_with_query,query_result,query_ratom,temp__5455__auto__){
return (function (_,___$1){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,posh_atom,((function (posh_atom_with_query,query_result,query_ratom,temp__5455__auto__){
return (function (posh_atom_val__$1){
return cljs.core.assoc.call(null,posh.core.remove_item.call(null,posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key));
});})(posh_atom_with_query,query_result,query_ratom,temp__5455__auto__))
);
}
});})(posh_atom_with_query,query_result,query_ratom,temp__5455__auto__))
);
return cljs.core.assoc.call(null,posh_atom_with_query,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction));
});})(temp__5455__auto__))
)),storage_key);
}
});

posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,posh_atom,storage_key,add_query_fn){
return posh.plugin_base.make_query_reaction.call(null,dcfg,posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
});

posh.plugin_base.make_query_reaction.cljs$lang$maxFixedArity = 5;

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.plugin_base.pull = (function posh$plugin_base$pull(var_args){
var G__10750 = arguments.length;
switch (G__10750) {
case 5:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eid,options){
var true_poshdb = posh.plugin_base.get_db.call(null,dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom.call(null,dcfg,poshdb);
return posh.plugin_base.make_query_reaction.call(null,dcfg,posh_atom,storage_key,((function (true_poshdb,storage_key,posh_atom){
return (function (p1__10748_SHARP_){
return posh.core.add_pull.call(null,p1__10748_SHARP_,true_poshdb,pull_pattern,eid);
});})(true_poshdb,storage_key,posh_atom))
,options);
});

posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eid){
return posh.plugin_base.pull.call(null,dcfg,poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
});

posh.plugin_base.pull.cljs$lang$maxFixedArity = 5;

posh.plugin_base.pull_info = (function posh$plugin_base$pull_info(dcfg,poshdb,pull_pattern,eid){
var true_poshdb = posh.plugin_base.get_db.call(null,dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom.call(null,dcfg,poshdb);
return cljs.core.dissoc.call(null,posh.lib.update.update_pull.call(null,cljs.core.deref.call(null,posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});
posh.plugin_base.pull_many = (function posh$plugin_base$pull_many(var_args){
var G__10754 = arguments.length;
switch (G__10754) {
case 5:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eids,options){
var true_poshdb = posh.plugin_base.get_db.call(null,dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),true_poshdb,pull_pattern,eids], null);
var posh_atom = posh.plugin_base.get_posh_atom.call(null,dcfg,poshdb);
return posh.plugin_base.make_query_reaction.call(null,dcfg,posh_atom,storage_key,((function (true_poshdb,storage_key,posh_atom){
return (function (p1__10752_SHARP_){
return posh.core.add_pull_many.call(null,p1__10752_SHARP_,true_poshdb,pull_pattern,eids);
});})(true_poshdb,storage_key,posh_atom))
,options);
});

posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eids){
return posh.plugin_base.pull_many.call(null,dcfg,poshdb,pull_pattern,eids,cljs.core.PersistentArrayMap.EMPTY);
});

posh.plugin_base.pull_many.cljs$lang$maxFixedArity = 5;

posh.plugin_base.pull_tx = (function posh$plugin_base$pull_tx(dcfg,tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.call(null,"pull-tx is deprecated. Calling pull without your tx-patterns.");

return posh.plugin_base.pull.call(null,dcfg,poshdb,pull_pattern,eid);
});
posh.plugin_base.parse_q_query = (function posh$plugin_base$parse_q_query(dcfg,query){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__10756,query_item){
var vec__10757 = p__10756;
var parsed_query = cljs.core.nth.call(null,vec__10757,(0),null);
var last_key = cljs.core.nth.call(null,vec__10757,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.plugin_base.q_args_count = (function posh$plugin_base$q_args_count(dcfg,query){
var parsed_query = posh.plugin_base.parse_q_query.call(null,dcfg,query);
var temp__5455__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__5455__auto__)){
var in_clause = temp__5455__auto__;
return cljs.core.count.call(null,in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.plugin_base.q = (function posh$plugin_base$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10769 = arguments.length;
var i__4731__auto___10770 = (0);
while(true){
if((i__4731__auto___10770 < len__4730__auto___10769)){
args__4736__auto__.push((arguments[i__4731__auto___10770]));

var G__10771 = (i__4731__auto___10770 + (1));
i__4731__auto___10770 = G__10771;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var n_query_args = posh.plugin_base.q_args_count.call(null,dcfg,query);
var vec__10766 = ((cljs.core._EQ_.call(null,n_query_args,cljs.core.count.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.call(null,(n_query_args + (1)),cljs.core.count.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.call(null,vec__10766,(0),null);
var options = cljs.core.nth.call(null,vec__10766,(1),null);
var true_poshdb_args = cljs.core.map.call(null,((function (n_query_args,vec__10766,args__$1,options){
return (function (p1__10760_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,p1__10760_SHARP_))){
return posh.plugin_base.get_db.call(null,dcfg,p1__10760_SHARP_);
} else {
return p1__10760_SHARP_;
}
});})(n_query_args,vec__10766,args__$1,options))
,args__$1);
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (n_query_args,vec__10766,args__$1,options,true_poshdb_args){
return (function (p1__10761_SHARP_){
return posh.plugin_base.get_posh_atom.call(null,dcfg,p1__10761_SHARP_);
});})(n_query_args,vec__10766,args__$1,options,true_poshdb_args))
,args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.plugin_base.make_query_reaction.call(null,dcfg,posh_atom,storage_key,((function (n_query_args,vec__10766,args__$1,options,true_poshdb_args,posh_atom,storage_key){
return (function (p1__10762_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,posh.core.add_q,p1__10762_SHARP_,query),true_poshdb_args);
});})(n_query_args,vec__10766,args__$1,options,true_poshdb_args,posh_atom,storage_key))
,options);
});

posh.plugin_base.q.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
posh.plugin_base.q.cljs$lang$applyTo = (function (seq10763){
var G__10764 = cljs.core.first.call(null,seq10763);
var seq10763__$1 = cljs.core.next.call(null,seq10763);
var G__10765 = cljs.core.first.call(null,seq10763__$1);
var seq10763__$2 = cljs.core.next.call(null,seq10763__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10764,G__10765,seq10763__$2);
});

posh.plugin_base.q_info = (function posh$plugin_base$q_info(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10777 = arguments.length;
var i__4731__auto___10778 = (0);
while(true){
if((i__4731__auto___10778 < len__4730__auto___10777)){
args__4736__auto__.push((arguments[i__4731__auto___10778]));

var G__10779 = (i__4731__auto___10778 + (1));
i__4731__auto___10778 = G__10779;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.call(null,(function (p1__10772_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,p1__10772_SHARP_))){
return posh.plugin_base.get_db.call(null,dcfg,p1__10772_SHARP_);
} else {
return p1__10772_SHARP_;
}
}),args);
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (true_poshdb_args){
return (function (p1__10773_SHARP_){
return posh.plugin_base.get_posh_atom.call(null,dcfg,p1__10773_SHARP_);
});})(true_poshdb_args))
,args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.call(null,posh.lib.update.update_q.call(null,cljs.core.deref.call(null,posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});

posh.plugin_base.q_info.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
posh.plugin_base.q_info.cljs$lang$applyTo = (function (seq10774){
var G__10775 = cljs.core.first.call(null,seq10774);
var seq10774__$1 = cljs.core.next.call(null,seq10774);
var G__10776 = cljs.core.first.call(null,seq10774__$1);
var seq10774__$2 = cljs.core.next.call(null,seq10774__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10775,G__10776,seq10774__$2);
});

posh.plugin_base.q_tx = (function posh$plugin_base$q_tx(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10784 = arguments.length;
var i__4731__auto___10785 = (0);
while(true){
if((i__4731__auto___10785 < len__4730__auto___10784)){
args__4736__auto__.push((arguments[i__4731__auto___10785]));

var G__10786 = (i__4731__auto___10785 + (1));
i__4731__auto___10785 = G__10786;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,tx_patterns,query,args){
cljs.core.println.call(null,"q-tx is deprecated. Calling q without your tx-patterns.");

return cljs.core.apply.call(null,posh.plugin_base.q,dcfg,query,args);
});

posh.plugin_base.q_tx.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
posh.plugin_base.q_tx.cljs$lang$applyTo = (function (seq10780){
var G__10781 = cljs.core.first.call(null,seq10780);
var seq10780__$1 = cljs.core.next.call(null,seq10780);
var G__10782 = cljs.core.first.call(null,seq10780__$1);
var seq10780__$2 = cljs.core.next.call(null,seq10780__$1);
var G__10783 = cljs.core.first.call(null,seq10780__$2);
var seq10780__$3 = cljs.core.next.call(null,seq10780__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10781,G__10782,G__10783,seq10780__$3);
});

posh.plugin_base.filter_tx = (function posh$plugin_base$filter_tx(dcfg,poshdb,tx_patterns){
return posh.stateful.add_filter_tx.call(null,posh.plugin_base.get_db.call(null,dcfg,poshdb),tx_patterns);
});
posh.plugin_base.filter_pull = (function posh$plugin_base$filter_pull(dcfg,poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull.call(null,posh.plugin_base.get_db.call(null,dcfg,poshdb),pull_pattern,eid);
});
posh.plugin_base.filter_q = (function posh$plugin_base$filter_q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10791 = arguments.length;
var i__4731__auto___10792 = (0);
while(true){
if((i__4731__auto___10792 < len__4730__auto___10791)){
args__4736__auto__.push((arguments[i__4731__auto___10792]));

var G__10793 = (i__4731__auto___10792 + (1));
i__4731__auto___10792 = G__10793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.call(null,(function (p1__10787_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,p1__10787_SHARP_))){
return posh.plugin_base.get_db.call(null,dcfg,p1__10787_SHARP_);
} else {
return p1__10787_SHARP_;
}
}),args);
return cljs.core.apply.call(null,posh.stateful.add_filter_q,query,true_poshdb_args);
});

posh.plugin_base.filter_q.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
posh.plugin_base.filter_q.cljs$lang$applyTo = (function (seq10788){
var G__10789 = cljs.core.first.call(null,seq10788);
var seq10788__$1 = cljs.core.next.call(null,seq10788);
var G__10790 = cljs.core.first.call(null,seq10788__$1);
var seq10788__$2 = cljs.core.next.call(null,seq10788__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10789,G__10790,seq10788__$2);
});

posh.plugin_base.transact_BANG_ = (function posh$plugin_base$transact_BANG_(dcfg,poshdb_or_conn,txs){
return new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,poshdb_or_conn))?poshdb_or_conn:posh.stateful.poshdb__GT_conn.call(null,poshdb_or_conn)),txs);
});

//# sourceMappingURL=plugin_base.js.map
