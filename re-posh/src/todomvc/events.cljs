(ns todomvc.events
  (:require
   [re-posh.core :as re-posh]
   [todomvc.db :as db]))

(re-posh/reg-event-ds
 ::initialize-db
 (fn [_ _]
   db/initial-db))

(re-posh/reg-event-ds
 ::set-task-status
 (fn [_ [_ id status]]
   [[:db/add id :task/done? status]]))


(re-posh/reg-event-ds
 ::set-showing-state
 (fn [_ [_ filter]]
   [[:db/add 2 :set-showing-state/set filter]]))

(re-posh/reg-event-ds
 ::set-todo-form-title
 (fn [_ [_ id value]]
   [[:db/add id :create-todo-form/title value]]))

(re-posh/reg-event-ds
 ::create-todo
 (fn [_ [_ id value]]
   [[:db/add id :create-todo-form/title ""]
    {:db/id       -1
     :app/type    :type/task
     :task/title  value
     :task/done?  "false"
     :task/cleared? "false"}]))

(re-posh/reg-event-ds
 ::complete-all-toggle
 (fn [_ [_ checked? task-ids]]
   (let [return-val (mapv (fn [x]
                            [:db/add x :task/done? (if checked?
                                                     "false"
                                                     "true")]) task-ids)]
     return-val)))

(re-posh/reg-event-ds
 ::clear-completed
 (fn [_ [_ checked-tasks]]
   (let [return-val (mapv (fn [x]
                            [:db/add x :task/cleared? "cleared"]) checked-tasks)]
     return-val)))
