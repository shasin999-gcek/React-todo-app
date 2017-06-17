import React from "react";

import Title from "./Title/Title";
export default class Header extends React.Component {
	
	handleChange(e) {
		
	}

	render() {
		return (
		   <div>
           	  <Title title={this.props.title}></Title>
           	  <hr />
           </div>
		);

	}
}