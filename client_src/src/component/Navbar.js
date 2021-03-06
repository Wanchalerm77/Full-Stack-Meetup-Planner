import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Meetups
            </a>
            <a
              data-activates="main-menu"
              className="sidenav-trigger show-on-large"
            >
              <i className="fa fa-bars" />
            </a>
            <ul id="" className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users" />
                  Meetups
                </Link>
              </li>
            </ul>
            <ul className="sidenav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="fa fa-users" />
                  Meetups
                </Link>
              </li>
              <li>
                <Link to="/meetups/add">
                  <i className="fa fa-plus" />
                  Add Meetup
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-question-circle" />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
