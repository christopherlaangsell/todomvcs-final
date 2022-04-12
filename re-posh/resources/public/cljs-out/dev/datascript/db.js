// Compiled by ClojureScript 1.10.520 {}
goog.provide('datascript.db');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('clojure.data');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('me.tonsky.persistent_sorted_set.arrays');
datascript.db.Exception = Error;

datascript.db.IllegalArgumentException = Error;

datascript.db.UnsupportedOperationException = Error;
datascript.db.e0 = (0);
datascript.db.tx0 = (536870912);
datascript.db.emax = (2147483647);
datascript.db.txmax = (2147483647);
datascript.db.implicit_schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
datascript.db.seqable_QMARK_ = (function datascript$db$seqable_QMARK_(x){
return (((!(typeof x === 'string'))) && (((cljs.core.seqable_QMARK_.call(null,x)) || (me.tonsky.persistent_sorted_set.arrays.array_QMARK_.call(null,x)))));
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.db.cljs_env_QMARK_ = (function datascript$db$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
datascript.db.combine_hashes = (function datascript$db$combine_hashes(x,y){
return cljs.core.hash_combine.call(null,x,y);
});






/**
 * @interface
 */
datascript.db.IDatom = function(){};

datascript.db.datom_tx = (function datascript$db$datom_tx(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$db$IDatom$datom_tx$arity$1 == null)))))){
return this$.datascript$db$IDatom$datom_tx$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (datascript.db.datom_tx[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (datascript.db.datom_tx["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDatom.datom-tx",this$);
}
}
}
});

datascript.db.datom_added = (function datascript$db$datom_added(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$db$IDatom$datom_added$arity$1 == null)))))){
return this$.datascript$db$IDatom$datom_added$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (datascript.db.datom_added[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (datascript.db.datom_added["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDatom.datom-added",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {datascript.db.IDatom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.db.Datom = (function (e,a,v,tx,_hash){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
datascript.db.Datom.prototype.datascript$db$IDatom$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.Datom.prototype.datascript$db$IDatom$datom_tx$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
if((self__.tx > (0))){
return self__.tx;
} else {
return (- self__.tx);
}
});

datascript.db.Datom.prototype.datascript$db$IDatom$datom_added$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return (self__.tx > (0));
});

datascript.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
if((self__._hash === (0))){
return self__._hash = datascript.db.hash_datom.call(null,d__$1);
} else {
return self__._hash;
}
});

datascript.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__4120__auto__ = (o instanceof datascript.db.Datom);
if(and__4120__auto__){
return datascript.db.equiv_datom.call(null,d__$1,o);
} else {
return and__4120__auto__;
}
});

datascript.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return datascript.db.seq_datom.call(null,d__$1);
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return datascript.db.val_at_datom.call(null,d__$1,k,null);
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return datascript.db.val_at_datom.call(null,d__$1,k,nf);
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return datascript.db.nth_datom.call(null,this$__$1,i);
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.db.nth_datom.call(null,this$__$1,i,not_found);
});

datascript.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return datascript.db.assoc_datom.call(null,d__$1,k,v__$1);
});

datascript.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,datascript.db.datom_tx.call(null,d__$1),datascript.db.datom_added.call(null,d__$1)], null));
});

datascript.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.with_meta(new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

datascript.db.Datom.cljs$lang$type = true;

datascript.db.Datom.cljs$lang$ctorStr = "datascript.db/Datom";

datascript.db.Datom.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"datascript.db/Datom");
});

/**
 * Positional factory function for datascript.db/Datom.
 */
datascript.db.__GT_Datom = (function datascript$db$__GT_Datom(e,a,v,tx,_hash){
return (new datascript.db.Datom(e,a,v,tx,_hash));
});

goog.exportSymbol("datascript.db.Datom",datascript.db.Datom);
datascript.db.datom = (function datascript$db$datom(var_args){
var G__11722 = arguments.length;
switch (G__11722) {
case 3:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.db.Datom(e,a,v,(536870912),(0)));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.db.Datom(e,a,v,tx,(0)));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,(cljs.core.truth_(added)?tx:(- tx)),(0)));
});

datascript.db.datom.cljs$lang$maxFixedArity = 5;

datascript.db.datom_QMARK_ = (function datascript$db$datom_QMARK_(x){
return (x instanceof datascript.db.Datom);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return datascript.db.combine_hashes.call(null,datascript.db.combine_hashes.call(null,cljs.core.hash.call(null,d.e),cljs.core.hash.call(null,d.a)),cljs.core.hash.call(null,d.v));
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return (((d.e === o.e)) && (cljs.core._EQ_.call(null,d.a,o.a)) && (cljs.core._EQ_.call(null,d.v,o.v)));
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
return (new cljs.core.List(null,d.e,(new cljs.core.List(null,d.a,(new cljs.core.List(null,d.v,(new cljs.core.List(null,datascript.db.datom_tx.call(null,d),(new cljs.core.List(null,datascript.db.datom_added.call(null,d),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
var G__11724 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v","v",21465059),G__11724)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,"e",G__11724)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",2057651688),G__11724)){
return datascript.db.datom_added.call(null,d);
} else {
if(cljs.core._EQ_.call(null,"v",G__11724)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1381269198),G__11724)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,"a",G__11724)){
return d.a;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),G__11724)){
return datascript.db.datom_tx.call(null,d);
} else {
if(cljs.core._EQ_.call(null,"added",G__11724)){
return datascript.db.datom_added.call(null,d);
} else {
if(cljs.core._EQ_.call(null,"tx",G__11724)){
return datascript.db.datom_tx.call(null,d);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),G__11724)){
return d.a;
} else {
return not_found;

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
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var G__11726 = arguments.length;
switch (G__11726) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__11727 = i;
switch (G__11727) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return datascript.db.datom_tx.call(null,d);

break;
case (4):
return datascript.db.datom_added.call(null,d);

break;
default:
throw (new Error(["Datom/-nth: Index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__11728 = i;
switch (G__11728) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return datascript.db.datom_tx.call(null,d);

break;
case (4):
return datascript.db.datom_added.call(null,d);

break;
default:
return not_found;

}
});

datascript.db.nth_datom.cljs$lang$maxFixedArity = 3;

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
var G__11732 = k;
var G__11732__$1 = (((G__11732 instanceof cljs.core.Keyword))?G__11732.fqn:null);
switch (G__11732__$1) {
case "e":
return datascript.db.datom.call(null,v,d.a,d.v,datascript.db.datom_tx.call(null,d),datascript.db.datom_added.call(null,d));

break;
case "a":
return datascript.db.datom.call(null,d.e,v,d.v,datascript.db.datom_tx.call(null,d),datascript.db.datom_added.call(null,d));

break;
case "v":
return datascript.db.datom.call(null,d.e,d.a,v,datascript.db.datom_tx.call(null,d),datascript.db.datom_added.call(null,d));

break;
case "tx":
return datascript.db.datom.call(null,d.e,d.a,d.v,v,datascript.db.datom_added.call(null,d));

break;
case "added":
return datascript.db.datom.call(null,d.e,d.a,d.v,datascript.db.datom_tx.call(null,d),v);

break;
default:
throw (new datascript.db.IllegalArgumentException(["invalid key for #datascript/Datom: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));

}
});
datascript.db.datom_from_reader = (function datascript$db$datom_from_reader(vec){
return cljs.core.apply.call(null,datascript.db.datom,vec);
});
datascript.db.cmp = (function datascript$db$cmp(o1,o2){
if((o1 == null)){
return (0);
} else {
if((o2 == null)){
return (0);
} else {
return cljs.core.compare.call(null,o1,o2);
}
}
});
datascript.db.cmp_datoms_eavt = (function datascript$db$cmp_datoms_eavt(d1,d2){
var c__11180__auto__ = (d1.e - d2.e);
if(((0) === c__11180__auto__)){
var c__11180__auto____$1 = datascript.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__11180__auto____$1)){
var c__11180__auto____$2 = datascript.db.cmp.call(null,d1.v,d2.v);
if(((0) === c__11180__auto____$2)){
var c__11180__auto____$3 = (datascript.db.datom_tx.call(null,d1) - datascript.db.datom_tx.call(null,d2));
if(((0) === c__11180__auto____$3)){
return (0);
} else {
return c__11180__auto____$3;
}
} else {
return c__11180__auto____$2;
}
} else {
return c__11180__auto____$1;
}
} else {
return c__11180__auto__;
}
});
datascript.db.cmp_datoms_aevt = (function datascript$db$cmp_datoms_aevt(d1,d2){
var c__11180__auto__ = datascript.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__11180__auto__)){
var c__11180__auto____$1 = (d1.e - d2.e);
if(((0) === c__11180__auto____$1)){
var c__11180__auto____$2 = datascript.db.cmp.call(null,d1.v,d2.v);
if(((0) === c__11180__auto____$2)){
var c__11180__auto____$3 = (datascript.db.datom_tx.call(null,d1) - datascript.db.datom_tx.call(null,d2));
if(((0) === c__11180__auto____$3)){
return (0);
} else {
return c__11180__auto____$3;
}
} else {
return c__11180__auto____$2;
}
} else {
return c__11180__auto____$1;
}
} else {
return c__11180__auto__;
}
});
datascript.db.cmp_datoms_avet = (function datascript$db$cmp_datoms_avet(d1,d2){
var c__11180__auto__ = datascript.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__11180__auto__)){
var c__11180__auto____$1 = datascript.db.cmp.call(null,d1.v,d2.v);
if(((0) === c__11180__auto____$1)){
var c__11180__auto____$2 = (d1.e - d2.e);
if(((0) === c__11180__auto____$2)){
var c__11180__auto____$3 = (datascript.db.datom_tx.call(null,d1) - datascript.db.datom_tx.call(null,d2));
if(((0) === c__11180__auto____$3)){
return (0);
} else {
return c__11180__auto____$3;
}
} else {
return c__11180__auto____$2;
}
} else {
return c__11180__auto____$1;
}
} else {
return c__11180__auto__;
}
});
datascript.db.cmp_attr_quick = (function datascript$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare.call(null,a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.db.cmp_datoms_eavt_quick = (function datascript$db$cmp_datoms_eavt_quick(d1,d2){
var c__11180__auto__ = (d1.e - d2.e);
if(((0) === c__11180__auto__)){
var c__11180__auto____$1 = datascript.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__11180__auto____$1)){
var c__11180__auto____$2 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__11180__auto____$2)){
var c__11180__auto____$3 = (datascript.db.datom_tx.call(null,d1) - datascript.db.datom_tx.call(null,d2));
if(((0) === c__11180__auto____$3)){
return (0);
} else {
return c__11180__auto____$3;
}
} else {
return c__11180__auto____$2;
}
} else {
return c__11180__auto____$1;
}
} else {
return c__11180__auto__;
}
});
datascript.db.cmp_datoms_aevt_quick = (function datascript$db$cmp_datoms_aevt_quick(d1,d2){
var c__11180__auto__ = datascript.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__11180__auto__)){
var c__11180__auto____$1 = (d1.e - d2.e);
if(((0) === c__11180__auto____$1)){
var c__11180__auto____$2 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__11180__auto____$2)){
var c__11180__auto____$3 = (datascript.db.datom_tx.call(null,d1) - datascript.db.datom_tx.call(null,d2));
if(((0) === c__11180__auto____$3)){
return (0);
} else {
return c__11180__auto____$3;
}
} else {
return c__11180__auto____$2;
}
} else {
return c__11180__auto____$1;
}
} else {
return c__11180__auto__;
}
});
datascript.db.cmp_datoms_avet_quick = (function datascript$db$cmp_datoms_avet_quick(d1,d2){
var c__11180__auto__ = datascript.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__11180__auto__)){
var c__11180__auto____$1 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__11180__auto____$1)){
var c__11180__auto____$2 = (d1.e - d2.e);
if(((0) === c__11180__auto____$2)){
var c__11180__auto____$3 = (datascript.db.datom_tx.call(null,d1) - datascript.db.datom_tx.call(null,d2));
if(((0) === c__11180__auto____$3)){
return (0);
} else {
return c__11180__auto____$3;
}
} else {
return c__11180__auto____$2;
}
} else {
return c__11180__auto____$1;
}
} else {
return c__11180__auto__;
}
});
datascript.db.diff_sorted = (function datascript$db$diff_sorted(a,b,cmp){
var only_a = cljs.core.PersistentVector.EMPTY;
var only_b = cljs.core.PersistentVector.EMPTY;
var both = cljs.core.PersistentVector.EMPTY;
var a__$1 = a;
var b__$1 = b;
while(true){
if(cljs.core.empty_QMARK_.call(null,a__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty.call(null,only_a),cljs.core.not_empty.call(null,cljs.core.into.call(null,only_b,b__$1)),cljs.core.not_empty.call(null,both)], null);
} else {
if(cljs.core.empty_QMARK_.call(null,b__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty.call(null,cljs.core.into.call(null,only_a,a__$1)),cljs.core.not_empty.call(null,only_b),cljs.core.not_empty.call(null,both)], null);
} else {
var first_a = cljs.core.first.call(null,a__$1);
var first_b = cljs.core.first.call(null,b__$1);
var diff = cmp.call(null,first_a,first_b);
if((diff === (0))){
var G__11735 = only_a;
var G__11736 = only_b;
var G__11737 = cljs.core.conj.call(null,both,first_a);
var G__11738 = cljs.core.next.call(null,a__$1);
var G__11739 = cljs.core.next.call(null,b__$1);
only_a = G__11735;
only_b = G__11736;
both = G__11737;
a__$1 = G__11738;
b__$1 = G__11739;
continue;
} else {
if((diff < (0))){
var G__11740 = cljs.core.conj.call(null,only_a,first_a);
var G__11741 = only_b;
var G__11742 = both;
var G__11743 = cljs.core.next.call(null,a__$1);
var G__11744 = b__$1;
only_a = G__11740;
only_b = G__11741;
both = G__11742;
a__$1 = G__11743;
b__$1 = G__11744;
continue;
} else {
if((diff > (0))){
var G__11745 = only_a;
var G__11746 = cljs.core.conj.call(null,only_b,first_b);
var G__11747 = both;
var G__11748 = a__$1;
var G__11749 = cljs.core.next.call(null,b__$1);
only_a = G__11745;
only_b = G__11746;
both = G__11747;
a__$1 = G__11748;
b__$1 = G__11749;
continue;
} else {
return null;
}
}
}

}
}
break;
}
});

/**
 * @interface
 */
datascript.db.ISearch = function(){};

datascript.db._search = (function datascript$db$_search(data,pattern){
if((((!((data == null)))) && ((!((data.datascript$db$ISearch$_search$arity$2 == null)))))){
return data.datascript$db$ISearch$_search$arity$2(data,pattern);
} else {
var x__4433__auto__ = (((data == null))?null:data);
var m__4434__auto__ = (datascript.db._search[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,data,pattern);
} else {
var m__4431__auto__ = (datascript.db._search["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,data,pattern);
} else {
throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
}
});


/**
 * @interface
 */
datascript.db.IIndexAccess = function(){};

datascript.db._datoms = (function datascript$db$_datoms(db,index,components){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_datoms$arity$3 == null)))))){
return db.datascript$db$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__4433__auto__ = (((db == null))?null:db);
var m__4434__auto__ = (datascript.db._datoms[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,db,index,components);
} else {
var m__4431__auto__ = (datascript.db._datoms["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-datoms",db);
}
}
}
});

datascript.db._seek_datoms = (function datascript$db$_seek_datoms(db,index,components){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_seek_datoms$arity$3 == null)))))){
return db.datascript$db$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__4433__auto__ = (((db == null))?null:db);
var m__4434__auto__ = (datascript.db._seek_datoms[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,db,index,components);
} else {
var m__4431__auto__ = (datascript.db._seek_datoms["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-seek-datoms",db);
}
}
}
});

datascript.db._rseek_datoms = (function datascript$db$_rseek_datoms(db,index,components){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_rseek_datoms$arity$3 == null)))))){
return db.datascript$db$IIndexAccess$_rseek_datoms$arity$3(db,index,components);
} else {
var x__4433__auto__ = (((db == null))?null:db);
var m__4434__auto__ = (datascript.db._rseek_datoms[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,db,index,components);
} else {
var m__4431__auto__ = (datascript.db._rseek_datoms["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-rseek-datoms",db);
}
}
}
});

datascript.db._index_range = (function datascript$db$_index_range(db,attr,start,end){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_index_range$arity$4 == null)))))){
return db.datascript$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__4433__auto__ = (((db == null))?null:db);
var m__4434__auto__ = (datascript.db._index_range[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,db,attr,start,end);
} else {
var m__4431__auto__ = (datascript.db._index_range["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,db,attr,start,end);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-index-range",db);
}
}
}
});


/**
 * @interface
 */
datascript.db.IDB = function(){};

datascript.db._schema = (function datascript$db$_schema(db){
if((((!((db == null)))) && ((!((db.datascript$db$IDB$_schema$arity$1 == null)))))){
return db.datascript$db$IDB$_schema$arity$1(db);
} else {
var x__4433__auto__ = (((db == null))?null:db);
var m__4434__auto__ = (datascript.db._schema[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,db);
} else {
var m__4431__auto__ = (datascript.db._schema["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,db);
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-schema",db);
}
}
}
});

datascript.db._attrs_by = (function datascript$db$_attrs_by(db,property){
if((((!((db == null)))) && ((!((db.datascript$db$IDB$_attrs_by$arity$2 == null)))))){
return db.datascript$db$IDB$_attrs_by$arity$2(db,property);
} else {
var x__4433__auto__ = (((db == null))?null:db);
var m__4434__auto__ = (datascript.db._attrs_by[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,db,property);
} else {
var m__4431__auto__ = (datascript.db._attrs_by["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,db,property);
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-attrs-by",db);
}
}
}
});








datascript.db.db_transient = (function datascript$db$db_transient(db){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.transient$),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.transient$),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.transient$);
});
datascript.db.db_persistent_BANG_ = (function datascript$db$db_persistent_BANG_(db){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.persistent_BANG_),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.persistent_BANG_),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.persistent_BANG_);
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
datascript.db.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k11752,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__11756 = k11752;
var G__11756__$1 = (((G__11756 instanceof cljs.core.Keyword))?G__11756.fqn:null);
switch (G__11756__$1) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11752,else__4388__auto__);

}
});

datascript.db.DB.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__11757){
var vec__11758 = p__11757;
var k__4408__auto__ = cljs.core.nth.call(null,vec__11758,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__11758,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#datascript.db.DB{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11751){
var self__ = this;
var G__11751__$1 = this;
return (new cljs.core.RecordIter((0),G__11751__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

datascript.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1515640948 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11753,other11754){
var self__ = this;
var this11753__$1 = this;
return (((!((other11754 == null)))) && ((this11753__$1.constructor === other11754.constructor)) && (cljs.core._EQ_.call(null,this11753__$1.schema,other11754.schema)) && (cljs.core._EQ_.call(null,this11753__$1.eavt,other11754.eavt)) && (cljs.core._EQ_.call(null,this11753__$1.aevt,other11754.aevt)) && (cljs.core._EQ_.call(null,this11753__$1.avet,other11754.avet)) && (cljs.core._EQ_.call(null,this11753__$1.max_eid,other11754.max_eid)) && (cljs.core._EQ_.call(null,this11753__$1.max_tx,other11754.max_tx)) && (cljs.core._EQ_.call(null,this11753__$1.rschema,other11754.rschema)) && (cljs.core._EQ_.call(null,this11753__$1.hash,other11754.hash)) && (cljs.core._EQ_.call(null,this11753__$1.__extmap,other11754.__extmap)));
});

datascript.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

datascript.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__11751){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__11761 = cljs.core.keyword_identical_QMARK_;
var expr__11762 = k__4393__auto__;
if(cljs.core.truth_(pred__11761.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__11762))){
return (new datascript.db.DB(G__11751,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11761.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__11762))){
return (new datascript.db.DB(self__.schema,G__11751,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11761.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__11762))){
return (new datascript.db.DB(self__.schema,self__.eavt,G__11751,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11761.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__11762))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,G__11751,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11761.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__11762))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__11751,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11761.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__11762))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__11751,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11761.call(null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),expr__11762))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__11751,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11761.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),expr__11762))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__11751,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__11751),null));
}
}
}
}
}
}
}
}
});

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash,null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__11751){
var self__ = this;
var this__4384__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,G__11751,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

datascript.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"eavt","eavt",974094454,null),new cljs.core.Symbol(null,"aevt","aevt",1055383468,null),new cljs.core.Symbol(null,"avet","avet",-1270578737,null),new cljs.core.Symbol(null,"max-eid","max-eid",-519567694,null),new cljs.core.Symbol(null,"max-tx","max-tx",-1534877430,null),new cljs.core.Symbol(null,"rschema","rschema",444397473,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
});

datascript.db.DB.cljs$lang$type = true;

datascript.db.DB.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"datascript.db/DB",null,(1),null));
});

datascript.db.DB.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"datascript.db/DB");
});

/**
 * Positional factory function for datascript.db/DB.
 */
datascript.db.__GT_DB = (function datascript$db$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash){
return (new datascript.db.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,null,null,null));
});

/**
 * Factory function for datascript.db/DB, taking a map of keywords to field values.
 */
datascript.db.map__GT_DB = (function datascript$db$map__GT_DB(G__11755){
var extmap__4424__auto__ = (function (){var G__11764 = cljs.core.dissoc.call(null,G__11755,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.record_QMARK_.call(null,G__11755)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11764);
} else {
return G__11764;
}
})();
return (new datascript.db.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__11755),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__11755),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__11755),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__11755),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__11755),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__11755),new cljs.core.Keyword(null,"rschema","rschema",-1196134054).cljs$core$IFn$_invoke$arity$1(G__11755),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__11755),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


datascript.db.DB.prototype.clojure$data$Diff$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.clojure$data$Diff$diff_similar$arity$2 = (function (a,b){
var a__$1 = this;
return datascript.db.diff_sorted.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(a__$1),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(b),datascript.db.cmp_datoms_eavt_quick);
});

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.db.pr_db.call(null,db__$1,w,opts);
});

datascript.db.DB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IReversible$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq.call(null,db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.hash_db.call(null,db__$1);
});

datascript.db.DB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.db.equiv_db.call(null,db__$1,other);
});

datascript.db.DB.prototype.cljs$core$IEditableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.db_transient.call(null,db__$1);
});

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.empty_db.call(null,db__$1.schema);
});

datascript.db.DB.prototype.cljs$core$ITransientCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (db,key){
var db__$1 = this;
throw cljs.core.ex_info.call(null,"datascript.DB/conj! is not supported",cljs.core.PersistentArrayMap.EMPTY);
});

datascript.db.DB.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.db_persistent_BANG_.call(null,db__$1);
});

datascript.db.DB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq.call(null,db__$1.eavt);
});

datascript.db.DB.prototype.clojure$data$EqualityPartition$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.clojure$data$EqualityPartition$equality_partition$arity$1 = (function (x){
var x__$1 = this;
return new cljs.core.Keyword("datascript","db","datascript/db",-1190971692);
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return me.tonsky.persistent_sorted_set.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(0),(536870912)),datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(2147483647),(2147483647)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return me.tonsky.persistent_sorted_set.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(0),(536870912)),datascript.db.datom.call(null,(2147483647),null,null,(2147483647)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_rseek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return me.tonsky.persistent_sorted_set.rslice.call(null,cljs.core.get.call(null,db__$1,index),datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(2147483647),(2147483647)),datascript.db.datom.call(null,(0),null,null,(536870912)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
if(cljs.core.truth_(datascript.db.indexing_QMARK_.call(null,db__$1,attr))){
} else {
throw cljs.core.ex_info.call(null,["Attribute ",cljs.core.pr_str.call(null,attr)," should be marked as :db/index true"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

datascript.db.validate_attr.call(null,attr,(new cljs.core.List(null,new cljs.core.Symbol(null,"-index-range","-index-range",898114142,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"db","db",-1661185010,null),(new cljs.core.List(null,attr,(new cljs.core.List(null,start,(new cljs.core.List(null,end,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)));

return me.tonsky.persistent_sorted_set.slice.call(null,db__$1.avet,datascript.db.resolve_datom.call(null,db__$1,null,attr,start,null,(0),(536870912)),datascript.db.resolve_datom.call(null,db__$1,null,attr,end,null,(2147483647),(2147483647)));
});

datascript.db.DB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datascript.db.DB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return db__$1.rschema.call(null,property);
});

datascript.db.DB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__11765 = pattern;
var e = cljs.core.nth.call(null,vec__11765,(0),null);
var a = cljs.core.nth.call(null,vec__11765,(1),null);
var v = cljs.core.nth.call(null,vec__11765,(2),null);
var tx = cljs.core.nth.call(null,vec__11765,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if((!((v == null)))){
if(cljs.core.truth_(tx)){
return me.tonsky.persistent_sorted_set.slice.call(null,eavt,datascript.db.datom.call(null,e,a,v,tx),datascript.db.datom.call(null,e,a,v,tx));
} else {
return me.tonsky.persistent_sorted_set.slice.call(null,eavt,datascript.db.datom.call(null,e,a,v,(536870912)),datascript.db.datom.call(null,e,a,v,(2147483647)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,datascript.db.datom_tx.call(null,d));
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.call(null,eavt,datascript.db.datom.call(null,e,a,null,(536870912)),datascript.db.datom.call(null,e,a,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.call(null,eavt,datascript.db.datom.call(null,e,a,null,(536870912)),datascript.db.datom.call(null,e,a,null,(2147483647)));
}
}
} else {
if((!((v == null)))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return ((cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,datascript.db.datom_tx.call(null,d))));
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.call(null,eavt,datascript.db.datom.call(null,e,null,null,(536870912)),datascript.db.datom.call(null,e,null,null,(2147483647))));
} else {
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.call(null,eavt,datascript.db.datom.call(null,e,null,null,(536870912)),datascript.db.datom.call(null,e,null,null,(2147483647))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,datascript.db.datom_tx.call(null,d));
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.call(null,eavt,datascript.db.datom.call(null,e,null,null,(536870912)),datascript.db.datom.call(null,e,null,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.call(null,eavt,datascript.db.datom.call(null,e,null,null,(536870912)),datascript.db.datom.call(null,e,null,null,(2147483647)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if((!((v == null)))){
if(cljs.core.truth_(tx)){
if(cljs.core.truth_(datascript.db.indexing_QMARK_.call(null,db__$1,a))){
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,datascript.db.datom_tx.call(null,d));
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.call(null,avet,datascript.db.datom.call(null,(0),a,v,(536870912)),datascript.db.datom.call(null,(2147483647),a,v,(2147483647))));
} else {
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return ((cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,datascript.db.datom_tx.call(null,d))));
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.call(null,aevt,datascript.db.datom.call(null,(0),a,null,(536870912)),datascript.db.datom.call(null,(2147483647),a,null,(2147483647))));
}
} else {
if(cljs.core.truth_(datascript.db.indexing_QMARK_.call(null,db__$1,a))){
return me.tonsky.persistent_sorted_set.slice.call(null,avet,datascript.db.datom.call(null,(0),a,v,(536870912)),datascript.db.datom.call(null,(2147483647),a,v,(2147483647)));
} else {
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.call(null,aevt,datascript.db.datom.call(null,(0),a,null,(536870912)),datascript.db.datom.call(null,(2147483647),a,null,(2147483647))));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,datascript.db.datom_tx.call(null,d));
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.call(null,aevt,datascript.db.datom.call(null,(0),a,null,(536870912)),datascript.db.datom.call(null,(2147483647),a,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.call(null,aevt,datascript.db.datom.call(null,(0),a,null,(536870912)),datascript.db.datom.call(null,(2147483647),a,null,(2147483647)));
}
}
} else {
if((!((v == null)))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return ((cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,datascript.db.datom_tx.call(null,d))));
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,datascript.db.datom_tx.call(null,d));
});})(vec__11765,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return eavt;
}
}
}
}
});
datascript.db.db_QMARK_ = (function datascript$db$db_QMARK_(x){
var and__4120__auto__ = (((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$ISearch$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,x));
if(and__4120__auto__){
var and__4120__auto____$1 = (((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IIndexAccess$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IIndexAccess,x));
if(and__4120__auto____$1){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IDB$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,x);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
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
datascript.db.FilteredDB = (function (unfiltered_db,pred,hash,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k11778,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__11782 = k11778;
var G__11782__$1 = (((G__11782 instanceof cljs.core.Keyword))?G__11782.fqn:null);
switch (G__11782__$1) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11778,else__4388__auto__);

}
});

datascript.db.FilteredDB.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__11783){
var vec__11784 = p__11783;
var k__4408__auto__ = cljs.core.nth.call(null,vec__11784,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__11784,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#datascript.db.FilteredDB{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11777){
var self__ = this;
var G__11777__$1 = this;
return (new cljs.core.RecordIter((0),G__11777__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

datascript.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-351969977 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11779,other11780){
var self__ = this;
var this11779__$1 = this;
return (((!((other11780 == null)))) && ((this11779__$1.constructor === other11780.constructor)) && (cljs.core._EQ_.call(null,this11779__$1.unfiltered_db,other11780.unfiltered_db)) && (cljs.core._EQ_.call(null,this11779__$1.pred,other11780.pred)) && (cljs.core._EQ_.call(null,this11779__$1.hash,other11780.hash)) && (cljs.core._EQ_.call(null,this11779__$1.__extmap,other11780.__extmap)));
});

datascript.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__11777){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__11787 = cljs.core.keyword_identical_QMARK_;
var expr__11788 = k__4393__auto__;
if(cljs.core.truth_(pred__11787.call(null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__11788))){
return (new datascript.db.FilteredDB(G__11777,self__.pred,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11787.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__11788))){
return (new datascript.db.FilteredDB(self__.unfiltered_db,G__11777,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11787.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),expr__11788))){
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,G__11777,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__11777),null));
}
}
}
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash,null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__11777){
var self__ = this;
var this__4384__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,G__11777,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

datascript.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unfiltered-db","unfiltered-db",276811136,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
});

datascript.db.FilteredDB.cljs$lang$type = true;

datascript.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"datascript.db/FilteredDB",null,(1),null));
});

datascript.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"datascript.db/FilteredDB");
});

/**
 * Positional factory function for datascript.db/FilteredDB.
 */
datascript.db.__GT_FilteredDB = (function datascript$db$__GT_FilteredDB(unfiltered_db,pred,hash){
return (new datascript.db.FilteredDB(unfiltered_db,pred,hash,null,null,null));
});

/**
 * Factory function for datascript.db/FilteredDB, taking a map of keywords to field values.
 */
datascript.db.map__GT_FilteredDB = (function datascript$db$map__GT_FilteredDB(G__11781){
var extmap__4424__auto__ = (function (){var G__11790 = cljs.core.dissoc.call(null,G__11781,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.record_QMARK_.call(null,G__11781)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11790);
} else {
return G__11790;
}
})();
return (new datascript.db.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__11781),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__11781),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__11781),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


datascript.db.FilteredDB.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.db.pr_db.call(null,db__$1,w,opts);
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,datascript.db._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.hash_fdb.call(null,db__$1);
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.db.equiv_db.call(null,db__$1,other);
});

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._seek_datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_rseek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._rseek_datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._index_range.call(null,db__$1.unfiltered_db,attr,start,end));
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._schema.call(null,db__$1.unfiltered_db);
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.db._attrs_by.call(null,db__$1.unfiltered_db,property);
});

datascript.db.FilteredDB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._search.call(null,db__$1.unfiltered_db,pattern));
});
datascript.db.attr__GT_properties = (function datascript$db$attr__GT_properties(k,v){
var G__11792 = v;
var G__11792__$1 = (((G__11792 instanceof cljs.core.Keyword))?G__11792.fqn:null);
switch (G__11792__$1) {
case "db.unique/identity":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
case "db.unique/value":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
case "db.cardinality/many":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null);

break;
case "db.type/ref":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
default:
if(v === true){
var G__11793 = k;
var G__11793__$1 = (((G__11793 instanceof cljs.core.Keyword))?G__11793.fqn:null);
switch (G__11793__$1) {
case "db/isComponent":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null);

break;
case "db/index":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
} else {
return null;
}

}
});
datascript.db.rschema = (function datascript$db$rschema(schema){
return cljs.core.reduce_kv.call(null,(function (m,attr,keys__GT_values){
return cljs.core.reduce_kv.call(null,(function (m__$1,key,value){
return cljs.core.reduce.call(null,(function (m__$2,prop){
return cljs.core.assoc.call(null,m__$2,prop,cljs.core.conj.call(null,cljs.core.get.call(null,m__$2,prop,cljs.core.PersistentHashSet.EMPTY),attr));
}),m__$1,datascript.db.attr__GT_properties.call(null,key,value));
}),m,keys__GT_values);
}),cljs.core.PersistentArrayMap.EMPTY,schema);
});
datascript.db.validate_schema_key = (function datascript$db$validate_schema_key(a,k,v,expected){
if((((v == null)) || (cljs.core.contains_QMARK_.call(null,expected,v)))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Bad attribute specification for ",cljs.core.pr_str.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([a,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v])])),", expected one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}
});
datascript.db.validate_schema = (function datascript$db$validate_schema(schema){
var seq__11796 = cljs.core.seq.call(null,schema);
var chunk__11797 = null;
var count__11798 = (0);
var i__11799 = (0);
while(true){
if((i__11799 < count__11798)){
var vec__11806 = cljs.core._nth.call(null,chunk__11797,i__11799);
var a = cljs.core.nth.call(null,vec__11806,(0),null);
var kv = cljs.core.nth.call(null,vec__11806,(1),null);
var comp_QMARK__11812 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv,false);
datascript.db.validate_schema_key.call(null,a,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__4120__auto__ = comp_QMARK__11812;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__4120__auto__;
}
})())){
throw cljs.core.ex_info.call(null,["Bad attribute specification for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),": {:db/isComponent true} should also have {:db/valueType :db.type/ref}"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key.call(null,a,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key.call(null,a,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key.call(null,a,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));


var G__11813 = seq__11796;
var G__11814 = chunk__11797;
var G__11815 = count__11798;
var G__11816 = (i__11799 + (1));
seq__11796 = G__11813;
chunk__11797 = G__11814;
count__11798 = G__11815;
i__11799 = G__11816;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11796);
if(temp__5457__auto__){
var seq__11796__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11796__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11796__$1);
var G__11817 = cljs.core.chunk_rest.call(null,seq__11796__$1);
var G__11818 = c__4550__auto__;
var G__11819 = cljs.core.count.call(null,c__4550__auto__);
var G__11820 = (0);
seq__11796 = G__11817;
chunk__11797 = G__11818;
count__11798 = G__11819;
i__11799 = G__11820;
continue;
} else {
var vec__11809 = cljs.core.first.call(null,seq__11796__$1);
var a = cljs.core.nth.call(null,vec__11809,(0),null);
var kv = cljs.core.nth.call(null,vec__11809,(1),null);
var comp_QMARK__11821 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv,false);
datascript.db.validate_schema_key.call(null,a,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__4120__auto__ = comp_QMARK__11821;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__4120__auto__;
}
})())){
throw cljs.core.ex_info.call(null,["Bad attribute specification for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),": {:db/isComponent true} should also have {:db/valueType :db.type/ref}"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key.call(null,a,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key.call(null,a,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key.call(null,a,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));


var G__11822 = cljs.core.next.call(null,seq__11796__$1);
var G__11823 = null;
var G__11824 = (0);
var G__11825 = (0);
seq__11796 = G__11822;
chunk__11797 = G__11823;
count__11798 = G__11824;
i__11799 = G__11825;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.db.empty_db = (function datascript$db$empty_db(var_args){
var G__11827 = arguments.length;
switch (G__11827) {
case 0:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.db.empty_db.call(null,null);
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if((((schema == null)) || (cljs.core.map_QMARK_.call(null,schema)))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

datascript.db.validate_schema.call(null,schema);

return datascript.db.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),datascript.db.rschema.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),schema)),new cljs.core.Keyword(null,"eavt","eavt",-666437073),me.tonsky.persistent_sorted_set.sorted_set_by.call(null,datascript.db.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),me.tonsky.persistent_sorted_set.sorted_set_by.call(null,datascript.db.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),me.tonsky.persistent_sorted_set.sorted_set_by.call(null,datascript.db.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),(536870912),new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0))], null));
});

datascript.db.empty_db.cljs$lang$maxFixedArity = 1;

datascript.db.init_max_eid = (function datascript$db$init_max_eid(eavt){
var or__4131__auto__ = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,me.tonsky.persistent_sorted_set.rslice.call(null,eavt,datascript.db.datom.call(null,((536870912) - (1)),null,null,(2147483647)),datascript.db.datom.call(null,(0),null,null,(536870912)))));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
});
datascript.db.init_db = (function datascript$db$init_db(var_args){
var G__11830 = arguments.length;
switch (G__11830) {
case 1:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.db.init_db.call(null,datoms,null);
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
datascript.db.validate_schema.call(null,schema);

var rschema = datascript.db.rschema.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),schema));
var indexed = new cljs.core.Keyword("db","index","db/index",-1531680669).cljs$core$IFn$_invoke$arity$1(rschema);
var arr = (function (){var G__11831 = datoms;
if((!(me.tonsky.persistent_sorted_set.arrays.array_QMARK_.call(null,datoms)))){
return me.tonsky.persistent_sorted_set.arrays.into_array.call(null,G__11831);
} else {
return G__11831;
}
})();
var _ = me.tonsky.persistent_sorted_set.arrays.asort.call(null,arr,datascript.db.cmp_datoms_eavt_quick);
var eavt = me.tonsky.persistent_sorted_set.from_sorted_array.call(null,datascript.db.cmp_datoms_eavt,arr);
var ___$1 = me.tonsky.persistent_sorted_set.arrays.asort.call(null,arr,datascript.db.cmp_datoms_aevt_quick);
var aevt = me.tonsky.persistent_sorted_set.from_sorted_array.call(null,datascript.db.cmp_datoms_aevt,arr);
var avet_datoms = cljs.core.filter.call(null,((function (rschema,indexed,arr,_,eavt,___$1,aevt){
return (function (d){
return cljs.core.contains_QMARK_.call(null,indexed,d.a);
});})(rschema,indexed,arr,_,eavt,___$1,aevt))
,datoms);
var avet_arr = cljs.core.to_array.call(null,avet_datoms);
var ___$2 = me.tonsky.persistent_sorted_set.arrays.asort.call(null,avet_arr,datascript.db.cmp_datoms_avet_quick);
var avet = me.tonsky.persistent_sorted_set.from_sorted_array.call(null,datascript.db.cmp_datoms_avet,avet_arr);
var max_eid = datascript.db.init_max_eid.call(null,eavt);
var max_tx = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (rschema,indexed,arr,_,eavt,___$1,aevt,avet_datoms,avet_arr,___$2,avet,max_eid){
return (function (d){
return datascript.db.datom_tx.call(null,d);
});})(rschema,indexed,arr,_,eavt,___$1,aevt,avet_datoms,avet_arr,___$2,avet,max_eid))
),cljs.core.max,(536870912),eavt);
return datascript.db.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),rschema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eavt,new cljs.core.Keyword(null,"aevt","aevt",-585148059),aevt,new cljs.core.Keyword(null,"avet","avet",1383857032),avet,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),max_eid,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0))], null));
});

datascript.db.init_db.cljs$lang$maxFixedArity = 2;

datascript.db.equiv_db_index = (function datascript$db$equiv_db_index(x,y){
var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__11833 = cljs.core.next.call(null,xs);
var G__11834 = cljs.core.next.call(null,ys);
xs = G__11833;
ys = G__11834;
continue;
} else {
return false;

}
}
break;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
var h = cljs.core.deref.call(null,db.hash);
if((h === (0))){
return cljs.core.reset_BANG_.call(null,db.hash,datascript.db.combine_hashes.call(null,cljs.core.hash.call(null,db.schema),cljs.core.hash.call(null,db.eavt)));
} else {
return h;
}
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
var h = cljs.core.deref.call(null,db.hash);
var datoms = (function (){var or__4131__auto__ = datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((h === (0))){
var datoms__$1 = (function (){var or__4131__auto__ = datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return cljs.core.reset_BANG_.call(null,db.hash,datascript.db.combine_hashes.call(null,cljs.core.hash.call(null,datascript.db._schema.call(null,db)),cljs.core.hash_unordered_coll.call(null,datoms__$1)));
} else {
return h;
}
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
return (((((other instanceof datascript.db.DB)) || ((other instanceof datascript.db.FilteredDB)))) && (cljs.core._EQ_.call(null,datascript.db._schema.call(null,db),datascript.db._schema.call(null,other))) && (datascript.db.equiv_db_index.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),datascript.db._datoms.call(null,other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY))));
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
cljs.core._write.call(null,w,"#datascript/DB {");

cljs.core._write.call(null,w,":schema ");

cljs.core.pr_writer.call(null,datascript.db._schema.call(null,db),w,opts);

cljs.core._write.call(null,w,", :datoms ");

cljs.core.pr_sequential_writer.call(null,w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,datascript.db.datom_tx.call(null,d)], null));
}),"["," ","]",opts,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write.call(null,w,"}");
});
datascript.db.db_from_reader = (function datascript$db$db_from_reader(p__11835){
var map__11836 = p__11835;
var map__11836__$1 = (((((!((map__11836 == null))))?(((((map__11836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11836):map__11836);
var schema = cljs.core.get.call(null,map__11836__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var datoms = cljs.core.get.call(null,map__11836__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return datascript.db.init_db.call(null,cljs.core.map.call(null,((function (map__11836,map__11836__$1,schema,datoms){
return (function (p__11838){
var vec__11839 = p__11838;
var e = cljs.core.nth.call(null,vec__11839,(0),null);
var a = cljs.core.nth.call(null,vec__11839,(1),null);
var v = cljs.core.nth.call(null,vec__11839,(2),null);
var tx = cljs.core.nth.call(null,vec__11839,(3),null);
return datascript.db.datom.call(null,e,a,v,tx);
});})(map__11836,map__11836__$1,schema,datoms))
,datoms),schema);
});


datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t,default_e,default_tx){
if(cljs.core.truth_(a)){
datascript.db.validate_attr.call(null,a,(new cljs.core.List(null,new cljs.core.Symbol(null,"resolve-datom","resolve-datom",-294110827,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"db","db",-1661185010,null),(new cljs.core.List(null,e,(new cljs.core.List(null,a,(new cljs.core.List(null,v,(new cljs.core.List(null,t,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)));
} else {
}

return datascript.db.datom.call(null,(function (){var or__4131__auto__ = datascript.db.entid_some.call(null,db,e);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_e;
}
})(),a,(cljs.core.truth_((function (){var and__4120__auto__ = (!((v == null)));
if(and__4120__auto__){
return datascript.db.ref_QMARK_.call(null,db,a);
} else {
return and__4120__auto__;
}
})())?datascript.db.entid_strict.call(null,db,v):v),(function (){var or__4131__auto__ = datascript.db.entid_some.call(null,db,t);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_tx;
}
})());
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,p__11842,default_e,default_tx){
var vec__11843 = p__11842;
var c0 = cljs.core.nth.call(null,vec__11843,(0),null);
var c1 = cljs.core.nth.call(null,vec__11843,(1),null);
var c2 = cljs.core.nth.call(null,vec__11843,(2),null);
var c3 = cljs.core.nth.call(null,vec__11843,(3),null);
var G__11846 = index;
var G__11846__$1 = (((G__11846 instanceof cljs.core.Keyword))?G__11846.fqn:null);
switch (G__11846__$1) {
case "eavt":
return datascript.db.resolve_datom.call(null,db,c0,c1,c2,c3,default_e,default_tx);

break;
case "aevt":
return datascript.db.resolve_datom.call(null,db,c1,c0,c2,c3,default_e,default_tx);

break;
case "avet":
return datascript.db.resolve_datom.call(null,db,c2,c0,c1,c3,default_e,default_tx);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11846__$1)].join('')));

}
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
datascript.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k11849,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__11853 = k11849;
var G__11853__$1 = (((G__11853 instanceof cljs.core.Keyword))?G__11853.fqn:null);
switch (G__11853__$1) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11849,else__4388__auto__);

}
});

datascript.db.TxReport.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__11854){
var vec__11855 = p__11854;
var k__4408__auto__ = cljs.core.nth.call(null,vec__11855,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__11855,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

datascript.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#datascript.db.TxReport{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11848){
var self__ = this;
var G__11848__$1 = this;
return (new cljs.core.RecordIter((0),G__11848__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

datascript.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-2022644885 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

datascript.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11850,other11851){
var self__ = this;
var this11850__$1 = this;
return (((!((other11851 == null)))) && ((this11850__$1.constructor === other11851.constructor)) && (cljs.core._EQ_.call(null,this11850__$1.db_before,other11851.db_before)) && (cljs.core._EQ_.call(null,this11850__$1.db_after,other11851.db_after)) && (cljs.core._EQ_.call(null,this11850__$1.tx_data,other11851.tx_data)) && (cljs.core._EQ_.call(null,this11850__$1.tempids,other11851.tempids)) && (cljs.core._EQ_.call(null,this11850__$1.tx_meta,other11851.tx_meta)) && (cljs.core._EQ_.call(null,this11850__$1.__extmap,other11851.__extmap)));
});

datascript.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

datascript.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__11848){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__11858 = cljs.core.keyword_identical_QMARK_;
var expr__11859 = k__4393__auto__;
if(cljs.core.truth_(pred__11858.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__11859))){
return (new datascript.db.TxReport(G__11848,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11858.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__11859))){
return (new datascript.db.TxReport(self__.db_before,G__11848,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11858.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__11859))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,G__11848,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11858.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__11859))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__11848,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11858.call(null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__11859))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__11848,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__11848),null));
}
}
}
}
}
});

datascript.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta,null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__11848){
var self__ = this;
var this__4384__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__11848,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

datascript.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-before","db-before",1086839991,null),new cljs.core.Symbol(null,"db-after","db-after",1068646861,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tempids","tempids",-886926680,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null);
});

datascript.db.TxReport.cljs$lang$type = true;

datascript.db.TxReport.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"datascript.db/TxReport",null,(1),null));
});

datascript.db.TxReport.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"datascript.db/TxReport");
});

/**
 * Positional factory function for datascript.db/TxReport.
 */
datascript.db.__GT_TxReport = (function datascript$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

/**
 * Factory function for datascript.db/TxReport, taking a map of keywords to field values.
 */
datascript.db.map__GT_TxReport = (function datascript$db$map__GT_TxReport(G__11852){
var extmap__4424__auto__ = (function (){var G__11861 = cljs.core.dissoc.call(null,G__11852,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
if(cljs.core.record_QMARK_.call(null,G__11852)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11861);
} else {
return G__11861;
}
})();
return (new datascript.db.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__11852),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__11852),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__11852),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__11852),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__11852),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_.call(null,datascript.db._attrs_by.call(null,db,property),attr);
});
datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398));
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","index","db/index",-1531680669));
});
datascript.db.entid = (function datascript$db$entid(db,eid){
while(true){
if(datascript.db.db_QMARK_.call(null,db)){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(((typeof eid === 'number') && ((eid > (0))))){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
var vec__11863 = eid;
var attr = cljs.core.nth.call(null,vec__11863,(0),null);
var value = cljs.core.nth.call(null,vec__11863,(1),null);
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,eid),(2))){
throw cljs.core.ex_info.call(null,["Lookup ref should contain 2 elements: ",cljs.core.pr_str.call(null,eid)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","syntax","lookup-ref/syntax",-317304012),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if((!(datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","unique","db/unique",329396388))))){
throw cljs.core.ex_info.call(null,["Lookup ref attribute should be marked as :db/unique: ",cljs.core.pr_str.call(null,eid)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","unique","lookup-ref/unique",-960647710),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if((value == null)){
return null;
} else {
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),eid)));

}
}
}
} else {
if(cljs.core.array_QMARK_.call(null,eid)){
var G__11866 = db;
var G__11867 = cljs.core.array_seq.call(null,eid);
db = G__11866;
eid = G__11867;
continue;
} else {
if((eid instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),eid], null))));
} else {
throw cljs.core.ex_info.call(null,["Expected number or lookup ref for entity id, got ",cljs.core.pr_str.call(null,eid)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));

}
}
}
}
break;
}
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
var or__4131__auto__ = datascript.db.entid.call(null,db,eid);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,["Nothing found for entity id ",cljs.core.pr_str.call(null,eid)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","missing","entity-id/missing",1234588374),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
}
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.db.entid_strict.call(null,db,eid);
} else {
return null;
}
});
datascript.db.validate_datom = (function datascript$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__4120__auto__ = datascript.db.datom_added.call(null,datom);
if(cljs.core.truth_(and__4120__auto__)){
return datascript.db.is_attr_QMARK_.call(null,db,datom.a,new cljs.core.Keyword("db","unique","db/unique",329396388));
} else {
return and__4120__auto__;
}
})())){
var temp__5461__auto__ = cljs.core.not_empty.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if((temp__5461__auto__ == null)){
return null;
} else {
var found = temp__5461__auto__;
throw cljs.core.ex_info.call(null,["Cannot add ",cljs.core.pr_str.call(null,datom)," because of unique constraint: ",cljs.core.pr_str.call(null,found)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","unique","transact/unique",-940992320),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),datom.a,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));
}
} else {
return null;
}
});
datascript.db.validate_eid = (function datascript$db$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.call(null,["Bad entity id ",cljs.core.pr_str.call(null,eid)," at ",cljs.core.pr_str.call(null,at),", expected number"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.db.validate_attr = (function datascript$db$validate_attr(attr,at){
if((((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string'))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Bad entity attribute ",cljs.core.pr_str.call(null,attr)," at ",cljs.core.pr_str.call(null,at),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.db.validate_val = (function datascript$db$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.call(null,["Cannot store nil as a value at ",cljs.core.pr_str.call(null,at)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
} else {
return null;
}
});
datascript.db.current_tx = (function datascript$db$current_tx(report){
return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.db.next_eid = (function datascript$db$next_eid(db){
return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.db.tx_id_QMARK_ = (function datascript$db$tx_id_QMARK_(e){
return ((cljs.core._EQ_.call(null,e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.call(null,e,":db/current-tx")) || (cljs.core._EQ_.call(null,e,"datomic.tx")) || (cljs.core._EQ_.call(null,e,"datascript.tx")));
});
datascript.db.tempid_QMARK_ = (function datascript$db$tempid_QMARK_(x){
return ((((typeof x === 'number') && ((x < (0))))) || (typeof x === 'string'));
});
datascript.db.advance_max_eid = (function datascript$db$advance_max_eid(db,eid){
var G__11868 = db;
if((((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < (536870912))))){
return cljs.core.assoc.call(null,G__11868,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid);
} else {
return G__11868;
}
});
datascript.db.allocate_eid = (function datascript$db$allocate_eid(var_args){
var G__11870 = arguments.length;
switch (G__11870) {
case 2:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.db.advance_max_eid,eid);
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
var G__11871 = report;
var G__11871__$1 = ((datascript.db.tx_id_QMARK_.call(null,e))?cljs.core.assoc_in.call(null,G__11871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid):G__11871);
var G__11871__$2 = ((datascript.db.tempid_QMARK_.call(null,e))?cljs.core.assoc_in.call(null,G__11871__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid):G__11871__$1);
return cljs.core.update_in.call(null,G__11871__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.db.advance_max_eid,eid);

});

datascript.db.allocate_eid.cljs$lang$maxFixedArity = 3;

datascript.db.with_datom = (function datascript$db$with_datom(db,datom){
datascript.db.validate_datom.call(null,db,datom);

var indexing_QMARK_ = datascript.db.indexing_QMARK_.call(null,db,datom.a);
if(cljs.core.truth_(datascript.db.datom_added.call(null,datom))){
var G__11873 = db;
var G__11873__$1 = cljs.core.update_in.call(null,G__11873,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_eavt_quick)
;
var G__11873__$2 = cljs.core.update_in.call(null,G__11873__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_aevt_quick)
;
var G__11873__$3 = ((indexing_QMARK_)?cljs.core.update_in.call(null,G__11873__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_avet_quick):G__11873__$2);
var G__11873__$4 = datascript.db.advance_max_eid.call(null,G__11873__$3,datom.e)
;
return cljs.core.assoc.call(null,G__11873__$4,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0)));

} else {
var temp__5459__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
if((temp__5459__auto__ == null)){
return db;
} else {
var removing = temp__5459__auto__;
var G__11874 = db;
var G__11874__$1 = cljs.core.update_in.call(null,G__11874,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_eavt_quick)
;
var G__11874__$2 = cljs.core.update_in.call(null,G__11874__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_aevt_quick)
;
var G__11874__$3 = ((indexing_QMARK_)?cljs.core.update_in.call(null,G__11874__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_avet_quick):G__11874__$2);
return cljs.core.assoc.call(null,G__11874__$3,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0)));

}
}
});
datascript.db.transact_report = (function datascript$db$transact_report(report,datom){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.db.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.db.reverse_ref_QMARK_ = (function datascript$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,cljs.core.name.call(null,attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.call(null,["Bad attribute type: ",cljs.core.pr_str.call(null,attr),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.db.reverse_ref = (function datascript$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),cljs.core.subs.call(null,cljs.core.name.call(null,attr),(1)));
} else {
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),["_",cljs.core.name.call(null,attr)].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__11875 = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.call(null,vec__11875,(0),null);
var ns = cljs.core.nth.call(null,vec__11875,(1),null);
var name = cljs.core.nth.call(null,vec__11875,(2),null);
if(cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,name,(1)))].join('');
} else {
return cljs.core.subs.call(null,name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return ["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
}
}
} else {
throw cljs.core.ex_info.call(null,["Bad attribute type: ",cljs.core.pr_str.call(null,attr),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.db.check_upsert_conflict = (function datascript$db$check_upsert_conflict(entity,acc){
var vec__11878 = acc;
var e = cljs.core.nth.call(null,vec__11878,(0),null);
var a = cljs.core.nth.call(null,vec__11878,(1),null);
var v = cljs.core.nth.call(null,vec__11878,(2),null);
var _e = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if((((_e == null)) || (datascript.db.tempid_QMARK_.call(null,_e)) || ((acc == null)) || ((_e === e)))){
return acc;
} else {
throw cljs.core.ex_info.call(null,["Conflicting upsert: ",cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))," resolves to ",cljs.core.pr_str.call(null,e),", but entity already has :db/id ",cljs.core.pr_str.call(null,_e)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"assertion","assertion",-1645134882),acc], null));
}
});
datascript.db.upsert_reduce_fn = (function datascript$db$upsert_reduce_fn(db,eav,a,v){
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))));
if((e == null)){
return eav;
} else {
if((eav == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,eav,(0)),e)){
return eav;
} else {
var vec__11881 = eav;
var _e = cljs.core.nth.call(null,vec__11881,(0),null);
var _a = cljs.core.nth.call(null,vec__11881,(1),null);
var _v = cljs.core.nth.call(null,vec__11881,(2),null);
throw cljs.core.ex_info.call(null,["Conflicting upserts: ",cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_a,_v], null))," resolves to ",cljs.core.pr_str.call(null,_e),", but ",cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))," resolves to ",cljs.core.pr_str.call(null,e)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_e,_a,_v], null)], null));

}
}
}
});
datascript.db.upsert_eid = (function datascript$db$upsert_eid(db,entity){
var temp__5461__auto__ = cljs.core.not_empty.call(null,datascript.db._attrs_by.call(null,db,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)));
if((temp__5461__auto__ == null)){
return null;
} else {
var idents = temp__5461__auto__;
return cljs.core.first.call(null,datascript.db.check_upsert_conflict.call(null,entity,cljs.core.reduce_kv.call(null,((function (idents,temp__5461__auto__){
return (function (eav,a,v){
if((!(cljs.core.contains_QMARK_.call(null,idents,a)))){
return eav;
} else {
if(((datascript.db.multival_QMARK_.call(null,db,a)) && (((me.tonsky.persistent_sorted_set.arrays.array_QMARK_.call(null,v)) || (((cljs.core.coll_QMARK_.call(null,v)) && ((!(cljs.core.map_QMARK_.call(null,v)))))))))){
return cljs.core.reduce.call(null,((function (idents,temp__5461__auto__){
return (function (p1__11884_SHARP_,p2__11885_SHARP_){
return datascript.db.upsert_reduce_fn.call(null,db,p1__11884_SHARP_,a,p2__11885_SHARP_);
});})(idents,temp__5461__auto__))
,eav,v);
} else {
return datascript.db.upsert_reduce_fn.call(null,db,eav,a,v);

}
}
});})(idents,temp__5461__auto__))
,null,entity)));
}
});
datascript.db.maybe_wrap_multival = (function datascript$db$maybe_wrap_multival(db,a,vs){
if((!(((datascript.db.reverse_ref_QMARK_.call(null,a)) || (datascript.db.multival_QMARK_.call(null,db,a)))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((!(((me.tonsky.persistent_sorted_set.arrays.array_QMARK_.call(null,vs)) || (((cljs.core.coll_QMARK_.call(null,vs)) && ((!(cljs.core.map_QMARK_.call(null,vs)))))))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,vs),(2))) && (datascript.db.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,vs),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.db.explode = (function datascript$db$explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var iter__4523__auto__ = ((function (eid){
return (function datascript$db$explode_$_iter__11886(s__11887){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__11887__$1 = s__11887;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11887__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__11892 = cljs.core.first.call(null,xs__6012__auto__);
var a = cljs.core.nth.call(null,vec__11892,(0),null);
var vs = cljs.core.nth.call(null,vec__11892,(1),null);
if(cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword("db","id","db/id",-1388397098))){
var _ = datascript.db.validate_attr.call(null,a,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs]));
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_.call(null,a);
var straight_a = ((reverse_QMARK_)?datascript.db.reverse_ref.call(null,a):a);
var ___$1 = ((((reverse_QMARK_) && ((!(datascript.db.ref_QMARK_.call(null,db,straight_a))))))?(function(){throw cljs.core.ex_info.call(null,["Bad attribute ",cljs.core.pr_str.call(null,a),": reverse attribute name requires {:db/valueType :db.type/ref} in schema"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs])], null))})():null);
var iterys__4519__auto__ = ((function (s__11887__$1,_,reverse_QMARK_,straight_a,___$1,vec__11892,a,vs,xs__6012__auto__,temp__5457__auto__,eid){
return (function datascript$db$explode_$_iter__11886_$_iter__11888(s__11889){
return (new cljs.core.LazySeq(null,((function (s__11887__$1,_,reverse_QMARK_,straight_a,___$1,vec__11892,a,vs,xs__6012__auto__,temp__5457__auto__,eid){
return (function (){
var s__11889__$1 = s__11889;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__11889__$1);
if(temp__5457__auto____$1){
var s__11889__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11889__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__11889__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__11891 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__11890 = (0);
while(true){
if((i__11890 < size__4522__auto__)){
var v = cljs.core._nth.call(null,c__4521__auto__,i__11890);
cljs.core.chunk_append.call(null,b__11891,((((datascript.db.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v))))?cljs.core.assoc.call(null,v,datascript.db.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))));

var G__11895 = (i__11890 + (1));
i__11890 = G__11895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11891),datascript$db$explode_$_iter__11886_$_iter__11888.call(null,cljs.core.chunk_rest.call(null,s__11889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11891),null);
}
} else {
var v = cljs.core.first.call(null,s__11889__$2);
return cljs.core.cons.call(null,((((datascript.db.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v))))?cljs.core.assoc.call(null,v,datascript.db.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))),datascript$db$explode_$_iter__11886_$_iter__11888.call(null,cljs.core.rest.call(null,s__11889__$2)));
}
} else {
return null;
}
break;
}
});})(s__11887__$1,_,reverse_QMARK_,straight_a,___$1,vec__11892,a,vs,xs__6012__auto__,temp__5457__auto__,eid))
,null,null));
});})(s__11887__$1,_,reverse_QMARK_,straight_a,___$1,vec__11892,a,vs,xs__6012__auto__,temp__5457__auto__,eid))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,datascript.db.maybe_wrap_multival.call(null,db,a,vs)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,datascript$db$explode_$_iter__11886.call(null,cljs.core.rest.call(null,s__11887__$1)));
} else {
var G__11896 = cljs.core.rest.call(null,s__11887__$1);
s__11887__$1 = G__11896;
continue;
}
} else {
var G__11897 = cljs.core.rest.call(null,s__11887__$1);
s__11887__$1 = G__11897;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__4523__auto__.call(null,entity);
});
datascript.db.transact_add = (function datascript$db$transact_add(report,p__11898){
var vec__11899 = p__11898;
var _ = cljs.core.nth.call(null,vec__11899,(0),null);
var e = cljs.core.nth.call(null,vec__11899,(1),null);
var a = cljs.core.nth.call(null,vec__11899,(2),null);
var v = cljs.core.nth.call(null,vec__11899,(3),null);
var tx = cljs.core.nth.call(null,vec__11899,(4),null);
var ent = vec__11899;
datascript.db.validate_attr.call(null,a,ent);

datascript.db.validate_val.call(null,v,ent);

var tx__$1 = (function (){var or__4131__auto__ = tx;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.db.current_tx.call(null,report);
}
})();
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.db.entid_strict.call(null,db,e);
var v__$1 = ((datascript.db.ref_QMARK_.call(null,db,a))?datascript.db.entid_strict.call(null,db,v):v);
var new_datom = datascript.db.datom.call(null,e__$1,a,v__$1,tx__$1);
if(datascript.db.multival_QMARK_.call(null,db,a)){
if(cljs.core.empty_QMARK_.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.db.transact_report.call(null,report,new_datom);
} else {
return report;
}
} else {
var temp__5459__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if((temp__5459__auto__ == null)){
return datascript.db.transact_report.call(null,report,new_datom);
} else {
var old_datom = temp__5459__auto__;
if(cljs.core._EQ_.call(null,old_datom.v,v__$1)){
return report;
} else {
return datascript.db.transact_report.call(null,datascript.db.transact_report.call(null,report,datascript.db.datom.call(null,e__$1,a,old_datom.v,tx__$1,false)),new_datom);
}
}
}
});
datascript.db.transact_retract_datom = (function datascript$db$transact_retract_datom(report,d){
var tx = datascript.db.current_tx.call(null,report);
return datascript.db.transact_report.call(null,report,datascript.db.datom.call(null,d.e,d.a,d.v,tx,false));
});
datascript.db.retract_components = (function datascript$db$retract_components(db,datoms){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (d){
return datascript.db.component_QMARK_.call(null,db,d.a);
})),cljs.core.map.call(null,(function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),d.v], null);
}))),datoms);
});
datascript.db.retry_with_tempid = (function datascript$db$retry_with_tempid(initial_report,report,es,tempid,upserted_eid){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(initial_report),tempid)){
throw cljs.core.ex_info.call(null,["Conflicting upsert: ",cljs.core.pr_str.call(null,tempid)," resolves"," both to ",cljs.core.pr_str.call(null,upserted_eid)," and ",cljs.core.pr_str.call(null,cljs.core.get_in.call(null,initial_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),tempid], null)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078)], null));
} else {
var tempids_SINGLEQUOTE_ = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),tempid,upserted_eid);
var report_SINGLEQUOTE_ = cljs.core.assoc.call(null,initial_report,new cljs.core.Keyword(null,"tempids","tempids",1767509089),tempids_SINGLEQUOTE_);
return datascript.db.transact_tx_data.call(null,report_SINGLEQUOTE_,es);
}
});
datascript.db.builtin_fn_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),null,new cljs.core.Keyword("db","cas","db/cas",-451542322),null,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),null,new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),null,new cljs.core.Keyword("db","retract","db/retract",-1549825231),null,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164),null,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172),null,new cljs.core.Keyword("db","add","db/add",235286841),null], null), null);
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
if((((initial_es == null)) || (cljs.core.sequential_QMARK_.call(null,initial_es)))){
} else {
throw cljs.core.ex_info.call(null,["Bad transaction data ",cljs.core.pr_str.call(null,initial_es),", expected sequential collection"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),initial_es], null));
}

var report = cljs.core.update.call(null,initial_report,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.transient$);
var es = initial_es;
while(true){
var vec__11919 = es;
var seq__11920 = cljs.core.seq.call(null,vec__11919);
var first__11921 = cljs.core.first.call(null,seq__11920);
var seq__11920__$1 = cljs.core.next.call(null,seq__11920);
var entity = first__11921;
var entities = seq__11920__$1;
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var map__11922 = report;
var map__11922__$1 = (((((!((map__11922 == null))))?(((((map__11922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11922):map__11922);
var tempids = cljs.core.get.call(null,map__11922__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
if(cljs.core.empty_QMARK_.call(null,es)){
return cljs.core.update.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datascript.db.current_tx.call(null,report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc),new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.persistent_BANG_);
} else {
if((entity == null)){
var G__11936 = report;
var G__11937 = entities;
report = G__11936;
es = G__11937;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(datascript.db.tx_id_QMARK_.call(null,old_eid)){
var id = datascript.db.current_tx.call(null,report);
var G__11938 = datascript.db.allocate_eid.call(null,report,old_eid,id);
var G__11939 = cljs.core.cons.call(null,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__11938;
es = G__11939;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,old_eid)){
var id = datascript.db.entid_strict.call(null,db,old_eid);
var G__11940 = report;
var G__11941 = cljs.core.cons.call(null,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__11940;
es = G__11941;
continue;
} else {
var upserted_eid = datascript.db.upsert_eid.call(null,db,entity);
if((!((upserted_eid == null)))){
if(((datascript.db.tempid_QMARK_.call(null,old_eid)) && (cljs.core.contains_QMARK_.call(null,tempids,old_eid)) && (cljs.core.not_EQ_.call(null,upserted_eid,cljs.core.get.call(null,tempids,old_eid))))){
return datascript.db.retry_with_tempid.call(null,initial_report,report,initial_es,old_eid,upserted_eid);
} else {
var G__11942 = datascript.db.allocate_eid.call(null,report,old_eid,upserted_eid);
var G__11943 = cljs.core.concat.call(null,datascript.db.explode.call(null,db,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),upserted_eid)),entities);
report = G__11942;
es = G__11943;
continue;
}
} else {
if(((typeof old_eid === 'number') || ((old_eid == null)) || (typeof old_eid === 'string'))){
var new_eid = (((old_eid == null))?datascript.db.next_eid.call(null,db):((datascript.db.tempid_QMARK_.call(null,old_eid))?(function (){var or__4131__auto__ = cljs.core.get.call(null,tempids,old_eid);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.db.next_eid.call(null,db);
}
})():old_eid
));
var new_entity = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
var G__11944 = datascript.db.allocate_eid.call(null,report,old_eid,new_eid);
var G__11945 = cljs.core.concat.call(null,datascript.db.explode.call(null,db,new_entity),entities);
report = G__11944;
es = G__11945;
continue;
} else {
throw cljs.core.ex_info.call(null,["Expected number, string or lookup ref for :db/id, got ",cljs.core.pr_str.call(null,old_eid)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));

}
}
}
}
} else {
if(cljs.core.sequential_QMARK_.call(null,entity)){
var vec__11924 = entity;
var op = cljs.core.nth.call(null,vec__11924,(0),null);
var e = cljs.core.nth.call(null,vec__11924,(1),null);
var a = cljs.core.nth.call(null,vec__11924,(2),null);
var v = cljs.core.nth.call(null,vec__11924,(3),null);
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__11927 = entity;
var seq__11928 = cljs.core.seq.call(null,vec__11927);
var first__11929 = cljs.core.first.call(null,seq__11928);
var seq__11928__$1 = cljs.core.next.call(null,seq__11928);
var _ = first__11929;
var first__11929__$1 = cljs.core.first.call(null,seq__11928__$1);
var seq__11928__$2 = cljs.core.next.call(null,seq__11928__$1);
var f = first__11929__$1;
var args = seq__11928__$2;
var G__11946 = report;
var G__11947 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__11946;
es = G__11947;
continue;
} else {
if((((op instanceof cljs.core.Keyword)) && (cljs.core.not.call(null,datascript.db.builtin_fn_QMARK_.call(null,op))))){
var temp__5459__auto__ = datascript.db.entid.call(null,db,op);
if((temp__5459__auto__ == null)){
throw cljs.core.ex_info.call(null,["Can\u2019t find entity for transaction fn ",cljs.core.pr_str.call(null,op)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));
} else {
var ident = temp__5459__auto__;
var fun = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,new cljs.core.Keyword("db","fn","db/fn",-1175261470)], null))));
var args = cljs.core.next.call(null,entity);
if(cljs.core.fn_QMARK_.call(null,fun)){
var G__11948 = report;
var G__11949 = cljs.core.concat.call(null,cljs.core.apply.call(null,fun,db,args),entities);
report = G__11948;
es = G__11949;
continue;
} else {
throw cljs.core.ex_info.call(null,["Entity ",cljs.core.pr_str.call(null,op)," expected to have :db/fn attribute with fn? value"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));
}
}
} else {
if(((datascript.db.tempid_QMARK_.call(null,e)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))))){
throw cljs.core.ex_info.call(null,["Can't use tempid in '",cljs.core.pr_str.call(null,entity),"'. Tempids are allowed in :db/add only"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"op","op",-1882987955),entity], null));
} else {
if(((cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))) || (cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","cas","db/cas",-451542322))))){
var vec__11930 = entity;
var _ = cljs.core.nth.call(null,vec__11930,(0),null);
var e__$1 = cljs.core.nth.call(null,vec__11930,(1),null);
var a__$1 = cljs.core.nth.call(null,vec__11930,(2),null);
var ov = cljs.core.nth.call(null,vec__11930,(3),null);
var nv = cljs.core.nth.call(null,vec__11930,(4),null);
var e__$2 = datascript.db.entid_strict.call(null,db,e__$1);
var ___$1 = datascript.db.validate_attr.call(null,a__$1,entity);
var ov__$1 = ((datascript.db.ref_QMARK_.call(null,db,a__$1))?datascript.db.entid_strict.call(null,db,ov):ov);
var nv__$1 = ((datascript.db.ref_QMARK_.call(null,db,a__$1))?datascript.db.entid_strict.call(null,db,nv):nv);
var ___$2 = datascript.db.validate_val.call(null,nv__$1,entity);
var datoms = cljs.core.vec.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null)));
if(datascript.db.multival_QMARK_.call(null,db,a__$1)){
if(cljs.core.truth_(cljs.core.some.call(null,((function (report,es,vec__11930,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__11924,op,e,a,v,vec__11919,seq__11920,first__11921,seq__11920__$1,entity,entities,db,map__11922,map__11922__$1,tempids){
return (function (d){
return cljs.core._EQ_.call(null,d.v,ov__$1);
});})(report,es,vec__11930,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__11924,op,e,a,v,vec__11919,seq__11920,first__11921,seq__11920__$1,entity,entities,db,map__11922,map__11922__$1,tempids))
,datoms))){
var G__11950 = datascript.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__11951 = entities;
report = G__11950;
es = G__11951;
continue;
} else {
throw cljs.core.ex_info.call(null,[":db.fn/cas failed on datom [",cljs.core.pr_str.call(null,e__$2)," ",cljs.core.pr_str.call(null,a__$1)," ",cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",21465059),datoms)),"], expected ",cljs.core.pr_str.call(null,ov__$1)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),datoms,new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
} else {
var v__$1 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
if(cljs.core._EQ_.call(null,v__$1,ov__$1)){
var G__11952 = datascript.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__11953 = entities;
report = G__11952;
es = G__11953;
continue;
} else {
throw cljs.core.ex_info.call(null,[":db.fn/cas failed on datom [",cljs.core.pr_str.call(null,e__$2)," ",cljs.core.pr_str.call(null,a__$1)," ",cljs.core.pr_str.call(null,v__$1),"], expected ",cljs.core.pr_str.call(null,ov__$1)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),cljs.core.first.call(null,datoms),new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
}
} else {
if(datascript.db.tx_id_QMARK_.call(null,e)){
var G__11954 = datascript.db.allocate_eid.call(null,report,e,datascript.db.current_tx.call(null,report));
var G__11955 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.db.current_tx.call(null,report),a,v], null),entities);
report = G__11954;
es = G__11955;
continue;
} else {
if(((datascript.db.ref_QMARK_.call(null,db,a)) && (datascript.db.tx_id_QMARK_.call(null,v)))){
var G__11956 = datascript.db.allocate_eid.call(null,report,v,datascript.db.current_tx.call(null,report));
var G__11957 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.db.current_tx.call(null,report)], null),entities);
report = G__11956;
es = G__11957;
continue;
} else {
if(((datascript.db.ref_QMARK_.call(null,db,a)) && (datascript.db.tempid_QMARK_.call(null,v)))){
var temp__5459__auto__ = cljs.core.get.call(null,tempids,v);
if((temp__5459__auto__ == null)){
var G__11958 = datascript.db.allocate_eid.call(null,report,v,datascript.db.next_eid.call(null,db));
var G__11959 = es;
report = G__11958;
es = G__11959;
continue;
} else {
var vid = temp__5459__auto__;
var G__11960 = report;
var G__11961 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null),entities);
report = G__11960;
es = G__11961;
continue;
}
} else {
if(datascript.db.tempid_QMARK_.call(null,e)){
var upserted_eid = ((datascript.db.is_attr_QMARK_.call(null,db,a,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))?new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)))):null);
var allocated_eid = cljs.core.get.call(null,tempids,e);
if(cljs.core.truth_((function (){var and__4120__auto__ = upserted_eid;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = allocated_eid;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.call(null,upserted_eid,allocated_eid);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return datascript.db.retry_with_tempid.call(null,initial_report,report,initial_es,e,upserted_eid);
} else {
var eid = (function (){var or__4131__auto__ = upserted_eid;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = allocated_eid;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return datascript.db.next_eid.call(null,db);
}
}
})();
var G__11962 = datascript.db.allocate_eid.call(null,report,e,eid);
var G__11963 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null),entities);
report = G__11962;
es = G__11963;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__11964 = datascript.db.transact_add.call(null,report,entity);
var G__11965 = entities;
report = G__11964;
es = G__11965;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))){
var temp__5459__auto__ = datascript.db.entid.call(null,db,e);
if((temp__5459__auto__ == null)){
var G__11966 = report;
var G__11967 = entities;
report = G__11966;
es = G__11967;
continue;
} else {
var e__$1 = temp__5459__auto__;
var v__$1 = ((datascript.db.ref_QMARK_.call(null,db,a))?datascript.db.entid_strict.call(null,db,v):v);
datascript.db.validate_attr.call(null,a,entity);

datascript.db.validate_val.call(null,v__$1,entity);

var temp__5459__auto____$1 = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if((temp__5459__auto____$1 == null)){
var G__11968 = report;
var G__11969 = entities;
report = G__11968;
es = G__11969;
continue;
} else {
var old_datom = temp__5459__auto____$1;
var G__11970 = datascript.db.transact_retract_datom.call(null,report,old_datom);
var G__11971 = entities;
report = G__11970;
es = G__11971;
continue;
}
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))){
var temp__5459__auto__ = datascript.db.entid.call(null,db,e);
if((temp__5459__auto__ == null)){
var G__11972 = report;
var G__11973 = entities;
report = G__11972;
es = G__11973;
continue;
} else {
var e__$1 = temp__5459__auto__;
var _ = datascript.db.validate_attr.call(null,a,entity);
var datoms = cljs.core.vec.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
var G__11974 = cljs.core.reduce.call(null,datascript.db.transact_retract_datom,report,datoms);
var G__11975 = cljs.core.concat.call(null,datascript.db.retract_components.call(null,db,datoms),entities);
report = G__11974;
es = G__11975;
continue;
}
} else {
if(((cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))) || (cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935))))){
var temp__5459__auto__ = datascript.db.entid.call(null,db,e);
if((temp__5459__auto__ == null)){
var G__11976 = report;
var G__11977 = entities;
report = G__11976;
es = G__11977;
continue;
} else {
var e__$1 = temp__5459__auto__;
var e_datoms = cljs.core.vec.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null)));
var v_datoms = cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (report,es,e_datoms,e__$1,temp__5459__auto__,vec__11924,op,e,a,v,vec__11919,seq__11920,first__11921,seq__11920__$1,entity,entities,db,map__11922,map__11922__$1,tempids){
return (function (a__$1){
return datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e_datoms,e__$1,temp__5459__auto__,vec__11924,op,e,a,v,vec__11919,seq__11920,first__11921,seq__11920__$1,entity,entities,db,map__11922,map__11922__$1,tempids))
,datascript.db._attrs_by.call(null,db,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))));
var G__11978 = cljs.core.reduce.call(null,datascript.db.transact_retract_datom,report,cljs.core.concat.call(null,e_datoms,v_datoms));
var G__11979 = cljs.core.concat.call(null,datascript.db.retract_components.call(null,db,e_datoms),entities);
report = G__11978;
es = G__11979;
continue;
}
} else {
throw cljs.core.ex_info.call(null,["Unknown operation at ",cljs.core.pr_str.call(null,entity),", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute, :db.fn/retractEntity or an ident corresponding to an installed transaction function (e.g. {:db/ident <keyword> :db/fn <Ifn>}, usage of :db/ident requires {:db/unique :db.unique/identity} in schema)"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),op,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

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
}
}
} else {
if(datascript.db.datom_QMARK_.call(null,entity)){
var vec__11933 = entity;
var e = cljs.core.nth.call(null,vec__11933,(0),null);
var a = cljs.core.nth.call(null,vec__11933,(1),null);
var v = cljs.core.nth.call(null,vec__11933,(2),null);
var tx = cljs.core.nth.call(null,vec__11933,(3),null);
var added = cljs.core.nth.call(null,vec__11933,(4),null);
if(cljs.core.truth_(added)){
var G__11980 = datascript.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v,tx], null));
var G__11981 = entities;
report = G__11980;
es = G__11981;
continue;
} else {
var G__11982 = report;
var G__11983 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,a,v], null),entities);
report = G__11982;
es = G__11983;
continue;
}
} else {
throw cljs.core.ex_info.call(null,["Bad entity type at ",cljs.core.pr_str.call(null,entity),", expected map or vector"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
break;
}
});

//# sourceMappingURL=db.js.map
