// Compiled by ClojureScript 1.10.520 {}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k14685,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__14689 = k14685;
var G__14689__$1 = (((G__14689 instanceof cljs.core.Keyword))?G__14689.fqn:null);
switch (G__14689__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14685,else__4388__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__14690){
var vec__14691 = p__14690;
var k__4408__auto__ = cljs.core.nth.call(null,vec__14691,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__14691,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#datascript.query.Context{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14684){
var self__ = this;
var G__14684__$1 = this;
return (new cljs.core.RecordIter((0),G__14684__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14686,other14687){
var self__ = this;
var this14686__$1 = this;
return (((!((other14687 == null)))) && ((this14686__$1.constructor === other14687.constructor)) && (cljs.core._EQ_.call(null,this14686__$1.rels,other14687.rels)) && (cljs.core._EQ_.call(null,this14686__$1.sources,other14687.sources)) && (cljs.core._EQ_.call(null,this14686__$1.rules,other14687.rules)) && (cljs.core._EQ_.call(null,this14686__$1.__extmap,other14687.__extmap)));
});

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__14684){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__14694 = cljs.core.keyword_identical_QMARK_;
var expr__14695 = k__4393__auto__;
if(cljs.core.truth_(pred__14694.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__14695))){
return (new datascript.query.Context(G__14684,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14694.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__14695))){
return (new datascript.query.Context(self__.rels,G__14684,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14694.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__14695))){
return (new datascript.query.Context(self__.rels,self__.sources,G__14684,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__14684),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__14684){
var self__ = this;
var this__4384__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__14684,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"datascript.query/Context");
});

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__14688){
var extmap__4424__auto__ = (function (){var G__14697 = cljs.core.dissoc.call(null,G__14688,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.record_QMARK_.call(null,G__14688)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14697);
} else {
return G__14697;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__14688),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__14688),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__14688),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k14700,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__14704 = k14700;
var G__14704__$1 = (((G__14704 instanceof cljs.core.Keyword))?G__14704.fqn:null);
switch (G__14704__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14700,else__4388__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__14705){
var vec__14706 = p__14705;
var k__4408__auto__ = cljs.core.nth.call(null,vec__14706,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__14706,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#datascript.query.Relation{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14699){
var self__ = this;
var G__14699__$1 = this;
return (new cljs.core.RecordIter((0),G__14699__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14701,other14702){
var self__ = this;
var this14701__$1 = this;
return (((!((other14702 == null)))) && ((this14701__$1.constructor === other14702.constructor)) && (cljs.core._EQ_.call(null,this14701__$1.attrs,other14702.attrs)) && (cljs.core._EQ_.call(null,this14701__$1.tuples,other14702.tuples)) && (cljs.core._EQ_.call(null,this14701__$1.__extmap,other14702.__extmap)));
});

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__14699){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__14709 = cljs.core.keyword_identical_QMARK_;
var expr__14710 = k__4393__auto__;
if(cljs.core.truth_(pred__14709.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__14710))){
return (new datascript.query.Relation(G__14699,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14709.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__14710))){
return (new datascript.query.Relation(self__.attrs,G__14699,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__14699),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__14699){
var self__ = this;
var this__4384__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__14699,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"datascript.query/Relation");
});

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__14703){
var extmap__4424__auto__ = (function (){var G__14712 = cljs.core.dissoc.call(null,G__14703,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core.record_QMARK_.call(null,G__14703)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14712);
} else {
return G__14712;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__14703),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__14703),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next.call(null,coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first.call(null,coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14715 = arguments.length;
var i__4731__auto___14716 = (0);
while(true){
if((i__4731__auto___14716 < len__4730__auto___14715)){
args__4736__auto__.push((arguments[i__4731__auto___14716]));

var G__14717 = (i__4731__auto___14716 + (1));
i__4731__auto___14716 = G__14717;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.concatv.cljs$lang$applyTo = (function (seq14714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14714));
});

datascript.query.zip = (function datascript$query$zip(var_args){
var G__14722 = arguments.length;
switch (G__14722) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14724 = arguments.length;
var i__4731__auto___14725 = (0);
while(true){
if((i__4731__auto___14725 < len__4730__auto___14724)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14725]));

var G__14726 = (i__4731__auto___14725 + (1));
i__4731__auto___14725 = G__14726;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.call(null,cljs.core.vector,a,b);
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,a,b,rest);
});

/** @this {Function} */
datascript.query.zip.cljs$lang$applyTo = (function (seq14719){
var G__14720 = cljs.core.first.call(null,seq14719);
var seq14719__$1 = cljs.core.next.call(null,seq14719);
var G__14721 = cljs.core.first.call(null,seq14719__$1);
var seq14719__$2 = cljs.core.next.call(null,seq14719__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14720,G__14721,seq14719__$2);
});

datascript.query.zip.cljs$lang$maxFixedArity = (2);

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,a),cljs.core.count.call(null,b))) && (cljs.core.every_QMARK_.call(null,(function (p1__14727_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__14727_SHARP_);
}),cljs.core.keys.call(null,a))) && (cljs.core.every_QMARK_.call(null,(function (p1__14728_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__14728_SHARP_);
}),cljs.core.keys.call(null,a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_.call(null,form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,form,pattern);
} else {
if(cljs.core.sequential_QMARK_.call(null,pattern)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core.every_QMARK_.call(null,(function (p__14733){
var vec__14734 = p__14733;
var pattern_el = cljs.core.nth.call(null,vec__14734,(0),null);
var form_el = cljs.core.nth.call(null,vec__14734,(1),null);
return datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__14741){
var vec__14742 = p__14741;
var pattern_el = cljs.core.nth.call(null,vec__14742,(0),null);
var form_el = cljs.core.nth.call(null,vec__14742,(1),null);
return datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form))));
}
} else {
return pattern.call(null,form);

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,(l1 + l2));
var n__4607__auto___14745 = l1;
var i_14746 = (0);
while(true){
if((i_14746 < n__4607__auto___14745)){
(res[i_14746] = (t1[(idxs1[i_14746])]));

var G__14747 = (i_14746 + (1));
i_14746 = G__14747;
continue;
} else {
}
break;
}

var n__4607__auto___14748 = l2;
var i_14749 = (0);
while(true){
if((i_14749 < n__4607__auto___14748)){
(res[(l1 + i_14749)] = (t2[(idxs2[i_14749])]));

var G__14750 = (i_14749 + (1));
i_14749 = G__14750;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__14751 = a;
var map__14751__$1 = (((((!((map__14751 == null))))?(((((map__14751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14751):map__14751);
var attrs_a = cljs.core.get.call(null,map__14751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__14751__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__14752 = b;
var map__14752__$1 = (((((!((map__14752 == null))))?(((((map__14752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14752):map__14752);
var attrs_b = cljs.core.get.call(null,map__14752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__14752__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.call(null,attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.call(null,cljs.core.vec.call(null,tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_.call(null,attrs_a,attrs_b)))){
throw cljs.core.ex_info.call(null,["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.call(null,attrs_a)," and ",cljs.core.pr_str.call(null,attrs_b)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,cljs.core.vals.call(null,attrs_a))){
var idxb__GT_idxa = cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (map__14751,map__14751__$1,attrs_a,tuples_a,map__14752,map__14752__$1,attrs_b,tuples_b){
return (function datascript$query$sum_rel_$_iter__14755(s__14756){
return (new cljs.core.LazySeq(null,((function (map__14751,map__14751__$1,attrs_a,tuples_a,map__14752,map__14752__$1,attrs_b,tuples_b){
return (function (){
var s__14756__$1 = s__14756;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14756__$1);
if(temp__5457__auto__){
var s__14756__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14756__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14756__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14758 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14757 = (0);
while(true){
if((i__14757 < size__4522__auto__)){
var vec__14759 = cljs.core._nth.call(null,c__4521__auto__,i__14757);
var sym = cljs.core.nth.call(null,vec__14759,(0),null);
var idx_b = cljs.core.nth.call(null,vec__14759,(1),null);
cljs.core.chunk_append.call(null,b__14758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null));

var G__14781 = (i__14757 + (1));
i__14757 = G__14781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14758),datascript$query$sum_rel_$_iter__14755.call(null,cljs.core.chunk_rest.call(null,s__14756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14758),null);
}
} else {
var vec__14762 = cljs.core.first.call(null,s__14756__$2);
var sym = cljs.core.nth.call(null,vec__14762,(0),null);
var idx_b = cljs.core.nth.call(null,vec__14762,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null),datascript$query$sum_rel_$_iter__14755.call(null,cljs.core.rest.call(null,s__14756__$2)));
}
} else {
return null;
}
break;
}
});})(map__14751,map__14751__$1,attrs_a,tuples_a,map__14752,map__14752__$1,attrs_b,tuples_b))
,null,null));
});})(map__14751,map__14751__$1,attrs_a,tuples_a,map__14752,map__14752__$1,attrs_b,tuples_b))
;
return iter__4523__auto__.call(null,attrs_b);
})());
var tlen = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.vals.call(null,attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (idxb__GT_idxa,tlen,map__14751,map__14751__$1,attrs_a,tuples_a,map__14752,map__14752__$1,attrs_b,tuples_b){
return (function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,tlen);
var seq__14765_14782 = cljs.core.seq.call(null,idxb__GT_idxa);
var chunk__14766_14783 = null;
var count__14767_14784 = (0);
var i__14768_14785 = (0);
while(true){
if((i__14768_14785 < count__14767_14784)){
var vec__14775_14786 = cljs.core._nth.call(null,chunk__14766_14783,i__14768_14785);
var idx_b_14787 = cljs.core.nth.call(null,vec__14775_14786,(0),null);
var idx_a_14788 = cljs.core.nth.call(null,vec__14775_14786,(1),null);
(tuple_SINGLEQUOTE_[idx_a_14788] = (tuple_b[idx_b_14787]));


var G__14789 = seq__14765_14782;
var G__14790 = chunk__14766_14783;
var G__14791 = count__14767_14784;
var G__14792 = (i__14768_14785 + (1));
seq__14765_14782 = G__14789;
chunk__14766_14783 = G__14790;
count__14767_14784 = G__14791;
i__14768_14785 = G__14792;
continue;
} else {
var temp__5457__auto___14793 = cljs.core.seq.call(null,seq__14765_14782);
if(temp__5457__auto___14793){
var seq__14765_14794__$1 = temp__5457__auto___14793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14765_14794__$1)){
var c__4550__auto___14795 = cljs.core.chunk_first.call(null,seq__14765_14794__$1);
var G__14796 = cljs.core.chunk_rest.call(null,seq__14765_14794__$1);
var G__14797 = c__4550__auto___14795;
var G__14798 = cljs.core.count.call(null,c__4550__auto___14795);
var G__14799 = (0);
seq__14765_14782 = G__14796;
chunk__14766_14783 = G__14797;
count__14767_14784 = G__14798;
i__14768_14785 = G__14799;
continue;
} else {
var vec__14778_14800 = cljs.core.first.call(null,seq__14765_14794__$1);
var idx_b_14801 = cljs.core.nth.call(null,vec__14778_14800,(0),null);
var idx_a_14802 = cljs.core.nth.call(null,vec__14778_14800,(1),null);
(tuple_SINGLEQUOTE_[idx_a_14802] = (tuple_b[idx_b_14801]));


var G__14803 = cljs.core.next.call(null,seq__14765_14794__$1);
var G__14804 = null;
var G__14805 = (0);
var G__14806 = (0);
seq__14765_14782 = G__14803;
chunk__14766_14783 = G__14804;
count__14767_14784 = G__14805;
i__14768_14785 = G__14806;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.call(null,acc,tuple_SINGLEQUOTE_);
});})(idxb__GT_idxa,tlen,map__14751,map__14751__$1,attrs_a,tuples_a,map__14752,map__14752__$1,attrs_b,tuples_b))
,cljs.core.transient$.call(null,cljs.core.vec.call(null,tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.core.merge.call(null,attrs_a,attrs_b)),cljs.core.range.call(null));
return datascript.query.sum_rel.call(null,datascript.query.sum_rel.call(null,(new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null)),a),b);

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__14808 = arguments.length;
switch (G__14808) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array.call(null,(0))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14811 = arguments.length;
var i__4731__auto___14812 = (0);
while(true){
if((i__4731__auto___14812 < len__4730__auto___14811)){
args__4736__auto__.push((arguments[i__4731__auto___14812]));

var G__14813 = (i__4731__auto___14812 + (1));
i__4731__auto___14812 = G__14813;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count.call(null,xs);
return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq14810){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14810));
});

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.call(null,"get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5459__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5459__auto__ == null)){
return else_val;
} else {
var datom = temp__5459__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14817 = arguments.length;
var i__4731__auto___14818 = (0);
while(true){
if((i__4731__auto___14818 < len__4730__auto___14817)){
args__4736__auto__.push((arguments[i__4731__auto___14818]));

var G__14819 = (i__4731__auto___14818 + (1));
i__4731__auto___14818 = G__14819;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.call(null,(function (_,a){
var temp__5461__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5461__auto__ == null)){
return null;
} else {
var datom = temp__5461__auto__;
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
datascript.query._get_some.cljs$lang$applyTo = (function (seq14814){
var G__14815 = cljs.core.first.call(null,seq14814);
var seq14814__$1 = cljs.core.next.call(null,seq14814);
var G__14816 = cljs.core.first.call(null,seq14814__$1);
var seq14814__$2 = cljs.core.next.call(null,seq14814__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14815,G__14816,seq14814__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.call(null,datascript.impl.entity.entity.call(null,db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14821 = arguments.length;
var i__4731__auto___14822 = (0);
while(true){
if((i__4731__auto___14822 < len__4730__auto___14821)){
args__4736__auto__.push((arguments[i__4731__auto___14822]));

var G__14823 = (i__4731__auto___14822 + (1));
i__4731__auto___14822 = G__14823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced.call(null,b);
}
}),true,args);
});

datascript.query.and_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.and_fn.cljs$lang$applyTo = (function (seq14820){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14820));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14825 = arguments.length;
var i__4731__auto___14826 = (0);
while(true){
if((i__4731__auto___14826 < len__4730__auto___14825)){
args__4736__auto__.push((arguments[i__4731__auto___14826]));

var G__14827 = (i__4731__auto___14826 + (1));
i__4731__auto___14826 = G__14827;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced.call(null,b);
} else {
return b;
}
}),null,args);
});

datascript.query.or_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.or_fn.cljs$lang$applyTo = (function (seq14824){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14824));
});

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum.call(null,coll) / cljs.core.count.call(null,coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.call(null,coll);
var size = cljs.core.count.call(null,coll);
var med = (size >> (1));
var G__14833 = cljs.core.nth.call(null,terms,med);
if(cljs.core.even_QMARK_.call(null,size)){
return ((G__14833 + cljs.core.nth.call(null,terms,(med - (1)))) / (2));
} else {
return G__14833;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg.call(null,coll);
var sum__$1 = sum.call(null,(function (){var iter__4523__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__14834(s__14835){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__14835__$1 = s__14835;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14835__$1);
if(temp__5457__auto__){
var s__14835__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14835__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14835__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14837 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14836 = (0);
while(true){
if((i__14836 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__14836);
var delta = (x - mean);
cljs.core.chunk_append.call(null,b__14837,(delta * delta));

var G__14838 = (i__14836 + (1));
i__14836 = G__14838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14837),datascript$query$variance_$_iter__14834.call(null,cljs.core.chunk_rest.call(null,s__14835__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14837),null);
}
} else {
var x = cljs.core.first.call(null,s__14835__$2);
var delta = (x - mean);
return cljs.core.cons.call(null,(delta * delta),datascript$query$variance_$_iter__14834.call(null,cljs.core.rest.call(null,s__14835__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__4523__auto__.call(null,coll);
})());
return (sum__$1 / cljs.core.count.call(null,coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance.call(null,coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__14839 = null;
var G__14839__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__14839__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.last.call(null,acc)) < (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__14839 = function(n,coll){
switch(arguments.length){
case 1:
return G__14839__1.call(this,n);
case 2:
return G__14839__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14839.cljs$core$IFn$_invoke$arity$1 = G__14839__1;
G__14839.cljs$core$IFn$_invoke$arity$2 = G__14839__2;
return G__14839;
})()
,(function() {
var G__14840 = null;
var G__14840__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__14840__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.first.call(null,acc)) > (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__14840 = function(n,coll){
switch(arguments.length){
case 1:
return G__14840__1.call(this,n);
case 2:
return G__14840__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14840.cljs$core$IFn$_invoke$arity$1 = G__14840__1;
G__14840.cljs$core$IFn$_invoke$arity$2 = G__14840__2;
return G__14840;
})()
,(function (coll){
return cljs.core.count.call(null,cljs.core.distinct.call(null,coll));
}),cljs.core.set,avg,stddev,(function() {
var G__14841 = null;
var G__14841__1 = (function (coll){
return cljs.core.rand_nth.call(null,coll);
});
var G__14841__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,coll);
})));
});
G__14841 = function(n,coll){
switch(arguments.length){
case 1:
return G__14841__1.call(this,n);
case 2:
return G__14841__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14841.cljs$core$IFn$_invoke$arity$1 = G__14841__1;
G__14841.cljs$core$IFn$_invoke$arity$2 = G__14841__2;
return G__14841;
})()
,(function (n,coll){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);
return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct.call(null,binding));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,vars,cljs.core.range.call(null)),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__4433__auto__ = (((binding == null))?null:binding);
var m__4434__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,binding,value);
} else {
var m__4431__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,binding,value);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.call(null);
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.call(null,binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,["Cannot bind value ",cljs.core.pr_str.call(null,coll)," to collection ",cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_.call(null,coll)){
return datascript.query.empty_rel.call(null,binding__$1);
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__14842_SHARP_){
return datascript.query.in__GT_rel.call(null,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(binding__$1),p1__14842_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,["Cannot bind value ",cljs.core.pr_str.call(null,coll)," to tuple ",cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if((cljs.core.count.call(null,coll) < cljs.core.count.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.call(null,["Not enough elements in a collection ",cljs.core.pr_str.call(null,coll)," to bind tuple ",cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__14843_SHARP_,p2__14844_SHARP_){
return datascript.query.in__GT_rel.call(null,p1__14843_SHARP_,p2__14844_SHARP_);
});})(binding__$1))
,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__14845){
var vec__14846 = p__14845;
var binding = cljs.core.nth.call(null,vec__14846,(0),null);
var value = cljs.core.nth.call(null,vec__14846,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar)))){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.call(null,binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules.call(null,value));
} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel.call(null,binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.call(null,datascript.query.resolve_in,context,cljs.core.zipmap.call(null,bindings,values));
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = attrs.call(null,attr);
if(cljs.core.contains_QMARK_.call(null,datascript.query._STAR_lookup_attrs_STAR_,attr)){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
return datascript.db.entid.call(null,datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_.call(null,eid)){
return datascript.db.entid.call(null,datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count.call(null,getters) === (1))){
return cljs.core.first.call(null,getters);
} else {
var getters__$1 = cljs.core.to_array.call(null,getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.call(null,getters__$1.map(((function (getters__$1){
return (function (p1__14849_SHARP_){
return p1__14849_SHARP_.call(null,tuple);
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5459__auto__ = cljs.core.first.call(null,tuples__$1);
if((temp__5459__auto__ == null)){
return cljs.core.persistent_BANG_.call(null,hash_table);
} else {
var tuple = temp__5459__auto__;
var key = key_fn.call(null,tuple);
var G__14851 = cljs.core.next.call(null,tuples__$1);
var G__14852 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__14851;
hash_table = G__14852;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__14853_SHARP_){
return datascript.query.getter_fn.call(null,attrs1,p1__14853_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__14854_SHARP_){
return datascript.query.getter_fn.call(null,attrs2,p1__14854_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys.call(null,attrs1);
var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));
var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn.call(null,common_gtrs1);
var hash = datascript.query.hash_attrs.call(null,key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn.call(null,common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = key_fn2.call(null,tuple2);
var temp__5459__auto__ = cljs.core.get.call(null,hash,key);
if((temp__5459__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5459__auto__;
return cljs.core.reduce.call(null,((function (tuples1__$1,temp__5459__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__5459__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__14858 = a;
var map__14858__$1 = (((((!((map__14858 == null))))?(((((map__14858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14858):map__14858);
var attrs_a = cljs.core.get.call(null,map__14858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__14858__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__14859 = b;
var map__14859__$1 = (((((!((map__14859 == null))))?(((((map__14859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14859):map__14859);
var attrs_b = cljs.core.get.call(null,map__14859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__14859__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys.call(null,attrs_a,attrs_b);
var getters_b = cljs.core.map.call(null,((function (map__14858,map__14858__$1,attrs_a,tuples_a,map__14859,map__14859__$1,attrs_b,tuples_b,attrs){
return (function (p1__14855_SHARP_){
return datascript.query.getter_fn.call(null,attrs_b,p1__14855_SHARP_);
});})(map__14858,map__14858__$1,attrs_a,tuples_a,map__14859,map__14859__$1,attrs_b,tuples_b,attrs))
,attrs);
var key_fn_b = datascript.query.tuple_key_fn.call(null,getters_b);
var hash = datascript.query.hash_attrs.call(null,key_fn_b,tuples_b);
var getters_a = cljs.core.map.call(null,((function (map__14858,map__14858__$1,attrs_a,tuples_a,map__14859,map__14859__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash){
return (function (p1__14856_SHARP_){
return datascript.query.getter_fn.call(null,attrs_a,p1__14856_SHARP_);
});})(map__14858,map__14858__$1,attrs_a,tuples_a,map__14859,map__14859__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash))
,attrs);
var key_fn_a = datascript.query.tuple_key_fn.call(null,getters_a);
return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv.call(null,((function (map__14858,map__14858__$1,attrs_a,tuples_a,map__14859,map__14859__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a){
return (function (p1__14857_SHARP_){
return (hash.call(null,key_fn_a.call(null,p1__14857_SHARP_)) == null);
});})(map__14858,map__14858__$1,attrs_a,tuples_a,map__14859,map__14859__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a))
,tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.call(null,(function (p1__14862_SHARP_){
if((p1__14862_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__14862_SHARP_;
}
}),pattern);
var datoms = datascript.db._search.call(null,db,search_pattern);
var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (search_pattern,datoms){
return (function (p__14863){
var vec__14864 = p__14863;
var s = cljs.core.nth.call(null,vec__14864,(0),null);
var _ = cljs.core.nth.call(null,vec__14864,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(search_pattern,datoms))
,cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4120__auto__ = tuple__$1;
if(cljs.core.truth_(and__4120__auto__)){
return pattern__$1;
} else {
return and__4120__auto__;
}
})())){
var t = cljs.core.first.call(null,tuple__$1);
var p = cljs.core.first.call(null,pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p)))){
var G__14867 = cljs.core.next.call(null,tuple__$1);
var G__14868 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__14867;
pattern__$1 = G__14868;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.call(null,(function (p1__14869_SHARP_){
return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__14869_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (data){
return (function (p__14870){
var vec__14871 = p__14870;
var s = cljs.core.nth.call(null,vec__14871,(0),null);
var _ = cljs.core.nth.call(null,vec__14871,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(data))
,cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.call(null,cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause))){
return clause;
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db.call(null,source,pattern);
} else {
return datascript.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5459__auto__ = cljs.core.first.call(null,rels__$1);
if((temp__5459__auto__ == null)){
return cljs.core.conj.call(null,acc,new_rel__$1);
} else {
var rel = temp__5459__auto__;
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__14875 = cljs.core.next.call(null,rels__$1);
var G__14876 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__14877 = acc;
rels__$1 = G__14875;
new_rel__$1 = G__14876;
acc = G__14877;
continue;
} else {
var G__14878 = cljs.core.next.call(null,rels__$1);
var G__14879 = new_rel__$1;
var G__14880 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__14878;
new_rel__$1 = G__14879;
acc = G__14880;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some.call(null,(function (p1__14881_SHARP_){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__14881_SHARP_),sym)){
return p1__14881_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5461__auto__ = datascript.query.rel_with_attr.call(null,context,sym);
if((temp__5461__auto__ == null)){
return null;
} else {
var rel = temp__5461__auto__;
var temp__5461__auto____$1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5461__auto____$1 == null)){
return null;
} else {
var tuple = temp__5461__auto____$1;
return (tuple[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some.call(null,(function (p1__14882_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__14882_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.call(null,(function (p1__14883_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__14883_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (rels,production){
return (function (p1__14884_SHARP_){
return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__14884_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count.call(null,args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var n__4607__auto___14885 = len;
var i_14886 = (0);
while(true){
if((i_14886 < n__4607__auto___14885)){
var arg_14887 = cljs.core.nth.call(null,args,i_14886);
if((arg_14887 instanceof cljs.core.Symbol)){
var temp__5459__auto___14888 = cljs.core.get.call(null,sources,arg_14887);
if((temp__5459__auto___14888 == null)){
(tuples_args[i_14886] = cljs.core.get.call(null,attrs,arg_14887));
} else {
var source_14889 = temp__5459__auto___14888;
(static_args[i_14886] = source_14889);
}
} else {
(static_args[i_14886] = arg_14887);
}

var G__14890 = (i_14886 + (1));
i_14886 = G__14890;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone.call(null,static_args);
var n__4607__auto___14891 = len;
var i_14892 = (0);
while(true){
if((i_14892 < n__4607__auto___14891)){
var temp__5461__auto___14893 = (tuples_args[i_14892]);
if((temp__5461__auto___14893 == null)){
} else {
var tuple_idx_14894 = temp__5461__auto___14893;
var v_14895 = (tuple[tuple_idx_14894]);
(args__$1[i_14892] = v_14895);
}

var G__14896 = (i_14892 + (1));
i_14892 = G__14896;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,args__$1);
});
;})(sources,attrs,len,static_args,tuples_args))
} else {
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__4607__auto___14897 = len;
var i_14898 = (0);
while(true){
if((i_14898 < n__4607__auto___14897)){
var temp__5461__auto___14899 = (tuples_args[i_14898]);
if((temp__5461__auto___14899 == null)){
} else {
var tuple_idx_14900 = temp__5461__auto___14899;
var v_14901 = (tuple[tuple_idx_14900]);
(static_args[i_14898] = v_14901);
}

var G__14902 = (i_14898 + (1));
i_14898 = G__14902;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,static_args);
});
;})(sources,attrs,len,static_args,tuples_args))
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__14904 = clause;
var vec__14907 = cljs.core.nth.call(null,vec__14904,(0),null);
var seq__14908 = cljs.core.seq.call(null,vec__14907);
var first__14909 = cljs.core.first.call(null,seq__14908);
var seq__14908__$1 = cljs.core.next.call(null,seq__14908);
var f = first__14909;
var args = seq__14908__$1;
var pred = (function (){var or__4131__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = datascript.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = datascript.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
if((datascript.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,["Unknown predicate '",cljs.core.pr_str.call(null,f)," in ",cljs.core.pr_str.call(null,clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__14910 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__14910,(0),null);
var production = cljs.core.nth.call(null,vec__14910,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn.call(null,context__$1,production,pred,args);
return cljs.core.update.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),((function (tuple_pred,vec__14904,vec__14907,seq__14908,first__14909,seq__14908__$1,f,args,pred,vec__14910,context__$1,production){
return (function (p1__14903_SHARP_){
return cljs.core.filter.call(null,tuple_pred,p1__14903_SHARP_);
});})(tuple_pred,vec__14904,vec__14907,seq__14908,first__14909,seq__14908__$1,f,args,pred,vec__14910,context__$1,production))
);
})():cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.call(null,context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__14913 = clause;
var vec__14916 = cljs.core.nth.call(null,vec__14913,(0),null);
var seq__14917 = cljs.core.seq.call(null,vec__14916);
var first__14918 = cljs.core.first.call(null,seq__14917);
var seq__14917__$1 = cljs.core.next.call(null,seq__14917);
var f = first__14918;
var args = seq__14917__$1;
var out = cljs.core.nth.call(null,vec__14913,(1),null);
var binding = datascript.parser.parse_binding.call(null,out);
var fun = (function (){var or__4131__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = datascript.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = datascript.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
if((datascript.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,["Unknown function '",cljs.core.pr_str.call(null,f)," in ",cljs.core.pr_str.call(null,clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__14919 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__14919,(0),null);
var production = cljs.core.nth.call(null,vec__14919,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn.call(null,context__$1,production,fun,args);
var rels = (function (){var iter__4523__auto__ = ((function (tuple_fn,vec__14913,vec__14916,seq__14917,first__14918,seq__14917__$1,f,args,out,binding,fun,vec__14919,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__14922(s__14923){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__14913,vec__14916,seq__14917,first__14918,seq__14917__$1,f,args,out,binding,fun,vec__14919,context__$1,production){
return (function (){
var s__14923__$1 = s__14923;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14923__$1);
if(temp__5457__auto__){
var s__14923__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14923__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14923__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14925 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14924 = (0);
while(true){
if((i__14924 < size__4522__auto__)){
var tuple = cljs.core._nth.call(null,c__4521__auto__,i__14924);
var val = tuple_fn.call(null,tuple);
if((!((val == null)))){
cljs.core.chunk_append.call(null,b__14925,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)));

var G__14926 = (i__14924 + (1));
i__14924 = G__14926;
continue;
} else {
var G__14927 = (i__14924 + (1));
i__14924 = G__14927;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14925),datascript$query$bind_by_fn_$_iter__14922.call(null,cljs.core.chunk_rest.call(null,s__14923__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14925),null);
}
} else {
var tuple = cljs.core.first.call(null,s__14923__$2);
var val = tuple_fn.call(null,tuple);
if((!((val == null)))){
return cljs.core.cons.call(null,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)),datascript$query$bind_by_fn_$_iter__14922.call(null,cljs.core.rest.call(null,s__14923__$2)));
} else {
var G__14928 = cljs.core.rest.call(null,s__14923__$2);
s__14923__$1 = G__14928;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__14913,vec__14916,seq__14917,first__14918,seq__14917__$1,f,args,out,binding,fun,vec__14919,context__$1,production))
,null,null));
});})(tuple_fn,vec__14913,vec__14916,seq__14917,first__14918,seq__14917__$1,f,args,out,binding,fun,vec__14919,context__$1,production))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_.call(null,rels)){
return datascript.query.prod_rel.call(null,production,datascript.query.empty_rel.call(null,binding));
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.call(null,cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel.call(null,binding)));
return cljs.core.update.call(null,context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return ((cljs.core.sequential_QMARK_.call(null,clause)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause)))));
});
datascript.query.rule_seqid = cljs.core.atom.call(null,(0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__14930 = clause;
var seq__14931 = cljs.core.seq.call(null,vec__14930);
var first__14932 = cljs.core.first.call(null,seq__14931);
var seq__14931__$1 = cljs.core.next.call(null,seq__14931);
var rule = first__14932;
var call_args = seq__14931__$1;
var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4523__auto__ = ((function (vec__14930,seq__14931,first__14932,seq__14931__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__14933(s__14934){
return (new cljs.core.LazySeq(null,((function (vec__14930,seq__14931,first__14932,seq__14931__$1,rule,call_args,seqid,branches){
return (function (){
var s__14934__$1 = s__14934;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14934__$1);
if(temp__5457__auto__){
var s__14934__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14934__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14934__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14936 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14935 = (0);
while(true){
if((i__14935 < size__4522__auto__)){
var branch = cljs.core._nth.call(null,c__4521__auto__,i__14935);
var vec__14937 = branch;
var seq__14938 = cljs.core.seq.call(null,vec__14937);
var first__14939 = cljs.core.first.call(null,seq__14938);
var seq__14938__$1 = cljs.core.next.call(null,seq__14938);
var vec__14940 = first__14939;
var seq__14941 = cljs.core.seq.call(null,vec__14940);
var first__14942 = cljs.core.first.call(null,seq__14941);
var seq__14941__$1 = cljs.core.next.call(null,seq__14941);
var _ = first__14942;
var rule_args = seq__14941__$1;
var clauses = seq__14938__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
cljs.core.chunk_append.call(null,b__14936,clojure.walk.postwalk.call(null,((function (i__14935,vec__14937,seq__14938,first__14939,seq__14938__$1,vec__14940,seq__14941,first__14942,seq__14941__$1,_,rule_args,clauses,replacements,branch,c__4521__auto__,size__4522__auto__,b__14936,s__14934__$2,temp__5457__auto__,vec__14930,seq__14931,first__14932,seq__14931__$1,rule,call_args,seqid,branches){
return (function (p1__14929_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__14929_SHARP_)){
var x__11074__auto__ = replacements.call(null,p1__14929_SHARP_);
if((x__11074__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,p1__14929_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__11074__auto__;
}
} else {
return p1__14929_SHARP_;
}
});})(i__14935,vec__14937,seq__14938,first__14939,seq__14938__$1,vec__14940,seq__14941,first__14942,seq__14941__$1,_,rule_args,clauses,replacements,branch,c__4521__auto__,size__4522__auto__,b__14936,s__14934__$2,temp__5457__auto__,vec__14930,seq__14931,first__14932,seq__14931__$1,rule,call_args,seqid,branches))
,clauses));

var G__14949 = (i__14935 + (1));
i__14935 = G__14949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14936),datascript$query$expand_rule_$_iter__14933.call(null,cljs.core.chunk_rest.call(null,s__14934__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14936),null);
}
} else {
var branch = cljs.core.first.call(null,s__14934__$2);
var vec__14943 = branch;
var seq__14944 = cljs.core.seq.call(null,vec__14943);
var first__14945 = cljs.core.first.call(null,seq__14944);
var seq__14944__$1 = cljs.core.next.call(null,seq__14944);
var vec__14946 = first__14945;
var seq__14947 = cljs.core.seq.call(null,vec__14946);
var first__14948 = cljs.core.first.call(null,seq__14947);
var seq__14947__$1 = cljs.core.next.call(null,seq__14947);
var _ = first__14948;
var rule_args = seq__14947__$1;
var clauses = seq__14944__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__14943,seq__14944,first__14945,seq__14944__$1,vec__14946,seq__14947,first__14948,seq__14947__$1,_,rule_args,clauses,replacements,branch,s__14934__$2,temp__5457__auto__,vec__14930,seq__14931,first__14932,seq__14931__$1,rule,call_args,seqid,branches){
return (function (p1__14929_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__14929_SHARP_)){
var x__11074__auto__ = replacements.call(null,p1__14929_SHARP_);
if((x__11074__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,p1__14929_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__11074__auto__;
}
} else {
return p1__14929_SHARP_;
}
});})(vec__14943,seq__14944,first__14945,seq__14944__$1,vec__14946,seq__14947,first__14948,seq__14947__$1,_,rule_args,clauses,replacements,branch,s__14934__$2,temp__5457__auto__,vec__14930,seq__14931,first__14932,seq__14931__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__14933.call(null,cljs.core.rest.call(null,s__14934__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14930,seq__14931,first__14932,seq__14931__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__14930,seq__14931,first__14932,seq__14931__$1,rule,call_args,seqid,branches))
;
return iter__4523__auto__.call(null,branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.call(null,(function (p__14950){
var vec__14951 = p__14950;
var x = cljs.core.nth.call(null,vec__14951,(0),null);
var y = cljs.core.nth.call(null,vec__14951,(1),null);
return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__14954 = rule_clause;
var seq__14955 = cljs.core.seq.call(null,vec__14954);
var first__14956 = cljs.core.first.call(null,seq__14955);
var seq__14955__$1 = cljs.core.next.call(null,seq__14955);
var rule = first__14956;
var call_args = seq__14955__$1;
var prev_call_args = cljs.core.get.call(null,used_args,rule);
var iter__4523__auto__ = ((function (vec__14954,seq__14955,first__14956,seq__14955__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__14957(s__14958){
return (new cljs.core.LazySeq(null,((function (vec__14954,seq__14955,first__14956,seq__14955__$1,rule,call_args,prev_call_args){
return (function (){
var s__14958__$1 = s__14958;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14958__$1);
if(temp__5457__auto__){
var s__14958__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14958__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14958__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14960 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14959 = (0);
while(true){
if((i__14959 < size__4522__auto__)){
var prev_args = cljs.core._nth.call(null,c__4521__auto__,i__14959);
var vec__14961 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__14961,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__14961,(1),null);
cljs.core.chunk_append.call(null,b__14960,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));

var G__14967 = (i__14959 + (1));
i__14959 = G__14967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14960),datascript$query$rule_gen_guards_$_iter__14957.call(null,cljs.core.chunk_rest.call(null,s__14958__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14960),null);
}
} else {
var prev_args = cljs.core.first.call(null,s__14958__$2);
var vec__14964 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__14964,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__14964,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),datascript$query$rule_gen_guards_$_iter__14957.call(null,cljs.core.rest.call(null,s__14958__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14954,seq__14955,first__14956,seq__14955__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__14954,seq__14955,first__14956,seq__14955__$1,rule,call_args,prev_call_args))
;
return iter__4523__auto__.call(null,prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk.call(null,((function (res){
return (function (p1__14968_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__14968_SHARP_))){
cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__14968_SHARP_);
} else {
}

return p1__14968_SHARP_;
});})(res))
,form);

return cljs.core.deref.call(null,res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set.call(null,datascript.query.walk_collect.call(null,clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars.call(null,clauses);
var pred = ((function (bound_vars){
return (function (p__14969){
var vec__14970 = p__14969;
var vec__14973 = cljs.core.nth.call(null,vec__14970,(0),null);
var seq__14974 = cljs.core.seq.call(null,vec__14973);
var first__14975 = cljs.core.first.call(null,seq__14974);
var seq__14974__$1 = cljs.core.next.call(null,seq__14974);
var _ = first__14975;
var vars = seq__14974__$1;
return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.call(null,datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__14976_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__14976_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5459__auto__ = cljs.core.first.call(null,stack);
if((temp__5459__auto__ == null)){
return rel;
} else {
var frame = temp__5459__auto__;
var vec__14995 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__5459__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__14977_SHARP_){
return (!(datascript.query.rule_QMARK_.call(null,context,p1__14977_SHARP_)));
});})(stack,rel,frame,temp__5459__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.call(null,vec__14995,(0),null);
var vec__14998 = cljs.core.nth.call(null,vec__14995,(1),null);
var seq__14999 = cljs.core.seq.call(null,vec__14998);
var first__15000 = cljs.core.first.call(null,seq__14999);
var seq__14999__$1 = cljs.core.next.call(null,seq__14999);
var rule_clause = first__15000;
var next_clauses = seq__14999__$1;
if((rule_clause == null)){
var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datascript.query._collect.call(null,context__$1,final_attrs);
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__15011 = cljs.core.next.call(null,stack);
var G__15012 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__15011;
rel = G__15012;
continue;
} else {
var vec__15001 = rule_clause;
var seq__15002 = cljs.core.seq.call(null,vec__15001);
var first__15003 = cljs.core.first.call(null,seq__15002);
var seq__15002__$1 = cljs.core.next.call(null,seq__15002);
var rule = first__15003;
var call_args = seq__15002__$1;
var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__15004 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.call(null,vec__15004,(0),null);
var pending_gs = cljs.core.nth.call(null,vec__15004,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__15001,seq__15002,first__15003,seq__15002__$1,rule,call_args,guards,vec__15004,active_gs,pending_gs,vec__14995,clauses,vec__14998,seq__14999,first__15000,seq__14999__$1,rule_clause,next_clauses,frame,temp__5459__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__14978_SHARP_){
return cljs.core._EQ_.call(null,p1__14978_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__15001,seq__15002,first__15003,seq__15002__$1,rule,call_args,guards,vec__15004,active_gs,pending_gs,vec__14995,clauses,vec__14998,seq__14999,first__15000,seq__14999__$1,rule_clause,next_clauses,frame,temp__5459__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__15013 = cljs.core.next.call(null,stack);
var G__15014 = rel;
stack = G__15013;
rel = G__15014;
continue;
} else {
var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);
var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context))){
var G__15015 = cljs.core.next.call(null,stack);
var G__15016 = rel;
stack = G__15015;
rel = G__15016;
continue;
} else {
var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);
var G__15017 = cljs.core.concat.call(null,(function (){var iter__4523__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__15001,seq__15002,first__15003,seq__15002__$1,rule,call_args,guards,vec__15004,active_gs,pending_gs,vec__14995,clauses,vec__14998,seq__14999,first__15000,seq__14999__$1,rule_clause,next_clauses,frame,temp__5459__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__15007(s__15008){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__15001,seq__15002,first__15003,seq__15002__$1,rule,call_args,guards,vec__15004,active_gs,pending_gs,vec__14995,clauses,vec__14998,seq__14999,first__15000,seq__14999__$1,rule_clause,next_clauses,frame,temp__5459__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__15008__$1 = s__15008;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15008__$1);
if(temp__5457__auto__){
var s__15008__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15008__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15008__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15010 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15009 = (0);
while(true){
if((i__15009 < size__4522__auto__)){
var branch = cljs.core._nth.call(null,c__4521__auto__,i__15009);
cljs.core.chunk_append.call(null,b__15010,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__15019 = (i__15009 + (1));
i__15009 = G__15019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15010),datascript$query$solve_rule_$_iter__15007.call(null,cljs.core.chunk_rest.call(null,s__15008__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15010),null);
}
} else {
var branch = cljs.core.first.call(null,s__15008__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__15007.call(null,cljs.core.rest.call(null,s__15008__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__15001,seq__15002,first__15003,seq__15002__$1,rule,call_args,guards,vec__15004,active_gs,pending_gs,vec__14995,clauses,vec__14998,seq__14999,first__15000,seq__14999__$1,rule_clause,next_clauses,frame,temp__5459__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__15001,seq__15002,first__15003,seq__15002__$1,rule,call_args,guards,vec__15004,active_gs,pending_gs,vec__14995,clauses,vec__14998,seq__14999,first__15000,seq__14999__$1,rule_clause,next_clauses,frame,temp__5459__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4523__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__15018 = rel;
stack = G__15017;
rel = G__15018;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source))){
var vec__15021 = pattern;
var e = cljs.core.nth.call(null,vec__15021,(0),null);
var a = cljs.core.nth.call(null,vec__15021,(1),null);
var v = cljs.core.nth.call(null,vec__15021,(2),null);
var tx = cljs.core.nth.call(null,vec__15021,(3),null);
return cljs.core.subvec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4131__auto__ = datascript.query.lookup_ref_QMARK_.call(null,e);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.query.attr_QMARK_.call(null,e);
}
})())?datascript.db.entid_strict.call(null,source,e):e),a,(cljs.core.truth_((function (){var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = datascript.query.attr_QMARK_.call(null,a);
if(and__4120__auto____$1){
var and__4120__auto____$2 = datascript.db.ref_QMARK_.call(null,source,a);
if(and__4120__auto____$2){
var or__4131__auto__ = datascript.query.lookup_ref_QMARK_.call(null,v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.query.attr_QMARK_.call(null,v);
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?datascript.db.entid_strict.call(null,source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_.call(null,tx))?datascript.db.entid_strict.call(null,source,tx):tx)], null),(0),cljs.core.count.call(null,pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__15024 = pattern;
var e = cljs.core.nth.call(null,vec__15024,(0),null);
var a = cljs.core.nth.call(null,vec__15024,(1),null);
var v = cljs.core.nth.call(null,vec__15024,(2),null);
var tx = cljs.core.nth.call(null,vec__15024,(3),null);
var G__15027 = cljs.core.PersistentHashSet.EMPTY;
var G__15027__$1 = ((datascript.query.free_var_QMARK_.call(null,e))?cljs.core.conj.call(null,G__15027,e):G__15027);
var G__15027__$2 = ((datascript.query.free_var_QMARK_.call(null,tx))?cljs.core.conj.call(null,G__15027__$1,tx):G__15027__$1);
if(((datascript.query.free_var_QMARK_.call(null,v)) && ((!(datascript.query.free_var_QMARK_.call(null,a)))) && (datascript.db.ref_QMARK_.call(null,source,a)))){
return cljs.core.conj.call(null,G__15027__$2,v);
} else {
return G__15027__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5461__auto__ = cljs.core.not_empty.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5461__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5461__auto__;
return cljs.core.assoc.call(null,rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.call(null,(function (p1__15028_SHARP_){
return datascript.query.limit_rel.call(null,p1__15028_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.check_bound = (function datascript$query$check_bound(context,vars,form){
var bound = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p1__15029_SHARP_){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__15029_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
if(clojure.set.subset_QMARK_.call(null,vars,bound)){
return null;
} else {
var missing = clojure.set.difference.call(null,cljs.core.set.call(null,vars),bound);
throw cljs.core.ex_info.call(null,["Insufficient bindings: ",cljs.core.pr_str.call(null,missing)," not bound in ",cljs.core.pr_str.call(null,form)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__15036 = arguments.length;
switch (G__15036) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.call(null,context,clause,clause);
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__15037 = datascript.query.looks_like_QMARK_;
var expr__15038 = clause;
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__15038))){
return datascript.query.filter_by_pred.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__15038))){
return datascript.query.bind_by_fn.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__15038))){
var vec__15040 = clause;
var seq__15041 = cljs.core.seq.call(null,vec__15040);
var first__15042 = cljs.core.first.call(null,seq__15041);
var seq__15041__$1 = cljs.core.next.call(null,seq__15041);
var source_sym = first__15042;
var rest = seq__15041__$1;
var _STAR_implicit_source_STAR__orig_val__15043 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__15044 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__15044;

try{return datascript.query._resolve_clause.call(null,context,rest,clause);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__15043;
}} else {
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__15038))){
var vec__15045 = clause;
var seq__15046 = cljs.core.seq.call(null,vec__15045);
var first__15047 = cljs.core.first.call(null,seq__15046);
var seq__15046__$1 = cljs.core.next.call(null,seq__15046);
var _ = first__15047;
var branches = seq__15046__$1;
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__15045,seq__15046,first__15047,seq__15046__$1,_,branches,pred__15037,expr__15038){
return (function (p1__15030_SHARP_){
return datascript.query.resolve_clause.call(null,context,p1__15030_SHARP_);
});})(context,clause,orig_clause,vec__15045,seq__15046,first__15047,seq__15046__$1,_,branches,pred__15037,expr__15038))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__15045,seq__15046,first__15047,seq__15046__$1,_,branches,contexts,pred__15037,expr__15038){
return (function (p1__15031_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__15031_SHARP_));
});})(context,clause,orig_clause,vec__15045,seq__15046,first__15047,seq__15046__$1,_,branches,contexts,pred__15037,expr__15038))
,contexts);
return cljs.core.assoc.call(null,cljs.core.first.call(null,contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__15038))){
var vec__15048 = clause;
var seq__15049 = cljs.core.seq.call(null,vec__15048);
var first__15050 = cljs.core.first.call(null,seq__15049);
var seq__15049__$1 = cljs.core.next.call(null,seq__15049);
var _ = first__15050;
var first__15050__$1 = cljs.core.first.call(null,seq__15049__$1);
var seq__15049__$2 = cljs.core.next.call(null,seq__15049__$1);
var vec__15051 = first__15050__$1;
var seq__15052 = cljs.core.seq.call(null,vec__15051);
var first__15053 = cljs.core.first.call(null,seq__15052);
var seq__15052__$1 = cljs.core.next.call(null,seq__15052);
var req_vars = first__15053;
var vars = seq__15052__$1;
var branches = seq__15049__$2;
datascript.query.check_bound.call(null,context,req_vars,orig_clause);

var G__15070 = context;
var G__15071 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.call(null,req_vars,vars),branches);
var G__15072 = clause;
context = G__15070;
clause = G__15071;
orig_clause = G__15072;
continue;
} else {
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__15038))){
var vec__15054 = clause;
var seq__15055 = cljs.core.seq.call(null,vec__15054);
var first__15056 = cljs.core.first.call(null,seq__15055);
var seq__15055__$1 = cljs.core.next.call(null,seq__15055);
var _ = first__15056;
var first__15056__$1 = cljs.core.first.call(null,seq__15055__$1);
var seq__15055__$2 = cljs.core.next.call(null,seq__15055__$1);
var vars = first__15056__$1;
var branches = seq__15055__$2;
var vars__$1 = cljs.core.set.call(null,vars);
var join_context = datascript.query.limit_context.call(null,context,vars__$1);
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__15054,seq__15055,first__15056,seq__15055__$1,_,first__15056__$1,seq__15055__$2,vars,branches,vars__$1,join_context,pred__15037,expr__15038){
return (function (p1__15032_SHARP_){
return datascript.query.limit_context.call(null,datascript.query.resolve_clause.call(null,join_context,p1__15032_SHARP_),vars__$1);
});})(context,clause,orig_clause,vec__15054,seq__15055,first__15056,seq__15055__$1,_,first__15056__$1,seq__15055__$2,vars,branches,vars__$1,join_context,pred__15037,expr__15038))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__15054,seq__15055,first__15056,seq__15055__$1,_,first__15056__$1,seq__15055__$2,vars,branches,vars__$1,join_context,contexts,pred__15037,expr__15038){
return (function (p1__15033_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__15033_SHARP_));
});})(context,clause,orig_clause,vec__15054,seq__15055,first__15056,seq__15055__$1,_,first__15056__$1,seq__15055__$2,vars,branches,vars__$1,join_context,contexts,pred__15037,expr__15038))
,contexts);
var sum_rel = cljs.core.reduce.call(null,datascript.query.sum_rel,rels);
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__15038))){
var vec__15057 = clause;
var seq__15058 = cljs.core.seq.call(null,vec__15057);
var first__15059 = cljs.core.first.call(null,seq__15058);
var seq__15058__$1 = cljs.core.next.call(null,seq__15058);
var _ = first__15059;
var clauses = seq__15058__$1;
return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__15038))){
var vec__15060 = clause;
var seq__15061 = cljs.core.seq.call(null,vec__15060);
var first__15062 = cljs.core.first.call(null,seq__15061);
var seq__15061__$1 = cljs.core.next.call(null,seq__15061);
var _ = first__15062;
var clauses = seq__15061__$1;
var bound_vars = cljs.core.set.call(null,cljs.core.mapcat.call(null,((function (context,clause,orig_clause,vec__15060,seq__15061,first__15062,seq__15061__$1,_,clauses,pred__15037,expr__15038){
return (function (p1__15034_SHARP_){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__15034_SHARP_));
});})(context,clause,orig_clause,vec__15060,seq__15061,first__15062,seq__15061__$1,_,clauses,pred__15037,expr__15038))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
var negation_vars = datascript.query.collect_vars.call(null,clauses);
var ___$1 = ((cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,bound_vars,negation_vars)))?(function(){throw cljs.core.ex_info.call(null,["Insufficient bindings: none of ",cljs.core.pr_str.call(null,negation_vars)," is bound in ",cljs.core.pr_str.call(null,orig_clause)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.call(null,datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__15038))){
var vec__15063 = clause;
var seq__15064 = cljs.core.seq.call(null,vec__15063);
var first__15065 = cljs.core.first.call(null,seq__15064);
var seq__15064__$1 = cljs.core.next.call(null,seq__15064);
var _ = first__15065;
var first__15065__$1 = cljs.core.first.call(null,seq__15064__$1);
var seq__15064__$2 = cljs.core.next.call(null,seq__15064__$1);
var vars = first__15065__$1;
var clauses = seq__15064__$2;
var ___$1 = datascript.query.check_bound.call(null,context,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context.call(null,context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context.call(null,cljs.core.reduce.call(null,datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__15037.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__15038))){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs.call(null,source,clause);
var relation = datascript.query.lookup_pattern.call(null,source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__15066 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__15067 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs.call(null,source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__15067;

try{return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__15066;
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15038)].join('')));
}
}
}
}
}
}
}
}
}
}
break;
}
});

datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3;

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_.call(null,context,clause)){
if(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause))){
var _STAR_implicit_source_STAR__orig_val__15073 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__15074 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first.call(null,clause));
datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__15074;

try{return datascript.query.resolve_clause.call(null,context,cljs.core.next.call(null,clause));
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__15073;
}} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule.call(null,context,clause));
}
} else {
return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__15075 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__15076 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__15076;

try{return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__15075;
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__15079 = arguments.length;
switch (G__15079) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array.call(null,cljs.core.count.call(null,symbols))], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5459__auto__ = cljs.core.first.call(null,rels);
if((temp__5459__auto__ == null)){
return acc;
} else {
var rel = temp__5459__auto__;
var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_.call(null,keep_attrs)){
var G__15087 = acc;
var G__15088 = cljs.core.next.call(null,rels);
var G__15089 = symbols;
acc = G__15087;
rels = G__15088;
symbols = G__15089;
continue;
} else {
var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel,temp__5459__auto__){
return (function (p1__15077_SHARP_){
return cljs.core.get.call(null,keep_attrs,p1__15077_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5459__auto__))
,symbols));
var len = cljs.core.count.call(null,symbols);
var G__15090 = (function (){var iter__4523__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5459__auto__){
return (function datascript$query$iter__15080(s__15081){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5459__auto__){
return (function (){
var s__15081__$1 = s__15081;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15081__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var t1 = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__15081__$1,acc,rels,symbols,t1,xs__6012__auto__,temp__5457__auto__,copy_map,len,keep_attrs,rel,temp__5459__auto__){
return (function datascript$query$iter__15080_$_iter__15082(s__15083){
return (new cljs.core.LazySeq(null,((function (s__15081__$1,acc,rels,symbols,t1,xs__6012__auto__,temp__5457__auto__,copy_map,len,keep_attrs,rel,temp__5459__auto__){
return (function (){
var s__15083__$1 = s__15083;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__15083__$1);
if(temp__5457__auto____$1){
var s__15083__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15083__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15083__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15085 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15084 = (0);
while(true){
if((i__15084 < size__4522__auto__)){
var t2 = cljs.core._nth.call(null,c__4521__auto__,i__15084);
cljs.core.chunk_append.call(null,b__15085,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4607__auto___15093 = len;
var i_15094 = (0);
while(true){
if((i_15094 < n__4607__auto___15093)){
var temp__5461__auto___15095 = (copy_map[i_15094]);
if((temp__5461__auto___15095 == null)){
} else {
var idx_15096 = temp__5461__auto___15095;
(res[i_15094] = (t2[idx_15096]));
}

var G__15097 = (i_15094 + (1));
i_15094 = G__15097;
continue;
} else {
}
break;
}

return res;
})());

var G__15098 = (i__15084 + (1));
i__15084 = G__15098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15085),datascript$query$iter__15080_$_iter__15082.call(null,cljs.core.chunk_rest.call(null,s__15083__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15085),null);
}
} else {
var t2 = cljs.core.first.call(null,s__15083__$2);
return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4607__auto___15099 = len;
var i_15100 = (0);
while(true){
if((i_15100 < n__4607__auto___15099)){
var temp__5461__auto___15101 = (copy_map[i_15100]);
if((temp__5461__auto___15101 == null)){
} else {
var idx_15102 = temp__5461__auto___15101;
(res[i_15100] = (t2[idx_15102]));
}

var G__15103 = (i_15100 + (1));
i_15100 = G__15103;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__15080_$_iter__15082.call(null,cljs.core.rest.call(null,s__15083__$2)));
}
} else {
return null;
}
break;
}
});})(s__15081__$1,acc,rels,symbols,t1,xs__6012__auto__,temp__5457__auto__,copy_map,len,keep_attrs,rel,temp__5459__auto__))
,null,null));
});})(s__15081__$1,acc,rels,symbols,t1,xs__6012__auto__,temp__5457__auto__,copy_map,len,keep_attrs,rel,temp__5459__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,datascript$query$iter__15080.call(null,cljs.core.rest.call(null,s__15081__$1)));
} else {
var G__15104 = cljs.core.rest.call(null,s__15081__$1);
s__15081__$1 = G__15104;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5459__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5459__auto__))
;
return iter__4523__auto__.call(null,acc);
})();
var G__15091 = cljs.core.next.call(null,rels);
var G__15092 = symbols;
acc = G__15090;
rels = G__15091;
symbols = G__15092;
continue;
}
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datascript.query._collect.call(null,context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__4433__auto__ = (((var$ == null))?null:var$);
var m__4434__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,var$,context);
} else {
var m__4431__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,var$,context);
} else {
throw cljs.core.missing_protocol.call(null,"IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val.call(null,context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4131__auto__ = cljs.core.get.call(null,datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.query.resolve_sym.call(null,var$__$1.symbol);
}
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.call(null,(function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_.call(null,element)){
var f = datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.call(null,((function (f){
return (function (p1__15105_SHARP_){
return datascript.query._context_resolve.call(null,p1__15105_SHARP_,context);
});})(f))
,cljs.core.butlast.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.call(null,((function (f,args){
return (function (p1__15106_SHARP_){
return cljs.core.nth.call(null,p1__15106_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__15107_SHARP_,p2__15108_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__15107_SHARP_))){
return p2__15108_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.call(null)));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of.call(null,cljs.core.complement.call(null,datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.call(null,((function (group_idxs){
return (function (p1__15109_SHARP_){
return cljs.core.nth.call(null,tuple,p1__15109_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by.call(null,group_fn,resultset);
var iter__4523__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__15110(s__15111){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__15111__$1 = s__15111;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15111__$1);
if(temp__5457__auto__){
var s__15111__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15111__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15111__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15113 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15112 = (0);
while(true){
if((i__15112 < size__4522__auto__)){
var vec__15114 = cljs.core._nth.call(null,c__4521__auto__,i__15112);
var _ = cljs.core.nth.call(null,vec__15114,(0),null);
var tuples = cljs.core.nth.call(null,vec__15114,(1),null);
cljs.core.chunk_append.call(null,b__15113,datascript.query._aggregate.call(null,find_elements,context,tuples));

var G__15120 = (i__15112 + (1));
i__15112 = G__15120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15113),datascript$query$aggregate_$_iter__15110.call(null,cljs.core.chunk_rest.call(null,s__15111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15113),null);
}
} else {
var vec__15117 = cljs.core.first.call(null,s__15111__$2);
var _ = cljs.core.nth.call(null,vec__15117,(0),null);
var tuples = cljs.core.nth.call(null,vec__15117,(1),null);
return cljs.core.cons.call(null,datascript.query._aggregate.call(null,find_elements,context,tuples),datascript$query$aggregate_$_iter__15110.call(null,cljs.core.rest.call(null,s__15111__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__4523__auto__.call(null,grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__4433__auto__ = (((find == null))?null:find);
var m__4434__auto__ = (datascript.query._post_process[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,find,tuples);
} else {
var m__4431__auto__ = (datascript.query._post_process["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,find,tuples);
} else {
throw cljs.core.missing_protocol.call(null,"IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst.call(null,tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first.call(null,tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4523__auto__ = (function datascript$query$pull_$_iter__15121(s__15122){
return (new cljs.core.LazySeq(null,(function (){
var s__15122__$1 = s__15122;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15122__$1);
if(temp__5457__auto__){
var s__15122__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15122__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15122__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15124 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15123 = (0);
while(true){
if((i__15123 < size__4522__auto__)){
var find = cljs.core._nth.call(null,c__4521__auto__,i__15123);
cljs.core.chunk_append.call(null,b__15124,((datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__15135 = (i__15123 + (1));
i__15123 = G__15135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15124),datascript$query$pull_$_iter__15121.call(null,cljs.core.chunk_rest.call(null,s__15122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15124),null);
}
} else {
var find = cljs.core.first.call(null,s__15122__$2);
return cljs.core.cons.call(null,((datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__15121.call(null,cljs.core.rest.call(null,s__15122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,find_elements);
})();
var iter__4523__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__15125(s__15126){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__15126__$1 = s__15126;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15126__$1);
if(temp__5457__auto__){
var s__15126__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15126__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15126__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15128 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15127 = (0);
while(true){
if((i__15127 < size__4522__auto__)){
var tuple = cljs.core._nth.call(null,c__4521__auto__,i__15127);
cljs.core.chunk_append.call(null,b__15128,cljs.core.mapv.call(null,((function (i__15127,tuple,c__4521__auto__,size__4522__auto__,b__15128,s__15126__$2,temp__5457__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__15129 = env;
var src = cljs.core.nth.call(null,vec__15129,(0),null);
var spec = cljs.core.nth.call(null,vec__15129,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__15127,tuple,c__4521__auto__,size__4522__auto__,b__15128,s__15126__$2,temp__5457__auto__,resolved))
,resolved,tuple));

var G__15136 = (i__15127 + (1));
i__15127 = G__15136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15128),datascript$query$pull_$_iter__15125.call(null,cljs.core.chunk_rest.call(null,s__15126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15128),null);
}
} else {
var tuple = cljs.core.first.call(null,s__15126__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (tuple,s__15126__$2,temp__5457__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__15132 = env;
var src = cljs.core.nth.call(null,vec__15132,(0),null);
var spec = cljs.core.nth.call(null,vec__15132,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__15126__$2,temp__5457__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__15125.call(null,cljs.core.rest.call(null,s__15126__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__4523__auto__.call(null,resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_.call(null,datascript.lru.lru.call(null,(100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5459__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,datascript.query.query_cache),q,null);
if((temp__5459__auto__ == null)){
var qp = datascript.parser.parse_query.call(null,q);
cljs.core._vreset_BANG_.call(null,datascript.query.query_cache,cljs.core.assoc.call(null,cljs.core._deref.call(null,datascript.query.query_cache),q,qp));

return qp;
} else {
var cached = temp__5459__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15142 = arguments.length;
var i__4731__auto___15143 = (0);
while(true){
if((i__4731__auto___15143 < len__4730__auto___15142)){
args__4736__auto__.push((arguments[i__4731__auto___15143]));

var G__15144 = (i__4731__auto___15143 + (1));
i__4731__auto___15143 = G__15144;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query.call(null,q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements.call(null,find);
var find_vars = datascript.parser.find_vars.call(null,find);
var result_arity = cljs.core.count.call(null,find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.call(null,find_vars,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__15140 = q;
if(cljs.core.sequential_QMARK_.call(null,q)){
return datascript.parser.query__GT_map.call(null,G__15140);
} else {
return G__15140;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),all_vars);
var G__15141 = resultset;
var G__15141__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.call(null,((function (G__15141,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__15137_SHARP_){
return cljs.core.vec.call(null,cljs.core.subvec.call(null,p1__15137_SHARP_,(0),result_arity));
});})(G__15141,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__15141):G__15141);
var G__15141__$2 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate.call(null,find_elements,context,G__15141__$1):G__15141__$1);
var G__15141__$3 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull.call(null,find_elements,context,G__15141__$2):G__15141__$2);
return datascript.query._post_process.call(null,find,G__15141__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
datascript.query.q.cljs$lang$applyTo = (function (seq15138){
var G__15139 = cljs.core.first.call(null,seq15138);
var seq15138__$1 = cljs.core.next.call(null,seq15138);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15139,seq15138__$1);
});


//# sourceMappingURL=query.js.map
