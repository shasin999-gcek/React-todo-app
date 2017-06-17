import React from "react";

import uuid from "uuid";

export default class AddTodo extends React.Component {
    handleSubmit(e) {
    	e.preventDefault();
    	const id = uuid.v4();
    	const name = this.refs.name.value;
    	const title = this.refs.title.value;
    	const body = this.refs.body.value;

    	this.props.addTodo({id, name, title, body});
    }

	render() {
		return (
			<div>
			  <p className="text-header">Add ToDo :-</p>
			  <form className="form-vertical" onSubmit={this.handleSubmit.bind(this)} >
			    <div className="form-control">
				  <label className="text-danger">Enter Your name: </label>
				  <input className="form-control" type="text" ref="name" />
				</div>
				<br />
				<div className="form-control">
				  <label className="text-danger">Title: </label>
				  <input className="form-control" type="text" ref="title" />
				</div>
				<br />
				<div className="form-control">
				  <label className="text-danger">Body: </label>
				  <textarea className="form-control" cols="50" rows="2" ref="body"></textarea>
				</div>
				<br />
				<button className="btn btn-outline-danger" type="submit">Submit</button>
			 </form>
			</div>
		);
	}
}
