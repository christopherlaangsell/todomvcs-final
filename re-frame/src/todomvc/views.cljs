(ns todomvc.views
  (:require [reagent.core  :as reagent]
            [re-frame.core :refer [subscribe dispatch]]
            [clojure.string :as str]))


(def stopwatch (atom {:start nil}))


(defn todo-input [{:keys [title on-save on-stop]}]
  (let [val  (reagent/atom title)
        stop #(do (reset! val "")
                  (when on-stop (on-stop)))
        save #(let [v (-> @val str str/trim)]
                (on-save v)
                (stop))]
    (fn [props]
      [:input (merge (dissoc props :on-save :on-stop :title)
                     {:type        "text"
                      :value       @val
                      :auto-focus  true
                      :on-blur     save
                      :on-change   #(reset! val (-> % .-target .-value))
                      :on-key-down #(case (.-which %)
                                      13 (save)
                                      27 (stop)
                                      nil)})])))


(defn todo-item
  []
  (let [editing (reagent/atom false)]
    (fn [{:keys [id done title]}]
      [:li {:class (str (when done "completed ")
                        (when @editing "editing"))}
        [:div.view
          [:input.toggle
            {:type "checkbox"
             :checked done
             :on-change #(dispatch [:toggle-done id])}]
          [:label
            {:on-double-click #(reset! editing true)}
            title]
          [:button.destroy
            {:on-click #(dispatch [:delete-todo id])}]]
        (when @editing
          [todo-input
            {:class "edit"
             :title title
             :on-save #(if (seq %)
                          (dispatch [:save id %])
                          (dispatch [:delete-todo id]))
             :on-stop #(reset! editing false)}])])))


(defn task-list
  []
  (let [visible-todos @(subscribe [:visible-todos])
        all-complete? @(subscribe [:all-complete?])]
      [:section#main
        [:input#toggle-all
          {:type "checkbox"
           :checked all-complete?
           :on-change #(dispatch [:complete-all-toggle])}]
        [:label
          {:for "toggle-all"}
          "Mark all as complete"]
        [:ul#todo-list
          (for [todo  visible-todos]
            ^{:key (:id todo)} [todo-item todo])]]))


(defn footer-controls
  []
  (let [[active done] @(subscribe [:footer-counts])
        showing       @(subscribe [:showing])
        a-fn          (fn [filter-kw txt]
                        [:a {:class (when (= filter-kw showing) "selected")
                             :href (str "#/" (name filter-kw))} txt])]
    [:footer#footer
     [:span#todo-count
      [:strong active] " " (case active 1 "item" "items") " left"]
     [:ul#filters
      [:li (a-fn :all    "All")]
      [:li (a-fn :active "Active")]
      [:li (a-fn :done   "Completed")]]
     (when (pos? done)
       [:button#clear-completed {:on-click #(dispatch [:clear-completed])}
        "Clear completed"])]))


(defn task-entry
  []
  [:header#header
    [:h1 "todos"]
    [todo-input
      {:id "new-todo"
       :placeholder "What needs to be done?"
       :on-save #(when (seq %)
                    (dispatch [:add-todo %]))}]])

(defn benchmark1 []
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 200]
    (dispatch [:add-todo "foo"])))

(defn benchmark2 []
  (swap! stopwatch assoc :start (new js/Date))
  (dispatch [:complete-all-toggle])
  (dispatch [:clear-completed]))

(defn benchmark3 []
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 200]
    (dispatch [:add-todo "foo"]))
  (dotimes [_ 5]
    (dispatch [:complete-all-toggle]))
  (dispatch [:clear-completed])
  (dotimes [_ 200]
    (dispatch [:add-todo "foo"])))

(defn benchmark4 []
  (swap! stopwatch assoc :start (new js/Date))
  (dispatch [:complete-all-toggle]))


(defn benchmark5 []
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 400]
    (dispatch [:add-todo "bar"])))


(defn benchmark6 []
  (swap! stopwatch assoc :start (new js/Date))
  (dispatch [:complete-all-toggle])
  (dispatch [:clear-completed]))

(defn benchmark7 []
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 800]
    (dispatch [:add-todo "bar"])))

(defn benchmark8 []
  (let [visible-todos @(subscribe [:visible-todos])
        todo-ids (map :id visible-todos)]
    (swap! stopwatch assoc :start (new js/Date))
    (doall (map #(dispatch [:toggle-done %]) (take 400 todo-ids)))))

(defn benchmark9 []
  (swap! stopwatch assoc :start (new js/Date))
  (. js/location (replace "#/active")))

(defn benchmark10 []
  (swap! stopwatch assoc :start (new js/Date))
  (. js/location (replace "#/all"))
  (dispatch [:complete-all-toggle])
  (dispatch [:clear-completed]))




(defn todo-app
  []
  (reagent/create-class
   {:component-did-update
    (fn []
      (let [ms (let [ms (- (.valueOf (new js/Date)) (:start @stopwatch))]
                 (set! (.-innerHTML (js/document.getElementById "message")) (str ms "ms")))]))

    :reagent-render
    (fn []
      [:<>
       [:input {:type "button" :value "Benchmark 1" :on-click #(benchmark1)}]
       [:input {:type "button" :value "Benchmark 2" :on-click #(benchmark2)}]
       [:input {:type "button" :value "Benchmark 3" :on-click #(benchmark3)}]
       [:input {:type "button" :value "Benchmark 4" :on-click #(benchmark4)}]
       [:input {:type "button" :value "Benchmark 5" :on-click #(benchmark5)}]
       [:input {:type "button" :value "Benchmark 6" :on-click #(benchmark6)}]
       ;; [:input {:type "button" :value "Benchmark 7" :on-click #(benchmark7)}]
       ;; [:input {:type "button" :value "Benchmark 8" :on-click #(benchmark8)}]
       ;; [:input {:type "button" :value "Benchmark 9" :on-click #(benchmark9)}]
       ;; [:input {:type "button" :value "Benchmark 10" :on-click #(benchmark10)}]
       [:div#message]
       [:section#todoapp
        [task-entry]
        (when (seq @(subscribe [:todos]))
          [task-list])
        [footer-controls]]
       [:footer#info
        [:p "Double-click to edit a todo"]]])}))

;; Benchmark stuff






;;(aset js/window "benchmark2"
;;  (fn [e]
;;    (dotimes [_ 200]
;;      (swap! app-state update-in [:todos] conj
;;        {:id (guid) :title "foo" :completed false}))
;;    (dotimes [_ 5]
;;      (swap! app-state update-in [:todos]
;;        (fn [todos]
;;          (map #(assoc-in % [:completed] not) todos))))
;;    (swap! app-state update-in [:todos]
;;      (fn [todos]
;;        (into [] (remove :completed todos))))))
;;
