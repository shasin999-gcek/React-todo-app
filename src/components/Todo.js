import React from "react";

import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";

import uuid from "uuid";

export default class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}
	
	componentWillMount() {
		this.setState({
			todos: [
				{
					id: uuid.v4(),
					name: "Muhammed Shasin P",
					title: "Dinner",
					body: "Dinner with My Friends at Restaurant"
				},
				{
					id: uuid.v4(),
					name: "Alex",
					title: "Cricket",
					body: "Cricket with My Friends"
				},
				{
					id: uuid.v4(),
					name: "Rahul",
					title: "Food",
					body: "Food with My Friends at Mayuri"
				}
			]
		});
	}

  handleAddTodo(newTodo) {
  	let todos = this.state.todos;
  	todos.push(newTodo);
  	this.setState({todos});
  }

  handleDeleteTodo(id) {
  	let todos = this.state.todos;
  	let index = todos.findIndex(x => x.id === id);
  	todos.splice(index, 1);
  	this.setState({todos});
  }

	render() {
		return (
			<div className="row">
				<div className="col-5">
					<AddTodo addTodo={this.handleAddTodo.bind(this)}/>
				</div>
				<div className="col-6 offset-1">
					<TodoList todos={this.state.todos} deleteTodo={this.handleDeleteTodo.bind(this)}/>
				</div>         	  
			</div>
		);

	}
}