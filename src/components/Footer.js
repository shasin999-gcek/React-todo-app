import React from "react";

export default class Footer extends React.Component {
	constructor() {
		super();
		this.state ={name: "Muhammed Shasin P"}
	}

	render() {
		const aStyle = {
			color: "#0a93a6", 
			textDecoration: "none"
		};

		return (
		   <footer>
        <p>
	        <a style={aStyle} href="#">
	         Made With <i className="fa fa-heart" aria-hidden="true"></i> By {this.state.name}</a>,
	         © 2017 
         </p>
		   </footer>
		);
	}
}