import React from "react";

import uuid from "uuid";

export default class AddTodo extends React.Component {
  constructor() {
  	super();
  	this.state = {
  		name: "Your name",
  		title: "Title of todo",
  		body: "Body",
  		nameIsValid: true,
  		titleIsValid: true,
  		bodyIsValid: true,
  		formIsValid: true
  	};
  }

  validate(e) {
  	let isValid = true;
  	const value = e.target.value;
  	const name = e.target.name;

    if(name === "name") {
  		 isValid = value.indexOf(" ") < 0 && value !== "";
  		 this.setState({nameIsValid: isValid});
  	} else if(name === "title") {
  		 isValid = value !== "";
  		 this.setState({titleIsValid: isValid});
  	} else {
  		 isValid = value !== "";
  		 this.setState({bodyIsValid: isValid});
  	}
    
    this.setState({formIsValid: isValid});
  	this.setState({
  		[name]: value
  	});
  }

  handleSubmit(e) {
  	e.preventDefault();
  	const id = uuid.v4();
    const name = this.state.name;
    const title = this.state.title;
    const body = this.state.body;

  	this.props.addTodo({id, name, title, body});
  }

	render() {
		return (
			<div>
			  <p className="text-header">Add ToDo :-</p>
			  <form className="form-vertical" onSubmit={this.handleSubmit.bind(this)} >
				  
				  <div className={this.state.nameIsValid ? "form-group": "form-group has-danger"}>
					  <label className="form-control-label text-primary">Enter Your name: </label>
					  <input className="form-control" type="text" value={this.state.name} 
					  					name="name" onChange={this.validate.bind(this)} />
					  <div className="form-control-feedback">
					  	{this.state.nameIsValid ? "": "username not valid"}
					  </div>
					</div>
					<br />

					<div className={this.state.titleIsValid ? "form-group": "form-group has-danger"}>
					  <label className="form-control-label text-primary">Title: </label>
					  <input className="form-control" type="text" value={this.state.title} 
					  					name="title" onChange={this.validate.bind(this)} />
					  <div className="form-control-feedback">
					  	{this.state.titleIsValid ? "": "title is not valid"}
					  </div>					
					</div>
					<br />

					<div className={this.state.bodyIsValid ? "form-group": "form-group has-danger"}>
					  <label className="form-control-label text-primary">Body: </label>
					  <textarea className="form-control" value={this.state.body} 
					  					name="body" onChange={this.validate.bind(this)} />
					  <div className="form-control-feedback">
					  	{this.state.bodyIsValid ? "": "body is not valid"}
					  </div>					
					</div>
					<br />

					<button className="btn btn-outline-primary" type="submit" disabled={!this.state.formIsValid} >
								Submit
					</button>
			  </form>
			</div>
		);
	}
}
