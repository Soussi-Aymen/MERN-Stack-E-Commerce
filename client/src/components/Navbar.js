import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark  indigo lighten-1">
        <a className="navbar-brand" href="home">
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/factures">
                Factures
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link ">Aymen Soussi</a>
            </li>
            <li className="nav-item avatar dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-5"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                  className="rounded-circle z-depth-0"
                  alt="avatar image"
                  width="35"
                  height="35"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-secondary"
                aria-labelledby="navbarDropdownMenuLink-5"
              >
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
