import React from "react";



export default class TodoList extends React.Component {
	
  deleteTodo(id) {
  	this.props.deleteTodo(id);
  }

	render() {
		
		if(this.props.todos.length) {
			let list = this.props.todos.map((todo, indx) => {
				return (
				  <a key={todo.id} className="list-group-item list-group-item-action flex-column align-items-start">
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">{todo.title}</h5>
							<small>
								<button type="button" className="close" aria-label="Close" onClick={this.deleteTodo.bind(this, todo.id)}>
									<span aria-hidden="true">&times;</span>
								</button>
							</small>
						</div>
					<p className="mb-1">by {todo.name}</p>
					<small>{todo.body}</small>
					</a>
			  );
			});

			return (
				<div>
				  <p className="text-header">Todo List:-</p>
				  <div className="list-group">
						{list}
					</div>	
				</div>
			);

		} else {

			return (
				<div>
					<p className="text-header">Todo List:-</p>
					<div className="alert alert-danger" role="alert">
	  				<strong>Oh snap!</strong> There is no todo.Add One.
					</div>
				</div>
			);

		}
	}
}
