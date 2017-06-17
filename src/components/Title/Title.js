import React from "react";


export default class Title extends React.Component {
	render() {
		return (
 			<header className="BlogHeader">{this.props.title}</header>
		);
	}
}