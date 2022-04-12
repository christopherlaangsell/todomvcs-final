// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__9650 = rest_at_QMARK_;
var G__9651 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__9650;
ls = G__9651;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))]),posh.lib.q_analyze.split_list_at.call(null,split_at_QMARK_,posh.lib.q_analyze.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_.call(null,query)))){
return posh.lib.q_analyze.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_.call(null,query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,query))){
return clojure.set.union.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.first.call(null,query)),posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)));
} else {
if(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,query))){
return cljs.core.conj.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)),cljs.core.first.call(null,query));
} else {
return posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.call(null,(3284832));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.call(null,["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_.call(null,v)) && ((!(((cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,v))) || (cljs.core.coll_QMARK_.call(null,cljs.core.second.call(null,v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.call(null,s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.call(null,n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.first.call(null,eav);
if(cljs.core.truth_(and__4120__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_.call(null,cljs.core.first.call(null,eav))));
} else {
return and__4120__auto__;
}
})())){
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,cljs.core.first.call(null,eav)),vars);
} else {
var var$ = posh.lib.q_analyze.qvar_gen.call(null);
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,var$),cljs.core.conj.call(null,vars,var$));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,eav)))?eav:cljs.core.cons.call(null,cljs.core.symbol.call(null,"$"),eav));
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,dbeav),cljs.core.concat.call(null,new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.call(null,(4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_.call(null,where)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.second.call(null,where)], null),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),where))));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,where),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
}
} else {
if(posh.lib.q_analyze.eav_QMARK_.call(null,where)){
return posh.lib.q_analyze.normalize_eav.call(null,where);
} else {
if(((cljs.core.vector_QMARK_.call(null,where)) && (cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,where))))){
return where;
} else {
if(cljs.core.coll_QMARK_.call(null,where)){
return cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first.call(null,where);
if(cljs.core.seq_QMARK_.call(null,item)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),item))));
} else {
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,item))));
}
} else {
if(posh.lib.q_analyze.eav_QMARK_.call(null,item)){
return cljs.core.cons.call(null,item,posh.lib.q_analyze.get_eavs.call(null,cljs.core.rest.call(null,where)));
} else {
if(((cljs.core.vector_QMARK_.call(null,item)) && (cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,item))))){
var ocr_9652 = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.first.call(null,item))], null),cljs.core.rest.call(null,item)));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_9652)) && ((cljs.core.count.call(null,ocr_9652) === 2)))){
try{var ocr_9652_0__9655 = cljs.core.nth.call(null,ocr_9652,(0));
if(((cljs.core.vector_QMARK_.call(null,ocr_9652_0__9655)) && ((cljs.core.count.call(null,ocr_9652_0__9655) === 5)))){
try{var ocr_9652_0__9655_0__9657 = cljs.core.nth.call(null,ocr_9652_0__9655,(0));
if(cljs.core._EQ_.call(null,ocr_9652_0__9655_0__9657,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.call(null,ocr_9652_0__9655,(1));
var e = cljs.core.nth.call(null,ocr_9652_0__9655,(2));
var a = cljs.core.nth.call(null,ocr_9652_0__9655,(3));
var v = cljs.core.nth.call(null,ocr_9652,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e9664){if((e9664 instanceof Error)){
var e__8744__auto__ = e9664;
if((e__8744__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto__;
}
} else {
throw e9664;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9663){if((e9663 instanceof Error)){
var e__8744__auto__ = e9663;
if((e__8744__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto__;
}
} else {
throw e9663;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9662){if((e9662 instanceof Error)){
var e__8744__auto__ = e9662;
if((e__8744__auto__ === cljs.core.match.backtrack)){
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));
} else {
throw e__8744__auto__;
}
} else {
throw e9662;

}
}} else {
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.call(null,(function (xs,p__9665){
var vec__9666 = p__9665;
var k = cljs.core.nth.call(null,vec__9666,(0),null);
var v = cljs.core.nth.call(null,vec__9666,(1),null);
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (r){
var vs = cljs.core.zipmap.call(null,vars,r);
return cljs.core.map.call(null,((function (vs){
return (function (eav){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (vs){
return (function (p1__9669_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__9669_SHARP_)){
return cljs.core.get.call(null,vs,p1__9669_SHARP_);
} else {
return p1__9669_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),results));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,xs))){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,posh.lib.q_analyze.count_qvars.call(null,cljs.core.first.call(null,xs)),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));
} else {
return cljs.core.merge_with.call(null,cljs.core._PLUS_,((posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,xs),(1)]):null),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4523__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__9670(s__9671){
return (new cljs.core.LazySeq(null,(function (){
var s__9671__$1 = s__9671;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9671__$1);
if(temp__5457__auto__){
var s__9671__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9671__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9671__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9673 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9672 = (0);
while(true){
if((i__9672 < size__4522__auto__)){
var r = cljs.core._nth.call(null,c__4521__auto__,i__9672);
cljs.core.chunk_append.call(null,b__9673,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})());

var G__9674 = (i__9672 + (1));
i__9672 = G__9674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9673),posh$lib$q_analyze$fill_qvar_set_$_iter__9670.call(null,cljs.core.chunk_rest.call(null,s__9671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9673),null);
}
} else {
var r = cljs.core.first.call(null,s__9671__$2);
return cljs.core.cons.call(null,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__9670.call(null,cljs.core.rest.call(null,s__9671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_.call(null,seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,seq1),cljs.core.first.call(null,seq2)),posh.lib.q_analyze.seq_merge_with.call(null,f,cljs.core.rest.call(null,seq1),cljs.core.rest.call(null,seq2)));
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.call(null,(function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with.call(null,cljs.core.conj,stacked,eav);
}),cljs.core.take.call(null,cljs.core.count.call(null,cljs.core.first.call(null,vs)),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__9677){
var vec__9678 = p__9677;
var e = cljs.core.nth.call(null,vec__9678,(0),null);
var a = cljs.core.nth.call(null,vec__9678,(1),null);
var v = cljs.core.nth.call(null,vec__9678,(2),null);
var eav = vec__9678;
var vec__9681 = cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.call(null,vec__9681,(0),null);
var qa = cljs.core.nth.call(null,vec__9681,(1),null);
var qv = cljs.core.nth.call(null,vec__9681,(2),null);
var iter__4523__auto__ = ((function (vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__9684(s__9685){
return (new cljs.core.LazySeq(null,((function (vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function (){
var s__9685__$1 = s__9685;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9685__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var ee = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__9685__$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__9684_$_iter__9686(s__9687){
return (new cljs.core.LazySeq(null,((function (s__9685__$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function (){
var s__9687__$1 = s__9687;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__9687__$1);
if(temp__5457__auto____$1){
var xs__6012__auto____$1 = temp__5457__auto____$1;
var aa = cljs.core.first.call(null,xs__6012__auto____$1);
var iterys__4519__auto__ = ((function (s__9687__$1,s__9685__$1,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__9684_$_iter__9686_$_iter__9688(s__9689){
return (new cljs.core.LazySeq(null,((function (s__9687__$1,s__9685__$1,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function (){
var s__9689__$1 = s__9689;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__9689__$1);
if(temp__5457__auto____$2){
var s__9689__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9689__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9689__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9691 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9690 = (0);
while(true){
if((i__9690 < size__4522__auto__)){
var vv = cljs.core._nth.call(null,c__4521__auto__,i__9690);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__9690,s__9689__$1,s__9687__$1,s__9685__$1,vv,c__4521__auto__,size__4522__auto__,b__9691,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function (p1__9675_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__9675_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__9690,s__9689__$1,s__9687__$1,s__9685__$1,vv,c__4521__auto__,size__4522__auto__,b__9691,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__9690,s__9689__$1,s__9687__$1,s__9685__$1,wildcard_count,vv,c__4521__auto__,size__4522__auto__,b__9691,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function (p__9692){
var vec__9693 = p__9692;
var var_QMARK_ = cljs.core.nth.call(null,vec__9693,(0),null);
var val = cljs.core.nth.call(null,vec__9693,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4120__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__9690,s__9689__$1,s__9687__$1,s__9685__$1,wildcard_count,vv,c__4521__auto__,size__4522__auto__,b__9691,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__9690,s__9689__$1,s__9687__$1,s__9685__$1,wildcard_count,exposed_qvars,vv,c__4521__auto__,size__4522__auto__,b__9691,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function (p1__9676_SHARP_){
if(cljs.core.truth_(p1__9676_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__9690,s__9689__$1,s__9687__$1,s__9685__$1,wildcard_count,exposed_qvars,vv,c__4521__auto__,size__4522__auto__,b__9691,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append.call(null,b__9691,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__9700 = (i__9690 + (1));
i__9690 = G__9700;
continue;
} else {
var G__9701 = (i__9690 + (1));
i__9690 = G__9701;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9691),posh$lib$q_analyze$pattern_from_eav__old_$_iter__9684_$_iter__9686_$_iter__9688.call(null,cljs.core.chunk_rest.call(null,s__9689__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9691),null);
}
} else {
var vv = cljs.core.first.call(null,s__9689__$2);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__9689__$1,s__9687__$1,s__9685__$1,vv,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function (p1__9675_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__9675_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__9689__$1,s__9687__$1,s__9685__$1,vv,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__9689__$1,s__9687__$1,s__9685__$1,wildcard_count,vv,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function (p__9696){
var vec__9697 = p__9696;
var var_QMARK_ = cljs.core.nth.call(null,vec__9697,(0),null);
var val = cljs.core.nth.call(null,vec__9697,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4120__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__9689__$1,s__9687__$1,s__9685__$1,wildcard_count,vv,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__9689__$1,s__9687__$1,s__9685__$1,wildcard_count,exposed_qvars,vv,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav){
return (function (p1__9676_SHARP_){
if(cljs.core.truth_(p1__9676_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__9689__$1,s__9687__$1,s__9685__$1,wildcard_count,exposed_qvars,vv,s__9689__$2,temp__5457__auto____$2,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__9684_$_iter__9686_$_iter__9688.call(null,cljs.core.rest.call(null,s__9689__$2)));
} else {
var G__9702 = cljs.core.rest.call(null,s__9689__$2);
s__9689__$1 = G__9702;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__9687__$1,s__9685__$1,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
,null,null));
});})(s__9687__$1,s__9685__$1,aa,xs__6012__auto____$1,temp__5457__auto____$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,(cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__9684_$_iter__9686.call(null,cljs.core.rest.call(null,s__9687__$1)));
} else {
var G__9703 = cljs.core.rest.call(null,s__9687__$1);
s__9687__$1 = G__9703;
continue;
}
} else {
return null;
}
break;
}
});})(s__9685__$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
,null,null));
});})(s__9685__$1,ee,xs__6012__auto__,temp__5457__auto__,vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,(cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__9684.call(null,cljs.core.rest.call(null,s__9685__$1)));
} else {
var G__9704 = cljs.core.rest.call(null,s__9685__$1);
s__9685__$1 = G__9704;
continue;
}
} else {
return null;
}
break;
}
});})(vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
,null,null));
});})(vec__9681,qe,qa,qv,vec__9678,e,a,v,eav))
;
return iter__4523__auto__.call(null,(cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4131__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_9705 = cljs.core.vec.call(null,eav);
var ocr_9706 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_9705)) && ((cljs.core.count.call(null,ocr_9705) === 3)))){
try{var ocr_9705_0__9734 = cljs.core.nth.call(null,ocr_9705,(0));
if(cljs.core._EQ_.call(null,ocr_9705_0__9734,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_9705_1__9735 = cljs.core.nth.call(null,ocr_9705,(1));
if(cljs.core._EQ_.call(null,ocr_9705_1__9735,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_9705_2__9736 = cljs.core.nth.call(null,ocr_9705,(2));
if(cljs.core._EQ_.call(null,ocr_9705_2__9736,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9810){if((e9810 instanceof Error)){
var e__8744__auto__ = e9810;
if((e__8744__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_9706)) && ((cljs.core.count.call(null,ocr_9706) === 3)))){
try{var ocr_9706_2__9739 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9739 === false)){
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9812){if((e9812 instanceof Error)){
var e__8744__auto____$1 = e9812;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9739 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9739 === true)){
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9813){if((e9813 instanceof Error)){
var e__8744__auto____$2 = e9813;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$2;
}
} else {
throw e9813;

}
}} else {
throw e__8744__auto____$1;
}
} else {
throw e9812;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9811){if((e9811 instanceof Error)){
var e__8744__auto____$1 = e9811;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9811;

}
}} else {
throw e__8744__auto__;
}
} else {
throw e9810;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9805){if((e9805 instanceof Error)){
var e__8744__auto__ = e9805;
if((e__8744__auto__ === cljs.core.match.backtrack)){
try{var ocr_9705_2__9736 = cljs.core.nth.call(null,ocr_9705,(2));
if(cljs.core._EQ_.call(null,ocr_9705_2__9736,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_9706)) && ((cljs.core.count.call(null,ocr_9706) === 3)))){
try{var ocr_9706_1__9741 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9741 === false)){
var a = cljs.core.nth.call(null,ocr_9705,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9808){if((e9808 instanceof Error)){
var e__8744__auto____$1 = e9808;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_9706_1__9741 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9741 === true)){
var a = cljs.core.nth.call(null,ocr_9705,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9809){if((e9809 instanceof Error)){
var e__8744__auto____$2 = e9809;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$2;
}
} else {
throw e9809;

}
}} else {
throw e__8744__auto____$1;
}
} else {
throw e9808;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9807){if((e9807 instanceof Error)){
var e__8744__auto____$1 = e9807;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9807;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9806){if((e9806 instanceof Error)){
var e__8744__auto____$1 = e9806;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9806;

}
}} else {
throw e__8744__auto__;
}
} else {
throw e9805;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9747){if((e9747 instanceof Error)){
var e__8744__auto__ = e9747;
if((e__8744__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_9706)) && ((cljs.core.count.call(null,ocr_9706) === 3)))){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === false)){
try{var ocr_9705_1__9735 = cljs.core.nth.call(null,ocr_9705,(1));
if(cljs.core._EQ_.call(null,ocr_9705_1__9735,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_9705_2__9736 = cljs.core.nth.call(null,ocr_9705,(2));
if(cljs.core._EQ_.call(null,ocr_9705_2__9736,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9705,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9804){if((e9804 instanceof Error)){
var e__8744__auto____$1 = e9804;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9804;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9803){if((e9803 instanceof Error)){
var e__8744__auto____$1 = e9803;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9803;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9749){if((e9749 instanceof Error)){
var e__8744__auto____$1 = e9749;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === true)){
try{var ocr_9705_2__9736 = cljs.core.nth.call(null,ocr_9705,(2));
if(cljs.core._EQ_.call(null,ocr_9705_2__9736,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_9705_1__9735 = cljs.core.nth.call(null,ocr_9705,(1));
if(cljs.core._EQ_.call(null,ocr_9705_1__9735,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9705,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9800){if((e9800 instanceof Error)){
var e__8744__auto____$2 = e9800;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === true)){
var a = cljs.core.nth.call(null,ocr_9705,(1));
var e = cljs.core.nth.call(null,ocr_9705,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9801){if((e9801 instanceof Error)){
var e__8744__auto____$3 = e9801;
if((e__8744__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === false)){
var a = cljs.core.nth.call(null,ocr_9705,(1));
var e = cljs.core.nth.call(null,ocr_9705,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9802){if((e9802 instanceof Error)){
var e__8744__auto____$4 = e9802;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$4;
}
} else {
throw e9802;

}
}} else {
throw e__8744__auto____$3;
}
} else {
throw e9801;

}
}} else {
throw e__8744__auto____$2;
}
} else {
throw e9800;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9799){if((e9799 instanceof Error)){
var e__8744__auto____$2 = e9799;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$2;
}
} else {
throw e9799;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9750){if((e9750 instanceof Error)){
var e__8744__auto____$2 = e9750;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === false)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === true)){
try{var ocr_9705_2__9736 = cljs.core.nth.call(null,ocr_9705,(2));
if(cljs.core._EQ_.call(null,ocr_9705_2__9736,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9798){if((e9798 instanceof Error)){
var e__8744__auto____$3 = e9798;
if((e__8744__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$3;
}
} else {
throw e9798;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9795){if((e9795 instanceof Error)){
var e__8744__auto____$3 = e9795;
if((e__8744__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === false)){
try{var ocr_9705_2__9736 = cljs.core.nth.call(null,ocr_9705,(2));
if(cljs.core._EQ_.call(null,ocr_9705_2__9736,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9797){if((e9797 instanceof Error)){
var e__8744__auto____$4 = e9797;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$4;
}
} else {
throw e9797;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9796){if((e9796 instanceof Error)){
var e__8744__auto____$4 = e9796;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$4;
}
} else {
throw e9796;

}
}} else {
throw e__8744__auto____$3;
}
} else {
throw e9795;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9751){if((e9751 instanceof Error)){
var e__8744__auto____$3 = e9751;
if((e__8744__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === true)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === true)){
try{var ocr_9705_1__9735 = cljs.core.nth.call(null,ocr_9705,(1));
if(cljs.core._EQ_.call(null,ocr_9705_1__9735,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9794){if((e9794 instanceof Error)){
var e__8744__auto____$4 = e9794;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$4;
}
} else {
throw e9794;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9793){if((e9793 instanceof Error)){
var e__8744__auto____$4 = e9793;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$4;
}
} else {
throw e9793;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9752){if((e9752 instanceof Error)){
var e__8744__auto____$4 = e9752;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === false)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === true)){
try{var ocr_9705_1__9735 = cljs.core.nth.call(null,ocr_9705,(1));
if(cljs.core._EQ_.call(null,ocr_9705_1__9735,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9792){if((e9792 instanceof Error)){
var e__8744__auto____$5 = e9792;
if((e__8744__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$5;
}
} else {
throw e9792;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9791){if((e9791 instanceof Error)){
var e__8744__auto____$5 = e9791;
if((e__8744__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$5;
}
} else {
throw e9791;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9753){if((e9753 instanceof Error)){
var e__8744__auto____$5 = e9753;
if((e__8744__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === true)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === false)){
try{var ocr_9705_1__9735 = cljs.core.nth.call(null,ocr_9705,(1));
if(cljs.core._EQ_.call(null,ocr_9705_1__9735,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9790){if((e9790 instanceof Error)){
var e__8744__auto____$6 = e9790;
if((e__8744__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$6;
}
} else {
throw e9790;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9789){if((e9789 instanceof Error)){
var e__8744__auto____$6 = e9789;
if((e__8744__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$6;
}
} else {
throw e9789;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9754){if((e9754 instanceof Error)){
var e__8744__auto____$6 = e9754;
if((e__8744__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === false)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === false)){
try{var ocr_9705_1__9735 = cljs.core.nth.call(null,ocr_9705,(1));
if(cljs.core._EQ_.call(null,ocr_9705_1__9735,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9788){if((e9788 instanceof Error)){
var e__8744__auto____$7 = e9788;
if((e__8744__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$7;
}
} else {
throw e9788;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9787){if((e9787 instanceof Error)){
var e__8744__auto____$7 = e9787;
if((e__8744__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$7;
}
} else {
throw e9787;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9755){if((e9755 instanceof Error)){
var e__8744__auto____$7 = e9755;
if((e__8744__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === true)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === true)){
try{var ocr_9705_0__9734 = cljs.core.nth.call(null,ocr_9705,(0));
if(cljs.core._EQ_.call(null,ocr_9705_0__9734,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9786){if((e9786 instanceof Error)){
var e__8744__auto____$8 = e9786;
if((e__8744__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$8;
}
} else {
throw e9786;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9785){if((e9785 instanceof Error)){
var e__8744__auto____$8 = e9785;
if((e__8744__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$8;
}
} else {
throw e9785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9756){if((e9756 instanceof Error)){
var e__8744__auto____$8 = e9756;
if((e__8744__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === false)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === true)){
try{var ocr_9705_0__9734 = cljs.core.nth.call(null,ocr_9705,(0));
if(cljs.core._EQ_.call(null,ocr_9705_0__9734,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9784){if((e9784 instanceof Error)){
var e__8744__auto____$9 = e9784;
if((e__8744__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$9;
}
} else {
throw e9784;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9783){if((e9783 instanceof Error)){
var e__8744__auto____$9 = e9783;
if((e__8744__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$9;
}
} else {
throw e9783;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9757){if((e9757 instanceof Error)){
var e__8744__auto____$9 = e9757;
if((e__8744__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === true)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === false)){
try{var ocr_9705_0__9734 = cljs.core.nth.call(null,ocr_9705,(0));
if(cljs.core._EQ_.call(null,ocr_9705_0__9734,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9782){if((e9782 instanceof Error)){
var e__8744__auto____$10 = e9782;
if((e__8744__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$10;
}
} else {
throw e9782;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9781){if((e9781 instanceof Error)){
var e__8744__auto____$10 = e9781;
if((e__8744__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$10;
}
} else {
throw e9781;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9758){if((e9758 instanceof Error)){
var e__8744__auto____$10 = e9758;
if((e__8744__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === false)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === false)){
try{var ocr_9705_0__9734 = cljs.core.nth.call(null,ocr_9705,(0));
if(cljs.core._EQ_.call(null,ocr_9705_0__9734,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9780){if((e9780 instanceof Error)){
var e__8744__auto____$11 = e9780;
if((e__8744__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$11;
}
} else {
throw e9780;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9779){if((e9779 instanceof Error)){
var e__8744__auto____$11 = e9779;
if((e__8744__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$11;
}
} else {
throw e9779;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9759){if((e9759 instanceof Error)){
var e__8744__auto____$11 = e9759;
if((e__8744__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === true)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === true)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === true)){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9778){if((e9778 instanceof Error)){
var e__8744__auto____$12 = e9778;
if((e__8744__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$12;
}
} else {
throw e9778;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9773){if((e9773 instanceof Error)){
var e__8744__auto____$12 = e9773;
if((e__8744__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === false)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === true)){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9777){if((e9777 instanceof Error)){
var e__8744__auto____$13 = e9777;
if((e__8744__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$13;
}
} else {
throw e9777;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9774){if((e9774 instanceof Error)){
var e__8744__auto____$13 = e9774;
if((e__8744__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === true)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === false)){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9776){if((e9776 instanceof Error)){
var e__8744__auto____$14 = e9776;
if((e__8744__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$14;
}
} else {
throw e9776;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9775){if((e9775 instanceof Error)){
var e__8744__auto____$14 = e9775;
if((e__8744__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$14;
}
} else {
throw e9775;

}
}} else {
throw e__8744__auto____$13;
}
} else {
throw e9774;

}
}} else {
throw e__8744__auto____$12;
}
} else {
throw e9773;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9760){if((e9760 instanceof Error)){
var e__8744__auto____$12 = e9760;
if((e__8744__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === false)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === true)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === true)){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9772){if((e9772 instanceof Error)){
var e__8744__auto____$13 = e9772;
if((e__8744__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$13;
}
} else {
throw e9772;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9771){if((e9771 instanceof Error)){
var e__8744__auto____$13 = e9771;
if((e__8744__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$13;
}
} else {
throw e9771;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9761){if((e9761 instanceof Error)){
var e__8744__auto____$13 = e9761;
if((e__8744__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === true)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === false)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === false)){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9770){if((e9770 instanceof Error)){
var e__8744__auto____$14 = e9770;
if((e__8744__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$14;
}
} else {
throw e9770;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9769){if((e9769 instanceof Error)){
var e__8744__auto____$14 = e9769;
if((e__8744__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$14;
}
} else {
throw e9769;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9762){if((e9762 instanceof Error)){
var e__8744__auto____$14 = e9762;
if((e__8744__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_9706_2__9745 = cljs.core.nth.call(null,ocr_9706,(2));
if((ocr_9706_2__9745 === false)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === true)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === false)){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9768){if((e9768 instanceof Error)){
var e__8744__auto____$15 = e9768;
if((e__8744__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$15;
}
} else {
throw e9768;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9764){if((e9764 instanceof Error)){
var e__8744__auto____$15 = e9764;
if((e__8744__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_9706_0__9743 = cljs.core.nth.call(null,ocr_9706,(0));
if((ocr_9706_0__9743 === false)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === true)){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9766){if((e9766 instanceof Error)){
var e__8744__auto____$16 = e9766;
if((e__8744__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_9706_1__9744 = cljs.core.nth.call(null,ocr_9706,(1));
if((ocr_9706_1__9744 === false)){
var e = cljs.core.nth.call(null,ocr_9705,(0));
var a = cljs.core.nth.call(null,ocr_9705,(1));
var v = cljs.core.nth.call(null,ocr_9705,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9767){if((e9767 instanceof Error)){
var e__8744__auto____$17 = e9767;
if((e__8744__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$17;
}
} else {
throw e9767;

}
}} else {
throw e__8744__auto____$16;
}
} else {
throw e9766;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9765){if((e9765 instanceof Error)){
var e__8744__auto____$16 = e9765;
if((e__8744__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$16;
}
} else {
throw e9765;

}
}} else {
throw e__8744__auto____$15;
}
} else {
throw e9764;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9763){if((e9763 instanceof Error)){
var e__8744__auto____$15 = e9763;
if((e__8744__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$15;
}
} else {
throw e9763;

}
}} else {
throw e__8744__auto____$14;
}
} else {
throw e9762;

}
}} else {
throw e__8744__auto____$13;
}
} else {
throw e9761;

}
}} else {
throw e__8744__auto____$12;
}
} else {
throw e9760;

}
}} else {
throw e__8744__auto____$11;
}
} else {
throw e9759;

}
}} else {
throw e__8744__auto____$10;
}
} else {
throw e9758;

}
}} else {
throw e__8744__auto____$9;
}
} else {
throw e9757;

}
}} else {
throw e__8744__auto____$8;
}
} else {
throw e9756;

}
}} else {
throw e__8744__auto____$7;
}
} else {
throw e9755;

}
}} else {
throw e__8744__auto____$6;
}
} else {
throw e9754;

}
}} else {
throw e__8744__auto____$5;
}
} else {
throw e9753;

}
}} else {
throw e__8744__auto____$4;
}
} else {
throw e9752;

}
}} else {
throw e__8744__auto____$3;
}
} else {
throw e9751;

}
}} else {
throw e__8744__auto____$2;
}
} else {
throw e9750;

}
}} else {
throw e__8744__auto____$1;
}
} else {
throw e9749;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9748){if((e9748 instanceof Error)){
var e__8744__auto____$1 = e9748;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9748;

}
}} else {
throw e__8744__auto__;
}
} else {
throw e9747;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9746){if((e9746 instanceof Error)){
var e__8744__auto__ = e9746;
if((e__8744__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__8744__auto__;
}
} else {
throw e9746;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_9814 = cljs.core.vec.call(null,eav);
var ocr_9815 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_9814)) && ((cljs.core.count.call(null,ocr_9814) === 3)))){
try{var ocr_9814_0__9840 = cljs.core.nth.call(null,ocr_9814,(0));
if(cljs.core._EQ_.call(null,ocr_9814_0__9840,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_9814_1__9841 = cljs.core.nth.call(null,ocr_9814,(1));
if(cljs.core._EQ_.call(null,ocr_9814_1__9841,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_9814_2__9842 = cljs.core.nth.call(null,ocr_9814,(2));
if(cljs.core._EQ_.call(null,ocr_9814_2__9842,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e9904){if((e9904 instanceof Error)){
var e__8744__auto__ = e9904;
if((e__8744__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_9815)) && ((cljs.core.count.call(null,ocr_9815) === 3)))){
try{var ocr_9815_2__9845 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9845 === false)){
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9906){if((e9906 instanceof Error)){
var e__8744__auto____$1 = e9906;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_9815_2__9845 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9845 === true)){
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9907){if((e9907 instanceof Error)){
var e__8744__auto____$2 = e9907;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$2;
}
} else {
throw e9907;

}
}} else {
throw e__8744__auto____$1;
}
} else {
throw e9906;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9905){if((e9905 instanceof Error)){
var e__8744__auto____$1 = e9905;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9905;

}
}} else {
throw e__8744__auto__;
}
} else {
throw e9904;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9899){if((e9899 instanceof Error)){
var e__8744__auto__ = e9899;
if((e__8744__auto__ === cljs.core.match.backtrack)){
try{var ocr_9814_2__9842 = cljs.core.nth.call(null,ocr_9814,(2));
if(cljs.core._EQ_.call(null,ocr_9814_2__9842,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_9815)) && ((cljs.core.count.call(null,ocr_9815) === 3)))){
try{var ocr_9815_1__9847 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9847 === false)){
var a = cljs.core.nth.call(null,ocr_9814,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9902){if((e9902 instanceof Error)){
var e__8744__auto____$1 = e9902;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_9815_1__9847 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9847 === true)){
var a = cljs.core.nth.call(null,ocr_9814,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9903){if((e9903 instanceof Error)){
var e__8744__auto____$2 = e9903;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$2;
}
} else {
throw e9903;

}
}} else {
throw e__8744__auto____$1;
}
} else {
throw e9902;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9901){if((e9901 instanceof Error)){
var e__8744__auto____$1 = e9901;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9901;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9900){if((e9900 instanceof Error)){
var e__8744__auto____$1 = e9900;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9900;

}
}} else {
throw e__8744__auto__;
}
} else {
throw e9899;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9853){if((e9853 instanceof Error)){
var e__8744__auto__ = e9853;
if((e__8744__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_9815)) && ((cljs.core.count.call(null,ocr_9815) === 3)))){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === false)){
try{var ocr_9814_1__9841 = cljs.core.nth.call(null,ocr_9814,(1));
if(cljs.core._EQ_.call(null,ocr_9814_1__9841,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_9814_2__9842 = cljs.core.nth.call(null,ocr_9814,(2));
if(cljs.core._EQ_.call(null,ocr_9814_2__9842,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9814,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9898){if((e9898 instanceof Error)){
var e__8744__auto____$1 = e9898;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9898;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9897){if((e9897 instanceof Error)){
var e__8744__auto____$1 = e9897;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9897;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9855){if((e9855 instanceof Error)){
var e__8744__auto____$1 = e9855;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === true)){
try{var ocr_9814_2__9842 = cljs.core.nth.call(null,ocr_9814,(2));
if(cljs.core._EQ_.call(null,ocr_9814_2__9842,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_9814_1__9841 = cljs.core.nth.call(null,ocr_9814,(1));
if(cljs.core._EQ_.call(null,ocr_9814_1__9841,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9814,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9894){if((e9894 instanceof Error)){
var e__8744__auto____$2 = e9894;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === true)){
var a = cljs.core.nth.call(null,ocr_9814,(1));
var e = cljs.core.nth.call(null,ocr_9814,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9895){if((e9895 instanceof Error)){
var e__8744__auto____$3 = e9895;
if((e__8744__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === false)){
var a = cljs.core.nth.call(null,ocr_9814,(1));
var e = cljs.core.nth.call(null,ocr_9814,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9896){if((e9896 instanceof Error)){
var e__8744__auto____$4 = e9896;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$4;
}
} else {
throw e9896;

}
}} else {
throw e__8744__auto____$3;
}
} else {
throw e9895;

}
}} else {
throw e__8744__auto____$2;
}
} else {
throw e9894;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9893){if((e9893 instanceof Error)){
var e__8744__auto____$2 = e9893;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$2;
}
} else {
throw e9893;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9856){if((e9856 instanceof Error)){
var e__8744__auto____$2 = e9856;
if((e__8744__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === false)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === true)){
try{var ocr_9814_2__9842 = cljs.core.nth.call(null,ocr_9814,(2));
if(cljs.core._EQ_.call(null,ocr_9814_2__9842,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var a = cljs.core.nth.call(null,ocr_9814,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9892){if((e9892 instanceof Error)){
var e__8744__auto____$3 = e9892;
if((e__8744__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$3;
}
} else {
throw e9892;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9891){if((e9891 instanceof Error)){
var e__8744__auto____$3 = e9891;
if((e__8744__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$3;
}
} else {
throw e9891;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9857){if((e9857 instanceof Error)){
var e__8744__auto____$3 = e9857;
if((e__8744__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_9815_2__9851 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9851 === true)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === true)){
try{var ocr_9814_1__9841 = cljs.core.nth.call(null,ocr_9814,(1));
if(cljs.core._EQ_.call(null,ocr_9814_1__9841,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9890){if((e9890 instanceof Error)){
var e__8744__auto____$4 = e9890;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$4;
}
} else {
throw e9890;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9889){if((e9889 instanceof Error)){
var e__8744__auto____$4 = e9889;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$4;
}
} else {
throw e9889;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9858){if((e9858 instanceof Error)){
var e__8744__auto____$4 = e9858;
if((e__8744__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_9815_2__9851 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9851 === false)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === true)){
try{var ocr_9814_1__9841 = cljs.core.nth.call(null,ocr_9814,(1));
if(cljs.core._EQ_.call(null,ocr_9814_1__9841,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9888){if((e9888 instanceof Error)){
var e__8744__auto____$5 = e9888;
if((e__8744__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$5;
}
} else {
throw e9888;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9887){if((e9887 instanceof Error)){
var e__8744__auto____$5 = e9887;
if((e__8744__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$5;
}
} else {
throw e9887;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9859){if((e9859 instanceof Error)){
var e__8744__auto____$5 = e9859;
if((e__8744__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_9815_2__9851 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9851 === true)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === false)){
try{var ocr_9814_1__9841 = cljs.core.nth.call(null,ocr_9814,(1));
if(cljs.core._EQ_.call(null,ocr_9814_1__9841,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9886){if((e9886 instanceof Error)){
var e__8744__auto____$6 = e9886;
if((e__8744__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$6;
}
} else {
throw e9886;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9883){if((e9883 instanceof Error)){
var e__8744__auto____$6 = e9883;
if((e__8744__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === true)){
try{var ocr_9814_0__9840 = cljs.core.nth.call(null,ocr_9814,(0));
if(cljs.core._EQ_.call(null,ocr_9814_0__9840,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9885){if((e9885 instanceof Error)){
var e__8744__auto____$7 = e9885;
if((e__8744__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$7;
}
} else {
throw e9885;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9884){if((e9884 instanceof Error)){
var e__8744__auto____$7 = e9884;
if((e__8744__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$7;
}
} else {
throw e9884;

}
}} else {
throw e__8744__auto____$6;
}
} else {
throw e9883;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9860){if((e9860 instanceof Error)){
var e__8744__auto____$6 = e9860;
if((e__8744__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_9815_2__9851 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9851 === false)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === true)){
try{var ocr_9814_0__9840 = cljs.core.nth.call(null,ocr_9814,(0));
if(cljs.core._EQ_.call(null,ocr_9814_0__9840,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9882){if((e9882 instanceof Error)){
var e__8744__auto____$7 = e9882;
if((e__8744__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$7;
}
} else {
throw e9882;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9881){if((e9881 instanceof Error)){
var e__8744__auto____$7 = e9881;
if((e__8744__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$7;
}
} else {
throw e9881;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9861){if((e9861 instanceof Error)){
var e__8744__auto____$7 = e9861;
if((e__8744__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_9815_2__9851 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9851 === true)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === false)){
try{var ocr_9814_0__9840 = cljs.core.nth.call(null,ocr_9814,(0));
if(cljs.core._EQ_.call(null,ocr_9814_0__9840,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9880){if((e9880 instanceof Error)){
var e__8744__auto____$8 = e9880;
if((e__8744__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$8;
}
} else {
throw e9880;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9874){if((e9874 instanceof Error)){
var e__8744__auto____$8 = e9874;
if((e__8744__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === true)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === true)){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9878){if((e9878 instanceof Error)){
var e__8744__auto____$9 = e9878;
if((e__8744__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === false)){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9879){if((e9879 instanceof Error)){
var e__8744__auto____$10 = e9879;
if((e__8744__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$10;
}
} else {
throw e9879;

}
}} else {
throw e__8744__auto____$9;
}
} else {
throw e9878;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9875){if((e9875 instanceof Error)){
var e__8744__auto____$9 = e9875;
if((e__8744__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === false)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === true)){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9877){if((e9877 instanceof Error)){
var e__8744__auto____$10 = e9877;
if((e__8744__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$10;
}
} else {
throw e9877;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9876){if((e9876 instanceof Error)){
var e__8744__auto____$10 = e9876;
if((e__8744__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$10;
}
} else {
throw e9876;

}
}} else {
throw e__8744__auto____$9;
}
} else {
throw e9875;

}
}} else {
throw e__8744__auto____$8;
}
} else {
throw e9874;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9862){if((e9862 instanceof Error)){
var e__8744__auto____$8 = e9862;
if((e__8744__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_9815_2__9851 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9851 === false)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === true)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === true)){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9873){if((e9873 instanceof Error)){
var e__8744__auto____$9 = e9873;
if((e__8744__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$9;
}
} else {
throw e9873;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9872){if((e9872 instanceof Error)){
var e__8744__auto____$9 = e9872;
if((e__8744__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$9;
}
} else {
throw e9872;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9863){if((e9863 instanceof Error)){
var e__8744__auto____$9 = e9863;
if((e__8744__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_9815_2__9851 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9851 === true)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === false)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === false)){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9871){if((e9871 instanceof Error)){
var e__8744__auto____$10 = e9871;
if((e__8744__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$10;
}
} else {
throw e9871;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9870){if((e9870 instanceof Error)){
var e__8744__auto____$10 = e9870;
if((e__8744__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$10;
}
} else {
throw e9870;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9864){if((e9864 instanceof Error)){
var e__8744__auto____$10 = e9864;
if((e__8744__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_9815_2__9851 = cljs.core.nth.call(null,ocr_9815,(2));
if((ocr_9815_2__9851 === false)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === true)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === false)){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9869){if((e9869 instanceof Error)){
var e__8744__auto____$11 = e9869;
if((e__8744__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$11;
}
} else {
throw e9869;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9866){if((e9866 instanceof Error)){
var e__8744__auto____$11 = e9866;
if((e__8744__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_9815_0__9849 = cljs.core.nth.call(null,ocr_9815,(0));
if((ocr_9815_0__9849 === false)){
try{var ocr_9815_1__9850 = cljs.core.nth.call(null,ocr_9815,(1));
if((ocr_9815_1__9850 === true)){
var e = cljs.core.nth.call(null,ocr_9814,(0));
var a = cljs.core.nth.call(null,ocr_9814,(1));
var v = cljs.core.nth.call(null,ocr_9814,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e9868){if((e9868 instanceof Error)){
var e__8744__auto____$12 = e9868;
if((e__8744__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$12;
}
} else {
throw e9868;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9867){if((e9867 instanceof Error)){
var e__8744__auto____$12 = e9867;
if((e__8744__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$12;
}
} else {
throw e9867;

}
}} else {
throw e__8744__auto____$11;
}
} else {
throw e9866;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9865){if((e9865 instanceof Error)){
var e__8744__auto____$11 = e9865;
if((e__8744__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$11;
}
} else {
throw e9865;

}
}} else {
throw e__8744__auto____$10;
}
} else {
throw e9864;

}
}} else {
throw e__8744__auto____$9;
}
} else {
throw e9863;

}
}} else {
throw e__8744__auto____$8;
}
} else {
throw e9862;

}
}} else {
throw e__8744__auto____$7;
}
} else {
throw e9861;

}
}} else {
throw e__8744__auto____$6;
}
} else {
throw e9860;

}
}} else {
throw e__8744__auto____$5;
}
} else {
throw e9859;

}
}} else {
throw e__8744__auto____$4;
}
} else {
throw e9858;

}
}} else {
throw e__8744__auto____$3;
}
} else {
throw e9857;

}
}} else {
throw e__8744__auto____$2;
}
} else {
throw e9856;

}
}} else {
throw e__8744__auto____$1;
}
} else {
throw e9855;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9854){if((e9854 instanceof Error)){
var e__8744__auto____$1 = e9854;
if((e__8744__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__8744__auto____$1;
}
} else {
throw e9854;

}
}} else {
throw e__8744__auto__;
}
} else {
throw e9853;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e9852){if((e9852 instanceof Error)){
var e__8744__auto__ = e9852;
if((e__8744__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__8744__auto__;
}
} else {
throw e9852;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__9909){
var vec__9910 = p__9909;
var k = cljs.core.nth.call(null,vec__9910,(0),null);
var v = cljs.core.nth.call(null,vec__9910,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__9910,k,v){
return (function (p1__9908_SHARP_){
return posh.lib.q_analyze.pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__9908_SHARP_));
});})(vec__9910,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__9914){
var vec__9915 = p__9914;
var k = cljs.core.nth.call(null,vec__9915,(0),null);
var v = cljs.core.nth.call(null,vec__9915,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__9915,k,v){
return (function (p1__9913_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__9913_SHARP_));
});})(vec__9915,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,(((((cljs.core.first.call(null,ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)])),posh.lib.q_analyze.just_qvars.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars.call(null,ins,args);
if((!(cljs.core.empty_QMARK_.call(null,varmap)))){
var qvars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.keys.call(null,varmap)));
var varvals = cljs.core.apply.call(null,cljs.core.partial.call(null,q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys.call(null,varmap)], null)),cljs.core.vals.call(null,varmap));
var varsets = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap.call(null,qvars,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.call(null,((function (qvars,varvals,varmap){
return (function (p1__9918_SHARP_){
return cljs.core.zipmap.call(null,qvars,p1__9918_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,x)){
return cljs.core.second.call(null,x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_.call(null,qfind)){
if(cljs.core.empty_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,qfind),cljs.core.nth.call(null,qfind,(2))]);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_.call(null,dbeavs)){
return null;
} else {
var vec__9919 = cljs.core.first.call(null,dbeavs);
var db = cljs.core.nth.call(null,vec__9919,(0),null);
var e = cljs.core.nth.call(null,vec__9919,(1),null);
var a = cljs.core.nth.call(null,vec__9919,(2),null);
var v = cljs.core.nth.call(null,vec__9919,(3),null);
if(((cljs.core._EQ_.call(null,var$,e)) || (((cljs.core._EQ_.call(null,var$,v)) && (posh.lib.pull_analyze.ref_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db)),a)))))){
return dbvarmap.call(null,db);
} else {
var G__9922 = var$;
var G__9923 = dbvarmap;
var G__9924 = cljs.core.rest.call(null,dbeavs);
var$ = G__9922;
dbvarmap = G__9923;
dbeavs = G__9924;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_.call(null,vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,vars),posh.lib.q_analyze.match_var_to_db.call(null,cljs.core.first.call(null,vars),dbvarmap,dbeavs)]),posh.lib.q_analyze.match_vars_to_dbs.call(null,cljs.core.rest.call(null,vars),dbvarmap,dbeavs));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs__$1)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__$1),x)){
return n;
} else {
var G__9925 = (n + (1));
var G__9926 = cljs.core.rest.call(null,xs__$1);
n = G__9925;
xs__$1 = G__9926;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__4120__auto__ = cljs.core.map_QMARK_.call(null,arg);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.call(null,(function (p1__9927_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_.call(null,p1__9927_SHARP_))){
return type.call(null,p1__9927_SHARP_);
} else {
return p1__9927_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,((posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)]):null),posh.lib.q_analyze.make_dbarg_map.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__9928){
var vec__9929 = p__9928;
var db_sym = cljs.core.nth.call(null,vec__9929,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__9929,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by.call(null,cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.call(null,(function (p1__9933_SHARP_,p2__9932_SHARP_){
if(cljs.core._EQ_.call(null,e,p2__9932_SHARP_)){
return p1__9933_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_.call(null,var_value)))){
return false;
} else {
var clause = cljs.core.first.call(null,where);
var remaining = cljs.core.rest.call(null,where);
while(true){
var pred__9937 = cljs.core._EQ_;
var expr__9938 = cljs.core.first.call(null,posh.lib.q_analyze.indexes_of.call(null,var_name,clause));
if(cljs.core.truth_(pred__9937.call(null,(1),expr__9938))){
return true;
} else {
if(cljs.core.truth_(pred__9937.call(null,(3),expr__9938))){
if(posh.lib.q_analyze.schema_ref_QMARK_.call(null,schema,cljs.core.nth.call(null,clause,(2)))){
return true;
} else {
if(cljs.core.seq.call(null,remaining)){
var G__9940 = cljs.core.first.call(null,remaining);
var G__9941 = cljs.core.rest.call(null,remaining);
clause = G__9940;
remaining = G__9941;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq.call(null,remaining)){
var G__9942 = cljs.core.first.call(null,remaining);
var G__9943 = cljs.core.rest.call(null,remaining);
clause = G__9942;
remaining = G__9943;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set.call(null,(function (){var iter__4523__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__9944(s__9945){
return (new cljs.core.LazySeq(null,(function (){
var s__9945__$1 = s__9945;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9945__$1);
if(temp__5457__auto__){
var s__9945__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9945__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9945__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9947 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9946 = (0);
while(true){
if((i__9946 < size__4522__auto__)){
var var_value = cljs.core._nth.call(null,c__4521__auto__,i__9946);
cljs.core.chunk_append.call(null,b__9947,((posh.lib.q_analyze.lookup_ref_QMARK_.call(null,schema,where,var_name,var_value))?entid_fn.call(null,db,var_value):var_value));

var G__9948 = (i__9946 + (1));
i__9946 = G__9948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9947),posh$lib$q_analyze$resolve_any_idents_$_iter__9944.call(null,cljs.core.chunk_rest.call(null,s__9945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9947),null);
}
} else {
var var_value = cljs.core.first.call(null,s__9945__$2);
return cljs.core.cons.call(null,((posh.lib.q_analyze.lookup_ref_QMARK_.call(null,schema,where,var_name,var_value))?entid_fn.call(null,db,var_value):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__9944.call(null,cljs.core.rest.call(null,s__9945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map.call(null,query));
var where = posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs.call(null,where);
var vars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,eavs));
var newqm = cljs.core.merge.call(null,qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap){
return (function (p__9953){
var vec__9954 = p__9953;
var sym = cljs.core.nth.call(null,vec__9954,(0),null);
var arg = cljs.core.nth.call(null,vec__9954,(1),null);
var or__4131__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,sym));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,dbvarmap))
,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r){
return (function (p__9957){
var vec__9958 = p__9957;
var a = cljs.core.nth.call(null,vec__9958,(0),null);
var v = cljs.core.nth.call(null,vec__9958,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
});})(qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r))
,cljs.core.filter.call(null,cljs.core.every_pred.call(null,cljs.core.vector_QMARK_,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms.call(null,posh.lib.q_analyze.create_q_datoms.call(null,r,eavs,vars));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__9961){
var vec__9962 = p__9961;
var db_sym = cljs.core.nth.call(null,vec__9962,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__9962,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db_sym)),db_datoms]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__9965){
var vec__9966 = p__9965;
var db_sym = cljs.core.nth.call(null,vec__9966,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__9966,(1),null);
var db = dbvarmap.call(null,db_sym);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null),cljs.core.vec.call(null,r))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.call(null,((function (in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__9969){
var vec__9970 = p__9969;
var seq__9971 = cljs.core.seq.call(null,vec__9970);
var first__9972 = cljs.core.first.call(null,seq__9971);
var seq__9971__$1 = cljs.core.next.call(null,seq__9971);
var db = first__9972;
var eav = seq__9971__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,db,cljs.core.map.call(null,((function (vec__9970,seq__9971,first__9972,seq__9971__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (var_name){
var temp__5455__auto__ = in_vars.call(null,var_name);
if(cljs.core.truth_(temp__5455__auto__)){
var var_value = temp__5455__auto__;
return posh.lib.q_analyze.resolve_any_idents.call(null,new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
});})(vec__9970,seq__9971,first__9972,seq__9971__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,cljs.core.concat.call(null,lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars.call(null,eavs_ins);
var linked_qvars = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__9973){
var vec__9974 = p__9973;
var k = cljs.core.nth.call(null,vec__9974,(0),null);
var v = cljs.core.nth.call(null,vec__9974,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,qvar_count)));
var rvars = cljs.core.zipmap.call(null,vars,posh.lib.q_analyze.stack_vectors.call(null,r));
var prepped_eavs = clojure.walk.postwalk(((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__9951_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_.call(null,p1__9951_SHARP_)) && (cljs.core.not.call(null,linked_qvars.call(null,p1__9951_SHARP_))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__9951_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,clojure.walk.postwalk(((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__9952_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__9952_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__9952_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs)], null):null));
})():null));
});

//# sourceMappingURL=q_analyze.js.map
