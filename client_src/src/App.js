import React, { Component } from "react";
import "./App.css";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Main />
        </div>
        <div className="fixed-action-btn">
          <Link to="/meetups/add" className="btn-floating btm-large red">
            <i className="fa fa-plus" />
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
