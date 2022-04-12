// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh.core');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.update');
goog.require('posh.lib.db');
goog.require('posh.lib.graph');
posh.core.empty_tree = (function posh$core$empty_tree(p__10035,retrieve){
var map__10036 = p__10035;
var map__10036__$1 = (((((!((map__10036 == null))))?(((((map__10036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10036):map__10036);
var dcfg = map__10036__$1;
var q = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.call(null,map__10036__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var G__10039 = arguments.length;
switch (G__10039) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.call(null,posh_tree,db_id,conn,schema,null);
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__10040,db_id,conn,schema,base_filters){
var map__10041 = p__10040;
var map__10041__$1 = (((((!((map__10041 == null))))?(((((map__10041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10041):map__10041);
var posh_tree = map__10041__$1;
var dcfg = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.call(null,conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.call(null,schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.add_db.cljs$lang$maxFixedArity = 5;

posh.core.set_db = (function posh$core$set_db(var_args){
var G__10045 = arguments.length;
switch (G__10045) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.call(null,posh_tree,db_id,db,null);
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__10046,db_id,db,filter_pred){
var map__10047 = p__10046;
var map__10047__$1 = (((((!((map__10047 == null))))?(((((map__10047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10047):map__10047);
var posh_tree = map__10047__$1;
var dbs = cljs.core.get.call(null,map__10047__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.call(null,map__10047__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__10047__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.set_db.cljs$lang$maxFixedArity = 4;

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__10050,poshdb,tx_patterns){
var map__10051 = p__10050;
var map__10051__$1 = (((((!((map__10051 == null))))?(((((map__10051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10051):map__10051);
var posh_tree = map__10051__$1;
var cache = cljs.core.get.call(null,map__10051__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__10051__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__10053,poshdb,pull_pattern,eid){
var map__10054 = p__10053;
var map__10054__$1 = (((((!((map__10054 == null))))?(((((map__10054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10054):map__10054);
var posh_tree = map__10054__$1;
var cache = cljs.core.get.call(null,map__10054__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__10054__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__10054__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__10054__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__10054__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.update_filter_pull.call(null,posh_tree,storage_key))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10064 = arguments.length;
var i__4731__auto___10065 = (0);
while(true){
if((i__4731__auto___10065 < len__4730__auto___10064)){
args__4736__auto__.push((arguments[i__4731__auto___10065]));

var G__10066 = (i__4731__auto___10065 + (1));
i__4731__auto___10065 = G__10066;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__10059,query,args){
var map__10060 = p__10059;
var map__10060__$1 = (((((!((map__10060 == null))))?(((((map__10060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10060):map__10060);
var posh_tree = map__10060__$1;
var graph = cljs.core.get.call(null,map__10060__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__10060__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__10060__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.call(null,map__10060__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.call(null,map__10060__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__10060__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var map__10062 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__10062__$1 = (((((!((map__10062 == null))))?(((((map__10062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10062):map__10062);
var analysis = cljs.core.get.call(null,map__10062__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__10062__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.filter_q_transform_analysis.call(null,analysis))], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_filter_q.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
posh.core.add_filter_q.cljs$lang$applyTo = (function (seq10056){
var G__10057 = cljs.core.first.call(null,seq10056);
var seq10056__$1 = cljs.core.next.call(null,seq10056);
var G__10058 = cljs.core.first.call(null,seq10056__$1);
var seq10056__$2 = cljs.core.next.call(null,seq10056__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10057,G__10058,seq10056__$2);
});

posh.core.add_pull = (function posh$core$add_pull(p__10067,poshdb,pull_pattern,eid){
var map__10068 = p__10067;
var map__10068__$1 = (((((!((map__10068 == null))))?(((((map__10068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10068):map__10068);
var posh_tree = map__10068__$1;
var graph = cljs.core.get.call(null,map__10068__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__10068__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__10068__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__10068__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__10068__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.call(null,map__10068__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull.call(null,posh_tree,storage_key));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_pull_many = (function posh$core$add_pull_many(p__10070,poshdb,pull_pattern,eids){
var map__10071 = p__10070;
var map__10071__$1 = (((((!((map__10071 == null))))?(((((map__10071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10071):map__10071);
var posh_tree = map__10071__$1;
var graph = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),poshdb,pull_pattern,eids], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull_many.call(null,posh_tree,storage_key));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10081 = arguments.length;
var i__4731__auto___10082 = (0);
while(true){
if((i__4731__auto___10082 < len__4730__auto___10081)){
args__4736__auto__.push((arguments[i__4731__auto___10082]));

var G__10083 = (i__4731__auto___10082 + (1));
i__4731__auto___10082 = G__10083;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__10076,query,args){
var map__10077 = p__10076;
var map__10077__$1 = (((((!((map__10077 == null))))?(((((map__10077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10077):map__10077);
var posh_tree = map__10077__$1;
var cache = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(function (){var or__4131__auto__ = cached;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var map__10079 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__10079__$1 = (((((!((map__10079 == null))))?(((((map__10079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10079):map__10079);
var analysis = cljs.core.get.call(null,map__10079__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__10079__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_q.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
posh.core.add_q.cljs$lang$applyTo = (function (seq10073){
var G__10074 = cljs.core.first.call(null,seq10073);
var seq10073__$1 = cljs.core.next.call(null,seq10073);
var G__10075 = cljs.core.first.call(null,seq10073__$1);
var seq10073__$2 = cljs.core.next.call(null,seq10073__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10074,G__10075,seq10073__$2);
});

posh.core.remove_item = (function posh$core$remove_item(p__10084,storage_key){
var map__10085 = p__10084;
var map__10085__$1 = (((((!((map__10085 == null))))?(((((map__10085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10085):map__10085);
var posh_tree = map__10085__$1;
var graph = cljs.core.get.call(null,map__10085__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__10085__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item.call(null,graph,storage_key),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.call(null,cache,storage_key));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__10087,db_id,tx,new_cache,storage_key){
var map__10088 = p__10087;
var map__10088__$1 = (((((!((map__10088 == null))))?(((((map__10088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10088):map__10088);
var posh_tree = map__10088__$1;
var graph = cljs.core.get.call(null,map__10088__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__10088__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.call(null,new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.call(null,cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis).call(null,posh_tree,storage_key):null);
var analysis = (function (){var or__4131__auto__ = reloaded;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return current_analysis;
}
})();
var map__10090 = cljs.core.get.call(null,graph,storage_key);
var map__10090__$1 = (((((!((map__10090 == null))))?(((((map__10090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10090):map__10090);
var outputs = cljs.core.get.call(null,map__10090__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__5457__auto__ = (function (){var and__4120__auto__ = (!(cljs.core.empty_QMARK_.call(null,outputs)));
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__4120__auto____$1)){
return posh.lib.datom_matcher.matching_datoms.call(null,new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var pass_tx = temp__5457__auto__;
return cljs.core.reduce.call(null,((function (pass_tx,temp__5457__auto__,current_analysis,reloaded,analysis,map__10090,map__10090__$1,outputs,map__10088,map__10088__$1,posh_tree,graph,cache){
return (function (acc,k){
return cljs.core.merge.call(null,acc,posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k));
});})(pass_tx,temp__5457__auto__,current_analysis,reloaded,analysis,map__10090,map__10090__$1,outputs,map__10088,map__10088__$1,posh_tree,graph,cache))
,new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.call(null,children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY);
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.call(null,newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__10092,poshdb,tx){
var map__10093 = p__10092;
var map__10093__$1 = (((((!((map__10093 == null))))?(((((map__10093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10093):map__10093);
var posh_tree = map__10093__$1;
var txs = cljs.core.get.call(null,map__10093__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.call(null,map__10093__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.call(null,conns,posh.lib.db.poshdb__GT_db_id.call(null,poshdb));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.call(null,txs,conn,posh.core.merge_txs.call(null,cljs.core.get.call(null,txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.map.call(null,cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__10095,conns_results){
var map__10096 = p__10095;
var map__10096__$1 = (((((!((map__10096 == null))))?(((((map__10096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10096):map__10096);
var posh_tree = map__10096__$1;
var conns = cljs.core.get.call(null,map__10096__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.call(null,map__10096__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.call(null,map__10096__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.call(null,map__10096__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.call(null,map__10096__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__4523__auto__ = ((function (map__10096,map__10096__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function posh$core$after_transact_$_iter__10098(s__10099){
return (new cljs.core.LazySeq(null,((function (map__10096,map__10096__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (){
var s__10099__$1 = s__10099;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__10099__$1);
if(temp__5457__auto__){
var s__10099__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10099__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10099__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10101 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10100 = (0);
while(true){
if((i__10100 < size__4522__auto__)){
var vec__10102 = cljs.core._nth.call(null,c__4521__auto__,i__10100);
var db_id = cljs.core.nth.call(null,vec__10102,(0),null);
var conn = cljs.core.nth.call(null,vec__10102,(1),null);
cljs.core.chunk_append.call(null,b__10101,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])));

var G__10112 = (i__10100 + (1));
i__10100 = G__10112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10101),posh$core$after_transact_$_iter__10098.call(null,cljs.core.chunk_rest.call(null,s__10099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10101),null);
}
} else {
var vec__10105 = cljs.core.first.call(null,s__10099__$2);
var db_id = cljs.core.nth.call(null,vec__10105,(0),null);
var conn = cljs.core.nth.call(null,vec__10105,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])),posh$core$after_transact_$_iter__10098.call(null,cljs.core.rest.call(null,s__10099__$2)));
}
} else {
return null;
}
break;
}
});})(map__10096,map__10096__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,null,null));
});})(map__10096,map__10096__$1,posh_tree,conns,dcfg,dbs,filters,cache))
;
return iter__4523__auto__.call(null,conns);
})());
var new_posh_tree = cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.call(null,((function (new_dbs,new_posh_tree,map__10096,map__10096__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (changed,p__10108){
var vec__10109 = p__10108;
var db_id = cljs.core.nth.call(null,vec__10109,(0),null);
var conn = cljs.core.nth.call(null,vec__10109,(1),null);
return cljs.core.merge.call(null,changed,posh.core.cache_changes.call(null,new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null)));
});})(new_dbs,new_posh_tree,map__10096,map__10096__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv.call(null,((function (new_dbs,new_posh_tree,changed_cache,map__10096,map__10096__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (m,k,v){
if(cljs.core.not_EQ_.call(null,v,cljs.core.get.call(null,cache,k))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
});})(new_dbs,new_posh_tree,changed_cache,map__10096,map__10096__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.call(null,new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,really_changed),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__10113){
var map__10114 = p__10113;
var map__10114__$1 = (((((!((map__10114 == null))))?(((((map__10114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10114):map__10114);
var posh_tree = map__10114__$1;
var dcfg = cljs.core.get.call(null,map__10114__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.call(null,map__10114__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv.call(null,((function (map__10114,map__10114__$1,posh_tree,dcfg,txs){
return (function (m,conn,tx){
return cljs.core.assoc.call(null,m,conn,new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn,tx));
});})(map__10114,map__10114__$1,posh_tree,dcfg,txs))
,cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact.call(null,cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=core.js.map
