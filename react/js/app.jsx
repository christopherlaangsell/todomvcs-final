/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};





(function () {
	'use strict';

	app.ALL_TODOS = 'all';
	app.ACTIVE_TODOS = 'active';
	app.COMPLETED_TODOS = 'completed';
	var TodoFooter = app.TodoFooter;
	var TodoItem = app.TodoItem;

	var ENTER_KEY = 13;


	var TodoApp = React.createClass({
		getInitialState: function () {
			return {
				nowShowing: app.ALL_TODOS,
				editing: null,
				newTodo: ''
			};
		},


    componentDidUpdate: function () {
			let finish = new Date;
			let ms =  finish - this.start;
			document.getElementById("message").innerHTML = ms + " ms";
		},




		componentDidMount: function () {
			var setState = this.setState;
			var router = Router({
				'/': setState.bind(this, {nowShowing: app.ALL_TODOS}),
				'/active': setState.bind(this, {nowShowing: app.ACTIVE_TODOS}),
				'/completed': setState.bind(this, {nowShowing: app.COMPLETED_TODOS})
			});
			router.init('/');
		},

		handleChange: function (event) {
			this.setState({newTodo: event.target.value});
		},

		handleNewTodoKeyDown: function (event) {
			if (event.keyCode !== ENTER_KEY) {
				return;
			}

			event.preventDefault();

			var val = this.state.newTodo.trim();

			if (val) {
				this.props.model.addTodo(val);
				this.setState({newTodo: ''});
			}
		},

		toggleAll: function (event) {
			var checked = event.target.checked;
			this.props.model.toggleAll(checked);
		},

		toggle: function (todoToToggle) {
			this.props.model.toggle(todoToToggle);
		},

		destroy: function (todo) {
			this.props.model.destroy(todo);
		},

		edit: function (todo) {
			this.setState({editing: todo.id});
		},

		save: function (todoToSave, text) {
			this.props.model.save(todoToSave, text);
			this.setState({editing: null});
		},



		cancel: function () {
			this.setState({editing: null});
		},

		clearCompleted: function () {
			this.props.model.clearCompleted();
		},

    benchmark1: function (){
      this.start = new Date;
      for (let i = 0; i < 200; i++){
        this.props.model.addTodo("foo");
      }
    },

		handleCheck: function (){
      let checked = document.getElementById("toggle-all").checked;
      document.getElementById("toggle-all").checked = !checked;
      return !checked;
    },

    benchmarkToggle: function (checked){
			this.props.model.toggleAll(checked);
    },

    benchmark2: function () {
      let checked = this.handleCheck();
      this.start = new Date;
      this.benchmarkToggle(checked);
      this.clearCompleted();
		},


    benchmark3: function() {
      // let checked = document.getElementById("toggle-all").checked;
      // It's important to note I only have the following line included for the
      // future benchmark tests. Please change if the toggle loop becomes even, not odd.
      // Why don't I just add it in the toggle logic? I don't want to change the timing
      // of this benchmark compared to the other apps because of the different logic -
      // none of the other apps make calls to the document variable.
      // document.getElementById("toggle-all").checked = !checked;

      this.start = new Date;
      for (let i = 0; i < 200; i++){
        this.props.model.addTodo("foo");
      }
      let checked = false;
      for (let i = 0; i < 5; i++){
        checked = !checked;
        this.benchmarkToggle(checked);
      }
      for (let i = 0; i < 200; i++) {
        this.props.model.addTodo("foo");
      }
    },

    benchmark4: function() {
      let checked = this.handleCheck();
      this.start = new Date;
      this.benchmarkToggle(checked);
    },


    benchmark5: function (){
      this.start = new Date;
      for (let i = 0; i < 400; i++) {
        this.props.model.addTodo("bar");
      }
    },

    benchmark6: function (){
      let checked = this.handleCheck();
      this.start = new Date;
      this.benchmarkToggle(checked);
      this.clearCompleted();
    } ,

    benchmark7: function (){
      this.start = new Date;
      for (let i = 0; i < 800; i++) {
        this.props.model.addTodo("bar");
      }
    },

    benchmark8: function (){
      this.start = new Date;
      for (let i = 0; i < 400; i++) {
        this.props.model.addTodo("bar");
      }
    },

    benchmark9: function (){
      this.start = new Date;
      for (let i = 0; i < 400; i++) {
        this.props.model.addTodo("bar");
      }
    },

    benchmark10: function (){
      this.start = new Date;
      for (let i = 0; i < 400; i++) {
        this.props.model.addTodo("bar");
      }
    },


		render: function () {
			var footer;
			var main;
			var todos = this.props.model.todos;


			var shownTodos = todos.filter(function (todo) {
				switch (this.state.nowShowing) {
				case app.ACTIVE_TODOS:
					return !todo.completed;
				case app.COMPLETED_TODOS:
					return todo.completed;
				default:
					return true;
				}
			}, this);



			var todoItems = shownTodos.map(function (todo) {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						onToggle={this.toggle.bind(this, todo)}
						onDestroy={this.destroy.bind(this, todo)}
						onEdit={this.edit.bind(this, todo)}
						editing={this.state.editing === todo.id}
						onSave={this.save.bind(this, todo)}
						onCancel={this.cancel}
					/>
				);
			}, this);

			var activeTodoCount = todos.reduce(function (accum, todo) {
				return todo.completed ? accum : accum + 1;
			}, 0);

			var completedCount = todos.length - activeTodoCount;

			if (activeTodoCount || completedCount) {
				footer =
					<TodoFooter
						count={activeTodoCount}
						completedCount={completedCount}
						nowShowing={this.state.nowShowing}
						onClearCompleted={this.clearCompleted}
					/>;
			}

			if (todos.length) {
				main = (
					<section className="main">
						<input
							id="toggle-all"
							className="toggle-all"
							type="checkbox"
							onChange={this.toggleAll}
							checked={activeTodoCount === 0}
						/>
						<label
							htmlFor="toggle-all"
						/>
						<ul className="todo-list">
							{todoItems}
						</ul>
					</section>
				);
			}

			return (
				<div>
					<div>
            <input type="button" value="Benchmark 1" onClick={this.benchmark1}/>
            <input type="button" value="Benchmark 2" onClick={this.benchmark2}/>
            <input type="button" value="Benchmark 3" onClick={this.benchmark3}/>
            <input type="button" value="Benchmark 4" onClick={this.benchmark4}/>
            <input type="button" value="Benchmark 5" onClick={this.benchmark5}/>
            <input type="button" value="Benchmark 6" onClick={this.benchmark6}/>
            <input type="button" value="Benchmark 7" onClick={this.benchmark7}/>
            <input type="button" value="Benchmark 8" onClick={this.benchmark8}/>
            <input type="button" value="Benchmark 9" onClick={this.benchmark9}/>
            <input type="button" value="Benchmark 10" onClick={this.benchmark10}/>
					</div>
          <div id="message"></div>
					<header className="header">
						<h1>todos</h1>
						<input
							className="new-todo"
							placeholder="What needs to be done?"
							value={this.state.newTodo}
							onKeyDown={this.handleNewTodoKeyDown}
							onChange={this.handleChange}
							autoFocus={true}
						/>
					</header>
					{main}
					{footer}
				</div>
			);
		}
	});

	var model = new app.TodoModel('react-todos');

	function render() {
		React.render(
			<TodoApp model={model}/>,
			document.getElementsByClassName('todoapp')[0]
		);
	}

	model.subscribe(render);
	render();
})();
