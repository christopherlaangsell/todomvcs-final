// Compiled by ClojureScript 1.10.520 {}
goog.provide('todomvc.core');
goog.require('cljs.core');
goog.require('re_posh.core');
goog.require('todomvc.events');
goog.require('todomvc.subs');
goog.require('reagent.dom');
goog.require('todomvc.views');
goog.require('reagent.core');
todomvc.core.mount_app_element = (function todomvc$core$mount_app_element(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.main_panel], null),document.getElementById("app"));
});
todomvc.core.init = (function todomvc$core$init(){
re_posh.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","initialize-db","todomvc.events/initialize-db",-1124970039)], null));

return todomvc.core.mount_app_element.call(null);
});
todomvc.core.on_reload = (function todomvc$core$on_reload(){
return todomvc.core.mount_app_element.call(null);
});
if((typeof todomvc !== 'undefined') && (typeof todomvc.core !== 'undefined') && (typeof todomvc.core.initialize_block !== 'undefined')){
} else {
todomvc.core.initialize_block = (function (){
re_posh.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","initialize-db","todomvc.events/initialize-db",-1124970039)], null));

todomvc.core.mount_app_element.call(null);

return true;
})()
;
}

//# sourceMappingURL=core.js.map
