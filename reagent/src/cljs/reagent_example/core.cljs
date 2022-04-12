(ns reagent-example.core
  ;; (:require
  ;;  [reagent.core :as reagent :refer [atom]]
  ;;  [reagent.dom :as rdom]
  ;;  [reagent.session :as session]
  ;;  [reitit.frontend :as reitit]
  ;;  [clerk.core :as clerk]
  ;;  [accountant.core :as accountant])
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

(def stopwatch (atom {:start nil}))

;; (aset js/window "benchmark1"
;;       (fn [e]
;;         (swap! stopwatch assoc :start (new js/Date))
;;         (dotimes [_ 200]
;;           (add-todo "foo"))))


(defonce todos (r/atom (sorted-map)))

(defonce counter (r/atom 0))

(defn add-todo [text]
  (let [id (swap! counter inc)]
    (swap! todos assoc id {:id id :title text :done false})))




(defn toggle [id] (swap! todos update-in [id :done] not))
(defn save [id title] (swap! todos assoc-in [id :title] title))
(defn delete [id] (swap! todos dissoc id))

(defn mmap [m f a] (->> m (f a) (into (empty m))))
(defn complete-all [v] (swap! todos mmap map #(assoc-in % [1 :done] v)))
(defn clear-done [] (swap! todos mmap remove #(get-in % [1 :done])))

(defonce init (do
                (add-todo "Rename Cloact to Reagent")
                (add-todo "Add undo demo")
                (add-todo "Make all rendering async")
                (add-todo "Allow any arguments to component functions")
                (complete-all true)))


(defn benchmark1 []
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 200]
    (add-todo "foo")))

(defn benchmark2 [active]
  (swap! stopwatch assoc :start (new js/Date))
  (complete-all (pos? active))
  (clear-done)
  )

(defn benchmark3 [active]
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 200]
    (add-todo "foo"))
  (dotimes [_ 5]
    (complete-all (pos? active)))
  (clear-done)
  (dotimes [_ 200]
    (add-todo "foo")))

(defn benchmark4 [active]
  (swap! stopwatch assoc :start (new js/Date))
  (complete-all (pos? active)))

(defn benchmark5 [active]
  (swap! stopwatch assoc :start (new js/Date))
  (dotimes [_ 400]
    (add-todo "bar")))

(defn benchmark6 [active]
  (swap! stopwatch assoc :start (new js/Date))
  (complete-all (pos? active))
  (clear-done))



(defn todo-input [{:keys [title on-save on-stop]}]
  (let [val (r/atom title)
        stop #(do (reset! val "")
                  (if on-stop (on-stop)))
        save #(let [v (-> @val str str/trim)]
                (if-not (empty? v) (on-save v))
                (stop))]
    (fn [{:keys [id class placeholder]}]
      [:input {:type "text" :value @val
               :id id :class class :placeholder placeholder
               :on-blur save
               :on-change #(reset! val (-> % .-target .-value))
               :on-key-down #(case (.-which %)
                               13 (save)
                               27 (stop)
                               nil)}])))

(def todo-edit (with-meta todo-input
                 {:component-did-mount #(.focus (rdom/dom-node %))}))

(defn todo-stats [{:keys [filt active done]}]
  (let [props-for (fn [name]
                    {:class (if (= name @filt) "selected")
                     :on-click #(reset! filt name)})]
    [:div
     [:span#todo-count
      [:strong active] " " (case active 1 "item" "items") " left"]
     [:ul#filters
      [:li [:a (props-for :all) "All"]]
      [:li [:a (props-for :active) "Active"]]
      [:li [:a (props-for :done) "Completed"]]]
     (when (pos? done)
       [:button#clear-completed {:on-click clear-done}
        "Clear completed " done])]))

(defn todo-item []
  (let [editing (r/atom false)]
    (fn [{:keys [id done title]}]
      [:li {:class (str (if done "completed ")
                        (if @editing "editing"))}
       [:div.view
        [:input.toggle {:type "checkbox" :checked done
                        :on-change #(toggle id)}]
        [:label {:on-double-click #(reset! editing true)} title]
        [:button.destroy {:on-click #(delete id)}]]
       (when @editing
         [todo-edit {:class "edit" :title title
                     :on-save #(save id %)
                     :on-stop #(reset! editing false)}])])))

(defn todo-app [props]
  (let [filt (r/atom :all)]
    (r/create-class
     {:component-did-update
      (fn []
        (let [ms (let [ms (- (.valueOf (new js/Date)) (:start @stopwatch))]
                   (set! (.-innerHTML (js/document.getElementById "message")) (str ms "ms")))]))

      :reagent-render
      (fn []
        (let [items (vals @todos)
              done (->> items (filter :done) count)
              active (- (count items) done)]
          [:div
           [:input {:type "button" :value "Benchmark 1" :on-click #(benchmark1)}]
           [:input {:type "button" :value "Benchmark 2" :on-click #(benchmark2 active)}]
           [:input {:type "button" :value "Benchmark 3" :on-click #(benchmark3 active)}]
           [:input {:type "button" :value "Benchmark 4" :on-click #(benchmark4 active)}]
           [:input {:type "button" :value "Benchmark 5" :on-click #(benchmark5 active)}]
           [:input {:type "button" :value "Benchmark 6" :on-click #(benchmark6 active)}]
           [:div#message]
           [:section#todoapp
            [:header#header
             [:h1 "todos"]
             [todo-input {:id "new-todo"
                          :placeholder "What needs to be done?"
                          :on-save add-todo}]]
            (when (-> items count pos?)
              [:div
               [:section#main
                [:input#toggle-all {:type "checkbox" :checked (zero? active)
                                    :on-change #(complete-all (pos? active))}]
                [:label {:for "toggle-all"} "Mark all as complete"]
                [:ul#todo-list
                 (for [todo (filter (case @filt
                                      :active (complement :done)
                                      :done :done
                                      :all identity) items)]
                   ^{:key (:id todo)} [todo-item todo])]]
               [:footer#footer
                [todo-stats {:active active :done done :filt filt}]]])]
           [:footer#info
            [:p "Double-click to edit a todo"]]]))})))

(defn mount-root []
  (rdom/render [todo-app] (js/document.getElementById "app")))

(defn init! []
  (mount-root))

;; -------------------------
;; Routes

;; (def router
;;   (reitit/router
;;    [["/" :index]
;;     ["/items"
;;      ["" :items]
;;      ["/:item-id" :item]]
;;     ["/about" :about]]))

;; (defn path-for [route & [params]]
;;   (if params
;;     (:path (reitit/match-by-name router route params))
;;     (:path (reitit/match-by-name router route))))

;; ;; -------------------------
;; ;; Page components

;; (defn home-page []
;;   (fn []
;;     [:span.main
;;      [:h1 "Welcome to reagent-example"]
;;      [:ul
;;       [:li [:a {:href (path-for :items)} "Items of reagent-example"]]
;;       [:li [:a {:href "/broken/link"} "Broken link"]]]]))



;; (defn items-page []
;;   (fn []
;;     [:span.main
;;      [:h1 "The items of reagent-example"]
;;      [:ul (map (fn [item-id]
;;                  [:li {:name (str "item-" item-id) :key (str "item-" item-id)}
;;                   [:a {:href (path-for :item {:item-id item-id})} "Item: " item-id]])
;;                (range 1 60))]]))


;; (defn item-page []
;;   (fn []
;;     (let [routing-data (session/get :route)
;;           item (get-in routing-data [:route-params :item-id])]
;;       [:span.main
;;        [:h1 (str "Item " item " of reagent-example")]
;;        [:p [:a {:href (path-for :items)} "Back to the list of items"]]])))


;; (defn about-page []
;;   (fn [] [:span.main
;;           [:h1 "About reagent-example"]]))


;; ;; -------------------------
;; ;; Translate routes -> page components

;; (defn page-for [route]
;;   (case route
;;     :index #'home-page
;;     :about #'about-page
;;     :items #'items-page
;;     :item #'item-page))


;; ;; -------------------------
;; ;; Page mounting component

;; (defn current-page []
;;   (fn []
;;     (let [page (:current-page (session/get :route))]
;;       [:div
;;        [:header
;;         [:p [:a {:href (path-for :index)} "Home"] " | "
;;          [:a {:href (path-for :about)} "About reagent-example"]]]
;;        [page]
;;        [:footer
;;         [:p "reagent-example was generated by the "
;;          [:a {:href "https://github.com/reagent-project/reagent-template"} "Reagent Template"] "."]]])))

;; ;; -------------------------
;; ;; Initialize app

;; (defn mount-root []
;;   (rdom/render [current-page] (.getElementById js/document "app")))

;; (defn init! []
;;   (clerk/initialize!)
;;   (accountant/configure-navigation!
;;    {:nav-handler
;;     (fn [path]
;;       (let [match (reitit/match-by-path router path)
;;             current-page (:name (:data  match))
;;             route-params (:path-params match)]
;;         (reagent/after-render clerk/after-render!)
;;         (session/put! :route {:current-page (page-for current-page)
;;                               :route-params route-params})
;;         (clerk/navigate-page! path)
;;         ))
;;     :path-exists?
;;     (fn [path]
;;       (boolean (reitit/match-by-path router path)))})
;;   (accountant/dispatch-current!)
;;   (mount-root))
