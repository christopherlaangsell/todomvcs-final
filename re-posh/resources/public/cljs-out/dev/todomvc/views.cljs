(ns todomvc.views
  (:require
   [clojure.set :refer [difference]]
   [reagent.core :as reagent]
   [re-posh.core :refer [subscribe dispatch dispatch-sync]]
   [todomvc.subs :as subs]
   [todomvc.events :as evt]))


(def stopwatch (atom {:start nil}))

;; Create todo form
(defn render-create-todo-form [form]
  (let [{id    :db/id
         title :create-todo-form/title} form]
    [:div.create-task-panel
     [:input
      {:type "text"
       :value title
       :on-change #(dispatch [::evt/set-todo-form-title id (-> % .-target .-value)])}]
     [:button.create-task-button
      {:on-click #(dispatch [::evt/create-todo id title])}
      "Create"]]))

(defn create-todo-form []
  (let [form (subscribe [::subs/create-todo-form])]
    (render-create-todo-form @form)))

;; Task list item
(defn render-task-list-item [task]
  (let [{id :db/id
         done? :task/done?
         title :task/title} task
        done? (if (= done? "true")
                true
                false)]
    [:div.task-list-item
     [:input {:type "checkbox"
              :checked done?
              :on-change #(dispatch [::evt/set-task-status id (if done?
                                                                "false"
                                                                "true")])}]
     [:span title]]))

(defn task-list-item [id]
  (let [task (subscribe [::subs/task id])]
    (fn []
      (let []
        (render-task-list-item @task)))))

;; Task list
(defn task-list []
  (reagent/create-class
   {:component-did-update
    (fn []
      (let [ms (let [ms (- (.valueOf (new js/Date)) (:start @stopwatch))]
                 (set! (.-innerHTML (js/document.getElementById "message")) (str ms "ms")))]))
    :reagent-render
    (fn []
      (let [task-ids (subscribe [::subs/task-ids])
            active-task-ids (subscribe [::subs/active-tasks])
            completed (subscribe [::subs/completed])
            showing-state (:set-showing-state/set @(subscribe [::subs/showing-state]))
            all-complete? (if (= 0
                                 (- (count @task-ids)
                                    (count @completed)))
                            true
                            false)]

                        [:div
                         (when (pos? (count @task-ids))
                           [:div {:style {:margin-bottom "20px"}}
                            [:input#toggle-all
                             {:type "checkbox"
                              :checked all-complete?
                              :on-change #(dispatch [::evt/complete-all-toggle all-complete? @task-ids])
                              }]
                            [:label
                             {:for "toggle-all"}
                             "Mark all as complete"]])
                         [:div.task-list
                          (let [task-ids (case showing-state
                                           "All" @task-ids
                                           "Active" @active-task-ids
                                           "Completed" @completed)]
                            (doall
                             (for [task-id task-ids]
                               ^{:key task-id} [task-list-item task-id])))]]))}))

(defn footer []
  (let [completed @(subscribe [::subs/completed])
        task-ids @(subscribe [::subs/task-ids])
        active (- (count task-ids) (count completed))
        radio-buttons (fn [[id txt]]
                        [:div {:key id}
                         [:input {:name "filters" :type "radio"
                                  :id id :value txt}]
                         [:label {:for id} txt]])]
    [:div
     [:span#todo-count
      [:strong active] " " (case active 1 "item" "items") " left"]
     [:div {:on-change (fn [e]
                         (dispatch [::evt/set-showing-state
                                    (-> e .-target .-value)]))}
      (map radio-buttons [["all" "All"]
                          ["active" "Active"]
                          ["completed" "Completed"]])]
     (when (pos? (count completed))
       [:button#clear-completed
        {:on-click #(dispatch
                     [::evt/clear-completed completed])}
        "Clear completed"])]))


(defn benchmark1 []
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 200]
    (dispatch [::evt/create-todo -1 "foo"])))



(defn benchmark2 []
  (let [task-ids (subscribe [::subs/task-ids])
        completed (subscribe [::subs/completed])
        all-complete? (if (= 0
                             (- (count @task-ids)
                                (count @completed)))
                        true
                        false)]
    (swap! stopwatch assoc :start (new js/Date))
    (dispatch [::evt/complete-all-toggle all-complete? @task-ids])
    (dispatch [::evt/clear-completed @task-ids])))

(defn benchmark3 []
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 200]
    (dispatch-sync [::evt/create-todo -1 "foo"]))
  (let [task-ids @(subscribe [::subs/task-ids])]
    (dotimes [x 5]
      (dispatch-sync [::evt/complete-all-toggle (if (even? x) false true)task-ids]))
    (dispatch-sync [::evt/clear-completed task-ids]))
  (dotimes [_ 200]
    (dispatch-sync [::evt/create-todo -1 "foo"])))

(defn benchmark4 []
  (let [task-ids (subscribe [::subs/task-ids])
        completed (subscribe [::subs/completed])
        all-complete? (if (= 0
                             (- (count @task-ids)
                                (count @completed)))
                        true
                        false)]
    (swap! stopwatch assoc :start (new js/Date))
    (dispatch [::evt/complete-all-toggle all-complete? @task-ids])))


(defn benchmark5 []
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 400]
    (dispatch [::evt/create-todo -1 "bar"])))


(defn benchmark6 []
  (let [task-ids (subscribe [::subs/task-ids])
        completed (subscribe [::subs/completed])
        all-complete? (if (= 0
                             (- (count @task-ids)
                                (count @completed)))
                        true
                        false)]
    (swap! stopwatch assoc :start (new js/Date))
    (dispatch [::evt/complete-all-toggle all-complete? @task-ids])
    (dispatch [::evt/clear-completed @task-ids])))

(defn benchmark7 []
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 800]
    (dispatch [::evt/create-todo -1 "bar"])))

(defn benchmark8 []
  (let [task-ids (subscribe [::subs/task-ids])]
    (swap! stopwatch assoc :start (new js/Date))
    (dispatch [::evt/complete-all-toggle false (vec (take 400 @task-ids))])))

(defn benchmark9 []
  (swap! stopwatch assoc :start (new js/Date))
  (dispatch [::evt/set-showing-state "Active"])
  (set! (.. js/document (getElementById "active") -checked) true))

(defn benchmark10 []
  (let [task-ids (subscribe [::subs/task-ids])]
    (swap! stopwatch assoc :start (new js/Date))
    (dispatch [::evt/set-showing-state "All"])
    (dispatch [::evt/complete-all-toggle false @task-ids])
    (dispatch [::evt/clear-completed @task-ids])
    (set! (.. js/document (getElementById "all") -checked) true)))


(defn main-panel []
  (fn []
    [:div.main-panel
     [:div
      [:input {:type "button" :value "Benchmark 1" :on-click #(benchmark1)}]
      [:input {:type "button" :value "Benchmark 2" :on-click #(benchmark2)}]
      [:input {:type "button" :value "Benchmark 3" :on-click #(benchmark3)}]
      [:input {:type "button" :value "Benchmark 4" :on-click #(benchmark4)}]
      [:input {:type "button" :value "Benchmark 5" :on-click #(benchmark5)}]
      [:input {:type "button" :value "Benchmark 6" :on-click #(benchmark6)}]
      [:input {:type "button" :value "Benchmark 7" :on-click #(benchmark7)}]
      [:input {:type "button" :value "Benchmark 8" :on-click #(benchmark8)}]
      [:input {:type "button" :value "Benchmark 9" :on-click #(benchmark9)}]
      [:input {:type "button" :value "Benchmark 10" :on-click #(benchmark10)}]
      [:div#message]]
     [:h1 "TodoMVC"]
     [create-todo-form]
     [task-list]
     [footer]]))
