// Compiled by ClojureScript 1.10.520 {}
goog.provide('todomvc.db');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('re_posh.core');
todomvc.db.initial_db = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","create-todo-form","type/create-todo-form",-1005495771),new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831),"",new cljs.core.Keyword("create-todo-form","description","create-todo-form/description",610557882),""], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","showing-state","type/showing-state",1509809461),new cljs.core.Keyword("set-showing-state","set","set-showing-state/set",113666204),"All"], null)], null);
todomvc.db.conn = datascript.core.create_conn.call(null);
re_posh.core.connect_BANG_.call(null,todomvc.db.conn);

//# sourceMappingURL=db.js.map
