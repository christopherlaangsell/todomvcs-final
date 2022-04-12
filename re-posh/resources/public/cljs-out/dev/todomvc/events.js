// Compiled by ClojureScript 1.10.520 {}
goog.provide('todomvc.events');
goog.require('cljs.core');
goog.require('re_posh.core');
goog.require('todomvc.db');
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","initialize-db","todomvc.events/initialize-db",-1124970039),(function (_,___$1){
return todomvc.db.initial_db;
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","set-task-status","todomvc.events/set-task-status",233835432),(function (_,p__19963){
var vec__19964 = p__19963;
var ___$1 = cljs.core.nth.call(null,vec__19964,(0),null);
var id = cljs.core.nth.call(null,vec__19964,(1),null);
var status = cljs.core.nth.call(null,vec__19964,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("task","done?","task/done?",-1853689835),status], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","set-showing-state","todomvc.events/set-showing-state",393378112),(function (_,p__19967){
var vec__19968 = p__19967;
var ___$1 = cljs.core.nth.call(null,vec__19968,(0),null);
var filter = cljs.core.nth.call(null,vec__19968,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(2),new cljs.core.Keyword("set-showing-state","set","set-showing-state/set",113666204),filter], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","set-todo-form-title","todomvc.events/set-todo-form-title",-1848231498),(function (_,p__19971){
var vec__19972 = p__19971;
var ___$1 = cljs.core.nth.call(null,vec__19972,(0),null);
var id = cljs.core.nth.call(null,vec__19972,(1),null);
var value = cljs.core.nth.call(null,vec__19972,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831),value], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","create-todo","todomvc.events/create-todo",-303435807),(function (_,p__19975){
var vec__19976 = p__19975;
var ___$1 = cljs.core.nth.call(null,vec__19976,(0),null);
var id = cljs.core.nth.call(null,vec__19976,(1),null);
var value = cljs.core.nth.call(null,vec__19976,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","task","type/task",-1539067719),new cljs.core.Keyword("task","title","task/title",628775788),value,new cljs.core.Keyword("task","done?","task/done?",-1853689835),"false",new cljs.core.Keyword("task","cleared?","task/cleared?",1697004488),"false"], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","complete-all-toggle","todomvc.events/complete-all-toggle",-1753882617),(function (_,p__19979){
var vec__19980 = p__19979;
var ___$1 = cljs.core.nth.call(null,vec__19980,(0),null);
var checked_QMARK_ = cljs.core.nth.call(null,vec__19980,(1),null);
var task_ids = cljs.core.nth.call(null,vec__19980,(2),null);
var return_val = cljs.core.mapv.call(null,((function (vec__19980,___$1,checked_QMARK_,task_ids){
return (function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),x,new cljs.core.Keyword("task","done?","task/done?",-1853689835),(cljs.core.truth_(checked_QMARK_)?"false":"true")], null);
});})(vec__19980,___$1,checked_QMARK_,task_ids))
,task_ids);
return return_val;
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","clear-completed","todomvc.events/clear-completed",530277798),(function (_,p__19983){
var vec__19984 = p__19983;
var ___$1 = cljs.core.nth.call(null,vec__19984,(0),null);
var checked_tasks = cljs.core.nth.call(null,vec__19984,(1),null);
var return_val = cljs.core.mapv.call(null,((function (vec__19984,___$1,checked_tasks){
return (function (x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),x,new cljs.core.Keyword("task","cleared?","task/cleared?",1697004488),"cleared"], null);
});})(vec__19984,___$1,checked_tasks))
,checked_tasks);
return return_val;
}));

//# sourceMappingURL=events.js.map
