import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Todo from "./Todo";

import '../App.css';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {title: "React TODO App"};  
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="container">
          <Todo />
        </div>
        <Footer />
      </div>      
    );
  }
} 

