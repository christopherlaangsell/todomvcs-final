// Compiled by ClojureScript 1.10.520 {}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if(((typeof eid === 'number') || (cljs.core.sequential_QMARK_.call(null,eid)) || ((eid instanceof cljs.core.Keyword)))){
return datascript.db.entid.call(null,db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(datascript.db.db_QMARK_.call(null,db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5457__auto__ = datascript.impl.entity.entid.call(null,db,eid);
if(cljs.core.truth_(temp__5457__auto__)){
var e = temp__5457__auto__;
return datascript.impl.entity.__GT_Entity.call(null,db,e,cljs.core.volatile_BANG_.call(null,false),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_.call(null,db,a)){
if(datascript.db.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__14600_SHARP_,p2__14601_SHARP_){
return cljs.core.conj.call(null,p1__14600_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__14601_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__14602_SHARP_,p2__14603_SHARP_){
return cljs.core.conj.call(null,p1__14602_SHARP_,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__14603_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__5455__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__5455__auto__)){
var datoms = temp__5455__auto__;
if(datascript.db.component_QMARK_.call(null,db,attr)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return cljs.core.reduce.call(null,((function (datoms,temp__5455__auto__){
return (function (p1__14604_SHARP_,p2__14605_SHARP_){
return cljs.core.conj.call(null,p1__14604_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p2__14605_SHARP_)));
});})(datoms,temp__5455__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__4523__auto__ = (function datascript$impl$entity$js_seq_$_iter__14606(s__14607){
return (new cljs.core.LazySeq(null,(function (){
var s__14607__$1 = s__14607;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14607__$1);
if(temp__5457__auto__){
var s__14607__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14607__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14607__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14609 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14608 = (0);
while(true){
if((i__14608 < size__4522__auto__)){
var vec__14610 = cljs.core._nth.call(null,c__4521__auto__,i__14608);
var a = cljs.core.nth.call(null,vec__14610,(0),null);
var v = cljs.core.nth.call(null,vec__14610,(1),null);
cljs.core.chunk_append.call(null,b__14609,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__14616 = (i__14608 + (1));
i__14608 = G__14616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14609),datascript$impl$entity$js_seq_$_iter__14606.call(null,cljs.core.chunk_rest.call(null,s__14607__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14609),null);
}
} else {
var vec__14613 = cljs.core.first.call(null,s__14607__$2);
var a = cljs.core.nth.call(null,vec__14613,(0),null);
var v = cljs.core.nth.call(null,vec__14613,(1),null);
return cljs.core.cons.call(null,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__14606.call(null,cljs.core.rest.call(null,s__14607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__14651 = null;
var G__14651__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__14618 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__14619 = null;
var count__14620 = (0);
var i__14621 = (0);
while(true){
if((i__14621 < count__14620)){
var vec__14628 = cljs.core._nth.call(null,chunk__14619,i__14621);
var a = cljs.core.nth.call(null,vec__14628,(0),null);
var v = cljs.core.nth.call(null,vec__14628,(1),null);
f.call(null,v,a,this$);


var G__14652 = seq__14618;
var G__14653 = chunk__14619;
var G__14654 = count__14620;
var G__14655 = (i__14621 + (1));
seq__14618 = G__14652;
chunk__14619 = G__14653;
count__14620 = G__14654;
i__14621 = G__14655;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14618);
if(temp__5457__auto__){
var seq__14618__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14618__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__14618__$1);
var G__14656 = cljs.core.chunk_rest.call(null,seq__14618__$1);
var G__14657 = c__4550__auto__;
var G__14658 = cljs.core.count.call(null,c__4550__auto__);
var G__14659 = (0);
seq__14618 = G__14656;
chunk__14619 = G__14657;
count__14620 = G__14658;
i__14621 = G__14659;
continue;
} else {
var vec__14631 = cljs.core.first.call(null,seq__14618__$1);
var a = cljs.core.nth.call(null,vec__14631,(0),null);
var v = cljs.core.nth.call(null,vec__14631,(1),null);
f.call(null,v,a,this$);


var G__14660 = cljs.core.next.call(null,seq__14618__$1);
var G__14661 = null;
var G__14662 = (0);
var G__14663 = (0);
seq__14618 = G__14660;
chunk__14619 = G__14661;
count__14620 = G__14662;
i__14621 = G__14663;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__14651__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__14634 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__14635 = null;
var count__14636 = (0);
var i__14637 = (0);
while(true){
if((i__14637 < count__14636)){
var vec__14644 = cljs.core._nth.call(null,chunk__14635,i__14637);
var a = cljs.core.nth.call(null,vec__14644,(0),null);
var v = cljs.core.nth.call(null,vec__14644,(1),null);
f.call(use_as_this,v,a,this$);


var G__14664 = seq__14634;
var G__14665 = chunk__14635;
var G__14666 = count__14636;
var G__14667 = (i__14637 + (1));
seq__14634 = G__14664;
chunk__14635 = G__14665;
count__14636 = G__14666;
i__14637 = G__14667;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14634);
if(temp__5457__auto__){
var seq__14634__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14634__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__14634__$1);
var G__14668 = cljs.core.chunk_rest.call(null,seq__14634__$1);
var G__14669 = c__4550__auto__;
var G__14670 = cljs.core.count.call(null,c__4550__auto__);
var G__14671 = (0);
seq__14634 = G__14668;
chunk__14635 = G__14669;
count__14636 = G__14670;
i__14637 = G__14671;
continue;
} else {
var vec__14647 = cljs.core.first.call(null,seq__14634__$1);
var a = cljs.core.nth.call(null,vec__14647,(0),null);
var v = cljs.core.nth.call(null,vec__14647,(1),null);
f.call(use_as_this,v,a,this$);


var G__14672 = cljs.core.next.call(null,seq__14634__$1);
var G__14673 = null;
var G__14674 = (0);
var G__14675 = (0);
seq__14634 = G__14672;
chunk__14635 = G__14673;
count__14636 = G__14674;
i__14637 = G__14675;
continue;
}
} else {
return null;
}
}
break;
}
});
G__14651 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__14651__1.call(this,f);
case 2:
return G__14651__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14651.cljs$core$IFn$_invoke$arity$1 = G__14651__1;
G__14651.cljs$core$IFn$_invoke$arity$2 = G__14651__2;
return G__14651;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,datascript.db.reverse_ref.call(null,attr),null));
} else {
var G__14650 = datascript.impl.entity.lookup_entity.call(null,this$,attr);
if(datascript.db.multival_QMARK_.call(null,self__.db,attr)){
return datascript.impl.entity.multival__GT_js.call(null,G__14650);
} else {
return G__14650;
}
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return datascript.impl.entity.equiv_entity.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return (!((this$.get(attr) == null)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.equiv_entity.call(null,this$__$1,o);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),datascript.impl.entity.lookup_entity.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__14676 = null;
var G__14676__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});
var G__14676__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});
G__14676 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14676__2.call(this,self__,k);
case 3:
return G__14676__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14676.cljs$core$IFn$_invoke$arity$2 = G__14676__2;
G__14676.cljs$core$IFn$_invoke$arity$3 = G__14676__3;
return G__14676;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args14617){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14617)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"datascript.impl.entity/Entity");
});

/**
 * Positional factory function for datascript.impl.entity/Entity.
 */
datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return (((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,this$.eid,that.eid)));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var G__14678 = arguments.length;
switch (G__14678) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.call(null,this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity._lookup_backwards.call(null,this$.db,this$.eid,datascript.db.reverse_ref.call(null,attr),not_found);
} else {
var temp__5459__auto__ = cljs.core.deref.call(null,this$.cache).call(null,attr);
if((temp__5459__auto__ == null)){
if(cljs.core.truth_(cljs.core.deref.call(null,this$.touched))){
return not_found;
} else {
var temp__5459__auto____$1 = cljs.core.not_empty.call(null,datascript.db._search.call(null,this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if((temp__5459__auto____$1 == null)){
return not_found;
} else {
var datoms = temp__5459__auto____$1;
var value = datascript.impl.entity.entity_attr.call(null,this$.db,attr,datoms);
cljs.core.vreset_BANG_.call(null,this$.cache,cljs.core.assoc.call(null,cljs.core.deref.call(null,this$.cache),attr,value));

return value;
}
}
} else {
var v = temp__5459__auto__;
return v;
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;

datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv.call(null,(function (acc,a,v){
return cljs.core.assoc.call(null,acc,a,((datascript.db.component_QMARK_.call(null,db,a))?((datascript.db.multival_QMARK_.call(null,db,a))?cljs.core.set.call(null,cljs.core.map.call(null,datascript.impl.entity.touch,v)):datascript.impl.entity.touch.call(null,v)):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,part));
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(datascript.impl.entity.entity_QMARK_.call(null,e)){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref.call(null,e.touched))){
} else {
var temp__5457__auto___14680 = cljs.core.not_empty.call(null,datascript.db._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__5457__auto___14680)){
var datoms_14681 = temp__5457__auto___14680;
cljs.core.vreset_BANG_.call(null,e.cache,datascript.impl.entity.touch_components.call(null,e.db,datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_14681)));

cljs.core.vreset_BANG_.call(null,e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity",datascript.impl.entity.Entity);

//# sourceMappingURL=entity.js.map
