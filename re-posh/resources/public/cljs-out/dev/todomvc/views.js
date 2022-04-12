// Compiled by ClojureScript 1.10.520 {}
goog.provide('todomvc.views');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('re_posh.core');
goog.require('todomvc.subs');
goog.require('todomvc.events');
todomvc.views.stopwatch = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),null], null));
todomvc.views.render_create_todo_form = (function todomvc$views$render_create_todo_form(form){
var map__20930 = form;
var map__20930__$1 = (((((!((map__20930 == null))))?(((((map__20930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20930):map__20930);
var id = cljs.core.get.call(null,map__20930__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var title = cljs.core.get.call(null,map__20930__$1,new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel","div.create-task-panel",-1931340864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__20930,map__20930__$1,id,title){
return (function (p1__20929_SHARP_){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","set-todo-form-title","todomvc.events/set-todo-form-title",-1848231498),id,p1__20929_SHARP_.target.value], null));
});})(map__20930,map__20930__$1,id,title))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.create-task-button","button.create-task-button",-226982486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__20930,map__20930__$1,id,title){
return (function (){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","create-todo","todomvc.events/create-todo",-303435807),id,title], null));
});})(map__20930,map__20930__$1,id,title))
], null),"Create"], null)], null);
});
todomvc.views.create_todo_form = (function todomvc$views$create_todo_form(){
var form = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","create-todo-form","todomvc.subs/create-todo-form",-1365986454)], null));
return todomvc.views.render_create_todo_form.call(null,cljs.core.deref.call(null,form));
});
todomvc.views.render_task_list_item = (function todomvc$views$render_task_list_item(task){
var map__20932 = task;
var map__20932__$1 = (((((!((map__20932 == null))))?(((((map__20932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20932):map__20932);
var id = cljs.core.get.call(null,map__20932__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var done_QMARK_ = cljs.core.get.call(null,map__20932__$1,new cljs.core.Keyword("task","done?","task/done?",-1853689835));
var title = cljs.core.get.call(null,map__20932__$1,new cljs.core.Keyword("task","title","task/title",628775788));
var done_QMARK___$1 = ((cljs.core._EQ_.call(null,done_QMARK_,"true"))?true:false);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-list-item","div.task-list-item",-13662087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done_QMARK___$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__20932,map__20932__$1,id,done_QMARK_,title,done_QMARK___$1){
return (function (){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","set-task-status","todomvc.events/set-task-status",233835432),id,((done_QMARK___$1)?"false":"true")], null));
});})(map__20932,map__20932__$1,id,done_QMARK_,title,done_QMARK___$1))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null);
});
todomvc.views.task_list_item = (function todomvc$views$task_list_item(id){
var task = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task","todomvc.subs/task",448796172),id], null));
return ((function (task){
return (function (){
return todomvc.views.render_task_list_item.call(null,cljs.core.deref.call(null,task));
});
;})(task))
});
todomvc.views.task_list = (function todomvc$views$task_list(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
var ms = (function (){var ms = ((new Date()).valueOf() - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todomvc.views.stopwatch)));
return document.getElementById("message").innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms),"ms"].join('');
})();
return null;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var task_ids = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050)], null));
var active_task_ids = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","active-tasks","todomvc.subs/active-tasks",-1601623532)], null));
var completed = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","completed","todomvc.subs/completed",-46585890)], null));
var showing_state = new cljs.core.Keyword("set-showing-state","set","set-showing-state/set",113666204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","showing-state","todomvc.subs/showing-state",1152533322)], null))));
var all_complete_QMARK_ = ((cljs.core._EQ_.call(null,(0),(cljs.core.count.call(null,cljs.core.deref.call(null,task_ids)) - cljs.core.count.call(null,cljs.core.deref.call(null,completed)))))?true:false);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((cljs.core.count.call(null,cljs.core.deref.call(null,task_ids)) > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all","input#toggle-all",-512330812),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_complete_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task_ids,active_task_ids,completed,showing_state,all_complete_QMARK_){
return (function (){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","complete-all-toggle","todomvc.events/complete-all-toggle",-1753882617),all_complete_QMARK_,cljs.core.deref.call(null,task_ids)], null));
});})(task_ids,active_task_ids,completed,showing_state,all_complete_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-list","div.task-list",1871985110),(function (){var task_ids__$1 = (function (){var G__20934 = showing_state;
switch (G__20934) {
case "All":
return cljs.core.deref.call(null,task_ids);

break;
case "Active":
return cljs.core.deref.call(null,active_task_ids);

break;
case "Completed":
return cljs.core.deref.call(null,completed);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20934)].join('')));

}
})();
return cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (task_ids__$1,task_ids,active_task_ids,completed,showing_state,all_complete_QMARK_){
return (function todomvc$views$task_list_$_iter__20935(s__20936){
return (new cljs.core.LazySeq(null,((function (task_ids__$1,task_ids,active_task_ids,completed,showing_state,all_complete_QMARK_){
return (function (){
var s__20936__$1 = s__20936;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20936__$1);
if(temp__5457__auto__){
var s__20936__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20936__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20936__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20938 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20937 = (0);
while(true){
if((i__20937 < size__4522__auto__)){
var task_id = cljs.core._nth.call(null,c__4521__auto__,i__20937);
cljs.core.chunk_append.call(null,b__20938,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list_item,task_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),task_id], null)));

var G__20940 = (i__20937 + (1));
i__20937 = G__20940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20938),todomvc$views$task_list_$_iter__20935.call(null,cljs.core.chunk_rest.call(null,s__20936__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20938),null);
}
} else {
var task_id = cljs.core.first.call(null,s__20936__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list_item,task_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),task_id], null)),todomvc$views$task_list_$_iter__20935.call(null,cljs.core.rest.call(null,s__20936__$2)));
}
} else {
return null;
}
break;
}
});})(task_ids__$1,task_ids,active_task_ids,completed,showing_state,all_complete_QMARK_))
,null,null));
});})(task_ids__$1,task_ids,active_task_ids,completed,showing_state,all_complete_QMARK_))
;
return iter__4523__auto__.call(null,task_ids__$1);
})());
})()], null)], null);
})], null));
});
todomvc.views.footer = (function todomvc$views$footer(){
var completed = cljs.core.deref.call(null,re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","completed","todomvc.subs/completed",-46585890)], null)));
var task_ids = cljs.core.deref.call(null,re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050)], null)));
var active = (cljs.core.count.call(null,task_ids) - cljs.core.count.call(null,completed));
var radio_buttons = ((function (completed,task_ids,active){
return (function (p__20941){
var vec__20942 = p__20941;
var id = cljs.core.nth.call(null,vec__20942,(0),null);
var txt = cljs.core.nth.call(null,vec__20942,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"filters",new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),txt], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),txt], null)], null);
});})(completed,task_ids,active))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#todo-count","span#todo-count",-1116128108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active], null)," ",(function (){var G__20945 = active;
switch (G__20945) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (completed,task_ids,active,radio_buttons){
return (function (e){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","set-showing-state","todomvc.events/set-showing-state",393378112),e.target.value], null));
});})(completed,task_ids,active,radio_buttons))
], null),cljs.core.map.call(null,radio_buttons,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["all","All"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active","Active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["completed","Completed"], null)], null))], null),(((cljs.core.count.call(null,completed) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (completed,task_ids,active,radio_buttons){
return (function (){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","clear-completed","todomvc.events/clear-completed",530277798),completed], null));
});})(completed,task_ids,active,radio_buttons))
], null),"Clear completed"], null):null)], null);
});
todomvc.views.benchmark1 = (function todomvc$views$benchmark1(){
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

var n__4607__auto__ = (200);
var _ = (0);
while(true){
if((_ < n__4607__auto__)){
re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","create-todo","todomvc.events/create-todo",-303435807),(-1),"foo"], null));

var G__20947 = (_ + (1));
_ = G__20947;
continue;
} else {
return null;
}
break;
}
});
todomvc.views.benchmark2 = (function todomvc$views$benchmark2(){
var task_ids = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050)], null));
var completed = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","completed","todomvc.subs/completed",-46585890)], null));
var all_complete_QMARK_ = ((cljs.core._EQ_.call(null,(0),(cljs.core.count.call(null,cljs.core.deref.call(null,task_ids)) - cljs.core.count.call(null,cljs.core.deref.call(null,completed)))))?true:false);
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","complete-all-toggle","todomvc.events/complete-all-toggle",-1753882617),all_complete_QMARK_,cljs.core.deref.call(null,task_ids)], null));

return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","clear-completed","todomvc.events/clear-completed",530277798),cljs.core.deref.call(null,task_ids)], null));
});
todomvc.views.benchmark3 = (function todomvc$views$benchmark3(){
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

var n__4607__auto___20948 = (200);
var __20949 = (0);
while(true){
if((__20949 < n__4607__auto___20948)){
re_posh.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","create-todo","todomvc.events/create-todo",-303435807),(-1),"foo"], null));

var G__20950 = (__20949 + (1));
__20949 = G__20950;
continue;
} else {
}
break;
}

var task_ids_20951 = cljs.core.deref.call(null,re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050)], null)));
var n__4607__auto___20952 = (5);
var x_20953 = (0);
while(true){
if((x_20953 < n__4607__auto___20952)){
re_posh.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","complete-all-toggle","todomvc.events/complete-all-toggle",-1753882617),((cljs.core.even_QMARK_.call(null,x_20953))?false:true),task_ids_20951], null));

var G__20954 = (x_20953 + (1));
x_20953 = G__20954;
continue;
} else {
}
break;
}

re_posh.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","clear-completed","todomvc.events/clear-completed",530277798),task_ids_20951], null));

var n__4607__auto__ = (200);
var _ = (0);
while(true){
if((_ < n__4607__auto__)){
re_posh.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","create-todo","todomvc.events/create-todo",-303435807),(-1),"foo"], null));

var G__20955 = (_ + (1));
_ = G__20955;
continue;
} else {
return null;
}
break;
}
});
todomvc.views.benchmark4 = (function todomvc$views$benchmark4(){
var task_ids = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050)], null));
var completed = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","completed","todomvc.subs/completed",-46585890)], null));
var all_complete_QMARK_ = ((cljs.core._EQ_.call(null,(0),(cljs.core.count.call(null,cljs.core.deref.call(null,task_ids)) - cljs.core.count.call(null,cljs.core.deref.call(null,completed)))))?true:false);
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","complete-all-toggle","todomvc.events/complete-all-toggle",-1753882617),all_complete_QMARK_,cljs.core.deref.call(null,task_ids)], null));
});
todomvc.views.benchmark5 = (function todomvc$views$benchmark5(){
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

var n__4607__auto__ = (400);
var _ = (0);
while(true){
if((_ < n__4607__auto__)){
re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","create-todo","todomvc.events/create-todo",-303435807),(-1),"bar"], null));

var G__20956 = (_ + (1));
_ = G__20956;
continue;
} else {
return null;
}
break;
}
});
todomvc.views.benchmark6 = (function todomvc$views$benchmark6(){
var task_ids = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050)], null));
var completed = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","completed","todomvc.subs/completed",-46585890)], null));
var all_complete_QMARK_ = ((cljs.core._EQ_.call(null,(0),(cljs.core.count.call(null,cljs.core.deref.call(null,task_ids)) - cljs.core.count.call(null,cljs.core.deref.call(null,completed)))))?true:false);
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","complete-all-toggle","todomvc.events/complete-all-toggle",-1753882617),all_complete_QMARK_,cljs.core.deref.call(null,task_ids)], null));

return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","clear-completed","todomvc.events/clear-completed",530277798),cljs.core.deref.call(null,task_ids)], null));
});
todomvc.views.benchmark7 = (function todomvc$views$benchmark7(){
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

var n__4607__auto__ = (800);
var _ = (0);
while(true){
if((_ < n__4607__auto__)){
re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","create-todo","todomvc.events/create-todo",-303435807),(-1),"bar"], null));

var G__20957 = (_ + (1));
_ = G__20957;
continue;
} else {
return null;
}
break;
}
});
todomvc.views.benchmark8 = (function todomvc$views$benchmark8(){
var task_ids = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050)], null));
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","complete-all-toggle","todomvc.events/complete-all-toggle",-1753882617),false,cljs.core.vec.call(null,cljs.core.take.call(null,(400),cljs.core.deref.call(null,task_ids)))], null));
});
todomvc.views.benchmark9 = (function todomvc$views$benchmark9(){
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","set-showing-state","todomvc.events/set-showing-state",393378112),"Active"], null));

return document.getElementById("active").checked = true;
});
todomvc.views.benchmark10 = (function todomvc$views$benchmark10(){
var task_ids = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050)], null));
cljs.core.swap_BANG_.call(null,todomvc.views.stopwatch,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),(new Date()));

re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","set-showing-state","todomvc.events/set-showing-state",393378112),"All"], null));

re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","complete-all-toggle","todomvc.events/complete-all-toggle",-1753882617),false,cljs.core.deref.call(null,task_ids)], null));

re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","clear-completed","todomvc.events/clear-completed",530277798),cljs.core.deref.call(null,task_ids)], null));

return document.getElementById("all").checked = true;
});
todomvc.views.main_panel = (function todomvc$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-panel","div.main-panel",-705688759),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark1.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark2.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark3.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark4.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 5",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark5.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 6",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark6.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 7",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark7.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 8",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark8.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 9",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark9.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Benchmark 10",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return todomvc.views.benchmark10.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#message","div#message",1972424695)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"TodoMVC"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.create_todo_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.footer], null)], null);
});
});

//# sourceMappingURL=views.js.map
